import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();
//<RoomContext.Provider value={"hello"}/>

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

// Get Data

    componentDidMount(){
        // this.getData
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    }

    formatData(items){
        let temItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room;
        })
        return temItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }

  render() {
    return (
      <div>
          <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
              {this.props.children}
          </RoomContext.Provider>
    </div>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
