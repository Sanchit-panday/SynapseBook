import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "@/App";

export function DeleteNote() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationKey: ["deleteNote"],

        mutationFn: async (noteId: string) => {

            const token = localStorage.getItem("token");

            const res = await fetch(
                BASE_URL + `/notes/${noteId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.error || "Something went wrong"
                );
            }

            return data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["notes"],
            });
        },
    });
}