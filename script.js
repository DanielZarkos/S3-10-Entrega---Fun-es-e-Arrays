
let firstPlace = "Rafael"
let secondPlace = "Manoel"
let lastPlace = "Daniel"




function name(firstPlace, secondPlace, lastPlace) {
    if (secondPlace === "Daniel"){
        secondPlace = firstPlace
        firstPlace = "Daniel"               
    }else if (lastPlace === "Daniel"){
        lastPlace = secondPlace
        secondPlace = "Daniel"               
    }
    

    let array = [firstPlace, secondPlace, lastPlace]
    console.log("Primeiro colocado: " + array[0])
    console.log("Segundo colocado: " + array[1])
    console.log("Terceiro colocado: " + array[2])
    
}
name(firstPlace, secondPlace, lastPlace)
