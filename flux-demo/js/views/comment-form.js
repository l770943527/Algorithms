var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentForm = React.createClass({

  onSubmit:function(e){
  	var textNode = this.refs.text.getDOMNode();
  	var text = textNode.value;
  	textNode.value = '';

  	CommentActionCreators.createComment({
  		text:text
  	});
  },

  render: function() {
    return (
      <div className = 'comment-form form-group'>
        <textarea ref = 'text' />
        <button className='btn btn-danger' onClick = {this.onSubmit}>submit</button>
      </div>
    );
  }

});

module.exports = CommentForm;
