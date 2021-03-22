const menuEl = document.querySelector(".menu-list");

const topEl = document.querySelector(".top");
const footerEl = document.querySelector(".footer");
const hEl = document.querySelectorAll(".link-icon")

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

    svgCirclesEl.forEach(elem => elem.setAttribute('fill', `${colors[clickedElName]}`))
    svgLinesEl.forEach(elem => elem.setAttribute('stroke', `${colors[clickedElName]}`))

}
})

const srcOver = 'images/website-link-green.svg'
const srcOut = 'images/website-link-projects.svg'

hEl.forEach(el => {
    el.addEventListener("mouseover", _ => {
        el.setAttribute('src', `${srcOver}`)
    });
    el.addEventListener("mouseout", _ => {
        el.setAttribute('src', `${srcOut}`)
    });
    el.addEventListener("touchstart", _ => {
        el.setAttribute('src', `${srcOver}`)
    });
    el.addEventListener("touchend", _ => {
        el.setAttribute('src', `${srcOut}`)
    });
    el.addEventListener("touchmove", _ => {
        el.setAttribute('src', `${srcOut}`)
    });
})