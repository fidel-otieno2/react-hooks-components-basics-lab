import React from "react";

// Define the Navbar component
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// Define the Home component
function Home() {
  return (
    <div id="home">
      <h2>Welcome to my portfolio</h2>
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Define the App component that renders all three
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
