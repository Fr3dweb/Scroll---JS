
//----------------------------------------------------
// Scroll events

const nav =document.querySelector("nav");
    window.addEventListener('scroll',()=>{
        console.log(window.scrollY);

        if (window.scrollY > 120){  // à 120pixels de scroll en Y la nav apparait
            nav.style.top = 0 ;
        } else {
          nav.style.top = "-50px"; // à - de 120pixels la nav retourne a -50px (cachée)
        }
    })
