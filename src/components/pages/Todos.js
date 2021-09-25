import React from "react";

import { Card, Container, Input, Logo, Title } from "../common";


const Todos = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Title name="Todo List" />
        <form autoComplete="off">
          <Input type="text" placeholder="Add a new todo" />
          <label className="checkboxLine">Make a todo list
            <Input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          
          <label className="checkboxLine">Check off first item
            <Input type="checkbox"  />
            <span className="checkmark"></span>
          </label>

          <label className="checkboxLine">Realize you already did 2 things today 
            <Input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="checkboxLine">Reward yourself with a nice, long nap
            <Input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </form>

        <div className="block-links">
          <span className="show">Show: </span> 
          <span className="active-link">All</span>
          <span className="inactive-link">Completed</span>
          <span className="inactive-link">Incompleted</span>
          
        </div>
      </Card>
    </Container>
  );
};

export default Todos;
