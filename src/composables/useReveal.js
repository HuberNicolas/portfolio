import { onMounted, onBeforeUnmount } from 'vue'

// Adds `.is-visible` to any `.reveal` element once it scrolls into view.
// A single shared observer keeps it cheap.
export function useReveal() {
  let observer

  onMounted(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    // Observe after the DOM has painted the freshly-mounted components.
    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
    })
  })

  onBeforeUnmount(() => observer && observer.disconnect())
}
