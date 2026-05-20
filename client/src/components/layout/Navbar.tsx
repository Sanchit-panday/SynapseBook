"use client"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";

function Navbar() {
    const token = localStorage.getItem("token");
    const [, setIsLoggedIn] = useState<boolean>(
        !!token &&
        token !== "undefined" &&
        token !== "null"
    );
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        alert("you have been logged out!")
        window.location.reload(); // important reload 
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