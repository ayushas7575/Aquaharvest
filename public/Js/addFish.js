let showAddForm = document.getElementById('AddFish');
let fishForm = document.getElementById('add_fish');
showAddForm.addEventListener('click', ()=>{
    fishForm.classList.toggle('activeAdd');
})

let bg = document.getElementsByClassName('addBg')[0];
bg.addEventListener('click',()=>{
    fishForm.classList.remove('activeAdd');
})

let showEditForm = document.querySelectorAll('.EditTheFish');
let fishEditForm = document.getElementById('Edit_fish');
showEditForm.forEach((item)=>item.addEventListener('click', ()=>{
    fishEditForm.classList.toggle('activeEdit');
}))

let removeBg = document.getElementsByClassName('EditBg')[0];
removeBg.addEventListener('click', ()=>{
    fishEditForm.classList.remove('activeEdit');
})