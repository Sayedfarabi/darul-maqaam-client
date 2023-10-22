import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import useTitle from './hooks/useTitle';

function App() {
  useTitle("Home")
  return (
    <div className='font-latoSerif'>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
