//We are going to select our elements, for to get data
const value1 = document.getElementById('calculation1');
const value2 = document.getElementById('calculation2');
const btn = document.getElementById('btnCalculation');
const result = document.getElementById('result');

/**We are going to create a new function, in this function we have to put 
 * instructions if the button was pressed.
*/
function btnPressed(){
    const total = parseInt(value1.value) + parseInt(value2.value);
    result.innerText = "Result: " + total;
}
//the function innerText we can to show information, modify paragraph.
//The function parseInt help us to convert string to int.

/**1-Select elements
 * 2-Create function
 * 3-Show information
 */