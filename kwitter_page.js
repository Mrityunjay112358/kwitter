//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user-namekey");
room_name = localStorage.getItem("roomname");
    function Send(){
msg = document.getElementById("send_input").value;
firebase.database().ref(room_name).push({
      like:0,
      user:user_name,
      message:msg
});
document.getElementById("send_input").value=" ";
}

function LogOut(){
      localStorage.removeItem("user-namekey");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
} 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name_user = message_data['user'];
message= message_data['message'];
like = message_data['like'];

name_with_tag="<h4>"+name_user+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("like button is clicked and msg id is- "+message_id);
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      update_likes= Number(likes)+1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}
