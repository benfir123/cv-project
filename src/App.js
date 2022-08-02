import React, { Component } from "react";
import Form from "./components/Form";
import Cv from "./components/Cv";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      education: [],
      experience: [],
      editMode: true,
      view: {
        name: "",
        email: "",
        phone: "",
        education: [],
        experience: [],
      },
    };
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleArrayInputChange = (property, id) => {
    return (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => {
        const newValue = prevState[property].map((item) => {
          if (item.id === id) {
            return { ...item, [name]: value };
          }
          return item;
        });
        return { ...prevState, [property]: newValue };
      });
    };
  };
  handleEducationItemAdd = (e) => {
    const id = uniqid();
    this.setState((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id,
          university: "",
          major: "",
          gradYear: "",
        },
      ],
    }));
  };

  handleExperienceItemAdd = (e) => {
    const id = uniqid();
    this.setState((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id,
          company: "",
          position: "",
          tasks: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  handleItemDelete = (property, id) => {
    const newValue = this.state[property].filter((item) => {
      return item.id !== id;
    });

    this.setState({ [property]: newValue });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const newValue = {
      name: this.state.personalInfo.name,
      email: this.state.personalInfo.email,
      phone: this.state.personalInfo.phone,
      education: this.state.education,
      experience: this.state.experience,
    };
    this.setState({ view: newValue });
    this.setState({ editMode: false });
  };

  handleEditForm = (e) => {
    this.setState({ editMode: true });
  };

  render() {
    const { education, experience, editMode, view } = this.state;
    return (
      <div className="container">
        <Form
          handleInputChange={this.handleInputChange}
          handleArrayInputChange={this.handleArrayInputChange}
          handleEducationItemAdd={this.handleEducationItemAdd}
          handleExperienceItemAdd={this.handleExperienceItemAdd}
          handleItemDelete={this.handleItemDelete}
          handleSubmitForm={this.handleSubmitForm}
          handleEditForm={this.handleEditForm}
          education={education}
          experience={experience}
          editMode={editMode}
        />
        <Cv view={view} />
      </div>
    );
  }
}

export default App;
