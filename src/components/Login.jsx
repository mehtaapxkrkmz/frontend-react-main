import React from "react";
import { NavLink } from "react-router-dom"; 

const Login = () => {
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form>
        <div>
          <label>E-Posta:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      
      {/* Kayıt Ol butonunu ekliyoruz */}
      <div>
        <p><NavLink to="/register">Kayıt ol</NavLink></p>
      </div>
    </div>
  );
};

export default Login;
