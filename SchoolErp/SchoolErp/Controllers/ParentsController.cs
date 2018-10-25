using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class ParentsController : Controller
    {
        // GET: Parents
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddParent()
        {
            return View();
        }
    }
}