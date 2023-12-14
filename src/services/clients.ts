import { Client } from "@/types";
import supabase from "../../supabase";

export const addClient = async (client: Client) => {
  const { data, error } = await supabase
    .from("clients")
    .insert([client])
    .select();

  return { data, error };
};

export const removeClient = async (id: string) => {
  const { error } = await supabase.from("clients").delete().eq("id", id);

  return { error };
};
