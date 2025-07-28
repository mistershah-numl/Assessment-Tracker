# Assessment Tracker

![L.E.A.D.Better 360 Homepage](https://api.microlink.io?url=https://leadbetter-delta.vercel.app/&screenshot=true&embed=screenshot.url)


**Assessment Tracker** is a powerful and interactive performance evaluation tool designed to facilitate 360-degree feedback and team assessments in a corporate or organizational setting. This application enables managers, team members, and HR to collaborate on leadership assessments, coaching plans, and continuous improvement in a user-centric and data-informed environment.

## 🌐 Live Demo

Experience the full application at:  
👉 [https://leadbetter-delta.vercel.app/](https://leadbetter-delta.vercel.app/)

---

## ✨ Features

- **Role-Based Pages**  
  Distinct pages and dashboards tailored for Admins, Managers, and Team Members, each with access to specific features and tools.

- **360-Degree Feedback Flow**  
  Structured workflows to rate colleagues using dynamic matrices, rate leadership behaviors, and provide coaching or development suggestions.

- **Team & Assessment Management**  
  Create, edit, and view teams and assessments. Assign members, define roles, and track feedback rounds easily.

- **Modern UI with Theme Support**  
  A clean, minimal, and highly responsive interface powered by Tailwind CSS and ShadCN UI, supporting dark/light themes.

- **Dialog-Based Interaction**  
  All critical actions—such as creating assessments, editing team data, scheduling coaching sessions, and sending feedback—are implemented with elegant modal dialogs.

- **Matrix Visualization**  
  Beautiful matrix-style component for visualizing ratings across multiple team members and leadership dimensions.

- **Email Integration UI**  
  Interfaces to send follow-up or feedback-related emails directly from the app.

- **Mobile Responsive**  
  Fully responsive layout that works seamlessly on desktop, tablet, and mobile screens.

---

## 🛠 Technologies Used

- **Next.js 15 (App Router)** – Server components, layouts, and routing
- **React 19** – Component-based architecture
- **Tailwind CSS** – Utility-first styling with custom themes
- **shadcn/ui** – Component library built on Radix UI
- **Lucide Icons** – Consistent and clean SVG icons
- **TypeScript** – For type safety and developer experience
- **Vercel** – Seamless deployment and hosting

---

## 📁 Project Structure Overview

- `app/` – Contains route-based logic for login, dashboards, public pages, etc.
- `components/` – UI and feature-specific reusable components
- `hooks/` – Custom React hooks for utilities like toast and mobile checks
- `lib/` – Helper functions for data processing and exports
- `public/` – Static assets (images, icons)
- `styles/` – Global and component-based CSS
- `tailwind.config.ts` – Tailwind customization
- `tsconfig.json` – TypeScript configuration

---

## 🚀 Getting Started

To run this project locally, follow these instructions:

### Prerequisites

- Node.js (v18+ recommended)
- pnpm, npm, or yarn (we use `pnpm` in this project)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mistershah-numl/Assessment-Tracker.git
   cd Assessment-Tracker
