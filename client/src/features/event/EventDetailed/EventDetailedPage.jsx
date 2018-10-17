import React from "react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { Grid } from "semantic-ui-react";


const event = {
  id: '1',
  title: 'رفته بودیم اینجا!!جاتون خالی',
  date: '2018-07-01',
  category: 'culture',
  isHost:false,
  description:
    'متن برای تست',
  city: 'تهران، ایران',
  venue: "آزادی",
  hostedBy: 'ساوری',
  hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
  attendees: [
    {
      id: 'a',
      name: 'سلیمان ملکی',
      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
    },
    {
      id: 'b',
      name: 'محسن اشرفی',
      photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ]
}
const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat event={event}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar event={event} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
