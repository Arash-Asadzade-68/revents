import React from "react";
import {Segment,Image,Item,Header,Button} from 'semantic-ui-react'


const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
function EventDetailedHeader({event}) {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{event.date}</p>
                <p>
                  ناشر <strong> {event.hostedBy} </strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>انصراف</Button>
        <Button color="teal">افزودن</Button>

        <Button color="orange" floated="left">
          مدیریت رویداد
        </Button>
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailedHeader;
