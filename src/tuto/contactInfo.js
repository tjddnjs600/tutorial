import React, {Component} from 'react';

class Index extends Component {
  render(){
    return (
      <div onClick={this.props.onClick}>
      {this.props.contact.name}
      </div>
    );
  }
}

export default Index;
