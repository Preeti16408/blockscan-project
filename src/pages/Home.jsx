import React, { useState } from 'react';

const Home = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (walletAddress.trim() === '') return;

    // Simulate transactions (can replace with real API later)
    const dummyTxns = [
      {
        hash: '0x123...abc',
        to: '0x456...def',
        from: walletAddress,
        amount: '0.5 BDAG',
        time: '2 mins ago',
      },
      {
        hash: '0x789...ghi',
        to: '0x999...xyz',
        from: walletAddress,
        amount: '1.2 BDAG',
        time: '10 mins ago',
      },
    ];

    setTransactions(dummyTxns);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">🚀 BlockScan Explorer Lite</h1>
      <p className="text-center text-gray-600 mb-6">
        Built using React + Tailwind + BlockDAG Infra
      </p>

      <form onSubmit={handleSearch} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <label htmlFor="wallet" className="block mb-2 font-semibold text-gray-700">
          Enter Wallet Address
        </label>
        <input
          type="text"
          id="wallet"
          className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="0xABC123..."
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {transactions.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Transactions</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Txn Hash</th>
                <th className="p-2 border">From</th>
                <th className="p-2 border">To</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{txn.hash}</td>
                  <td className="p-2 border">{txn.from}</td>
                  <td className="p-2 border">{txn.to}</td>
                  <td className="p-2 border">{txn.amount}</td>
                  <td className="p-2 border">{txn.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;






