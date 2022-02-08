import Frame from './components/Frame'
import { BrowserRouter } from 'react-router-dom'
import './App.less'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Frame />
      </BrowserRouter>
    </div>
  );
}

export default App;
