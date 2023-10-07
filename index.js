var elementosDuvida = document.querySelectorAll('.duvida') //pegando todos os elementos*/

/*uma funçao para cada elemento duvida*/
elementosDuvida.forEach(function (duvida ){// dentro dessa funçao adicionar um evento click*/
 duvida.addEventListener('click', function (){
    //esse evento click vai executar a linha de dentro ()*/
   duvida.classList.toggle('ativa')/*toggle é um liga e desliga*/
 })
})
//function nome(argumento){
    //conteudo da função}*/

