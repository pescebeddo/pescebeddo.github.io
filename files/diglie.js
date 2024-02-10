let texts = document.getElementById("background-movement");
let frase = "testcss";
let pressedKeys = [];

document.addEventListener('keydown', function(event) {
    pressedKeys.push(event.key);
    let stringa = pressedKeys.join('');
    for (let i = 0; i < pressedKeys.length; i++)
    {
        if (pressedKeys[i] != frase.split("")[i])
        {
            pressedKeys.length = 0;
        }
    }
    if (stringa.length == frase.length){
        if (stringa == frase){
            texts.style = "animation: background_animation 2s infinite;"
        }
        else{
            stringa = "";
        }
    }
});
