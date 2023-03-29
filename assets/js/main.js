const input = document.querySelector('.input'); // aqui é o simples, selecionando a class do input e colocando na variável input

input.addEventListener('keypress', () => { //esse keypress é pra pegar o evento de digitar algo, tipo, se tu digita um '1' ou 'o' ele vai captar o input, porém se você usar um shift, ctrl ou alt da vida ele n vai ser captado
    let inputLength = input.value.length

    if( inputLength === 3){
        input.value += '.'
    }
    if( inputLength === 7){
        input.value += '.'
    }
    if( inputLength === 11){
        input.value += '-'
    }
    /* Na resolução do exercício o cara usou os if dessa forma resumida
     if (inputLength === 3 || inputLength ===7){
        input.value += '.'
     }else if (inputLength === 11){
            input.value += '-'
     }
     A forma que ele fez ficou mais curta, mas deixei a minha pra manter a originalidadekkkkk
    */
    
    

    
})
