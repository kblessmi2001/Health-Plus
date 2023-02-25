
var modal = document.getElementById('id01');
var btn = document.getElementById("login");
var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

let userData=JSON.parse(localStorage.getItem("account")) || []
  let formData= document.querySelector(".mySlides")
  let mail;
  let password;
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
       
        
      }
    }
  })
 
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-0].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }