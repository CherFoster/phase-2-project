import React, { useState } from 'react';

function MusicForm() {
  const defaultImg = "https://clipartspub.com/images/clipart-piano-keyboard-3.png";

  const [name, setName] = useState('');
  const [musician, setMusician] = useState('');
  const [link, setLink] = useState('');
  const [instrument, setInstrument] = useState('');
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
        name: name,
        musician: musician,
        image: image,
        link: link,
        instrument: instrument
    }
    fetch("http://localhost:8000/musicList", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(data => {
            console.log(data.music)
        })

    setName('');
    setMusician('');
    setLink('');
    setInstrument('');
    setImage(defaultImg)
  }

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