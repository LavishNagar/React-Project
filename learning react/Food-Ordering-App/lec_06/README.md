# Food-Ordering-App

# Topic cover
  - Finding the path
  - useEffect : When is this called = After every Render of that component (Ex = Everytime Header or Body or RestaurantCart component Render useEffect called)
  - CreateBrowsing 
  - ErrorHandling
  - Routing 

# Important Note
- Never use useState variable outside of your component. if you write outside then it will through an error
- According to react documentation Never use your useState hook inside a condition,look because (It does not make sence).
- The state variable to be created inside the functional component on the higher level (that means useState write on the top)

- Never link the about us with using anchor tag <a href="/about">About Us</a>
  - Why? - Because the whole page refresh when i click on About Us. (But don't want to refresh whole page and   rout the same page)  How?
  - Than instead of use of anchor tag. I will use Link which come from react-router-dom.
   - when we use link there is no need to load whole page.  <Link to="/">Home</Link> (That means Link reload the component only not the whole page . And This is known as single page application)

# Types of Routing in web app
 - Client side routing (We are not making the network call while moving the page because all the component already loaded in app)
 - Server side routing (But here is network call by API)

 # Dynamic Routing (When we click on restaurant than it will move on new page)
  - React-routing-dom
  - 
  
