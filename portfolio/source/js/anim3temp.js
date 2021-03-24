const adiv = document.getElementById('mydiv')
let leftpos = 0;

requestAnimationFrame(function(timestamp){
    leftpos += 50;
    adiv.style.left = leftpos + 'px'
})

// leftpos += 50;
// adiv.style.left = leftpos + 'px'

// console.log('adada');
// console.log(adiv);

// kupa