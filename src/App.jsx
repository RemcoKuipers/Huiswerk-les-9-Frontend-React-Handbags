import './App.css'
import Button from './components/button.jsx';

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <section>
                <nav>
                    <Button buttonText="to the collection" disabled={false}/>
                    <Button buttonText="shop all bags" disabled={false}/>
                    <Button buttonText="shop all bags" disabled={true}/>
                </nav>
            </section>

        </div>
    )
}

export default App
