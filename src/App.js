import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import MyNavbar from './components/MyNavbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import { Container } from 'react-bootstrap';
import TvShows from './components/TvShows.jsx';
import Saga from './components/Saga.jsx';
function App() {
  return (
   <>
   <MyNavbar/>
   <Container fluid className='bg-black text-light overflox-x-hidden franco'>
    <TvShows/>
    <Saga saga={'Totò e Peppino'} />
    <Saga saga={'X-MEN'} />
    <Saga saga={'Harry Potter'} />
   </Container>
   <MyFooter/>
   </>
  );
}

export default App;
