using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolErp.Services
{
    public class StudentServices
    {

        SchoolSystemsEntities2 db = new SchoolSystemsEntities2();
        // GET: StudentServices
        public void AddStudent(Student rec)
        {
            db.Students.Add(rec);
            db.SaveChanges();

        }
    }
}