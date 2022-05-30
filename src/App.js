import logo from './logo.svg';
import './App.css';
import ToggledSearchBar from './components/ToggledSearchBar'

function App() {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
      <ToggledSearchBar />
    </div>
  );
}

export default App;
