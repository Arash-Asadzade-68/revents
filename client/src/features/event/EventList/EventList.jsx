import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {


  showEvent = (events,onOpenEvent,deleteEvent) =>(
    events?
    events.map( event  =>(
      <EventListItem onOpenEvent={onOpenEvent} event={event} deleteEvent={deleteEvent} key={event.id}/>
    )):null
  )

  render() {
   
    const onOpenEvent = this.props.onOpenEvent;
    const deleteEvent = this.props.deleteEvent;
    return (
      <div>
        {this.showEvent(this.props.events,onOpenEvent,deleteEvent)}  
      </div>
    )
  }
}

export default  EventList;
