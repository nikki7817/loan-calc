# 💰 Loan Calculator App

A modern, responsive single-page application built with **React** and **Material UI** that helps users calculate EMIs (Equated Monthly Installments), view a detailed amortization schedule, and convert EMI amounts into other currencies using real-time exchange rates.

## 🚀 Live Demo

👉 [View Live App](https://your-live-app-link.com)

---

## 🧼 Features

- **EMI Calculator**
  Calculates loan EMIs based on principal, interest rate, and loan tenure using the standard financial formula.

- **Amortization Schedule**
  Displays a detailed, month-by-month breakdown of the loan repayment, including interest and principal payments.

- **Real-Time Currency Conversion**
  Converts the EMI amount into over 160 currencies using live exchange rates from [ExchangeRate-API](https://www.exchangerate-api.com/).

- **Exchange Rate Table with Pagination**
  Browse a paginated list of exchange rates for all supported currencies.

- **Dark / Light Mode**
  Toggle between dark and light themes with smooth transitions, powered by Material UI’s theming system.

- **Responsive UI**
  Mobile-friendly layout with collapsible navigation for smaller screens.

- **404 Not Found & Error Pages**
  Graceful handling of unmatched routes and runtime errors.

---

## ⚙️ Tech Stack

- **React** (Hooks, Context API, Routing)
- **Material UI** (Theming, Components, Responsiveness)
- **Axios** (API calls)
- **ExchangeRate-API** (Live currency data)

---

## 📀 EMI Formula

> EMI = \[P × R × (1+R)^N] / \[(1+R)^N – 1]

Where:

- `P` = Loan Amount (Principal)
- `R` = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)
- `N` = Loan Tenure in Months

---

## 🔌 Setup & Usage

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/loan-calculator-app.git
   cd loan-calculator-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root and add your ExchangeRate API key:

   ```env
   VITE_EXCHANGE_API_KEY=your_api_key_here
   ```

4. Run the development server

   ```bash
   npm run dev
   ```

---

## 🧠 Project Highlights

- Custom React hooks (`useEmiCalculator`, `useExchangeRates`) for clean, reusable logic
- Context API for global state management (theme, currency)
- Modular and readable codebase
- Fully responsive and mobile-friendly design

---
