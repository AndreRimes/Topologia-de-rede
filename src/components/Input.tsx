
export default function Select({
    id,
    label,
    className,
    value,
    onChange,
    options,
}: {
    id: string;
    label: string;
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}) {
    return (
        <div className="flex items-start flex-col w-full gap-2">
            <label htmlFor={id}>{label + ": "}</label>
            <select
                value={value}
                onChange={onChange}
                id={id}
                className={` bg-background w-full h-14 p-2 
                focus:outline-none focus:border-gray-800
                border-black border-2 rounded-[10px] shadow-lg transition-all duration-300 ease-in-out ${className}`}
                style={{
                    WebkitBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
                    MozBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
                    boxShadow: '5px 5px 0px 0px rgba(17,24,2,1)',
                }}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}