const navbar = document.querySelector('.navbar');
console.log(navbar);


const changeNavcolor =()=>{
       if (document.documentElement.scrollTop >= 300){
              navbar.classList.add("changeColor1");
              navbar.classList.remove("changeColor");
       }else{
              navbar.classList.add("changeColor");
              navbar.classList.remove("changeColor1");
       }
}

window.addEventListener('scroll',changeNavcolor);

changeNavcolor();
