var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("test/api/config/env.proporties");
 const {faker} = require("@faker-js/faker");
const axios = require("axios");
//import axios from 'axios';

//const { expect } = require("chai");




var zoomHostID;

describe("Base URL from Property File Tests", async () => {
  const hostName = faker.person.firstName();
  const hostEmail = faker.string.alphanumeric(5);
  const api_key = faker.string.numeric({ length: { min: 5, max: 10 } });
  const secret_key = faker.string.numeric({ length: { min: 5, max: 10 } });
  const noOfParticipatants = faker.number.int({ max: 100 });

  it("Zoom Hosts Creating", async () => {
    // console.log(properties.get("baseUrl"));
    // const res = await axios.get(properties.get("baseUrl") + '/users');
    // console.log(res.data);
    // await expect(res.status).equal(200);
    // await expect(res.data.page).equal(1);
    // await expect(res.data.per_page).equal(6);

    const res = await axios
      .post(
        "https://uat.lms.excelr.com/api/v4/batch/add/zoom-host",
        {
          // "name": randomName,
          // "job": randomJobTitle,

          host_name: hostName,
          host_email: hostEmail + "@gmail.com",
          provider: "Zoom",
          api_key: api_key,
          secret_key: secret_key,
          participants_allowed: noOfParticipatants,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIwMTU1MzkzNzA1NDkzMTg4LCJkYXRhIjp7ImlkIjoiMTQ5NmUzMTktMDdmNS00N2UzLTllYWEtNzg5NmYzZDMwMTU4IiwiZW1haWwiOiJhZG1pbkB5b3BtYWlsLmNvbSIsInVzZXJfdHlwZSI6MX0sImlhdCI6MTcwNTQ5MzE4OH0.kzWJyjXbXq02qi4cuFEOADLyxDHbtcnIQm6IMHKZvao",
          },
        }
      )
      .then((res) => res.data);
    console.log(res);
    zoomHostID = res.data.result.id;
    console.log("Extracted ID : " + zoomHostID);
  });

  it("Batch Creating", async () => {
    const res = await axios
      .post(
        "https://uat.lms.excelr.com/api/v5/batch/add/batch",
        {
          days: ["Sunday", "Saturday"],
          name: hostName,
          courseId: "bd33dbce-bcfc-40f1-8dcc-96a57dbba2b0",
          zoomHostId: zoomHostID,
          tags: ["b11b6fce-bd48-4876-b17f-78af64f21ce7"],
          lecturingModeId: "0005ad6a-f03a-4ab7-ac48-dbd4f43bc378",
          enroll_start_date: "2024-01-16T18:30:00.000Z",
          enroll_end_date: "2024-01-17T18:30:00.000Z",
          start_date_time: "2024-01-25T06:35:00.000Z",
          end_date_time: "2024-01-26T18:30:00.000Z",
          session_duration_hours: "5",
          max_students: "5",
          session_count: "5",
          batch_type: "Free",
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIwMTU1MzkzNzA1NDkzMTg4LCJkYXRhIjp7ImlkIjoiMTQ5NmUzMTktMDdmNS00N2UzLTllYWEtNzg5NmYzZDMwMTU4IiwiZW1haWwiOiJhZG1pbkB5b3BtYWlsLmNvbSIsInVzZXJfdHlwZSI6MX0sImlhdCI6MTcwNTQ5MzE4OH0.kzWJyjXbXq02qi4cuFEOADLyxDHbtcnIQm6IMHKZvao",
          },
        }
      )
      .then((res) => res.data);
    console.log(res);
    // console.log(res.data.result.id);
  });
    
   
});
