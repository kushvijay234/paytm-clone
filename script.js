
    let footeraccordioncontent = document.querySelectorAll('.footer-accordion-content');
    let footeraccordiontab = document.querySelectorAll('.footer-accordion-tab');
    let img = document.querySelectorAll('.footer-accordion-tab img');

    footeraccordiontab.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            if (footeraccordioncontent[index].style.display === 'block') {
                footeraccordioncontent[index].style.display = 'none';
                img[index].classList.remove('plus');
            } else {
                footeraccordioncontent[index].style.display = 'block';
                img[index].classList.add('plus');
            }
        });
    });


