import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import title from '../assets/fullName2.png';

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    );
  } else {
    return (
      <div className="container my-1">
        <h2>Welcome to</h2>
        <img className="fullLogo" src={title} alt="Full Name Title" />
        <h3>A marketplace for lover’s of the world’s most elusive Cryptids. 
          Despite the arguments by big zoology denying the existence of many of our magnificent beasts, 
          our team of skilled cryptozoologists have expertly collected specimens of all the world’s 
          most arcane organisms for your own home enjoyment. Everyone has kittens, but we are your only 
          source for animals that truly wow. </h3>
          <p></p>
        <h3>Peruse our marketplace to find the newest edition to your menagerie, 
          and create an account to purchase.</h3>
        <Link to={`/menagerie`}>
          <button className="menagerieBtn">View Our Menagerie</button>
        </Link>
      </div>
    )
  }
};

export default Home;
