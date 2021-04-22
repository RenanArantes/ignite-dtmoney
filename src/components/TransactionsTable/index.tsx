import { useTransactions } from '../../hooks/useTransactions';
import { coinFormat } from '../../utils/coinFormat';
import { dateFormat } from '../../utils/dateFormat';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>          
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {coinFormat(transaction.ammount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {dateFormat(transaction.createdAt)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}