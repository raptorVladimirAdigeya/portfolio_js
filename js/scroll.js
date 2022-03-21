const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')
const arrowDown = document.querySelector('.main__scroll')

const allLinks = [...links,btn,arrowDown]
//перебор ссылок
allLinks.forEach(link => {
    //вешаем обработчик собитий
    link.addEventListener('click', (event) => {
        //останавливаем стандарстное поведение браузера
        event.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        //проверяем section на наличие  и производим плавный scroll
        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'
            // })  

        }

    })
})