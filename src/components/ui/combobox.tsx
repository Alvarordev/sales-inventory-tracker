"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const districts = [
  {
    value: "",
    label: "Todos",
  },
  {
    value: "ANCON",
    label: "Ancón",
  },
  {
    value: "ATE",
    label: "Ate",
  },
  {
    value: "BARRANCO",
    label: "Barranco",
  },
  {
    value: "BREÑA",
    label: "Breña",
  },
  {
    value: "CARABAYLLO",
    label: "Carabayllo",
  },
  {
    value: "CHACLACAYO",
    label: "Chaclacayo",
  },
  {
    value: "CHORRILLOS",
    label: "Chorrillos",
  },
  {
    value: "CIENEGUILLA",
    label: "Cieneguilla",
  },
  {
    value: "COMAS",
    label: "Comas",
  },
  {
    value: "EL AGUSTINO",
    label: "El Agustino",
  },
  {
    value: "INDEPENDENCIA",
    label: "Independencia",
  },
  {
    value: "JESUS MARIA",
    label: "Jesus Maria",
  },
  {
    value: "LA MOLINA",
    label: "La Molina",
  },
  {
    value: "LA VICTORIA",
    label: "La Victoria",
  },
  {
    value: "LINCE",
    label: "Lince",
  },
  {
    value: "LOS OLIVOS",
    label: "Los Olivos",
  },
  {
    value: "LURIGANCHO",
    label: "Lurigancho",
  },
  {
    value: "LURIN",
    label: "Lurin",
  },
  {
    value: "MAGDALENA DEL MAR",
    label: "Magdalena del Mar",
  },
  {
    value: "PUEBLO LIBRE",
    label: "Pueblo Libre",
  },
  {
    value: "MIRAFLORES",
    label: "Miraflores",
  },
  {
    value: "PACHACAMAC",
    label: "Pachacamac",
  },
  {
    value: "PUCUSANA",
    label: "Pucusana",
  },
  {
    value: "PUENTE PIEDRA",
    label: "Puente Piedra",
  },
  {
    value: "PUNTA HERMOSA",
    label: "Punta Hermosa",
  },
  {
    value: "PUNTA NEGRA",
    label: "Punta Negra",
  },
  {
    value: "RIMAC",
    label: "Rimac",
  },
  {
    value: "SAN BARTOLO",
    label: "San Bartolo",
  },
  {
    value: "SAN BORJA",
    label: "San Borja",
  },
  {
    value: "SAN ISIDRO",
    label: "San Isidro",
  },
  {
    value: "SAN JUAN DE LURIGANCHO",
    label: "San Juan de Lurigancho",
  },
  {
    value: "SAN JUAN DE MIRAFLORES",
    label: "San Juan de Miraflores",
  },
  {
    value: "SAN LUIS",
    label: "San Luis",
  },
  {
    value: "SAN MARTIN DE PORRES",
    label: "San Martin de Porres",
  },
  {
    value: "SAN MIGUEL",
    label: "San Miguel",
  },
  {
    value: "SANTA ANITA",
    label: "Santa Anita",
  },
  {
    value: "SANTA MARIA DEL MAR",
    label: "Santa Maria del Mar",
  },
  {
    value: "SANTA ROSA",
    label: "Santa Rosa",
  },
  {
    value: "SANTIAGO DE SURCO",
    label: "Santiago de Surco",
  },
  {
    value: "SURQUILLO",
    label: "Surquillo",
  },
  {
    value: "VILLA EL SALVADOR",
    label: "Villa El Salvador",
  },
  {
    value: "VILLA MARIA DEL TRIUNFO",
    label: "Villa Maria del Triunfo",
  },
];

export function ComboboxDemo({ filter }: { filter: any }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? districts.find(
                (district) =>
                  district.value.toUpperCase() === value.toUpperCase()
              )?.label
            : "Filtrar por distrito..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search district..." />
          <CommandEmpty>No district found.</CommandEmpty>
          <CommandGroup>
            {districts.map((district) => (
              <CommandItem
                key={district.value}
                value={district.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  filter(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === district.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {district.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
