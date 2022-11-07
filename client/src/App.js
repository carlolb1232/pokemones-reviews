
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import AddReview from './views/AddReview';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/add-review" element={<AddReview></AddReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
