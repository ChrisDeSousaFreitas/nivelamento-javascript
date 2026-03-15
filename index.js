// ==========================================
// 1. Variáveis e Tipos de Dados
// ==========================================
console.log("--- 1. Variáveis e Tipos ---");
const PI = 3.1415; // Valor fixo
let idade = 25;    // Valor que pode mudar
let nome = 'Carlos';

// ==========================================
// 2. Null e Undefined
// ==========================================
console.log("\n--- 2. Null e Undefined ---");
let usuarioLogado = null; // Vazio intencional
let nomeUsuario;          // Declarado, mas sem valor (undefined)
console.log("Usuário logado:", usuarioLogado);
console.log("Nome de usuário:", nomeUsuario);

// ==========================================
// 3. Arrays e Objetos
// ==========================================
console.log("\n--- 3. Arrays e Objetos ---");
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Uva");
console.log("Frutas:", frutas);

let pessoa = { 
  nome: "Carlos", 
  idade: 30,
  ativo: true
};
console.log("Pessoa:", pessoa.nome, "-", pessoa.idade, "anos");

// ==========================================
// 4. Estruturas de Controle (if/else e switch)
// ==========================================
console.log("\n--- 4. Estruturas de Controle ---");
let hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

let cor = "azul";
switch (cor) {
  case "vermelho":
    console.log("A cor escolhida foi vermelho.");
    break;
  case "azul":
    console.log("A cor escolhida foi azul.");
    break;
  default:
    console.log("Cor não reconhecida.");
}

// ==========================================
// 5. Laços de Repetição (for e while)
// ==========================================
console.log("\n--- 5. Laços de Repetição ---");
for (let i = 0; i < 2; i++) {
  console.log("Contador for:", i);
}

let contador = 0;
while (contador < 2) {
  console.log("Número while:", contador);
  contador++;
}

// ==========================================
// 6. Funções e Callbacks
// ==========================================
console.log("\n--- 6. Funções ---");
// Função tradicional
function saudacao(nomeParam) {
  return "Olá, " + nomeParam + "!";
}
console.log(saudacao("Maria"));

// Arrow Function
const dobro = (numero) => numero * 2;
console.log("O dobro de 5 é:", dobro(5));

// Callback
function processar(callback) {
  console.log("Processando...");
  callback();
}
processar(() => console.log("Finalizado!"));

// Função assíncrona
async function pegarDados() {
  return "Dados recebidos via async!";
}
pegarDados().then(console.log);