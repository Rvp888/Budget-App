import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransactions from './ExpenseTransactions';


const ExpenseList = () => {

    const { expenseTransactions } = useContext(GlobalContext);


    return (
        <div className='transactions transactions-expense'>
          <h2>Transaction History</h2>
          <ul className='transaction-list'>
            <li className='transaction'>
                <span className='transaction-text'>Rent</span>
                <span className='transaction-amount'>$500</span>
                <button className='delete-btn'>
                    <i className='fas fa-trash'></i>
                </button>
            </li>
          </ul>
        </div>
      )
}

export default ExpenseList;
