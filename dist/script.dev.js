"use strict";

console.log("Welcome to Spotify"); // Initialize the Variables

var songIndex = 0;
var audioElement = new Audio('songs/1.mp3');
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
var gif = document.getElementById('gif');
var masterSongName = document.getElementById('masterSongName');
var songItems = Array.from(document.getElementsByClassName('songItem'));
var songs = [{
  songName: "English Tone",
  filePath: "songs/1.mp3",
  coverPath: "covers/1.jpg"
}, {
  songName: "My music 2nd tone",
  filePath: "songs/2.mp3",
  coverPath: "covers/2.jpg"
}, {
  songName: "Hindi tone ",
  filePath: "songs/3.mp3",
  coverPath: "covers/3.jpg"
}, {
  songName: "Music is my life tone",
  filePath: "songs/4.mp3",
  coverPath: "covers/4.jpg"
}, {
  songName: "Hollywood movie tone",
  filePath: "songs/5.mp3",
  coverPath: "covers/5.jpg"
}, {
  songName: "Bollywood movie tone",
  filePath: "songs/2.mp3",
  coverPath: "covers/6.jpg"
}, {
  songName: "Hidden tone",
  filePath: "songs/2.mp3",
  coverPath: "covers/7.jpg"
}, {
  songName: "My Favorite tone",
  filePath: "songs/2.mp3",
  coverPath: "covers/8.jpg"
}, {
  songName: "the world best song",
  filePath: "songs/2.mp3",
  coverPath: "covers/9.jpg"
}, {
  songName: "Nepali best Tone",
  filePath: "songs/4.mp3",
  coverPath: "covers/10.jpg"
}];
songItems.forEach(function (element, i) {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}); // Handle play/pause click

masterPlay.addEventListener('click', function () {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
}); // Listen to Events

audioElement.addEventListener('timeupdate', function () {
  // Update Seekbar
  progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', function () {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

var makeAllPlays = function makeAllPlays() {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(function (element) {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(function (element) {
  element.addEventListener('click', function (e) {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});
document.getElementById('next').addEventListener('click', function () {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click', function () {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});
//# sourceMappingURL=script.dev.js.map
