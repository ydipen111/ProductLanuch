import React from 'react'

import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from './authApi';
import { userAdd } from './userSlice';



const LoginPage = () => {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const [userLogin, { isLoading }] = useUserLoginMutation();


  const { handleChange, handleSubmit, values, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {
      console.log(val);



      try {
        const response = await userLogin(val).unwrap();
        dispatch(userAdd(response));
        toast.success(response?.message);
        nav(-1);
      } catch (err) {
        console.log(err);
        toast.error(err.data?.message);
      }



    }
  });


  return (
    <Card color="transparent" shadow={false} className="p-4 mx-auto max-w-[350px]">
      <Typography variant="h4" color="blue-gray">
        Login in your email id
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="space-y-6">

          <div>

            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              label="Email" />
          </div>
          <div>

            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              label="Password" />
          </div>
        </div>




        <Button type="submit" loading={isLoading} className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Login
          </a>
        </Typography>
      </form>
    </Card>
  );
}


export default LoginPage;