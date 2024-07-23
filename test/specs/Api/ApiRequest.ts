// import Profilepage from "../../pageobjects/Trainer/Trainer_Profile_Page.ts";
// import logindata from "../../testdata/admin.json";
import RandomApi from '../../api/api-tests/randomAPI'

describe("Api", () => {
  // beforeEach(async () => {
  //   //await LoginPage.open();
  //   await browser.url(logindata.appendUrl.traineer);
  //   await browser.maximizeWindow();
  // });


  it('create_BearerToken_Admin Through Api', async () => {
    const rd = await RandomApi.getRandomApi();
    console.log(rd);
  });

  // it('create_BearerToken_Student Through Api', async () => {
  //   await api.createBearerToken_Student();
  //   });

  // it('create_BearerToken_Student Through Api', async () => {
  //   await api.createBearerToken_Trainer();
  //   });


  // it('create_TagCategory Through Api', async () => {
  //   await api.createTagCategory();
  //   });

  // it('create_Tag Through Api', async () => {
  //    await api.createTag();
  //   });

  // it('create Both Tag And Category Through Api', async () => {
  //     await api.createBothTagAndCategoryThroughApi();
  //    });

  // it('create_Course Through Api', async () => {
  //     await api.createCourseApi();
  //    });

  // it('create_Host Through Api', async () => {
  //     await api.createHostApi();
  //    });


  // it('create_ProductCategory Through Api', async () => {
  //     await api.createProductCategory();
  //    });

  // it('create_Product Through Api', async () => {
  //     await api.createProductAPi();
  //    });

  // it('Delete_Course Through Api', async () => {
  //     await api.DeleteCourse();
  //    });

  //  it('Delete_TagCategory Through Api', async () => {
  //   await api.DeleteTagCategory();
  //  });

  //  it('Delete_Tag Through Api', async () => {
  //   await api.DeleteTag();
  //  });

  //  it('Delete_ProductCategory Through Api', async () => {
  //   await api.DeleteProductCategory();
  //  });

  //  it('Delete_Product Through Api', async () => {
  //   await api.DeleteProduct();
  //  });

  //--------------------------------------------------------

  //  it('Product_Visible Through Api', async () => {
  //   await api.Visible_Status_Product();
  //  });

  // it('CreateProduct_AddUserToProduct', async () => {
  //   await api.CreateProduct_AddUserToProduct();
  //  });

  //  it('Add_AssignmentToCourse', async () => {
  //   await api.Add_AssignmentToCourse();
  //  });   

  //  it('Delete_AssignmentFromCourse', async () => {
  //   await api.Delete_AssignmentToCourse();
  //  }); 

  // it('Add_ProjectToCourse', async () => {
  //     await api.Add_ProjectToCourse();
  //    }); 


  // it('Delete_ProjectFromCourse', async () => {
  //   await api.Delete_ProjectFromCourse();
  //  }); 

  //  it('Add_SectionToCourse', async () => {
  //   await api.Add_SectionToCourse();
  //  }); 

  //  it('Add_Sub_SectionToCourse', async () => {
  //   await api.Add_Sub_SectionToCourse();
  //  }); 

  //  it('Add_CourseMaterialToCourse', async () => {
  //   await api.Add_CourseMaterialToCourse();
  //  }); 

  //  it('Archive_Product', async () => {
  //   await api.Archive_Product();
  //  }); 

  // it('Delete_RegisteredStudent_Only', async () => {
  //   await api.Delete_RegisteredStudent_Only();
  //  });

  //  it('Delete_RegisteredStudent_Product', async () => {
  //   await api.Delete_RegisteredStudent_Product();
  //  });

  //  it('Question Bank', async () => {
  //   await api.Question_Bank();
  //  }); 

  //   it('Add Announcements to particular course', async () => {
  //   await api.Add_Course_Announcements();
  //  }); 

  //  it('Add Announcements globally', async () => {
  //   await api.Add_Global_Announcements();
  //  }); 

  //   it('Delete Announcement from a particular course', async () => {
  //   await api.Delete_CourseAnnouncement();
  //  }); 

  //  it('Delete Global Anouncement ', async () => {
  //   await api.Delete_GlobalAnnouncement();
  //  }); 

  //  it('Get Student Details', async () => {
  //   await api.GetStudentDetails();
  //  }); 

  //  it('Delete Student ', async () => {
  //   await api.Delete_Student();
  //  }); 

  //======================================================
  // it('create Section Quiz Api', async () => {
  //  await api.createSectionQuizApi();
  //   });  

  // it('create Sub Section Quiz Api', async () => {
  //     await api.createSubSectionQuizApi();
  // });

  //  it('create practice Quiz Api', async () => {
  //   await api.create_practice_QuizApi();
  //  }); 

  //  it('Delete practice Quiz Api', async () => {
  //   await api.Delete_practice_QuizeCourse();
  //  }); 

  //  it('Create graded Quiz Api', async () => {
  //   await api.create_graded_QuizApi();
  //  }); 

  //  it('Delete graded Quiz Api', async () => {
  //   await api.Delete_graded_QuizeCourse();
  //  }); 

  //  it('Delete Section Quiz Api', async () => {
  //   await api.Delete_Section_Quize();
  //  }); 

  //  it('Add Element To Sub Section', async () => {
  //     await api.AddElementToSubSection_Course();
  //    }); 

  // it('create_Batch Through Api', async () => {
  //   await api.createBatchAPi();
  // });
  // it('Delete_Batch Through Api', async () => {
  //   await api.DeleteBatch();
  // });

  // it('Add_Session _Batch Through Api', async () => {
  //   await api.AddSessionToBatchAPi();
  // });

  // it('Add_User _Batch Through Api', async () => {
  //   await api.AddUserToBatch();
  // });

  // it('Add_Trainer _Batch Through Api', async () => {
  //   await api.AddTrainerToBatch();
  // });

  // it('create_Course_Batch_Session_AddUser_AddTrinertoBatch APi', async () => {
  //   await api.create_Course_Batch_Session_AddUser_AddTrinertoBatch();
  // });

  // it('Delete_Tagcategory_Tag_Course_Batch APi', async () => {
  //   await api.Delete_Tagcategory_Tag_Course_Batch();
  // });

  //  it('Add New Trainer By Admin APi', async () => {
  //     await api.Add_Trainer_ByAdmin_Batch();
  //   });

  //  it('Delete Newly added  Trainer By Admin APi', async () => {
  //     await api.Delete_Trainer_ByAdmin_Batch();
  //   });


  // it('Add Element To Sub Section', async () => {
  //   await api.AddElementToSubSection_CourseWithMultipleElement();
  // }); 

  // it('Get Courses List Through Api', async () => {
  //     await api.getCourseList();
  //   });

  // it('Get Product List Through Api', async () => {
  //     await api.getProductsList();
  //   });



  afterEach(async () => {
    await browser.pause(2000)
    await browser.reloadSession();
  });

})