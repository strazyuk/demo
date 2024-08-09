function mathmaker(firstnum,secondnum){
    var result;
    result+="The number would be"+firstnum+' '+secondnum;
    return result

}
var x =mathmaker(1,56);
console.log(x)

const object = { 
    firstname:"asir",
    lastname:"abrar",
    fullname: function(){
        return this.firstname+" "+ this.lastname

    }

};
// document.getElementById("demo").innerHTML=object;

console.log(object.fullname().toUpperCase());
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Display Properties
  document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;