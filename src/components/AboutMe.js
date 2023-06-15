import React, { useState } from "react";
import Heading from "./cv-components/Heading";
import Information from "./cv-components/Information";
import EditBtn from "./cv-components/EditBtn";

function AboutMe () {
  const [name, setName] = useState({ id: 1, information: "name", text: "Some Name" });
  const [contact, setContact] = useState([
          { id: 1, information: "phone", text: "000-000-000" },
      { id: 2, information: "email", text: "email@example.com" },
      { id: 3, information: "linkedin", text: "linkedinprofile" },
  ]);
  const [social, setSocial] = useState([
          { id: 1, information: "instagram", text: "insta_gram_" },
      { id: 2, information: "facebook", text: "facebook" },
  ])
  const [interest, setInterest] = useState([
          { id: 1, information: "things", text: "" },
      { id: 2, information: "you", text: "" },
      { id: 3, information: "like", text: "" },
      { id: 4, information: "doing", text: "" },
  ])

  const [isEditable, setIsEditable] = useState ({name: false,
      contact: false,
      social: false,
      interest: false})

  };

  const [isRemovable, setIsRemovable] = useState({social: false, interest: false})

  function handleEdit  (name)  {
    setIsEditable(prevState => {...prevState, [name]: !prevState.isEditable[name]})

    setIsRemovable(prevState => {...prevState, [name]: !prevState.isRemovable[name]})

    // this.setState((prevState) => ({
    //   isEditable: {
    //     ...prevState.isEditable,
    //     [name]: !prevState.isEditable[name],
    //   },
    //   isRemovable: {
    //     ...prevState.isRemovable,
    //     [name]: !prevState.isRemovable[name],
    //   },
    // }));
  };

  function handleOnChange  (e)  {
    const { name, value } = e.target;

    if (name === "name") {
      setName(prevState => {
        return {...prevState.name, text: value}
      })
      // this.setState((prevState) => ({
      //   name: {
      //     ...prevState.name,
      //     text: value,
      //   },
      // }));
    } else {
      const updatedContact = contact.map((contact) => {
        if (contact.information === name) {
          return { ...contact, text: value };
        }
        return contact;
      });

      setContact(updatedContact)

    }
  };

 function handleSubmitOnSocial  (e) {
    e.preventDefault();
    const website = e.target.elements["website"].value;
    const userId = e.target.elements["user-id"].value;

    const newSocial = {
      id: Date.now(),
      information: website,
      text: userId,
    };

    setSocial((prevState) => [...prevState, newSocial]);
    setIsEditable(prevVal => ({...prevVal, social:false}));
    setIsRemovable(prevVal => ({...prevVal, social: false}));
    //   isEditable: {
    //     ...this.state.isEditable,
    //     social: false,
    //   },
    //   isRemovable: {
    //     ...this.state.isRemovable,
    //     social: false,
    //   },
    // });
  };

  handleSubmitOnInterest = (e) => {
    e.preventDefault();
    const interest = e.target.elements["interest"].value;

    const newInterest = {
      id: Date.now(),
      information: interest,
    };

    const updatedInterest = [...this.state.interest, newInterest];

    this.setState({
      interest: updatedInterest,
      isEditable: {
        ...this.state.isEditable,
        interest: false,
      },
      isRemovable: {
        ...this.state.isRemovable,
        interest: false,
      },
    });
  };

  handleDelete = (id, type) => {
    const updatedList = this.state[type].filter(
      (item) => item.id !== id
    );

    this.setState({
      [type]: updatedList,
    });
  };

  render() {
    const { isEditable, isRemovable } = this.state;

    return (
      <section className="aboutMe">
        <div className="name">
          {isEditable.name ? (
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
          {isEditable.contact ? (
            this.state.contact.map((contact) => (
              <label htmlFor={contact.id} key={contact.id}>
                {contact.information}:
                <input
                  onChange={this.handleOnChange}
                  name={contact.information}
                  value={contact.text}
                  id={contact.id}
                />
              </label>
            ))
          ) : (
            <Information
              listInformations={this.state.contact}
              isRemovable={false}
            />
          )}
        </div>

        <div className="social">
          <Heading
            title="Social"
            handleEdit={() => this.handleEdit("social")}
          />
          {isEditable.social && (
            <form
              className="form"
              onSubmit={this.handleSubmitOnSocial}
            >
              <label htmlFor="website">Website: </label>
              <input id="website" name="website" />

              <label htmlFor="user-id">User Id: </label>
              <input id="user-id" name="user-id" />

              <button type="submit">Submit</button>
            </form>
          )}
          <Information
            listInformations={this.state.social}
            isRemovable={isRemovable.social}
            handleDelete={(id) => this.handleDelete(id, "social")}
          />
        </div>

        <div className="interest">
          <Heading
            title="Interest"
            handleEdit={() => this.handleEdit("interest")}
          />
          {isEditable.interest && (
            <form
              className="form"
              onSubmit={this.handleSubmitOnInterest}
            >
              <label htmlFor="interest">Interest: </label>
              <input id="interest" name="interest" />

              <button type="submit">Submit</button>
            </form>
          )}

          <Information
            listInformations={this.state.interest}
            isRemovable={isRemovable.interest}
            handleDelete={(id) => this.handleDelete(id, "interest")}
          />
        </div>
      </section>
    );
  }
}

export default AboutMe;

// class AboutMe extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { id: 1, information: "name", text: "Some Name" },

//       contact: [
//         { id: 1, information: "phone", text: "000-000-000" },
//         { id: 2, information: "email", text: "email@email.com" },
//         { id: 3, information: "linkedin", text: "linkedinprofile" },
//       ],

//       social: [
//         { id: 1, information: "instagram", text: "insta_gram_" },
//         { id: 2, information: "facebook", text: "facebook" },
//       ],

//       interest: [
//         { id: 1, information: "things", text: "" },
//         { id: 2, information: "you", text: "" },
//         { id: 3, information: "like", text: "" },
//         { id: 4, information: "doing", text: "" },
//       ],

//       isEditable: {
//         name: false,
//         contact: false,
//         social: false,
//         interest: false,
//       },
//       isRemovable: { social: false, interest: false },
//     };
//   }

//   handleEdit = (name) => {
//     this.setState((prevState) => ({
//       isEditable: {
//         ...prevState.isEditable,
//         [name]: !prevState.isEditable[name],
//       },
//       isRemovable: {
//         ...prevState.isRemovable,
//         [name]: !prevState.isRemovable[name],
//       },
//     }));
//   };

//   handleOnChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "name") {
//       this.setState((prevState) => ({
//         name: {
//           ...prevState.name,
//           text: value,
//         },
//       }));
//     } else {
//       const updatedContact = this.state.contact.map((contact) => {
//         if (contact.information === name) {
//           return { ...contact, text: value };
//         }
//         return contact;
//       });

//       this.setState({
//         contact: updatedContact,
//       });
//     }
//   };

//   handleSubmitOnSocial = (e) => {
//     e.preventDefault();
//     const website = e.target.elements["website"].value;
//     const userId = e.target.elements["user-id"].value;

//     const newSocial = {
//       id: Date.now(),
//       information: website,
//       text: userId,
//     };
//     const updatedSocial = [...this.state.social, newSocial];

//     this.setState({
//       social: updatedSocial,
//       isEditable: {
//         ...this.state.isEditable,
//         social: false,
//       },
//       isRemovable: {
//         ...this.state.isRemovable,
//         social: false,
//       },
//     });
//   };

//   handleSubmitOnInterest = (e) => {
//     e.preventDefault();
//     const interest = e.target.elements["interest"].value;

//     const newInterest = {
//       id: Date.now(),
//       information: interest,
//     };

//     const updatedInterest = [...this.state.interest, newInterest];

//     this.setState({
//       interest: updatedInterest,
//       isEditable: {
//         ...this.state.isEditable,
//         interest: false,
//       },
//       isRemovable: {
//         ...this.state.isRemovable,
//         interest: false,
//       },
//     });
//   };

//   handleSocialDelete = (id) => {
//     const updatedSocial = this.state.social.filter(
//       (social) => social.id !== id
//     );

//     this.setState({
//       social: updatedSocial,
//     });
//   };

//   handleInterestDelete = (id) => {
//     const updatedInterest = this.state.interest.filter(
//       (interest) => interest.id !== id
//     );

//     this.setState({
//       interest: updatedInterest,
//     });
//   };

//   render() {
//     return (
//       <section className="aboutMe">
//         <div className="name">
//           {this.state.isEditable.name ? (
//             <label
//               className="name-label"
//               htmlFor={this.state.name.id}
//             >
//               Name:
//               <input
//                 onChange={this.handleOnChange}
//                 value={this.state.name.text}
//                 id={this.state.name.id}
//                 name={this.state.name.information}
//               />
//               <EditBtn handleEdit={() => this.handleEdit("name")} />
//             </label>
//           ) : (
//             <Heading
//               title={this.state.name.text}
//               handleEdit={() => this.handleEdit("name")}
//             />
//           )}
//         </div>

//         <div className="contact">
//           <Heading
//             title="Contact"
//             handleEdit={() => this.handleEdit("contact")}
//           />
//           {this.state.isEditable.contact ? (
//             this.state.contact.map((contact) => {
//               return (
//                 <label htmlFor={contact.id}>
//                   {contact.information}:
//                   <input
//                     onChange={this.handleOnChange}
//                     name={contact.information}
//                     value={contact.text}
//                     id={contact.id}
//                   />
//                 </label>
//               );
//             })
//           ) : (
//             <Information listInformations={this.state.contact} />
//           )}
//         </div>

//         <div className="social">
//           <Heading
//             title="Social"
//             handleEdit={() => this.handleEdit("social")}
//           />
//           {this.state.isEditable.social && (
//             <form onSubmit={this.handleSubmit}>
//               <label htmlFor="website">Website: </label>
//               <input id="website" name="website" />

//               <label htmlFor="user-id">User Id: </label>
//               <input id="user-id" name="user-id" />

//               <button type="submit">Submit</button>
//             </form>
//           )}
//           <Information
//             listInformations={this.state.social}
//             isRemovable={this.state.isRemovable.social}
//             handleDelete={this.handleSocialDelete}
//           />
//         </div>

//         <div className="interest">
//           <Heading
//             title="Interest"
//             handleEdit={() => this.handleEdit("interest")}
//           />
//           {this.state.isEditable.interest && (
//             <form onSubmit={this.handleSubmitOnInterest}>
//               <label htmlFor="interest">Interest: </label>
//               <input id="interest" name="interest" />

//               <button type="submit">Submit</button>
//             </form>
//           )}

//           <Information
//             listInformations={this.state.interest}
//             isRemovable={this.state.isRemovable.interest}
//             handleDelete={this.handleInterestDelete}
//           />
//         </div>
//       </section>
//     );
//   }
// }

// export default AboutMe;
