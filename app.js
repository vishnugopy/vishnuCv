const boxes = document.querySelectorAll('.box');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('into-appear');
        }
        else {
            entry.target.classList.add('box');
        }
    })

})

boxes.forEach(boxes => {
    observer.observe(boxes)
})
