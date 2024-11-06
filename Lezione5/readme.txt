obiettivo => suddivido il programma in piccole (parti di codice) riutilizzabili
- programmazione procedurale (tramite funzioni)
- programmazione orientata agli oggetti


che cos'è una funzione => un blocco di codice avente un nome
cosa è necessario fare?
1) dichiarazione di una funzione
2) invocare (o chiamare) la funzione più e più volte


var parametro1 = argomento1;

// 1) dichiarazione di una funzione
function nomeDellaFunzione(parametro1, parametro2, parametro3, ...) {
    // ... 
    // ... 
    // ... 
}

// 2) invocare (o chiamare) la funzione più e più volte
nomeDellaFunzione(argomento1, argomento2, argomento3, ...);
nomeDellaFunzione();
nomeDellaFunzione();
nomeDellaFunzione();


la keyword return è utile per 2 motivi:
- terminare l'esecuzione della funzione in modo esplicito
- fa fuoriuscire dalla funzione (output) un VALOREEEE!!!




scope delle variabile (ambito di visibilità delle variabile):
- una variabile dichiarata con var ha scope a livello di funzione entro cui è stata dichiarata!!!
- una variabile dichiarata con let oppure una costante dichiarata con const ha scope a livello di blocco di codice entro cui è stata dichiarata!!!