



function clearform() {
     $('#st_name').val('');
     $('#father').val('');
     $('#father').trigger('change');
    $('#Rollno').val('');
     $('#DOB').val('');
    $('#addresses').val('');
   $('#gender').val('');
   $('#class_ID').val('');
   $('#class_ID').trigger('change');
   $('#Section_ID').val('');
   $('#Section_ID').trigger('change');
    $('#password').val('');

    $('#Phone_no').val('');

}

function Addstudent() {
   // debugger;
    //preventDefault();
    
    var st_name = $('#st_name').val();
    var father = $('#father_name').val();
    var Rollno = $('#Rollno').val();
    var DOB = $('#DOB').val();
    var addresses = $('#addresses').val();
    var gender = $('#gender').val();
   var password = $('#password').val();
    
    if (st_name=="") {
        ShowError("Please Enter Student Name");
        return;
    }
    if (father == "") {
        ShowError("Please Enter Father Name");
        return;
    }
    if (Rollno == "") {
        ShowError("Please Enter Roll No");
        return;
    }
    if (DOB == "" ) {
        ShowError("Please Enter DOB");
        return;
    }
    if (addresses == "") {
        ShowError("Please Enter Address");
        return;
    }
   
    if (password == "") {
        ShowError("Please Enter Student Password");
        return;
    }
   
    $.ajax({
        url: "/Students/AddStudent",
        type: "Post",
       
        data: {
            Name: st_name,
            Roll_Number: Rollno,
            Father_Name: father,
            DOB: DOB,
            Address: addresses,
            Password: password,
            Gender: gender,
           
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        datatype: "json",
        success: function (data) {
            if(data.msg=="save"){
                ShowSuccess('Save SuccessFully');
                clearform();
            }
        },
        error: function (error) {
            ShowError('Error in saving');
        },
        
    });
}