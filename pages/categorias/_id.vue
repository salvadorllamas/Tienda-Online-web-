<template>
  <v-container>
    <productos-customs :productos="productos" />
  </v-container>
</template>

<script>
import ProductosCustoms from '~/components/productos/Productos.vue'
export default {
  components: {
    'productos-customs': ProductosCustoms
  },
  computed: {
    productos() {
      var miCadena = this.$route.params.id
      var divisiones = miCadena.split('/', 2)
      
      return this.$store.state.articulos.productos.data.filter(
        data => data.categoriaId === parseInt(divisiones[1])
      )
    }
  }
}
</script>