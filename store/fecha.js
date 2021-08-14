export const state = () => ({
  //el id 1 es los electronicos  y el aydi 2 lo demas 
  data: {
    dia: '',
    mes: '',
    ano: '',
  }

})
export const mutations = {
  dia(state, payload) {
    state.data.dia = payload.dia;
    state.data.mes = payload.mes;
    state.data.ano = payload.ano;
  }
}
