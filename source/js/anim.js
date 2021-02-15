const svgEl = document.querySelector('.svg')
const wMax = window.innerWidth;
const hMax = window.innerHeight;

// const splines = _ => {

//     let qArray = [], qdx, qdy, qx, qy, qTemp;

//     for (i=0; i<100; i++) {

//         qdx = Math.round(Math.random() * 100)-50;
//         qdy = Math.round(Math.random() * 100)-50;
//         qx =  qdx+(Math.random()*100-50);
//         qy =  qdy+(Math.random()*100-50);
//         console.log(qdx, qx, qdy, qy)
//         // qx =  Math.round(Math.random() * 100)-50;
//         // qy =  Math.round(Math.random() * 100)-50;
//         qTemp = `q${qdx}, ${qdy}, ${qx}, ${qy}, `
//         qArray.push(qTemp);
//         // console.log(qArray.join(''))
//     }

//     return qArray.join('');

//     }

const splines = _ => {

    let qArray = [],
        qdx, qdy, qx, qy, qTemp;

    for (i = 0; i < 100; i++) {

        qdx = Math.round(Math.random() * 50) - 25;
        qdy = Math.round(Math.random() * 50) - 25;
        // qx =  Math.random(Math.pow(qdx, 2)) - Math.pow(qdx, 2)/2
        // qy =  Math.random(Math.pow(qdy, 2)) - Math.pow(qdy, 2)/2
        // console.log(qdx, qx, qdy, qy)
        // qx = qdx-100;
        // qy = qdy-100;
        qx = Math.round(Math.random() * 100) - 50
        qy = Math.round(Math.random() * 100) - 50
        qTemp = `s${qdx} ${qdy}, ${qx} ${qy}, `
        qArray.push(qTemp);
        // console.log(qArray.join(''))
    }

    return qArray.join('');

}

// const splines = _ => {

//     let qArray = [],
//         qdx, qdy, qx, qy, qTemp;

//     for (i = 0; i < 100; i++) {

//         qx = Math.round(Math.random() * 100) - 50;
//         qy = Math.round(Math.random() * 100) - 50;
//         qTemp = `t${qx}, ${qy}, `
//         qArray.push(qTemp);
//         // console.log(qArray.join(''))
//     }

//     return `Q500, 500, ${wMax/2}, ${hMax/2}, ${qArray.join('')}`;

// }


// const splines = _ => {

//     let qArray = [], qdx, qdy, qx, qy, qTemp;

//     for (i=0; i<100; i++) {

//         qd1x = Math.round(Math.random() * 500)-250;
//         qd1y = Math.round(Math.random() * 500)-250;
//         qd2x = Math.round(Math.random() * 500)-250;
//         qd2y = Math.round(Math.random() * 500)-250;
//         qx =  Math.round(Math.random() * 100)-50;
//         qy =  Math.round(Math.random() * 100)-50;
//         qTemp = `c${qd1x}, ${qd1y}, ${qd2x}, ${qd2y}, ${qx}, ${qy}, `
//         qArray.push(qTemp);
//         // console.log(qArray.join(''))
//     }

//     return qArray.join('');

//     }




svgEl.innerHTML = `

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${wMax}" height="${hMax}" viewBox="0 0 ${wMax} ${hMax}">



    <path id="my-path" stroke="black" d="M${wMax/2}, ${hMax/2}, ${splines()}"/>

    <circle r="10" fill="blue" stroke="blue">
        <animateMotion dur="10s" repeatCount="indefinite">

        <mpath xlink:href="#my-path" />
    
        </animateMotion>

    </circle>

</svg>

`