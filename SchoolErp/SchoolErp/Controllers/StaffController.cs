using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class StaffController : Controller
    {
        // GET: Staff
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Staff()
        {
            return View();
        }
        public ActionResult AddDesignation()
        {
            return View();
        }
        public ActionResult AddSalary()
        {
            return View();
        }
    }
}