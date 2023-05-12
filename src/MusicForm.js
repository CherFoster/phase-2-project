import React, { useState } from 'react';

const MusicForm = () => {
  const [name, setName] = useState('');
  const [musician, setMusician] = useState('');
  const [link, setLink] = useState('');
  const [instrument, setInstrument] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data, e.g., API calls, state updates, etc.
    // Here, you can access the entered values as name, musician, link, and instrument.

    // Reset form after submission
    setName('');
    setMusician('');
    setLink('');
    setInstrument('');
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <label className='label'>
        Song Name: <br/>
        <input
          type="text"
          value={name}
        //   onChange updates the state as the user types
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className='label'>
        Musician: <br/>
        <input
          type="text"
          value={musician}
          onChange={(e) => setMusician(e.target.value)}
        />
      </label>

      <label className='label'>
        Sheet Link: <br/>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>

      <label className='label'>
        Instrument: <br/>
        <input
          type="text"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value)}
        />
      </label>

      <button type="submit">🎶 Submit</button>
    </form>
  );
};

export default MusicForm;