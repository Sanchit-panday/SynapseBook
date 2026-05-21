// import Navbar from "../components/layout/Navbar"
// import { TodoForm } from "../components/layout/TodoForm"

import Editor from "@/components/layout/Editor"
import Sidebar from "@/components/layout/Sidebar"
import { useNotes } from "@/hooks/UseNotes";
import { useState } from "react";

// import TodoList from "../components/layout/TodoList"
function Home() {
    const { data: notes, isPending: isLoading, } = useNotes();
    const [activeNoteId, setActiveNoteId] =
        useState<string | null>(null);
    const activeNote =
        notes?.find(
            note => note._id === activeNoteId
        );
    return (
        <>
            <div className="h-screen flex overflow-hidden bg-stone-50">
                <div className="fixed inset-y-0 left-0 z-30 w-72 flex-shrink-0 transition-transform duration-300 lg:relative lg:translate-x-0 lg:z-auto">
                    <Sidebar
                        notes={notes}
                        isLoading={isLoading}
                        activeNoteId={activeNoteId}
                        setActiveNoteId={setActiveNoteId} />
                </div>
                <div className="flex-1 overflow-scroll">
                    <Editor note={activeNote} />
                </div>
            </div>
        </>
    )
}

export default Home






{/* <Navbar />
<TodoForm />
<TodoList /> */}