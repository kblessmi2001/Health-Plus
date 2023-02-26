
var modal = document.getElementById('id01');
var btn = document.getElementById("login");
var span = document.getElementsByClassName("close")[0];



let userData=JSON.parse(localStorage.getItem("account")) || []
  let formData= document.querySelector(".mySlides")
  let mail;
  let password;
  if(formData)
  {
    formData.addEventListener("submit",function()
    {
      
      mail=document.getElementById("email").value;
      password=document.getElementById("password").value;
      let user={mail,password};
      userData.push(user)
      localStorage.setItem("account",JSON.stringify(userData))
       localStorage.setItem("mail",mail)
     localStorage.setItem("password",password)
   
    
    for(let i=0;i<userData.length;i++)
      {
        if(mail==userData[i].mail && password==userData[i].password)
        {
          alert("Login Successful")
          break;
        }
        else{
          alert("Wrong Credentials")
          location.href="./index.html"
          break;
        }
      }
    })
   
  }
  
  // var myIndex = 0;
  // carousel();
  
  // function carousel() {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {myIndex = 1}    
  //   x[myIndex-1].style.display = "block";  
  //   setTimeout(carousel, 2000); // Change image every 2 seconds
  // }

//   window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }