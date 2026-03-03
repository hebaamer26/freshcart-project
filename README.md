# FreshCart - E-commerce Platform

## Project Description
FreshCart is a modern, full-featured e-commerce web application designed to provide a seamless and intuitive shopping experience. It offers a comprehensive set of features tailored for both customers and administrators, ensuring efficient product discovery, secure cart management, and seamless checkout processes. The project emphasizes high performance, responsive design, and robust state management.

## Features
- **User Authentication:** Secure sign-up, login, password reset, and profile management powered by NextAuth.
- **Product Discovery:** Browse products with intuitive category and brand filtering. Detailed product pages include interactive image galleries.
- **Shopping Cart & Wishlist:** Easily add items to a cart or wishlist, manage product quantities, and review selected items.
- **Order Management:** A streamlined and secure checkout process with a dedicated page for users to view their order history.
- **Secure Data Entry:** Robust client-side validation using React Hook Form and Zod to ensure secure and correct data submission.
- **Responsive Design:** A fully responsive, modern, and highly polished UI crafted with Tailwind CSS and HeroUI.
- **State Management:** Hybrid state management using Redux Toolkit for global client state and TanStack React Query for efficient data fetching, caching, and background synchronization.
- **Instant Feedback:** Real-time user notifications and alerts triggered by React Toastify and SweetAlert2.

## Technologies Used
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Font Optimization)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [TanStack Query](https://tanstack.com/query)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Networking:** [Axios](https://axios-http.com/)
- **UI Components:** React Icons, React Image Gallery, FontAwesome
- **Notifications:** React Toastify, SweetAlert2

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd freshcart
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   *(Alternatively, use `yarn install` or `pnpm install` if you prefer.)*

3. **Environment Setup:**
   Create a `.env` or `.env.local` file in the root directory and add the necessary environment variables:
   ```env
   # Example .env.local
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_super_secret_key
   NEXT_PUBLIC_API_URL=your_api_endpoint
   ```

## Usage
Once the installation is complete and the environment variables are configured, you can start the development server.

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

3. **Build for production:**
   To create an optimized production build, run:
   ```bash
   npm run build
   npm run start
   ```

## Screenshots

> *Add your screenshots here to showcase the application's clean UI and features.*

<!-- Example Placeholders: -->
<!-- ![Home Page](./public/screenshots/home.png) -->
<!-- ![Cart Page](./public/screenshots/cart.png) -->
<!-- ![Checkout Page](./public/screenshots/checkout.png) -->

## License
This project is licensed under the [MIT License](LICENSE).

## Contact / Author
- **Author:** Heba Amer
- **Email:** *[Your Email Address]*
- **GitHub:** [https://github.com/hebaamer26](https://github.com/hebaamer26)
