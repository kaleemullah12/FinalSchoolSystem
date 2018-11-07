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
        InvictusSchoolEntities db = new InvictusSchoolEntities();
        public ActionResult menu()
        {
            return View();
        }
        public ActionResult Login()
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
            
            var rec = db.Admins.Where(x => x.User_Name == data.User_Name && x.Password == data.Password).SingleOrDefault();
            Session["admin"] = rec;
<<<<<<< HEAD
            if (Session["Admin"] != null)
            {
                return RedirectToAction("Dashboard");
=======
            if (Session["Admin"] != null) { 
            return RedirectToAction("Dashboard");
>>>>>>> 7dbb00d4533373a24a61efb6a16315e91efb46ef
            }
            else
            {
                ViewBag.msg = "Your User Name Or Password is Incorrect!!";
                return View();
            }
        }
        public ActionResult Dashboard()
        {
<<<<<<< HEAD
            InvictusSchoolEntities db = new InvictusSchoolEntities();
            if (Session["admin"] != null)
            {
                var list = db.Student_Records.ToList();
                ViewBag.total = list.Count();
                return View();
=======
            if (Session["admin"] != null) {
                var list = db.Student_Records.ToList();
               ViewBag.total = list.Count();
            return View();
>>>>>>> 7dbb00d4533373a24a61efb6a16315e91efb46ef
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