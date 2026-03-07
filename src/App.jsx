import './App.css'
import Button from './components/button.jsx';
import Product from './components/product.jsx'
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from "./components/tile.jsx";

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>


            <nav>
                <Button buttonText="to the collection" disabled={false}/>
                <Button buttonText="shop all bags" disabled={false}/>
                <Button buttonText="pre-orders" disabled={true}/>
            </nav>

            <main>

                <Product
                    label="Best seller"
                    image={bag_1}
                    imageAlt="Lelijke roze tas"
                    bagName="The handy bag"
                    price="400"
                />
                <Product
                    label="Best seller"
                    image={bag_2}
                    imageAlt="Lelijke bruine tas"
                    bagName="The stylish bag"
                    price="250"
                />
                <Product
                    label="New collection"
                    image={bag_3}
                    imageAlt="Lelijke groene tas"
                    bagName="The simple bag"
                    price="300"
                />
                <Product
                    label="New collection"
                    image={bag_4}
                    imageAlt="Lelijke bruine tas"
                    bagName="The trendy bag"
                    price="150"
                />
            </main>
            <footer>
                <Tile
                    title="The brand"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt."

                />
                <Tile image={brand} imageAlt="Afbeelding van het merk"/>
                <Tile image={our_story} imageAlt="Afbeelding van de ontwerpers"/>
                <Tile title="Our story"
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt."
                />
            </footer>
        </div>
    )
}

export default App
