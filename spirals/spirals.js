const canvasEl = document.querySelector("#drawing");
const ctx = canvasEl.getContext('2d');
const canvasWidth = window.innerWidth / 1.1;
const canvasHeight = window.innerHeight / 1.3;
canvasEl.setAttribute("width", canvasWidth + "px");
canvasEl.setAttribute("height", canvasHeight + "px");


const speed = 10;

function circle(x, y, r, hue, saturation, lightness, alpha) {

    ctx.beginPath();
    ctx.strokeStyle = 'hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + alpha + ')';
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

}

const drawing = _ => {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // const quantity = Math.floor(Math.random() * 100);
    const quantity = 25;
    let spiralsArr = new Array(quantity);
    let frame = 0;
    const hueChoice = Math.floor(Math.random() * 255);


    for (let i = 0; i < quantity; i++) {
        let x = canvasWidth * Math.random(),
            y = canvasHeight * Math.random(),
            r = Math.random() * 20,
            alpha = Math.random() * 0.13,
            hue = Math.floor(Math.random() * 80) + hueChoice,
            saturation = 100,
            lightness = 50,
            rstep = Math.random() * 0.3,
            rdiv = Math.random() * 5 + 5,
            r2 = Math.random() * 5,
            r3 = Math.random() * 2 + 0.5,
            direction = Math.round(Math.random());

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
            direction
        }
    }

    const draw = setInterval(function () {

        if (frame < 700) {

            spiralsArr.forEach(elem => {
                elem.r2 += Number(elem.r3);

                if (elem.direction) {
                    elem.r += Number(elem.rstep);
                    elem.hue = elem.hue * 1.001;
                } else {
                    elem.r -= Number(elem.rstep);
                    elem.hue = elem.hue * 0.999;
                }

                elem.x += elem.r / Number(elem.rdiv) * Math.sin(elem.r);
                elem.y += elem.r / Number(elem.rdiv) * Math.cos(elem.r);
                

                circle(elem.x, elem.y, elem.r2, elem.hue, elem.saturation, elem.lightness, elem.alpha);
            })
            frame++
        } else {
            clearInterval(draw);
            // drawing()
        }
    }, speed);
}

drawing()