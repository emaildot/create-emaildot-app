import React from 'react';

// const data = [
//   {
//     id: 'email',
//     label: 'Email',
//   },
//   {
//     id: 'fullscreen',
//     label: 'Fullscreen',
//   },
// ];

const Label = ({ name, id, label, onChange, checked }) => {
  return (
    <label htmlFor={`control-selector--${name}--${id}`}>
      <input
        type="radio"
        name={name}
        value={id}
        id={`control-selector--${name}--${id}`}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
};

const ControlSelector = ({
  handleUpdateControls = () => {},
  value,
  title = '',
  name = '',
  data = [],
}) => {
  const onChange = (e) => {
    handleUpdateControls(e.target.name, e.target.value);
  };

  return (
    <section>
      <div className="title">{title}</div>
      <div className="selector">
        {data.map(({ id, label }) => (
          <Label
            key={id}
            label={label}
            name={name}
            checked={value === id}
            onChange={onChange}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default ControlSelector;
