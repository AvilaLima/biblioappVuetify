<template>
  <v-app id="emprestimos" v-if="allEmprestimos.length!=0">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>Emprestimos</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list four-line>
          <template v-for="livro in allEmprestimos">
            <span class="font-weight-bold.font-italic headline text-wrap">{{livro.titulo}}</span>
            <v-list-tile-content :key="livro.bibid">
              <v-container fluid grid-list-sm py-4 px-4>
                <v-layout row wrap justify-space-between>
                  <v-flex>
                    <v-chip
                      small="true"
                      color="indigo darken-4"
                      text-color="white"
                    >Autor: {{livro.autor}}</v-chip>
                  </v-flex>
                  <v-flex>
                    <v-chip
                      small="true"
                      color="orange darken-4"
                      text-color="white"
                    >Nº de chamada: {{livro.numeroDeChamada}}</v-chip>
                  </v-flex>
                  <v-flex>
                    <v-chip small="true" color="light-blue" text-color="white">{{livro.editora}}</v-chip>
                  </v-flex>

                  <v-flex>
                    <v-chip small="true" color="indigo " text-color="white">{{livro.idioma}}</v-chip>
                  </v-flex>

                  <v-flex>
                    <v-chip
                      small="true"
                      color="teal "
                      text-color="white"
                    >Copias disponiveis: {{countCopias}}</v-chip>
                  </v-flex>
                  <template v-for="categoria in livro.categoria">
                    <v-flex>
                      <v-chip small="true" color="amber darken-2" text-color="white">{{ categoria }}</v-chip>
                    </v-flex>
                  </template>
                </v-layout>
                <v-layout row wrap justify-space-between>
                  <v-flex>
                    <v-text-field
                      label="Data de Emprestimo"
                      prepend-icon="event"
                      readonly
                      height="1"
                      full-width="true"
                      class="styled-input"
                      :value="livro.emprestimo.dataDeEmprestimo | formatDate"
                    ></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      label="Data de Devolução"
                      prepend-icon="event"
                      readonly
                      height="1"
                      full-width="true"
                      id="styled-input"
                      :value="livro.emprestimo.dataDeDevolucao | formatDate"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
              </v-container>
            </v-list-tile-content>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Emprestimos",
  methods: {
    ...mapActions(["fetchEmprestimos", "getEmprestimo"])
  },
  computed: mapGetters(["allEmprestimos", "countCopias"]),
  created() {}
};
</script>