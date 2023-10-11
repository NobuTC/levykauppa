import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to levykauppa</h1>
      <p>This is a simple shop.</p>
      <ul>
        <li>
          <Link to="/haku/nike">Search page</Link>
        </li>
        <li>
          <Link to="/album/1">Album page</Link>
        </li>
        <li>
          <Link to="/kategoria/1">Category page</Link>
        </li>
        <li>
          <Link to="/kori">Cart page</Link>
        </li>
        <li>
          <Link to="/maksu">Checkout page</Link>
        </li>
        <li>
          <Link to="/varasto">Add Album CD</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
