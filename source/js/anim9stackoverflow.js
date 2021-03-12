const circle = document.querySelector("circle")

window.addEventListener("click", mouse => {

    let targetCircleX = mouse.clientX;
    let targetCircleY = mouse.clientY;

    const animation = _ => {

        let getCx = Number(circle.getAttribute('cx'))
        let getCy = Number(circle.getAttribute('cy'))

        circle.setAttribute("cx", `${getCx + (targetCircleX - getCx)/10}`);
        circle.setAttribute("cy", `${getCy + (targetCircleY - getCy)/10}`);

        requestAnimationFrame(animation)

    }

    requestAnimationFrame(animation)

});