document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider h2');
    const images = document.querySelectorAll('.two img');
    const btn = document.querySelector('#btn');
    const links = document.querySelectorAll('.contentShare a');
    const open = document.getElementById('btn');
    const contentShare = document.querySelector('.contentShare');
    const btnChanger = document.querySelector('.btnChanger');

    sliders.forEach((slider, index) => {
        slider.addEventListener('click', () => {
            images.forEach((img, imgIndex) => {
                if (imgIndex === index) {
                    img.classList.toggle('active');
                } else {
                    img.classList.remove('active');
                }
            });
            sliders.forEach((s, i) => {
                s.classList.toggle('active', i === index);
            });
        });
    });

    links.forEach((link) => {
        link.style.display = "none";
    });
    open.addEventListener('click', () => {
        if (open.classList.contains('close')) {
            open.style.transform = 'rotate(0deg)';
            open.classList.remove('close');
            links.forEach((link) => {
                link.style.display = "none";
            });
            contentShare.style.height = "0vh";
        } else {
            open.style.transform = 'rotate(45deg)';
            open.classList.add('close');
            links.forEach((link) => {
                link.style.display = "flex";
            });
            contentShare.style.height = "25vh";
        }
    });

    const animateImages = (state) => {
        const tl = gsap.timeline();

        switch (state) {
            case 1:
                tl.to('.image1', { scale: 0.5, zIndex: 1, x: 400, duration: 1 }, 0)
                    .to('.image2', { scale: 1.2, zIndex: 3, x: -120, duration: 1 }, 0)
                    .to('.image3', { scale: 1.1, zIndex: 2, x: -170, duration: 1 }, 0);
                break;
            case 2:
                tl.to('.image1', { scale: 0.6, zIndex: 2, x: 300, duration: 1 }, 0)
                    .to('.image2', { scale: 0.5, zIndex: 1, x: 200, duration: 1 }, 0)
                    .to('.image3', { scale: 1.5, zIndex: 2, x: -340, duration: 1 }, 0);
                break;
            case 3:
                tl.to('.image1', { scale: 1, zIndex: 3, x: 100, duration: 1 }, 0)
                    .to('.image2', { scale: 1.0, zIndex: 2, x: 0, duration: 1 }, 0)
                    .to('.image3', { scale: 0.8, zIndex: 1, x: -50, duration: 1 }, 0);
                break;
        }

        return tl;
    };

    let currentState = 1;
    const totalStates = 3;

    btnChanger.addEventListener('click', () => {
        animateImages(currentState);
        currentState = (currentState % totalStates) + 1;
    });
});
