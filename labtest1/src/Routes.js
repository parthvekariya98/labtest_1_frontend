import React from 'react';
import { Route } from 'react-router';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';

const Routes = () => (
  <div>
    <Route exact path="/" component={NotesList} />
    <Route path="/notes/:id" component={NoteEditor} />
  </div>
);

export default Routes;