import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      //o nome da table aqui tem que ser no plural
      //sempre tem que ter id
      transactions: [
        {
          id:1,
          title:'title 1',
          type: 'deposit',
          category: 'Dev',
          ammount: 6000,
          createdAt: new Date('2021-02-12 05:00:00'),
        },
        {
          id:2,
          title:'title 2',
          type: 'withdraw',
          category: 'Dev',
          ammount: 2500,
          createdAt: new Date('2021-02-13 08:20:00'),
        },
        {
          id:3,
          title:'title 3',
          type: 'deposit',
          category: 'Dev',
          ammount: 500,
          createdAt: new Date('2021-02-14 09:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);