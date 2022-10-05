const petsGallery = (maxItems) => {
    let itemsToRender = [];
    let allitems = document.querySelectorAll('.pets__gallery-item');
    const leftArrow = document.querySelector('.arrow__left')
    const rightArrow = document.querySelector('.arrow__right')
    const gallery = document.querySelector('.pets__gallery')
   
    init()
    let maxItemsInRow = null;
    if(window.innerWidth >= 1000){
        maxItemsInRow = 6
    }else if(window.innerWidth <= 640){
        maxItemsInRow = 4;
    }
     
    function initialRender() {
        const item = itemsToRender.splice(
            randomInteger(0, itemsToRender.length - 1), 1)
        gallery.append(item[0])
    }
    function init() {
        allitems.forEach(item => {
            itemsToRender.push(item)
            item.remove()
        })
        initialRender()
        initialRender()
        initialRender()
        initialRender()
        initialRender()
        initialRender()
    }
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    function moveRight() {
        const itemWidth = document.querySelector('.pets__gallery-item').clientWidth;
        rightArrow.disabled = true
        for (let i = 0; i < maxItemsInRow; i++) {
            let newItem = itemsToRender.splice(
                randomInteger(0, itemsToRender.length - 1), 1)
            gallery.append(newItem[0])
        }
        // размер гапа у галери = 80
       

        let gap =  (document.querySelector('.pets__gallery-box').clientWidth - (itemWidth * (maxItemsInRow / 2))) / 2
        console.log(gap)
        gallery.style.transition = '2.5s'
        gallery.style.transform += `translateX(-${itemWidth * (maxItemsInRow / 2) + (gap * (maxItemsInRow / 2))}px)`
        let oldElements = Array.from(document.querySelectorAll('.pets__gallery-item')).splice(0 , maxItemsInRow)
        
        itemsToRender.push(...oldElements)
        setTimeout(() => {
            rightArrow.disabled = false;
            oldElements.forEach(item => item.remove())
            gallery.style.transition = 'none'
            gallery.style.transform = `translateX(${0}px)`
        }, 3000);
      
    }
    rightArrow.addEventListener('click', moveRight)
}

export default petsGallery;