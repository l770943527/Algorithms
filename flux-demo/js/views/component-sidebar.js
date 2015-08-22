var React = require('react');

var Sidebar = React.createClass({

	render:function(){
	  return (
      <div className='col-xs-2 sidebar'>
        <ul className='nav  nav-sidebar' role = 'tablist'>
          <li role='presentation' className='active'><a href='#profile' aria-controls='profile' role='tab' data-toggle='tab'>Profile</a></li> 
          <li role='presentation' ><a href='#network' aria-controls='network' role='tab' data-toggle='tab'>Network</a></li> 
          <li role='presentation' ><a href='#dhcp' aria-controls='dhcp' role='tab' data-toggle='tab'>DHCP</a></li> 
        </ul>
      </div>
		)
     }
});

module.exports = Sidebar;