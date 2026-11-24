// data

import {users} from "../data/data.js"



// html dan kelgan element 

const usersWrapperEl = document.querySelector(".users-container");
const btnEl = document.querySelector(".btn");
const modalEl = document.querySelector("#userModal");
const yopishEl = document.querySelector(".modal__close");
const formEl = document.querySelector("#addUserForm");
const saqlashEl = document.querySelector("#saqlash");
const inputnameEl = document.querySelector("#userName");


// modaldan malumot olish
formEl.addEventListener("submit" , (e)=>{
  e.preventDefault();

  let formData = new FormData(e.target);


  let userData = {
    name : formData.get("name") ,
    email : formData.get("email"),
    role : formData.get("role"),
    isActive : formData.get("isActive") ? "Faol" : "No faol",
    id : `${users.length + 1}`,
  };


  formEl.reset();
  
});






// modalni ochib yopish
yopishEl.addEventListener("click" , ()=>{
  modalEl.classList.add("hidden");
});

document.addEventListener("keydown" , (e)=>{
  if(e.key === "Escape"){
    modalEl.classList.add("hidden");
  }
  
});

modalEl.addEventListener("click" , (e)=>{
  if(e.target === modalEl){
    modalEl.classList.add("hidden");
  }
});

btnEl.addEventListener("click" , ()=>{
  modalEl.classList.remove("hidden");
});

saqlashEl.addEventListener("click" , ()=>{
  modalEl.classList.add("hidden");
})




function updateUi(arr) {

    arr.forEach((item) =>{
        let {id , name , email , role , isActive} = item;

        usersWrapperEl.innerHTML += `
        <div class="user-card">
            <div class="user-card__header">
              <div class="user-card__avatar">${name.charAt(0)}${name.split(" ")[1][0]}</div>
              <div class="user-card__info">
                <h3 class="user-card__name">${name}</h3>
                <p class="user-card__email">${email}</p>
              </div>
            </div>
    
            <div class="user-card__footer">
              <span class="user-card__role">${role}</span>
              <span class="user-card__status user-card__status--active"
                >${isActive ? "Faol" : "No faol"}</span
              >
            </div>
        </div>`
    })
};

updateUi(users);


