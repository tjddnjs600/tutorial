import React,{Component} from 'react';
import ContactInfo from './contactInfo';
import ContactDetails from './contactDetails';

class Contact extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedkey: -1,
      keyword : '',
      contactData: [
        {
          name: 'Abet',
          phone: '010-0000-0001'
        },
        {
          name: 'Betty',
          phone: '010-0000-0002'
        },
        {
          name: 'Charile',
          phone: '010-0000-0003'
        },
        {
          name: 'David',
          phone: '010-0000-0004'
        }]
    };
    this.handleChange = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
}

    handleChange(e){
      console.log(e.target.value);
       this.setState({
         keyword: e.target.value
       });
    }

    handleClick(key){
      this.setState({
        selectedkey : key
      });
      console.log(key, 'is selected');
    }

  render() {
    const mapToComponents = (data)=>{
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map((contact, i) => {
        return <ContactInfo
                      contact={contact}
                      key={i}
                      onClick={()=>this.handleClick(i)}/>
      });
    }
    return (
      <div>
        <h1>Contact</h1>
        <input
          name="keyword"
          placeholder="search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
                  isSelected={this.state.selectedkey != -1}
                  contact={this.state.contactData[this.state.selectedkey]}/>
      </div>
    );
  }
}

export default Contact;
