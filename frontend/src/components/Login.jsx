import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔐 Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/aos/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Save token and user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/aos/dashboard");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="row">
            <div className="col-12">
                <form onSubmit={handleLogin} className="row row-eq-height lockscreen  mt-5 mb-5">

                    <div className="login-form col-12 col-sm-6">
                        <div className="form-group mb-3">
                            <label for="email">Email address</label>
                            <input 
                                id="email" 
                                type="email" 
                                className="form-control" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                required autofocus />
                        </div>

                        <div className="form-group mb-3">
                            <label for="password">Password</label>
                            <input 
                                id="password" 
                                type="password" 
                                className="form-control" 
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required />
                        </div>

                        <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">Log In</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>
  );
};

export default Login;
