import { useState } from 'react';
import { ChevronDown, FileText, LoaderCircle, LogOut, Plus, Search, Trash2 } from 'lucide-react'
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { DeleteNote } from "@/hooks/DeleteNote";
import { useCreateNote } from "@/hooks/useCreateNote";
import type { Note } from '@/types/Note';
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
    email: string;
    userId: string;
};

type SidebarProps = {
    notes: Note[] | undefined;
    activeNoteId: string | null;
    isLoading: boolean;
    setActiveNoteId: React.Dispatch<
        React.SetStateAction<string | null>
    >;
};

function Sidebar({ notes, activeNoteId, isLoading, setActiveNoteId, }: SidebarProps) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { logout } = useAuth();
    // const { data: notes, isPending: isLoading } = useNotes();
    const { mutate: deleteNote, isPending: isDeleting } = DeleteNote();
    const { mutate: createNote, isPending: isCreating } = useCreateNote();
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    // if (isLoading) {
    //     console.log("isloading")
    // }
    const filteredNotes = notes?.filter((note) => {
        const searchable =
            `${note.title} ${note.body}`.toLowerCase();
        const words =
            query
                .toLowerCase()
                .trim()
                .split(/\s+/);

        return words.every(word =>
            searchable.includes(word)
        );

    }) ?? [];

    const token = localStorage.getItem("token");
    let user = "";
    if (token) {
        const decoded =
            jwtDecode<JwtPayload>(token);

        let email = decoded.email;
        user = email.split('@')[0];
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
        alert("you have been logged out!")
    };

    return (
        <>
            <div className='flex flex-col h-full bg-stone-50 border-r border-stone-200'>
                {/* Header */}
                <div className="px-4 pt-5 pb-3">
                    {/* note Icon */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-stone-800 rounded-lg flex items-center justify-center">
                                <FileText className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-stone-800 text-sm tracking-tight">Notepad</span>
                        </div>

                        {/* create note icon */}
                        <button
                            onClick={() => createNote()}
                            className={`w-7 h-7 text-white rounded-lg flex items-center justify-center transition-colors
                                ${!isCreating || !isDeleting ? "bg-stone-800 hover:bg-stone-700" : ""}`}
                            title="New note"
                        >

                            {!isCreating || !isDeleting ?
                                <Plus className="w-4 h-4" />
                                : <LoaderCircle color="#000000" className="animate-spin bg-transpar" size={20} />
                            }
                        </button>
                    </div>
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
                        <input
                            type="text"
                            placeholder="Search notes..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 bg-white border border-stone-200 rounded-lg text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800/10 focus:border-stone-300 transition-all"
                        />
                    </div>
                </div>

                {/* notes */}
                <div className='flex-1 overflow-y-auto px-2 pb-2 space-y-0.5'
                    onClick={() => setOpenMenuId(null)}>
                    {/* {notes?.map((note) => (
                        <div key={note._id}>
                            <h2>{String(note.completed)}</h2>
                            <p>{note.body}</p>
                        </div>
                    ))} */}

                    {/* note rumner */}
                    {isLoading && (
                        <div className="justify-center my-4">
                            <LoaderCircle className="animate-spin" size={40} />
                        </div>
                    )}
                    {!isLoading && filteredNotes.length === 0 && query.trim() !== "" && (
                        <div>No noted found</div>
                    )}
                    {filteredNotes?.map((note) => {
                        const isActive = note._id === activeNoteId;
                        return (
                            <div onClick={() => { setActiveNoteId(note._id) }} className={`group relative rounded-xl px-3 py-2.5 cursor-pointer transition-all select-none shadow-sm 
                            ${isActive ? 'bg-stone-800 shadow-sm' : 'hover:bg-stone-100'}`}>
                                <div className="flex items-start gap-2.5">
                                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-stone-400 opacity-80">
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-medium truncate leading-snug ${isActive ? 'text-white' : 'text-stone-800'}`}>
                                            {/* completed : {String(note.completed)} */}
                                            {note.title || "Untitled"}
                                        </p>
                                        <p className="text-xs truncate mt-0.5 text-stone-400">{note.body.replace(/\n/g, ' ') || "No Content"}</p>
                                        <p className="text-xs mt-1 text-stone-500">{note.updatedAt}</p>
                                    </div>

                                    {/* open menu button */}
                                    <button className="opacity-0 group-hover:opacity-100 p-1 rounded-md transition-all flex-shrink-0 hover:bg-stone-700 text-stone-400"
                                        onClick={e => {
                                            e.stopPropagation(); setOpenMenuId(
                                                openMenuId === note._id
                                                    ? null
                                                    : note._id
                                            );
                                        }}>
                                        <ChevronDown className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                                {openMenuId === note._id && (
                                    <div className='absolute right-2 top-8 z-20 bg-white rounded-xl shadow-xl border border-stone-100 py-1 w-40 overflow-hidden'>
                                        {/* <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-stone-700 hover:bg-stone-200 transition-colors">
                                        <Pin className="w-3.5 h-3.5" />
                                        Pin to Top
                                    </button> */}
                                        <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                            onClick={() => deleteNote(note._id)}>
                                            <Trash2 className="w-3.5 h-3.5" />
                                            Delete Note
                                        </button>
                                    </div>
                                )}
                            </div>)
                    })}

                    {/* no notes */}
                    {!isLoading && notes?.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sticky-note-x-icon lucide-sticky-note-x"><path d="M15 3v5a1 1 0 0 0 1 1h5" /><path d="m16 16 5 5" /><path d="M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" /><path d="m21 16-5 5" /></svg>
                            <p className="text-sm text-stone-400">
                                No notes yet
                            </p>
                            <button className="mt-3 text-sm text-stone-600 font-medium hover:text-stone-800 transition-colors">
                                Create your first note
                            </button>
                        </div>
                    )}

                </div>
                {/* footer */}
                <div className="px-4 py-3 border-t border-stone-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                            <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-semibold text-stone-600">
                                    {user.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <span className="text-xs text-stone-500 truncate">{user}</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-400 hover:text-stone-600 transition-colors flex-shrink-0"
                            title="Logout"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar