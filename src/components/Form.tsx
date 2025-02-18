import { useState } from "react";
import Radio from "./Options";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

interface FormProps {
  onExecute: (origem: string, destino: string) => void;
  mode: "ping" | "traceroute";
  setMode: React.Dispatch<React.SetStateAction<"ping" | "traceroute">>;
  log: string[];
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}

const Form: React.FC<FormProps> = ({ onExecute, mode, setMode, log, setLog}) => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const handleExecute = () => {
    onExecute(origem, destino);
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
      <div className="flex">
        <button
          className={`px-4 py-2 rounded-l-lg ${mode === "ping" ? "bg-black text-white" : "bg-gray-200"}`}
          onClick={() => setMode("ping")}
        >
          Ping
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${mode === "traceroute" ? "bg-black text-white" : "bg-gray-200"}`}
          onClick={() => setMode("traceroute")}
        >
          TraceRouter
        </button>
      </div>
      <Input id='origem' value={origem} onChange={e => setOrigem(e.target.value)} label='IP de origem' />
      <Input id='destino' value={destino} onChange={e => setDestino(e.target.value)} label='IP de destino' />
      <div className='w-1/2 flex items-center'>
        <Button onClick={handleExecute}>Executar comando</Button>
      </div> 
      <TextArea label='Resultado' id='result' value={log.join("\n")}/>  
    </div>
  )
} 

export default Form;