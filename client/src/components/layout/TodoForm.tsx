/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from "@/App";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import { useState } from "react"

export function TodoForm() {

  const [newTodo, setNewTodo] = useState("");

  const queryClient = useQueryClient();

  const { mutate: createTodo, isPending: isCreating } = useMutation({
    mutationKey: ['createTodo'],
    mutationFn: async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await fetch(BASE_URL + `/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: newTodo }),
        })
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        setNewTodo("");
        return data;

      } catch (error: any) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
    onError: (error: any) => {
      alert(error.message);
    }
  })

  return (
    <form onSubmit={createTodo} className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" className="bg-white" placeholder="Type a new Note" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} ref={(input) => {
        if (input) input.focus();
      }} />
      <Button className="bg-white hover:drop-shadow-xl hover:bg-lime-400" type="submit" variant="outline">
        {isCreating ? <LoaderCircle className="animate-spin" /> : <SendHorizontal />}
      </Button>
    </form>
  )
}
