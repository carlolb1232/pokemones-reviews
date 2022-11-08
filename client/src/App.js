
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import AddReview from './views/AddReview';
import Reviews from './views/Reviews';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/add-review/:idPokemon" element={<AddReview></AddReview>}></Route>
        <Route path='/reviews/:idPokemon' element = {<Reviews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
