import React from 'react';
import { Link } from 'react-router-dom';

const NotesList = () => (
  <div>
    <h2>Notes</h2>
    <ul>
      <li>
        <Link to="/notes/1">Note 1</Link>
      </li>
      <li>
        <Link to="/notes/2">Note 2</Link>
      </li>
      <li>
        <Link to="/notes/3">Note 3</Link>
      </li>
    </ul>
  </div>
);

export default NotesList;