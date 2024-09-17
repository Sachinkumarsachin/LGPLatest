const fs = require('fs');
const path = require('path');

const resultsDir = 'allure-results';
const outputFile = 'allure-data.csv';

// Known spec file names
const specFileNames = {
    "DetailsScreen": "../test/specs/Web/DetailsScreen.spec.ts"
};

// Function to read JSON files from the results directory
function readJsonFiles(resultsDir) {
    const files = fs.readdirSync(resultsDir);
    const jsonData = [];

    files.forEach(file => {
        if (file.endsWith('-result.json')) {
            const filePath = path.join(resultsDir, file);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            jsonData.push(data);
        }
    });

    return jsonData;
}

// Function to extract data from JSON files
function extractData(jsonData) {
    const testResults = [];

    jsonData.forEach(data => {
        const { name, status, start, stop, fullName, historyId } = data;
        const duration = (stop - start) / 1000; // Convert to seconds

        // Attempt to extract spec file name
        let specFileName = 'Unknown';
        for (const key in specFileNames) {
            if (fullName && fullName.includes(key)) {
                specFileName = specFileNames[key];
                break;
            } else if (historyId && historyId.includes(key)) {
                specFileName = specFileNames[key];
                break;
            }
        }

        if (specFileName === specFileNames["DetailsScreen"]) {
            testResults.push({ specFileName, name, status, duration });
        }
    });

    return testResults;
}

// Function to write data to a CSV file
function writeCsvFile(testResults, outputFile) {
    const csvContent = 'Spec File Name,Name,Status,Duration (s)\n' + testResults.map(result => `${result.specFileName},${result.name},${result.status},${result.duration}`).join('\n');
    fs.writeFileSync(outputFile, csvContent);
    console.log(`Data extracted to ${outputFile}`);
}

// Main script execution
const jsonData = readJsonFiles(resultsDir);
const testResults = extractData(jsonData);
writeCsvFile(testResults, outputFile);
