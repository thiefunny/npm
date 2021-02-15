const svgEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;

const splines = _ => {

    let qArray = [],
        qdx, qdy, qx, qy, qTemp;

    for (i = 0; i < 100; i++) {

        qdx = Math.round(Math.random() * 50) - 25;
        qdy = Math.round(Math.random() * 50) - 25;
        qx = Math.round(Math.random() * 100) - 50
        qy = Math.round(Math.random() * 100) - 50
        qTemp = `s${qdx} ${qdy}, ${qx} ${qy}, `
        qArray.push(qTemp);
        // console.log(qArray.join(''))
    }

    return qArray.join('');

}

window.addEventListener("mousemove", mouse => {

console.log(mouse.clientX);
console.log(mouse.clientY);

svgEl.innerHTML = `

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">

<circle r="10" cx="${mouse.clientX}" cy="${mouse.clientY}" fill="white"/>


    <!-- <path id="my-path" stroke="green" d="M${wMax/2}, ${hMax/2}, ${splines()}"/> -->

    <!-- <circle r="10" fill="blue" stroke="blue">
        <animateMotion dur="10s" repeatCount="indefinite">

        <mpath xlink:href="#my-path" />
    
        </animateMotion>

    </circle> -->

</svg>

`



    // return {
    //     cx: mouse.clientX,
    //     cy: mouse.clientY
    // };

})

// const cxy = mouse => {

//     let cx = 500,
//         cy = 500;
 
//         return {
//         cx: cx,
//         cy: cy
//     };

// }

console.log(cxy())


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