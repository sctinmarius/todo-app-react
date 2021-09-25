import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Subtitle from "../common/Subtitle";
import Title from "../common/Title";

const Login = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Welcome back!" />
        <Subtitle name="Log in to continue." />

        <form autoComplete="off">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div>
            <Link to="/register">Don’t have an account? Sign up.</Link>
          </div>

          <Button type="submit">Log In</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
