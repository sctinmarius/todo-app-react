import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Input, Logo, Subtitle, Title } from "../common";

const Login = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Welcome back!" />
        <Subtitle name="Log in to continue." />

        <form autoComplete="off">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
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
