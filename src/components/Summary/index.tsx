import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { coinFormat } from '../../utils/coinFormat';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((count, transaction) => {
    if(transaction.type === 'deposit') {
      count.deposits += transaction.ammount;
      count.total += transaction.ammount;
    } else {
      count.withdraws += transaction.ammount;
      count.total -= transaction.ammount;
    }

    return count;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas "/>
        </header>
        <strong>
          {coinFormat(summary.deposits)}
        </strong>
      </div>  
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas "/>
        </header>
        <strong>
          -{coinFormat(summary.withdraws)}
          </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas "/>
        </header>
        <strong>
        {coinFormat(summary.total)}
        </strong>
      </div>
    </Container>
  )
}