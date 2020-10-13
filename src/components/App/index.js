import React, { useState } from 'react';

import InputField from '../InputField';
import RenderPreviews from '../RenderPreviews';

function App() {

  const [links, setLinks] = useState([]);

  var urlRegex = /(\b(https?|www)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; // eslint-disable-line

  const handleClick = (value) => {
    let result = value.match(urlRegex);

    if (result !== null) {
      setLinks(result);
    }
  };

  return (
    <div className="app">

      <InputField handleClick={handleClick} />

      {
        (links.length > 0) && (
          <RenderPreviews links={links} />
        )
      }

    </div>
  );
};

export default App;
