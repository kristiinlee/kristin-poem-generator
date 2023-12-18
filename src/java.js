function displayPoem(response) {
    new Typewriter("#poem", {
        strings:response.data.answer,
        autoStart: true,
        delay: 50,
        cursor: "",
      });

}

function generatePoem(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");

let apiKey = "06b0f64a63552tbee14aof0301449fb0";
let context = 
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign at the end of the poem with 'SheCodes AI' in bold.";
let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);