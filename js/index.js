/*Pegando os Numbers pelo DOM*/
const zer = document.querySelector('#zero')
const um = document.querySelector('#um')
const dois = document.querySelector('#dois')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const sete = document.querySelector('#sete')
const oito = document.querySelector('#oito')
const nove = document.querySelector('#nove')

const igual = document.querySelector('#igual')

/*Pegando a tela*/
const tela = document.querySelector('#tela')
const telaSecundaria = document.querySelector('#telaSecundaria')


/*Variaveis nescessarias*/
let primerioValor, segundoValor, operador

/*Calculando o resultador e mostrando na tela*/
function resultado(){
    console.log(primerioValor)
    if(operador == 'somar'){
        igual.disabled = true
        segundoValor = Number(tela.value)
        telaSecundaria.value += `${segundoValor}`
        tela.value = primerioValor + segundoValor
    }
    else if(operador == 'subtrair'){
        igual.disabled =true
        segundoValor = Number(tela.value)
        telaSecundaria.value += segundoValor
        tela.value = (primerioValor - segundoValor)
    }
    else if(operador == 'multiplicar'){
        igual.disabled =true
        segundoValor = Number(tela.value)
        telaSecundaria.value += segundoValor
        tela.value = primerioValor * segundoValor
    }
    else if(operador == 'dividir'){
        igual.disabled =true
        segundoValor = Number(tela.value)
        telaSecundaria.value += segundoValor
        tela.value = (primerioValor / segundoValor).toFixed(2)
    }
}

/*Pegando o valor da tela e armazenando no primeiroValor*/
function somar(){
    igual.disabled = false
    primerioValor = Number(tela.value)
    operador = 'somar'
    telaSecundaria.value = `${primerioValor} + `
    tela.value = " " 

}

function subtracao(){
    igual.disabled = false
    primerioValor = Number(tela.value)
    operador = 'subtrair'
    telaSecundaria.value = `${primerioValor} - `
    tela.value = " " 
}

function multiplicacao(){
    igual.disabled = false
    primerioValor = Number(tela.value)
    operador = 'multiplicar'
    telaSecundaria.value = `${primerioValor} x `
    tela.value = " " 
}

function divisao(){
    igual.disabled = false
    primerioValor = Number(tela.value)
    operador = 'dividir'
    telaSecundaria.value = `${primerioValor} ÷ `
    tela.value = " " 
}

/*Limpando a tela*/
function clean(){
    tela.value = ''
    telaSecundaria.value = ''
    igual.disabled = false
}

/*Adicionando o clique do botão na tela*/
zer.addEventListener('click', ()=>{
    tela.value += 0
})

um.addEventListener('click', ()=>{
    tela.value += 1
})

dois.addEventListener('click', ()=>{
    tela.value += 2
})

tres.addEventListener('click', ()=>{
    tela.value += 3
})

quatro.addEventListener('click', ()=>{
    tela.value += 4
})

cinco.addEventListener('click', ()=>{
    tela.value += 5
})

seis.addEventListener('click', ()=>{
    tela.value += 6
})

sete.addEventListener('click', ()=>{
    tela.value += 7
})

oito.addEventListener('click', ()=>{
    tela.value += 8
})

nove.addEventListener('click', ()=>{
    tela.value += 9
})
