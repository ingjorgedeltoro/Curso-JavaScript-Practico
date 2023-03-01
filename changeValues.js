//modifying elements from HTML in JS
//-----------------------------------
//We are going to save in var the element HTML.
const h1 = document.querySelector('h1'); 
/*We are going to save in var the element with class.*/
const paragraphClass = document.getElementsByClassName('paragraph');
/**We are going to save in var the element with id.*/
const paragraphId = document.getElementById('pid');
/*We are going to save our input in JS, with the same form */
const input = document.querySelector('input');
//we are gonig to show the nexts variables
console.log({h1, paragraphClass, paragraphId, input});
/**If we need to show the input, we can to use this */
 /**We have functions, this methods we can to use for manipulation
  * the elements in HTML and we can to save it in variables in JS
  * and we can use that variable in our JS document
  * NOTE:
  * with .querySelectorAll('p'); we can save in a variable 
  * ALL paragraphs. if you see with attention you can see the word ALL
  * that's meaning about all elements with this tag
  */
 //If we want to modify any element, we need to call to varible 
 //and use this function 
 h1.innerHTML = 'Title changed with the function inner';
 //and we can to write HTML tags with the function inner
 
 /**When we have to get a attribute, then we have to do this: */
 //we have to put with argument the attribute.
 /**<h1 class="resultExample">This is example</h1> */
 //we have to put CLASS because this is the name of the attribute
 //because "resultExample" is the value from attribute.
 //with this code we will get value from that class
 console.log(h1.getAttribute('class'));
 
 /**When we need to chenge the value of our attribute, 
  * we need to use this function
 */
/**the parameters are tag.setAttribute('nameClass', 'new value'); */
h1.setAttribute('class', 'value changed');
//with the next line code we could add a new class element with JS
h1.classList.add('new');
/*the new output is the next: 
    class="value changed new"

Because we added the new name class with JS
*/
/**Now we could delete the class with the next function:*/
h1.classList.remove('value', 'changed');

/**IMPORTANT NOTE: 
 * every element in the class is indepent.
 * example: class="hola como estas";
 * when we will want to remove someone element from the class
 * we have to put this: h1.classList.remove('value', 'changed');
 * one by one
 * ALL ARE SEPARATE AND INDEPENT <--------------- READ THIS
 */

/**We could to modify value in our input */
input.value="35";
//we are going to creat a new element
const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&usqp=CAU');
//we are going to put this element on paragraph
paragraphId.append(img);