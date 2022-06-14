//o que são Vetores ou Arrays?

//Como Declarar uma Array?
/* let array = ['string', 1, true];
console.log(array); */

//pode guardar vários tipos de dados.
 let array = ['string', 1, true,['array1'], ['array2'], ['array3'], ['array4'] ];
//console.log(array);

//como buscar um ídice de uma array?
/* let array = ['string', 1, true,['array1'], ['array2'], ['array3'], ['array4'] ];
        //        0       1    2      3            4           5           6
console.log(array[6]); */
// o js retorna o valor [array4] que é o item(índice) 6 na váriável array.


// Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.
//> forEach() = itera uma array;
 // array.forEach(function (item, index){console.log(item, index)}); 
        
//> push() = add item no final do array;
   /* array.push('novo item', 33);
   console.log(array) */

//> pop() = remove item no final do array;
   /*   array.pop();
      console.log(array) */
//> shift() = remove item no início do array;
    /*   array.shift()
       console.log(array) */

//> unshift() = add item no início do array;
     /*  array.unshift('novo item no array');
       console.log(array) */


//> indexOf() = retorna o índice de um valor;
     /*  console.log(array.indexOf(true)) */

//splice() = remove ou substitui um item pelo índice;
    /*  array.splice(0, 3)
      console.log(array) */
//slice() = retorna uma parte de uma array existente;
   /*  let novoArray = array.slice(0,3)
     console.log(novoArray) */
          
            // Objetos
/* São dados que possue prorpiedades e valores que definem suas características, deve ser declarado entre chaves "{}".
   Exemplos:
      Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:
                  
                        var xicara= {
                            cor: 'azul',
                            tamanho: 'p'
                            função: tomarCafe()
                        }
                                
                        
                        Manipulando Objetos.
   As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto.
   chamamos isso de desetruturação.
   Exemplos:
               var xicara = {cor:'azul', tamanho:'p', funcao:tomarCafe()}

               var cor = xicara.cor;
               var tamanho = xicara.tamanho;
               var funcao = temarCafe();  */
    
    let object = { string: 'string', number: 1, boolean: true, array: ['array1']};            
       console.log(object);

               

                        



