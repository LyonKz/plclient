import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";
import Home from "./container/Home";
import NotFound from "./container/NotFound";
import Login from "./container/Login";
import Signup from "./container/Signup";
import NewNote from "./container/NewNote";
import Notes from "./container/Notes.js";
import Settings from "./container/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
    return ( 
        <Switch>
            <Route exact path = "/">
                <Home/> 
            </Route>
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch > 
    );
}