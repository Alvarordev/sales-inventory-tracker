import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { removeProduct } from "@/services/products";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function OptionsPopover({row}: any) {
    const router = useRouter()

    const deleteClient = async () => {
        const { error } = await removeProduct(row.id)
        
        if (error) {
            toast.error('Hubo un error eliminando este item')
            console.log(error)
        } else {
            toast.success('Se elimino correctamente')
            router.refresh()
        }
    }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <Settings strokeWidth={"1.5px"} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44 px-2 py-3" align="end">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex w-full">
              <Button onClick={deleteClient} variant={'destructive'} className="w-full h-8">Borrar cliente</Button>
            </div>
            <div className="flex w-full">
              <Button variant={'ghost'} className="w-full h-8">Editar cliente</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
