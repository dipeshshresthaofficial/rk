//Our achievement Section UPCOUNTER script


window.addEventListener('DOMContentLoaded', (event) => {

    window.addEventListener('scroll', (e) => {

        if (document.documentElement.scrollTop > 2900) {
            // console.log("Counter Running ");

            const counters = document.querySelectorAll('.counter');
            const speed = 20000;


            counters.forEach((counter) => {

                const updateCount = () => {

                    const targetValue = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    let inc = targetValue / speed;

                    if (count < targetValue) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 70);
                    } else {
                        counter.innerText = targetValue;
                    }
                }

                updateCount();
            });
        }
        // console.log(document.documentElement.scrollTop);
    });


    //Product Category Section



    let mirror_ref = document.getElementById("mirror");
    let light_ref = document.getElementById("light");
    let accessories_ref = document.getElementById("accessories");
    let electrical_ref = document.getElementById("electrical");

    let mirror_btn_ref = document.getElementById("mirror_btn");
    let light_btn_ref = document.getElementById("light_btn");
    let accessories_btn_ref = document.getElementById("accessories_btn");
    let electrical_btn_ref = document.getElementById("electrical_btn");

    mirror_btn_ref.addEventListener('click', (e) => {


        accessories_ref.style.display = "none";
        electrical_ref.style.display = "none";
        light_ref.style.display = "none";
        // productSecAnimation();
        mirror_ref.style.animation = "fade-up 2s ease";
        mirror_ref.style.display = "flex";
    });

    light_btn_ref.addEventListener('click', (e) => {

        mirror_ref.style.display = "none";
        accessories_ref.style.display = "none";
        electrical_ref.style.display = "none";

        light_ref.style.animation = "fade-up 2s ease";
        light_ref.style.display = "flex";
        // productSecAnimation();



    });
    accessories_btn_ref.addEventListener('click', (e) => {
        mirror_ref.style.display = "none";
        electrical_ref.style.display = "none";
        light_ref.style.display = "none";

        accessories_ref.style.animation = "fade-up 2s ease";
        accessories_ref.style.display = "flex";


    });
    electrical_btn_ref.addEventListener('click', (e) => {

        mirror_ref.style.display = "none";
        accessories_ref.style.display = "none";

        light_ref.style.display = "none";
        electrical_ref.style.animation = "fade-up 2s ease";
        electrical_ref.style.display = "flex";

    });

    window.addEventListener('scroll', productSecAnimation);
    const animate = document.querySelectorAll(".product-animation");

    let categorySec = document.querySelector('#category-sec');

    function productSecAnimation() {

        if (window.scrollY >= (categorySec.offsetTop - window.innerHeight)) {
            animate.forEach(anim => {

                anim.style.opacity = '1';
                anim.style.transform = 'translateY(-35px)';
                anim.style.transition = '1.5s ease-in';
            })

        } else {
            animate.forEach(anim => {

                anim.style.opacity = '0';
                anim.style.transform = 'translateX(0px)';
            })
        }
    };





});