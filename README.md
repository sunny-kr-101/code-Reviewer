# 📌 Code Reviewer  

**AI-Powered Code Review Tool**  
This project is an **AI-assisted code reviewer** that automatically analyzes submitted source code, identifies issues, suggests improvements, and generates detailed review feedback in markdown format.

It consists of a **Frontend** (UI for users to submit code) and a **Backend** (Node.js service that integrates with the Google Generative AI / other LLMs to review code).

---

## 🧠 Features

✔️ Accepts user code as input  
✔ Uses LLM to review code (correctness, logic bugs, performance, readability)  
✔ Generates structured feedback in Markdown  
✔ Highlights issues + suggestions + recommended corrected code  
✔ Backend API for integration with other clients  
✔ Frontend UI to submit code and display results

---

## 📁 Project Structure

code-Reviewer/
├── frontend/ # React/Vite frontend app
├── backend/ # Node.js backend (Express / AI integration)
├── .env # Environment variables (API keys, etc.)
├── README.md # This documentation
└── package.json

yaml
Copy code

---

## 🚀 Tech Stack

| Part | Technology |
|------|-------------|
| Frontend | React / JavaScript |
| Backend | Node.js / Express |
| AI Engine | Google Generative AI / Other LLM provider |
| Deployment | (Optional) Vercel / Heroku / Render |

---



---
cd backend
npm install
npm start
