import './card.css'

interface CardProps {
    title: string,
    price: number,
    image: string
}


const Card = ({ title, price, image }: CardProps) => {
    return (
        <div className="card">
            <img src={image} alt="imagem" />
            <h2>{title}</h2>
            <p><strong>Valor:</strong> R$ {price}</p>
        </div>
    );
}

export default Card;