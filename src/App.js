// import PetContextProvider from './context/PetContext'
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MainRoutes from './routes/MainRoutes';
import './styles/style.css'
function App() {
  return (
    <ThemeProvider>
      <React.Fragment>
        <MainRoutes />
      </React.Fragment>
    </ThemeProvider>

  );
}

export default App;
