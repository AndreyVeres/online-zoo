const petsGallery = () => {
    let itemsToRender = []
       init()
    function renderItem(item){
        document.querySelector('.pets__gallery').append(item)
    }
    function init() {
        document.querySelectorAll('.pets__gallery-item').forEach(item => {
            itemsToRender.push(item)
            item.remove()
        })

        for(let item of itemsToRender){
            renderItem(item)
        }
    }

}

export default petsGallery;