
document.write(`
   <script src="../script/showpopup.js"></script>
    <nav id="mainNavBar">
    <ul>
    <li><p id="navBarTitle">SA-COURSES</p></li>
    <li><a href="../pages/courses.html"><img class="navBarImg" src="../../content/svg/courses-svgrepo-com.svg"></a></li>
    <li><a onClick="return showPopUp()" ><img class="navBarImg" id="profileOnNav" src="../../content/svg/profile-svgrepo-com.svg"></a></li>
    </ul>

    <div id="profileCard">
    <ul class="pop-up-options">
        <li><a href="../pages/aboutus.html" class="pop-up">About Us</a></li>
        <li><a href="mailto:ard.ituad@gmail.com" class="pop-up">Email Support</a></li>
        <li><a href="../pages/index.html" class="pop-up">Logout</a></li>
    </ul>
    </div>
    </nav>
`
);

// document.write(`
// <nav> 
// <input type="checkbox" id="check">
// <label for="check" class="checkbtn">
//     <i class="fa fa-bars"></i>
// </label>
// <label class="name">Programming</label>
// <ul>
//     <li><a href="#" id="home">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Contact</a></li>
//     <li ><a href="#" id="login">Login</a></li>
//     <!-- <li><a id="login" href="#">Login</a></li> -->


// </ul>
// </nav>
// `)