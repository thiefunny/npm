const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX = _ => Math.random()*1000;
let circleY = hMax / 2;
let fillC = _ => `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
const wMin = 0;
const hMin = 0;

const wobbleDeceleration = 100;
const wobbleAnimSteps = 100;




svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle r="10" cx="${circleX()}" cy="${circleY}" fill="${fillC()}"/>
<circle r="10" cx="${circleX()}" cy="${circleY}" fill="${fillC()}"/>
</svg>

`

const svgEl = document.querySelector('svg')
const svgCirEl = document.querySelector('circle')
const svgCirclesEl = [...document.querySelectorAll('circle')]
// for (let i=0; ) {
//     elem.setAttribute('id', i)
// }

// let targetCircleX, targetCircleY;

const getCirclePos = (attribute, elem) => Number(elem.getAttribute(`${attribute}`));

let frameNumber = 0;



const wobble = (element) => {

    let reqAnimID;

    let x = 100;

    let targetCircleX = getCirclePos('cx', element) + Math.random() * x - x / 2;
    let targetCircleY = getCirclePos('cy', element) + Math.random() * x - x / 2;

    const anim = _ => {

        if (frameNumber < wobbleAnimSteps) {

            if (getCirclePos('cx', element) < wMin) {
                element.setAttribute("cx", `${wMax}`)
                targetCircleX = wMax + targetCircleX
            }

            if (getCirclePos('cx', element) > wMax) {
                element.setAttribute("cx", `${wMin}`)
                targetCircleX = wMin + targetCircleX - wMax
            }

            if (getCirclePos('cy', element) > hMax) {
                element.setAttribute("cy", `${hMin}`)
                targetCircleY = hMin + targetCircleY - hMax
            }

            if (getCirclePos('cy', element) < hMin) {
                element.setAttribute("cy", `${hMax}`)
                targetCircleY = hMax + targetCircleY
            }

            element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / wobbleDeceleration}`);
            element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / wobbleDeceleration}`);

            reqAnimID = requestAnimationFrame(anim)

            frameNumber++;

        } else {

            cancelAnimationFrame(reqAnimID)
            frameNumber = 0;
            wobble(element)
            console.log('canceled')

        }
    }
    requestAnimationFrame(anim)
}


const fearDistance = 100
const fearDeceleration = 10;
const fearAnimSteps = 30;
// let ar = new Array


// const animToTarget = (element) => {


//             element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration}`);
//             element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration}`);

//             reqAnimID = requestAnimationFrame(animToTarget)
//     }









// const mouseRead = (mouseX, mouseY, element) => {
//     // let x=svgCirclesEl.indexOf(element)

//     // cancelAnimationFrame(ar[x]);


//         let distCursorX = _ => Math.abs(mouseX - getCirclePos('cx', element))
//         let distCursorY = _ => Math.abs(mouseY - getCirclePos('cy', element))
//         let distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

//         if (distCursor() < fearDistance) {

//             let frameNumber = 0;

//             // cancelAnimationFrame(ar[x]);

//             targetCircleX = getCirclePos('cx', element) + fearDistance * (getCirclePos('cx', element) - mouseX) / distCursor()
//             targetCircleY = getCirclePos('cy', element) + fearDistance * (getCirclePos('cy', element) - mouseY) / distCursor()

//             console.log(element.getAttribute('id'))
//             console.log('targetCircleX')
//             console.log(targetCircleX)
//             console.log('targetCircleY')
//             console.log(targetCircleY)

// //             const animToTarget = _ => {

// //             // cancelAnimationFrame(reqAnimID);


// //                 // if (frameNumber < fearAnimSteps) {

// //                     // if (getCirclePos('cx', element) < wMin) {
// //                     //     element.setAttribute("cx", `${wMax}`)
// //                     //     targetCircleX = wMax + targetCircleX
// //                     // }

// //                     // if (getCirclePos('cx', element) > wMax) {
// //                     //     element.setAttribute("cx", `${wMin}`)
// //                     //     targetCircleX = wMin + targetCircleX - wMax

// //                     // }

// //                     // if (getCirclePos('cy', element) > hMax) {
// //                     //     element.setAttribute("cy", `${hMin}`)
// //                     //     targetCircleY = hMin + targetCircleY - hMax
// //                     // }

// //                     // if (getCirclePos('cy', element) < hMin) {
// //                     //     element.setAttribute("cy", `${hMax}`)
// //                     //     targetCircleY = hMax + targetCircleY
// //                     // }

// //                     // element.setAttribute("cx", `${targetCircleX}`);
// //                     // element.setAttribute("cy", `${targetCircleY}`);

// //                     element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration}`);
// //                     element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration}`);

// // // console.log(reqAnimID)
// //                     frameNumber++;
// //                     // console.log(svgCirclesEl[element])
// //                     // svgCirclesEl[0]
// //                     // console.log(x)
// //                     reqAnimID = requestAnimationFrame(animToTarget)
// //                     // console.log(ar[x])
// //                     // console.log(ar[x])
// //                     // requestAnimationFrame(animToTarget)

// //                 // } else {
// //                 //     cancelAnimationFrame(reqAnimID)
// //                 //     frameNumber = 0;
// //                 // }

// //             }

// }
// // animToTarget()

// }


// svgCirclesEl.forEach(elem => wobble(elem))
// let animToTarget;
const animToTarget = (element, targetCircleX, targetCircleY) => {

    element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration}`);
    element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration}`);
    reqAnimID = requestAnimationFrame(_ => animToTarget(element, targetCircleX, targetCircleY))

}
// let miki
window.addEventListener("click", mouse => {

    let mouseX = mouse.clientX;
    let mouseY = mouse.clientY;

    svgCirclesEl.forEach(element => {

        const distCursorX = _ => Math.abs(mouseX - getCirclePos('cx', element))
        const distCursorY = _ => Math.abs(mouseY - getCirclePos('cy', element))
        const distCursor = _ => Math.sqrt(Math.pow(distCursorX(), 2) + Math.pow(distCursorY(), 2))

        let targetCircleX = getCirclePos('cx', element) + fearDistance * (getCirclePos('cx', element) - mouseX) / distCursor()
        let targetCircleY = getCirclePos('cy', element) + fearDistance * (getCirclePos('cy', element) - mouseY) / distCursor()


        // WSZYSKIT TARGETY ŁADOWAĆ DO ARRAYA A NASTĘPNIE BRAĆ JE KAŻDY Z OSOBNA DO SETATTRIBUTE
        // let reqAnimId = requestAnimationFrame(_ => {


        element.setAttribute("cx", `${getCirclePos('cx', element) + (targetCircleX - getCirclePos('cx', element)) / fearDeceleration}`);
        element.setAttribute("cy", `${getCirclePos('cy', element) + (targetCircleY - getCirclePos('cy', element)) / fearDeceleration}`);
        // requestAnimationFrame(reqAnimId)

    // })


        reqAnimID = requestAnimationFrame(_ => animToTarget(element, targetCircleX, targetCircleY))

        

    // reqAnimID = requestAnimationFrame(_ => animToTarget(element, targetCircleX, targetCircleY))
// console.log(reqAnimID)

    // requestAnimationFrame(_ => animToTarget(element, targetCircleX, targetCircleY))
    // x = true;


    })

// animToTarget()
    // svgCirclesEl.forEach(element => {

    // requestAnimationFrame(_ => animToTarget(element, targetCircleX, targetCircleY))

    // })

})


