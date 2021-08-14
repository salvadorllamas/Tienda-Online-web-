<template>
  <v-app dark class="text-center mt-5">
    <v-container>
      <v-alert prominent type="error" v-if="error.statusCode === 404">
        <v-row align="center">
          <v-col class="grow">{{ pageNotFound }}</v-col>
          <v-col class="shrink">
            <v-btn to="/" nuxt>Pagina de inicio</v-btn>
          </v-col>
        </v-row>
      </v-alert>
      <v-alert prominent type="error" v-else>
        <v-row align="center">
          <v-col class="grow">{{ otherError }}</v-col>
          <v-col class="shrink">
            <v-btn to="/" nuxt>Pagina de inicio</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 No encontrado',
      otherError: 'Ocurrió un error'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
