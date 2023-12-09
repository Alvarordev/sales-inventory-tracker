import Container from "@/components/container";
import { DataTable } from "./data-table";
import { Order, columns } from "./columns";
import Orders from "@/mocks/orders.json";

const Sales = () => {
  const data: Order[] = Orders.map((order) => {
    return {
      ...order,
      created_at: new Date(order.created_at).toLocaleDateString("es-PE"),
      delivered_at: new Date(order.delivered_at).toLocaleDateString("es-PE"),
    };
  });

  return (
    <Container>
      <DataTable columns={columns} data={data} />
    </Container>
  );
};

export default Sales;
