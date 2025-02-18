import { useState } from "react";
import Radio from "./Options";
import Select from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

interface FormProps {
  onExecute: (origem: string, destino: string) => void;
  mode: "ping" | "traceroute";
  setMode: React.Dispatch<React.SetStateAction<"ping" | "traceroute">>;
  log: string[];
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

const Form: React.FC<FormProps> = ({ onExecute, mode, setMode, log, result }) => {
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
        <Button onClick={handleExecute}>Executar comando</Button>
      </div>
      <TextArea command={mode === 'ping' ? `ping ${destino}` : `traceroute ${destino}`} log={log} result={result} />
    </div>
  );
};

export default Form;