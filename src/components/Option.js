import React from 'react';

const Option = (props) => {
  return props.options.map((text, index) =>
    <div className="option" key={index}>
      <p className="option__text">{index+1}. {text}</p>
      <button className="button button--link"
        onClick={(e) => props.handleDeleteOption(index)}>
        Remove
     </button>
    </div>

  );
};

export default Option;