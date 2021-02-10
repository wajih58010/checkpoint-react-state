import React from 'react'
import { Button, Form } from 'react-bootstrap'

class Person extends React.Component {

  state = {
    fulllName: "Wajih Gabtni",
    bio: "bio",
    imgSrc: "https://image.freepik.com/free-icon/important-person_318-10744.jpg",
    profession: "software developer",

    intervall: null,
    timer: 0,
  }

    // componentDidMount
  componentDidMount() {
    console.log("Person Component did mount")
    this.setState({
      intervall: setInterval(() => {
        this.setState({timer: this.state.timer + 1});
      }, 100),
    });
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("Person Component wil unmount")
  }

  // componentDidUpdate
  componentDidUpdate(prevprops, prevstate) {
    console.log("Person Component did update")
    console.log(prevprops, prevstate)
  }
  
 // handleProfile
  handleProfile = () => {
    this.setState({
        fulllName: "Wajih Gabtni",
        bio: "bio",
        imgSrc: "https://image.freepik.com/free-icon/important-person_318-10744.jpg",
        profession: "software developer"
    })
  }

   render() {
    console.log("render")
    return (
      <div className="counterPart">
        <h2 className="title">This is a Person : </h2>
        <div>
         <h2>{this.state.fulllName}</h2>
         <h2>{this.state.bio}</h2>
         <img src={this.state.imgSrc}></img>
         <h2>{this.state.profession}</h2>
        <h2>{this.state.timer}</h2>
        </div>

      </div>
    )
  }
}

export default Person