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
        light_ref.style.position = "absolute";
        // light_ref.style.top = "-9999px";
        light_ref.style.left = "-9999px";
        mirror_ref.style.position = "relative";
        mirror_ref.style.top = "0";
        mirror_ref.style.left = "0";
        accessories_ref.style.position = "absolute";
        // accessories_ref.style.top = "-9999px";
        accessories_ref.style.left = "-9999px";
        electrical_ref.style.position = "absolute";
        // electrical_ref.style.top = "-9999px";
        electrical_ref.style.left = "-9999px";


    });

    light_btn_ref.addEventListener('click', (e) => {

        mirror_ref.style.position = "absolute";
        // mirror_ref.style.top = "-9999px";
        mirror_ref.style.left = "-9999px";
        light_ref.style.position = "relative";
        light_ref.style.top = "0";
        light_ref.style.left = "0";
        accessories_ref.style.position = "absolute";
        // accessories_ref.style.top = "-9999px";
        accessories_ref.style.left = "-9999px";
        electrical_ref.style.position = "absolute";
        // electrical_ref.style.top = "-9999px";
        electrical_ref.style.left = "-9999px";


    });
    accessories_btn_ref.addEventListener('click', (e) => {

        mirror_ref.style.position = "absolute";
        // mirror_ref.style.top = "-9999px";
        mirror_ref.style.left = "-9999px";
        light_ref.style.position = "absolute";
        // light_ref.style.top = "-9999px";
        light_ref.style.left = "-9999px";
        accessories_ref.style.position = "relative";
        accessories_ref.style.top = "0";
        accessories_ref.style.left = "0";
        electrical_ref.style.position = "absolute";
        // electrical_ref.style.top = "-9999px";
        electrical_ref.style.left = "-9999px";


    });
    electrical_btn_ref.addEventListener('click', (e) => {

        mirror_ref.style.position = "absolute";
        // mirror_ref.style.top = "-9999px";
        mirror_ref.style.left = "-9999px";
        light_ref.style.position = "absolute";
        // light_ref.style.top = "-9999px";
        light_ref.style.left = "-9999px";
        accessories_ref.style.position = "absolute";
        // accessories_ref.style.top = "-9999px";
        accessories_ref.style.left = "-9999px";

        electrical_ref.style.position = "relative";
        electrical_ref.style.top = "0";
        electrical_ref.style.left = "0";


    });

    const anim = document.getElementById("wholesale-container");
    window.addEventListener('scroll', (e) => {
        if (window.scrollY >= 380) {
            anim.style.opacity = '1';
            anim.style.transform = 'translateY(-50px)';
            anim.style.transition = '1s ease-in';

        } else {
            anim.style.opacity = '0';
            anim.style.transform = 'translateX(0px)';
        }
    });
    const anim2 = document.getElementById("retail-container");
    window.addEventListener('scroll', (e) => {
        console.log(window.scrollY);
        if (window.scrollY >= 700) {
            anim2.style.opacity = '1';
            anim2.style.transform = 'translateY(-50px)';
            anim2.style.transition = '1s ease-in';

        } else {
            anim2.style.opacity = '0';
            anim2.style.transform = 'translateX(0px)';
        }
    });


});