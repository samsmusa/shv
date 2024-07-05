import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <Navbar fluid rounded className="bg-gray-300">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button className="bg-red-400">Get started</Button> */}
        <Link to="/products" className="block p-2 bg-green-400 rounded mx-2">Products</Link>
        <Link to="/dashboard" className="block p-2 bg-green-400 rounded mx-2">Dashboard</Link>
        <Link to="/login" className="block p-2 bg-green-400 rounded mx-2">Login</Link>
        <Link to="/signup" className="block p-2 bg-green-400 rounded mx-2">Sign Up</Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav
