$(document).ready(function () {
    clearform();
    GetList();
<<<<<<< HEAD
   
   
=======
    //$("#tblStock").DataTable({

    //});
    //studentlist();
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
});


function clearform() {
<<<<<<< HEAD
    $('#Stud_Id').val('');
$('#password').val('');
     $('#st_name').val('');
     $('#father_name').val('');
     $('#Rollno').val('');
     $('#DOB').val('');
     $('#address').val('');
    //$("input[name='Gender']:checked").val('');
    
   
=======
    $('#st_name').val('');
    $('#father_name').val('');
    $('#Rollno').val('');
    $('#DOB').val('');
    $('#address').val('');
    //$("input[name='Gender']:checked").val('');
<<<<<<< HEAD
    var gender = $("input[name='Gender']:checked").val();
   $('#password').val('');
=======
    $("input[name='Gender']").prop('checked', false);
    $('#password').val('');
>>>>>>> 7dbb00d4533373a24a61efb6a16315e91efb46ef


}
function GetList() {
    //debugger;
    $('#tbllist').html('');
    $.ajax({
        type: 'GET',
        dataType: 'html',
        //dataType: 'application/json',
        url: '/Students/StudentList',
        success: function (result) {
         
            var result = JSON.parse(result);
            for (var i = 0 ; i < result.length ; i++) {
                AddOption = '<tr id=' + result[i].stud_id + '><td>' + result[i].Name + '</td> <td>' + result[i].Father_Name + '</td> <td>' + result[i].Roll_Number + '</td> <td>' + result[i].DOB + '</td> <td>' + result[i].Address + '</td> <td style="text-align:center">' + '<button id="loading" class="btn btn-sm" style="font-size:15px;color:red;hover:green" onclick=' + ' Delete' + '(' + result[i].Stud_Id + ')><span class="glyphicon glyphicon-trash"></span></button> | <button id="Editid" class="btn btn-sm" style="font-size:20px;color:Aqua;" onclick=' + 'GetId' + '(' + result[i].stud_id + ')>' + " " + '<span class="glyphicon glyphicon-edit"></span> </button></td> </tr>'
                $('#tbllist').append(AddOption);
            }
         
           

        },
        error: function (error) {
        }
    });
}
function Delete(id) {
   // debugger;
    $.ajax({
        url: "/Students/RemoveStudent/" + id,
        type: "POST",

        contentType: "application/json;charset=utf-8",
        datatype: "json",
        success: function (result) {
            if (result.msg == "Done") {
                ShowSuccess('Delete SuccessFully');
                GetList();
            }
            load();
        },
        Error: function (errormessage) {
            alert("You cannot Delete.");
        }
    });
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742

}
function Editstudent() {
    //debugger;
    var id = $('#id').val();
    var st_name = $('#st_name').val();
    var father = $('#father_name').val();
    var Rollno = $('#Rollno').val();
    var DOB = $('#DOB').val();
    var address = $('#address').val();

    var password = $('#password').val();

    if (id == "") {
        ShowError("Please Again select Record");
        return;
    }
    if (st_name == "") {
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
    if (DOB == "") {
        ShowError("Please Enter DOB");
        return;
    }
    if (address == "") {
        ShowError("Please Enter Address");
        return;
    }

    if (password == "") {
        ShowError("Please Enter Student Password");
        return;
    }


    $.ajax({
        url: "/Students/UpdateStudent",
        type: "Post",

        data: {
            Stud_Id: id,
            Name: st_name,
            Roll_Number: Rollno,
            Father_Name: father,
            DOB: DOB,
            Address: address,
            Password: password,


        },

        datatype: "json",
        success: function (data) {
            if (data.data == "Edit") {
                ShowSuccess('Updated SuccessFully');
                clearform();
            }
        },
        error: function (error) {
            ShowError('Error in saving');
        },

    });
}



function Addstudent() {
    //debugger;
    //preventDefault();
<<<<<<< HEAD
    var Stud_Id = $('#Stud_Id').val();
=======

>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
    var st_name = $('#st_name').val();
    var father = $('#father_name').val();
    var Rollno = $('#Rollno').val();
    var DOB = $('#DOB').val();
    var address = $('#address').val();
    var gender = $("input[name='Gender']:checked").val();
    var password = $('#password').val();

    if (st_name == "") {
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
    if (DOB == "") {
        ShowError("Please Enter DOB");
        return;
    }
    if (address == "") {
        ShowError("Please Enter Address");
        return;
    }

    if (password == "") {
        ShowError("Please Enter Student Password");
        return;
    }
    if (gender == "") {
        ShowError("Please Enter Gender");
        return;
    }
<<<<<<< HEAD
  
            
=======

>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
    $.ajax({
        url: "/Students/AddStudent",
        type: "Post",

        data: {
            Stud_Id: Stud_Id,
            Name: st_name,
            Roll_Number: Rollno,
            Father_Name: father,
            DOB: DOB,
            Address: address,
            Password: password,
            Gender: gender,

        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        datatype: "json",
        success: function (data) {
            if (data.msg == "save") {
                ShowSuccess('Save SuccessFully');
                clearform();
                GetList();
<<<<<<< HEAD
                //$('#gender').prop("checked", true);
                //$("input[name='gender']:checked").val('Male');
            } else if (data.data == "Edit") {
                ShowSuccess('Updated SuccessFully');
                clearform();
                GetList();
                //$('#gender').prop("checked", true);
=======
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
            }
        },
        error: function (error) {
            ShowError('Error in saving');
        },

    });
}

function GetList() {
    //debugger;
    $('#tbllist').html('');
    $.ajax({
        type: 'GET',
        dataType: 'html',
        //dataType: 'application/json',
        url: '/Students/StudentList',
        success: function (result) {

            var result = JSON.parse(result);
            for (var i = 0 ; i < result.length ; i++) {
                AddOption = '<tr id=' + result[i].stud_id + '><td>' + result[i].Name + '</td> <td>' + result[i].Father_Name + '</td> <td>' + result[i].Roll_Number + '</td> <td>' + result[i].DOB + '</td> <td>' + result[i].Address + '</td> <td style="text-align:center">' + '<button id="loading" class="btn btn-sm" style="font-size:15px;color:red;hover:green" onclick=' + ' Delete' + '(' + result[i].Stud_Id + ')><span class="glyphicon glyphicon-trash"></span></button> | <button id="Edit" class="btn btn-sm" style="font-size:20px;color:Aqua;" onclick=' + 'GetId' + '(' + result[i].Stud_Id + ')>' + " " + '<span class="glyphicon glyphicon-edit"></span> </button></td> </tr>'
                $('#tbllist').append(AddOption);
            }



        },
        error: function (error) {
        }
    });
}
function Delete(id) {
     debugger;
    $.ajax({
        url: "/Students/RemoveStudent/" + id,
        type: "POST",

        contentType: "application/json;charset=utf-8",
        datatype: "json",
        success: function (result) {
            if (result.msg == "Done") {
                ShowSuccess('Delete SuccessFully');
                GetList();
            }
           
        },
        Error: function (errormessage) {
            alert("You cannot Delete.");
        }
    });

}

function GetId(id) {
    debugger;
    //$("#txt1").css("border-color", "red");
    //$("#txt1").focus();
    //$("#txt2").css("border-color", "red");
    $("#Stud_Id").focus();
   
    $.ajax({

        url: "/Students/GetStudent/" + id,
        typr: "GET",
        contentType: "application/json;charset=utf-8",
        datatype: "json",
        success: function (result) {
           
           
            $("#Stud_Id").val(result.Stud_Id)
            $("#st_name").val(result.Name);
            $("#father_name").val(result.Father_Name);
            $("#Rollno").val(result.Roll_Number);
           
            $("#DOB").val(result.DOB);
            $("#password").val(result.Password);
            $("#address").val(result.Address);
           // debugger;
            //alert("rightway");
           if (result.Gender.toUpperCase() === "MALE") {
                $('#gender').prop("checked", true);
            }
            else
            {
                $('#gender1').prop("checked", true);
            }
            

        },
        error: function (errormessage) {
            alert("Something is Wrong in Get Action");
        }
    });
}

<<<<<<< HEAD
=======
//Datatable



//function BindGrid() {
//    debugger;
//    var _url = '/Students/StudentList';

//    var _cellrenderer = function (row, column, value) {
//        var html = '<div style="padding:15px">' + value + '</div>';
//        return html;
//    }

//    var actionsrenderer = function (row, column, value) {
//        var html = '';
//        html += '<ul class="icons-list" style="padding-right:5px;padding-top:15px;text-align:center">' +
//                       '<li class="dropdown">' +
//                          '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
//                               '<i class="icon-menu7"></i>' +
//                               '<span class="caret"></span>' +
//                          '</a>' +
//                       '</li>' +
//                 '</ul>';

//        return html;
//    }

//    var source =
//    {
//        datatype: "json",
//        datafields: [
//             { name: 'Stud_Id', type: 'number' },
//             { name: 'Name', type: 'string' },
//             { name: 'Father_Name', type: 'string' },
//             { name: 'DOB', type: 'string' },
//             { name: 'Roll_Number', type: 'string' },
//             { name: 'Address', type: 'string' },
//             { name: 'Admission_Date', type: 'string' },
//              ],
//        url: _url,
//        // update the grid and send a request to the server.
//        filter: function () {
//            $("#jqxgrid").jqxGrid('updatebounddata', 'filter');
//        },
//        // update the grid and send a request to the server.
//        sort: function () {
//            $("#jqxgrid").jqxGrid('updatebounddata', 'sort');
//        },
//        root: 'Rows',
//        beforeprocessing: function (data) {
//            source.totalrecords = data.TotalRows;
//        }
//    };

//    var dataAdapter = new $.jqx.dataAdapter(source, {
//        loadComplete: function () {
//        },
//        loadError: function (xhr, status, error) {
//            ShowError(error);
//        }
//    });
//    // initialize jqxGrid
//    $("#jqxgrid").jqxGrid(
//          {
//              source: dataAdapter,
//              width: '100%',
//              height: '500',
//              autoshowfiltericon: true,
//              rowsheight: 30,
//              pageable: true,
//              filterable: false,
//              sortable: true,
//              virtualmode: true,
//              autorowheight: true, //to wrap text
//              autoheight: true, //to wrap text

//              rendergridrows: function (obj) {
//                  return obj.data;
//              },
//              columns: [
//                  { text: "&nbsp;Student_ID#", datafield: "Stud_Id", cellsrenderer: _cellrenderer, width: 100 },
//                  { text: "&nbsp;Student Name", datafield: "Name", cellsrenderer: _cellrenderer, width: 100 },
//                  { text: "&nbsp;Father Name", datafield: "Father_Name", cellsrenderer: _cellrenderer, width: 250 },
//                  { text: "&nbsp;DOB", datafield: "DOB", cellsrenderer: _cellrenderer, width: 250 },
//                  { text: "&nbsp;Roll No#", datafield: "Roll_Number", cellsrenderer: _cellrenderer, width: 120 },
//                  { text: "&nbsp;address", datafield: "Address", cellsrenderer: _cellrenderer, width: 150 },
//                  { text: "&nbsp;Addmission", datafield: "Admission_Date", cellsrenderer: _cellrenderer, width: 100 },

//              ]
//          });
//    // initialize the menu, popup window and buttons.
//    var contextMenu = $("#jqxmenu").jqxMenu({ autoCloseOnClick: true, width: '160px', height: '80px', autoOpenPopup: false, mode: 'popup' });
//    // bind cellclick to grid
//    $("#jqxgrid").bind('cellclick', function (event) {
//        var count = $("#jqxgrid").jqxGrid('columns').records.length;
//        if (event.args.columnindex == count - 1) {
//            var scrollTop = $(window).scrollTop();
//            var scrollLeft = $(window).scrollLeft();
//            var xOffset = 0;
//            var yOffset = 0;
//            var menuWidth = contextMenu.width();
//            var menuHeight = contextMenu.height();
//            var windowWidth = $(window).width();
//            var windowHeight = $(window).height();
//            var eventX = parseInt(event.args.originalEvent.clientX);
//            var eventY = parseInt(event.args.originalEvent.clientY);

//            if (eventX + menuWidth > windowWidth) {
//                xOffset = menuWidth;
//            };
//            if (eventY + menuHeight > windowHeight) {
//                yOffset = menuHeight;
//            };
//            contextMenu.jqxMenu('open', eventX + 5 + scrollLeft - xOffset, eventY + 5 + scrollTop - yOffset);
//            editrow = event.args.rowindex;
//            var dataRecord = $("#jqxgrid").jqxGrid('getrowdata', editrow);
//            editID = dataRecord.ID;
//        };
//    });
//}
>>>>>>> ef75e95a758d64431d2f80cb8893f527e7a01742
