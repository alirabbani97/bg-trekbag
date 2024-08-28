import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist(
    (set) => ({
      items: initialItems,
      sortBy: "default",
      setSortBy: (value) => {
        set(() => ({ sortBy: value }));
      },
      addItem: (itemText) => {
        const newItem = {
          text: itemText,
          id: new Date().getTime(),
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
      clearItems: () => {
        set(() => ({ items: [] }));
      },
      reset: () => {
        set(() => ({ items: initialItems }));
      },
      checkAll: () => {
        set((state) => {
          const checkedItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: checkedItems };
        });
      },
      unCheckAll: () => {
        set((state) => {
          const unCheckedItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));
          return { items: unCheckedItems };
        });
      },

      toggle: (id) => {
        set((state) => {
          const newItem = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItem };
        });
      },

      delete: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
    }),
    { name: "items" }
  )
);
