document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click'), () =>  {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('accordion__button--active');

        if (button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeigt = accordionContent.scrollHeight + 'px' ;
        } else {
            accordionContent.style.maxHeigt = 0;
        }

