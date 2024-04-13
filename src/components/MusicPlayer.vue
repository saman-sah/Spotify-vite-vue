<script setup>
import { ref, watch, onMounted } from 'vue'

import { storeToRefs } from 'pinia'
import { useSongStore } from '../stores/song'

// import {
//   SkipForward,
//   SkipBackward,
//   PictureInPictureBottomRight
// } from '../utils/icons.js'

const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist }  = storeToRefs(useSong)

let range = ref(0)
let seeker = ref(null)
let isHover = ref(false)
let seekerContainer = ref(null)
let isTrackTimeTotal = ref(null)
let isTrackTimeCurrent = ref(null)


onMounted(() => {
  if (useSong.audio.value) {
    setTimeout(() => {
      timeupdate()
      loadmetadata()
    }, 300)
  }

  if (currentTrack.value) { 
    seeker.value.addEventListener("change", function () {
      const time = audio.value.duration * (seeker.value.value / 100);
      audio.value.currentTime = time;
    });

    seeker.value.addEventListener("mousedown", function () {
      audio.value.pause();
      isPlaying.value = false
    });

    seeker.value.addEventListener("mouseup", function () {
      audio.value.play();
      isPlaying.value = true
    });

    seekerContainer.value.addEventListener("click", function (e) {
      const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
      const time = audio.value.duration * clickPosition;
      audio.value.currentTime = time;
      seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
    });
  }
})

const timeupdate = () => {
  audio.value.addEventListener('timeupdate', () => {
    var minutes = Math.floor(audio.value.currentTime / 60)
    var seconds = Math.floor(audio.value.currentTime - minutes * 60)
    isTrackTimeCurrent.value = minutes +':'+seconds.toString().padStart(2, '0')
    const value = (100 / audio.value.duration) * audio.value.currentTime
    range.value = value
    seeker.value.value = value
  })
}

const loadmetadata = () => {
  audio.value.addEventListener('loadmetadata', () => {
    const duration = audio.value.duration;
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    isTrackTimeTotal.value = minutes +':'+seconds.toString().padStart(2, '0')
  })
}

watch(() => audio.value, () => {
  timeupdate()
  loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
  if(time && time === isTrackTimeTotal.value) {
    useSong.nextSong(currentTrack.value)
  }
})

</script>

<template>
  <div
    v-if="audio"
    id="MusicPlayer"
    class="fixed flex items-center justify-between bottom-0 w-full z-50 h-[90px] bg-[#181818] border-t border-t-[#272727]"
  >

  </div>
</template>

