const person = {
    name: "Polinaidu",
    Age: 21,
    Gender: "Male"
  };
  const student = {
    score:50
  };
  person.__proto__ = student;
  // let count = 0;
  // for(let key in person){
  //   ++count;
    
  // };
  // console.log(count);
  let count = Object.keys(person).length;
  console.log(count);
 