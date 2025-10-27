/*let allBtn = document.querySelectorAll("button");
let val1 = document.getElementById("val1"); // --> rappresenta un oggetto non un numero
let val2 = document.getElementById("val2");
let result = document.getElementById("result");
let memory = document.getElementById("memory");
allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (event ) =>{
        console.log(event.target.attributses);
        let operation = event.target.attributes["operation"].value;
        let a = parseFloat(val1.value); // --> parsefloat 
        let b = parseFloat(val2.value);
        let res = performOperation(val1, val2, operation);
        result.innerText = res;
        let Mylog = new Mylog(a, b, operation);
        let logline = document.createElement("li");
        logline.innerText = "Eseguito" 
        memory.appendChild(logline);
    })
});

function performOperation(a, b, operation) {
    switch (operation) {
        case "+":
            return somma(a, b);
        case "-":
            return divisione(a, b);
        case "*":
            return moltiplicazione(a, b);
        case "/":
            return divisione(a, b);
        default:
            return Error("Operazione non valida");
    }
}




function somma(a,b){
    return a+b;
}

function sottrazione(a,b){
    return a-b;
}

function moltiplicazione(a,b){
    return a*b;
}

function divisione(a,b){
    return a/b;
}


function Mylog (a, b, operation) {
    this.val1 = a;
    this.val2 = b;
    this.operation = operation;
    this.fnload = function(){
        val1.value = this.val1;
        val2.value = this.val2;
    }
}*/

let allBtn = document.querySelectorAll("button");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");
let memory = document.getElementById("memory");

// Cicla su tutti i pulsanti
allBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // ✅ Leggi l’attributo "operation" dal pulsante cliccato
    let operation = event.target.getAttribute("operation");

    // ✅ Converti i valori degli input in numeri
    let a = parseFloat(val1.value);
    let b = parseFloat(val2.value);

    // ✅ Controlla che siano numeri validi
    if (isNaN(a) || isNaN(b)) {
      result.innerText = "Inserisci due numeri validi!";
      return;
    }

    // ✅ Calcola il risultato
    let res = performOperation(a, b, operation);
    result.innerText = `Risultato: ${res}`;

    // ✅ Crea un log della operazione
    let mylog = new Mylog(a, b, operation);
    let logline = document.createElement("li");
    logline.innerText = `${a} ${operation} ${b} = ${res}`;

    // 🔁 cliccando sul log ricarichi i valori nei campi input
    logline.addEventListener("click", () => mylog.fnload());

    memory.appendChild(logline);
  });
});

/**
 * Esegue l'operazione richiesta
 */
function performOperation(a, b, operation) {
  switch (operation) {
    case "+": return somma(a, b);
    case "-": return sottrazione(a, b);
    case "*": return moltiplicazione(a, b);
    case "/": return divisione(a, b);
    default:  return "Operazione non valida";
  }
}

/**
 * Operazioni matematiche
 */
function somma(a, b) { return a + b; }
function sottrazione(a, b) { return a - b; }
function moltiplicazione(a, b) { return a * b; }
function divisione(a, b) { return b !== 0 ? a / b : "Errore: divisione per 0"; }

/**
 * Classe per salvare i log delle operazioni
 */
function Mylog(a, b, operation) {
  this.val1 = a;
  this.val2 = b;
  this.operation = operation;
  this.fnload = function () {
    val1.value = this.val1;
    val2.value = this.val2;
  };
}
