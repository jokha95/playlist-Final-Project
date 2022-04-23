import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import veed from "./components/veed";
import Navbar from "./components/bar";
import { Box } from "@mui/material";
import VideoDetail from "./components/Detail";
import SearchFeed from "./components/SearchFeed";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Box sx={{ p: 1 }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={veed} />
          <Route path="/video-details/:id" component={VideoDetail} />
          <Route path="/search" component={SearchFeed} />
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
