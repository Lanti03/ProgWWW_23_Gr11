


var anchors = document.querySelectorAll('.slide ul a');
var home = anchors[0]
// console.log(anchors)
// Add click event listeners to each anchor element
 anchors.forEach(function(anchor) {
    console.log(anchor)
    anchor.addEventListener('click', function() {
       
        anchors.forEach(function(a) {
            
            a.classList.remove('clicked');
        });
        var attributeValue = this.getAttribute("href");
        // console.log(customAttributeValue)
       if(attributeValue == "#"){
        home.classList.add("clicked")
        this.setAttribute('href',home.getAttribute("href"))
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