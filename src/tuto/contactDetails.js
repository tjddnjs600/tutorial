import React, {Component} from 'react';

class ContactDetails extends Component{
  render() {

    const details = (
      <div>
    
        <p>{this.props.contact.phone}</p>
      </div>);
    const blank = (
      <div>
        Not Selected
      </div>);

    return(
      <div>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}


export default ContactDetails;
