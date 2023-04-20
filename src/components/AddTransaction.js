import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {

    const { addIncome } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome( { ...income, [e.target.name]: e.target.value } );
  }

  const onSubmitIncome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount*1,
    };
    addIncome(newIncomeTransaction);
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome} >
        <div className="input-group income">
          <input type="text" name="incomeText" placeholder="Add Income..." autoComplete="off" onChange={onChangeIncome} />
          <input type="number" name="incomeAmount" placeholder="Amount" autoComplete="off" onChange={onChangeIncome} />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
