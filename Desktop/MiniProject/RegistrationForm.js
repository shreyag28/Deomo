
function validation(){
    var name=document.getElementById("name").value;
    var nameregex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if(name == ""){
          document.getElementById("p1").innerHTML="Plz enter the name";
       return false;

    }

    else  if (!nameregex.test(name)){
        document.getElementById("p1").innerHTML="Invalid name or please enter the full name";
        return false;
     }

     var email=document.getElementById("email").value;
    var emailregex= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (email == ""){
        document.getElementById("p2").innerHTML="Plz enter the emailId";
     return false;

  }

  else  if (!emailregex.test(email)){
      document.getElementById("p2").innerHTML="Invalid emailId";
      return false;
   }

   var contact=document.getElementById("contact").value;
   var contactregex= /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
   if (contact == ""){
       document.getElementById("p3").innerHTML="Plz enter the contact no";
    return false;

 }

 else  if (!contactregex.test(contact)){
     document.getElementById("p3").innerHTML="Invalid  contact no";
     return false;
  }

 else{
      return true;

  }
}



