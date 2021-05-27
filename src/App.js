import React from "react";
import "./App.css";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecomendation";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import AddProject from "./components/AddProject";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "./components/AddBlog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/allprojects" component={AllProjects} />
          <Route exact path="/allblogs" component={AllBlogs} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
