
// all men are mortal
function men(name){
    this.name=name;
    this.isMortal= true;
 };
  
//Socrates is a man
const man= new men("Socrates");
  
if(man instanceof men && man.isMortal && man.name==="Socrates"){
  
  console.log("Socrates is mortal");
}