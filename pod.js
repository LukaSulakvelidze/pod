console.log("Hello world");
const mail = document.getElementById("mail");
const error = document.getElementById("error");
const sent = document.getElementById("sent");
const button = document.getElementById("button");
const mailregex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function testmail (input){
  if(mailregex.test(input.value)){
    console.log("this is true");
    sent.style.display="block";
    error.style.display ="none";
    
  }else if(!mailregex.test(input.value)){
    console.log("this is false");
    sent.style.display="none";
    error.style.display ="block";
  }
}

button.addEventListener('click',(event)=>{
  event.preventDefault()
  testmail(mail);
  console.log('clicked');
})

// function validateEmail(){
//   if(!mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//     valid.innerHTML = "Please enter valid email";
//     return false;
//   }
  
//   valid.innerHTML = "";
//   return true
// }
