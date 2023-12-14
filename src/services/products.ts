import type { Product } from "@/types";
import supabase from "../../supabase";

export const addProduct = async (product: Product) => {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  return { data, error };
};

export const removeProduct = async (id: string) => {
  const { error } = await supabase.from("products").delete().eq("id", id);

  return { error };
};
