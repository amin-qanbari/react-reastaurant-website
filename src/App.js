import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import { productData , productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <Hero/> 
     <Products heading='Choose your favorite' data={productData}/>
     <Feature/>
     <Products heading='Sweet Treats for you' data={productDataTwo}/>
     <Footer/>
    </div>
  );
}

export default App;
