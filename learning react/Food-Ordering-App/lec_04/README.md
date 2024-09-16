# Namaste Food

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
*   - RestauranCart
*     - Img
*     - Name of Res, Star Rating, cuisine, delevery tie
* Footer
* - Copyright
* - Links
* - Address 
* - Contact
 */



Two types of Export/Import 

- Default  Export/Import (But in Default only one file Import/Export at a time)

export default Component;
import Component from "path";

- Named Export/Import (Using named we can conduct multiple file Import/Export)

expot const Component;
import {Component} from "path";


...
# React Hooks
 (Normal JS utility function)       //who wrote this facebook developer
 // Two important utility function of Hooks
- useState() - used to create Superpowerful state Variable in react
- useEffect() - used to Handle side effect on the components fetching data, directly updating the DOM.
