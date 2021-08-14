<template>
  <v-container>
    <informacion-productos :store="producto" />
  </v-container>
</template>

<script>
import informacionCategorias from '~/components/informacion/Informacion.vue'
export default {
  components: {
    'informacion-productos': informacionCategorias
  },
  computed: {
    producto() {
    
      return this.$store.state.articulos['productos'].data.filter(
        data => data.id === parseInt(this.$route.params.id)
      )
    }
  }
}
</script>