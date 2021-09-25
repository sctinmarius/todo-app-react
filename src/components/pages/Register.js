import React from "react";
import { Link } from "react-router-dom";

import { Button, Card, Container, Input, Logo, Subtitle, Title } from "../common";


const Register = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Welcome!" />
        <Subtitle name="Sign up to start using Simpledo today!" />

        <form autoComplete="off">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="assword" placeholder="Password" />

          <div>
            <Link to="/signIn">Do have an account? Sign in.</Link>
          </div>

          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
