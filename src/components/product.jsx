import './product.css'

function Product({label, image, imageAlt, bagName, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={imageAlt}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;