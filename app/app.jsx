var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Examples = require('Examples');
var Juan = require('Juan');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}></Route>
    <Route path="examples" component={Examples}></Route>
     <IndexRoute component={Juan}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
