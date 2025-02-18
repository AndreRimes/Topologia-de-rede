
export default function TextArea({id, label}: {id: string, label: string}) {

    return (
        <aside
        style={{
            WebkitBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
            MozBoxShadow: '11px 8px 0px 0px rgba(17,24,2,1)',
            boxShadow: '5px 5px 0px 0px rgba(17,24,2,1)',
        }}
         className="bg-background rounded-lg p-4 w-full cursor-default">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green"></div>
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ npm install next</p>
                <p className="">+ next@10.2.3</p>
                <p className="">added 1 package, and audited 2 packages in 3s</p>
                <p className="text-green-400">$</p>
            </div>
        </aside>
       
    )
}