import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, token } = useAuth(); 

  useEffect(() => {
    if (token) navigate("/aos/dashboard");
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await api("/users/login", "POST", { email, password });
      login(data.user, data.token); 
      navigate("/aos/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleLogin} className="row row-eq-height lockscreen mt-5 mb-5">
            <div className="login-form col-12 col-sm-6">
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-0">
                <button className="btn btn-primary" type="submit">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
