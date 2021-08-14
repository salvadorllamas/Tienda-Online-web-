<template>
  <v-card color="white" class="ma-2">
    <h1>Tienda online de artículos con Teclados</h1>
    <v-row class="justify-center">
      <v-col
        cols="12"
        sm="2"
        md="4"
        lg="4"
        v-for="item in categorias"
        :key="item.id"
      >
        <v-row>
          <v-col cols="12">
            <v-card color="#FFFFFF" class="ma-2" elevation="10">
              <v-img height="250px" contain :src="item.src"></v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-card :loading="loading" class="mx-center" max-width="100%">
          <v-card-title>{{ item.titulo }}</v-card-title>
          <v-responsive height="90">
            <h2 class="my-4">{{ item.nombre }}</h2>
          </v-responsive>

          <v-card class="ma-2" elevation="0">
            <v-responsive height="100">
              <v-card-text class="text-left">{{
                item.descripcion
              }}</v-card-text>
            </v-responsive>
          </v-card>
          <nuxt-link
            :to="{
              name: 'informacionDe-id',
              params: { id: item.categoria + '/' + item.id, valor: item.id },
            }"
            class="d-flex justify-center"
            >Más información</nuxt-link
          >
          <v-divider class="mx-4 mt-2"></v-divider>
          <v-container>
            <v-row align="center">
              <v-col cols="12">
                <v-btn
                  class="mr-2"
                  color="#f0c14b"
                  tile
                  block
                  outlined
                  @click="reserve"
                  :to="{
                    name: 'categorias-id',
                    params: {
                      id: item.categoria + '/' + item.id,
                      valor: item.id,
                    },
                  }"
                  nuxt
                >
                  <v-icon left>mdi-apps</v-icon>Aceptar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  computed: {
    categorias() {
      return this.$store.state.categorias.categorias.todos
    },
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

