let maior = 0
let menor = 0
let media = 0
let index = 0

function qualANota (x, y, z) {

    let notas = [x,y,z]
    maior = notas[index]
    menor = notas[index]

    while ( index < 3) { 
        if (notas[index] > maior ) {
            maior = notas[index]
        }
        if (notas[index] < menor ) {
            menor = notas[index]
        }
        index ++
    }

    index = 0 
    
    let notas2 = [x,y,z]

    while ( index < 3)  {

        if (notas2[index] == maior ) {
            notas2.splice(index, index+1)
        }
        else if (notas2[index] == menor ) {
            notas2.splice(index, index+1)
        }
        index++
    }



    console.log ("média " + notas2)
    console.log("maior: " + maior)
    console.log("menor: " + menor)

}

qualANota(100,60,600)