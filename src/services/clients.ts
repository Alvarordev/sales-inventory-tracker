import { Client } from "@/types"
import supabase from "../../supabase"

export const addClient = async (client: Client) => {
    const {data, error} = await supabase.from('clients').insert([client]).select();

    return { data, error }
}