const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  printDeveloper();
  
  // 2. Add Data
  function addData() {
    // const name = prompt("Enter name");
    // const age = parseInt(prompt("Enter age"));
    // const profession = prompt("Enter Profession");
    if(name && !isNaN(age) && profession){
    const newdata={
        name,
        age,
        profession
    }
    data.push(newdata);
    console.log(newdata);
}
    else {
      alert("Enter input is Invalid");
    }
  }
  addData();
  
  // 3. Remove Admins
  function removeAdmin() {

  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray=[ { name: "johnson", age: 22, profession: "web-developer" },
    { name: "janeson", age: 27, profession: "react" },];
    const array = data.concat(dummyArray);
    console.log(array);
  }
  concatenateArray();
  
  // 5. Average Age
  function averageAge() {
    let age =0;
    for(let i=0;i<data.length;i++){
        age += data[i].age;
    }
    Average = age/data.length;
   console.log(Average);
  }
  averageAge();
  
  // 6. Age Check
  function checkAgeAbove25() {
   for(let i=0;i<data.length;i++){
    if(data[i].age>25){
        console.log("At least one person is older than 25.");
        break;
    }
   }
  }
  checkAgeAbove25();
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
    for(let i=0;i<data.length;i++){
         if(arr.includes(data[i].profession)==true){
              continue;
         }else{
              arr.push(data[i].profession);
         }
    }
    console.log(arr);
  }
  uniqueProfessions() ;
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
    console.log("Sorted")

  }
  sortByAge();
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
        if(data[i].name==="john"){
             data[i].profession="manager";
        console.log(data[i]);
             console.log("Updated successfully");
        }
   }
  }

  updateJohnsProfession() ;
  // 10. Profession Count
  function getTotalProfessions() {}