import React, { Component } from "react";
import Heading from "./cv-components/Heading";
import Information from "./cv-components/Information";
import EditBtn from "./cv-components/EditBtn";

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      name: { id: 1, information: "name", text: "Some Name" },

      contact: [
        { id: 1, information: "phone", text: "000-000-000" },
        { id: 2, information: "email", text: "email@email.com" },
        { id: 3, information: "linkedin", text: "linkedinprofile" },
      ],
      isEditable: { name: false, contact: false },
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
    const { name, value } = e.target;

    if (name === "name") {
      this.setState((prevState) => ({
        name: {
          ...prevState.name,
          text: value,
        },
      }));
    } else {
      const updatedContact = this.state.contact.map((contact) => {
        if (contact.information === name) {
          return { ...contact, text: value };
        }
        return contact;
      });

      this.setState({
        contact: updatedContact,
      });
    }
  };

  render() {
    return (
      <section className="aboutMe">
        <div className="name">
          {this.state.isEditable.name ? (
            <label
              className="name-label"
              htmlFor={this.state.name.id}
            >
              Name:
              <input
                onChange={this.handleOnChange}
                value={this.state.name.text}
                id={this.state.name.id}
                name={this.state.name.information}
              />
              <EditBtn handleEdit={() => this.handleEdit("name")} />
            </label>
          ) : (
            <Heading
              title={this.state.name.text}
              handleEdit={() => this.handleEdit("name")}
            />
          )}
        </div>

        <div className="contact">
          <Heading
            title="Contact"
            handleEdit={() => this.handleEdit("contact")}
          />
          {this.state.isEditable.contact ? (
            this.state.contact.map((contact) => {
              return (
                <label htmlFor={contact.id}>
                  {contact.information}:
                  <input
                    onChange={this.handleOnChange}
                    name={contact.information}
                    value={contact.text}
                    id={contact.id}
                  />
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
