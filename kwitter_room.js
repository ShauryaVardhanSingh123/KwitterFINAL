var msg=document.getElementById("msg").value;

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div></div>
//End code
});});}
getData();

function send(){
    document.getElementById("text").innerHTML=msg;
}