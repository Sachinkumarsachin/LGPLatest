import Page from "../../pageobjects/admin/page.ts";
import postReq from "./PostRequests.ts";
const { faker } = require("@faker-js/faker");
import { zoomHostID } from "./PostRequests.ts";
import assertions from "../../Utils/assertions.ts";
import { addTag } from "@wdio/allure-reporter";
// import { tagCategoryId } from "../../api/api-tests/PostRequests.ts";
import testdata from "../../testdata/apiurls.json";

const hostName = faker.person.firstName();
const hostEmail = faker.string.alphanumeric(5);
const api_key = faker.string.numeric({ length: { min: 5, max: 10 } });
const secret_key = faker.string.numeric({ length: { min: 5, max: 10 } });
const noOfParticipatants = faker.number.int({ max: 100 });

class Payloads extends Page {
  /*
   * **********************************
   * Resquest Body of Signup api
   * ***********************************
*/
public Add_Trainer_PayLoad(email: string): any {
  const payload = {
    "first_name": "AutoApi",
    "last_name": "Trainer",
    "email": email,
    "mobile": "9122334222",
    "password": "Test@1234",
    "confirm_password": "Test@1234",
    "employment_type": "Internal",
    "lecturing_mode": "Online",
    "city": "757babbc-d0c8-4785-bbe5-09c439750102",
    "state": "166a35bf-1e4b-4f1c-8b7f-05dbbed41a7d",
    "country": "af7bc5b5-44d5-4593-b14b-661b5dd7dc66"
}
  return payload;
}

  /*
   * **********************************
   * Resquest Body of Signup api
   * ***********************************
*/
  public Student_Signup_PayLoad(userName: string, password: string): any {
    const payload = {
      "email": userName,
      "mobile": "9090909090",
      "country_code": "+91",
      "first_name": "Api",
      "last_name": "Check",
      "token": password,
      "provider_key": userName,
      "provider": "email-otp",
      "device_token": "token",
      "device_type": "desktop"
    }
    return payload;
  }

  /*
   * **********************************
   * Resquest Body of Verify OTP api
   * ***********************************
*/
  public Student_VerifyOTP_PayLoad(userName: string): any {
    //https://uat.lms.excelr.com/api/v6/auth/users/sign-up
    const payload = {
      "provider_key": userName,
      "otp": 1234
    }
    return payload;
  }
  /*
   * **********************************
   * Resquest Body of Admin Login api
   * ***********************************
*/
  public Admin_bearerToken_PayLoad(userName: string, password: string): any {
    const payload = {
      provider_key: userName,
      token: password,
      provider: "email-password",
      user_type: 1,
      device_token: "string",
      device_type: "string",
      access_type: "string",
      ip: "string",
      location: "string",
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body of Student Login api
     * ***********************************
  */
  public Student_bearerToken_PayLoad(userName: string, password: string): any {
    const payload = {
      "token": password,
      "provider_key": userName,
      "provider": "email-password",
      "user_type": 2,
      "device_token": "token",
      "device_type": "desktop",
      "access_type": "Desktop Website",
      "ip": "string",
      "location": "string"
    }
    return payload;
  };
  /*
     * **********************************
     * Resquest Body of Trainer Login api
     * ***********************************
  */
  public Trainer_bearerToken_PayLoad(userName: string, password: string): any {
    const payload = {
      "token": password,
      "provider_key": userName,
      "provider": "email-password",
      "user_type": 3,
      "device_token": "string",
      "device_type": "string"
    }
    return payload;
  };

  /*
     * **********************************
     * Resquest Body of create TagCategory api
     * ***********************************
  */

  public createTagCategory_PayLoad(): any {
    const tagCatNameBdy = faker.string.alphanumeric(5);
    const payload = {
      name: "AutoApiIGS" + tagCatNameBdy,
    };
    return payload;
  }
  /*
     * **********************************
     * Resquest Body of create Tag api
     * ***********************************
  */
  public createTag_PayLoad(TagCategoryID: string): any {
    const tagnameBdy = faker.person.firstName();
    const payload = {
      tagCategoryId: TagCategoryID,
      name: "AutoTagApi" + tagnameBdy,
      description: "Creating a Tag Through api for Automation",
    };
    return payload;
  }
  /*
     * **********************************
     * Resquest Body of create Course api
     * ***********************************
  */
  public createCourse_Payload(categoryId: string, tagId: string): any {
    const courseNameBdy = faker.person.firstName();
    const payload = {
      name: "IGSAutoApiCourse" + courseNameBdy,
      sample_certification_url: "https://www.google.com",
      short_description: "Creating the Course Through Api",
      description: "Creating a Course Through Api for FE Automation ",
      tag_category: categoryId,
      "unique_id":"ECAP",
      sub_menu_permission: [
        "Welcome Kit",
        "Batches",
        "Course Material",
        "Faculty Resources",
        "Quizzes",
        "Assignments",
        "Projects",
        "Certificates",
        "Announcements",
        "Users"
      ],
      tags: [tagId],
    };
    return payload;
  }
  /*
     * **********************************
     * Resquest Body of create zoomHost api
     * ***********************************
  */
  public zoomHost_Payload(): any {

    const payload = {
      host_name: hostName,
      host_email: hostEmail + "@gmail.com",
      provider: "Zoom",
      api_key: api_key,
      secret_key: secret_key,
      participants_allowed: noOfParticipatants,
    }
    return payload;
  }
  /*
     * **********************************
     * Resquest Body of create Batch api
     * ***********************************
  */
  public createBatch_Payload(TagID: string, courseId: string): any {
    const BatchName = faker.person.firstName();
    const currentDate = assertions.currentDateAppender("presentDate");
    const futureDate = assertions.currentDateAppender("futureDate");
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    const payload = {
      days: ["Monday", "Tuesday","Wednesday","Thursday","Friday"],
      name: "IGSAutoApiBatch" + BatchName,
      courseId: courseId,
      zoomHostId: testdata.ZoomHostDetails.ZoomHostForBatchWithSession,
      tags: [TagID],
      lecturingModeId: "0005ad6a-f03a-4ab7-ac48-dbd4f43bc378",
      enroll_start_date: currentDate,
      enroll_end_date: futureDate,
      start_date_time: futureDate,
      end_date_time: oneMonthDiff,
      session_duration_hours: "1",
      max_students: "5",
      session_count: "5",
      batch_type: "Free",
      unique_id: "RTL"
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body of create ProductCategory api
     * ***********************************
  */
  public createProductCategory_PayLoad(): any {
    const ProcatBdy = faker.string.alphanumeric(5);
    const payload = {
      "title": "AutoApiIGSproductcategory" + ProcatBdy,
      "interest_selection": true
    };
    return payload;
  }
  /*
     * **********************************
     * Resquest Body of create Product api
     * ***********************************
  */
  public createProduct_Payload(CourseId: string, ProductCategoryId: string, TagCategoryId: string, TagID: string,): any {
    const ProNameBdy = faker.person.firstName();
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    const payload = {
      "name": "IGSAutoApiProduct" + ProNameBdy,
      "internal_name": "frontend",
      "description": "Longs",
      "short_description": "Creating the Product through api",
      "courses": [CourseId],
      "product_type": "free",
      "product_kind": "public",
      "product_payment_type": "free",
      "slug_value": "777",
      "product_category": [ProductCategoryId],
      "duration": "1 months",
      "validity": "2 months",
      "price": "500",
      "tag_category": [TagCategoryId],
      "tags": [TagID],
      "product_link": "www.url.com",
      "is_top_product": false,
      "is_featured_product": false,
      "is_recommended_product": false,
      "is_trending_product": false,
      "skill_set": ["Skill"],
      "medium": "English",
      "unique_id":"ECAP"
    };
    return payload;
  }


  /*
     * **********************************
     * Resquest Body of create Product api
     * ***********************************
  */
  public createPremiumProduct_Payload(CourseId: string, ProductCategoryId: string, TagCategoryId: string, TagID: string,): any {
    const ProNameBdy = faker.person.firstName();
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    const payload = {
      "name": "IGSAutoApiProduct" + ProNameBdy,
      "internal_name": "frontend",
      "description": "Longs",
      "short_description": "Creating the Product through api",
      "courses": [CourseId],
      "product_type": "Premium",
      "product_kind": "public",
      "product_payment_type": "free",
      "slug_value": "777",
      "product_category": [ProductCategoryId],
      "duration": "1 months",
      "validity": "2 months",
      "price": "500",
      "tag_category": [TagCategoryId],
      "tags": [TagID],
      "product_link": "www.url.com",
      "is_top_product": false,
      "is_featured_product": false,
      "is_recommended_product": false,
      "is_trending_product": false,
      "skill_set": ["Skill"],
      "medium": "English",
      "unique_id":"ECAP"
    };
    return payload;
  }


  /*
     * **********************************
     * Resquest Body of create Product api
     * ***********************************
  */
  public createProduct_Payload_With_ProductType_ProductKind_Args(CourseId: string, ProductCategoryId: string, TagCategoryId: string, TagID: string, ProductType: string, ProductKind: string): any {
    const ProNameBdy = faker.person.firstName();
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    const payload = {
      "name": "IGSAutoApiProduct" + ProNameBdy + "QA",
      "internal_name": "frontend",
      "description": "Longs",
      "short_description": "Creating the Product through api",
      "courses": [CourseId],
      "product_type": [ProductType],
      "product_kind": ProductKind,
      "slug_value": "777",
      "product_category": [ProductCategoryId],
      "duration": "1 months",
      "validity": "2 months",
      "price": "500",
      "tag_category": [TagCategoryId],
      "tags": [TagID],
      "product_link": "www.url.com",
      "is_top_product": false,
      "is_featured_product": false,
      "is_recommended_product": false,
      "is_trending_product": false,
      "skill_set": ["Skill"],
      "medium": "English"

  }
}
  /*
     * **********************************
     * Resquest Body of Add user to Product api
     * ***********************************
  */
  public AddUsertoProduct_Payload(ProductId: string, UserId: string): any {
    const payload = {
      "userId":UserId,
      "productId": ProductId,
      "is_demo":false
    };
    return payload;
  }


    /*
     * **********************************
     * Resquest Body of Add user to batch api
     * ***********************************
  */
    public AddUsertoBatch_Payload(BatchId: string, UserId: string): any {
      const payload = {
        "userId":[UserId],
        "batchId": BatchId
      };
      return payload;
    }

    /*
     * **********************************
     * Resquest Body of Add trainer to batch api
     * ***********************************
  */
    public AddTrainertoBatch_Payload(BatchId: string, trainerId: string): any {
      const payload = {
        "trainerIds":[trainerId],
        "batchId": BatchId
      };
      return payload;
    }


  /*
     * **********************************
     * Resquest Body Product Visiable api
     * ***********************************
  */
  public Visible_Product_Payload(ProductId: string): any {
    const payload = {
      "id": ProductId,
      "status": "Active"
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body to Add Assignment api
     * ***********************************
  */
// This is Previous code
  // public Add_Assignment_Payload(CourseId: string): any {
  //   const payload = {
  //     "name": "IGSAutoApiAssignment" + hostName,
  //     "courseId": CourseId
  //   };
  //   return payload;
  // }

  /*
     * **********************************
     * Resquest Body to Add Assignment api
     * ***********************************
  */
  public Add_Course_Announcements_Payload(CourseId: string, ProductID: string, TagID: string, TagCategoryID: string): any {

    const anngname = faker.person.firstName();
    console.log("Random Name is " + anngname);
    const payload = {
      "title": "IGSAutoCourseAnnouncement" + anngname,
      "description": "New description this is about the new announcement",
      "tags": [
        TagID
      ],
      "tag_category": [
        TagCategoryID
      ],
      "scope": "course",
      "user_type": "free",
      "status": "published",
      "courses": [
        CourseId
      ],
      "products": [
        ProductID
      ],
      "external_url": "https://www.google.com/",
      "type": "Image"
    };
    return payload;
  }

  public Add_Global_Announcements_Payload(TagID: string, TagCategoryID: string): any {
    const annname = faker.person.firstName();
    const payload = {
      "title": "IGSAutoGlobalAnnouncement" + annname,
      "description": "New description this is about the new announcement",
      "tags": [
        TagID
      ],
      "tag_category": [
        TagCategoryID
      ],
      "scope": "global",
      "user_type": "free",
      "status": "published",
      "type": "Free"
    }
  }
  /*
     * **********************************
     * Resquest Body to Add Assignment api
     * ***********************************
  */
  public Add_Assignment_Payload(CourseId: string): any {
    const AsgNameBdy = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiAssignment" + AsgNameBdy,
      "courseId": CourseId
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body to Add Assignment api
     * ***********************************
  */
  public Add_Project_Payload(CourseId: string): any {
    const PrjNameBdy = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiProject" + PrjNameBdy,
      "courseId": CourseId
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body to Add Section api
     * ***********************************
  */
  public Add_Section_Payload(CourseId: string): any {
    const SecNameBdy = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiSection" + SecNameBdy,
      "courseId": CourseId
    };
    return payload;
  }



  /*
     * **********************************
     * Resquest Body to Add Sub Section api
     * ***********************************
  */
  public Add_Sub_Section_Payload(SectionId: string): any {
    const SecSubNameBdy = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiSub_Section" + SecSubNameBdy,
      "sectionId": SectionId
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body Product Archive api
     * ***********************************
  */
  public Archive_Product_Payload(ProductId: string): any {
    const payload = {
      "id": ProductId,
      "is_archived": "true"
    };
    return payload;
  }

/*
   * **********************************
   * Resquest Body Create Question Bank api
   * ***********************************
*/
// public Question_Bank_Payload(CourseId:string,TagsID:string): any {
//   const payload = {
//     "name": "IGSAutoApiQuestionBank" + hostName,
//       "tags": [TagsID],
//       "courseId": CourseId
      
//     };
//   return payload;
//   }


  /*
     * **********************************
     * Resquest Body of create practice Quize api
     * Auth:Nithin
     * ***********************************
  */
  public create_practice_Quiz_Payload(CourseId: string,SectionId:string,SubSectionId:string): any {
    const QuizeNameBdy = faker.person.firstName();
    const nextMonthDate = assertions.currentDateAppender("nextMonthDate");
    const futureDate = assertions.currentDateAppender("futureDate");
    const payload = {
      "name": "ApiPracticeQuz"+QuizeNameBdy,
      "quiz_type": "practice",
      "result_config": "always",
      "start_date":futureDate,
      "end_date":nextMonthDate,
      "pass_percentage": 0,
      "is_certified": true,
      "reattempt_count": 0,
      "infinite_attempts":true,
      "retry_quiz": true,
      "courseId": CourseId,
      "description":"Long Api Check",
      "evaluation_type":"automation",
      "quizSectionId": SectionId,
      "quizSubSectionId": SubSectionId
    };
    return payload;
  }


  /*
     * **********************************
     * Resquest Body to Add  Section_Quize api
     * ***********************************
  */
  public Section_Quize_Payload(CourseId: string): any {
    const SectionNameQz = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiSectionQz" + SectionNameQz,
      "courseId": CourseId
    };
    return payload;
  }

  /*
     * **********************************
     * Resquest Body to Add  Section_Quize api
     * ***********************************
  */
  public Sub_Section_Quize_Payload(SectionId: string): any {
    const SubSectionNameQz = faker.person.firstName();
    const payload = {
      "name": "IGSAutoApiSubSectionQz" + SubSectionNameQz,
      "quizSectionId": SectionId
    };
    return payload;
  }

 /*
     * **********************************
     * Resquest Body of create practice Quize api
     * Auth:Nithin
     * ***********************************
  */
 public create_graded_Quiz_Payload(CourseId: string): any {
  const QuizeNameBdy = faker.person.firstName();
  const nextMonthDate = assertions.currentDateAppender("nextMonthDate");
  const futureDate = assertions.currentDateAppender("futureDate");
  const payload = {
    "name": "ApigradedQuz"+QuizeNameBdy,
    "quiz_type": "graded",
    "result_config": "always",
    "start_date":futureDate,
    "end_date":nextMonthDate,
    "pass_percentage": 0,
    "is_certified": true,
    "retry_quiz": true,
    "courseId": CourseId,
    "evaluation_type":"automation",
    "description":"Long Api Check",
  
  };
  return payload;
}


 /*
     * **********************************
     * Resquest Body of AddElementToSubSection_Course api
     * Auth:Nithin
     * ***********************************
  */
 public AddElementToSubSection_Course(CourseId: string,SectionId: string,SubSectionId: string): any {
  const TextTitleBdy = faker.person.firstName();
  const payload = {
    "courseId": CourseId,
    "sectionId": SectionId,
    "sectionSubSectionId":SubSectionId,
    "title": "AutoText"+TextTitleBdy,
    "description": "Added an element through api",
    "type": "Text",
    "is_downloadable": true,
    "url":""
  };
  return payload;
}

  /*
     * **********************************
     * Resquest Body of Add session to batch  api
     * ***********************************
  */
  public AddSessiontoBatch_Payload(BatchId: string): any {
    const presentDate = assertions.currentDateAppender("presentDate");
    console.log("session start date : "+presentDate);
    const futureDate = assertions.currentDateAppender("futureDate");
    console.log("session start date : "+futureDate);
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    console.log("session end date : "+oneMonthDiff);
    const futureDatetime = assertions.currentDateAppender("futureDate");
    // Extract the time part from the date string
    const timeString = futureDatetime.toString().split(" ")[4]; 
    console.log("session start: " + timeString);
    const payload = {
      "batchId": BatchId,
      "days": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
      ],
      "custom_dates": [],
      "no_of_session": 1,
      "duration": 1,
      "start_date": futureDate,
      "end_date": oneMonthDiff,
      "start_time": timeString,
      "is_blackout_day": false
  };
    return payload;
  }

 

  /**
   * @method request Body of Add Today session to batch  api
   * @param BatchId 
   * @returns 
   */
  public AddTodaySessiontoBatch_Payload(BatchId: string): any {
    const presentDate = assertions.currentDateAppender("presentDate");
    console.log("session start date : "+presentDate);
    const futureDate = assertions.currentDateAppender("futureDate");
    console.log("session start date : "+futureDate);
    const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
    console.log("session end date : "+oneMonthDiff);
    const futureDatetime = assertions.currentDateAppender("futureDate");
    // Extract the time part from the date string
    const timeString = futureDatetime.toString().split(" ")[4]; 
    console.log("session start: " + timeString);
    const payload = {
      "batchId": BatchId,
      "days": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
      ],
      "custom_dates": [],
      "no_of_session": 1,
      "duration": 1,
      "start_date": presentDate,
      "end_date": oneMonthDiff,
      "start_time": timeString,
      "is_blackout_day": false
  };
    return payload;
  }
  
   /**
   * Request Body to BlockUser - This needs Student Id to block
   * @param Student_ID 
   * @returns 
   */

  public BlockUser_Payload(Student_ID: string): any {
    const payload = {
      "id":Student_ID ,
      "access_status": "Blocked"
  }
    return payload;
  }

  /**
   * This request is used to create sub admin.
   * @param firstName 
   * @param lastName 
   * @param email 
   * @param mobile 
   * @returns 
   */

  public Create_SubAdmin_Payload(email : string, password : string){
    const payload = {
      "first_name": "Test",
      "last_name": "Igs",
      "email": email,
      "mobile": "9992929292",
      "password": password,
      "employment_type": "Internal",
      "roleId": "fea585c8-3971-4d01-826e-95d4e414ec55"
  }
  return payload;
  }
/**
 * This request is used to add faculty resource from trainer.
 * @author : SREEVATHSA
 * @param name 
 * @param sessionId 
 * @param batchId 
 * @param courseID 
 * @returns 
 */

  public Add_Faculty_Resource_Payload(name : string, sessionId : string, batchId : string, courseID : string ){
    const payload = {
      "name": name,
      "topic": "Topic",
      "sessionId": sessionId,
      "courseId": courseID,
      "batchId": batchId,
      "note": "Note",
      "fileName": name+".pdf",
      "file_type": "PDF"
    }
    
  return payload;
  }

 /**
     * **********************************
     * Resquest Body of Add Practie Quiz For Currect date
     * ***********************************


  */
  public create_practice_Quiz_ForCurrentDateTime_Payload(CourseId: string,SectionId:string,SubSectionId:string): any {
    const QuizeNameBdy = faker.person.firstName();
    const presentDate = assertions.currentDateAppender("presentDate");
    const futureDate = assertions.currentDateAppender("futureDate");
    const payload = {
      "name": "ApiPracticeQuz"+QuizeNameBdy,
      "quiz_type": "practice",
      "result_config": "always",
      "start_date":presentDate,
      "end_date":futureDate,
      "pass_percentage": 0,
      "is_certified": true,
      "reattempt_count": 0,
      "infinite_attempts":true,
      "retry_quiz": true,
      "courseId": CourseId,
      "description":"Long Api Check",
      "evaluation_type":"automation",
      "quizSectionId": SectionId,
      "quizSubSectionId": SubSectionId
    };
    return payload;
  }

  /**
   * @method to add multiple element type to sub section
   * @author MuthuKumaranM
   */
    
 public AddElementToSubSection_CourseWithMultipleElement(CourseId: string,SectionId: string,SubSectionId: string,type: string): any {
  const TextTitleBdy = faker.person.firstName();
  const payload = {
    "courseId": CourseId,
    "sectionId": SectionId,
    "sectionSubSectionId":SubSectionId,
    "title": "AutoText"+TextTitleBdy,
    "description": "Added an element through api",
    "type": type,
    "is_downloadable": true,
    "url":""
  };
  return payload;
}


/*
     * **********************************
     * Resquest Body of create Product api
     * ***********************************
  */
public createRecommendationProduct_Payload(CourseId: string, ProductCategoryId: string, TagCategoryId: string, TagID: string,): any {
  const ProNameBdy = faker.person.firstName();
  const oneMonthDiff = assertions.currentDateAppender("nextMonthDate");
  const payload = {
    "name": "IGSAutoApiProduct" + ProNameBdy,
    "internal_name": "frontend",
    "description": "Longs",
    "short_description": "Creating the Product through api",
    "courses": [CourseId],
    "product_type": "Premium",
    "product_kind": "public",
    "product_payment_type": "free",
    "slug_value": "777",
    "product_category": [ProductCategoryId],
    "duration": "1 months",
    "validity": "2 months",
    "price": "500",
    "tag_category": [TagCategoryId],
    "tags": [TagID],
    "product_link": "www.url.com",
    "is_top_product": false,
    "is_featured_product": false,
    "is_recommended_product": true,
    "is_trending_product": false,
    "skill_set": ["Skill"],
    "medium": "English",
    "unique_id":"ECAP"
  };
  return payload;
}

}

export default new Payloads();
