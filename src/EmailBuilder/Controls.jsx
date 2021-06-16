import React from 'react';
import ControlSelector from './ControlSelector';

const dataDisplaySize = [
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'fullscreen',
    label: 'Fullscreen',
  },
];

const dataBgColor = [
  {
    id: 'white',
    label: 'White',
  },
  {
    id: 'black',
    label: 'Black',
  },
  {
    id: 'grey',
    label: 'Grey',
  },
];

const Controls = ({ handleUpdateControls = () => {}, controls = {} }) => {
  return (
    <div className="controls">
      <h2>Controls</h2>
      <ControlSelector
        title="Display size:"
        handleUpdateControls={handleUpdateControls}
        name="displaySize"
        value={controls.displaySize}
        data={dataDisplaySize}
      />
      {controls.displaySize === 'email' && (
        <ControlSelector
          title="Background Color:"
          handleUpdateControls={handleUpdateControls}
          name="bgColor"
          value={controls.bgColor}
          data={dataBgColor}
        />
      )}
    </div>
  );
};

export default Controls;
