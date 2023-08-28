import './App.css'
import photo from '../src/assets/photo1.png'
import dinning from './assets/dinning.png'
import clock from  './assets/clock.png'

function App() {
  

  return (
    <div>
      <header>
        <h1>Classic Cheesecake Recipe</h1>
        <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
      </header>
      <main>

      <img src={photo} alt="Cheesecake" id='cheese'/>


      <section id='time'>
      <p>
        <span>
          <img src={dinning} alt="dinning" /> 
          <span>Yields</span> <br />
          <span>12 servings</span>
        </span> 
      </p>

      <p>
        <span>
          <img src={clock} alt="time" />
          <span>Prep Time</span> <br />
          <span>45 minutes</span>
        </span>
      
      </p>


      <p>
        <span>
          <img src={clock} alt="time" />
          <span>Cook Time </span>
          <span>1 hour</span>
        </span>
      </p>

      <p>
        <span>
          <img src={clock} alt="time" />
          <span>Total Time</span>
          <span>7,75 hours</span>
        </span>
      </p>

      </section>

      <section id='ingredients'>
        <h2>Ingredients</h2>
        <h3>Graham Cracker Crust</h3>

      <p>
        <input type="checkbox" name="1" id="ingre1" /> 
        <label htmlFor="ingre1">1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet  graham crackers)</label>
      </p>

        <p>
          <input type="checkbox" name="2" id="ingre2" />
          <label htmlFor="ingre2">5 Tablespoons (70g) <strong>unsalted butter</strong>, melted</label>
        </p>

        <p>
          <input type="checkbox" name="3" id="ingre3" />
          <label htmlFor="ingre3">1/4 cup (50g) <strong>granulated sugar</strong></label>
        </p> 
        <h3 id='titleh3'>Cheesecake</h3>
        <p>
          <input type="checkbox" name="4" id="ingre4" />
          <label htmlFor="ingre4">four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room temperature</label>
        </p>

        <p>
          <input type="checkbox" name="5" id="ingre5" />
          <label htmlFor="ingre5">1 cup (200g) <strong>granulated sugar</strong></label>
        </p>

        <p>
          <input type="checkbox" name="6" id="ingre6" />
          <label htmlFor="ingre6">1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature</label>
        </p>

        <p>
          <input type="checkbox" name="7" id="ingre7" />
          <label htmlFor="ingre7">1 teaspoon <strong>pure vanilla extract</strong></label>
        </p>

        <p>
          <input type="checkbox" name="8" id="ingre8" />
          <label htmlFor="ingre8">2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)</label>
        </p>

        <p>
          <input type="checkbox" name="9" id="ingre9" />
          <label htmlFor="ingre9">3 large <strong>eggs</strong>, at room temperature</label>
        </p>

        <p>
          <input type="checkbox" name="10" id="ingre10" />
          <label htmlFor="ingre10">topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </label>
        </p>

      </section>

      <section id="Instructions">

        <h2>Instructions</h2>

        <p><span>1</span> Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</p>

        <p><span>2</span> <strong>Make the crust</strong>: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</p>

        <p><span>3</span>  <strong>Make the filling</strong>: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</p>

        <p><span>4</span> <strong>Prepare the simple water bath (see note)</strong> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</p>

        <p><span>5</span> Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</p>

        <p><span>6</span> Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</p>


        <p><span>7</span> Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</p>


        <a href="#">Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</a>


      </section>

      </main>
      <footer>
      created by NattanJunior - devChallenges.io
      </footer>
    </div>
     
  )
}

export default App
