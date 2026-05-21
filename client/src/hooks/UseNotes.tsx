import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/App";

// export type Todo = {
//     _id: string;
//     body: string;
//     completed: boolean;
//     userId: string;
// };

import type { Note } from "@/types/Note";

export function useNotes() {

    const token = localStorage.getItem("token");

    return useQuery<Note[]>({
        queryKey: ["notes"],
        enabled: !!token,

        queryFn: async () => {

            const res = await fetch(
                BASE_URL + "/notes",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.error || "something went wrong"
                );
            }

            return data || [];
        },
    });
}