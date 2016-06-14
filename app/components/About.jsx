var React = require('react');
var {Link} = require('react-router');

   var About = (props) => {
     return(
       <div>
       <h1 className="text-center">About</h1>
       <p> This webapp was made by Juan Manuel López. I made it in  <a href="https://facebook.github.io/react/">  React </a></p>
        <p>  I took the weather information from <a href="http://openweathermap.org"> Open Weather Map API</a></p>
       </div>
     )
   };

module.exports = About;
