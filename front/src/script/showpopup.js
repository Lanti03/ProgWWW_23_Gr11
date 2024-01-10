function showPopUp(){
    let isPopUp = document.getElementById('profileCard').style.display == 'flex';
    if(isPopUp){
        document.getElementById('profileCard').style.display = 'none';
    }else{
        document.getElementById('profileCard').style.display = 'flex';
    }
}