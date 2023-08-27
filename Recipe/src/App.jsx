import { useState } from 'react'
import './App.css'
import photo from '../src/assets/photo1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>Classic Cheesecake Recipe</h1>
        <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
      </header>
      <main>

      <img src={photo} alt="Cheesecake" />

      <section id='ingredients'>
        <h2>Ingredients</h2>
        <h3>Graham Cracker Crust</h3>

        <input type="checkbox" name="1" id="1" /> 
        <label htmlFor="1">1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)</label> <br />

        <input type="checkbox" name="2" id="2" />
        <label htmlFor="2">5 Tablespoons (70g) unsalted butter, melted</label> <br />

        <input type="checkbox" name="3" id="3" />
        <label htmlFor="3">1/4 cup (50g) granulated sugar</label>
        

        <h3>Cheesecake</h3>
        <input type="checkbox" name="4" id="4" />
        <label htmlFor="4">four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature</label> <br />


        <input type="checkbox" name="5" id="5" />
        <label htmlFor="5">1 cup (200g) <strong>granulated sugar</strong></label> <br />

        <input type="checkbox" name="6" id="6" />
        <label htmlFor="6"></label>




      </section>

      </main>
    </div>
     
  )
}

export default App
