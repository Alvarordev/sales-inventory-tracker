import Container from "@/components/container";
import { DataTable } from "./data-table";
import { columns, Product } from "./columns";
import supabase from "../../../../supabase";

const Inventory = async () => {
    let {data, error} = await supabase.from('products').select('*')

    const productData: Product[] = data || [];

    return ( 
        <Container>
            <DataTable columns={columns} data={productData} />
        </Container>
     );
}
 
export default Inventory;