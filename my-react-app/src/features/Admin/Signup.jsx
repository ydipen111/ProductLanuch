import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export function Signup() {
  return (
    <div className="flex justify-center py-20">
      <Card
        color="transparent"
        shadow={false}
        className="text-start flex flex-col items-center py-10 w-full max-w-md"
      >
        <div className="px-8 py-6 w-full border-t-4 border-blue-500 shadow-xl rounded-md bg-white">
          {/* Header Section */}
          <div className="py-3 space-y-4 border-b border-gray-300">
            <Typography variant="h4" className="text-gray-900 font-bold">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
          </div>

          {/* Form Section */}
          <form className="mt-8 w-full">
            {/* Name Input */}
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Name
              </Typography>
              <Input
                type="text"
                label="Full Name"
                size="lg"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Email
              </Typography>
              <Input
                type="email"
                label="Email"
                size="lg"
                placeholder="name@mail.com"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Password
              </Typography>
              <Input
                type="password"
                label="Password"
                size="lg"
                placeholder="********"
              />
            </div>

            {/* Terms and Conditions */}
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-700"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />

            {/* Sign-Up Button */}
            <Button className="mt-6" fullWidth>
              Sign Up
            </Button>

            {/* Redirect to Sign-In */}
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-500 hover:text-blue-700">
                Sign In
              </a>
            </Typography>
          </form>
        </div>
      </Card>
    </div>
  );
}
