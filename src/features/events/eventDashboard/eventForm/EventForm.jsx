import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content="Create Event Form"/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Cith"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="event title"/>
                </Form.Field>
                <Button type="submit" floated="right" positive content="Create"/>
                <Button type="submit" floated="right" onClick={()=>setFormOpen(false)} negative content="Cancel"/>

            </Form>
        </Segment>
    )
}
