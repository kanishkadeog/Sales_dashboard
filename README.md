# 📊 Sales Dashboard (Next.js + TypeScript + Tailwind + Recharts)

A modern Sales Dashboard built using **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The dashboard displays mock sales data for the years **2022, 2023, and 2024** using interactive charts.

---
## PROBLEM STATEMENT

Create a basic website with atomic structural principle with Next js

Add chart and mock-up the data, create a Sales for 2024, 2023, 2022. find random sales from kaggle and make a simple application that showing sales of that year

Enhancements

For further advancement, consider

- Custom Filter Input, add an input field to let users set their own sales threshold.

- API Integration, fetch real data from an API instead of using mockup data.

- Multiple Chart Types, add buttons to switch between bar, line, or pie charts using Recharts components.


Create this project requirement

- Using next js 15, typescript, tailwinds, etc.

- Create multiple component chart, you can use external library.

- Create an empty dashboard page

- Add the component inside the dashboard page

- Add proper readme, what did you do in the project and how to setup your project

Using your own GitHub and make a new repo and push everything you got in the there.

---

## 🚀 Features

- ✅ **Atomic Design Structure**
  - Atoms → Reusable small components (`Button`, `InputField`)
  - Molecules → Composite components (`ChartSelector`)
  - Organisms → Feature-level components (`SalesChart`)
- ✅ **Multiple Chart Types**
  - Bar Chart
  - Line Chart
  - Pie Chart
- ✅ **Mock Sales Data**
  - Random data sourced from Kaggle-like format (manually generated)
- ✅ **Responsive UI** using Tailwind CSS
- ✅ **Next.js App Router** structure

---


## Vercel Link :- 

https://sales-dashboard-kzp6omvxa-kanishkas-projects-95e27a37.vercel.app/dashboard

---


## 📂 Project Structure

src/
app/
layout.tsx
dashboard/
page.tsx
components/
atoms/
Button.tsx
InputField.tsx
molecules/
ChartSelector.tsx
organisms/
SalesChart.tsx
styles/
globals.css
tailwind.config.js
postcss.config.js
package.json
tsconfig.json

yaml
Copy code

---

## 📦 Technology Stack

| Technology   | Purpose                |
|--------------|------------------------|
| Next.js      | Frontend Framework     |
| TypeScript   | Type Safety            |
| Tailwind CSS | Styling Framework      |
| Recharts     | Chart Visualization    |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
cd sales-dashboard
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run the Project
bash
Copy code
npm run dev
🌐 Access the Dashboard
bash
Copy code
http://localhost:3000/dashboard
📊 Available Charts
Sales data for 2022, 2023, and 2024

Toggle between:

Bar Chart

Line Chart

Pie Chart

🔮 Future Enhancements
Feature	Description	Status
Custom Sales Filter	Allow user to input minimum sales threshold	⏳ Planned
API Integration	Fetch real-time sales data from API	⏳ Planned
Extra Chart Types	Area Chart, Radar Chart support	⏳ Planned

📚 How to Contribute
Fork the repository

Create a feature branch

Commit your changes

Create a pull request

🤝 Author
Your Name
Frontend Developer | React | Next.js | TypeScript

📜 License
This project is licensed under the MIT License.

yaml
Copy code

---

# 🔧 Git Setup & Push Instructions (Step-by-Step)

> Run the commands **exactly in this order** from your project directory in PowerShell or terminal.

### 1️⃣ Initialize Git
```bash
git init
2️⃣ Add all files to staging
bash
Copy code
git add .
3️⃣ Commit your work
bash
Copy code
git commit -m "Initial commit - Sales Dashboard Project"
4️⃣ Create a new GitHub repository
Go to https://github.com

Click New Repository

Name it: sales-dashboard

Choose Public

Click Create Repository

5️⃣ Link your local repo to GitHub
bash
Copy code
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sales-dashboard.git
🔄 Replace YOUR_USERNAME with your actual GitHub username.

6️⃣ Push to GitHub
bash
Copy code
git push -u origin main
🎉 Deployment Tip (Optional: Vercel)
To deploy easily:

bash
Copy code
npm install -g vercel
vercel


