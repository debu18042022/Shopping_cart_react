import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Contextdata } from "./MyContext";

export default function NavBar() {
  const [cart ,set_cart,Amount,set_total_amount]= useContext(Contextdata);
  let amount =0;
 cart.map((item) => {
  amount += (item.quantity * item.price)
  })
  console.log("amount is "+amount);
  set_total_amount(amount);
 
 console.log(cart.length);
  return (
    <div>
   
      <nav>
        <div className="nav_image_container">
          <img
            src="https://i.pinimg.com/736x/cb/e5/a3/cbe5a3ea61bf631f200f4ca00041eb34.jpg"
            alt="abc"
          ></img>
        </div>
        <div className="navbar_links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="">About Us</NavLink>
            <NavLink to="">Become a Seller</NavLink>
            <NavLink to="bill"><i class="fa-solid fa-cart-plus">{cart.length}</i></NavLink>
        </div>
       
      </nav>
    </div>
  );
}
