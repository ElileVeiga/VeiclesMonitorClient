import React, {useState, useEffect} from "react";
import "./RenderVeiclesComponent.css";
import Axios from "axios";
import { 
  PlusSquare,
  Trash2, 
} from 'lucide-react';
import { DATABASE } from "../../Server/server";
import { useLocation } from "react-router-dom";

function RenderVeiclesComponent(props:any) {

  const [userLog, setUserLog] = useState({
    name: "",
    setor: ""
  });
  const location = useLocation();
  const parametros = location.pathname.split('/'); // Extrai os parâmetros da localização

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await Axios.get(`${DATABASE}/LoginUser/${parametros[parametros.length - 1]}`);
        setUserLog(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchName();
  }, []);


  const handleUpdateClick = () => {
    const dadosVeiculo = {
      prefixo: props.PREFIXOVEICLE,
      placa: props.PLACAVEICLE,
      modelo: props.MODELOVEICLE,
      metroplan: props.METROPLAN,
      daer: props.DAER,
      tacografo: props.TACOGRAFO,
      prefeitura: props.PREFEITURA,
      id: props.IDDB
      };
  
    window.location.href = `/AtualizarVeiculos/${userLog.name}?${props.IDDB}?${new URLSearchParams(dadosVeiculo).toString()}`;
  };

    const [corAtual, setCorAtual] = useState(0);
    const cores = ['green', 'yellow', 'red'];
    const estados = ['OK', 'PROCESSANDO', 'AGUARDANDO LAUDO'];

    const fetchData = async () => {
      try {
        // Faz a requisição para obter o veículo específico do servidor
        const response = await Axios.get(`${DATABASE}/CadastreVeicles/${props.IDDB}`);
        const statusNoServidor = response.data.status;
    
        // Mapeia o status do servidor para a cor correspondente
        const novaCor = estados.indexOf(statusNoServidor);
        
        // Atualiza o estado local com a cor obtida do servidor
        setCorAtual(novaCor);
      } catch (error) {
        console.error('Erro ao obter o status do servidor:', error);
      }
    };
    useEffect(() => {
      // Chama a função fetchData quando o componente é montado
      fetchData();
    }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez no montar do componente

    const handleClick = async () => {
      const confirmacao = window.confirm('Você deseja alterar o status do veículo?');

      if (confirmacao) {
        let novaCor;
        if (corAtual === cores.length - 1) {
          novaCor = 0;
        } else {
          novaCor = corAtual + 1;
        }

        // Atualiza a cor localmente
        setCorAtual(novaCor);

        // Mapeia a cor para o estado correspondente
        const novoStatus = estados[novaCor];

        // Envia o novo estado para o servidor utilizando Axios
        try {
          await Axios.put(`${DATABASE}/VeiclesUpdateStatus/${props.IDDB}`, {   
            status: novoStatus 
          });
        } catch (error) {
        }
      }
    };

    const estilo = {
      backgroundColor: cores[corAtual],
      width: '1vw',
      height: '2vh',
      borderRadius: '100%',
      cursor: 'pointer',
    };

  return (
    <div className="RenderVeiclesComponentBox">
      <div className="point">
      <div style={estilo} onClick={handleClick}></div>
      </div>
      <p className="comp">{props.PREFIXOVEICLE}</p>
      <p className="comp">{props.PLACAVEICLE}</p>
      <p className="comp">{props.MODELOVEICLE}</p>
      <p className="comp">{props.METROPLAN}</p>
      <p className="comp">{props.DAER}</p>
      <p className="comp">{props.TACOGRAFO}</p>
      <p className="comp">{props.PREFEITURA}</p>
      <div className="updateBuutom" onClick={() => handleUpdateClick()}>
        <PlusSquare />
      </div> 
      <div className="deletButtom" onClick={props.DELETVEICLE}><Trash2 /></div>
    </div>
  );
};

export default RenderVeiclesComponent;
