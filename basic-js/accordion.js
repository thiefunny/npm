const questionEl = document.querySelectorAll(".question");

function reveal() {
    for (elem of questionEl) {
        elem.onclick = function () {
            if (this.nextElementSibling.style.maxHeight) {
                this.nextElementSibling.style.maxHeight = null;
            }
            else {this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"}
        }
    }
}

reveal();