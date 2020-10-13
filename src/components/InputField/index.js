import React from 'react';

const InputField = ({ handleClick }) => {
  return (
    <form className="row">
      <div className="input-field col s12">
        <textarea id="textarea1" onChange={(event) => handleClick(event.target.value)} className="materialize-textarea"></textarea>
        <label htmlFor="textarea1">Please enter the text with an URL.</label>
      </div>
    </form>
  );
};

export default InputField;