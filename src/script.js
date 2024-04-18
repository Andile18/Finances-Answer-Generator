function displayAnswers(response){
 console.log (" advices generated"),
    new Typewriter('#financialAdvice', {
    strings: response.data.answer,
    autoStart: true,
    cursor : " ",
    delay:1,
  });

}


function generateAnswers (event) {

event.preventDefault();
    
let instructionsInput = document.querySelector ("#user-instructions");
let apiKey = "2tb5293558cf27710004o841aef8f671";
let context = "you are looking for financial guidance, ways to make money, anything that involves money";
let prompt = `user instructions: generate answers about ${instructionsInput.value} into a short paragraph, leave margin top before starting the sentence it must be bold, separate each line with <br/>`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let GeneratorElement = document.querySelector ("#advices-generator");
GeneratorElement.style.display = "block";



console.log ("Generate answers");
console.log (`(Prompt:   ${prompt}`);
console.log (`Context:   ${context}`);

axios.get(apiUrl).then(displayAnswers);

}


let answerGeneratorElement = document.querySelector ("#advices-generator");
answerGeneratorElement.addEventListener ("submit", generateAnswers);