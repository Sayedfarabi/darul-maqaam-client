import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
