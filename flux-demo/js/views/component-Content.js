var React = require('react');

var Network = require('./component-network');
var Profile = require('./component-Profile');
var Dhcp = require('./component-Dhcp');



var Content = React.createClass({
	render:function(){
		return (
          <div className="col-xs-10 col-xs-offset-2 tab-content main">
            
            <h1 className="page-header">Define a vPOD</h1>
            <Profile />
            <Network />
            <Dhcp />
          </div>

			)
	}
})

module.exports = Content;