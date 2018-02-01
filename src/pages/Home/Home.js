import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  state = {  }

  buttonCilck () {
    this.props.changeButtonText('点击了我')
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.buttonCilck.bind(this)} >{ this.props.buttonText }</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: state.main.buttonText
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeButtonText: (args) => dispatch({type: 'CLICK_ME', payload: args})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)