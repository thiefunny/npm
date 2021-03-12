const circle = document.querySelector("circle")

window.addEventListener("click", mouse => {

    const animation = _ => {

        let getCx = Number(circle.getAttribute('cx'))
        let getCy = Number(circle.getAttribute('cy'))

        circle.setAttribute("cx", `${getCx + (mouse.clientX - getCx)/10}`);
        circle.setAttribute("cy", `${getCy + (mouse.clientY - getCy)/10}`);

        requestAnimationFrame(animation)

    }

    requestAnimationFrame(animation)

});