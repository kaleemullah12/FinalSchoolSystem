﻿using SchoolErp.Models;
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
        //public ActionResult StudentList()
        //{
        //   var list= services.List();
        //    return View(list);
        //}
       public ActionResult RemoveStudent(int id)
        {
            if (Session["admin"] != null) { 
            services.Remove(id);
            return RedirectToAction("StudentList");
            }
            else
            {
                
                return Content("you are not Authorize");
            }
        }
        [HttpGet]
        public ActionResult GetStudent(int id)
        {
            if (Session["admin"] != null) { 
            var det = db.Student_Records.Find(id);
            return View(det);
            }
            else
            {
                return Content("you are not Authorize");
            }
        }
        [HttpPost]
        public JsonResult UpdateStudent(Student_Record rec)
        {
            services.Update(rec);
            return Json(new { data="Edit"},JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult AddStudent()
        {
            if (Session["admin"] != null) { 
            return View();
            }
            else
            {
                return Content("You Are Not Authorize");
            }
        }
        [HttpPost]
        public JsonResult AddStudent(Student_Record rec)
        {
           
            services.AddStudent(rec);
            return Json(new { msg="save"},JsonRequestBehavior.AllowGet);
        }

        public ActionResult StudentList()

        {


            var list = services.List();
            return View(list);


        }
<<<<<<< HEAD
<<<<<<< HEAD


        public ActionResult AddParents()
        {
            return View();
        }
<<<<<<< HEAD
        public ActionResult AddAttendence()
        {
            return View();
        }
=======
=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
        
>>>>>>> 942951c5f2fe3fb548f77941b95ee13156b27037
        [HttpGet]
        public ActionResult Student_Enrolment()
        {
            var stud_list = db.Student_Records.ToList();
            ViewBag.stud = stud_list;
            var cl_list = db.Classes.ToList();
            ViewBag.cl = cl_list;
            var sec_list = db.Sections.ToList();
            ViewBag.sec = sec_list;
            var st_list = db.Staffs.ToList();
            ViewBag.st = st_list;
            return View();
        }
        [HttpPost]
        public JsonResult Student_Enrolment(Student_Enrolment rec)
        {
            EnrolmentServices services = new EnrolmentServices();
            services.Student_Enrolment(rec);
            var stud_list = db.Student_Records.ToList();
            ViewBag.stud = stud_list;
            var cl_list = db.Classes.ToList();
            ViewBag.cl = cl_list;
            var sec_list = db.Sections.ToList();
            ViewBag.sec = sec_list;
            var st_list = db.Staffs.ToList();
            ViewBag.st = st_list;



            return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
        }
<<<<<<< HEAD
=======
        [HttpGet]
        public ActionResult AddAttendence()
        {
            var stud_list = db.Student_Records.ToList();
            ViewBag.stud = stud_list;
            return View();
        }
        [HttpPost]
        public JsonResult AddAttendence(Attendence rec)
        {
            S_AttendenceServices services = new S_AttendenceServices();
            services.AddAttendence(rec);
            var stud_list = db.Student_Records.ToList();
            ViewBag.stud = stud_list;
            return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
        }
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
        
>>>>>>> 942951c5f2fe3fb548f77941b95ee13156b27037

        
    }

}