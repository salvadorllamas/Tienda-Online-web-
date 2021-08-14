<template>
  <v-container>
    <informacion-categorias :store="categorias" />
  </v-container>
</template>

<script>
import informacionCategorias from '~/components/informacion/Informacion.vue'
export default {
  components: {
    'informacion-categorias': informacionCategorias
  },
  computed: {
    categorias() {
      var miCadena = this.$route.params.id
      var divisiones = miCadena.split('/', 2)

      return this.$store.state.categorias.informacion.data.filter(
        data => data.id === parseInt(divisiones[1])
      )
    }
  },
}
</script>