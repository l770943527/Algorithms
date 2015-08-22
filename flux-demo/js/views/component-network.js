var React = require('react');

var Network = React.createClass({
	handleSubmit:function(e){

	},
	render:function(){
		return (
          <div role="networkpanel" className="tab-pane" id="network">
            <h3>network  </h3>
              <div id = "alert"></div>
              <form id ="networkForm" >
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="esxi_key">ESXI KEY</label>
                      <input type="text" className="form-control" id="esxi_key" name = "esxi_key"  />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="vcsa_key">vCSA KEY</label>
                      <input type="text" className="form-control" id="vcsa_key" name = "vcsa_key"   />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="vrops_key">vROPs KEY</label>
                      <input type="text" className="form-control" id="vrops_key" name = "vrops_key"   />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Apply</button>
                
            </form>
      </div>
			)
	}
});

module.exports = Network;