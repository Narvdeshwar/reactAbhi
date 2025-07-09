#Start the project 
## git clone
## project open in terminal of vsCode 
## run the  project using - npm start 

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


# Redux ToolKit
- install @reduxjs/ToolKit and react-redux
- Build our store 
- connect our store to our app 
- Slice(cartSlice)
- dispatch (action)
- selector 

##chunking ,
 code splitting ,
 dynamic bundles,
 lazy loading,ondemand loading
 on demand loading
 dynamic import - smaller bundles of each file

 # Types of Testing(developer)
 - Unit testing 
 - Integration Testing
 - End to End Testing - e2e testing

 # Setting up testing Our App
 - install react  testing library
 - install jest
 - install babel dependancies
 - configure babel
 - configure Parcel config file to defaults babel transpilation
 - jest configuration - npm init jest@latest
 - intall jsdom library