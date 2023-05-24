name_student_array= []

function submit() {
    var display_student_array = [] ;

    for (var i=1; i <=4; i++) {
     var name_of_students = document.getElementById("name_of_the_student_"+i).value ;
     console.log(name_of_students);
    
     name_student_array.push(name_of_students);

    }

    var length_of_array=name_student_array.length;

    for (var k=0; k<length_of_array; k++){
        display_student_array.push("<h4>Name - "+name_student_array[k]+"</h4>");
        console.log(display_student_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_commas = display_student_array.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=remove_commas;

     document.getElementById("submit_button").style.display="none"
}