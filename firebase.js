var user;

function signUp(){
    var mail = document.getElementById("mail").value
    var pwd = document.getElementById("password").value
    var type = document.getElementById("type").value

    firebase.auth().createUserWithEmailAndPassword(mail,pwd).then((userCredential) => {
        var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref();
            var userData = {
                userEmail: mail,
                userPassword: pwd,
                userType:type,
                
            }
            firebaseRef.child(uid).set(userData);
        if(type == "Teacher"){
            window.location = "main.html";
        }
        else{
            //
        }
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            

        });

    
}

function logIn(){
    var mail = document.getElementById("mail").value
    var pwd = document.getElementById("password").value
    var type = document.getElementById("type").value

    firebase.auth().signInWithEmailAndPassword(mail,pwd).then((userCredential) => {
        const user = userCredential.user;
        if(type == "Teacher"){
            window.location = "main.html";
        }
        else{
            //
        } 
    }).catch((error)=>{
        
        var errorCode = error.code;
        var errorMessage = error.message;

    });
}

function google(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if(type == "Teacher"){
            window.location = "main.html";
        }
        else{
            //
        }
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}