<template>
  <inicio-principal></inicio-principal>
</template>

<script>
import categorias from '~/components/categorias/Categorias.vue'
import inicio from '~/components/principal/Inicio.vue'
export default {
  //layout: 'principal',
  components: {
    'inicio-principal': categorias,
    //'inicio-principal': inicio
  },
  computed: {
    fecha() {
      return this.$store.state.fecha.data
    },
  },
  // este metodo es para  ponerle la  descripcion de   la pagina  y su descripcion
  /*
  head() {
    return {
      title:
        '▷ Las Mejores Marcas de TECLADOS || Los Mejores Teclados del【' +
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
          content: `⭐⭐⭐⭐⭐Las Mejores Marcas de Teclados || Son los mejores Teclados para tu Uso Cotidiano✅  
                    ⭐¡Entra y descúbrelos⭐...
                   `
        }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  }
  */
}
</script>