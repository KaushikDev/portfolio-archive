


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXTSwwB78ZO2BCeHpfVbE6Q-o7LiSzLus",
    authDomain: "pushnotificationproject-6cd09.firebaseapp.com",
    databaseURL: "https://pushnotificationproject-6cd09.firebaseio.com",
    projectId: "pushnotificationproject-6cd09",
    storageBucket: "pushnotificationproject-6cd09.appspot.com",
    messagingSenderId: "1099139601062"
  };

  firebase.initializeApp(config);
   const messaging = firebase.messaging();
   
   messaging.requestPermission().then(function(){
	   //getToken(messaging);
	   return messaging.getToken();
   }).then(function(token){
	   console.log("Permission Granted");
	   console.log("Token is : ",token);
   }).catch(function(err) {
	   console.log('Permission Denied', err);
	   console.log('Error is : ', err);
   })
   

 //==============================================//
 
 
 $(document).ready(function () {
                $("a").addClass("animated bounce");
                $("img").addClass("animated swing");
            });
		var email;
function postThanks(){
email = document.getElementById("MERGE0").value;
if(!checkEmail(email)){
//alert("Please enter your email to subscribe");
document.getElementById("postThanks").innerHTML = "Please enter valid email to subscribe";
document.getElementById("postThanks").style.color = "red";	
	return false;
}
else
onValidEmail();
}
function onValidEmail(){
//name = document.getElementById("MERGE0").value;
//document.getElementById("postThanks").innerHTML = "";
document.getElementById("postThanks").innerHTML = "Thanks for subscribing with \""+email+"\". We will keep you posted for new/enhanced apps.";
document.getElementById("postThanks").style.color = "green";		
document.getElementById("form").action = "https://twitter.us16.list-manage.com/subscribe/post";	
}
function checkEmail(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
