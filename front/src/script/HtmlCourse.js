


// function handleMouseDown(link) {
//     console.log(link)
//     link.classList.add("active");
// }

// function handleMouseUp(link) {
//     link.classList.remove('active');
// }

var anchors = document.querySelectorAll('ul a');
var home = anchors[0]
console.log(home)
// Add click event listeners to each anchor element
 anchors.forEach(function(anchor) {

    anchor.addEventListener('click', function() {
       
        anchors.forEach(function(a) {
            
            a.classList.remove('clicked');
        });
        var attributeValue = this.getAttribute("href");
        // console.log(customAttributeValue)
       if(attributeValue == "#"){
        home.classList.add("clicked")

    }
       else{
        this.classList.add('clicked');
        home = this

       }
    });
});


function noCourse(){
    alert("Coming Soon")
 
}