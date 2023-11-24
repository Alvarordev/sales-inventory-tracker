import Container from "@/components/container";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Inventory = () => {
    const products = [
        {
            id: '987654321',
            created_at: new Date().toLocaleString('es-PE'),
            product_code: 'AC.LIM',
            description: 'A/C AROMA LIMON 100 ML',
            brand: 'SONAX',
            current_stock: 50,
            entrances: 48,
            exits: 59,
            price: 30.00,
        }
    ]

    return ( 
        <Container>
            <DataTable columns={columns} data={products} />
        </Container>
     );
}
 
export default Inventory;