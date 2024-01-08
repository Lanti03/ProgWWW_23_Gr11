function checkAnswers() {
    let score = 0;
    console.log(check1)
    let form = document.forms["htmlQuizForm"];
    console.log(form)
    let q1 = form.elements["q1"].value;
    let q2 = form.elements["q2"].value;

    if (q1 == "a") {
        score++;
    }
    if (q2 == "<h1>") {
        score++;
    }
    alert("You scored " + score + " out of 2")
    return false;
}