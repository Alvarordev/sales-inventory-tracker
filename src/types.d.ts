export interface Product {
    product_code: string,
    description: string,
    brand: string,
    current_stock: number,
    price: number
}

export interface Client {
    document_type: 'RUC' | 'DNI' | '',
    document_number: number,
    name: string,
    comercial_name?: string,
    address: string,
    delivery_address?: string,
    district: string,
    contact_name?: string,
    phone_number?: string,
    client_type?: string,
    seller?: string,
}