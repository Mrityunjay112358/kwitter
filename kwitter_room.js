
//ADD YOUR FIREBASE LINKS HERE


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAMZjpQuQ1YQE29h28e6VbXnqsggynD_Vw",
  authDomain: "kwitter-d16b2.firebaseapp.com",
  databaseURL: "https://kwitter-d16b2-default-rtdb.firebaseio.com",
  projectId: "kwitter-d16b2",
  storageBucket: "kwitter-d16b2.appspot.com",
  messagingSenderId: "594336171988",
  appId: "1:594336171988:web:8c191eecb94d0da0fc3841"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    

UserName = localStorage.getItem("user-namekey");
document.getElementById("user_name").innerHTML="Welcome "+UserName+"!";


function Addroom(){
RoomName = document.getElementById("team_namein").value;
firebase.database().ref("/").child(RoomName).update({
      purpose:"testing firebase"

});
localStorage.setItem("roomname",RoomName);
      window.location="kwitter_page.html";
}

function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
      Room_names = childKey;
console.log("Room Name = "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
});});}


getData();

function redirecttoRoomName(name1){
  console.log(name1);
  localStorage.setItem("roomname",name1);
  window.location = "kwitter_page.html";
  
}

function LogOut(){
  localStorage.removeItem("user-namekey");
  localStorage.removeItem("roomname");
  window.location="index.html";
}