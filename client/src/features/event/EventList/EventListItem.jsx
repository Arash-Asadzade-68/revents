import React, { Component } from "react";
import { Segment, Item, List, Icon, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {


  showAttendee = (attendees) =>(
    attendees ?attendees.map(attendee =>(
      <EventListAttendee attendee={attendee} key={attendee.id}/>
    )):null
  )
  render() {
    const event =this.props.event;
    const onOpenEvent =this.props.onOpenEvent;
    const deleteEvent =this.props.deleteEvent;
    
    return (
      <div>
       
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    انتشار توسط <a>{event.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" />  {event.date} |<Icon name="marker" />  {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
                {this.showAttendee(event.attendees)}
            </List>
          </Segment>
          <Segment clearing>
            <span>{event.description}</span>
            <Button as={Link} to={`/event/${event.id}`} color="teal" floated="left" content="مشاهده" />
            <Button onClick={deleteEvent(event.id)}  as="a" color="red" floated="left" content="حذف" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default EventListItem;
