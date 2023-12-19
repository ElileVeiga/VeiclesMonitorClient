  import React,{useEffect, useState} from 'react';
  import './Veicles.css';
  import Axios from 'axios';
  import RenderVeiclesComponent from '../../components/RenderVeiclesComponent/RenderVeiclesComponent';
  import { DATABASE } from '../../Server/server';

  function Veicles() {
    const [veicles, setVeicles] = useState<any>();
  const [executado, setExecutado] = useState<any>(false);

    useEffect(() => {
      Axios.get(`${DATABASE}/CadastreVeicles`)
        .then((response) => {
          setVeicles(response.data);
        })
        .catch(() => {
          console.log('err');
        });
    }, []);

    const CheckVeicles = async () => {
        try {
            const response = await Axios.get(`${DATABASE}/CadastreVeiclesTemp`);
            setExecutado(true);
        } catch (err) {
            console.error('err');
        }
    };

    const DeletVeicles = (veicles:any) => {
      try {
          const responseDel = Axios.delete(`${DATABASE}/DeleteVeicles/${veicles.id}`);
      } catch (error) {
          console.error('error');
      }
  };

    return (
        <div>
          <div className='Titles'>
            <p className='prefixo'>PREFIXO</p>
            <p className='placa'>PLACA</p>
            <p className='modelo'>MODELO</p>
            <p className='metroplan'>METROPLAN</p>
            <p className='daer'>DAER</p>
            <p className='tacografo'>TACOGRAFO</p>
            <p className='prefeitura'>PREFEITURA</p>
            <button onClick={() => CheckVeicles()} className='ButtonVerific'>verificar</button>
          </div>
          {typeof veicles !== 'undefined' &&
          veicles.map((veicles:any) => (
            <RenderVeiclesComponent 
            PREFIXOVEICLE={veicles.prefixo}
            PLACAVEICLE={veicles.placa}
            MODELOVEICLE={veicles.modelo}
            METROPLAN={veicles.metroplan}
            DAER={veicles.daer}
            TACOGRAFO={veicles.tacografo}
            PREFEITURA={veicles.prefeitura}
            IDDB={veicles.id}
            DELETVEICLE={() => DeletVeicles(veicles)}
            />
          ))}
        
        
        </div>
    );
  }

  export default Veicles;
  
































