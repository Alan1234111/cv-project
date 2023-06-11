import React, {Component} from "react";
import Heading from "./cv-components/Heading";
import Information from "./cv-components/Information";

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      name: {id: 1, text: "Some Name"},

      contact: [
        {id: 1, information: "phone", text: "000-000-000"},
        {id: 2, information: "email", text: "email@email.com"},
        {id: 3, information: "linkedin", text: "linkedinprofile"},
      ],
      isEditable: {name: false, contact: false},
    };
  }

  handleEdit = (name) => {
    this.setState((prevState) => ({
      isEditable: {
        ...prevState.isEditable,
        [name]: !prevState.isEditable[name],
      },
    }));
  };

  handleOnChange = (e) => {
    const {name, value} = e.target;

    const updatedContact = this.state.contact.map((contact) => {
      if (contact.information === name) {
        return {...contact, text: value};
      }
      return contact;
    });

    this.setState({
      contact: updatedContact,
    });
  };

  render() {
    return (
      <section className="aboutMe">
        <div className="name">
          {this.state.isEditable.name ? (
            <form>
              <label htmlFor={this.state.name.id}>Name: </label>
              <input onChange={this.handleOnChange} value={this.state.name.text} id={this.state.name.id}></input>
            </form>
          ) : (
            <Heading title="Some Name" handleEdit={() => this.handleEdit("name")} />
          )}
        </div>

        <div className="contact">
          <Heading title="Contact" handleEdit={() => this.handleEdit("contact")} />
          {this.state.isEditable.contact ? (
            this.state.contact.map((contact) => {
              return (
                <label htmlFor={contact.id}>
                  {contact.information}:
                  <input onChange={this.handleOnChange} name={contact.information} value={contact.text} id={contact.id} />
                </label>
              );
            })
          ) : (
            <Information listInformations={this.state.contact} />
          )}
        </div>

        <div className="social">
          <Heading title="Social" />
          <ul>
            <li>
              <span>Instagram: insta_gram_</span>
            </li>
            <li>
              <span>Facebook: facebook</span>
            </li>
          </ul>
        </div>

        <div className="interest">
          <Heading title="Interest" />
          <ul>
            <li>
              <span>things</span>
            </li>
            <li>
              <span>you</span>
            </li>
            <li>
              <span>like</span>
            </li>
            <li>
              <span>doing</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default AboutMe;
