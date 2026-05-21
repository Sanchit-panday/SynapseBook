import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "@/App";

type UpdateNotePayload = {
    noteId: string;
    title: string;
    body: string;
};

export function useUpdateNote() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationKey: ["useUpdateNote"],

        mutationFn: async ({noteId, title, body}: UpdateNotePayload) => {

            const token = localStorage.getItem("token");

            const res = await fetch(
                BASE_URL + `/notes/${noteId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        title,
                        body,
                    }),
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
        onError: (error: any) => {
            alert(error.message);
        }
    });
}