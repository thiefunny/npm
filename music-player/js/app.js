import {
  songsArr
} from '../js/songs.js'

import {
  coverEl,
  songsCounterEl,
  playButtonLeftEl,
  rightPanel,
  progressBarPercentage,
  
} from '../js/dom.js'

let currentlyPlayingSongIndex = null;
let selectedIndex = 0;

const song = new Audio();

const playIt = () => {

  if (song.paused) {
    song.play();
    playButtonLeftEl.innerHTML = 'PAUSE'
    playButtonsEls[selectedIndex].innerHTML = '||'
progressBarFunc();

  } else {
    song.pause();
    playButtonLeftEl.innerHTML = 'PLAY'
    playButtonsEls[selectedIndex].innerHTML = '&#9658;'
  }
}

const listen = (el) => {
  el.addEventListener("click", playIt);
}

const createModule = _ => {

  const timeRecalculate = sec => {

    const seconds = Math.floor(sec % 60);
    const minutes = Math.floor(sec / 60);

    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`;
  }

  for (let elem of songsArr) {
    rightPanel.innerHTML += `
  <li class="play__module">
    <div class="play__module__content">
      <div class="play__button__right">
      &#9658;
      </div>
      <div class="title__area">
        <div class="title__content">
          <p class="title__album">${elem.title}</p>
          <p class="title__song">${elem.artist}</p>
        </div>
      </div>
    <div class="song__duration">${timeRecalculate(elem.time)}</div>
    </div>
  </li>
  <div class="progress__color"></div>
  `
  }

}

const ifThanPlay = _ => {
  if (currentlyPlayingSongIndex != selectedIndex) {
    currentlyPlayingSongIndex = selectedIndex;
    setSource();
    playIt();
  } else {
    playIt();
  }
}

// const playModuleContentEls = [...document.querySelectorAll(".play__module__content")]
// console.log(playModuleContentEls);
// playModuleContentEls[0].style.backgroundColor = '#f00'

const selectIndex = event => {
  let liElements = event.target.parentNode.parentNode.parentNode.children;
  const clickedLiElement = event.target.parentNode.parentNode;
  const arrayOfLiElements = [...liElements];
  if (event.target.matches(".play__button__right")) {
    selectedIndex = arrayOfLiElements.indexOf(clickedLiElement)/2;
    ifThanPlay();
  }
}

createModule();

const playButtonsEls = [...document.querySelectorAll(".play__button__right")];
const playModuleEls = [...document.querySelectorAll(".play__module")];
const progressColorEls = [...document.querySelectorAll(".progress__color")]
// console.log(progressColorEls)
// progressColorEls.forEach(elem => elem.style.backgroundColor = '#000');
progressColorEls.forEach(elem => elem.style.width = '0%')


const setSource = _ => {
  song.src = `${songsArr[selectedIndex].url}`
  playButtonsEls.forEach(elem => elem.innerHTML = '&#9658;')
  playButtonsEls[selectedIndex].innerHTML = '||'
  playModuleEls.forEach(elem => elem.classList.remove("play__module__active"))
  playModuleEls[selectedIndex].classList.add("play__module__active")
}

const progressBarFunc = _ => {

  song.addEventListener("play", _ => {
    const progressBarAnim = _ => {
// console.log(progressColorEls[selectedIndex])
progressColorEls.forEach(elem => elem.style.backgroundColor = '')
progressColorEls.forEach(elem => elem.style.width = '0%')
// progressColorEls[selectedIndex].style.width = '0%';
      progressColorEls[selectedIndex].style.width = `${song.currentTime / Number(songsArr[selectedIndex].time)*100}%`;
      progressColorEls[selectedIndex].style.backgroundColor = `#51593a`;
      requestAnimationFrame(progressBarAnim);
    }
    requestAnimationFrame(progressBarAnim);
  })
}

song.addEventListener("ended", _ => {
  // console.log('bzik')
  playButtonsEls.forEach(elem => elem.innerHTML = '&#9658;')
  playButtonLeftEl.innerHTML = 'PLAY'
})

setSource();
rightPanel.addEventListener("click", selectIndex);
listen(playButtonLeftEl);
playButtonsEls.forEach(elem => elem.innerHTML = '&#9658;')