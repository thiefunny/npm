const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX, circleY;
circleX = wMax / 2;
circleY = hMax / 2;
const wMin = 0;
const hMin = 0;
const distSteps = 100
let fearDistance = 200
const refreshRate = 10;
let distStepsWobble = 10;

svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle id="circle" r="10" cx="${circleX}" cy="${circleY}" fill="white"/>
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')

let targetCircleX, targetCircleY;
let distNextStepY, distNextStepX;

const getCirclePos = attribute => Number(svgCirEl.getAttribute(`${attribute}`));

const randomTarget = _ => {
    targetCircleX = getCirclePos('cx') + Math.random() * 100 - 50;
    targetCircleY = getCirclePos('cy') + Math.random() * 100 - 50;
}

const wobble = _ => {

}

let reqAnimID;

const mouseRead = mouse => {

    // cancelAnimationFrame(reqAnimID);

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;


    const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx'))
    const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy'))
    const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))
    let angle = _ => Math.tan(distCursorY/distCursorX)

    if (distCursor() < fearDistance) {

        targetCircleX = getCirclePos('cx') + fearDistance*(-(getCirclePos('cx')-mouseX)/distCursor)
        targetCircleY = getCirclePos('cy') + fearDistance*(-(getCirclePos('cy')-mouseY)/distCursor)

        // circleX = getCirclePos('cx');
        circleY = getCirclePos('cy');

        svgCirEl.setAttribute("cy", `${targetCircleY}`)
        svgCirEl.setAttribute("cx", `${targetCircleX}`)


        const animToTarget = (targetCircleX, targetCircleY) => {

            distNextStepY = Math.abs(targetCircleY - getCirclePos('cy'));
            distNextStepX = Math.abs(targetCircleX - getCirclePos('cx'));

            // if (distNextStepY > 1) {

                // if (targetCircleY > getCirclePos('cy')) {

                //     circleY += distNextStepY / distSteps;

                //     if (getCirclePos('cy') > hMax) {
                //         circleY = hMin;
                //         targetCircleY -= hMax;
                //     }

                // } else {

                //     circleY -= distNextStepY / distSteps;

                //     if (getCirclePos('cy') < hMin) {
                //         circleY = hMax;
                //         targetCircleY += hMax;
                //     }

                // }

                

            

            // if (distNextStepX > 1) {

            // if (targetCircleX > getCirclePos('cx')) {

            //     circleX += distNextStepX / distSteps;

            //     if (getCirclePos('cx') > wMax) {
            //         circleX = wMin;
            //         targetCircleX -= wMax;
            //     }

            // } else {

            //     circleX -= distNextStepX / distSteps;

            //     if (getCirclePos('cx') < wMin) {
            //         circleX = wMax;
            //         targetCircleX += wMax;
            //     }

            // }


            // }

            reqAnimID = requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY));
            // console.log('Math.round(targetCircleX)')
            // console.log(Math.round(targetCircleX))
            // console.log('Math.round(circleX)')
            // console.log(Math.round(circleX))
        }

        // requestAnimationFrame(_ => animToTarget(targetCircleX, targetCircleY));
        // requestAnimationFrame(animToTarget);
        // cancelAnimationFrame(reqAnimID)
        // // if ((circleX - targetCircleX) > 1 || (circleX - targetCircleX) < 1) {


        // if (Math.round(targetCircleX) === Math.round(circleX)) {
        //     cancelAnimationFrame(reqAnimID);
        //     console.log('cancelled')
        // }

        //     }

    } else {

        // cancelAnimationFrame(reqAnimID);

        console.log('cancelled')
    }

}


// wobble();


window.addEventListener("mousemove", mouseRead);