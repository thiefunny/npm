const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');
const canvasWidth = window.innerWidth / 1.1;
const canvasHeight = window.innerHeight / 1.3;
canvasEl.setAttribute("width", canvasWidth + "px");
canvasEl.setAttribute("height", canvasHeight + "px");
const canvasCenterX = Math.floor(canvasWidth / 2);
const canvasCenterY = Math.floor(canvasHeight / 2);

const speed = 10;

function circle(x, y, r, hue, saturation, lightness, alpha) {

    ctx.beginPath();
    ctx.strokeStyle = 'hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + alpha + ')';
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

}

const drawing = _ => {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    const quantity = 5;
    let spiralsArr = new Array(quantity);
    let frame = 0;
    const hueChoice = Math.floor(Math.random() * 20 + 180);

    for (let i = 0; i < quantity; i++) {
        let x = -10,
            y = 0,
            r = Math.random() * 20,
            alpha = Math.random() * 0.25,
            // alpha = 1,
            hue = Math.floor(Math.random() * 80) + hueChoice,
            saturation = 100,
            lightness = 30,
            rstep = Math.random() * 0.3,
            rdiv = Math.random() * 5 + 5,
            r2 = 0.5,
            r3 = Math.random() * 2 + 0.5,
            direction = Math.round(Math.random()),
            r2random = Math.random()*2000+00,
            powRandom = Math.round(Math.random()*4)

        spiralsArr[i] = {
            x,
            y,
            r,
            alpha,
            hue,
            saturation,
            lightness,
            rstep,
            rdiv,
            r2,
            r3,
            direction,
            r2random,
            powRandom
        }
    }

    // const draw = _ => {

for (let i = 0; i<5000; i++) {

        // if (frame < 100) {

            spiralsArr.forEach(elem => {

                if (elem.direction) {
                    elem.r += Number(elem.rstep);
                    elem.hue = elem.hue * 1.0005;
                } else {
                    elem.r -= Number(elem.rstep);
                    elem.hue = elem.hue * 0.9995;
                }
            
                elem.x = elem.x+0.005
                elem.y = Math.sin(elem.x)*Math.sin(elem.x)*Math.sin(elem.x)
                elem.r2 = Math.abs(Math.sin(Math.pow(elem.x, elem.powRandom)/200))*1/Math.abs(elem.x)*elem.r2random;
                elem.alpha = Math.abs(Math.sin(elem.x))/20;
// console.log('miki')
                circle(elem.x*100 + canvasCenterX, -elem.y*100 + canvasCenterY, elem.r2, elem.hue, elem.saturation, elem.lightness, elem.alpha);
                // circle(elem.x*100  + canvasCenterX, -elem.y*100 + canvasCenterY, elem.r2, elem.hue, elem.saturation, elem.lightness, elem.alpha);
            })

        }
            // frame++;
        // } 
        // requestAnimationFrame(draw)      
    // };
    // requestAnimationFrame(draw)
    // draw()
}

drawing()