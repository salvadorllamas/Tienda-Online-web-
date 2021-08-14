<template>
  <div>
    <h1>{{articulos.title}}</h1>
    <br />
    <p>{{nombre}}</p>
    <br />
    <p>{{articulos.body}}</p>

    <nuxt-link to="/ejercicios">
      <v-btn class="succest">Regresar</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // layout: 'principal',
  data() {
    return {
      articulos: '',
      nombre: ''
    }
  },
  async created() {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )

      this.articulos = res.data
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )

      this.nombre = user.data.name

      console.log(user.data)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>