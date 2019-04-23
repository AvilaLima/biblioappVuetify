<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-layout>
        <v-text-field v-model="id" label="Digite o RG..." :rules="rgRegra" required></v-text-field>
        <v-btn color="info" @click="validate">Buscar</v-btn>
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

<style>
</style>
