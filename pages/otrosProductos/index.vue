<template>
  <form-ofertas :productos="productos" />
</template>

<script>
import ofertas from '~/components/ofertas/ofertas.vue'
export default {
  components: {
    'form-ofertas': ofertas
  },
  computed: {
    productos() {
      return this.$store.state.articulos['ofertas'].data
    }
  }
}
</script>