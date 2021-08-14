<template>
  <div>
    <!--
    <v-system-bar height="60" window dark color="primary">
      <v-spacer></v-spacer>

      <h2>digitalgate</h2>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
    -->

    <v-toolbar
      extended
      dark
      src="https://cdn.pixabay.com/photo/2020/03/03/17/22/the-internet-4899254_960_720.jpg"
      class="red-text"
    >
      <v-avatar>
        <img src="/icon.png" alt="Logo de la Empresa" />
      </v-avatar>

      <h1>DigitalGate</h1>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-app-bar color="deep-purple accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-btn class="ma-2">
        <h2>Logitech</h2>
      </v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-btn class="ma-2">
        <h2>Casio</h2>
      </v-btn>
      <v-divider class="mx-2" vertical></v-divider>
      <v-btn class="ma-2">
        <h2>Microsoft</h2>
      </v-btn>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
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
  })
}
</script>