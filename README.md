# Eventify - Event Management Platform

Eventify is a full-stack, premium Event Management Platform built with Next.js, Prisma, and PostgreSQL (Neon). It features dual-portal access for Admins and Customers, vibrant glassmorphic UI design, and robust seat reservation logic.

## 🚀 Features

- **Dual Authentication**: Separate sleek portals for Admin and Customer login using NextAuth.js.
- **Admin Command Center**: Create, edit, and manage events with status controls (Draft/Published).
- **Event Discovery**: Search and filter events by category with a modern neon aesthetic.
- **Booking System**: Transactional ticket booking with automatic seat decrement.
- **Personal Dashboards**: Manage your bookings and wishlist through a dedicated user portal.
- **Premium UI**: Dark-mode focused design with glassmorphism, gradients, and smooth animations.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15+, Tailwind CSS v3, Framer Motion, Lucide Icons.
- **Backend**: Next.js API Routes, NextAuth.js (JWT).
- **Database**: PostgreSQL (via Neon), Prisma ORM.

## ⚙️ Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**: 
   Create a `.env` file with your `DATABASE_URL` and `NEXTAUTH_SECRET`.

3. **Database Setup**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Launch Application**:
   ```bash
   npm run dev
   ```
