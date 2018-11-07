using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolErp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult menu()
        {
            return View();
        }
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Admin data)
        {
            InvictusSchoolEntities db = new InvictusSchoolEntities();
            var rec = db.Admins.Where(x => x.User_Name == data.User_Name && x.Password == data.Password).SingleOrDefault();
            Session["admin"] = rec;
            if (Session["Admin"] != null)
            {
                return RedirectToAction("Dashboard");
            }
            else
            {
                ViewBag.msg = "Your User Name Or Password is Incorrect!!";
                return View();
            }
        }
        public ActionResult Dashboard()
        {
            InvictusSchoolEntities db = new InvictusSchoolEntities();
            if (Session["admin"] != null)
            {
                var list = db.Student_Records.ToList();
                ViewBag.total = list.Count();
                return View();
            }
            return RedirectToAction("Login");
        }
        public ActionResult Logout()
        {
            Session.Abandon();
            return RedirectToAction("Login");
        }
    }
}