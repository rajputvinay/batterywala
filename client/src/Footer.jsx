import "./footer.css"
export function Footer() {
  return (
    <footer className="foot">
      <div className="cont">
        <div className="ro">
          <div className="foot-col">
            <h4>Battery Wala</h4>
            <ul>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/dealer">Dealers</a>
              </li>
              <li>
                <a href="/batteryFinder">Battery finder</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Get Batteries</h4>

            <ul>
              <li>
                <a href="/products">Car</a>
              </li>
              <li>
                <a href="/products">Trucks</a>
              </li>
              <li>
                <a href="/products">E-Rickshaw</a>
              </li>
              <li>
                <a href="/products">Inverter</a>
              </li>
              <li>
                <a href="/products">Tractor</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Help & Support</h4>
            <ul>
              <li>
                <a href="/help">FAQ</a>
              </li>
              <li>
                <a href="/help">Shipping</a>
              </li>
              <li>
                <a href="/help">returns</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
