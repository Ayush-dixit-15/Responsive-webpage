burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');
burger.addEventListener('click', ()=>{
   rightnav.classList.toggle('v-class');
   navlist.classList.toggle('v-class');
   navbar.classList.toggle('h-nav');
   navbar.classList.toggle('show');
//    all this means ki jab bhi kbhee ispe click kro to ye waali class gaayb ho jaaye aur baaki rhee bchee classes se jo bhi hmne css lgaai hai wo show hone lg jaaye
  
})