/*
1. Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!"

2. Na função "inicio", utilize escolha/caso (switch/case) para validar a opção escolhida pelo usuário.

3. Sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

4. Sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor que zero. Exiba uma mensagem de "Operação não autorizada".

5. Adicionar a opção para ver o extrato (Coloque algumas compras ou depósitos fictícios).

6. Adicionar a opção para fazer uma transferência. A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

7. Sempre que o usuário for transferir dinheiro,  o valor a ser transferido não pode ser igual ou menor que zero, ou seja, caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

8. No menu principal, a ordem das opções deve ser: Saldo, Extrato, Saque, Depósito, Transferência e Sair.

9. Atualize a função "erro" com as novas opções do menu.

10. Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada".

11. Sempre que o usuário for acessar o saldo, sacar, retirar o extrato ou transferir dinheiro é necessário que ele informe uma senha. Essa senha deve ser validada com uma condicional. A senha é 3589.

12. Caso a senha informada não seja a correta, é necessário chamar a função atual novamente. 

13. Quando o usuário escolher sair do sistema, exiba uma mensagem agradecendo por utilizar os serviços do banco: "{Nome}, foi um prazer ter você por aqui!".
*/

// 1. perguntar nome do usuário
var nome = prompt("Informe o seu nome: ");
alert("Olá " + nome + "! É um prazer ter você por aqui!");

//variaveis
var senha = 3589;
var saldo = 5000;

// 11. e 12. função para verificar a senha
function verificarsenha() {
    var senhaInformada = parseInt(prompt("Por favor, insira sua senha!"));
    while (senhaInformada != senha) {
        senhaInformada = parseInt(prompt("Senha incorreta! Por favor, insira sua senha novamente!"));
    }
    alert("Senha correta! Acesso liberado.");
}

// 2. função principal case 8. ordem do menu
function inicio() {
    var opcao = parseInt(prompt(
        "O que você gostaria de fazer?\n" + 
        "[1] Saldo\n" + 
        "[2] Extrato\n" + 
        "[3] Saque\n" + 
        "[4] Depósito\n" + 
        "[5] Transferência\n" + 
        "[6] Sair"
    ));

    switch (opcao) {
        case 1:
            verificarsenha();
            verificarSaldo();
            break;

        case 2:
            verificarsenha();
            verificarExtrato();
            break;

        case 3:
            verificarsenha();
            fazersaque();
            break;

        case 4:
            verificarsenha();
            fazerdeposito();
            break;

        case 5:
            verificarsenha();
            fazertransferencia();
            break;

        case 6:
            sairdaconta();
            break;

        default:
            alert("Opção inválida! Tente novamente.");
            inicio(); 
            break;
    }
}

// Função para verificar saldo
function verificarSaldo() {
    alert("O seu saldo é de R$" + saldo + ",00");
    inicio();
}

// 5. função para verificar extrato
function verificarExtrato() {
    var extrato = "Extrato das últimas transações:\n" +
        "1. Compra no supermercado: - R$ 150,00\n" +
        "2. Depósito: + R$ 1000,00\n" +
        "3. Pagamento de conta: - R$ 200,00\n" +
        "4. Compra em loja de roupas: - R$ 300,00\n" +
        "5. Depósito: + R$ 500,00";

    alert(extrato);
    inicio();
}

// 3. e 4. Função para fazer saque
function fazersaque() {
    var valor = parseFloat(prompt("Insira o valor que deseja sacar: "));
    
    if (valor > saldo || valor <= 0) {
        erro();  
    } else {
        saldo -= valor;  
        alert("Saque realizado com sucesso! Seu saldo atual é de R$" + saldo + ",00");
    }
    inicio();
}

// 10. função para fazer depósito
function fazerdeposito() {
    var deposito = parseFloat(prompt("Insira o valor que deseja depositar: "));
    if (deposito <= 0) {
        erro(); 
    } else {
        saldo += deposito;
        alert("Depósito realizado com sucesso! Seu saldo atual é de R$" + saldo + ",00");
    }
    inicio();  
}

// 6. e 7. função para fazer transferência
function fazertransferencia() {
    var conta = prompt("Digite o número da conta para fazer a transferência: ");
    while (isNaN(conta)) {
        alert("Por favor, digite um número!");
        conta = prompt("Digite o número da conta para fazer a transferência: ");
    }

    var transferencia = parseFloat(prompt("Insira o valor a ser transferido: "));
    if (transferencia > saldo || transferencia <= 0) {
        erro();
    } else {
        saldo -= transferencia;
        alert("Transferência realizada com sucesso! Seu saldo atual é de R$" + saldo + ",00");
    }
    inicio();
}

// 13. função para sair do programa
function sairdaconta() {
    alert(nome + ", foi um prazer ter você por aqui! Volte sempre!");
}

// 9. função para tratar erros
function erro() {
    alert("Operação não autorizada!");
    inicio();
}

// inicia o programa
inicio();







