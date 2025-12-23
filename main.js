let like = document.querySelector(".fa-heart");
like.onclick = () => {
  console.log('jambo')
  if(like.classList.contains("fa-regular")){
    like.classList.remove("fa-regular");
    like.classList.add("fa-solid");
  } else {
    like.classList.remove("fa-solid");
    like.classList.add("fa-regular");
  }
}
let audio = document.getElementById('mpeg');
let play = document.querySelector(".fa-play");
play.onclick = () => {
  if(play.classList.contains("fa-play")){
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    audio.play();
  } else {
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    audio.pause();
  }
}
let progress = document.getElementById('bar');
progress.onloadedmetadata = () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
}
if(audio.play()){
  setInterval (() => {
    progress.value = audio.currentTime;
  },100)
}
progress.onchange = () => {
  audio.play();
  audio.currentTime = progress.value;
}

const prev = document.querySelector('.fa-backward');
const next = document.querySelector('.fa-forward');
let songName = document.getElementById('title');
let artist  = document.getElementById('artist');
prev.onclick = () => {
  audio.src = "Dusty Bibles.mp3";
  document.getElementById('img').src = "pic.jpg";
  audio.load();
  audio.play();
  songName.innerHTML = "Dusty Bibles";
  artist.innerHTML = "Josiah Queens";
  if(play.classList.contains("fa-play")){
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    audio.play();
  } else {
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    audio.pause();
  }
}
next.onclick = () => {
  mpeg.src = "/Juliani.mp3";
  document.getElementById('img').src = "/juliani_cover.jpg";
  mpeg.load();
  mpeg.play();
  songName.innerHTML = "Exponential potential";
  artist.innerHTML = "Juliani";
  if(play.classList.contains("fa-play")) {
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
  audio.play();
} else {
  play.classList.remove("fa-pause");
  play.classList.add("fa-play");
  audio.pause();
}
}