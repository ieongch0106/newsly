import Navbar from './Navbar';
import NewsList from './NewsList';
import './index.css';

function App() {

  return (
    <>
      <Navbar />
      <NewsList category='Breaking News' />
      <NewsList category='Politics' />
      <NewsList category='Business' />
      <NewsList category='Technology' />
      <NewsList category='Science' />
      <NewsList category='Sports' />
      <NewsList category='World' />
      <NewsList category='Entertainment' />
    </>
  );
}

export default App;
