"use client";

import React, { useState } from "react";
import { useLoginMutation } from "../api/authApi";
import { toast } from 'react-toastify';
import "./page.scss";

export default function LoginPage() {
  {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });

    await login({ email, password })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.data);
        // alert(response.message);
        toast.success(response.message);
        window.location.href = "/admin/projects";
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // alert(error.data.message);
        toast.error(error.data.message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
