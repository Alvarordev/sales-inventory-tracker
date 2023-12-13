import type { Product } from "@/types";
import supabase from "../../supabase";

export const addProduct = async (product: Product) => {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  return { data, error };
};
