```markdown
# DApp Backend

Ini adalah repository untuk backend dari DApp (Decentralized Application) yang dikembangkan oleh Laudza Kusuma. Backend ini terdiri dari smart contract dan konfigurasi untuk pengembangan dan deployment menggunakan Hardhat.

## 📁 Struktur Folder

```

DApp-Backend/
├── contracts/         # Smart contract Solidity
├── scripts/           # Script untuk deploy/interaksi
├── test/              # Test smart contract
├── hardhat.config.js  # Konfigurasi Hardhat
└── package.json

````

## 🚀 Cara Menjalankan Backend

1. **Clone repo ini:**
   ```bash
   git clone https://github.com/laudzakusuma/DApp-Backend.git
   cd DApp-Backend
````

2. **Install dependensi:**

   ```bash
   npm install
   ```

3. **Compile smart contract:**

   ```bash
   npx hardhat compile
   ```

4. **Deploy ke lokal (Hardhat Network):**

   ```bash
   npx hardhat node
   # lalu di terminal lain:
   npx hardhat run scripts/deploy.js --network localhost
   ```

## 💡 Frontend (Terpisah)

Frontend dari DApp ini berada di repository terpisah:

👉 [Frontend Repository](https://github.com/laudzakusuma/DApp-Frontend) *(ganti link kalau belum dibuat)*

Silakan clone dan jalankan frontend dari repo tersebut untuk mengakses tampilan antarmuka aplikasi ini.

## 📄 License

MIT License © 2025 Laudza Kusuma
```
