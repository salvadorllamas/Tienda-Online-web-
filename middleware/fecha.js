var f = new Date()
var meses = new Array(
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
)
export default function fecha({store}) {
  store.commit('fecha/dia', {
    dia: f.getDate(),
    mes: meses[f.getMonth()],
    ano: f.getFullYear()
  })
}
