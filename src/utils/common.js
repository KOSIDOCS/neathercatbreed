// LOGIN
export const login = (history, d) => {
  if (d.email === "onaru@gmail.com" && d.password === "123456") {
    localStorage.setItem("auth", d.email);
    history.push("/profile");
  }
};

// LOGIN STATUS
export const isLogin = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};

// LOGOUT
export const logout = () => localStorage.removeItem("auth");
