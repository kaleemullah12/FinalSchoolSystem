using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class StudentsController : Controller
    {
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
        //[HttpPost]
        //public ActionResult AddStudent()
        //{
        //    return View();
        //}
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