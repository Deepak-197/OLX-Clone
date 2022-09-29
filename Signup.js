let arr = JSON.parse(localStorage.getItem("signup")) || [];

let signup =  () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    let mobile = document.getElementById("mobile").value;
    let description = document.getElementById("description").value;
   
    let signup_data  = {
        name,
        email,
        password,
        username,
        mobile,
        description,
    }
    // console.log(signup_data)
      arr.push(signup_data)
      localStorage.setItem("signup", JSON.stringify(arr))
      console.log(arr)

      if(name != null && email != null && password != null && username != null && mobile != null && description != null){
        alert("Account Created Successfully!")
        window.location.href = "login.html";
      }else{
        alert("Fill all Credentials!")
      }

     document.getElementById("name").value = null;
     document.getElementById("email").value = null;
     document.getElementById("password").value = null;
      document.getElementById("username").value = null;
      document.getElementById("mobile").value = null;
      document.getElementById("description").value = null;
   
}