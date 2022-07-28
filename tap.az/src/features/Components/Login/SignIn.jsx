import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addUser, fetchUsers, selectAllUsers } from "../../Redux/users/userSlice";

const SignIn = () => {
  const allUsers = useSelector(selectAllUsers);
  const [myemail, setMyEmail] = useState("");
  const [mypassword, setMyPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    if (myemail === "" && mypassword === "") {
      alert("Please enter email and password");
    } else if (allUsers.find((user) => user.email === myemail && user.password === mypassword)) {
      alert("succesfull");
      dispatch(addUser({ myemail, mypassword }));
      navigate("/");
    } else {
      alert("wrong email or password");
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
              <Input type="email" name="email" id="exampleEmail" placeholder="email" value={myemail} onChange={(e) => setMyEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" value={mypassword} onChange={(e) => setMyPassword(e.target.value)} />
            </FormGroup>
            <div>
              <Button type="submit">Sign In</Button>
              <Link to="/signUp" className="my-2">
                Sign Up
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
