var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
 <div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
     <li className="menu-text">
       <a href="https://shopstorm.com" target="_blank"> shopstorm</a>
       </li>
      <li>
        <Link to="/about"> About Myself</Link>
      </li>
      <li>
        <Link to="/examples"> Day Example</Link>
      </li>
    </ul>
</div>
<div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          Created by <a href="https://twitter.com/juanloperz" target="_blank">@juanloperz</a>
        </li>
      </ul>
    </div>
 </div>

    );
  }
  });
module.exports = Nav;
