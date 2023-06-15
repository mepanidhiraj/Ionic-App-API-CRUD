export const endpoints = {
    get(): string {
        return "get";
    },

    getById(id: string): string {
        return "get/" + id
    },

    insert(): string {
        return "insert"
    },

    update(id: string): string {
        return "update/" + id
    },

    delete(id: string): string {
        return "delete/" + id
    },


}