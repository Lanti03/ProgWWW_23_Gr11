
const text = document.querySelector(".div-text")
const img = document.querySelector(".div-img")
const section = document.querySelector("section");
const btn = document.getElementById("check")
// btn.checked =true
const mainImg = document.querySelector(".div-img")
console.log(mainImg)
const labelBtn = document.querySelector(".checkbtn")
const logBtn = document.getElementById("login") //login page
const homeBtn = document.getElementById("home")
const aboutBtn = document.getElementById("about")
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector(".register-link")
const about = document.querySelector(".about")
const loginLink = document.querySelector(".login-link");
const loginForm = document.getElementById("login-form")
var person = [{ name: "admin", email: "admin@gmail.com", password: "admin" }, { name: "ardi", email: "admin@gmail.com", password: "123" }]
// console.log(loginForm)
var isLabelBtnClicked = false
var isAboutBtnClicked = false
var isLogBtnClicked = false //Ngarkimi i login page
console.log(loginLink)


function updateSectionVisibility() {


const windowWidth = window.innerWidth;
// console.log(section)
// console.log(windowWidth);
// console.log(loginLink.checked)
if(!isLogBtnClicked){
if (windowWidth <= 700) {
    text.style.display = "none";
    img.classList.add("active")


        } else {
            text.style.display = "block";
            img.style.display = "block"

            img.classList.remove("active")
            btn.checked = false

        }
    }

if(isLogBtnClicked){
    if (windowWidth <= 1600) {
        text.style.display = "none";
        img.style.display = "none";
        wrapper.classList.add("window")
    }
    else{
        img.style.display = "block";
    }
}

if(isAboutBtnClicked && windowWidth<=1600){
    img.style.display = "none"
    text.style.display = "none"

}
}

//Thirret funksioni kur te  ngarkohet faqja 
updateSectionVisibility();
// Trajtimi i ngjarjeve te faqes
window.addEventListener("resize", updateSectionVisibility);





function isBtnClicked() {
    if (btn.checked) {
        img.style.display = "block"

    }
    else {
        img.style.display = "none"
    }
}

labelBtn.addEventListener("click", () => {
    isLabelBtnClicked = !isLabelBtnClicked
    wrapper.classList.remove("loging-active")
    console.log(isLabelBtnClicked)
    if (btn.checked) {
        img.style.display = "block"
        updateSectionVisibility()
        if (window.innerWidth > 500)
            text.style.display = "block";


    }
    else {
        text.style.display = "none";
        img.style.display = "none"
    }
})



registerLink.onclick = () => {
    wrapper.classList.add("active")
}


loginLink.onclick = () => {
    wrapper.classList.remove("active")
}

// log.onclick = ()=>{
//     wrapper.classList.add("loging-active");
// }

// log.addEventListener('click',()=>{


//     wrapper.classList.add("loging-active");

// }
// )


//Ngarkimi i log faqes
logBtn.addEventListener('click',()=>{
about.classList.remove("about-active")
isLogBtnClicked = true;
console.log(isLogBtnClicked)
btn.checked = false;
text.style.display = "none";
wrapper.classList.add("loging-active")
img.classList.add("loging-active")
updateSectionVisibility();

})


//Trajtimi i Home button 
homeBtn.addEventListener('click',()=>{
about.classList.remove("about-active")
isLogBtnClicked = false
 btn.checked = false;
 text.style.display ="block"
 img.style.display = "block"
 wrapper.classList.remove("loging-active")
 img.classList.remove("loging-active")
 updateSectionVisibility();
//  console.log(wrapper.className == "loging-active")
// isLogDisplayed = !isLogDisplayed;
// console.log(isLogDisplayed)

})


//Kur deshirojme mu logu 
function getLoginForm() {

var username = document.querySelector(".username").value;
var password = document.querySelector(".password").value;


    // console.log(username)
    let isValid = validatte(username, password)

    if (isValid) {

window.location.href = "courses.html"
var n = document.getElementById("after")
    n.style.background = "red"
console.log(n)
}
else{
    alert("Bad credentical")
    document.getElementById("login-form").reset();

}
}


function validatte(username, password) {

    for (let i = 0; i < person.length; i++) {
        if (person[i].name == username && person[i].password == password) {

            return true;
        }

    }
    return false;

}

function getSingUpForm() {
    var username = document.querySelector(".sign-username").value;
    console.log(username)
    var email = document.querySelector(".sign-email").value
    var password = document.querySelector(".sign-password").value;


    var newPerson = new Object();

newPerson.name = username;
newPerson.email = email;
newPerson.password = password;
person.push(newPerson);
console.log(newPerson)
document.getElementById("register-form").reset();


}

var anchors = document.querySelectorAll('ul a');

anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function() {

        anchors.forEach(function(a) {
            a.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked anchor
        this.classList.add('clicked');
    });
});




aboutBtn.addEventListener('click',()=>{
    isAboutBtnClicked =true
    wrapper.classList.remove("loging-active")
    btn.checked = false;
    // console.log(isLogBtnClicked)
    btn.checked = false;
    text.style.display = "none";
    img.style.display = "none"    
    console.log(img)
    about.classList.add("about-active")
    updateSectionVisibility();

    })