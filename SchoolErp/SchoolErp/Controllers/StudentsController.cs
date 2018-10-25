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
        // GET: Students
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult AddStudent()
        {
            ViewBag.sec = db.Sections.ToList();
            ViewBag.par = db.Parent_Records.ToList();
            ViewBag.clas = db.Classes.ToList();
            return View();
        }
        [HttpPost]
        public JsonResult AddStudent(Student_Record rec)
        {
            StudentServices services = new StudentServices();
            services.AddStudent(rec);
            ViewBag.sec = db.Sections.ToList();
            ViewBag.par = db.Parent_Records.ToList();
            ViewBag.clas = db.Classes.ToList();
            return Json(new { msg="save"},JsonRequestBehavior.AllowGet);
        }
        public ActionResult AddParents()
        {
            return View();
        }
        public ActionResult AddAttendence()
        {
            return View();
        }
    }

}