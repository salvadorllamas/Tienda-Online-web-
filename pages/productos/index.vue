<template>
  <v-container>
    <productos-customs :store="true" :productos="productos" />
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
      
      return this.$store.state.articulos.productos.data.filter(
        data => data.id === parseInt(this.$route.params.id)
      )
    }
  }
}
</script>