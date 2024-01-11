function checkAnswers() {
    let score = 0;
    let form = document.forms["htmlQuizForm"];
    let q1 = form.elements["q1"].value;
    let q2 = form.elements["q2"].value;
    let q3 = form.elements["q3"].value;
    let q4 = form.elements["q4"].value;
    let q5 = form.elements["q5"].value;

    if (q1 == "a") {
        document.getElementById("correct1").style.display = "flex";
        console.log("correct");
        score++;
    } else {
        document.getElementById("wrong1").style.display = "flex";
        console.log("wrong");
    }

    if (q2 == "<h1>") {
        document.getElementById("correct2").style.display = "flex";
        console.log("correct");
        score++;
    } else {
        document.getElementById("wrong2").style.display = "flex";
        console.log("wrong");
    }

    if (q3 == "<p>") {
        document.getElementById("correct3").style.display = "flex";
        console.log("correct");
        score++;
    } else {
        document.getElementById("wrong3").style.display = "flex";
        console.log("wrong");
    }

    if (q4 == "radio") {
        document.getElementById("correct4").style.display = "flex";
        console.log("correct");
        score++;
    } else {
        document.getElementById("wrong4").style.display = "flex";
        console.log("wrong");
    }

    if (q5 == "a") {
        document.getElementById("correct5").style.display = "flex";
        console.log("correct");
        score++;
    } else {
        document.getElementById("wrong5").style.display = "flex";
        console.log("wrong");
    }
    
    if (score >= 3) {
        Swal.fire({
            icon: 'success',
            title: 'Congrats you passed! ',
            text: "Your score is " + score + "/5",
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'You failed!',
            text: "Your score is " + score + "/5",
        });
    }

    return false;
}