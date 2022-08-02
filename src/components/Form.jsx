import React, { Component } from "react";
import "../styles/Form.css"

class Form extends Component {
    
  render() {
    const { handleInputChange, handleArrayInputChange, handleEducationItemAdd, handleExperienceItemAdd, handleItemDelete, handleSubmitForm, handleEditForm, editMode, education, experience } = this.props
    const checkIfDisabled = () => editMode ? false : true;

    return (
<form onSubmit={handleSubmitForm}>
      <h2>Please fill out your details.</h2>
    <div className="form-container">
        <input onChange={handleInputChange} name="name" placeholder="Name" disabled={checkIfDisabled()}/>
        <input onChange={handleInputChange} name="email" placeholder="Email" disabled={checkIfDisabled()}/>
        <input onChange={handleInputChange} name="phone" placeholder="Phone Number" disabled={checkIfDisabled()}/>

        {education.map((item, i) => {
                return <div key={item.id} className="education-card">
                    <h2>School #{i+1}</h2>
                    <input name="university" onChange={handleArrayInputChange('education', item.id)} value={item.name} placeholder="University Name" disabled={checkIfDisabled()}/>
                    <input name="major" onChange={handleArrayInputChange('education', item.id)} value={item.name} placeholder="Major" disabled={checkIfDisabled()}/>
                    <input name="gradYear" onChange={handleArrayInputChange('education', item.id)} value={item.name} placeholder="Graduation Year" disabled={checkIfDisabled()} />
                    { editMode && <button type="button" onClick={() => handleItemDelete('education', item.id)} >Delete School</button>}
                </div>
            })}
            { editMode && <button type="button" onClick={handleEducationItemAdd} >Add School</button> }

        {experience.map((item, i) => {
            return <div key={item.id} className="experience-card">
              <h2>Employment #{i+1}</h2>
              <input name="company" onChange={handleArrayInputChange('experience', item.id)} value={item.name} placeholder="Company Name" disabled={checkIfDisabled()}/>
              <input name="position" onChange={handleArrayInputChange('experience', item.id)} value={item.name} placeholder="Position" disabled={checkIfDisabled()}/>
              <input name="tasks" onChange={handleArrayInputChange('experience', item.id)} value={item.name} placeholder="Tasks" disabled={checkIfDisabled()}/>
              <input name="startDate" onChange={handleArrayInputChange('experience', item.id)} value={item.name} placeholder="Start Date" disabled={checkIfDisabled()}/>
              <input name="endDate" onChange={handleArrayInputChange('experience', item.id)} value={item.name} placeholder="End Date" disabled={checkIfDisabled()}/>
               { editMode && <button type="button" onClick={() => handleItemDelete('experience', item.id)}  >Delete Work</button> }
        </div>
        })}
        { editMode && <button type="button" onClick={handleExperienceItemAdd} >Add Work</button> }
       
        { !editMode && <button type="button" onClick={handleEditForm} >Edit</button>}
        { editMode && <button type="submit">Submit</button> }
    </div>          
 </form>


    )

    
  }
}

export default Form;
