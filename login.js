let arr = JSON.parse(localStorage.getItem("signup")) || [];

let flag = false;
 let login =  () => {
     let password_l = document.getElementById("password").value;
     let username_l = document.getElementById("username").value;

   arr.forEach(({password, username}) => {
     if(username === username_l && password === password_l){
         flag = true;
       
     }
   })

   if(flag === true){
     alert("Login successful!");
   }else{
     alert("Try Again!");
   }
  
  document.getElementById("password").value = null;
 document.getElementById("username").value = null;
   
     
 }
