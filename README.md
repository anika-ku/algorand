onchain will
A simple, secure on-chain will for the Algorand blockchain. This dApp allows you to designate a beneficiary who can claim your assets after a set period of inactivity, ensuring your digital legacy is protected and your final wishes are carried out on-chain.

✨ Features
Trustless Execution: Your will is executed automatically by a smart contract, removing the need for intermediaries.

Liveness Check: The will-maker can periodically "check in" with the contract to reset the timer, preventing premature execution.

Beginner-Friendly: A clear, simple smart contract built to demonstrate core Algorand concepts like global state and access control.

Secure & Transparent: All actions are public and verifiable on the Algorand blockchain.

🚀 Getting Started
This guide will help you get your local development environment set up and deploy the smart contract to the Algorand TestNet.

Prerequisites
You'll need a few tools to get started:

AlgoKit

Git

Docker

Node.js

💻 Quick Start
Clone the Repository

git clone onchainwill
cd onchainwill


Install Dependencies

algokit bootstrap


Configure your Mnemonic
Open the smart_contracts/index.ts file and paste your 25-word mnemonic in the designated area. WARNING: Never use a mnemonic with real funds for development!

Deploy the Smart Contract

algokit project deploy testnet
algokit-avm-vscode-debugger).




