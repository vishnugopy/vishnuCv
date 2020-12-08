const boxes = document.querySelectorAll('.box');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('into-appear');
            console.log("helo");
        }
        else {
            entry.target.classList.add('box');
        }
    })

})

boxes.forEach(boxes => {
    observer.observe(boxes)
})




// function scrollApear(){
//     var box = document.querySelectorAll(".box");
//     var introPostion = box.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight ;
    
    
//             if(introPostion < screenPosition){
//                 box.classList.add('into-appear');
//                 console.log("hezllo");
//             }
    
//     }
    
//     window.addEventListener('scroll',scrollApear);