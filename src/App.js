import "./App.css";

import { Route, Link, Switch } from "react-router-dom";

const HomePage = (props) => {
  return <h1>Home Page</h1>;
};

const TopicListing = (props) => {
  return (
    <>
    <h1>Topic List</h1>
    <Link to={`${props.match.url}/13`}>Topic 13</Link>
    <Link to={`${props.match.url}/15`}>Topic 15</Link>
    <Link to={`${props.match.url}/17`}>Topic 17</Link>
    </>
  );
};

const TopicDetails = (props) => {
  return <h1>Topic Details {props.match.params.topicid}</h1>;
};

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/topics' component={TopicListing} />
        <Route path='/shop/topics/:topicid' component={TopicDetails} />
      </Switch>
    </div>
  );
}

export default App;
