var Username=document.getElementById("user_name").value;
    function addUser(){
        Username=document.getElementById("user_name").value;
        localStorage.setItem("user_name", Username);
        window.location="kwitter.html";
    }