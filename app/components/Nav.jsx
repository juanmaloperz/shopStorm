var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert("its not wired up");
  },
  render: function(){
    return(
 <div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
     <li className="menu-text"> The Weather App </li>
      <li>
        <Link to="/"> Get Weather</Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/examples"> Example</Link>
      </li>
    </ul>
</div>
  <div className="top-bar-rigth">
    <form onsubmit={this.onSearch}>
     <ul className="menu">
       <li>
          <input type="search" placeholder="Write the city"/>
        </li>
       <li>
          <input type="button" value=" Get Weather!"/>
       </li>
     </ul>
    </form>
  </div>
 </div>

    );
  }
  });
module.exports = Nav;
