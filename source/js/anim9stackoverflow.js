const circle = document.querySelector("circle")

let reqAnimID;

window.addEventListener("mousemove", mouse => {

    const animation = _ => {

        const getCy = Number(circle.getAttribute('cy'))
        const getCx = Number(circle.getAttribute('cx'))
        const setCy =  getCy + (mouse.clientY - getCy)/10
        const setCx =  getCx + (mouse.clientX - getCx)/10

        circle.setAttribute("cx", `${setCx}`);
        circle.setAttribute("cy", `${setCy}`);

        if (Math.floor(setCy) !== mouse.clientY && Math.floor(setCx) !== mouse.clientX)
        {
        reqAnimID = requestAnimationFrame(animation)
    }

    }

    cancelAnimationFrame(reqAnimID);
    reqAnimID = requestAnimationFrame(animation)

});