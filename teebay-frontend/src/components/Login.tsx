import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-lg p-8 bg-white border shadow-lg rounded-lg border-black">
        <h3 className="text-center font-bold text-2xl mb-4">SIGN IN</h3>
        <form>
          <div className="mb-4">
            <Label htmlFor="email1" value="Your email" />
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required className="w-full" />
          </div>
          <div className="mb-4">
            <Label htmlFor="password1" value="Your password" />
            <TextInput id="password1" type="password" placeholder="Password@123" required className="w-full" />
          </div>
          <div className="flex items-center mb-4">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="ml-2">Remember me</Label>
          </div>
          <Button type="submit" color="blue" className="w-full">Submit</Button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
