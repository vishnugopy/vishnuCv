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


const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const dark = localStorage.getItem('dark');

if (theme) {
  body.classList.add(theme);
  dark && body.classList.add('dark');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};
