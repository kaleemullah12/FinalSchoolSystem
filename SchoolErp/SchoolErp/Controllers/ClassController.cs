using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class ClassController : Controller
    {
        // GET: Class
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddClass()
        {
            return View();
        }
        public ActionResult AddSection()
        {
            return View();
        }
    }
}