import React from 'react';
import { useParams } from 'react-router-dom';

const NoteEditor = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Edit Note {id}</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" />
        </label>
        <br />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};

export default NoteEditor;