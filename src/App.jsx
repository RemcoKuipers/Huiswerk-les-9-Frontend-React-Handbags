import './App.css'
import Button from './components/button.jsx';
import Product from './components/product.jsx'
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

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

        </div>
    )
}

export default App
