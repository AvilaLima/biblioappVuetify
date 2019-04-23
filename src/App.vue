<template>
  <div id="app">
    <GetEmprestimo/>
    <Emprestimos/>
  </div>
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
