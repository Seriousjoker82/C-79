var All_names = []

function submit(){

var Name_1 = document.getElementById("Student_name_1").value;
var Name_2 = document.getElementById("Student_name_2").value;
var Name_3 = document.getElementById("Student_name_3").value;
var Name_4 = document.getElementById("Student_name_4").value;

All_names.push(Name_1)
All_names.push(Name_2)
All_names.push(Name_3)
All_names.push(Name_4)
console.log (All_names)
document.getElementById("Name_values").innerHTML=All_names; 
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sort(){
All_names.sort()
console.log(All_names)
document.getElementById("Name_values").innerHTML=All_names
}
