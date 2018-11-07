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
<<<<<<< HEAD


        [HttpGet]
        public ActionResult AddStudent()
        {
            if (Session["admin"] != null)
            {
                return View();
=======
        public ActionResult StudentList()
        {
            var list = services.List();
            return Json(list,JsonRequestBehavior.AllowGet);
        }
        public ActionResult RemoveStudent(int id)
        {
            if (Session["admin"] != null) { 
            services.Remove(id);
            return Json(new { msg="Done"}, JsonRequestBehavior.AllowGet);
            }
            else
            {
                
                return RedirectToAction("Login","Home");
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
                return RedirectToAction("Login", "Home");
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
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        [HttpPost]
        public JsonResult AddStudent(Student_Record rec)
        {
            if (rec.Stud_Id == 0)
            {
                services.AddStudent(rec);
                return Json(new { msg = "save" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                services.Update(rec);
                return Json(new { data = "Edit" }, JsonRequestBehavior.AllowGet);
            }
        }

<<<<<<< HEAD

        public ActionResult StudentList()
        {
            var list = services.List();
            return Json(list, JsonRequestBehavior.AllowGet);

        }

        public ActionResult RemoveStudent(int id)
        {
            if (Session["admin"] != null)
            {
                services.Remove(id);
                return Json(new { msg = "Done" }, JsonRequestBehavior.AllowGet);
            }
            else
            {

                return RedirectToAction("Login", "Home");
            }
        }

        [HttpGet]
        public ActionResult GetStudent(int id)
        {
            if (Session["admin"] != null)
            {
                var det = db.Student_Records.Find(id);
                return Json(det, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
=======
        public ActionResult StudentList()

        {


            var list = services.List();
            return View(list);


        }


>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
        public ActionResult AddParents()
        {
            return View();
        }
        
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

=======
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742

        
    }

}