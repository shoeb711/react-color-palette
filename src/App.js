import './App.css';
import Palette from './Palette';
import seedColor from './seedColor';

function App(props) {
  return (
    <div>
      <Palette {...seedColor[2]}/>
    </div>
  );
}

export default App;
