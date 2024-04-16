function generateAnswers(event) {
    event.preventDefault();
 

new Typewriter('#financialAdvice', {
    strings: ['What is financial literacy?'],
    autoStart: true,
    cursor : " ",
    delay:10,
  });



}

let answerGeneratorElement = document.querySelector ("#advices-generator");
answerGeneratorElement.addEventListener ("submit", generateAnswers);

