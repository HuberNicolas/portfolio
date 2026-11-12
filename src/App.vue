<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import PosterWall from './components/PosterWall.vue'
import NowSection from './components/NowSection.vue'
import BoxSection from './components/BoxSection.vue'
import ProgrammeSection from './components/ProgrammeSection.vue'
import PersonSection from './components/PersonSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import { useLang } from './composables/useLang.js'

const { lang } = useLang()

onMounted(() => {
  document.documentElement.lang = lang.value
})
</script>

<template>
  <NavBar />
  <main>
    <PosterWall />
    <BoxSection />
    <NowSection />
    <ProgrammeSection />
    <PersonSection />
  </main>
  <ClosingSection />
</template>
