import React from 'react';
import './CheckWinner.css';
import infoIcon from '../../sources/info-icon.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
const CheckWinner = () => {
  const checkWinnerBanner = 'узнать победный лот после окончания игры';

  const checkWinnerHidden =
    'Вы скачиваете архив с паролем где уже известен победный лот, после игры вам выдается пароль чтобы вы проверили честность матча';
  const archiveBtnText = 'Скачать архив';

  return (
    <div className="check-winner-block">
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
          <div className="check-winner-banner">
            <img src={infoIcon} />
            <h3>{checkWinnerBanner}</h3>
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
          <div className="check-winner-hidden-content">
            <h3>{checkWinnerHidden}</h3>
            <button>{archiveBtnText}</button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default CheckWinner;
