import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrancastionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTrancastionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrancastionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}
