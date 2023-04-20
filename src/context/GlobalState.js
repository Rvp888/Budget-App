
import React, { createContext, useReducer } from 'react';

const initialState = {
    incomeTransactions: [
        { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
        { id: 2, incomeText: "Salary", incomeAmount: 5000 },
        { id: 3, incomeText: "Bonus", incomeAmount: 13000 },
    ],
    expenseTransactions: [
        { id: 4, expenseText: "Rent", expenseAmount: 1000 },
        { id: 5, expenseText: "Bank", expenseAmount: 2000 },
        { id: 6, expenseText: "Clothes", expenseAmount: 500 },
    ]
}