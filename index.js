
var modal = document.getElementById('id01');
var btn = document.getElementById("login");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
 
  var imagesEl = document.getElementsByTagName("img");
for(var i = 0; i < imagesEl.length; i++) {
    var imageEle = imagesEl[i];
    imageEle.onclick = function(event) {
         window.location.href = this.id + '.html';
    };
}

// let cart=document.getElementById("addtocart")
// cart.addEventListener("click",function(){



// })


  async function fetchData(){
   
    try{
      let res=await fetch("https://kblessmi2001.github.io/medicine_data/data.json")
     
      res= await res.json()
          displayData(res)
      
      //  console.log(res.medicine)
    }
    catch(err){
      console.log("error",err)
    }
  }
    fetchData()

     
  let MedicineCart=JSON.parse(localStorage.getItem("medicine")) 
  let container=document.getElementById("medicine-container")
   function displayData(data)
   {
     container.innerHTML=""
     
      data.medicine.forEach((medi) => {
      let medicineContainer=document.createElement("div")
      let category=document.createElement("h4")
      let rating=document.createElement("h5")
      let discount=document.createElement("h5")
      let id=document.createElement("p")
      let image=document.createElement("img")
      let name=document.createElement("h3")
      let price=document.createElement("h4")
      let addtocart=document.createElement("button")

      category.innerText=medi.category;
      rating.innerText=`${medi.rating}`;
      id.innerText=medi.id;
      image.src=medi.image;
      name.innerText=medi.name;
      price.innerText=`₹${medi.price}`;
      addtocart.innerText="Add To Cart";
      discount.innerText=`${medi.discount}%`
      addtocart.addEventListener("click",()=>
        {
          if(checkDuplicate(medi))
          {
            alert("Already Added To Cart")
          }
          else{
            MedicineCart.push({...medi})
          localStorage.setItem("medicine",JSON.stringify(MedicineCart))
          alert("Successfully added")
          }
        }) 
     
      medicineContainer.append(image,name,rating,discount,price,category,addtocart)
      container.append(medicineContainer)
      
    });
    console.log("display",data)
  }

     function checkDuplicate(medi)
    {
     for(let i=0;i<MedicineCart.length;i++)
     {
      if(MedicineCart[i].id==medi.id){
        return true
      }
    }
        return false
     }
      // displayData()


