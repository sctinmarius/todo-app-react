import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Input, Logo, Subtitle, Title } from "../common";
import Error from "../common/Error";
import { useHistory } from "react-router-dom";
const { setSessionLogin } = require("../../utils/utils");

const Login = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const URL = "http://localhost:4000/api/user/login";
    const email = e.target[0].value;
    const password = e.target[1].value;

    setError(false);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          return setError(res.message);
        }
        const { token, ...userDetails } = res;
        setSessionLogin(token, userDetails);
        history.push("/");
      })
      .catch((err) => setError("Something went wrong!"));
  };

  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Welcome back!" />
        <Subtitle name="Log in to continue." />
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <div>
            <Link to="/register">Don’t have an account? Sign up.</Link>
          </div>
          {error && <Error text={error} />}
          <Button type="submit">Log In</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
