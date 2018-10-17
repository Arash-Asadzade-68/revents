import React from "react";
import { Segment, Item, List, Label } from "semantic-ui-react";

function EventDetailedSidebar({ event }) {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
       {event.attendees.length && event.attendees.length===1 ?"کاربر":"کاربران"}
      </Segment>
      {event.attendees ? event.attendees.map( attendee =>(
      <Segment attached key={attendee.id}>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
           {event.isHost && <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="left"
            >
              میزبان
            </Label>}
            <Item.Image size="tiny" src={attendee.photoURL} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <a>{attendee.name}</a>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
      )): null}
    </div>
  );
}

export default EventDetailedSidebar;
