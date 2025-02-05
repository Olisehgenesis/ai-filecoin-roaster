# FileCoin AI Roaster 🔥

AI-powered meme generator that roasts your images using GPT-4 Vision and stores them on IPFS via FileCoin.

## Setup

### Server Setup
1. Navigate to server directory:
```bash
cd server
```

2. Create `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key
WEB3_STORAGE_TOKEN=your_web3_storage_token
W3_EMAIL=your_email
PORT=3001
```

3. Install dependencies & start server:
```bash
npm install
node index.js
```

### Frontend Setup
1. Create `.env` in root directory:
```env
VITE_BACKEND_URL=http://localhost:3001
```

2. Install dependencies & start dev server:
```bash
npm install
npm run dev
```

## Environment Variables

### Server
- `OPENAI_API_KEY`: Get from [OpenAI Platform](https://platform.openai.com/api-keys)
- `WEB3_STORAGE_TOKEN`: Get from [Web3.Storage](https://web3.storage)
- `W3_EMAIL`: Your email for Web3.Storage
- `PORT`: Server port (default: 3001)

### Frontend
- `VITE_BACKEND_URL`: Backend API URL

## Features
- Image upload to IPFS
- AI-generated roasts using GPT-4
- Local storage persistence
- Share & download capabilities

## Tech Stack
- Frontend: React + Vite
- Backend: Express
- Storage: FileCoin/IPFS
- AI: OpenAI GPT-4 Vision

## Developer
[@illmindofbanana](https://github.com/illmindofbanana) - Oliseh Genesis