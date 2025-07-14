
# 💸 **Expense Tracker** – Fullstack App with Analytics

A professional, fullstack **expense tracking and analytics** web app built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **next-auth**.

**Built for personal finance management and visual insights. Fully responsive and production-ready.**


---

## 🚀 Features

- 🔐 **Authentication** (Google login via `next-auth`)
- 📥 Add, update, and delete expenses
- 📊 View weekly/monthly analytics with interactive charts
- 🏷️ Categorize expenses (food, rent, utilities, etc.)
- 📅 Filter expenses by date, tags, or category
- 📱 Fully responsive (Mobile/Desktop)
- 🌓 Dark mode (coming soon)
- 📤 CSV Export (coming soon)

---

## 📸 Preview
Coming soon
<!--
> _(Add your screenshot here when ready)_  
> Example:  
> ![Dashboard Screenshot](./public/preview.png)
-->
---

## 🛠️ Tech Stack

| Layer     | Tools                          |
| --------- | ------------------------------ |
| Frontend  | Next.js 15 (App Router), React |
| Styling   | Tailwind CSS, shadcn/ui        |
| Backend   | API Routes (Next.js)           |
| Auth      | next-auth (Google OAuth)       |
| Database  | PostgreSQL + Prisma ORM        |
| Hosting   | Vercel                         |
| Analytics | Recharts / Chart.js            |
| Dev Tools | ESLint + Prettier + TypeScript |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Akash-152000/Expense-tracker.git
cd Expense-tracker
```


### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file:

```env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-postgres-db-url
```

### 4. Run the App

```bash
npm run dev
```

---

## 🧠 Project Structure

```
├── app/
│   ├── layout.tsx         # App layout
│   ├── page.tsx           # Home/Dashboard
├── components/            # UI Components
├── lib/                   # Utilities, helpers
├── styles/                # Tailwind CSS styles
├── prisma/                # DB schema and seed
├── public/                # Static assets
```

---

## ✨ Upcoming Features

- [ ] Dark mode toggle
- [ ] Recurring expense support
- [ ] Email reports & reminders
- [ ] Budget planning module
- [ ] Progressive Web App (PWA)

---

## 📄 License

MIT © [Akash Yadav](https://github.com/Akash-152000)

---

## 🧑‍💻 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

> Follow my build journey on [LinkedIn](#) and [Twitter](#)


---
