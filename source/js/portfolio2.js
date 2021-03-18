const menuEl = document.querySelector(".menu-list");

const topEl = document.querySelector(".top");
const footerEl = document.querySelector(".footer");
const hEl = document.querySelectorAll("h2")

const menuAboutMeEl = document.querySelector(".menu-about")
const menuProjectsEl = document.querySelector(".menu-projects")
const menuSkillsEl = document.querySelector(".menu-skills")
const menuContactEl = document.querySelector(".menu-contact")

const contentAboutMeEl = document.querySelector(".content-about")
const contentProjectsEl = document.querySelector(".content-projects")
const contentSkillsEl = document.querySelector(".content-skills")
const contentContactEl = document.querySelector(".content-contact")

const colors = {
    about: '#e31b70',
    projects: '#2278e3',
    skills: '#e86618',
    contact: '#58aa34'
}

const contentArr = [contentAboutMeEl, contentProjectsEl, contentSkillsEl, contentContactEl];
const menuArr = [menuAboutMeEl, menuProjectsEl, menuSkillsEl, menuContactEl];

for (elem of contentArr) {
    elem.classList.add("hidden")
}

contentAboutMeEl.classList.remove("hidden");
topEl.style.backgroundColor = colors.about;
menuAboutMeEl.style.color = colors.about;

menuEl.addEventListener('click', element => {
    const clickedEl = element.target.parentNode;
    const clickedElclasses = clickedEl.getAttribute('class')
    const removedRegEx = /.{18}/
    const clickedElName = clickedElclasses.replace(removedRegEx, '')
    const contentToShowClass = `content-${clickedElName}`
    const contentToShowEl = document.querySelector(`.${contentToShowClass}`)

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

})

// const mouseOver = (elementClass, srcOver, srcOut) => {
//     let image = document.querySelector(`${elementClass}`);
//     image.addEventListener("mouseover", _ => {
//         image.setAttribute('src', `${srcOver}`)
//     });
//     image.addEventListener("mouseout", _ => {
//         image.setAttribute('src', `${srcOut}`)
//     });
//     image.addEventListener("touchstart", _ => {
//         image.setAttribute('src', `${srcOver}`)
//     });
//     image.addEventListener("touchend", _ => {
//         image.setAttribute('src', `${srcOut}`)
//     });
//     image.addEventListener("touchmove", _ => {
//         image.setAttribute('src', `${srcOut}`)
//     });
// }

// // [...hEl].forEach(el => {mouseOver('img.link-icon', 'images/website-link-green.svg', 'images/website-link-projects.svg')})

// mouseOver('img.link-icon', 'images/website-link-green.svg', 'images/website-link-projects.svg')

// // mouseOver('#website-link', 'img/website-link-green.svg', 'img/website-link-grey.svg');

