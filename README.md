# 🎫 Eventify — Premium Event Management

<div align="center">
  <img src="public/screenshots/hero.png" alt="Eventify Hero" width="100%" />
  <p><i>The Future of Event Management. Host, manage, and discover the best events in your city.</i></p>
</div>

---

## 🌟 Overview

**Eventify** is a sleek, full-stack event management platform designed with a high-end **glassmorphic UI**. Whether you're a customer looking for the next big hackathon or an admin managing a massive concert, Eventify provides a seamless, intuitive experience.

### 🎭 Dual-Portal Experience
- **Customer Portal**: Discover events, reserve seats, and manage your tickets.
- **Admin Command Center**: Complete control over event lifecycle, from drafts to live bookings.

---

## 📸 Screenshots

| 🏠 Landing Page | 📂 Categories |
| :---: | :---: |
| <img src="public/screenshots/hero.png" width="400" /> | <img src="public/screenshots/categories.png" width="400" /> |
| **User Login** | **Admin Authentication** |
| <img src="public/screenshots/login.png" width="400" /> | <img src="public/screenshots/admin.png" width="400" /> |

> [!NOTE]
> Please ensure you save the screenshots from the chat as `hero.png`, `categories.png`, `login.png`, and `admin.png` in the `public/screenshots/` directory to see them rendered here.

---

## 🚀 Core Features

- **⚡ Instant Discovery**: Filter events by category with neon-themed UI.
- **🔐 Secure Auth**: Robust authentication via NextAuth.js for both Roles.
- **🎟️ Smart Booking**: Real-time seat reservation with automatic transactional logic.
- **🎨 Premium Design**: Built with Tailwind CSS, Framer Motion, and Lucide Icons for a state-of-the-art feel.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PostgreSQL (Neon)](https://neon.tech/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)

---

## ⚙️ Quick Start

1. **Clone & Install**:
   ```bash
   git clone https://github.com/Vedupaul/Eventra.git
   cd Eventra
   npm install
   ```

2. **Database Setup**:
   Configure your `.env` with `DATABASE_URL` and `NEXTAUTH_SECRET`, then:
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

3. **Run Dev**:
   ```bash
   npm run dev
   ```

---

## 🔑 Admin Credentials
- **Email**: `admin@eventify.com`
- **Password**: `admin123`

<div align="center">
  Built with ❤️ by [Vedupaul](https://github.com/Vedupaul)
</div>

