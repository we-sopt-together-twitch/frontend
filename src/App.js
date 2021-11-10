import "./App.css";

function App() {
  return (
    <div className="App">
      <Button>asdf</Button>
    </div>
  );
}

function Button(props) {
  return <button>{props.children}</button>;
}

export default App;
