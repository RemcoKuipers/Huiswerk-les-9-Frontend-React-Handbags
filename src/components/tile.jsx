import './tile.css'

function Tile({image, imageAlt, title, text}) {
    return (
        <section>
            {image && <img src={image} alt={imageAlt}/>}
            <h2>{title}</h2>
                <p>{text}</p>
        </section>
    )
}

export default Tile;