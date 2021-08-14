<template>
  <!-- App.vue -->

  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer>
    absolute
    
    -->
    <v-app-bar color="#121212" prominent src="https://cdn.pixabay.com/photo/2020/03/03/17/22/the-internet-4899254_960_720.jpg">
      <v-container>
        <v-row black class="text-center white--text display-1">
          <v-col cols="12">
            <h1 class="mt-5">
              <FONT size="8">DETECLADOS</FONT>
            </h1>
          </v-col>
        </v-row>
        <v-row class="d-none d-sm-flex">
          <v-col cols="12">
            <v-card elevation="24">
              <v-tabs centered background-color="blue darken-4">
                <v-tab v-for="(item,index) in items" :key="index" exact :to="{name:item.ruta}">
                  <v-icon left>{{item.icon}}</v-icon>
                  {{item.title}}
                </v-tab>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components  
    <boton-scrol />-->
    <v-content class="pt-5">
      <!-- Provides the application the proper gutter -->

      <v-container fluid>
        <info-cookis class="mt-5" />

        <!-- If using vue-router -->
        <nuxt />
      </v-container>

      <boton-scrol class="d-none d-sm-flex" />

      <menu-inferior-movail class="d-flex d-sm-none" />
    </v-content>

    <v-footer>
     
      <span>&copy; {{ fecha.dia }}/ {{fecha.mes}}</span>

      <v-spacer></v-spacer>
      <span>&copy; {{ fecha.ano }}</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>
<script>
import Footer from '~/components/principal/Footer.vue'
import Drawer from '~/components/principal/Drawer.vue'
import menuInferior from '~/components/principal/menu_inferior.vue'
import cookis from '~/components/principal/Cookis.vue'

export default {
  components: {
    'footer-contacto': Footer,
    'boton-scrol': Drawer,
    'menu-inferior-movail': menuInferior,
    'info-cookis': cookis
  },
  data: () => ({
    items: [
      { title: 'Inicio', ruta: 'index', icon: 'mdi-home' },
      {
        title: ' Los Mas Vendidos',
        ruta: 'masVendidos',
        icon: 'mdi-shopping-search'
      },
      { title: 'Ofertas', ruta: 'ofertas', icon: 'mdi-tag' }
    ]
  }),
  computed: {
    fecha() {
      return this.$store.state.fecha.data
    }
  }
}
</script>