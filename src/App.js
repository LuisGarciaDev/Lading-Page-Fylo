import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Barra';
import Footer from './components/Footer';
import Home from './components/Home';
import Home2 from './components/Home2';
import Newsletter from './components/Newsletter';
import Productive from './components/Productive';
import Testimony from './components/Testimony';
import { Div } from './styles/ThemeStyled';


function App() {
  return (<Div>
    <Barra />
    <Home />
    <Home2 />
    <Productive />
    <Testimony />
    <Newsletter />
    <Footer />
  </Div>
  );
}

export default App;
