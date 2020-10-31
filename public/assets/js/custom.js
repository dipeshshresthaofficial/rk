window.addEventListener("DOMContentLoaded", (event) => {

// top scroller script
document.getElementById('top-scroller').addEventListener('click',e=>{

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


  // Navigation Bar shrink on scroll below 80px from top of document
window.onscroll = function () {
  navBarStyle();
}
function navBarStyle(){
  // console.log(document.querySelector('.navbar'));
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
    document.getElementById('logo-img').style.height = "60px";
    document.getElementById('logo-img').style.width = "60px";
    
    document.querySelector('.navbar').style.transition = "0.3s ease-in";
    document.querySelector('.navbar').style.padding = "0rem 1rem";
    document.querySelector('.navbar').style.backgroundColor = "rgba(999, 999, 999, 0.9)";
    
  }else{
    document.querySelector('#logo-img').style.height = "80px";
    document.getElementById('logo-img').style.width = "80px";
    document.querySelector('.navbar').style.padding = ".5rem 1rem";
    document.querySelector('.navbar').style.backgroundColor = "#fff";

  }
}
  // Dark mode script
  


  //Product Category Section SCRIPT starts here

  let mirror_ref = document.getElementById("mirror");
  let light_ref = document.getElementById("light");
  let accessories_ref = document.getElementById("accessories");
  let electrical_ref = document.getElementById("electrical");

  let mirror_btn_ref = document.getElementById("mirror_btn");
  let light_btn_ref = document.getElementById("light_btn");
  let accessories_btn_ref = document.getElementById("accessories_btn");
  let electrical_btn_ref = document.getElementById("electrical_btn");

  mirror_btn_ref.addEventListener("click", (e) => {
    accessories_ref.style.display = "none";
    electrical_ref.style.display = "none";
    light_ref.style.display = "none";
    // productSecAnimation();
    mirror_ref.style.animation = "fade-up 2s ease";
    mirror_ref.style.display = "flex";
  });

  light_btn_ref.addEventListener("click", (e) => {
    mirror_ref.style.display = "none";
    accessories_ref.style.display = "none";
    electrical_ref.style.display = "none";

    light_ref.style.animation = "fade-up 2s ease";
    light_ref.style.display = "flex";
    // productSecAnimation();
  });
  accessories_btn_ref.addEventListener("click", (e) => {
    mirror_ref.style.display = "none";
    electrical_ref.style.display = "none";
    light_ref.style.display = "none";

    accessories_ref.style.animation = "fade-up 2s ease";
    accessories_ref.style.display = "flex";
  });
  electrical_btn_ref.addEventListener("click", (e) => {
    mirror_ref.style.display = "none";
    accessories_ref.style.display = "none";

    light_ref.style.display = "none";
    electrical_ref.style.animation = "fade-up 2s ease";
    electrical_ref.style.display = "flex";
  });

  const animate = document.querySelectorAll(".product-animation");
  window.addEventListener("scroll", productSecAnimation);

  let categorySec = document.querySelector("#category-sec");

  function productSecAnimation() {
    if (window.scrollY >= categorySec.offsetTop - (window.innerHeight - 350)) {
      animate.forEach((anim) => {
        anim.style.opacity = "1";
        anim.style.transform = "translateY(0px)";
        anim.style.transition = "0.8s ease";
      });
    } else {
      animate.forEach((anim) => {
        anim.style.opacity = "0";
        anim.style.transform = "translateY(80px)";
      });
    }
  }

  //Our achievement Section UPCOUNTER script

  window.addEventListener("scroll", (e) => {
    const achievementSecRef = document.getElementById("achievement-sec");
    if (window.scrollY >= achievementSecRef.offsetTop - 400) {
      //   console.log("Counter Running ");
      // console.log(document.scrollY);

      const counters = document.querySelectorAll(".counter");
      const speed = 2000;

      counters.forEach((counter) => {
        const updateCount = () => {
          const targetValue = +counter.getAttribute("data-target");
          const count = +counter.innerText;

          let inc = targetValue / speed;

          if (count < targetValue) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1200);
          } else {
            counter.innerText = targetValue + "+";
          }
        };

        updateCount();
      });
    }
    // console.log(document.documentElement.scrollTop);
  });

  //Our TEAM secion Script starts here

  const ownerBtnRef = document.getElementById("owner-btn");
  const internBtnRef = document.getElementById("intern-btn");
  const ownerContainerRef = document.getElementById("owner-container");
  const internContainerRef = document.getElementById("intern-container");

  ownerBtnRef.addEventListener("click", (e) => {
    internContainerRef.style.display = "none";
    ownerContainerRef.style.display = "block";
    ownerContainerRef.style.animation="show-on 2s ease";
    internBtnRef.classList.remove("team-btn-active");
    ownerBtnRef.classList.add("team-btn-active");
    ownerBtnRef.style.transition="0.3s ease-in";
  });
  internBtnRef.addEventListener("click", (e) => {
    internBtnRef.style.transition="0.3s ease-in";
    ownerContainerRef.style.display = "none";
    internContainerRef.style.display = "block";
    internContainerRef.style.animation="show-on 2s ease-in";
    ownerBtnRef.classList.remove("team-btn-active");
    internBtnRef.classList.add("team-btn-active");
  });

  window.addEventListener("scroll", teamAnimation);
  function teamAnimation() {
    let teamSecRef = document.getElementById("team-sec");
    const teamAnimate = document.querySelectorAll(".team-container");
    if (window.scrollY >= teamSecRef.offsetTop - (window.innerHeight - 200)) {
      teamAnimate.forEach((anim) => {
        anim.style.opacity = "1";
        anim.style.transform = "translateY(0px)";
        anim.style.transition = "1.5s ease";
      });
    } else {
      teamAnimate.forEach((anim) => {
        anim.style.opacity = "0";
        anim.style.transform = "translateY(80px)";
      });
    }
  }
});
