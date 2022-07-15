import React from 'react';
import './SelectMode.css';
import selectModeIcon from '../../sources/select-mode-icon.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const SelectMode = () => {
  const selectMode = 'Выбор режима';
  const modes = [
    {
      title: 'Low price',
      content: '500 билетов',
    },
    {
      title: 'Medium price',
      content: '3000 билетов',
    },
    {
      title: 'High price',
      content: '10000 билетов',
    },
  ];
  const renderedModes = modes.map((mode, i) => {
    const line = <span className="yellow-line" />;
    return (
      <div key={i} className="mode">
        <h1 className="mode-title">{mode.title}</h1>
        <h2 className="mode-tickets">{mode.content}</h2>
        {i !== 2 ? line : null}
      </div>
    );
  });

  return (
    <div className="select-mode-block">
      <Accordion
        sx={{
          background: '#2c2c2d;',
          boxShadow: '0px 4px 25px rgb(0 0 0 / 25%);',
          borderRadius: '20px !important',
          opacity: '1 !important;',
          borderWidth: '2px',
          borderStyle: 'solid;',
          borderColor: '#EBB41C;',
          '& .css-o4b71y-MuiAccordionSummary-content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            '& .css-o4b71y-MuiAccordionSummary-content': {
              display: 'flex',
              alignItems: 'center !important;',
              justifyContent: 'center !important;',
              borderRadius: '20px !important',
            },
          }}
        >
          <div className="select-mode">
            <img src={selectModeIcon} />
            <h3>{selectMode}</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex !important',
            alignItems: 'center !important;',
            justifyContent: 'center !important;',
            background: '#2C2C2D;',
            borderRadius: '20px !important',
          }}
        >
          <div className="modes-block">{renderedModes}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default SelectMode;
