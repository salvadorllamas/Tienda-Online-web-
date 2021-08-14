<template>
  <div v-if="scrolled">
    <v-btn color="error" bottom right fab large fixed @click="$vuetify.goTo(0, options)">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
  data() {
    return {
      scrolled: false,
      duration: 100,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings)
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 100
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>