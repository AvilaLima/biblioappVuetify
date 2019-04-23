<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-sm2>
          <v-text-field v-model="id" clearable label="Digite o RG..." :rules="rgRegra" required></v-text-field>
        </v-flex>
        <v-flex sm2>
          <v-btn color="info" @click="validate">Buscar</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GetEmprestimo",
  data: () => ({
    valid: true,
    id: "",
    rgRegra: [v => !!v || "RG é obrigatório"]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.getEmprestimo(this.id);
      }
    },
    ...mapActions(["getEmprestimo"])
  }
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
