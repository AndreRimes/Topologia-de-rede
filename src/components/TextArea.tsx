
export default function TextArea({command, result}: {command: string, result?: string}) {

    return (
        <aside
        style={{
            WebkitBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
            MozBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
            boxShadow: '5px 5px 0px 0px rgba(17,24,2,1)',
        }}
         className="bg-background rounded-lg p-4 w-full h-40 cursor-default">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green"></div>
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="font-semibold"><span className="text-yellow-500">$</span> {command}</p>
                {result && <p>{result}</p>}
            </div>
        </aside>
       
    )
}