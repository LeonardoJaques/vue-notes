import { defineStore } from "pinia";

export const useStoreNotes = defineStore("StoreNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi. Vitae, reiciendis. Atque dicta nam eligendi fuga sed magnam illo, officia consectetur perspiciatis? Cum, repellat quibusdam dolorem doloribus doloremque voluptas!",
        },
        {
          id: "id2",
          content: "This is shorter note!",
        },
      ],
    };
  },
});
