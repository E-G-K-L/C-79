student_names = [];

function submit() {
    var name1 = document.getElementById("1").value;
    var name2 = document.getElementById("2").value;
    var name3 = document.getElementById("3").value;
    var name4 = document.getElementById("4").value;
    
    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);

    console.log(student_names);

    document.getElementById("names").innerHTML = student_names;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sorting").style.display = "inline-block";
}

function sorting() {
    student_names.sort();
    console.log(student_names);
    document.getElementById("names").innerHTML = student_names;
}