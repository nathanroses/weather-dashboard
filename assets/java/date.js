
//VARIABLE
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().format('LTS');
//START OF SCRIPT

$("#currentDay").html(currentDay);

//STORE TASK UPON SAVE CLICK
$(document).ready(function () {


    $('.save-container').on("click", function () {
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem (text);
    })



  //Time Function If and Else Statements
     function timeScheduler() {
         //current time
         var currentTime = moment().format('LTS');
         //time loop
         $(".time-block").each(function () {
             //select time
             var timeSelected = preseInt($(this).attr("id").split("hr")[1]);
             //checks time
             if (timeSelected < currentTime) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
            //checks if time selected is equal to current time
             else if (timeSelected === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            //removes both past and future makes task present
             else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
         })
     }




//STORAGE OF DATA ID INPUTED (8AM-8PM)
$("#hr1.description").val(localStorage.getItem("hr1"));
$("#hr2.description").val(localStorage.getItem("hr2"));
$("#hr3.description").val(localStorage.getItem("hr3"));
$("#hr4.description").val(localStorage.getItem("hr4"));
$("#hr5.description").val(localStorage.getItem("hr5"));
$("#hr6.description").val(localStorage.getItem("hr6"));
$("#hr7.description").val(localStorage.getItem("hr7"));
$("#hr8.description").val(localStorage.getItem("hr8"));
$("#hr9.description").val(localStorage.getItem("hr9"));
$("#hr10.description").val(localStorage.getItem("hr10"));
$("#hr11.description").val(localStorage.getItem("hr11"));
$("#hr12.description").val(localStorage.getItem("hr12"));
$("#hr13.description").val(localStorage.getItem("hr13"));


timeScheduler();


})

//END OF SCRIPT