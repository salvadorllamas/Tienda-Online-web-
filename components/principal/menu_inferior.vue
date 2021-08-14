<template class="ma-4">
  <div>
    <v-bottom-navigation v-model="bottomNav" dark shift app>
      <v-list-item class="pa-0">
        <v-list-item-avatar>
          <v-img src="/digitalgate.svg"></v-img>
        </v-list-item-avatar>
        <h1>
          <FONT size="4">DETECLADOS</FONT>
        </h1>
      </v-list-item>

      <v-btn @click="$vuetify.goTo(0)">
        <span>Arriva</span>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn @click.stop="drawer = !drawer">
        <span>Menu</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" fixed temporary bottom>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/digitalgate.svg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <h1>DETECLADOS</h1>
          </v-list-item-title>
        </v-list-item-content>

        <v-btn @click.stop="drawer = !drawer" text>
          <v-icon>mdi-arrow-collapse-down</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-btn :to="item.ruta" nuxt text exact>
              <v-list-item-title>
                <v-icon left>{{item.icon}}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 1,
      drawer: null,
      items: [
        { title: 'Inicio', ruta: '/', icon: 'mdi-home' },
        {
          title: 'Los Mas Vendidos',
          ruta: '/masVendidos',
          icon: 'mdi-shopping-search'
        },
        { title: 'Ofertas', ruta: '/ofertas', icon: 'mdi-tag' }
      ]
    }
  }
}
</script>