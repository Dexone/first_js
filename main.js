import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import data from "./data.json"
const classes=['first', 'second', 'third', 'fourth', 'fiveth']
// console.log(data.questions)
data.questions.map((item, index) => {
  const quest = document.createElement("h3")
  quest.textContent = item.question
  document.querySelector('#app').appendChild(quest)
  const questions = document.createElement("input")
  questions.setAttribute("type", "radio")
  questions.setAttribute("name", item.question)
  questions.setAttribute("value", "0")
  document.querySelector('#app').appendChild(quest)
  quest.insertAdjacentHTML("afterend", `<input type="radio" name=${item.question} value="0" class=${classes[index]}></input> <label>${item.options[0]}</label>

<input type="radio" name=${item.question} value="1" class=${classes[index]}></input> <label>${item.options[1]}</label>

<input type="radio" name=${item.question} value="2" class=${classes[index]}></input> <label>${item.options[2]}</label>

<input type="radio" name=${item.question} value="3" class=${classes[index]}></input> <label>${item.options[3]}</label>
`
  )
  const l = document.querySelectorAll(`.${classes[index]}`)
  for (let i = 0; i < l.length; i++) {
    l[i].onchange=function(){
      // alert(l[i].value)
      const keys = numbers.map((item) => item.id)
      if (keys.includes(index)) { 
        const newAnswers = numbers.map((item) => {
          if (item.id == index) {
            item.answer = l[i].value;
            return item;
          }
          return item;
        });
        numbers=newAnswers
    }
    else{
      numbers.push({id: index, answer: l[i].value})
    }

  }
}})


// let right_keys = ['0', '1', '2', '3', '3']
let numbers = []
// function oneFunction() {
//   let one = document.querySelector(".one").value;
//  numbers.push({id: 1, answer: one})
// console.log(numbers)
// }



// function twoFunction() {
//   let two = document.querySelector(".two").value;
//   numbers.push({id: 2, answer: two})
//   console.log(numbers)
// }

// function threeFunction() {
//   let three = document.querySelector(".three").value;
//   numbers.push({id: 3, answer: three})
//   console.log(numbers)
// }

// function fourFunction() {
//   let four = document.querySelector(".four").value;
//   numbers.push({id: 4, answer: four})
//   console.log(numbers)
// }

document.querySelector('button').onclick = res
function res(){
let points = 0
console.log(numbers)
numbers.forEach((item,index)=>{

  if (item.answer==data.questions[index].answerKey){
    ++points
  }
})
alert(points)
}


// console.log(numbers)







  // console.log(right_keys[0] - numbers[1])
// var isEqual = JSON.stringify(right_keys) === JSON.stringify(numbers);
// console.log(isEqual)


// let symetric = numbers
// .filter((item) => {
// return !right_keys.includes(item)
// })
// .concat(
// right_keys.filter((item) => {
// return !numbers.includes(item)
// })
// )
// console.log(symetric)









// document.querySelector('#app').innerHTML = `
//   <div>
//   //  <h1>Hello world</h1>

//   </div>
// `

// setupCounter(document.querySelector('#counter'))
