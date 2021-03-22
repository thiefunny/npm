const menuEl = document.querySelector(".menu-list");

const contentEl = document.querySelector(".content");

const contentObj = {
    about: [{
        content: `
        <p>My name is Mikołaj Walanus.</p>
        <p>I'm a <strong>front-end developer</strong>,</p>
        <p>with very strong <a href="https://behance.net/walanus" target="_blank">graphic design background</a></p>

        `
    }],
    projects: [{
            heading: null,
            link: null,
            content: `project1`
        },
        {
            heading: null,
            link: null,
            content: `project2`
        },
        {
            heading: null,
            link: 123,
            content: ``
        },
        {
            heading: null,
            link: null,
            content: ``
        },
        {
            heading: null,
            link: null,
            content: ``
        }
    ],
    skills: [{
            picture: null,
            heading: null,
            link: null,
            content: `skills`
        },
        {
            picture: null,
            heading: null,
            link: null,
            content: `skills2`
        },
        {
            picture: null,
            heading: null,
            link: null,
            content: ``
        },
        {
            picture: null,
            heading: null,
            link: null,
            content: ``
        }
    ],
    contact: [{
        picture: null,
        heading: null,
        link: null,
        content: `contact`
    }]


}

const generateContent = content => {

    let markup = '';
    contentElements = contentObj[content];

    for (let elem of contentElements) {

        const keys = Object.keys(elem);
        keys.forEach(key => {
            if (elem[key]) {
                markup += elem[key];
            }
        })

    }
    return markup;
}

// menuAboutMeEl.addEventListener('click', _ => {
//     contentEl.innerHTML = `

//     ${generateContent(`projects`)}
//     `
// })

menuEl.addEventListener('click', element => {
    const clickedEl = element.target.parentNode;
    const clickedElclasses = clickedEl.getAttribute('class')
    const removedRegEx = /.{18}/
    const clickedElName = clickedElclasses.replace(removedRegEx, '')
    
    contentEl.innerHTML = `
    ${generateContent(clickedElName)}
    `
    // console.log(newclasses);
})