import React, { useState } from "react";

function App() {
  const [wallet, setWallet] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = () => {
    const isValid = /^0x[a-fA-F0-9]{40}$/.test(wallet);
    if (!isValid) {
      alert("❌ Please enter a valid wallet address (starts with 0x & has 40 hex characters)");
      return;
    }

    setLoading(true);

    // Simulated API call delay
    setTimeout(() => {
      setTransactions([
        {
          txId: "0x1",
          from: "0xabc",
          to: wallet,
          amount: "50",
        },
        {
          txId: "0x2",
          from: wallet,
          to: "0xdef",
          amount: "20",
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-8 px-4">
        
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 flex justify-center items-center gap-2">
          🚀 <span className="text-blue-600 dark:text-blue-400">BlockScan Explorer Lite</span>
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
          Built using React + Tailwind + BlockDAG Infra
        </p>

        {/* Wallet Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-xl mx-auto w-full">
          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Enter Wallet Address"
            className="flex-1 p-2 border rounded-md w-full text-black"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center text-blue-500 font-semibold mt-6">
            🔄 Loading transactions...
          </div>
        )}

        {/* Transactions Display */}
        {!loading && transactions.length > 0 && (
          <div className="mt-8 max-w-xl mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Transactions:</h2>
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="mb-4 p-3 border rounded-md bg-gray-50 dark:bg-gray-700"
              >
                <p><strong>TxID:</strong> {tx.txId}</p>
                <p><strong>From:</strong> {tx.from}</p>
                <p><strong>To:</strong> {tx.to}</p>
                <p><strong>Amount:</strong> {tx.amount} BDAG</p>
              </div>
            ))}

            {/* Transaction Stats */}
            <div className="mt-6 text-center text-md font-semibold">
              Total Transactions: {transactions.length} |
              &nbsp;Total BDAG:{" "}
              {transactions.reduce((sum, tx) => sum + parseInt(tx.amount), 0)} BDAG
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;













