import Container from "@/components/container";
import { DataTable } from "./data-table";
import { Order, columns } from "./columns";
import Orders from "@/mocks/orders.json"

const Sales = () => {
    const data: Order[] = Orders

    return ( 
        <Container>
            <div className="overflow-auto">
                <DataTable columns={columns}  data={data}/>
            </div>
        </Container>
     );
}
 
export default Sales;