import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/home';
import Shop from './components/Shop/shop';
import About from './components/About/about';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
