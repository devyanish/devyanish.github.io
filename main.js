var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");
var loginContainer = document.getElementById("firebaseui-auth-container");

    var logout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "block !important";
          loginContainer.style.display = "none !important";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });
}

init();

mainApp.logout = logout;
})();
