var roomName=document.getElementById("roomName").value;

const firebaseConfig = {
    apiKey: "AIzaSyBgb6eKjrjDvjIBjirh_BbAqnTNpO80hBA",
    authDomain: "kwitter-9aa9d.firebaseapp.com",
    projectId: "kwitter-9aa9d",
    storageBucket: "kwitter-9aa9d.appspot.com",
    messagingSenderId: "226561011138",
    appId: "1:226561011138:web:79472e736490dece193a5b",
    measurementId: "G-28ZK8WFP57"
  };

  function AddRoom(){
    document.getElementById("room").innerHTML=roomName;
    rediectToRoomName();
  }

  function rediectToRoomName(){
    localStorage.setItem("roomName",roomName);
    window.location.replace("kwitter_room.html");
  }