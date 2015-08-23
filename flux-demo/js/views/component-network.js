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
                      <label htmlFor="DNS_server">DNS server</label>
                      <input type="text" className="form-control" id="DNS_server" name = "DNS_server"  placeholder = "172.20.10.1" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="Domain_name">Domain Name</label>
                      <input type="text" className="form-control" id="Domain_name" name = "Domain_name"  placeholder = "mtlab local" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="gateway">Gateway</label>
                      <input type="text" className="form-control" id="gateway" name = "gateway"  placeholder = "172.20.10.1" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="netmask">Netmask</label>
                      <input type="text" className="form-control" id="netmask" name = "netmask"  placeholder = "255.255.0.0" />
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