import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, transactions }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name ? user.name : 'ysh!'}!</h1>
      <div className="user-details">
        <h2>User Details</h2>
        <p><strong>Name: Ysh</strong> {user?.name}</p>
        <p><strong>Email: ysh@gmail.com</strong> {user?.email}</p>
      </div>
      <div className="transactions">
        <h2>Transaction History</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No Transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
