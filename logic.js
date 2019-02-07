	var email;
				
		function postThanks(){
			email = document.getElementById("MERGE0").value;
			if(!checkEmail(email)){
				alert("Please enter valid email to subscribe");	
				return false;
			}
			else
				onValidEmail();
		}
		
		function onValidEmail(){
			alert("Thanks for subscribing with us. We will keep you posted. ");
		}
		
		
		function checkEmail(email){
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		}
