import Container from "@/components/container";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const Clientes = () => {

    const clients = [
        {
            id: '123456789',
            created_at: new Date().toLocaleString('es-PE'),
            document_type: 'DNI',
            document_number: 74778511,
            name: 'ALVARO MANUEL RODRIGUEZ AGUILAR',
            comercial_name: 'HAZARD',
            address: 'GENERAL ORBEGOSO 246',
            delivery_address: 'GENERAL ORBEGOSO 246',
            district: 'BREÑA',
            contact_name: 'ALVARO',
            phone_number: '948074074',
            client_type: 'MAYORISTA',
        }
    ]

    return ( 
        <Container>
            <DataTable columns={columns} data={clients} />
        </Container>
     );
}
 
export default Clientes;