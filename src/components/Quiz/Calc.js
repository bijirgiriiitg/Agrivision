import React from 'react'
import styled from "styled-components";
import { useEffect } from 'react';
/* eslint-disable */
//import { Calculator } from 'react-mac-calculator';

const POWER = "POWER(";
const FACTORIAL = "FACTORIAL(";
const OPERATORS = ["+", "-", "*", "/"];

let data = {
  operation: [],
  formula: []
};

const calculator_buttons = [{
  name: "rad",
  symbol: "Rad",
  formula: false,
  type: "key"
},
{
  name: "deg",
  symbol: "Deg",
  formula: false,
  type: "key"
},
{
  name: "square-root",
  symbol: "√",
  formula: "Math.sqrt(",
  type: "math_function"
},
{
  name: "square",
  symbol: "x²",
  formula: POWER,
  type: "math_function"
},
{
  name: "open-parenthesis",
  symbol: "(",
  formula: "(",
  type: "number"
},
{
  name: "close-parenthesis",
  symbol: ")",
  formula: ")",
  type: "number"
},
{
  name: "clear",
  symbol: "C",
  formula: false,
  type: "key"
},
{
  name: "delete",
  symbol: "⌫",
  formula: false,
  type: "key"
},
{
  name: "pi",
  symbol: "π",
  formula: "Math.PI",
  type: "number"
},
{
  name: "cos",
  symbol: "cos",
  formula: "trigo(Math.cos,",
  type: "trigo_function"
}, {
  name: "sin",
  symbol: "sin",
  formula: "trigo(Math.sin,",
  type: "trigo_function"
}, {
  name: "tan",
  symbol: "tan",
  formula: "trigo(Math.tan,",
  type: "trigo_function"
}, {
  name: "7",
  symbol: 7,
  formula: 7,
  type: "number"
}, {
  name: "8",
  symbol: 8,
  formula: 8,
  type: "number"
}, {
  name: "9",
  symbol: 9,
  formula: 9,
  type: "number"
},
{
  name: "division",
  symbol: "÷",
  formula: "/",
  type: "operator"
},
{
  name: "e",
  symbol: "e",
  formula: "Math.E",
  type: "number"
},
{
  name: "acos",
  symbol: "acos",
  formula: "inv_trigo(Math.acos,",
  type: "trigo_function"
}, {
  name: "asin",
  symbol: "asin",
  formula: "inv_trigo(Math.asin,",
  type: "trigo_function"
}, {
  name: "atan",
  symbol: "atan",
  formula: "inv_trigo(Math.atan,",
  type: "trigo_function"
},
{
  name: "4",
  symbol: 4,
  formula: 4,
  type: "number"
}, {
  name: "5",
  symbol: 5,
  formula: 5,
  type: "number"
}, {
  name: "6",
  symbol: 6,
  formula: 6,
  type: "number"
}, {
  name: "multiplication",
  symbol: "×",
  formula: "*",
  type: "operator"
}, {
  name: "factorial",
  symbol: "×!",
  formula: FACTORIAL,
  type: "math_function"
}, {
  name: "exp",
  symbol: "exp",
  formula: "Math.exp",
  type: "math_function"
}, {
  name: "ln",
  symbol: "ln",
  formula: "Math.log",
  type: "math_function"
}, {
  name: "log",
  symbol: "log",
  formula: "Math.log10",
  type: "math_function"
}, {
  name: "1",
  symbol: 1,
  formula: 1,
  type: "number"
}, {
  name: "2",
  symbol: 2,
  formula: 2,
  type: "number"
}, {
  name: "3",
  symbol: 3,
  formula: 3,
  type: "number"
}, {
  name: "subtraction",
  symbol: "–",
  formula: "-",
  type: "operator"
}, {
  name: "power",
  symbol: "x<span>y</span>",
  formula: POWER,
  type: "math_function"
}, {
  name: "ANS",
  symbol: "ANS",
  formula: "ans",
  type: "number"
}, {
  name: "percent",
  symbol: "%",
  formula: "/100",
  type: "number"
}, {
  name: "comma",
  symbol: ".",
  formula: ".",
  type: "number"
}, {
  name: "0",
  symbol: 0,
  formula: 0,
  type: "number"
}, {
  name: "calculate",
  symbol: "=",
  formula: "=",
  type: "calculate"
}, {
  name: "addition",
  symbol: "+",
  formula: "+",
  type: "operator"
}
];

const Calc = ({ setisCalc }) => {
  useEffect(() => {
    
    function createCalculatorbutton() {

      const buttons_per_row = 8
      let added_buttons = 0

      calculator_buttons.forEach(button => {
        if (added_buttons % buttons_per_row === 0) {
          let response = `<div class = "row"></div>`
          document.getElementById('input').innerHTML += response;
        }

        const row = document.querySelector(".row:last-child")
        row.innerHTML += `<button id = ${button.name}>
          ${button.symbol}
          </button>`

        added_buttons++
      })
    }
    createCalculatorbutton();
    let RADIAN = true

    // const rad_btn = document.getElementById('rad')
    // const deg_btn = document.getElementById('deg')


    document.getElementById('rad').classList.add("active-angle")


    function angleToggle() {
      document.getElementById('rad').classList.toggle("active-angle")
      document.getElementById('deg').classList.toggle("active-angle")
    }

    document.getElementById('input').addEventListener('click', event => {

      const target_btn = event.target

      calculator_buttons.forEach(button => {
        if (button.name === target_btn.id) {
          calculator(button)
        }

      })

    })

    function calculator(button) {

      if (button.type === 'operator') {
        data.operation.push(button.symbol)
        data.formula.push(button.formula)
      }

      else if (button.type === 'number') {
        data.operation.push(button.symbol)
        data.formula.push(button.formula)
      }
      else if (button.type === 'trigo_function') {
        data.operation.push(button.symbol + '(')
        data.formula.push(button.formula)
      }
      else if (button.type === 'math_function') {

        let symbol, formula;

        if (button.name === 'factorial') {
          symbol = "!"
          formula = button.formula

          data.operation.push(symbol)
          data.formula.push(formula)
        } else if (button.name === 'power') {
          symbol = "^("
          formula = button.formula

          data.operation.push(symbol)
          data.formula.push(formula)
        } else if (button.name === 'square') {
          symbol = "^("
          formula = button.formula
          data.operation.push(symbol)
          data.formula.push(formula)
          data.operation.push("2)")
          data.formula.push("2)")

        } else if (button.name === 'ln') {
          symbol = "ln("
          formula = button.formula + "("

          data.operation.push(symbol)
          data.formula.push(formula)


        } else if (button.name === 'log') {

          symbol = 'log('
          formula = button.formula + "("

          data.operation.push(symbol)
          data.formula.push(formula)
        } else if (button.name === 'exp') {

          symbol = 'exp('
          formula = button.formula + "("

          data.operation.push(symbol)
          data.formula.push(formula)

        } else {
          symbol = button.symbol + "("
          formula = button.formula
          data.operation.push(symbol)
          data.formula.push(formula)


        }
      }

      else if (button.type === 'key') {
        if (button.name === 'clear') {
          data.operation = []
          data.formula = []
          updateOutputresult(0)

        } else if (button.name === 'delete') {
          data.operation.pop()
          data.formula.pop()
        } else if (button.name === 'rad') {
          RADIAN = true
          angleToggle()
        } else if (button.name === 'deg') {
          RADIAN = false
          angleToggle()
        }

      }

      else if (button.type === 'calculate') {

        let formula_str = data.formula.join('')
        let POWER_SEARCH_RESULT = search(data.formula, POWER)

        let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL)
        const BASES = powerbasegetter(data.formula, POWER_SEARCH_RESULT)

        BASES.forEach(base => {
          let toreplace = base + POWER
          let replacement = "Math.pow(" + base + ",";

          formula_str = formula_str.replace(toreplace, replacement)
        })
        const NUMBERS = factorialnumgetter(data.formula, FACTORIAL_SEARCH_RESULT)
        NUMBERS.forEach(number => {
          formula_str = formula_str.replace(number.toReplace,
            number.replacement)
        })

        let result

        try {
          result = eval(formula_str)

        } catch (error) {
          if (error instanceof SyntaxError) {
            result = "SyntaxError"
            updateOutputresult(result)
            return
          }
        }

        //ans = result
        data.operation = [result]
        data.formula = [result]

        updateOutputresult(result)
        return
      }
      updateOutputOperation(data.operation.join(''))

    }

    function factorialnumgetter(formula, FACTORIAL_SEARCH_RESULT) {


      let numbers = []

      let factorial_sequence = 0

      FACTORIAL_SEARCH_RESULT.forEach(fact_index => {

        // store the current number in this array

        let number = []

        let next_index = fact_index + 1;

        let next_input = formula[next_index]

        if (next_index === FACTORIAL) {
          factorial_sequence += 1
          return
        }

        // if there was a factorial sequence we need to get the index of the very first fact function

        let first_fact_index = fact_index - factorial_sequence

        let prev_idx = first_fact_index - 1

        let paren_count = 0

        while (prev_idx >= 0) {

          if (formula[prev_idx] === '(') {
            paren_count -= 1
          }
          if (formula[prev_idx] === ')') {
            paren_count += 1
          }

          let is_operator = false

          OPERATORS.forEach(OPERATOR => {
            if (formula[prev_idx] === OPERATOR) {
              is_operator = true
            }
          })

          if (is_operator && paren_count === 0) {
            break;
          }

          number.unshift(formula[prev_idx])

          prev_idx--;


        }

        let number_str = number.join('')
        const factorial = "factorial(",
          close_paren = ')'
        let times = factorial_sequence + 1

        let toreplace = number_str + FACTORIAL.repeat(times)

        let replacement = factorial.repeat(times) + number_str + close_paren

        // pushing the modified object and at the reciving end of the function i'll replace the toreplace with the replacement!

        numbers.push({
          toReplace: toreplace,
          replacement: replacement
        })


        // reset the factorial sequence

        factorial_sequence = 0
      })

      return numbers


    }

    // powerbase getter.this code is explained in the calculator.ipynb please check there!


    function powerbasegetter(formula, POWER_SEARCH_RESULT) {

      // here i will store all the bases !

      let powers_base = []

      POWER_SEARCH_RESULT.forEach(power_index => {
        let base = []

        let paren_count = 0

        let prev_idx = power_index - 1

        while (prev_idx >= 0) {

          if (formula[prev_idx] === '(') {
            paren_count -= 1
          }
          if (formula[prev_idx] === ')') {
            paren_count += 1
          }

          let is_operator = false

          OPERATORS.forEach(OPERATOR => {
            if (formula[prev_idx] === OPERATOR) {
              is_operator = true
            }
          })

          let is_power = formula[prev_idx] === POWER

          if ((is_operator && paren_count === 0) || is_power) {
            break;
          }

          base.unshift(formula[prev_idx])

          prev_idx--;


        }

        powers_base.push(base.join(''))
      })

      return powers_base
    }

    // SEARCH FUNCTION

    function search(array, keyword) {
      let search_res = []

      array.forEach((element, index) => {
        if (element === keyword) {
          search_res.push(index)
        }
      })

      return search_res

    }

    function trigo(callback, angle) {
      if (!RADIAN) {
        angle = angle * ((Math.PI) / 180)
      }

      return callback(angle)

    }
    function inv_trigo(callback, value) {

      let angle = callback(value)

      if (!RADIAN) {
        angle = angle * (180 / Math.PI)
      }

      return angle

    }


    // factorial function

    function factorial(number) {

      // if the number is decimal like 0.5! or so then call the gamma function

      if (number % 1 !== 0) {

        return gamma(number + 1)

      }

      if (number === 0 || number === 1) {
        return 1
      }

      let result = 1

      for (let i = 1; i <= number; i++) {
        result *= i
      }
      if (result === Infinity) {
        return Infinity
      }

      return result
    }


    // this function is used to display the operation which the user wants to perfrom on the screen!

    function updateOutputOperation(operation) {
      document.getElementById('ov').innerHTML = operation
    }

    // this function is used to display the result of that operation which user wants to perform!


    function updateOutputresult(result) {
      document.getElementById('iv').innerHTML = result
    }

  


    // GAMMA FUNCTINON
    function gamma(n) { // accurate to about 15 decimal places
      //some magic constants 
      var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
      if (n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
      } else {
        n--;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
          x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
      }
    }
  }, [])




  return (
    <Wrapper>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={() => setisCalc((prev) => !prev)}>x</span>
          <div className="calculator">
            <div className="calc-container">
              <div className="output">
                <div className="operation">
                  <div id="ov" className="value"></div>
                </div>
                <div className="result">
                  <div id="iv" className="value">0</div>
                </div>
              </div>
              <div id="input" className='input' ></div>
            </div>
          </div>
          {/* <Calculator /> */}
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  .popup-box {
    z-index: 1;
    position: fixed;
    background: #00000083;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    font-size: 16px;
  }
  .close-icon {
    opacity: 1;
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(32% - 31px);
    top: calc(100vh - 85vh - 33px);
    background: black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
  *{
    padding: 0;
    margin: 0;
    background-origin: padding-box;
    font-family: 'Poppins', sans-serif;
  }

  // html{
  //     font-size: 16px;
  //     background-color: #636363;
  // }

  .calculator{
      opacity: 1;
      position: absolute;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
  }

  .calc-container{
    opacity: 1;
      background-color: #1d1d1d;

      width: 600px;
      height: auto;
  }

  .output{
    opacity: 1;
      width: 100%;;
  }   

  .operation{
    opacity: 1;
      width: 600px;
      height: 70px;

      color: #878787;

      font-size: 1.9em;
      font-weight: bold;

      position: relative;
      overflow: hidden;
  }
  .operation .value{
    opacity: 1;
      position: absolute;

      bottom: 5px;
      right : 10px;
      
      white-space: nowrap;
      overflow: hidden;
  }

  .result{
    opacity: 1;
      width: 600px;
      height: 140px;

      color: #FFF;

      font-size: 2.6em;
      font-weight: bold;
      
      overflow: hidden;
      position: relative;
  }

  .result .value{
    opacity: 1;
      position: absolute;

      top: 50%;
      transform: translateY(-50%);
      right : 10px;
      
      white-space: nowrap;
      overflow: hidden;
  }


  .input{
    opacity: 1;
      background-color: #FFF;
      border: 1px solid #1d1d1d;
      height: 340px;
  }

  .row {
    opacity: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  .row button{
    opacity: 1;
      width: 50px;
      height: 50px;

      font-size: 1.5em;

      border: none;
      border-radius: 50%;
      background-color: transparent;

      margin : 8px;

      cursor: pointer;
  }

  .row button:hover{
    opacity: 1;
      font-weight: bold;
  }

  .row #calculate{
    opacity: 1;
      color: #FFF;
      background-color: #46e0bc;
      width : 121px;
      border-radius: 50px;
  }
  .row #delete{
    opacity: 1;
      color: #FFF;
      background-color: #e05046;
  }

  #division, #multiplication, #subtraction, #addition {
    opacity: 1;
      color: #18b893;
  }

  .input button span{
    opacity: 1;
      font-size: 0.6em;
      position: absolute;
  }

  .active-angle{
    opacity: 1;
      background-color: #1d1d1d !important;
      color: #FFF !important;
      border-radius: 10px !important;
  }
`;

export default Calc
