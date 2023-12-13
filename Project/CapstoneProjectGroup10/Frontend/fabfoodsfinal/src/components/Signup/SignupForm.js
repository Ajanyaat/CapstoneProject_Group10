import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Signup.css'

const RegisterPage = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("https://localhost:44324/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Registered successfully");
        navigate("/login");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className='back'>
         <div className='full-page-content'>
    <div className="login-form-container">
      <div className="login-form">
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <Field as="select" id="role" name="role">
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="error-message"
              />
            </div>
            <br/>

            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </Form>
        </Formik>

        <Link to="/login" className="login-link" onClick={() => navigate("/login")}>
             Already have an account? Login here
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RegisterPage;
