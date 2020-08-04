console.log('%c HI', 'color: firebrick')
//variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let ul = document.getElementById("dog-breeds");

//functions
function fetchImg(){
return fetch(imgUrl)
.then(res => res.json())
.then(results =>{ 
    results.message.forEach(image => addImg(image));
});
}

function addImg(dogImgUrl){
    let container = document.querySelector("#dog-image-container");
    let newImageEl = document.createElement('img');
    newImageEl.src = dogImgUrl;
    container.appendChild(newImageEl);
}

function loadBreedOptions(){
fetch(breedUrl)
.then(res => res.json())
.then(results =>{ 
        breeds = Object.keys(results.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    });
}
function addBreedSelectListener(){
    let breedDropDown = document.querySelector('#breed-dropdown');
    breedDropDown.addEventListener('change', function(event) {
        selectBreedsStartingWith(event.target.value);
    });
}

function selectBreedsStartingWith(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element){
    let child = element.lastElementChild;
    while(child){
        element.removeChild(child);
        child = element.lastElementChild;
    }
}


function addBreed(breed){
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event){
    event.target.style.color = 'rgb(50,200,20)';
}
    
   
//event listener
document.addEventListener("DOMContentLoaded", function () {
 fetchImg();
 loadBreedOptions();
})


//user story
//fetch the images using the url above [x]
//parse the response as JSON   [X]
//add image elements to the DOM for each🤔 image in the array [X]
//fetch all the dog breeds using the url above [X]
//add the breeds to the page in an <ul> [X]
// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
//When the user clicks any of the dog breed list items, the color the text should change.[x]
//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.[x]