const menuEl = document.querySelector(".menu-list");

const topEl = document.querySelector(".top");
const footerEl = document.querySelector(".footer");
const hEl = document.querySelectorAll(".link-icon")
const h2El = [...document.querySelectorAll("h2")];
const metafoodieLogoEl = document.querySelectorAll(".metafoodie-logo")


const menuAboutMeEl = document.querySelector(".menu-about")
const menuProjectsEl = document.querySelector(".menu-projects")
const menuSkillsEl = document.querySelector(".menu-skills")
const menuContactEl = document.querySelector(".menu-contact")

const contentAboutMeEl = document.querySelector(".content-about")
const contentProjectsEl = document.querySelector(".content-projects")
const contentSkillsEl = document.querySelector(".content-skills")
const contentContactEl = document.querySelector(".content-contact")

const colorsArr = [
    [227, 27, 112],
    [34, 120, 227],
    [232, 102, 24],
    [88, 170, 52],
]

const colors = {
    about: `rgb(${colorsArr[0][0]}, ${colorsArr[0][1]}, ${colorsArr[0][2]})`,
    projects: `rgb(${colorsArr[1][0]}, ${colorsArr[1][1]}, ${colorsArr[1][2]})`,
    skills: `rgb(${colorsArr[2][0]}, ${colorsArr[2][1]}, ${colorsArr[2][2]})`,
    contact: `rgb(${colorsArr[3][0]}, ${colorsArr[3][1]}, ${colorsArr[3][2]})`
}

const contentArr = [contentAboutMeEl, contentProjectsEl, contentSkillsEl, contentContactEl];
const menuArr = [menuAboutMeEl, menuProjectsEl, menuSkillsEl, menuContactEl];

for (elem of contentArr) {
    elem.classList.add("hidden")
}

contentAboutMeEl.classList.remove("hidden");
topEl.style.backgroundColor = colors.about;
menuAboutMeEl.style.color = colors.about;

let rStart = colorsArr[0][0];
let gStart = colorsArr[0][1];
let bStart = colorsArr[0][2];

const transitionSteps = 20;

const colorTransition = (element, attribute, newColor) => {

    let rEnd, gEnd, bEnd, step;

    let r = rStart;
    let g = gStart;
    let b = bStart;

    rEnd = newColor[0];
    gEnd = newColor[1];
    bEnd = newColor[2];

    let rDiff = Number(parseFloat((rEnd - r) / transitionSteps).toFixed(2));
    let gDiff = Number(parseFloat((gEnd - g) / transitionSteps).toFixed(2));
    let bDiff = Number(parseFloat((bEnd - b) / transitionSteps).toFixed(2));

    step = 0;

    let change = setInterval(_ => {

        if (step > transitionSteps) {
            clearInterval(change);

        } else {

            element.setAttribute(`${attribute}`, `rgb(${r}, ${g}, ${b})`)
            r = Number(parseFloat(r + rDiff).toFixed(2));
            g = Number(parseFloat(g + gDiff).toFixed(2));
            b = Number(parseFloat(b + bDiff).toFixed(2));

            rStart = r;
            gStart = g;
            bStart = b;

        }
        step++;
    }, 50);
}

menuEl.addEventListener('click', element => {
    const clickedEl = element.target.parentNode;
    const clickedElclasses = clickedEl.getAttribute('class')
    const removedRegEx = /.{18}/
    const clickedElName = clickedElclasses.replace(removedRegEx, '')
    const contentToShowClass = `content-${clickedElName}`
    const contentToShowEl = document.querySelector(`.${contentToShowClass}`)

    if (clickedEl.matches('.menu-element')) {

        for (elem of contentArr) {
            elem.classList.add("hidden")
        }

        for (elem of menuArr) {
            elem.setAttribute('style', '')
        }

        topEl.style.backgroundColor = colors[clickedElName];
        footerEl.style.backgroundColor = colors[clickedElName];
        clickedEl.style.color = colors[clickedElName];
        contentToShowEl.classList.remove('hidden');

        let indexOfClicked = Object.keys(colors).indexOf(clickedElName);

        svgCirclesEl.forEach(elem => colorTransition(elem, `fill`, colorsArr[indexOfClicked]))
        svgLinesEl.forEach(elem => colorTransition(elem, `stroke`, colorsArr[indexOfClicked]))

    }
})

const srcOver = 'images/website-link-green.svg'
const srcOut = 'images/website-link-projects.svg'

h2El[0].addEventListener('mouseover', _ => {
    metafoodieLogoEl[0].setAttribute('src', 'portfolio/images/metafoodie-logo-light-hover.svg')
})

h2El.forEach(el => {

    el.addEventListener('mouseover', _ => {
        console.log(el.children[0].children[0])
        el.children[0].style.color = `${colors.contact}`;
        el.children[0].children[0].setAttribute('src', 'portfolio/images/website-link-green.svg')
    })

    el.addEventListener('mouseout', _ => {
        el.children[0].style.color = `${colors.projects}`;
        el.children[0].children[0].setAttribute('src', 'portfolio/images/website-link-projects.svg')
        metafoodieLogoEl[0].setAttribute('src', 'portfolio/images/metafoodie-logo-light.svg')
    })
})

metafoodieLogoEl[0].addEventListener('mouseover', _ => {
    metafoodieLogoEl[0].setAttribute('src', 'portfolio/images/metafoodie-logo-light-hover.svg')
})

metafoodieLogoEl[0].addEventListener('mouseout', _ => {
    metafoodieLogoEl[0].setAttribute('src', 'portfolio/images/metafoodie-logo-light.svg')
})