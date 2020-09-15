//Our achievement Section UPCOUNTER script




window.onscroll = (e) => {

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
};