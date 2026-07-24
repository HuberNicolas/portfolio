<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsStrip from './components/StatsStrip.vue'
import WorkSection from './components/WorkSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import PublicationBanner from './components/PublicationBanner.vue'
import JourneySection from './components/JourneySection.vue'
import AboutSection from './components/AboutSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useReveal } from './composables/useReveal.js'
import { useLang } from './composables/useLang.js'

const { lang } = useLang()
useReveal()

onMounted(() => {
  document.documentElement.lang = lang.value
})
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <StatsStrip />
    <WorkSection />
    <ProjectsSection />
    <PublicationBanner />
    <JourneySection />
    <AboutSection />
  </main>
  <FooterSection />
</template>
