export const initAppend = () => {
    const headerContact1 = document.querySelector('.header-contact-1');
    const headerContact2 = document.querySelector('.header-contact-2');
    const headerGroup = document.querySelector('.header-group');

    // при ширине экрана < 769px 
    if (window.innerWidth < 769) {
        if(headerGroup) {
            headerGroup.append(headerContact1);
            headerGroup.append(headerContact2);
        }
    }
}