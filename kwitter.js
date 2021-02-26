function addUser(){
    userNamevar = document.getElementById("user_name").value;
localStorage.setItem("user-namekey",userNamevar);
window.location="kwitter_room.html";
}