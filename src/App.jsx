import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SingleProduct from "./Component/SingleProduct";
import Cart from "./Component/Cart";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import WishList from "./Component/WishList";

function App() {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products/";
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage Producdata={data} />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
