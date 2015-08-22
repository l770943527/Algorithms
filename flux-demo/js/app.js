var React = require('react');

var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');
var Sidebar = require('./views/component-sidebar');
var Content = require('./views/component-Content');


var App = React.createClass({

  render: function() {
    return (
      <div className = 'container-fluid'>
        
        <div className = 'row'>
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
