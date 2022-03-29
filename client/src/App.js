import './App.css';
//In react-router-dom v6, "Switch" is replaced by routes "Routes". 
//solucao do STACKOVERFLOW abaixo:
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/home'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {

  //5min 57 aula 04

  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/createpost">Create a Post</Link>
          <Link to="/">Home Page</Link>
        </div>
        <Routes>    
               <Route path="/" exact element={<Home/>}/>
               <Route path="/createpost" exact element={<CreatePost/>}/>
               <Route path="/post/:id" exact element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
