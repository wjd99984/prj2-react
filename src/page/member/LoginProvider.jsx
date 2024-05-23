import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export function LoginProvider({ children }) {
  const LoginContext = createContext(null);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  function isLoggedIn() {
    //토큰이 있고 유효하면 로그인된
    let token = localStorage.getItem("token");
    const decode = jwtDecode(token);

    let expires = decode.exp;
  }

  function login(token) {
    localStorage.setItem("token", token);
    const payload = jwtDecode(token);
    setExpired(payload.exp);
    setEmail(payload.sub);
    setNickname(payload.nickName);
  }
  faOutdent;

  return <LoginContext.Provider value={null}>{children}</LoginContext.Provider>;
}
