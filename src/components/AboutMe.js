import React, {useState} from "react";
import Heading from "./cv-components/Heading";
import Information from "./cv-components/Information";
import EditBtn from "./cv-components/EditBtn";

function AboutMe() {
  const [name, setName] = useState({id: 1, information: "name", text: "Some Name"});
  const [contact, setContact] = useState([
    {id: 1, information: "phone", text: "000-000-000"},
    {id: 2, information: "email", text: "email@example.com"},
    {id: 3, information: "linkedin", text: "linkedinprofile"},
  ]);
  const [social, setSocial] = useState([
    {id: 1, information: "instagram", text: "insta_gram_"},
    {id: 2, information: "facebook", text: "facebook"},
  ]);
  const [interest, setInterest] = useState([
    {id: 1, information: "things", text: ""},
    {id: 2, information: "you", text: ""},
    {id: 3, information: "like", text: ""},
    {id: 4, information: "doing", text: ""},
  ]);

  const [isEditable, setIsEditable] = useState({name: false, contact: false, social: false, interest: false});
  const [isRemovable, setIsRemovable] = useState({social: false, interest: false});

  function handleEdit(name) {
    setIsEditable((prevState) => ({prevState, [name]: !isEditable[name]}));
    setIsRemovable((prevState) => ({prevState, [name]: !isRemovable[name]}));
  }

  function handleOnChange(e) {
    const {name, value} = e.target;
    if (name === "name") {
      setName((prevState) => {
        return {...prevState, text: value};
      });
    } else {
      const updatedContact = contact.map((contact) => {
        if (contact.information === name) {
          return {...contact, text: value};
        }
        return contact;
      });
      setContact(updatedContact);
    }
  }

  function handleSubmitOnSocial(e) {
    e.preventDefault();
    const website = e.target.elements["website"].value;
    const userId = e.target.elements["user-id"].value;

    const newSocial = {
      id: Date.now(),
      information: website,
      text: userId,
    };

    setSocial((prevState) => [...prevState, newSocial]);
    setIsEditable((prevVal) => ({...prevVal, social: false}));
    setIsRemovable((prevVal) => ({...prevVal, social: false}));
  }

  function handleSubmitOnInterest(e) {
    e.preventDefault();
    const interest = e.target.elements["interest"].value;

    const newInterest = {
      id: Date.now(),
      information: interest,
    };

    setInterest((prevInterest) => [...prevInterest, newInterest]);
    setIsEditable((prevVal) => ({...prevVal, interest: false}));
    setIsRemovable((prevVal) => ({...prevVal, interest: false}));
  }

  function handleDelete(id, type) {
    let updatedList;
    if (type === "social") {
      updatedList = social.filter((item) => item.id !== id);
      setSocial(updatedList);
    } else {
      updatedList = interest.filter((item) => item.id !== id);
      setInterest(updatedList);
    }
  }

  return (
    <section className="aboutMe">
      <div className="name">
        {isEditable.name ? (
          <label className="name-label" htmlFor={name.id}>
            Name:
            <input onChange={handleOnChange} value={name.text} id={name.id} name={name.information} />
            <EditBtn handleEdit={() => handleEdit("name")} />
          </label>
        ) : (
          <Heading title={name.text} handleEdit={() => handleEdit("name")} />
        )}
      </div>

      <div className="contact">
        <Heading title="Contact" handleEdit={() => handleEdit("contact")} />
        {isEditable.contact ? (
          contact.map((contact) => (
            <label htmlFor={contact.id} key={contact.id}>
              {contact.information}:
              <input onChange={handleOnChange} name={contact.information} value={contact.text} id={contact.id} />
            </label>
          ))
        ) : (
          <Information listInformations={contact} isRemovable={false} />
        )}
      </div>

      <div className="social">
        <Heading title="Social" handleEdit={() => handleEdit("social")} />
        {isEditable.social && (
          <form className="form" onSubmit={handleSubmitOnSocial}>
            <label htmlFor="website">Website: </label>
            <input id="website" name="website" />

            <label htmlFor="user-id">User Id: </label>
            <input id="user-id" name="user-id" />

            <button type="submit">Submit</button>
          </form>
        )}
        <Information listInformations={social} isRemovable={isRemovable.social} handleDelete={(id) => handleDelete(id, "social")} />
      </div>

      <div className="interest">
        <Heading title="Interest" handleEdit={() => handleEdit("interest")} />
        {isEditable.interest && (
          <form className="form" onSubmit={handleSubmitOnInterest}>
            <label htmlFor="interest">Interest: </label>
            <input id="interest" name="interest" />

            <button type="submit">Submit</button>
          </form>
        )}

        <Information listInformations={interest} isRemovable={isRemovable.interest} handleDelete={(id) => handleDelete(id, "interest")} />
      </div>
    </section>
  );
}

export default AboutMe;
