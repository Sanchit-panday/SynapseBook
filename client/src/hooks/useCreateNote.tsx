import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "@/App";

export function useCreateNote() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationKey: ["createNote"],

        mutationFn: async () => {

            const token = localStorage.getItem("token");

            const res = await fetch(
                BASE_URL + "/notes",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        title: "",
                        body: "",
                    }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.error || "Failed to create note"
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