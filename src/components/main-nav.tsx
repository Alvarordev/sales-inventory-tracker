'use client'

import { Box, LayoutDashboard, MapPinned, ShoppingBag, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
    const pathname = usePathname()

    const routes = [
        {
            title: 'Dashboard',
            path: '/',
            icon: <LayoutDashboard />,
            active: `${pathname === '/' ? 'bg-muted text-indigo-500' : ''}`
        },
        {
            title: 'Ventas',
            path: '/sales',
            icon: <ShoppingBag />,
            active: `${pathname === '/sales' ? 'bg-muted text-indigo-500' : ''}`
        },
        {
            title: 'Inventario',
            path: '/inventory',
            icon: <Box />,
            active: `${pathname === '/inventory' ? 'bg-muted text-indigo-500' : ''}`
        },
        {
            title: 'Clientes',
            path: '/clients',
            icon: <Users2 />,
            active: `${pathname === '/clients' ? 'bg-muted text-indigo-500' : ''}`
        },
        {
            title: 'Hojas De Ruta',
            path: '/route-map',
            icon: <MapPinned />,
            active: `${pathname === '/route-map' ? 'bg-muted text-indigo-500' : ''}`
        }
    ]

    return ( 
        <ul className="flex flex-col gap-1">
            {routes.map(({title, path, icon, active}) => (
                <li key={path}>
                    <Link href={path} className={`${active} flex py-2 gap-2 hover:text-indigo-500 rounded-md`}>
                        {icon}
                        <span>{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
     );
}
 
export default MainNav;