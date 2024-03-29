export interface ButtonProps {
    text: string
}

const Header = ({text}:ButtonProps) => {
    return (
        <div className="bg-primary-600 px-6 py-2">
            <h1 className="text-greyscale-500 text-headline-large font-montserrat">{text}</h1>
        </div>
    )
}

export default Header
