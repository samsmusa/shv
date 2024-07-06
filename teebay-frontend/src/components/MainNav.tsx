import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <Navbar fluid rounded className="bg-gray-300">
      <Navbar.Brand >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/products" active>
          Products
        </Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/login"><span className="bg-blue-500 p-1.5 text-white rounded">Login</span></Navbar.Link>
        <Navbar.Link href="/signup"><span className="bg-red-500 p-1.5 text-white rounded">SignUp</span></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav
