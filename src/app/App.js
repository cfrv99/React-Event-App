import { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../features/events/eventDashboard/EventDashboard";
import NavBar from "../features/events/eventDashboard/nav/NavBar";
import "./App.css";

function App() {
  const [formOpen,setFormOpen] = useState(false);
  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </Fragment>
  );
}

export default App;
