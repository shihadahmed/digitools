# 🚀DigiTools Landing Page

A modern, pixel-perfect, and fully responsive landing page built with **React**, **Tailwind CSS**, and **daisyUI**. This project was developed as part of my frontend development assignment to demonstrate component-based architecture, utility-first styling, and UI component libraries.

---

## 🛠️ Tech Stack & Badges

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyui-%235A0EF8.svg?style=for-the-badge&logo=daisyui&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-🚀-orange?style=for-the-badge)

---

## 📌 Project Overview & My Development Process

This project is a clean and vibrant landing page for a digital product platform called **DigiTools**. I focused on replicating the exact purple-themed UI design while combining the power of Tailwind CSS with daisyUI component classes to keep the code clean and scalable.

Here is a quick look at how I planned and executed this project:

### 🧩 1. Component-Based Architecture
Instead of dumping all the HTML into one file, I broke the design down into modular, reusable React components under the `src/Components/` directory. This keeps the codebase highly organized, scalable, and easy to maintain:

* **`Navbar.jsx`** — Responsive sticky header with mobile-friendly dropdown navigation.
* **`Hero.jsx`** — Engaging main introduction banner with dynamic call-to-action buttons.
* **`Stats.jsx`** — Eye-catching purple banner highlighting key metrics and achievements (50K+, 200+, 4.9).
* **`Products.jsx`** — A grid showcases of 6 premium digital tools displayed through dynamic cards.
* **`HowItWorks.jsx`** — A step-by-step onboarding guide ("Get Started In 3 Steps") for intuitive user experience.
* **`Pricing.jsx`** — Clean, simple, and transparent pricing table for different tiers.
* **`CTA.jsx`** — High-conversion bottom banner ("Ready To Transform Your Workflow?") to drive user engagement.
* **`Footer.jsx`** — Modern dark footer containing essential navigation links and social media icons.

### ⚡ 2. daisyUI Integration & Environment Setup
I initialized the project using **Vite** for ultra-fast performance. Next, I installed Tailwind CSS and added the **daisyUI** plugin to the `tailwind.config.js` file. This allowed me to use built-in classes like `btn`, `navbar`, and custom theme colors, which drastically reduced the amount of boilerplate code.

### 🔔 3. User Notifications with React Toastify
To elevate the user experience (UX) and add real-time feedback, I integrated **React Toastify**. This tool is crucial for displaying clean, dynamic toast notifications during major user interactions:
* **User Authentication:** Shows success or error popups instantly during login attempts.
* **Order Management:** Provides immediate visual feedback when a user places an order or triggers a checkout event.
* **Order Compilation:** Displays real-time progress or completion status notifications when an order processes successfully.

### 📱 4. Responsive Logic & Interactivity
* **Mobile-First Design:** Used Tailwind's responsive screen prefixes (`md:`, `lg:`) alongside daisyUI's utility classes to ensure the layout transitions smoothly from mobile devices to large desktop monitors.
* **State Interaction:** Implemented React's `useState` hook in the navbar to handle the mobile hamburger menu toggle dynamically.
* **Modern Icons:** Used `lucide-react` to display crisp, lightweight SVG icons.

---

## 📂 Project Structure

```text
src/
├── assets/            # Images, SVG Icons, and static assets
├── Components/        # UI Section Components
│   ├── Navbar/        # Sticky Header & Mobile Dropdown
│   │   └── Navbar.jsx
│   ├── Hero/          # Main Introduction Section with Banner Image
│   │   └── Hero.jsx
│   ├── Stats/         # Numbers & Achievements Bar (50K+, 200+, 4.9)
│   │   └── Stats.jsx
│   ├── Products/      # Premium Digital Tools (6 Dynamic Cards)
│   │   └── Products.jsx
│   ├── HowItWorks/    # Steps Guide Section (Get Started In 3 Steps)
│   │   └── HowItWorks.jsx
│   ├── Pricing/       # Simple & Transparent Pricing Table
│   │   └── Pricing.jsx
│   ├── CTA/           # "Ready To Transform Your Workflow?" Bottom Banner
│   │   └── CTA.jsx
│   └── Footer/        # Dark Footer with Navigation & Social Links
│       └── Footer.jsx
├── App.css            # Component specific styles
├── App.jsx            # Main Parent Component (Combines all sections)
├── index.css          # Core CSS with Tailwind & Font Directives
└── main.jsx           # App Entry Point & React DOM rendering