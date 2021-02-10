import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem(props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={props.event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={props.event.title} />
              <Item.Description>{props.event.description}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {props.event.date}
          <Icon name="marker" /> {props.event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {props.event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee = {attendee}/>
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>Event Description</span>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}
