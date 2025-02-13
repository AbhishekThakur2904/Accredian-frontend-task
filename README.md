Here’s a professional `README.md` for your "Refer and Earn" frontend project. This document provides an overview of the project, setup instructions, and other relevant details for developers and stakeholders.

---

# Refer and Earn Frontend

![Project Banner](https://via.placeholder.com/1200x400.png?text=Refer+and+Earn+Frontend)  
*Empower your community, earn rewards, and grow together!*

---

## 📝 Table of Contents
- [Introduction](#-introduction)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Setup and Installation](#-setup-and-installation)
- [Folder Structure](#-folder-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Introduction

The **Refer and Earn Frontend** is a modern, interactive web application designed to encourage users to refer friends to educational courses while earning rewards. This project features a sleek user interface, smooth animations, and a seamless user experience to make the referral process engaging and rewarding.

---

## 🚀 Features

- **Interactive UI**: Modern design with animations and hover effects.
- **Referral Form**: Easy-to-use form for submitting referrals.
- **Rewards System**: Display of rewards tiers and progress.
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
- **Error Handling**: Real-time validation and error messages.
- **Email Notifications**: Integration with backend for email notifications.
- **Dynamic Content**: Animations and dynamic updates for better engagement.

---

## 🛠 Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion (for animations)
  - Lucide React (for icons)
  - React Toastify (for notifications)

- **Backend Integration**:
  - RESTful APIs
  - RTK Query for API Services

- **Development Tools**:
  - Vite (for fast development)
  - ESLint & Prettier (for code quality)
  - Git & GitHub (for version control)

---

## 🛠 Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/refer-and-earn-frontend.git
   cd refer-and-earn-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_API_BASE_URL=http://your-backend-api-url
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**:
   Visit `http://localhost:3000` to view the application.

---

## 📂 Folder Structure

```
refer-and-earn-frontend/
├── public/                  # Static assets
├── src/           
│   ├── components/          # Reusable UI components
│   ├── services/            # API services
│   ├── styles/              # Global styles
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Entry point
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🖥 Usage

### For Users
1. Visit the homepage and click **"Refer Now"**.
2. Fill out the referral form with your details and your friend's details.
3. Submit the form and earn rewards for successful referrals.

### For Developers
- Use the `ReferralModal` component to handle referral submissions.
- Integrate with the backend API for saving referrals and sending email notifications.
- Customize the UI using Tailwind CSS classes.

---

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please read our [Contribution Guidelines](CONTRIBUTING.md) for more details.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Lucide Icons](https://lucide.dev/) for the beautiful icons.

---

## 📧 Contact

For any questions or feedback, feel free to reach out:

- **Abhishek Thakur**  
- **Email**: abhishekthakur2904@gmail.com 

---

Made with ❤️ by **Abhishek Thakur**  
🚀 Happy Coding!

---
