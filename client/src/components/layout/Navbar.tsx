"use client"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/AuthContext";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        navigate("/login");
        alert("you have been logged out!")
    };
    return (
        <>
            <Badge variant="outline" className="flex justify-center bg-lime-600 w-full mx-3 mb-3 p-3 sticky top-0 z-50 shadow-xs h-fit">
                <p className="text-center font-semibold text-2xl">
                    Synapse Book
                </p>
                <button onClick={handleLogout}>Logout</button>
            </Badge>
        </>
    )
}
export default Navbar