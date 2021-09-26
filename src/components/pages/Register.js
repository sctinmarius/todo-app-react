import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Input, Logo, Subtitle, Title } from "../common";
import Error from "../common/Error";
import { useHistory } from "react-router-dom";
const { setSessionLogin } = require("../../utils/utils");

const Register = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const URL = "http://localhost:4000/api/user/sign-up";
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    setError(false);

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ fullName, email, password }),
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
        <Title name="Welcome!" />
        <Subtitle name="Sign up to start using Simpledo today!" />

        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <div>
            <Link to="/signIn">Do have an account? Sign in.</Link>
          </div>
          {error && <Error text={error} />}
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
