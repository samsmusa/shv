import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="w-full max-w-lg p-8 bg-white border shadow-lg rounded-lg">
        <div>
          <div className="mb-4">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required className="w-full" />
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required className="w-full" />
        </div>
        <div className="flex items-center mt-4">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="ml-2">Remember me</Label>
        </div>
        <Button type="submit" color="blue" className="mt-6 w-full">Submit</Button>
        <div className="mt-4 text-center">
          <p>
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
}
