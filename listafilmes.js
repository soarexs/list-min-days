// lista [1.90 1.04 1.25 2.5 1.75] 

[1.04, 1.25, 1.75, 1.9, 2.5]

1.04 + 1.25


// LISTA ORRDENADA DO MAIORR AO MENOR [1.04 1.25 1.75 1.90 2.5]

// Eu ordenei a lista de filmes do menor ao maior, peguei os filmes com menor 
// tempo e somei com os seguintes, dentro do limite de 3h, caso a soma dos filmes 
// for maior que 3h deixar para o dia seguinte

// dia 1 1.04 + 1.25 = 2.29 

// dia 2 1.75 

// dia 3 1.90   

// dia 4 2.5


// PRIMEIRO PASSO E ORDENAR AS HORAS DOS FILMES DO MENOR AO MAIOR
// SEGUNDO PASSO E PEGAR O MENOR FILME E SOMAR COM O PROXIMO
// TERCEIRO PASSO IDENTIFICAR SE A SOMA DOS DOIS FILMES NAO PASSA DE 3H

// CASO A SOMA DOS FILMES PASSE DO HORARIO ESTIPULADO, PASSAR PARA O SEGUINTE FILME, 
//SE NAO CORRESPONDER NOVAMENTE, DEIXAR PARA ASISSITIR UM FILME SO NO DIA



// const listMovies = [1.01,
//         1.03,
//     1.02,
//     1.4,
//     2.4,3, 3]

// const listt = [
// 1.01,
// 1.991, 
// 1.32,
// 1.4
// ]

// const itemsList = []

// const values = []

const sortNum = (list, sortList) => {
    Array.min = function(array) {
        return Math.min.apply(Math, array)
    }

    const lengthList = list.length    
    while(sortList.length !== lengthList) {
        const index = list.indexOf(Array.min(list))
        sortList.push(Array.min(list))
        list.splice(index, 1)
    }
    return console.log(sortList)
}

const list = [1.01, 1.991, 1.32, 1.4 ]
const sortList = []


const calcMinDays = (list, sortList, numLim) => {
    sortNum(list, sortList)
    let num = 1
    const condition = list[0] + list[list.length - num] < numLim
    if(condition)
        while(condition) {
            num++
        }
}

calcMinDays(list, sortList, 3)




































// const minDaysWatching = (list, values, itemsList) => {
//     let numLim = 0
//     let num = 1
//     sortNum(list, itemsList)
    
//     while(numLim < itemsList.length){
//         numLim++
//         for(i = 1; i < itemsList.length; i++) {
//             var soma = itemsList.reduce(function(soma, i) {
//                  return soma + i;
//             });

//             if(soma === 3) {
//                 values.push([itemsList[i]])
//                 const index = itemsList[i]
//                 itemsList.splice(index, 1)
//                 return console.log(`São necessários: ${values.length} dias`)
//             }
        
//             if(itemsList[0] + itemsList[i] < 3) {
//                 const c = itemsList[0] + itemsList[i]
//                 console.log(c, c + itemsList[i], itemsList[i])
//                 values.push([itemsList[0], itemsList[i]])
//                 itemsList.splice(i, 1)
//                 itemsList.shift()
//                 itemsList.length === 1 ? values.push([itemsList[0]]) : null
//             } else {
//                 values.push([itemsList[0]])
//                 itemsList.shift()
//             }
            

//         }
//     }
//     console.log(`São necessários: ${values.length} dias`)
// }  

// minDaysWatching(listMovies, values, itemsList)



// const listt = [
// 1.01,
// 1.991,
// 1.32,
// 1.4
// ]

// l = [1.4, 1.32, 0.25]


// const set_closest_to_target = (set, target) => {
//     let current = set[0]
//     let closest_indexes = [0]
//     let closest_values = [set[0]]

//     for (let i = 1; i < set.length; i++) {
//         let total = current + set[i]

//         if (total == target) {
//             closest_indexes.push(i)
//             closest_values.push(set[i])
//             return [closest_indexes, closest_values]
//         }

//         if (total < target) {
//             closest_indexes.push(i)
//             closest_values.push(set[i])
//             current = total
//         }
//     }

//     return [closest_indexes, closest_values]
// }


// const r = set_closest_to_target([ 8, 6, 4], 12)


// console.log(r)









// function acherMinimoDeDias(duracoes) {
//     let days = 0;
//     // aqui são o numero de dias dque ele pode assistir que é = 0 no começo
//     const sortNumber = duracoes.sort();
//     // fiz o sort do array igual você do menor para o maior
//     sortNumber.forEach((n, index) => {
//         // percorri o array recebendo o n e o index ou seja o primeiro numero e qual index ele se encontra
//         if (n + sortNumber[index + 1] <= 3) {
//             // aqui eu valido se o n que é o numero encontrado dentro do array + o proximo item ou numero é menor que 3
//             // se essa condição for verdadeira eu adiciono um dia ao days
//             // o que preciso fazer após isso é remover os numeros somados
//             // esse é seu desafio, procure por SPLICE ou FILTER no JS que você vai conseguir resolver
//             //  Boa sorte você tem 72 horas pra me mandar 
            
//             console.log("alo");
//             days++
//         }
//     });
//     console.log(days);
// }

// const test = [1.90, 2.5, 1.04, 1.25, 1.75]
// acherMinimoDeDias(test)