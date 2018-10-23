using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class ExamController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SchoolSchedule()
        {
            return View();
        }
        public ActionResult ExamSchedule()
        {
            return View();
        }
    }
}