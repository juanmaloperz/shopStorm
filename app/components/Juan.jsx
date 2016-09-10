var React = require('react');
var {Link} = require('react-router');

var Juan = React.createClass({
render: function(){
  return(
    <div className="column small-centered medium-6 large-4">
      <h1> Loperz </h1>
      <img src="./images/loperz.jpg"/>
        <p> Email : juanmaloperz@gmail.com </p>
        <p> Phone: (+57)3157826682 </p>
      <a href="https://github.com/juanmaloperz" target="_blank"> Github </a>
      <a href="https://co.linkedin.com/in/juan-manuel-lopez-mora-0a412b66" target="_blank"> LinkedIn </a>
      <a href="https://twitter.com/juanloperz" target="_blank"> Twitter </a>

    </div>
  );
}
});
module.exports = Juan;
