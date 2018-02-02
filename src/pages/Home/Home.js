import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
class Home extends Component {
  state = {  }

  buttonCilck () {
    this.props.changeButtonText('点击了我')
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Button type='primary' onClick={this.buttonCilck.bind(this)} >{ this.props.buttonText }</Button>
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