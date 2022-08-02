import React, { Component } from "react";
import "../styles/Cv.css"

class Cv extends Component {
    
  render() {
    const { view } = this.props

    return (
            <div className="cv-container">
                <h1>{view.name}</h1>
                <p>{view.email}</p>
                <p>{view.phone}</p>
                { view.education.length > 0 && <strong><u>Education</u></strong> }
                {view.education.map((item) => {
                    return <div key={item.id}>
                        <p>{item.university}</p>
                        <p>{item.major}</p>
                        <p>{item.gradYear}</p>
                    </div>
                })}
                { view.experience.length > 0 && <strong><u>Experience</u></strong> }
                {view.experience.map((item) => {
                    return <div key={item.id}>
                        <p>{item.company}</p>
                        <p>{item.position}</p>
                        <p>{item.tasks}</p>
                        <p>{item.startDate} - {item.endDate}</p>
                    </div>
                })}
            </div>

    )

    
  }
}

export default Cv;
