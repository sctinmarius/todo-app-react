import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Subtitle from "../common/Subtitle";
import Title from "../common/Title";

const Register = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Welcome!" />
        <Subtitle name="Sign up to start using Simpledo today!" />

        <form autoComplete="off">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
