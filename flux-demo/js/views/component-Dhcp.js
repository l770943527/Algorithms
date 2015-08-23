var React = require('react');

var Dhcp = React.createClass({
	render:function(){
		return (
         <div role="dhcppanel" className="tab-pane" id="dhcp">
            <h3>network  </h3>
              <div id = "alert"></div>
              <form id ="dhcpForm" >
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="subnet">Subnet</label>
                      <input type="text" className="form-control" id="subnet" name = "subnet"  placeholder = "172.20.0.0" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="subnet_mask">Subnet Mask</label>
                      <input type="text" className="form-control" id="subnet_mask" name = "subnet_mask"  placeholder = "255.255.0.0" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="range_from">Range From</label>
                      <input type="text" className="form-control" id="range_from" name = "range_from"  placeholder = "172.20.10.101" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="range_to">Range To</label>
                      <input type="text" className="form-control" id="range_to" name = "range_to"  placeholder = "172.20.10.200" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="routers">Routers</label>
                      <input type="text" className="form-control" id="routers" name = "routers"  placeholder = "172.20.10.1" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="broad_addr">Broadcast Address</label>
                      <input type="text" className="form-control" id="broad_addr" name = "broad_addr"  placeholder = "172.20.10.255" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="next_server">Next Server</label>
                      <input type="text" className="form-control" id="next_server" name = "next_server"  placeholder = "172.20.10.32" />
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label htmlFor="filename">Filename</label>
                      <input type="text" className="form-control" id="filename" name = "filename"  placeholder = "172.20.10.200" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Apply</button>
                
            </form>
      </div>

			)
	}

})


module.exports = Dhcp;