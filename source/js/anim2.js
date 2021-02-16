const svgDivEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;
let circleX, circleY;
circleX = wMax / 2;
circleY = hMax / 2;

svgDivEl.innerHTML = `
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">
<circle r="10" cx="${circleX}" cy="${circleY}" fill="white"/>
</svg>

`
const svgEl = document.querySelector('svg')
let speed = 30

window.addEventListener("mousemove", mouse => {

    let distCursor, distCursorX, distCursorY;


    const cx = _ => {

        let distCursorX = Math.abs(mouse.clientX - circleX)
        let distCursorY = Math.abs(mouse.clientY - circleY)
        let circleSpeedX = 1 / distCursorX * speed
        let circleSpeedY = 1 / distCursorY * speed

        if (mouse.clientX > circleX) {
            circleX -= circleSpeedX
        } else {
            circleX += circleSpeedX
        }

        if (mouse.clientY > circleY) {
            circleY -= circleSpeedY
        } else {
            circleY += circleSpeedY
        }

        return {
            circleX,
            circleY
        };

    }

    // console.log(cx());

    svgEl.innerHTML = `

    <circle r="10" cx="${cx().circleX}" cy="${cx().circleY}" fill="white"/>

    `

})


// svgEl.innerHTML = `

// <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">

// <circle r="10" cx="${cxy().cx}" cy="${cxy().cy}" fill="white"/>


//     <!-- <path id="my-path" stroke="green" d="M${wMax/2}, ${hMax/2}, ${splines()}"/> -->

//     <!-- <circle r="10" fill="blue" stroke="blue">
//         <animateMotion dur="10s" repeatCount="indefinite">

//         <mpath xlink:href="#my-path" />

//         </animateMotion>

//     </circle> -->

// </svg>

// `