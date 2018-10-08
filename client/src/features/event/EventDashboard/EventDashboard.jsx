import React, { Component } from 'react';
import {Grid,Button} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';


const eventsDashboard = [
  {
    id: '1',
    title: 'گوجه شده 7 تومن',
    date: '2018-07-01',
    category: 'culture',
    description:
      'متن برای تست',
    city: 'تهران، ایران',
    venue: "آزادی",
    hostedBy: 'ساوری',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'سیب زمینی 5 تومن',
    date: '2017-02-05',
    category: 'خوردنی ها',
    description:
      'بدون شرح',
    city: 'تهران،ایران',
    venue: 'صادقیه',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {

  state = {
    events : eventsDashboard,
    isOpen :false,
    selectedEvent:null 
    }

  handleFormOpen =  () => {
    this.setState({
      isOpen:true,
      selectedEvent:null
    })
  }

  handleCancle = () =>{
    this.setState({
      isOpen:false
    })
  }

  handleOpenEvent = (eventToOpen) =>() =>{
    this.setState({
      selectedEvent:eventToOpen,
      isOpen:true
    })
  }
 
 
  handleCreateEvent = (newEvent) => {
    newEvent.hostPhotoURL = '/assets/user.png';
    newEvent.id =cuid();
    this.setState({
      events:[...this.state.events,newEvent],
      isOpen:false
    })
   
  }

  handleUpdateEvent = (updateEvent) =>{
    this.setState({
     events: this.state.events.map((event)=>{
        if(event.id === updateEvent.id){
           return Object.assign({},updateEvent)    
        }else{
          return event
        }
      }),
      isOpen:false,
      selectedEvent:null
    })
  }
  handleDeleteEvent = (eventId) => () =>{
    const events = this.state.events.filter(event => event.id !== eventId);
    this.setState({
      events
    })
  }
    
  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
            <Button positive content="ایجاد رویداد" onClick={this.handleFormOpen} />
            {this.state.isOpen ?
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={this.state.selectedEvent} createEvent={this.handleCreateEvent} handleCancle={this.handleCancle}/>
            :null}
        </Grid.Column>
        <Grid.Column width={10}>
            <h2>لیست رویداد ها</h2>
            <EventList deleteEvent={this.handleDeleteEvent}  onOpenEvent={this.handleOpenEvent} events={this.state.events}/>
        </Grid.Column>
      </Grid>
    )
  }
}
export default EventDashboard;