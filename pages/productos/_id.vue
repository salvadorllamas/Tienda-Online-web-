<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <producto-n />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import forproducto from '~/components/productos/Producto.vue'
export default {
  components: {
    'producto-n': forproducto
  },
  
}
</script>