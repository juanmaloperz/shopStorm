var React = require('react');
var {Link} = require('react-router');

var Example = (props) =>{
  return(
    <div>
    <h1 className="text-center page-title"> A day in the Life!</h1>
    <div className="container">
   <div className="question">
     <ul>
   <li>  “I’m considering switching to Product Customizer. Does your app allow live image previews?”</li>
   <p>   Images preview are a nice feature, but slides are even better because it let you preview a set of images,
      to resume it has the same utility that image preview plus it can be use for your whole set of images,
      so you can have a better user experience, Would you like to add slide images?</p>
  </ul>
   </div>
   <div className="question">
     <ul>
     <li> Imagine you’ve just started your workday. You login and see a large number of emails from distraught customers. Clearly,
        something is happening. What steps do you take?  </li>
      <ol>
      <li> Open the emails and find the common probem.  </li>
      <li> Find a solution for the problem. </li>
      <li> Write a posibble letter apologizing and saying that everything is ok or is going to be in certain time. </li>
      <li> Answer every single email in a personalized way with the letter I wrote in the step before.</li>
      </ol>
    </ul>
      </div>
      <div className="question">
        <li> We’d like to get an idea of how you explain concepts and processes. What was the last thing your purchased online? Tell us,
          step-by-step, how you went about searching, choosing, and completing your purchase.</li>
        <p> The last thing that i bougth online was a Pijama for my daughter </p>
      <ol>
          <li> Open my favorite online store webpage. </li>
          <li> Signed In </li>
          <li> Write on the search bar for babies Pijamas. </li>
          <li> Filter the search with items like free shipping. </li>
          <li> Choose the product that I want with its characteristics like size and color.</li>
          <li> Add the product to te shopping cart </li>
          <li> Complete the billing card. </li>
          <li> Buy the item. </li>
      </ol>
      </div>
    </div>
    </div>
  )
};
module.exports = Example;
