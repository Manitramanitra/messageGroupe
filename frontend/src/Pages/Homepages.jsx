import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Register from "./AuthPages/Register";

function Homepages() {
  return (
    <div class="bg-gradient-to-br from-green-100 via-blue-150 to-purple-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Welcome to our Chat Application</h2>
        <div class="space-y-4">
            <Link to="/register" class="block w-full text-center py-2 px-4 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700">Register</Link>
            <Link to="/login" class="block w-full text-center py-2 px-4 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700">Login</Link>
        </div>
    </div>
</div>
    // <Register />
  );
}

export default Homepages;
