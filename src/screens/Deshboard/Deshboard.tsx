import React from 'react';
import './Deshboard.css';

function Deshboard() {

  return (
      <div className='BoxDeshboard'>
        <div className='VeiclesStatus'>
        <div className='VeiclesPendent'>
          <p>Veiculos Pendentes</p>
          <p>10</p>
        </div>
        <div className='VeiclesOK'>
          <p>Veiculos em Dia</p>
          <p>10</p>
        </div>
        <div className='VaiclesStoping'>
          <p>Veiculos Aguardando Laudo</p>
          <p>10</p>
        </div>
        </div>
        <div className='VeiclesInfo'>
        <div className='ALLVeicles'>
          <p>Total de Veiculos</p>
          <p>100</p>
        </div>
        <div className='VeiclesTypeBus'>
          <p>Onibus</p>
          <p>80</p>
        </div>
        <div className='VeiclesTypeMiniBus'>
          <p>Micro-Onibus</p>
          <p>20</p>
        </div>
        </div>
      </div>
  );
}

export default Deshboard;
 
































