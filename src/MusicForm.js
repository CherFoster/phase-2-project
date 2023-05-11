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
        Song Name: 
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className='label'>
        Musician:
        <input
          type="text"
          value={musician}
          onChange={(e) => setMusician(e.target.value)}
        />
      </label>

      <label className='label'>
        Sheet Link:
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </label>

      <label className='label'>
        Instrument:
        <input
          type="text"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value)}
          required
        />
      </label>

      <button type="submit">🎶 Submit</button>
    </form>
  );
};

export default MusicForm;