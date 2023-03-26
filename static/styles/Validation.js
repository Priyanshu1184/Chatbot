function validate(){
        
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if ( username.length == "" || password == ""){
            alert ("Enter The Correct Details");
    
    
    }
    else if ( username == "Abc123" && password == "abc#123"){
        alert ("Login successfully");
        window.location = "./index.html"; // Redirecting to other page.
        
        }
    
    
    }