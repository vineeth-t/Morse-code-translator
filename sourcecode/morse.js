var btnTranslate=document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var textInput= document.querySelector(".textArea");
var url="https://api.funtranslations.com/translate/morse.json";
btnTranslate.addEventListener("click",clickEvent);
function clickEvent() {
    doFetch(textInput.value);
    
}


function constructUrl(text){
    return url+"?"+"text="+text;
}
function doFetch(text){
    fetch(constructUrl(text))
        .then(response => response.json())
        .then(json => console.log(outputDiv.innerText=json.contents.translated))
        .catch(errorHandler)
}

/* error Handling*/
function errorHandler(error){
        console.log(('error occurred',error));
        alert("Please try again later");
}
