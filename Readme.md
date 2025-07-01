#start react

#Parcel
-Dev Build
-local Server
-HMR = Hot Module Replacement
- file watching Algorithms - written in c++
-caching - faster Builds
-image optimization
-minification
-bundling
-compress
-consistance hashing
-code splitting
-Error handling
-different bundling - supports old browser
-Diagonostics
-tree shaking - Parcel can removed unused code
-different dev and prod bundles

//structure of code
/*

Header
logo
nav item
Body 
search
restaurantContainer
restaurantcard
Footer
copywrite
link
Address
contact
*/


//*****////***
two types of export/defaults

->Defaults Export/Defaults

defaults export Header;
import Header from "path"

->Named Export/Defaults

export const Header; 
import {header} from "path"


  ## React hook - useEffect
       
        useEffect(()=>{
        console.log("use Effect called");

    },[]);

    console.log("body render")  

    # state React Variable define 
### whenever State Variable  update,react triggers a reconcillation cycle(re-render the components)

# 2 types of Routing in web pages
- client side Routing
- server side Routing

