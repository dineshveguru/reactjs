import logo from "./logo.svg";
// import "./App.css";
import "./styles.css";
function Header() {
  return (
    <div className="nav-bar">
      <p>react logo</p>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <h1>reasons i'm exicted to learn react</h1>
      <ul>
        <li>its a popular library</li>
        <li>it is more likely to get a job</li>
        <li>it is user friendly</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <small>all rights reserved to dinesh</small>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
