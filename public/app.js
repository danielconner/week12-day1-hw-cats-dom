const makeCatUl = function(){
  let catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
}

const makeCatNameLi = function(name){
  let firstLi = document.createElement("li")
  firstLi.innerText = name;
  return firstLi;
}

const makeCatFaveFoodLi = function(faveFood){
  let secondLi = document.createElement("li")
  secondLi.innerText = faveFood;
  return secondLi;
}

const makeCatImageLi = function(img){
  let thirdLi =document.createElement("li")
  thirdLi.innerHTML = img;
  return thirdLi;
}

const appendElements = function(){
  for(let i = 0; i<(arguments.length -1); i++){
    arguments[i].appendChild(arguments[i+1]);
  }
  return arguments[0];
};

const addCat = function(name, faveFood, img){
  let catUl = makeCatUl();
  let catName = makeCatNameLi(name);
  let catFaveFood = makeCatFaveFoodLi(faveFood);
  let catImg = makeCatImageLi(img);
  let catsSection = document.getElementById('cats');
  let newCat = appendElements(catUl, catName, catFaveFood, catImg);
  catsSection.appendChild(newCat);
}

const app = function(){

// let catUl = document.createElement("ul");
// catUl.classList.add("cat");
//
// let firstLi = document.createElement("li")
// firstLi.innerText = "Name: Sneezy";
//
// let secondLi = document.createElement("li")
// secondLi.innerText = "Favourite food: Salmon";
//
// let thirdLi =document.createElement("li")
// thirdLi.innerHTML = '<img width="500" img src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">';
//
// catUl.appendChild(firstLi);
// catUl.appendChild(secondLi);
// catUl.appendChild(thirdLi);
//
// let catsSection = document.getElementById('cats');
// catsSection.appendChild(catUl);

addCat("Name: Domino", "Favourite Food: Salmon", '<img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg">');


}

window.onload = app;
