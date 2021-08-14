<template>
  <v-container class="text-center">
    <form-categorias />
  </v-container>
</template>

<script>
import categorias from '~/components/categorias/Categorias.vue'
export default {
  components: {
    'form-categorias': categorias
  }
}
</script>