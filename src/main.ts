import "./style.css";
localStorage.setItem("name", "Lucas");

const myName = localStorage.getItem("name");
if (myName) {
  console.log(myName);
}
const meAndMyself = [{ name: "sebastian", age: 45, isMarried: true }];

localStorage.setItem("theList", JSON.stringify(meAndMyself));

const myself = localStorage.getItem('theList')
if(myself){
    const personList:[] = JSON.parse(myself);
    for(let i=0; i<personList.length;i++){
        console.log(personList[i])
    }
}