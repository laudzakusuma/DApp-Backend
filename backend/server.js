const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend connected successfully!' });
});

// Get ETH balance
app.post('/api/balance', async (req, res) => {
  try {
    const { address } = req.body;
    
    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    // Using Ethereum mainnet (you can change to testnet)
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    );
    
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    
    res.json({ 
      address, 
      balance: balanceInEth,
      balanceWei: balance.toString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get transaction count
app.post('/api/txcount', async (req, res) => {
  try {
    const { address } = req.body;
    
    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    );
    
    const txCount = await provider.getTransactionCount(address);
    
    res.json({ 
      address, 
      transactionCount: txCount 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});