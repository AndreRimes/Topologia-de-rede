import { useState } from "react";
import Radio from "./Options";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

interface FormProps {
  onPing: (origem: string, destino: string) => void;
}

const Form: React.FC<FormProps> = ({ onPing }) => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const handlePing = () => {
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
      <Radio />
      <Input id='origem' value={origem} onChange={e => setOrigem(e.target.value)} label='IP de origem' />
      <Input id='destino' value={destino} onChange={e => setDestino(e.target.value)} label='IP de destino' />
      <div className='w-1/2 flex items-center'>
        <Button onClick={handlePing}>Executar comando</Button>
      </div> 
      <TextArea label='Resultado' id='result' />  
    </div>
  )
} 

export default Form;