var React = require('react');

var Profile = React.createClass({
	render:function(){
		return (
          <div role="tabpanel" className="tab-pane active" id="profile">
            <h3>vPOD Profile</h3>
            <form id="profileForm" >
              <div className="row">
                <div className="col-xs-4">
                  <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name"  placeholder="vpod-customer"  />
              </div>
            </div>
            <div className="col-xs-8">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Customizing a vPOD for a customer."  />
              </div>
            </div>
          </div>
          
          
            
        </form>
      </div>
			)
	}
})


module.exports = Profile;