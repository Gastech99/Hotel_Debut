import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";


export default class SingleRoom extends Component {
  
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      //slug: this.props.match.useParams.slug,defaultBcg,
    };
  }
  static contextType = RoomContext;
  //componentDidMount(){}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
        </div>
      );
    }
    return <div></div>;
  }
}
