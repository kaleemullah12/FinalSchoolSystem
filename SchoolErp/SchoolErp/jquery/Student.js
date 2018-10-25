



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
    var father = $('#father option:selected').val();
    var Rollno = $('#Rollno').val();
    var DOB = $('#DOB').val();
    var addresses = $('#addresses').val();
    var gender = $('#gender').val();
    var class_ID = $('#class_ID option:selected').val();
    var Section_ID = $('#Section_ID option:selected').val();
    var password = $('#password').val();
    var phone = $('#Phone_no').val();
    
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
    if (class_ID == "") {
        ShowError("Please Enter Class Name");
        return;
    }
    if (Section_ID == "") {
        ShowError("Please Enter Section Name");
        return;
    }
    if (password == "") {
        ShowError("Please Enter Student Password");
        return;
    }
    if (phone == "") {
        ShowError("Please Enter Phone No#");
        return;
    }
    $.ajax({
        url: "/Students/AddStudent",
        type: "Post",
       
        data: {
            Stud_Name: st_name,
            Roll_No: Rollno,
            Father_ID: father,
            DOB: DOB,
            Phone_no:phone ,
            Address: addresses,
            Password: password,
            Gender: gender,
            Class_ID: class_ID,
            Sec_ID:Section_ID,
    
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