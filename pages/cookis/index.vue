<template>
  <div>
   
    <politicas-cookis :store="cookis" />
  </div>
</template>

<script>
import cookis from '~/components/informacion/Informacion'
export default {
  components: {
    'politicas-cookis': cookis
  },
  computed: {
    cookis() {
      return this.$store.state.cookis['cookis'].data
    }
  }
}
</script>