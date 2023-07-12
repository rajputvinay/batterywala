import { Vehicle } from "./vehicles";
import "./body.css";
import { Link } from "react-router-dom";
import { New_Arrival } from "./New-Arrival";
export function Body() {
  return (
    <>
      <section className="body">
        <div className="popup">
          <h2>Find the Perfect</h2>
          <h1>Battery within Seconds</h1>
          <p>KNOW MORE ABOUT YOUR BATTERY</p>
          <Link to="/products">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </section>
      <Vehicle />
      <New_Arrival />
    </>
  );
}
