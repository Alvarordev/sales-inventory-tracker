import Container from "@/components/container";
import { DataTable } from "./data-table";
import { Client, columns } from "./columns";
import supabase from "../../../../supabase";

const Clientes = async () => {
  let { data, error } = await supabase.from("clients").select("*").order('created_at', {ascending: false});

  const productData: Client[] = data || [];

  return (
    <Container>
      <DataTable columns={columns} data={productData} />
    </Container>
  );
};

export default Clientes;
