import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import ToDoForm from './components/ToDoForm';
import ToDos from './components/ToDos';

function App() {
  document.addEventListener('click', (e) => {
    if (e.target.parentElement !== document.querySelector('.hamburger') && e.target !== document.querySelector('#side-bar')) {
      const ele = document.getElementById('side-bar');
      ele.style.transform = ele.style.transform === `translate(0px)` ?
        `translate(${-1 * ele.offsetWidth}px)` : null;
    }
  });
  return (
    <>
      <Header />
      <SideBar />
      <ToDoForm />
      <ToDos />
      {/* <Footer /> */}
    </>
  );
}

export default App;
