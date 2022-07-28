import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers, selectAllUsers } from "../../Redux/users/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const allUsers = useSelector(selectAllUsers);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (email === "" && password === "") {
      alert("Please enter email and password");
    } else if (allUsers.find((user) => user.email === email)) {
      alert("User already exists");
    } else {
      dispatch(addUser({ email, password }));
      alert("User created");
      navigate("/");
    }
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div className={loginStyle.container}>
        <div className={loginStyle.card}>
          <h2>tap.az</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>

            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
