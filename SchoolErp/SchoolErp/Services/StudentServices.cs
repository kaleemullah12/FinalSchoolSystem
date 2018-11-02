﻿using SchoolErp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq.Dynamic;
namespace SchoolErp.Services
{
    public class StudentServices
    {

        InvictusSchoolEntities db = new InvictusSchoolEntities();
    

        // GET: StudentServices
        public void AddStudent(Student_Record rec)
        {
           
            
                rec.Admission_Date = DateTime.Now;
                db.Student_Records.Add(rec);
                db.SaveChanges();
           
        }
        //public object List()
        //{
        //    var obj = db.Student_Records.ToList(); 
        //        return obj;
        //}
        public void Remove(int id)
        {
            var rec = db.Student_Records.Find(id);
            db.Student_Records.Remove(rec);
            db.SaveChanges();
        }
        public void Update(Student_Record rec)
        {

<<<<<<< HEAD
            var ret = db.Student_Records.Where(x => x.Stud_Id == rec.Stud_Id).SingleOrDefault();
            ret.Stud_Id = rec.Stud_Id;
            ret.Name = rec.Name;
            ret.Father_Name = rec.Father_Name;
            ret.Address = rec.Address;
            ret.DOB = rec.DOB;
            ret.Password = rec.Password;
            ret.Roll_Number = rec.Roll_Number;
            ret.Gender = ret.Gender;
            ret.Admission_Date = ret.Admission_Date;
            db.SaveChanges();

=======
        public object List()
        {
            var obj = db.Student_Records.ToList();
            return obj;
        }
        

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1

     
       
        public object List()
        {
            var obj = db.Student_Records.ToList();
            return obj;
>>>>>>> 942951c5f2fe3fb548f77941b95ee13156b27037
        }



<<<<<<< HEAD
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
=======
>>>>>>> ff09218455f10ac03012212ae929f7b96bfecaa1
    }




}
