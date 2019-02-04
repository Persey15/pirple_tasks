// all men are mortal
function men(){
    this.isMortal= true;
};
  
//Socrates is a man
const Socrates= new men();
//Empedocl is a man
const Empedocl = new men();
  // Apollon is not a man
const Apollon={};

 //arrow function declaration
const checkIsMortal= (toCheck)=>{
    //is Name which want to check is part of men, and also it's property
    //isMortal is truthy
    if(typeof toCheck==="object" && toCheck.isMortal ){
       return true;
    }else{
      return false;
   }
}

  // log result of the function
  console.log(checkIsMortal(Socrates));