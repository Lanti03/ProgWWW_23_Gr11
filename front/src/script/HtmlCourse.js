
function noCourse(){
    alert("Coming Soon")
}


function handleMouseDown(link) {
    console.log(link)
    link.classList.add("active");
}

function handleMouseUp(link) {
    link.classList.remove('active');
}