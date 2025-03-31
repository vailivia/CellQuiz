const questions = [
    {
        organela: "membrana",
        perguntas: [
            { question: "Qual estrutura separa o interior da célula do ambiente externo?", answers: [{ text: "Membrana plasmática", correct: true }, { text: "Núcleo", correct: false }, { text: "Mitocôndria", correct: false }, { text: "Ribossomos", correct: false }] },
            { question: "Qual barreira regula a entrada e saída de substâncias da célula?", answers: [{ text: "Membrana plasmática", correct: true }, { text: "Núcleo", correct: false }, { text: "Mitocôndria", correct: false }, { text: "Lisossomos", correct: false }] },
            { question: "O que protege a célula e interage com o ambiente?", answers: [{ text: "Membrana plasmática", correct: true }, { text: "Citoplasma", correct: false }, { text: "Complexo de Golgi", correct: false }, { text: "Centríolos", correct: false }] }
        ]
    },
    {
        organela: "nucleo",
        perguntas: [
            { question: "Qual organela possui o material genético (DNA) da célula, e é responsável por controlar as atividades celulares?", answers: [{ text: "Mitocôndria", correct: false }, { text: "Núcleo", correct: true }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Qual é a parte central da célula que contém os cromossomos?", answers: [{ text: "Núcleo", correct: true }, { text: "Complexo de Golgi", correct: false }, { text: "Ribossomos", correct: false }, { text: "Lisossomos", correct: false }] },
            { question: "O que coordena as funções celulares e armazena o DNA?", answers: [{ text: "Núcleo", correct: true }, { text: "Retículo Endoplasmático", correct: false }, { text: "Centríolos", correct: false }, { text: "Mitocôndrias", correct: false }] }
        ]
    },
    // ... repita o padrão para as outras organelas ...
    {
        organela: "citoplasma",
        perguntas: [
            { question: "Onde ocorre a maior parte das reações químicas da célula?", answers: [{ text: "Núcleo", correct: false }, { text: "Complexo de Golgi", correct: false }, { text: "Citoplasma", correct: true }, { text: "Mitocôndria", correct: false }] },
            { question: "Qual substância gelatinosa preenche o interior da célula?", answers: [{ text: "Citoplasma", correct: true }, { text: "Núcleo", correct: false }, { text: "Retículo Endoplasmático", correct: false }, { text: "Lisossomos", correct: false }] },
            { question: "Em qual parte da célula os organelas estão imersos?", answers: [{ text: "Citoplasma", correct: true }, { text: "Mitocôndrias", correct: false }, { text: "Centríolos", correct: false }, { text: "Complexo de Golgi", correct: false }] }
        ]
    },
    {
        organela: "ribossomos",
        perguntas: [
            { question: "Quais organelas são responsáveis pela síntese de proteínas na célula?", answers: [{ text: "Lisossomos", correct: false }, { text: "Centríolos", correct: false }, { text: "Ribossomos", correct: true }, { text: "Mitocôndrias", correct: false }] },
            { question: "Onde a tradução do RNA mensageiro acontece?", answers: [{ text: "Ribossomos", correct: true }, { text: "Núcleo", correct: false }, { text: "Retículo Endoplasmático", correct: false }, { text: "Complexo de Golgi", correct: false }] },
            { question: "Qual organela lê o RNA para montar proteínas?", answers: [{ text: "Ribossomos", correct: true }, { text: "Lisossomos", correct: false }, { text: "Centríolos", correct: false }, { text: "Membrana plasmática", correct: false }] }
        ]
    },
    {
        organela: "golgi",
        perguntas: [
            { question: "Qual organela modifica, armazena e transporta proteínas dentro da célula?", answers: [{ text: "Retículo Endoplasmático Liso", correct: false }, { text: "Complexo de Golgi", correct: true }, { text: "Lisossomos", correct: false }, { text: "Mitocôndrias", correct: false }] },
            { question: "Onde as proteínas são empacotadas para transporte?", answers: [{ text: "Complexo de Golgi", correct: true }, { text: "Núcleo", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Qual organela processa e envia proteínas para fora da célula?", answers: [{ text: "Complexo de Golgi", correct: true }, { text: "Centríolos", correct: false }, { text: "Lisossomos", correct: false }, { text: "Membrana plasmática", correct: false }] }
        ]
    },
     {
        organela: "lisossoma",
        perguntas: [
            { question: "Quais organelas são responsáveis pela digestão de substâncias na célula?", answers: [{ text: "Ribossomos", correct: false }, { text: "Centríolos", correct: false }, { text: "Lisossomos", correct: true }, { text: "Complexo de Golgi", correct: false }] },
            { question: "Onde ocorre a quebra de macromoléculas na célula?", answers: [{ text: "Lisossomos", correct: true }, { text: "Mitocôndrias", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Qual organela contém enzimas digestivas?", answers: [{ text: "Lisossomos", correct: true }, { text: "Núcleo", correct: false }, { text: "Complexo de Golgi", correct: false }, { text: "Retículo Endoplasmático", correct: false }] }
        ]
    },
    {
        organela: "mitocondria",
        perguntas: [
            { question: "Onde ocorre a respiração celular, processo que gera energia para a célula?", answers: [{ text: "Retículo Endoplasmático Rugoso", correct: false }, { text: "Mitocôndrias", correct: true }, { text: "Ribossomos", correct: false }, { text: "Complexo de Golgi", correct: false }] },
            { question: "Qual organela produz a maior parte do ATP da célula?", answers: [{ text: "Mitocôndrias", correct: true }, { text: "Lisossomos", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Onde a glicose é transformada em energia?", answers: [{ text: "Mitocôndrias", correct: true }, { text: "Núcleo", correct: false }, { text: "Complexo de Golgi", correct: false }, { text: "Retículo Endoplasmático", correct: false }] }
        ]
    },
    {
        organela: "reticulo-rugoso",
        perguntas: [
            { question: "Qual organela auxilia no transporte de proteínas dentro da célula?", answers: [{ text: "Retículo Endoplasmático Rugoso", correct: true }, { text: "Lisossomos", correct: false }, { text: "Centríolos", correct: false }, { text: "Mitocôndrias", correct: false }] },
            { question: "Onde ocorre a modificação e transporte de proteínas?", answers: [{ text: "Retículo Endoplasmático Rugoso", correct: true }, { text: "Complexo de Golgi", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Qual organela está associada aos ribossomos e síntese proteica?", answers: [{ text: "Retículo Endoplasmático Rugoso", correct: true }, { text: "Mitocôndrias", correct: false }, { text: "Centríolos", correct: false }, { text: "Lisossomos", correct: false }] }
        ]
    },
    {
        organela: "reticulo-liso",
        perguntas: [
            { question: "Qual organela participa da síntese de lipídios e desintoxicação da célula?", 
                answers: [{ text: "Complexo de Golgi", correct: false }, { text: "Lisossomos", correct: false }, { text: "Retículo Endoplasmático Liso", correct: true }, { text: "Ribossomos", correct: false }] },
            { question: "Onde os lipídios e esteróides são sintetizados?", answers: [{ text: "Retículo Endoplasmático Liso", correct: true }, { text: "Núcleo", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "Qual organela remove substâncias tóxicas da célula?", answers: [{ text: "Retículo Endoplasmático Liso", correct: true }, { text: "Mitocôndrias", correct: false }, { text: "Centríolos", correct: false }, { text: "Complexo de Golgi", correct: false }] }
        ]
    },
    {
        organela: "centriolo",
        perguntas: [
            { question: "Quais organelas auxiliam na divisão celular, organizando os microtúbulos?", answers: [{ text: "Mitocôndrias", correct: false }, { text: "Centríolos", correct: true }, { text: "Lisossomos", correct: false }, { text: "Ribossomos", correct: false }] },
            { question: "Qual organela organiza o fuso mitótico?", answers: [{ text: "Centríolos", correct: true }, { text: "Complexo de Golgi", correct: false }, { text: "Ribossomos", correct: false }, { text: "Citoplasma", correct: false }] },
            { question: "O que forma os microtúbulos usados na divisão celular?", answers: [{ text: "Centríolos", correct: true }, { text: "Lisossomos", correct: false }, { text: "Mitocôndrias", correct: false }, { text: "Membrana plasmática", correct: false }] }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const tempoDisplay = document.getElementById('tempo');

let curretQuestionIndex = 0;
let score = 0;
let answeredOrganelas = [];
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let cronometroIniciado = false;

function atualizarTempo() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    const tempoFormatado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    tempoDisplay.textContent = tempoFormatado;
}

function iniciarCronometro() {
    if (!intervalo) {
        intervalo = setInterval(atualizarTempo, 1000);
        cronometroIniciado = true;
    }
}

function pararCronometro() {
    clearInterval(intervalo);
    intervalo = null;
    cronometroIniciado = false;
}

function resetarCronometro() {
    pararCronometro();
    segundos = 0;
    minutos = 0;
    horas = 0;
    tempoDisplay.textContent = '00:00:00';
}

function startQuiz(){
    curretQuestionIndex = 0;
    score = 0;
    answeredOrganelas = [];
    nextButton.innerHTML = "Próximo";
    resetarCronometro();
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentOrganela = questions[curretQuestionIndex];
    let randomIndex = Math.floor(Math.random() * currentOrganela.perguntas.length);
    let currentQuestion = currentOrganela.perguntas[randomIndex];
    let questionNo = curretQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            button.dataset.organela = currentOrganela.organela;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    if (!cronometroIniciado) {
        iniciarCronometro();
    }
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        showOrganelaImage(selectedBtn.dataset.organela);
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showOrganelaImage(organela) {
    answeredOrganelas.push(organela);
    let imageElement = document.querySelector(`.container .${organela}`);
    if (imageElement) {
        imageElement.style.display = "block";
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = "Você acertou " + score + " de " + questions.length;
    nextButton.innerHTML = "Jogue Novamente!";
    nextButton.style.display = "block";
    pararCronometro();
}

function handleNextButton(){
    curretQuestionIndex++;
    if(curretQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(curretQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();