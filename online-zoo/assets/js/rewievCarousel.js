const rewievCarousel = () => {
    const line = document.querySelector('.testimonials__range');
    const track = document.querySelector('.testimonials__box');
    const itemWidth = document.querySelector('.testimonials__item').clientWidth

    // window.addEventListener('resize', () => {
    //     track.style.width = `${itemWidth * 12}px`
    // })

    function moveTrack(e) {

        let range = e.currentTarget.value
        if (window.innerWidth > 1000) {
            let itemWidth = document.querySelector('.testimonials__item').clientWidth
            track.style.transform = `translateX(${(-itemWidth * range) - (38 * range)}px)`
            line.max = 7
        }
        if (window.innerWidth <= 1000) {
            let itemWidth = document.querySelector('.testimonials__item').clientWidth
            line.max = 8
            track.style.transform = `translateX(${(-itemWidth * range) - (22 * range)}px)`
        }
    }
    line.addEventListener('input', moveTrack)
}

export default rewievCarousel;