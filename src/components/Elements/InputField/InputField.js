import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Input = (props) => {

  const [input, setInput] = useState('');
  const handleInputChange = (event) => {

    setInput(event.target.value);
    props.onChange(event.target.value);

  };
  return (
    <div className="form-group">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type || 'text'}
        className="form-control mt-2"
        id={props.id}
        placeholder={props.placeholder}
        value={input}
        onChange={handleInputChange}
        autoComplete="username"
      />
      {props.helpText && <small className="form-text text-muted">{props.helpText}</small>}
    </div>
  );
};

export default Input;