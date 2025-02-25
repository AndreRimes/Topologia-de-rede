


export default function Button({children, onClick}: {children: React.ReactNode, onClick?: () => void}) {

    return (
        <button className="comic-button" onClick={onClick}>
            {children}
        </button>
    )
}