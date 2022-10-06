const petsGallery = () => {
    let itemsToRender = [];
    let allitems = document.querySelectorAll('.pets__gallery-item');
    const leftArrow = document.querySelector('.arrow__left')
    const rightArrow = document.querySelector('.arrow__right')
    const gallery = document.querySelector('.pets__gallery')
    
    let maxItemsInRow = null;
    if (window.innerWidth >= 1000) {
        maxItemsInRow = 6
    } else if (window.innerWidth <= 640) {
        maxItemsInRow = 4;
    }
    init()
    function calculateGap(itemWidth) {
        let gap = 0
        if (maxItemsInRow === 6) gap = (document.querySelector('.pets__gallery-box').clientWidth - (itemWidth * (maxItemsInRow / 2))) / 2
        else gap = (document.querySelector('.pets__gallery-box').clientWidth - (itemWidth * (maxItemsInRow / 2)))
        return gap
    }
    function renderStartedItems() {
        for (let i = 0; i < maxItemsInRow; i++) {
            initialRender()
        }
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

        renderStartedItems()

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
        let gap = calculateGap(itemWidth);
      
        gallery.style.transition = '1s'
        gallery.style.transform += `translateX(-${itemWidth * (maxItemsInRow / 2) + (gap * (maxItemsInRow / 2))}px)`
        let oldElements = Array.from(document.querySelectorAll('.pets__gallery-item')).splice(0, maxItemsInRow)

        itemsToRender.push(...oldElements)
        setTimeout(() => {
            rightArrow.disabled = false;
            oldElements.forEach(item => item.remove())
            gallery.style.transition = 'none'
            gallery.style.transform = ``
        }, 1000);

    }
    rightArrow.addEventListener('click', moveRight)

    function moveLeft() {
        gallery.transition = 'none'
        const itemWidth = document.querySelector('.pets__gallery-item').clientWidth;
        leftArrow.disabled = true
        let gap = calculateGap(itemWidth)
        gallery.style.transform = `translateX(-${itemWidth * (maxItemsInRow / 2) + (gap * (maxItemsInRow / 2))}px)`

        for (let i = 0; i < maxItemsInRow; i++) {
            let newItem = itemsToRender.splice(
                randomInteger(0, itemsToRender.length - 1), 1)
            gallery.prepend(newItem[0])
        }
        setTimeout(() => {
            gallery.style.transition = '1s'
            gallery.style.transform = ``

        }, 0);


        let oldElements = Array.from(document.querySelectorAll('.pets__gallery-item')).slice(maxItemsInRow)

        itemsToRender.push(...oldElements)
        setTimeout(() => {
            leftArrow.disabled = false;
            gallery.style.transition = 'none'
            gallery.style.transform = ``
            oldElements.forEach(item => item.remove())

        }, 1000);

    }
    leftArrow.addEventListener('click', moveLeft)
}

export default petsGallery;