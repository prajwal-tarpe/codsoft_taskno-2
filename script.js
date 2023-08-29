const toggleBtn = document.querySelector('.toggle-btn');
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const dropDownMenu = document.querySelector('.dropDown-menu');
        toggleBtn.onclick = function(){
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'

        }
// Setup and start animation!
        var typed = new Typed('#element', {
            strings: ['Web Developer.', 'and coder.','Web Developer.','and coder','web developer'],
            typeSpeed: 50,
            });