import axios from 'axios';
const state = {
    emprestimos: []
};

const getters = {
    allEmprestimos: state => state.emprestimos,
    countCopias: state => {
        return state.emprestimos.length;
    }
};

const actions = {
    async getEmprestimo({
        commit
    }, id) {
        const response = await axios.get(
            `http://localhost:57978/api/Emprestimo/${id}`
        );
        commit('setEmprestimos', response.data);
    },
    async fetchEmprestimos({
        commit
    }) {
        commit('setEmprestimos');
    }
};

const mutations = {
    setEmprestimos: (state, emprestimos) => (state.emprestimos = emprestimos)
};

export default {
    state,
    getters,
    actions,
    mutations
};