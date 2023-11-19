//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBShZzysN1aSSHiifnWZeH1NGBNCvPvd_Q",
      authDomain: "let-chat-web-app-d1084.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-d1084-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-d1084",
      storageBucket: "let-chat-web-app-d1084.appspot.com",
      messagingSenderId: "1051789243350",
      appId: "1:1051789243350:web:16f40f8245573347036a77"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
       });

      document.getElementById("msg").value = "";
}

