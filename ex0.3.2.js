// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
//Faça uma função que retorne todos as tarefas que estão concluídas.
const tarefas = [
  {
    titulo: 'ir na academia',
    concluida: false,
    frequenciaDiariaSemanal: 4,
  },
  {
    titulo: 'ir na feira',
    concluida: true,
    frequenciaDiariaSemanal: 1,
  },
  {
    titulo: 'ir ao supermercado',
    concluida: true,
    frequenciaDiariaSemanal: 1,
  },
];
const tarefasConcluidas = tarefas.filter(function (tarefa) {
  return tarefa.concluida;
});
console.log(tarefasConcluidas);
