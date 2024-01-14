import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './Pages/Home'
import CartContextProvider from './contexts/useCartContext';
import Modal from './components/UI/Modal';
import { useContext } from 'react';
import ModalContextProvider, { modalContext } from './contexts/useModalContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <ModalContextProvider>
          <ModalComponent />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </ModalContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  )
}

function ModalComponent() {
  const { isOpen, content, toggle } = useContext(modalContext);
  
  return (
    <Modal isOpen={isOpen} close={toggle}>
      { content }
    </Modal>
  )
}

export default App
