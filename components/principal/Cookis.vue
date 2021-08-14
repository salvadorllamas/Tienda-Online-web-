<template>
  <v-banner v-if="cookis" color="white" sticky elevation="24"    class="text-center black--text" tile>
    <p class="ma-1">Utilizamos cookies propias y de terceros para ofrecer nuestros servicios, recoger información estadística e incluir publicidad. Si continua navegando acepta su instalación y uso. Puede cambiar la configuración u obtener más información en nuestra.</p>
    <v-row class="d-flex justify-center mt-2">
      <a href="/cookis" class="ma-3">POLÍTICA DE COOKIES</a>
      <v-btn color="primary" @click="cookis=false">Aceptar</v-btn>
    </v-row>
  </v-banner>
</template>
<script>
export default {
  data() {
    return {
      cookis: true
    }
  }
}
</script>