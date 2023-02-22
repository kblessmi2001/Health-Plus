
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
  })


  async function fetchData(){
    try{
      let res=await fetch("https://63f4d1b82213ed989c4b4758.mockapi.io/product")
     
      res= await res.json()
      displayData(res.data)
      //  FilterData(res.data)
        //  console.log(res)
    }
    catch(err){
      console.log("error",err)
    }
  }
  fetchData()
  // let filterBy=document.getElementById("filter")
  // filterBy.addEventListener("change",()=>
  // {
  //   fetchData()
  // })
  // function FilterData(data)
  // {
  //   if(filterBy.value==="")
  //   {
  //     displayData(data)
  //   }
  //   // else{
  //   //   data=data.filter((ele)=>{
  //   //     return ele.rating==filterBy.value;
  //   //   })
  //   //   displayData(data)
  //   // }
  //   //  console.log("res",data)
  // }
  let MedicineCart=JSON.parse(localStorage.getItem("medicine")) || []
  let container=document.getElementById("medicine-container")
  function displayData(data)
  {
     container.innerHTML=""
    data.forEach((medi) => {
      let medicineContainer=document.createElement("div")
      let category=document.createElement("h4")
      let rating=document.createElement("h5")
      let id=document.createElement("p")
      let image=document.createElement("img")
      let name=document.createElement("h2")
      let price=document.createElement("h4")
      let addtocart=document.createElement("button")

      category.innerText=medi.department;
      rating.innerText=`${medi.rating}`;
      id.innerText=medi.id;
      image.src=medi.avatar;
      name.innerText=medi.name;
      price.innerText=`₹${medi.price}`;
      addtocart.innerText="Add To Cart";
      
      addtocart.addEventListener("click",()=>
        {
          if(checkDuplicate(medi))
          {
            alert("Already Added To Cart")
          }
          else{
            EmployeeCart.push({...medi})
          localStorage.setItem("medicine",JSON.stringify(MedicineCart))
          alert("Successfully added")
          }
        }) 
     
      medicineContainer.append(image,name,rating,price,category,id,addtocart)
      container.append(medicineContainer)
      
    });
   
     console.log("display",data)
  }
 
  // displayData(res.data)
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


 