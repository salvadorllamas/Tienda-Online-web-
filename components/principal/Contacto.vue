<template>
  <v-container>
    <v-form @submit.prevent="EnviarDatos" v-model="valid">
      <v-text-field label="Nombre" v-model="from_name"></v-text-field>
      <v-text-field v-model="from_email" :rules="[rules.required,rules.correo]" label="Correo"></v-text-field>
      <v-text-field label="Tema" v-model="from_tema"></v-text-field>
      <v-textarea label="Mensaje" v-model="from_message" :rules="[rules.required]"></v-textarea>

      <v-btn large block color="warning" type="submit" class="mt-5">Enviar</v-btn>
    </v-form>

    <v-snackbar color="error" daeck v-model="snackbar">
      <div class="black-- text">este es un errorr</div>

      <v-btn text @click="snackbar = false">cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      from_name: '',
      from_email: '',
      from_tema: '',
      from_message: '',
      snackbar: false,
      valid: false,
      rules: {
        required: value => !!value || ' Campo requerido.',
        correo: v => v =>
          /.+@.+/.test(v) || 'El Correo electronico debe ser válido'
      }
    }
  },
  methods: {
    EnviarDatos() {
      alert('se enviaron los datos con exito')
    }
  }
}
</script>







