const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const blockImg = document.querySelectorAll('.design-block__img');
const tabTitle = document.querySelectorAll('.design__title');

const changeContent = function(array, value) {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        }
        else {
            elem.classList.add('hidden');
        }
    })
}

tabButtons.forEach((tabButton, index) => {
    //прослушка клика
   tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler
        
        //text      
        changeContent(tabDescription, dataValue);
        //image
        changeContent(tabImages, dataValue);
        //imageLeft
        changeContent(blockImg, dataValue);
        //title
        // designTitle.forEach((elem, indexTitle) => {
        //     if //(index === indexTitle) {
        //        // elem.classList.remove('hidden');
        //    // }
        //     else {
        //         elem.classList.add('hidden');
        //     }
        tabTitle.forEach(title => {

            if(title.classList.contains('hidden')) {
                title.classList.remove('hidden');
                document.title = title.innerText;
            } else {
                title.classList.add('hidden');
            }
        });

        tabButtons.forEach(btn => {
            if(btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        })
       


       tabButtons.forEach ( (btn) => {
            if (btn === event.target) {
                btn.classList.add('.design-list__item_active');
            }
            else {
                btn.classList.remove('.design-list__item_active');
            }
       })
   })
  
})
