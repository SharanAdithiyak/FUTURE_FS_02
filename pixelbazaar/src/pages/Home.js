import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CartModal from "../components/CartModal";
import AuthModal from "../components/AuthModal";

const getCartFromStorage = () => JSON.parse(localStorage.getItem("pixelbazaarCart") || "[]");
const getUserFromStorage = () => localStorage.getItem("pixelbazaarUser") || "";
const getUsersFromStorage = () => JSON.parse(localStorage.getItem("pixelbazaarUsers") || "{}")

const Home = () => {
  // Cart state
  const [cart, setCart] = useState(getCartFromStorage());
  const [cartOpen, setCartOpen] = useState(false);
  // Auth state
  const [userEmail, setUserEmail] = useState(getUserFromStorage());
  const [authOpen, setAuthOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const [showSignIn, setShowSignIn] = useState(true);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("pixelbazaarCart", JSON.stringify(cart));
  }, [cart]);

  // Persist user to localStorage
  useEffect(() => {
    if (userEmail) localStorage.setItem("pixelbazaarUser", userEmail);
    else localStorage.removeItem("pixelbazaarUser");
  }, [userEmail]);

  // Cart logic
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.addId);
      if (existing) {
        return prev.map((i) =>
          i.id === item.addId ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [
          ...prev,
          {
            id: item.addId,
            name: item.addName,
            price: item.addPrice,
            qty: 1,
          },
        ];
      }
    });
    setCartOpen(true);
  };
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const handleCheckout = () => {
    setCart([]);
  };
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Auth logic
  const handleSignIn = ({ email, password }) => {
    const users = getUsersFromStorage();
    if (!users[email] || users[email].password !== password) {
      setAuthError("Invalid credentials.");
      return;
    }
    setUserEmail(email);
    setAuthOpen(false);
    setAuthError("");
  };
  const handleSignUp = ({ firstName, lastName, email, phone, password, confirmPassword }) => {
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      setAuthError("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setAuthError("Passwords do not match.");
      return;
    }
    const users = getUsersFromStorage();
    if (users[email]) {
      setAuthError("User already exists.");
      return;
    }
    users[email] = { password, firstName, lastName, phone };
    localStorage.setItem("pixelbazaarUsers", JSON.stringify(users));
    setUserEmail(email);
    setAuthOpen(false);
    setAuthError("");
  };
  const handleSignOut = () => {
    setUserEmail("");
  };

  // Navbar button handlers
  const openSignIn = () => { setAuthOpen(true); setShowSignIn(true); setAuthError(""); };
  const openSignUp = () => { setAuthOpen(true); setShowSignIn(false); setAuthError(""); };
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const closeAuth = () => setAuthOpen(false);

  // Smooth scroll for categories
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.getAttribute("href") === "#categories-section") {
        e.preventDefault();
        const section = document.getElementById("categories-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <>
      <Navbar
        onSignIn={openSignIn}
        onSignUp={openSignUp}
        onCart={openCart}
        userEmail={userEmail}
        onSignOut={handleSignOut}
      />
      <Hero />
      <Features />
      <Categories onAddToCart={handleAddToCart} />
      <Stats />
      <CTA />
      <Footer />
      <CartModal
        open={cartOpen}
        onClose={closeCart}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
        total={cartTotal}
      />
      <AuthModal
        open={authOpen}
        onClose={closeAuth}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        error={authError}
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
      />
    </>
  );
};

export default Home; 