import { ref } from 'vue'
import { defineStore } from 'pinia'
import artist from '../utils/artist.json'

export const useSongStore = defineStore('song', () => {
  const audio = ref(null)
  const isPlaying = ref(null)
  const currentTrack = ref(null)
  const currentArtist = ref(null)

  function loadSong(artist, track) {
    currentArtist.value = artist
    currentTrack.value = track
    if (audio.value && audio.value.src) {
      audio.value.pause()
      isPlaying.value = false
      audio.value.src = ''
    }

    audio.value = new Audio()
    audio.value.src = track.path

    setTimeout(() => {
      isPlaying.value = true
      audio.value.play()
    }, 200);
  }

  function playOrPauseSong() {
    if (audio.value.paused) {
      isPlaying.value = true
      audio.value.play()
    } else {
      isPlaying.value = false
      audio.value.pause()
    }
  }

  function playOrPauseThisSong(artist, track) {
    if (!audio.value || !audio.value.src || currentTrack.value.id !== track.id) {
      loadSong(artist, track)
      return
    }
    playOrPauseSong()
  }

  function prevSong(currentTrack) {
    let track = artist.tracks[currentTrack.id - 2]
    loadSong(artist, track)
  }

  function nextSong(currentTrack) {
    if (currentTrack.id === artist.tracks.length) {
      let track = artist.tracks[0]
      loadSong(artist, track)
    } else {
      let track = artist.tracks[currentTrack.id]
      loadSong(artist, track)
    }

  }

  function playFromFirst() {
    resetState()
    let track = artist.tracks[0]
    loadSong(artist, track)
  }

  function resetState() {
    audio.value = null
    isPlaying.value = false
    currentTrack.value = null
    currentArtist.value = null
  }

  return {
    audio,
    isPlaying,
    currentTrack,
    currentArtist,
    nextSong,
    prevSong,
    loadSong,
    resetState,
    playFromFirst,
    playOrPauseSong,
    playOrPauseThisSong
  }
})