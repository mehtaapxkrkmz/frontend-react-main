import React from "react";
import { NavLink } from "react-router-dom"; 

const Register = () => {
  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form>
        <div>
          <label>Ad Soyad:</label>
          <input type="text" name="fullName" required />
        </div>
        <div>
          <label>E-Posta:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Kayıt ol</button>
        <p><NavLink to="/login">Giriş Yap</NavLink></p>
      </form>
    </div>
  );
};

export default Register;
