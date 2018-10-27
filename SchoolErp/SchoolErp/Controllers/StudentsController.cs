using SchoolErp.Models;
using SchoolErp.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class StudentsController : Controller
    {
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        StudentServices services = new StudentServices();
        // GET: Students
        public ActionResult Index()
        {
            return View();
        }

       
        [HttpGet]
        public ActionResult AddStudent()
        {
            return View();
        }
        [HttpPost]
        public JsonResult AddStudent(Student_Record rec)
        {
           
            services.AddStudent(rec);
            return Json(new { msg="save"},JsonRequestBehavior.AllowGet);
        }
        
    }

}