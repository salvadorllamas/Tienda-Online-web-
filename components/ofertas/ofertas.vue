<template>
  <div class="text-center">
    <h1>Estos son las ofertas</h1>
    <v-row>
      <v-col cols="12" md="4" lg="3" v-for="(item,index) in productos" :key="index">
        <v-card class="mx-auto">
          <v-card color="#FFFFFF " class="mb-5">
            <v-img height="400px" width="400px" contain :src="item.src" class="align-center">
              <v-img height="100%" width="90%" :src="item.accesorios"></v-img>
            </v-img>
          </v-card>
          <v-responsive height="90">
            <h2>{{item.nombreCorto}}</h2>
          </v-responsive>
          <v-card-text class="pt-0">
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
                  color="#f0c14b"
                  block
                  class="black--text"
                  :href="item.ref"
                  target="_blank"
                  nuxt
                >
                  <v-icon class="rotationX" left>mdi-share-all</v-icon>Ver oferta
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
    }
  },
  head() {
    return {
      title:
        '▷ las mejores ofertas en  INTERNET  del 【 ' +
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
          content:
            `⭐⭐⭐⭐⭐Las mejores ofertas en tecnologia || Y Promodescuentos ✅` +
            '⭐¡Entra y descúbrelos⭐...'
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  }
}
</script>