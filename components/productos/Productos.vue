<template>
  <div class="text-center">
    <h1 v-if="store">Estos son los productos mas vendidos</h1>
    <h1 v-else>Estos son los productos que existen</h1>
    <v-row>
      <v-col cols="12" md="4" lg="3" v-for="(item,index) in productos" :key="index">
        <v-card class="mx-auto">
          <v-card color="#FFFFFF " class="mb-5">
            <v-img height="400px" width="400px" contain :src="item.src" class="align-center">
              <v-img height="100%" width="90%" :src="item.accesorios"></v-img>
            </v-img>
          </v-card>
          <v-responsive height="90">
            <h1 v-if="store">{{item.nombreCorto}}</h1>
            <h2 v-else>{{item.nombreCorto}}</h2>
          </v-responsive>
          <v-card-text class="pt-0">
            <v-row>
              <v-rating
                :value="item.estrellas"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ml-4">{{item.estrellas}}</div>
            </v-row>
            <v-responsive height="150">
              <v-card-text class="my-4 subtitle-1 text-left">{{item.nombre}}</v-card-text>
            </v-responsive>
          </v-card-text>
          <!--
          <nuxt-link
            class="mt-2"
            :to="{name:'informacionProductos-id',params:{id:item.id}}"
          >Más información</nuxt-link>-->

          <v-divider class="mx-4"></v-divider>

          <v-container>
            <v-row>
              <v-col cols="12" lg="7">
                <v-btn
                  color="amber darken-3"
                  block
                  class="black--text"
                  :href="item.ref"
                  target="_blank"
                  nuxt
                >
                  <v-icon class="rotationY" left>mdi-cart-arrow-right</v-icon>Compra ahora
                </v-btn>
              </v-col>
              <v-col cols="12" lg="4">
                <v-btn color="deep-purple lighten-2" text block to="/" nuxt class="text-left">
                  <v-icon>mdi-clipboard-arrow-left</v-icon>Regresar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      type: Boolean
    },
    productos: {
      type: Array
    }
  },
  computed: {
    fecha() {
      return this.$store.state.fecha.data
    },
    ruta() {
      var data = {}
      var divisiones = ''
      var titulo = ''
      var contenido = ''
      var rutaOfertas = this.$route.path
      var parametros = this.$route.params.id
      if (parametros != undefined) {
        divisiones = parametros.split('/', 2)
        titulo = 'Las Mejores ' + divisiones[0] + ' ||  del'
        contenido = `⭐⭐⭐⭐⭐Las Mejores  ${divisiones[0]} ||Las Mejor Marca de Teclados ✅`
        return (data = { titulo: titulo, contenido: contenido })
      } else {
        divisiones = rutaOfertas.split('/', 2)
        titulo = ' Lo más VENDIDO por internet || del'
        contenido = `⭐⭐⭐⭐⭐Las Mejores Productos de Teclados || Y Productos Novedosos para COMPRAR ✅`
        return (data = { titulo: titulo, contenido: contenido })
      }
    }
  },
  head() {
    return {
      title:
        '▷ '+this.ruta.titulo +'【 '+
        this.fecha.dia +
        '-' +
        this.fecha.mes +
        '-' +
        this.fecha.ano +
        '】',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.ruta.contenido + '⭐¡Entra y descúbrelos⭐...'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  }
}
</script>