const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");
import Page from "../../pageobjects/admin/page";
import payloads from "./requestPayloads.ts";
import testdata from "../../testdata/apiurls.json";
import Utils from "../../Utils/assertions.ts";


const APiurl = require("../../testdata/Apiurls.ts");
const envurl = APiurl[process.env.ENV];

//Auto gerated Email Id for Student ----------------------------------------
function generateRandomLowerCase(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const EmailID = generateRandomLowerCase(3);
const name = generateRandomLowerCase(5);
export const SubAdminEmail = EmailID + "SubAdmin@yopmail.com"
export let SubAdminPassword = "Test@123"
export var UnRegisteredStudent_EmailID = EmailID + "unregstudent@yopmail.com"
export var UnRegisteredStudent_Password = "Test@1234"
export var RegisteredStudent_EmailID = EmailID + "regolystudent@yopmail.com"
export var RegisteredStudent_Password = "Test@1234"
export var RegisteredStudent_AssignedProduct_EmailID = EmailID + "proregstudent@yopmail.com"
export var StudentEmail = EmailID + "proregstudent@yopmail.com"
export var RegisteredStudent_AssignedProduct_Password = "Test@1234"
export var Auto_TrainerEmail = EmailID + "proregtrainer@yopmail.com"
export var Auto_TrainerEmail_Password = "Test@1234"
let Sub_AdminID ;
//Auto gerated Email Id for Student ----------------------------------------


//public var zoomHostID;
export var zoomHostID;
var admintoken;
var adminUserID;
var studenttoken;
export var studentUserID;
var trainertoken;
var trainerUserID;
export var Auto_trainerEmailID;
var Auto_trainerUserID;
export var tagCategoryName;
var tagCategoryId;
export var tagName;
var tagId;
export var courseName;
var courseId;
export var batchName;
var batchId;
var SessionId;
export var productCategoryName;
var productCategoryId;
export var productName;
var productId
export var premiumproductName;
var premiumproductId
export var AssignmentName
var AssignmentId
export var ProjectName
var ProjectId
export var SectionId
export var SectionName
export var Sub_SectionName
export var Sub_SectionId
export var AnnouncementID
export var AnnouncementName
export var AnnouncementDesc
export var AnnouncementTitle
var RegStudentToken
var RegStudentID
var Reg_product_Student_Token
export var Reg_product_Student_ID
// export var StudentEmail
export var StudentFirstName
export var StudentLastName
export var practice_quizeName;
export var practice_quizeId;
export var Section_quizName
var Section_quizId
export var Sub_Section_quizName
var Sub_Section_quizId
export var graded_quizeName;
export var graded_quizeId;
var Test_StudentToken
export var Test_StudentID
export var SubSec_Element_quizeName;
var SubSec_ElementId;
export var sessionName;
export let facultyResourceID;
export var facultyResourceFileName;

class PostRequest extends Page {
  //nithin------------------------------------------------
  /*
  * **********************************
  * Method to print the Auto Gentrated  Email ID 
  * "https://uat.lms.excelr.com/api/v5/auth/users/signup"
  * ***********************************
  */
  public async Auto_Gerated_Credentials() {
    driver.logUtil("INFO", "Non Regstred User Email ID : " + UnRegisteredStudent_EmailID);
    driver.logUtil("INFO", "Regstred User[With Out Assigning Courses,Product,Batch ] Email ID  : " + RegisteredStudent_EmailID);
    driver.logUtil("INFO", "Regstred User[With Assigning Courses,Product,Batch ] Email ID  : " + RegisteredStudent_AssignedProduct_EmailID);
    driver.logUtil("INFO", "New Trainer add by admin[With Assigning Courses,Product,Batch ] Email ID  : " + Auto_TrainerEmail);
  }

  /*
   * **********************************
   * Method to signUp_Student
   * "https://uat.lms.excelr.com/api/v5/auth/users/signup"
   * ***********************************
   */
  public async signUp_StudentAPi(Eamil: string, Password: string) {
    const res = await axios
      .post(envurl + testdata.Auth_SignUpURL.studentSignUp,
      // .post("https://qaauto.lms.excelr.com/api/v6/auth/users/sign-up",
        payloads.Student_Signup_PayLoad(Eamil, Password),
        {
          headers: {
            'Content-Type': "application/json"
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      driver.logUtil("PASS", "SignUp Student API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + " _Student");
    } else {
      driver.logUtil("FAIL", "SignUP Student API Failed _Response Code " + res.statusCode + " _Response message " + res.message + " _Student");
    }
  }
  /*
   * **********************************
   * Method to Verify OTP[This method should not be used in scrpiting ]
   * "https://uat.lms.excelr.com/api/v5/auth/users/signup"
   * ***********************************
   */
  public async verifyOTP_StudentAPi(Eamil: string, UserType: string) {
    const res = await axios
      .post(envurl + testdata.Auth_SignUpURL.studentVerifyOTP,
      // .post("https://qaauto.lms.excelr.com/api/v6/auth/users/verifyOtp",
        payloads.Student_VerifyOTP_PayLoad(Eamil)
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      if (UserType == "RegisteredStudentOnly") {
        //  console.log(res);
        RegStudentToken = res.data.token;
        RegStudentID = res.data.user.id;
        console.log("RegisteredUserOnly_::Reg_Student_Bearer Token Code :: " + RegStudentToken);
        console.log("RegisteredUserOnly_::Reg_Student_User ID :: " + RegStudentID);
      } else {
        //  console.log(res);
        Reg_product_Student_Token = res.data.token;
        Reg_product_Student_ID = res.data.user.id;
        console.log("Registered_User_Producted_Added_::Reg_Student_Bearer Token Code :: " + Reg_product_Student_Token);
        console.log("Registered_User_Producted_Added_::Reg_Student_User ID :: " + Reg_product_Student_ID);
      }
      driver.logUtil("PASS", "Verify OTP API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Student");
    } else {
      driver.logUtil("FAIL", "Verify OTP API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Student");
    }
  }

  /*
   * **********************************
   * Method to Verify OTP[this method is to be used only of reg.. test cases scrpiting ]
   * "https://uat.lms.excelr.com/api/v5/auth/users/signup"
   * ***********************************
   */
  public async verifyOTP_Student_Test_APi(Eamil: string) {
    const res = await axios
      .post(envurl + testdata.Auth_SignUpURL.studentVerifyOTP,
      // .post("https://qaauto.lms.excelr.com/api/v6/auth/users/verifyOtp",
        payloads.Student_VerifyOTP_PayLoad(Eamil)
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      //  console.log(res);
      Test_StudentToken = res.data.token;
      Test_StudentID = res.data.user.id;
      console.log("Student_Bearer Token Code :: " + Test_StudentToken);
      console.log("Student_User ID :: " + Test_StudentID);
      driver.logUtil("PASS", "Verify OTP API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Student");
    } else {
      driver.logUtil("FAIL", "Verify OTP API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Student");
    }
  }


  /*
   * **********************************
   * Method to Add New Trainer [this method is to be used only of reg.. test cases scrpiting ]
   * "https://uat.lms.excelr.com/api/v5/auth/users/signup"
   * ***********************************
   */
  public async AddNew_Trainer_Test_APi(Eamil: string) {
    const res = await axios
      .post(envurl + testdata.Auth_SignUpURL.AddNewTrainer,
      // .post("https://uat.lms.excelr.com/api/v8/admin/add/trainer",
        payloads.Add_Trainer_PayLoad(Eamil),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      //  console.log(res);
      Auto_trainerEmailID = res.data.result.email;
      Auto_trainerUserID = res.data.result.id;
      console.log("Trainer_EmailID :: " + Auto_trainerEmailID);
      console.log("Trainer_User ID :: " + Auto_trainerUserID);
      driver.logUtil("PASS", "Added Trainer By Admin API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Trainer");
    } else {
      driver.logUtil("FAIL", "Added Trainer By Admin API API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Trainer");
    }
  }


  /*
       * **********************************
       * Method to Delete trainer
       * This method Required the trainer Id which need to be deleted 
       * ***********************************
   */
  public async DeleteTrainer(UserMailID: string, UserId: String) {
    await browser.pause(3000);
    const res = await axios
    .delete(envurl + testdata.Auth_SignUpURL.DeleteTrainer + UserId,
      // .delete("https://uat.lms.excelr.com/api/v8/admin/delete/sub-admin?id=" + UserId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Deleted the Trainer " + " StudentMailID : " + UserMailID + " ::: Trainer ID : " + UserId);
    } else {
      await driver.logUtil("FAIL", " Failed To Delete the Trainer Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
       * **********************************
       * Method to Delete Student
       * This method Required the Student Id which need to be deleted 
       * ***********************************
   */
  public async DeleteStudent(UserMailID: string, UserId: String) {
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.Auth_SignUpURL.studentDelete + UserId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Deleted the Student " + " StudentMailID : " + UserMailID + " ::: Student ID : " + UserId);
    } else {
      await driver.logUtil("FAIL", " Failed To Delete the Student Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
       * **********************************
       * Method to Delete Student
       * This method Required the Student Id which need to be deleted 
       * ***********************************
   */
  public async DeleteStudent_Test(UserMailID: string) {
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.Auth_SignUpURL.studentDelete + Test_StudentID,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Deleted the Student " + " StudentMailID : " + UserMailID + " ::: Student ID : " + Test_StudentID);
    } else {
      await driver.logUtil("FAIL", " Failed To Delete the Student Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }



  /*
   * **********************************
   * Method to Regstrer New User [this usre will be regstred only ]
   * ***********************************
   */
  public async RegisteredStudent_Only() {
    await browser.pause(3000);
    await this.signUp_StudentAPi(RegisteredStudent_EmailID, RegisteredStudent_Password);
    await browser.pause(5000);
    await this.verifyOTP_StudentAPi(RegisteredStudent_EmailID, "RegisteredStudentOnly");
    driver.logUtil("INFO", " Registration of User Sucessfully Done With Out Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_EmailID);
  }

  /*
   * **********************************
   * Method to Regstrer New User [this usre will be regstred and add Product  ]
   * ***********************************
   */
  public async RegisteredStudent_Product() {
    await browser.pause(3000);
    await this.signUp_StudentAPi(RegisteredStudent_AssignedProduct_EmailID, RegisteredStudent_AssignedProduct_Password);
    await browser.pause(5000);
    await this.verifyOTP_StudentAPi(RegisteredStudent_AssignedProduct_EmailID, "RegisteredStudent_Product");
    driver.logUtil("INFO", "Registration of User Sucessfully Done With  Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_AssignedProduct_EmailID);
  }

  /*
   * **********************************
   * Method to Regstrer New User [this usre will be regstred only ]
   * ***********************************
   */
  public async Delete_RegisteredStudent_Only() {
    await browser.pause(3000);
    await this.DeleteStudent(RegisteredStudent_EmailID, RegStudentID);
    await browser.pause(5000);
    driver.logUtil("INFO", "Registered User With Out Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_EmailID + "Sucessfully Deleted");
  }

  /*
  * **********************************
  * Method to Regstrer New User [this usre will be regstred and add Product  ]
  * ***********************************
  */
  public async Delete_RegisteredStudent_Product() {
    await browser.pause(3000);
    await this.DeleteStudent(RegisteredStudent_AssignedProduct_EmailID, Reg_product_Student_ID);
    await browser.pause(5000);
    driver.logUtil("INFO", "Registered User With  Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_AssignedProduct_EmailID + " Sucessfully Deleted");
  }

  /*
  * **********************************
  * Method to Regstrer New trainer [this usre will be regstred and add Product  ]
  * ***********************************
  */
  public async Add_Trainer_ByAdmin_Batch() {
    await browser.pause(3000);
    await this.AddNew_Trainer_Test_APi(Auto_TrainerEmail);
    await browser.pause(5000);
    driver.logUtil("INFO", "Add New Trainer  With  Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_AssignedProduct_EmailID + " Sucessfully ");
  }

  /*
  * **********************************
  * Method to Delete New trainer [this usre will be regstred and add Product ]
  * ***********************************
  */
  public async Delete_Trainer_ByAdmin_Batch() {
    await browser.pause(3000);
    await this.DeleteTrainer(Auto_TrainerEmail,Auto_trainerUserID);
    await browser.pause(5000);
    driver.logUtil("INFO", "Deleted  Trainer With  Assigning Courses,Product,Batch for the  Email ID  : " + RegisteredStudent_AssignedProduct_EmailID + " Sucessfully Deleted");
  }

  /*
   * **********************************
   * Method to get bearre Token of admin
   * This Method will get admin auth token and Admin ID 
   * "https://uat.lms.excelr.com/api/v5/auth/users/login"
   * ***********************************
   */
  public async createBearerToken_Admin() {
    const res = await axios
      .post(envurl + testdata.Auth_loginURL.Adminlogin,
        payloads.Admin_bearerToken_PayLoad(testdata.LoginData.Admin.Admin_UserName, testdata.LoginData.Admin.Admin_Password)
      )
      .then((res) => res.data);
    //console.log(res);
    if (res.statusCode === 200) {
      admintoken = res.data.token;
      adminUserID = res.data.user.id;
      console.log("Admin_Bearer Token Code :: " + admintoken);
      console.log("Admin_User ID :: " + adminUserID);
      driver.logUtil("PASS", "Login API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Admin");
    } else {
      driver.logUtil("FAIL", "Login API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Admin");
    }
  }

  /*
   * **********************************
   * Method to get bearre Token of Student
   * This Method will get Student auth token and Student ID 
   * "https://uat.lms.excelr.com/api/v5/auth/users/login"
   * ***********************************
   */
  public async createBearerToken_Student() {
    const res = await axios
      .post(envurl + testdata.Auth_loginURL.studentlogin,
        payloads.Student_bearerToken_PayLoad(testdata.LoginData.Student.Student_UserName, testdata.LoginData.Student.Student_Password)
      )
      .then((res) => res.data);
    //console.log(res);
    if (res.statusCode === 200) {
      studenttoken = res.data.token;
      studentUserID = res.data.user.id;
      console.log("Student_Bearer Token Code :: " + studenttoken);
      console.log("Student_User ID :: " + studentUserID);
      driver.logUtil("PASS", "Login API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Student");
    } else {
      driver.logUtil("FAIL", "Login API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Student");
    }
  }

  /*
   * **********************************
   * Method to get bearre Token of Trainer
   * This Method will get Trainer auth token and Trainer ID 
   * "https://uat.lms.excelr.com/api/v5/auth/users/login"
   * ***********************************
   */
  public async createBearerToken_Trainer() {
    const res = await axios
      .post(envurl + testdata.Auth_loginURL.Trainerlogin,
        payloads.Trainer_bearerToken_PayLoad(Auto_TrainerEmail,Auto_TrainerEmail_Password)
      )
      .then((res) => res.data);
    //console.log(res);
    if (res.statusCode === 200) {
      trainertoken = res.data.token;
      trainerUserID = res.data.user.id;
      console.log("Trainer_Bearer Token Code :: " + trainertoken);
      console.log("Trainer_User ID :: " + trainerUserID);
      driver.logUtil("PASS", "Login API Passed _Response Code " + res.statusCode + " _Response message : " + res.message + "_Trainer");
    } else {
      driver.logUtil("FAIL", "Login API Failed _Response Code " + res.statusCode + " _Response message " + res.message + "_Trainer");
    }
  }

  /*
     * **********************************
     * Method to Create TagCategory
     * This Method will return TagCategory Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v5/tag/create/tag/category"
     * ***********************************
  */
  public async createTagCategory() {
    const res = await axios
      .post(envurl + testdata.TagsUrl.CreateTagCategory,
        // .post("https://uat.lms.excelr.com/api/v9/tag/create/tag/category",
        payloads.createTagCategory_PayLoad(),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      tagCategoryName = res.data.result.name;
      tagCategoryId = res.data.result.id;
      await driver.logUtil("PASS", "Tag Category created Sucessfully through API " + " Tag Category Name :  " + tagCategoryName + " TagCategoryID : " + tagCategoryId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Tag Category  _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Create Tag
     * This Method will return Tag Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v5/tag/create/tag"
     * ***********************************
  */
  public async createTag() {
    const res = await axios
      .post(envurl + testdata.TagsUrl.CreateTag,
        payloads.createTag_PayLoad(tagCategoryId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      tagName = res.data.result.name;
      tagId = res.data.result.id;
      await driver.logUtil("PASS", "Tag created Sucessfully through API " + " Tag Name :  " + tagName + " TagID : " + tagId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Tag _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
   * **********************************
   * Method to Create TagCategory and Tag Both
   * This Method will return TagCategory and Tag Name And ID which is Created
   * ***********************************
*/
  public async createBothTagAndCategoryThroughApi() {
    await this.createTagCategory();
    await this.createTag();
  }

  /*
     * **********************************
     * Method to Create Course
     * This Method will return Course Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v5/course/add/course"
     * ***********************************
  */
  public async createCourseApi() {
    await this.createBothTagAndCategoryThroughApi();
    const res = await axios
      .post(envurl + testdata.CourseUrl.CreateCourse,
        payloads.createCourse_Payload(tagCategoryId, tagId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      courseName = res.data.result.name;
      courseId = res.data.result.id;
      await driver.logUtil("PASS", "Course created Sucessfully through API " + " Course Name :  " + courseName + " courseId : " + courseId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Course _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }



  /*
     * **********************************
     * Method to Create Host
     * This Method will return Host ID which is Created
     * "https://uat.lms.excelr.com/api/v5/batch/add/zoom-host"
     * ***********************************
  */
  public async createHostApi() {
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v4/batch/add/zoom-host",
        payloads.zoomHost_Payload(),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    zoomHostID = res.data.result.id;
    console.log("Extracted ID : " + zoomHostID);
  }

  /*
     * **********************************
     * Method to Create Batch
     * this will create new host, tag,course and for that it will add batch 
     * This Method will return Batch ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/batch/add/batch"
     * ***********************************
  */
  public async createBatchAPi() {
    // await this.createHostApi();
    await this.createCourseApi();
    const res = await axios
    .post(envurl + testdata.BatchUrl.CreateBatch,
      // .post("https://uat.lms.excelr.com/api/v9/" + testdata.BatchUrl.CreateBatch,
        payloads.createBatch_Payload(tagId, courseId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
            'Content-Type': "application/json"
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      batchName = res.data.result.name;
      batchId = res.data.result.id;
      await driver.logUtil("PASS", "Batch created Sucessfully through API " + " BatchName ::: " + res.data.result.name + " ::: Batch ID : " + res.data.result.id);
    } else {
      await driver.logUtil("FAIL", " Failed To Create_Batch  Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
   * **********************************
   * Method to Add Session
   * this will create new host, tag,course and for that it will add batch 
   * This Method will return Batch ID  and Name which is Created
   * "https://uat.lms.excelr.com/api/v5/batch/add/batch"
   * ***********************************
*/
  public async AddSessionToBatchAPi() {
    // await this.createBatchAPi();
    const res = await axios
      .post(envurl + testdata.BatchUrl.Addsession,
        // .post("https://uat.lms.excelr.com/api/v8/session/add/session",
        payloads.AddSessiontoBatch_Payload(batchId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
            'Content-Type': "application/json"
          },
        }
      )
      .then((res) => res.data);
    //  console.log(res);
    if (res.statusCode === 200) {
      SessionId =res.data.result[0].id;
      await driver.logUtil("PASS", "Session created Sucessfully through API " + " BatchName ::: " + batchName + " ::: Batch ID : " + batchId + "and Session Id :: " + SessionId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create_Session  Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /**
   * @method to Add Session
   * this will create new host, tag,course and for that it will add batch 
   * This Method will return Batch ID  and Name which is Created
   * "https://uat.lms.excelr.com/api/v8/session/add/session"
   */
public async AddTodaySessionToBatchAPi() {
  const res = await axios
    .post(envurl + testdata.BatchUrl.Addsession,
      payloads.AddTodaySessiontoBatch_Payload(batchId),
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
          'Content-Type': "application/json"
        },
      }
    )
    .then((res) => res.data);
  //  console.log(res);
  if (res.statusCode === 200) {
    SessionId =res.data.result[0].id;
    sessionName = res.data.result[0].name;
    await driver.logUtil("PASS", "Session created Sucessfully through API " + " BatchName ::: " + batchName + " ::: Batch ID : " + batchId + "and Session Id :: " + SessionId);
  } else {
    await driver.logUtil("FAIL", " Failed To Create_Session  Response Code " + res.statusCode + " _Response message " + res.message);
  }
}

  /*
     * **********************************
     * Method to Create ProductCategory
     * This Method will return ProductCategory ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/product/create/category"
     * ***********************************
  */
  public async createProductCategory() {
    const res = await axios
      .post(envurl + testdata.ProductCategoryUrl.CreateProductCategory,
        payloads.createProductCategory_PayLoad(),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      productCategoryName = res.data.result.title;
      productCategoryId = res.data.result.id;
      await driver.logUtil("PASS", "Product Category created Sucessfully through API " + " Product Category Name :  " + productCategoryName + " ProductCategoryID : " + productCategoryId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Product Category  _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Create Product
     * This Method will return Product ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/product/create/product"
     * ***********************************
  */
  public async createProductAPi() {
    await this.createCourseApi();
    await this.createProductCategory();
    await browser.pause(3000);
    const res = await axios
      // .post(envurl + testdata.ProductUrl.CreateProduct,
      .post("https://uat.lms.excelr.com/api/v8/product/create/product",
        payloads.createProduct_Payload(courseId, productCategoryId, tagCategoryId, tagId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      productName = res.data.result.name;
      productId = res.data.result.id;
      await driver.logUtil("PASS", "Product created Sucessfully through API " + " ProductName ::: " + res.data.result.name + " ::: Product ID : " + res.data.result.id);
    } else {
      await driver.logUtil("FAIL", " Failed To Create_Product  Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Create Product
     * This Method will return Product ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/product/create/product"
     * ***********************************
  */
  public async createPremiumProductAPi() {
    await this.createCourseApi();
    await this.createProductCategory();
    await browser.pause(3000);
    const res = await axios
      // .post(envurl + testdata.ProductUrl.CreateProduct,
      .post("https://uat.lms.excelr.com/api/v8/product/create/product",
        payloads.createProduct_Payload(courseId, productCategoryId, tagCategoryId, tagId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      premiumproductName = res.data.result.name;
      premiumproductId = res.data.result.id;
      await driver.logUtil("PASS", "Premium Product created Sucessfully through API " + " ProductName ::: " + res.data.result.name + " ::: Product ID : " + res.data.result.id);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Premium_Product  Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
 /*
    * **********************************
    * Method to Create Product with Product Type and Product Kind Parameters
    * This Method will return Product ID  and Name which is Created
    * "https://uat.lms.excelr.com/api/v5/product/create/product"
    * ***********************************
 */
  public async createProductAPiWithParameters(productType, productKind) {
    await browser.pause(8000);
    await this.createCourseApi();
    await browser.pause(8000);
    await this.createProductCategory();
    await browser.pause(8000);
    const res = await axios
      .post(envurl + testdata.ProductUrl.CreateProduct,
        payloads.createProduct_Payload_With_ProductType_ProductKind_Args(courseId, productCategoryId, tagCategoryId, tagId, productType, productKind),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      productName = res.data.result.name;
      productId = res.data.result.id;
      await driver.logUtil("PASS", "Product created Sucessfully through API " + " ProductName ::: " + res.data.result.name + " ::: Product ID : " + res.data.result.id);
    } else {
      await driver.logUtil("FAIL", " Failed To Create_Product  Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete Course
     * This method Required the course Id which need to be deleted 
     * "https://uat.lms.excelr.com/api/v5/course/delete/course/"
     * ***********************************
  */
  public async DeleteCourse() {
    // await this.createCourseApi();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.CourseUrl.DeleteCourse + courseId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Course " + " CourseName : " + courseName + " ::: Course ID : " + courseId);
      await console.log("PASS", "Sucessfully Deleted the Course " + " CourseName : " + courseName + " ::: Course ID : " + courseId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Course Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Course Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete TagCategory
     * This method Required the TagCategory Id which need to be deleted 
     * "https://uat.lms.excelr.com/api/v5/tag/delete/tag/category?id="
     * ***********************************
  */
  public async DeleteTagCategory() {
    // await this.createTagCategory();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.TagsUrl.DeleteTagCategory + tagCategoryId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the TagCategory " + " TagCategory_Name : " + tagCategoryName + " ::: TagCategory_ID : " + tagCategoryId);
      await console.log("PASS", "Sucessfully Deleted the TagCategory " + " TagCategory_Name : " + tagCategoryName + " ::: TagCategory_ID : " + tagCategoryId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the TagCategory Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the TagCategory Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete Tag
     * This method Required the Tag ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v5/tag/delete/tag?id="
     * ***********************************
  */
  public async DeleteTag() {
    // await this.createTag();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.TagsUrl.DeleteTag + tagId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Tag " + " Tag_Name : " + tagName + " ::: Tag_ID : " + tagId);
      await console.log("PASS", "Sucessfully Deleted the Tag " + " Tag_Name : " + tagName + " ::: Tag_ID : " + tagId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Tag Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Tag Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete ProductCategory
     * This method Required the ProductCategory ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v4/product/delete/category?productCategoryId="
     * ***********************************
  */
  public async DeleteProductCategory() {
    // await this.createProductCategory();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.ProductCategoryUrl.DeleteProductCategory + productCategoryId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Product Category " + " ProductCategory_Name : " + productCategoryName + " ::: ProductCategory_ID : " + productCategoryId);
      await console.log("PASS", "Sucessfully Deleted the Product Category " + " ProductCategory_Name : " + productCategoryName + " ::: ProductCategory_ID : " + productCategoryId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Tag Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Tag Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete Product
     * This method Required the Product ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v4/product/delete/product/"
     * ***********************************
  */
  public async DeleteProduct() {
    // await this.createProductAPi();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.ProductUrl.DeleteProduct + productId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Product  " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
      await console.log("PASS", "Sucessfully Deleted the Product  " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Product Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Product Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Delete Product
     * This method Required the Product ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v4/product/delete/product/"
     * ***********************************
  */
  public async DeletePremiumProduct() {
    // await this.createProductAPi();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.ProductUrl.DeleteProduct + premiumproductId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Product  " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
      await console.log("PASS", "Sucessfully Deleted the Premium Product  " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Product Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Premium Product Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }
  /*
     * **********************************
     * Method to Delete Batch
     * This method Required the Batch ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  public async DeleteBatch() {
    // await this.createBatchAPi();
    await browser.pause(3000);
    const res = await axios
      .delete(envurl + testdata.BatchUrl.DeleteBatch + batchId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted the Batch  " + " Batch_Name : " + batchName + " ::: Batch_ID : " + batchId);
      await console.log("PASS", "Sucessfully Deleted the Batch  " + " Batch_Name : " + batchName + " ::: Batch_ID : " + batchId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete the Batch Response Code " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete the Batch Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  //below commented one is copy of delete batch api but need tochange for delete host 
  /*
     * **********************************
     * Method to Delete ZoomHost
     * This method Required the ZoomHost ID which need to be deleted 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  // public async DeleteZoomHost() {
  //   await this.createBatchAPi();
  //   await browser.pause(3000);
  //   const res = await axios
  // .delete(envurl+testdata.BatchUrl.DeleteBatch+batchId,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + admintoken + "",
  //         },
  //       }
  //     )
  //     .then((res) => res.data);
  //   // console.log(res);
  //   if (res.statusCode === 200) {
  //     await driver.logUtil("PASS","Sucessfully Deleted the Batch  " +" Batch_Name : " +batchName +" ::: Batch_ID : " +batchId);
  //   }  else {
  //     await driver.logUtil("FAIL"," Failed To Delete the Batch Response Code " +res.statusCode +" _Response message " +res.message);
  //   }
  // }

  //---APR

  /*
     * **********************************
     * Method to make the created product visible to user
     * ***********************************
  */
  public async Visible_Status_Product() {
    // await this.createProductAPi();
    await browser.pause(3000);
    const res = await axios
      .post(envurl + testdata.ProductUrl.UpdateProduct,
        payloads.Visible_Product_Payload(productId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Made product Visiblity Status true to  user " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
    } else {
      await driver.logUtil("FAIL", " Failed to  Made product Visiblity Status true" + res.statusCode + " _Response message " + res.message);
    }
  }

    /*
     * **********************************
     * Method to make the created product visible to user
     * ***********************************
  */
    public async Visible_Status_PremiumProduct() {
      // await this.createProductAPi();
      await browser.pause(3000);
      const res = await axios
        .post(envurl + testdata.ProductUrl.UpdateProduct,
          payloads.Visible_Product_Payload(premiumproductId),
          {
            headers: {
              Authorization: "Bearer " + admintoken + "",
            },
          }
        )
        .then((res) => res.data);
      // console.log(res);
      if (res.statusCode === 200) {
        await driver.logUtil("PASS", "Sucessfully Made product Visiblity Status true to  user " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
      } else {
        await driver.logUtil("FAIL", " Failed to  Made product Visiblity Status true" + res.statusCode + " _Response message " + res.message);
      }
    }
  /*
     * **********************************
     * Method to Add user to Batch 
     * ***********************************
  */
  public async AddUserToBatch() {
    await browser.pause(3000);
    const res = await axios
    
      .post(envurl + testdata.BatchUrl.AddUser,
        payloads.AddUsertoBatch_Payload(batchId, Reg_product_Student_ID),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Add user " + Reg_product_Student_ID + "to Batch  " + " Batch_Name : " + batchName + " ::: Batch_ID : " + batchId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add User To the Batch " + res.statusCode + " _Response message " + res.message);
    }
  }
  /*
     * **********************************
     * Method to Add user to Batch 
     * ***********************************
  */
  public async AddTrainerToBatch() {
    const res = await axios
      .post(envurl + testdata.BatchUrl.Addtrainer,
        payloads.AddTrainertoBatch_Payload(batchId, trainerUserID),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Add Trainer " + trainerUserID + "to Batch  " + " Batch_Name : " + batchName + " ::: Batch_ID : " + batchId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Trainer To the Batch " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to create the product and add to the user 
     * below method will first create new Tagcategory,tag , course , productcategory,product and then it add to user 
     * all the steps are dependent on each other [eg:created Newtag is used to create course]
     * ***********************************
  */
  public async CreateProduct_AddUserToProduct() {
    await this.createProductAPi();
    await browser.pause(3000);
    await this.Visible_Status_Product()
    await browser.pause(3000);
    const res = await axios
      .post(envurl + testdata.ProductUrl.AddUserToProduct,
        payloads.AddUsertoProduct_Payload(productId, Reg_product_Student_ID),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Add user " + Reg_product_Student_ID + "to Product  " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add User To the product " + res.statusCode + " _Response message " + res.message);
    }
  }
    /*
     * **********************************
     * Method to create the Premium product and add to the user 
     * below method will first create new Tagcategory,tag , course , productcategory,product and then it add to user 
     * all the steps are dependent on each other [eg:created Newtag is used to create course]
     * ***********************************
  */
    public async CreatePremiumProduct_AddUserToProduct() {
      await this.createPremiumProductAPi();
      await browser.pause(3000);
      await this.Visible_Status_PremiumProduct()
      await browser.pause(3000);
      const res = await axios
        .post(envurl + testdata.ProductUrl.AddUserToProduct,
          payloads.AddUsertoProduct_Payload(premiumproductId, Reg_product_Student_ID),
          {
            headers: {
              Authorization: "Bearer " + admintoken + "",
            },
          }
        )
        .then((res) => res.data);
      // console.log(res);
      if (res.statusCode === 200) {
        await driver.logUtil("PASS", "Sucessfully Add user " + Reg_product_Student_ID + "to Premium Product  " + " Premium Product_Name : " + productName + " ::: Product_ID : " + productId);
      } else {
        await driver.logUtil("FAIL", " Failed To Add User To the Premium product " + res.statusCode + " _Response message " + res.message);
      }
    }

  /**
   * @author : SREEVATHSA
   *  * Method to  Add Assignment to Course 
     * This method Required the Course ID which need to be add 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
   */
  public async Add_AssignmentToCourse() {
    // await this.createCourseApi();
    const res = await axios
      .post(envurl + testdata.Assignment.CreateAssignment,
        payloads.Add_Assignment_Payload(courseId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      AssignmentName = res.data.result.name;
      AssignmentId = res.data.result.id;
      await driver.logUtil("PASS", "Sucessfully  Add Assignment To Course " + courseId + " And " + " Assignment_Name : " + AssignmentName + " ::: Assignment_ID : " + AssignmentId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Assignment To Course " + res.statusCode + " _Response message " + res.message);
    }
  }

  /**
   * @author SREEVATHSA
   * Method to  Delete Assignment from Course 
   * This method Required the Assignment ID which need to be delete
   */

  public async Delete_AssignmentToCourse() {
    // await this.Add_AssignmentToCourse();
    const res = await axios
      .delete(envurl + testdata.Assignment.DeleteAssignment + AssignmentId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Assignment " + " Assignment_Name : " + AssignmentName + " ::: Assignment_ID : " + AssignmentId);
      await console.log("PASS", "Sucessfully Deleted Assignment " + " Assignment_Name : " + AssignmentName + " ::: Assignment_ID : " + AssignmentId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Assignment " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete Assignment " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to  Add Assignment to Course 
     * This method Required the Course ID which need to be add 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  public async Add_ProjectToCourse() {
    // await this.createCourseApi();
    const res = await axios
      .post(envurl + testdata.Project.CreateProject,
        payloads.Add_Project_Payload(courseId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      ProjectName = res.data.result.name;
      ProjectId = res.data.result.id;
      await driver.logUtil("PASS", "Sucessfully  Add Project To Course " + courseId + " And " + " Project_Name : " + ProjectName + " ::: Project_ID : " + ProjectId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Project To Course " + res.statusCode + " _Response message " + res.message);
    }
  }

  /**
  * Method to  Add Announcement Globally 
  * This method Required the Tag and Tag Category which need to be added
  * @author SREEVATHSA
  */

  public async Add_Global_Announcements() {
    // await this.createBothTagAndCategoryThroughApi();
    const res = await axios
      .post(envurl + testdata.announcement.CreateAnnouncement,
        payloads.Add_Global_Announcements_Payload(tagId, tagCategoryId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    console.log(res);
    if (res.statusCode === 200) {
      AnnouncementID = res.data.result.id;
      AnnouncementTitle = res.data.title;
      // AnnouncementDesc = res.data.description;
      await driver.logUtil("PASS", "Sucessfully Created Global Announcement with ID " + AnnouncementID + " And " + "Title : " + AnnouncementTitle);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Global Announcement " + res.statusCode + " _Response message " + res.message);
    }
  }

  /**
  * Method to  Add Course Announcement 
  * This method Required the Tag and Tag Category which need to be added
  * @author SREEVATHSA
  */

  public async Add_Course_Announcements() {
    // await this.createProductAPi();
    const res = await axios
      .post(envurl + testdata.announcement.CreateAnnouncement,
        payloads.Add_Course_Announcements_Payload(courseId, productId, tagId, tagCategoryId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      AnnouncementID = res.data.result.id;
      AnnouncementTitle = res.data.result.title;
      await driver.logUtil("PASS", "Sucessfully Created Course Announcement with ID " + AnnouncementID + " And " + "Title : " + AnnouncementTitle);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Announcement to Course " + res.statusCode + " _Response message " + res.message);
    }
  }

  /**
  * Method to  Delete Global Announcement 
  * This method Required the Global Announcement ID which need to be delete 
  * @author SREEVATHSA
  */

  public async Delete_GlobalAnnouncement() {
    // await this.Add_Global_Announcements();
    const res = await axios
      .delete(envurl + testdata.announcement.DeleteAnnouncement + AnnouncementID,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Global Announcement " + "Global Announcement Title : " + AnnouncementTitle + " ::: Global Announcement ID : " + AnnouncementID);
      await console.log("PASS", "Sucessfully Deleted Global Announcement " + "Global Announcement Title : " + AnnouncementTitle + " ::: Global Announcement ID : " + AnnouncementID);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Global Announcement " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete Global Announcement " + res.statusCode + " _Response message " + res.message);
    }

  }

  /**
  * Method to  Delete Course Announcement 
  * This method Required the Course Announcement ID which need to be delete
  * @author SREEVATHSA
  */

  public async Delete_CourseAnnouncement() {
    // await this.Add_Course_Announcements();
    const res = await axios
      .delete(envurl + testdata.announcement.DeleteAnnouncement + AnnouncementID,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Course Announcement " + "Course Announcement Title : " + AnnouncementTitle + " ::: Course Announcement ID : " + AnnouncementID);
      await console.log("PASS", "Sucessfully Deleted Course Announcement " + "Course Announcement Title : " + AnnouncementTitle + " ::: Course Announcement ID : " + AnnouncementID);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Course Announcement " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete Course Announcement " + res.statusCode + " _Response message " + res.message);
    }
  }



  /*
     * **********************************
     * Method to  Delete Projet from Course 
     * This method Required the Projet ID which need to be delete
     * ***********************************
  */
  public async Delete_ProjectFromCourse() {
    // await this.Add_ProjectToCourse();
    const res = await axios
      .delete(envurl + testdata.Project.DeleteProject + ProjectId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Project " + " Project_Name : " + ProjectName + " ::: Project_ID : " + ProjectId);
      await console.log("PASS", "Sucessfully Deleted Project " + " Project_Name : " + ProjectName + " ::: Project_ID : " + ProjectId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Project " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete Project " + res.statusCode + " _Response message " + res.message);
    }
  }


  /*
     * **********************************
     * Method to Delete_TagCategory_Tag__Course_ProductCategory_Product 
     * ***********************************
  */

  public async Delete_TagCategory_Tag__Course_ProductCategory_Product() {
    await this.DeleteTagCategory();
    await this.DeleteTag();
    await browser.pause(3000);
    await this.DeleteCourse();
    await this.DeleteProductCategory();
    await browser.pause(3000);
    await this.DeleteProduct();
  }

  /*
     * **********************************
     * Method to  Add Section to Course 
     * This method Required the Course ID which need to be add 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  public async Add_SectionToCourse() {
    // await this.createCourseApi();
    const res = await axios
      .post(envurl + testdata.Section.CreateSection,
        payloads.Add_Section_Payload(courseId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      SectionName = res.data.section.name;
      SectionId = res.data.section.id;
      await driver.logUtil("PASS", "Sucessfully  Add Section To Course " + courseId + " And " + " Section_Name : " + SectionName + " ::: Section_ID : " + SectionId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Section To Course " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to  Add Sub_Section to Course 
     * This method Required the Course ID which need to be add 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  public async Add_Sub_SectionToCourse() {
    // await this.createCourseApi();
    const res = await axios
      .post(envurl + testdata.Section.CreateSub_Section,
        payloads.Add_Sub_Section_Payload(SectionId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      Sub_SectionName = res.data.result.name;
      Sub_SectionId = res.data.result.id;
      await driver.logUtil("PASS", "Sucessfully  Add Sub_Section To Section " + SectionId + " And " + " Sub_Section_Name : " + Sub_SectionName + " ::: Sub_Section_ID : " + Sub_SectionId);
    } else {
      await driver.logUtil("FAIL", " Failed To Add Sub_Section To Course " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to  Course Material to  Course 
     * This method Required the Course ID which need to be add 
     * "https://uat.lms.excelr.com/api/v5/batch/delete/batch/"
     * ***********************************
  */
  public async Add_CourseMaterialToCourse() {
    await this.Add_SectionToCourse();
    await this.Add_Sub_SectionToCourse();

  }

  //Delete Section Api is not working to delete Section once the api issue is 

  /*
     * **********************************
     * Method to make the created product visible to user
     * ***********************************
  */
  public async Archive_Product() {
    // await this.createProductAPi();
    await browser.pause(3000);
    const res = await axios
      .post(envurl + testdata.ProductUrl.UpdateProduct,
        payloads.Archive_Product_Payload(productId),
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Made product Archive Status true to  user " + " Product_Name : " + productName + " ::: Product_ID : " + productId);
    } else {
      await driver.logUtil("FAIL", " Failed to  Made product Archive Status true" + res.statusCode + " _Response message " + res.message);
    }
  }


  /*
     * **********************************
     * Method to Create Question Bank
     * This Method will return Question bank Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v5/question_bank/create"
     * Api development in progess
     * ***********************************
  */
  // public async Question_Bank(){
  //   await this.createCourseApi();
  //   await this.createTag();
  //   await browser.pause(3000);
  //   const res = await axios
  //   .post(envurl+testdata.QuestionBank.CreateQuestionBank,
  //     payloads.Question_Bank_Payload(courseId, tagId),{
  //       headers: {
  //         Authorization: "Bearer " + admintoken + "",
  //       },
  //     }
  //   )
  //   .then((res) => res.data)
  //   if(res.statusCode === 200){
  //     await driver.logUtil("PASS","Sucessfully add "+" Question bank to tag Category: " + tagCategoryId +" ::: tag : " +tagId);
  //   }  else {
  //     await driver.logUtil("FAIL","Failed to add "+" Question bank to tag Category: " + tagCategoryId +" ::: tag : " +tagId);
  //   }
  //  }

  /**  
    * Method used to get Student details.
    * This method Required Student ID
    * @author : SREEVATHSA
    */

  public async GetStudentDetails() {
    // await this.CreateProduct_AddUserToProduct();
    await browser.pause(3000);
    const res = await axios
      .get(envurl + testdata.Student.Student_Details + Reg_product_Student_ID,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    //  console.log(res);
    StudentEmail = res.data.result.email;
    StudentFirstName = res.data.result.first_name;
    StudentLastName = res.data.result.last_name;

    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Found Student Details " + " Email : " + StudentEmail + " :::First Name : " + StudentFirstName + " ::: Last Name :" + StudentLastName);
    } else {
      await driver.logUtil("FAIL", "Failed To Find Student Details " + res.statusCode + " _Response message " + res.message);
    }
  }

  /** 
   *  Method is used to Delete Student
   * his method Required Student ID
   * @author : SREEVATHSA
   */

  public async Delete_Student() {
    // await this.CreateProduct_AddUserToProduct(); 
    console.log(studentUserID);
    const res = await axios
      .delete(envurl + testdata.Student.Student_Delete + Reg_product_Student_ID,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res);
    console.log(res);
    if (res.statusCode === 200) {
      await driver.logUtil("PASS", "Sucessfully Deleted Student " + " Student_ID: " + Reg_product_Student_ID);
    } else {
      await driver.logUtil("FAIL", " Failed To Delete Student " + res.statusCode + " _Response message " + res.message);
    }
  }

  //=======================================

  /*
     * **********************************
     * Method to Create practice Quize
     * This Method will return Quize Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v6/quiz/create"
     * @auth:Nithin
     * ***********************************
  */
  public async create_practice_QuizApi() {
    // await this.createSubSectionQuizApi();
    // await browser.pause(3000);
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v6/quiz/create",
        payloads.create_practice_Quiz_Payload(courseId, Section_quizId, Sub_Section_quizId),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",


          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      practice_quizeName = res.data.result.name;
      practice_quizeId = res.data.result.id;
      await driver.logUtil("PASS", "practice_Quize created Sucessfully through API " + " Quize Name :  " + practice_quizeName + " QuizeId : " + practice_quizeId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create practice_Quize _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
   * **********************************
   * Method to  Delete Quize from Course 
   * This method Required the Quize ID which need to be delete
   * Auth:Nithin
   * ***********************************
*/
  public async Delete_practice_QuizeCourse() {
    // await this.create_practice_QuizApi();
    const res = await axios
      .delete(envurl + testdata.Quiz.DeleteQuiz + practice_quizeId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Project " + " Project_Name : " + ProjectName + " ::: Project_ID : " + ProjectId);
      await console.log("PASS", "Sucessfully Deleted practice_Quize " + " practice_Quize_Name : " + practice_quizeName + " ::: practice_Quize_ID : " + practice_quizeId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Project " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete practice_Quize " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
     * **********************************
     * Method to Create Section Quize
     * This Method will return Section Quize Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v6/quiz/create"
     * @auth:Nithin
     * ***********************************
  */
  public async createSectionQuizApi() {
    // await this.createCourseApi();
    // await browser.pause(3000);
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v6/quiz/add/section",
        payloads.Section_Quize_Payload(courseId),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",


          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      Section_quizName = res.data.result.name;
      Section_quizId = res.data.result.id;
      await driver.logUtil("PASS", "Quiz_Section created Sucessfully through API " + " Section Quiz Name :  " + Section_quizName + " Section Quize Id : " + Section_quizId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Quiz_Section Code " + res.statusCode + " _Response message " + res.message);
    }
  }


  /*
     * **********************************
     * Method to Create Sub-Section Quize
     * This Method will return Section Quize Name And ID which is Created
     * "https://uat.lms.excelr.com/api/v6/quiz/create"
     * @auth:Nithin
     * ***********************************
  */
  public async createSubSectionQuizApi() {
    //await this.createSectionQuizApi();
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v6/quiz/add/sub-section",
        payloads.Sub_Section_Quize_Payload(Section_quizId),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",


          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      Sub_Section_quizName = res.data.result.name;
      Sub_Section_quizId = res.data.result.id;
      await driver.logUtil("PASS", "Quiz_Sub-Section created Sucessfully through API " + " Sub-Section_Quiz Name :  " + Sub_Section_quizName + " Sub-Section-Quize Id : " + Sub_Section_quizId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create Quiz_Sub-Section Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
      * **********************************
      * Method to Create graded_Quize
      * This Method will return Quize Name And ID which is Created
      * "https://uat.lms.excelr.com/api/v6/quiz/create"
      * @auth:Nithin
      * ***********************************
   */
  public async create_graded_QuizApi() {
    // await this.createCourseApi();
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v6/quiz/create",
        payloads.create_graded_Quiz_Payload(courseId),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",


          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      graded_quizeName = res.data.result.name;
      graded_quizeId = res.data.result.id;
      await driver.logUtil("PASS", "graded_Quize created Sucessfully through API " + " graded_Quize Name :  " + graded_quizeName + " graded_QuizeId : " + graded_quizeId);
    } else {
      await driver.logUtil("FAIL", " Failed To Create practice_Quize _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
   * **********************************
   * Method to  Delete graded Quize from Course 
   * This method Required the Quize ID which need to be delete
   * Auth:Nithin
   * ***********************************
*/
  public async Delete_graded_QuizeCourse() {
    // await this.create_graded_QuizApi();
    const res = await axios
      .delete(envurl + testdata.Quiz.DeleteQuiz + graded_quizeId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      // await driver.logUtil("PASS", "Sucessfully Deleted Project " + " Project_Name : " + ProjectName + " ::: Project_ID : " + ProjectId);
      await console.log("PASS", "Sucessfully Deleted graded_Quize " + " graded_Quize_Name : " + graded_quizeName + " ::: graded_Quize_ID : " + graded_quizeId);
    } else {
      // await driver.logUtil("FAIL", " Failed To Delete Project " + res.statusCode + " _Response message " + res.message);
      await console.log("FAIL", " Failed To Delete graded_Quize " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
      * **********************************
      * Method to  Delete Section Quize from Course 
      * This method Required the Section Quize ID which need to be delete
      * Auth:Nithin
      * ***********************************
   */
  public async Delete_Section_Quize() {
    // await this.createSectionQuizApi();
    const res = await axios
      .delete("https://uat.lms.excelr.com/api/v6/quiz/delete/section/" + Section_quizId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await console.log("PASS", "Sucessfully Deleted Section_Quize " + " Section_Quize_Name : " + Section_quizName + " ::: Section_Quize_ID : " + Section_quizId);
    } else {
      await console.log("FAIL", " Failed To Delete Section_Quize " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
      * **********************************
      * Method to  Delete Sub-Section Quize from Course 
      * This method Required the Section Quize ID which need to be delete
      * Auth:Nithin
      * ***********************************
   */
  public async Delete_SubSection_Quize() {
    // await this.createSubSectionQuizApi();
    const res = await axios
      .delete("https://uat.lms.excelr.com/api/v6/quiz/delete/sub-section" + Sub_Section_quizId,
        {
          headers: {
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      await console.log("PASS", "Sucessfully Deleted Sub-Section_Quize " + " Sub-Section_Quize_Name : " + Sub_Section_quizName + " ::: Sub-Section_Quize_ID : " + Sub_Section_quizId);
    } else {
      await console.log("FAIL", " Failed To Delete Sub-Section_Quize " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
      * **********************************
      * Method toAddElementToSubSection_Course
      * This Method will return Element Name And ID which is Created
      * "https://uat.lms.excelr.com/api/v6/quiz/create"
      * @auth:Nithin
      * ***********************************
   */
  public async AddElementToSubSection_Course() {
    // await this.createCourseApi();
    // await this.Add_CourseMaterialToCourse();
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v4/section/add/section/element",
        payloads.AddElementToSubSection_Course(courseId, SectionId, Sub_SectionId),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",


          },
        }
      )
      .then((res) => res.data);
    // console.log(res);
    if (res.statusCode === 200) {
      SubSec_Element_quizeName = res.data.result.title;
      SubSec_ElementId = res.data.result.id;
      await driver.logUtil("PASS", "Added Element Sucessfully through API for sub section" + " Element_Title :  " + SubSec_Element_quizeName + " ElementId : " + SubSec_ElementId);
    } else {
      await driver.logUtil("FAIL", " Failed To Added Element to sub section _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }

  /*
   * **********************************
   * Method to Create TagCategory tag course batch and add user to that batch and trainer and seesion and Tag Both
   * ***********************************
*/
public async create_Course_Batch_Session_AddUser_AddTrinertoBatch() {
  await this.createBatchAPi();
  await browser.pause(3000);
  await this.AddSessionToBatchAPi();
  await browser.pause(3000);
  await this.AddUserToBatch();
  await browser.pause(3000);
  await this.AddTrainerToBatch();
}
  /*
   * **********************************
   * Method to Delete TagCategory and Tag course and batch
   * ***********************************
*/
public async Delete_Tagcategory_Tag_Course_Batch() {
  await this.DeleteTag();
  await browser.pause(3000);
  await this.DeleteTagCategory();
  await browser.pause(3000);
  await this.DeleteCourse();  
  await browser.pause(3000);
  await this.DeleteBatch();
}

/*
     * **********************************
     * Method to Create Batch 
     * this will create new host, tag,course and for that it will add batch 
     * This Method will return Batch ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/batch/add/batch"
     * ***********************************
  */
public async createBatchAPi_method() {
  const res = await axios
    .post(envurl + testdata.BatchUrl.CreateBatch,
      payloads.createBatch_Payload(tagId, courseId),
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
          'Content-Type': "application/json"
        },
      }
    )
    .then((res) => res.data);
  // console.log(res);
  if (res.statusCode === 200) {
    batchName = res.data.result.name;
    batchId = res.data.result.id;
    await driver.logUtil("PASS", "Batch created Sucessfully through API " + " BatchName ::: " + res.data.result.name + " ::: Batch ID : " + res.data.result.id);
  } else {
    await driver.logUtil("FAIL", " Failed To Create_Batch  Response Code " + res.statusCode + " _Response message " + res.message);
  }
}

/**
 * This Method is used to Block any Student
 * @author : SREEVATHSA
 * @param Reg_product_Student_ID 
 */

public async BlockUser(Reg_product_Student_ID) {
  const res = await axios
    .post(envurl + testdata.Student.Block_User,
      payloads.BlockUser_Payload(Reg_product_Student_ID),
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",

        },
      }
    )
    .then((res) => res.data);
  // console.log(res);
  if (res.statusCode === 200) {
    await driver.logUtil("PASS", "Sucessfully Blocked  user " );
  } else {
    await driver.logUtil("FAIL", " Failed to Blocked  user" + res.statusCode + " _Response message " + res.message);
  }
}

/**
 * * This Method is used to create Sub Admin
 * @author : SREEVATHSA
 */

public async CreateSubAdmin(){
  const res = await axios
    .post(envurl + testdata.Admin.Create_Sub_Admin,
      payloads.Create_SubAdmin_Payload(SubAdminEmail , SubAdminPassword),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
    Sub_AdminID = res.data.result.id;
  // console.log(res);
  if (res.statusCode === 200) {
    await driver.logUtil("PASS", "Sucessfully Created Sub Admin" );
  } else {
    await driver.logUtil("FAIL", " Failed to create Sub Admin" + res.statusCode + " _Response message " + res.message);
  }

}

/**
 * * This Method is used to Delete Sub Admin
 * @author : SREEVATHSA
 */

public async Delete_SubAdmin() {
  // await this.CreateSubAdmin();
  const res = await axios
    .delete(envurl + testdata.Admin.Delete_Sub_Admin + Sub_AdminID,
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
  // console.log(res);
  if (res.statusCode === 200) {
    await console.log("PASS", "Sucessfully Deleted Sub-Admin ");
  } else {
    await console.log("FAIL", " Failed To Delete Sub-Admin " + res.statusCode + " _Response message " + res.message);
  }
}

/**
 * This Method is used to Add faculty resource from trainer.
 * @author : SREEVATHSA
 */
public async Add_FacultyResource(){
  await this.create_Course_Batch_Session_AddUser_AddTrinertoBatch();

  const res = await axios
  // .post(envurl + testdata.Faculty_Resource.Add_Faculty_Resource,
   
    .post("https://uat.lms.excelr.com/api/v9/trainer/add/resource",
      payloads.Add_Faculty_Resource_Payload(name, SessionId, batchId, courseId),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
     facultyResourceID = res.data.result.id;
     facultyResourceFileName = res.data.result.name;
   await console.log(" *** " +facultyResourceID)
  // await console.log(res);
  if (res.statusCode === 200) {
    await driver.logUtil("PASS", "Faculty Resource added successfully");
  } else {
    await driver.logUtil("FAIL", " Failed to add faculty resource" + res.statusCode + " _Response message " + res.message);
  }

}

/**
 * @method is used to Add Multiple type element
 * @author : MuthuKumaranM
 */
public async AddElementToSubSection_CourseWithMultipleElement() {
  // await this.createCourseApi();
  // await this.Add_CourseMaterialToCourse();
  const types = ["Video", "Image", "Text" , "PDF", "File", "Audio", "iFrame"];
  for (const type of types) {
    const res = await axios
      .post("https://uat.lms.excelr.com/api/v4/section/add/section/element",
        payloads.AddElementToSubSection_CourseWithMultipleElement(courseId, SectionId, Sub_SectionId, type),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + admintoken + "",
          },
        }
      )
      .then((res) => res.data);
    
    if (res.statusCode === 200) {
      SubSec_Element_quizeName = res.data.result.title;
      SubSec_ElementId = res.data.result.id;

      await driver.logUtil("PASS", "Added" + type + " "+"Element Successfully through API for sub section" + " Element_Title :  " + SubSec_Element_quizeName + " ElementId : " + SubSec_ElementId);
    } else {
      await driver.logUtil("FAIL", "Failed To Add Element to sub section _Response Code " + res.statusCode + " _Response message " + res.message);
    }
  }
}

/**
 * @method is used to delete the multiple course , requires the course Id which need to be deleted 
 * "https://uat.lms.excelr.com/api/v5/course/delete/course/"
 */

public async DeleteMultipleCourse(courseId:string) {
  await browser.pause(3000);
  const res = await axios
    // .delete(envurl + testdata.CourseUrl.DeleteCourse + courseId,
    .delete("https://uat.lms.excelr.com/api/v9/course/delete/course/"  + courseId,
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
  // console.log(res);
  if (res.statusCode === 200) {
    await console.log("PASS", "Sucessfully Deleted the Course " + " Course ID : " + courseId);
  } else {
    await console.log("FAIL", " Failed To Delete the Course Response Code " + res.statusCode + " _Response message " + res.message);
  }
}

  /**  
    * @method is used to get the list of courses .
    */

public async getCourseList() {
  await browser.pause(3000);
  let res = await axios
    .get(envurl + testdata.CourseUrl.ListOfCourses,
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
  //  console.log(res);
  if (res.statusCode === 200) {
    await driver.logUtil("PASS", "Sucessfully Got The List Of Courses");
  } else {
    await driver.logUtil("FAIL", "Failed To Get The List Of Courses");
  }
  return res;
}



/**  
 * @method is used to get the list of products .
 */

public async getProductsList() {
  await browser.pause(3000);
  let res = await axios
    .get(envurl + testdata.ProductUrl.ListOfProduct,
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
   console.log(res);
  if (res.statusCode === 200) {
    await driver.logUtil("PASS", "Sucessfully Got The List Of Product");
  } else {
    await driver.logUtil("FAIL", "Failed To Get The List Of Product");
  }
  return res;
}


/*
     * **********************************
     * Method to Create Product
     * This Method will return Product ID  and Name which is Created
     * "https://uat.lms.excelr.com/api/v5/product/create/product"
     * ***********************************
  */
public async createRecommendationProductAPi() {
  await this.createCourseApi();
  await this.createProductCategory();
  await browser.pause(3000);
  const res = await axios
    // .post(envurl + testdata.ProductUrl.CreateProduct,
    .post("https://uat.lms.excelr.com/api/v8/product/create/product",
      payloads.createRecommendationProduct_Payload(courseId, productCategoryId, tagCategoryId, tagId),
      {
        headers: {
          Authorization: "Bearer " + admintoken + "",
        },
      }
    )
    .then((res) => res.data);
  // console.log(res);
  if (res.statusCode === 200) {
    productName = res.data.result.name;
    productId = res.data.result.id;
    await driver.logUtil("PASS", "Recommendatio  Product created Sucessfully through API " + " ProductName ::: " + res.data.result.name + " ::: Product ID : " + res.data.result.id);
  } else {
    await driver.logUtil("FAIL", " Failed To Create_Product  Response Code " + res.statusCode + " _Response message " + res.message);
  }
}


}
export default new PostRequest();
