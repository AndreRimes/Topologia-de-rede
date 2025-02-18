import { useState } from "react";
import Radio from "./Options";
import Select from "./Input"; 
import Button from "./Button";
import TextArea from "./TextArea";

interface FormProps {
  onPing: (origem: string, destino: string) => void;
  result?: string;
}

const nodeOptions = [
  { value: '', label: 'Select an option' },
  { value: '192.168.1.1/30', label: 'Agregação A1 (192.168.1.1/30)' },
  { value: '192.168.2.1/30', label: 'Agregação A2 (192.168.2.1/30)' },
  { value: '192.168.10.1/27', label: 'Borda E1 (192.168.10.1/27)' },
  { value: '192.168.11.1/27', label: 'Borda E2 (192.168.11.1/27)' },
  { value: '192.168.12.1/27', label: 'Borda E3 (192.168.12.1/27)' },
  { value: '192.168.13.1/27', label: 'Borda E4 (192.168.13.1/27)' },
  { value: '192.168.10.2', label: 'Host 1 (192.168.10.2)' },
  { value: '192.168.10.3', label: 'Host 2 (192.168.10.3)' },
  { value: '192.168.11.2', label: 'Host 3 (192.168.11.2)' },
  { value: '192.168.11.3', label: 'Host 4 (192.168.11.3)' },
  { value: '192.168.12.2', label: 'Host 5 (192.168.12.2)' },
  { value: '192.168.12.3', label: 'Host 6 (192.168.12.3)' },
  { value: '192.168.13.2', label: 'Host 7 (192.168.13.2)' },
  { value: '192.168.13.3', label: 'Host 8 (192.168.13.3)' },
];

const Form: React.FC<FormProps> = ({ onPing, result }) => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [isPing , setIsPing] = useState(true);
  const [command, setCommand] = useState('Selecione um dos commandos e execute-o');

  const handleClick = () => {
    if (isPing){
      setCommand("ping " + destino);
    }
    onPing(origem, destino);
  };

  return (
    <div
      className='flex basis-1/2 items-center bg-primary h-3/4 p-10 rounded-xl flex-col gap-4'
      style={{
        WebkitBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
        MozBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
        boxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
      }}
    >
      <h1 className='text-4xl font-bold'>Execute um comando</h1>
      <Radio 
        isPing={isPing}
        setIsPing={setIsPing}
      />
      <Select 
        id='origem' 
        value={origem} 
        onChange={e => setOrigem(e.target.value)} 
        label='IP de origem' 
        options={nodeOptions} 
      />
      <Select 
        id='destino' 
        value={destino} 
        onChange={e => setDestino(e.target.value)} 
        label='IP de destino' 
        options={nodeOptions} 
      />
      <div className='w-1/2 flex items-center'>
        <Button onClick={handleClick}>Executar comando</Button>
      </div> 
      <TextArea command={command} result={result} />  
    </div>
  )
} 

export default Form;