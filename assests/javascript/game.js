// the add must have a random number generator that is between 19 and 120

// Math.floor(Math.random() * (max - min + 1);
//  for (var i = 0; i < 120; i++)

// The random number must be eqaul the points from the crystals to win
//if 

//there must be a wins and loses counter that is connected to the win or loses
//if the random number is over the person loses

// if (counter === main){
//     alert("You Won!);
       
// }
// else if(counter !== main){
//     alert("Sorry, you lose!!!!");
// }
//It must connect with the crystals to display the number

// there must be a counter for your score that adds the numbers from the crystals
//function(getRndNumber1,getRndNumber2,getRndNumber3,getRndNumber4){
//     //count + = 19 !==120;
//     button.innerHTML = "getRndNumber1,getRndNumber2,getRndNumber3,getRndNumber4:" + count;
// }


// each crystal must have a different value that is hidden

// must be four crystals that have a random number generator between 1-19
//const onclick="getRndNumber1(min,max)"

function getRndNumber(min, max) {
    
return Math.floor(Math.random() * (max - min) + min);

}

console.log(getRndNumber(19,120))

//document.addEventListener("click",function(){
   // document.getElementById("crystal one");});
    //buttons.innerHTML = '<img src="https://i.ya-webdesign.com/images/cartoon-diamond-png-4.png"/>';})
    
    console.log(getRndNumber(1,19))
    
   // document.addEventListener("click",function(){
   // document.getElementById("crystal two");});
    //buttons.innerHTML = '<img src="https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-polygonal-red-cartoon-gemstone-image_1405387.jpg"/>';})
    
    console.log(getRndNumber(1,19))
    
   // document.addEventListener("click",function(){
   // document.getElementById("crystal three");});
    //buttons.innerHTML = '<img src="https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-green-crystal-gems-illustration-image_1405421.jpg"/>';})
    console.log(getRndNumber(1,19))
    
    //document.addEventListener("click",function(){
    //document.getElementById("crystal four");});
    //buttons.innerHTML = '<img src="https://longfordpc.com/images/diamonds-clipart-amethyst-9.png"/>';});
    console.log(getRndNumber(1,19))
    
const imageCrystals = document.createElement("img");
imageCrystals.classList.add("crystal-image");

imageCrystals.setAttribute("src","https://i.ya-webdesign.com/images/cartoon-diamond-png-4.png");

imageCrystals.setAttribute("src","https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-polygonal-red-cartoon-gemstone-image_1405387.jpg");

imageCrystals.setAttribute("src","https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-green-crystal-gems-illustration-image_1405421.jpg");

imageCrystals.setAttribute("src","https://longfordpc.com/images/diamonds-clipart-amethyst-9.png");

imageCrystals.setAttribute("crystalnumber", getRndNumber[19,120]);

document.getElementById("crystals").append(imageCrystals);

document.querySelectorAll(".crystals-image").forEach(function(){})
    
//document.addEventListener("click", function(){

  //  }



 // if (counter === main){
      //  alert("You Won!);
           
// }
// else if(counter !== main){
    // alert("Sorry, you lose!!!!");



//https://i.ya-webdesign.com/images/cartoon-diamond-png-4.png
//https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-polygonal-red-cartoon-gemstone-image_1405387.jpg
//https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-green-crystal-gems-illustration-image_1405421.jpg
//https://longfordpc.com/images/diamonds-clipart-amethyst-9.png
    