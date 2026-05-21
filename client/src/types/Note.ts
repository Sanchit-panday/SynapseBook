export type Note = {
    _id: string;
    userId: string;

    title: string;
    body: string;

    createdAt: string;
    updatedAt: string;

    completed: boolean;
};