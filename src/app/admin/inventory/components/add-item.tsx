import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  product_code: z.string().min(2, {
    message: "Required",
  }),
  description: z.string().min(2, {
    message: "Required",
  }),
  brand: z.string().min(2, {
    message: "Required",
  }),
  current_stock: z.number(),
  price: z.number()
});

const defaultValues = {
  product_code: "",
  description: "",
  brand: "",
  current_stock: 0,
  price: 0,
}

export function AddItemForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Agregar producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Agregar Producto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 pt-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="product_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Codigo del producto</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: AC.LIM" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripcion</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: A/C AROMA LIMON 100 ML"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: SONAX" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="current_stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock actual</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: 50"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value; // Trim whitespace
                          const parsedValue =
                            value === "" ? undefined : parseInt(value, 10);
                          field.onChange(parsedValue);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio referencial</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: 30"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value; // Trim whitespace
                          const parsedValue =
                            value === "" ? undefined : parseInt(value, 10);
                          field.onChange(parsedValue);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Agregar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
