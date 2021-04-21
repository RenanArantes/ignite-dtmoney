import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import { Container, TransactionTypeContainer, RadialBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
        />
        <input 
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <RadialBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadialBox>
          <RadialBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadialBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>  
    </Modal>
  )
}