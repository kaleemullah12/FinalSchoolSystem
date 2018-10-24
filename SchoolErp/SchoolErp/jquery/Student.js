$document.ready(function () {
  
});
function Addstudent() {
    var st_name = $('#st_name').val();
    var father = $('#father').val();
    var Rollno = $('#Rollno').val();
    var DOB = $('#DOB').val();
    var Phone_no = $('#Phone_no').val();
    var Image = $('#Image').val();
    var addresses = $('#addresses').val();
    var Fee_Status = $('#Fee_Status').val();
    var gender = $('#gender').val();
    var class_ID = $('#class_ID').val();
    var Section_ID = $('#Section_ID').val();
    var password = $('#password').val();
    $.ajax({
        url: "/Students/AddStudent",
        type: "Post",
       
        data: {
            Stud_Name: st_name,
            Roll_No: Rollno,
            Father_ID: father,
            DOB: DOB,
            Phone_no: Phone_no,
            Image: Image,
            Address: addresses,
            Fee_Status: Fee_Status,
            Password: password,
            Gender: gender,
            Class_ID: class_ID,
            Sec_ID:Section_ID,
    
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        datatype: "json",
        success: function (data) {
            if(data.msg=="save"){
                alert("Save SuccessFully")
            }
        },
        error: function (error) {
            alert("Error in saving");
        },
        
    });
}