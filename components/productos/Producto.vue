<template>
  <div>
    <v-card>
      <h1>El producto es: {{producto.nombre}}</h1>
      <v-container max-width="100%" class="ml-auto">
        <v-row>
          <v-col cols="1" sm="1">
            <v-col cols="12" v-for="a in 3" :key="a.id">
              <v-img height="50%" :src="producto.src" contain></v-img>
            </v-col>
          </v-col>

          <v-col cols="1" sm="6">
            <v-card max-width="80%" elevation="24">
              <v-img height="25%" :src="producto.src"></v-img>
            </v-card>
          </v-col>
          <v-col cols="3" class="text-left">
            <h1>sdafasdfsadfsadf</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    producto() {
     
      return this.$store.state.articulos.productos.data.filter(
        data => data.id === parseInt(this.$route.params.id)
      )
    }
  }
}
</script>