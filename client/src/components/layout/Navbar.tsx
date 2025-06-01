"use client"

import { Badge } from "@/components/ui/badge"


function Navbar() {
    return (
        <>
            <Badge variant="outline" className="flex justify-center bg-lime-600 w-full mx-3 mb-3 p-3 sticky top-0 z-50 shadow-xs h-fit">
                <p className="text-center font-semibold text-2xl">
                    Synapse Book
                </p>
            </Badge>
        </>
    )
}
export default Navbar