
<template>
  <v-app>
    <div id="app">
      <h4 class="display-3 font-weight-thin font-italic">OpenBiblio - APP</h4>
      <GetEmprestimo/>
      <Emprestimos/>
    </div>
  </v-app>
</template>

<script>
import GetEmprestimo from "./components/GetEmprestimo.vue";
import Emprestimos from "./components/Emprestimos.vue";

export default {
  name: "app",
  components: {
    GetEmprestimo,
    Emprestimos
  }
};
</script>

<style src="./assets/css/main.css"></style>
