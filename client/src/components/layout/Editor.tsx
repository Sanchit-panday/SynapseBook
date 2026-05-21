import type { Note } from "@/types/Note";
import { useEffect, useState } from "react";
import { useUpdateNote } from "@/hooks/useUpdateNote";
import { Trash2 } from "lucide-react";

type EditorProps = {
  note: Note | undefined;
};
function Editor({ note }: EditorProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const charCount = body.length;
  const wordCount = body
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;

  const { mutate: updateNote } = useUpdateNote();
  const saveCurrentNote = () => {
    if (!note?._id) return;
    if (title === note.title &&
      body === note.body
    ) {
      return;
    }

    updateNote({
      noteId: note._id,
      title,
      body,
    });
  };

  useEffect(() => {
    setTitle(note?.title ?? "");
    setBody(note?.body ?? "");
  }, [note]);

  // const wordCount = note.body.trim() ? body.trim().split(/\s+/).length : 0;
  return (
    <div className='bg-white min-w-0 h-full'>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-8 py-3.5 border-b border-stone-200 transition-colors">
        <div>Synapse Book</div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-stone-400 hidden md:inline">
            {wordCount} {wordCount === 1 ? 'word' : 'words'} &middot; {charCount} chars
          </span>
          <button
            // onClick={() => onDelete(note.id)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors ml-2"
            title="Delete note"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 md:py-10"><div className="max-w-2xl mx-auto ml-15 w-full">
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          onBlur={() => saveCurrentNote()}
          placeholder="Note title..."
          className={`w-full text-2xl md:text-3xl font-bold text-stone-800 placeholder:text-stone-300 bg-transparent border-none outline-none leading-tight mb-3`}
        />
        <textarea
          value={body}
          onChange={(e) =>
            setBody(e.target.value)
          }
          onBlur={saveCurrentNote}
          placeholder="Start writing..."
          className={`w-full flex-1 text-base text-stone-700 placeholder:text-stone-300 bg-transparent border-none outline-none resize-none leading-relaxed min-h-[calc(100vh-280px)]`}
        />
      </div>
      </div>
    </div>
  )
}

export default Editor