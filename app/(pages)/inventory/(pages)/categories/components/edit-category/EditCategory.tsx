"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCategoryEditMutation } from "../../hooks";
import { Loader, Pencil } from "lucide-react";
import { Category } from "../../models";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener más de dos caracteres.",
  }),
});

interface Props {
    category: Category
}

export default function EditCategory({ category }: Props) {
    const [open, setOpen] = useState(false);
    const { mutate, isPending } = useCategoryEditMutation();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: category.name,
      },
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      const formData = new FormData();
  
      formData.append("id", category.id);
      formData.append("name", values.name);
  
      mutate(formData);
      setOpen(false);
    }
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <span className='relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50'>
                <Pencil size={14} />
                <span>Renombrar</span>
            </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg overflow-hidden">
          <div className="border-b flex items-center justify-between">
            <div className="bg-neutral-50 p-4 w-full">
              <h2 className="font-bold text-lg">Editar Categoría</h2>
              <p className="text-xs text-muted-foreground">
                Editar el nombre de tu categoría.
              </p>
            </div>
          </div>
          <div className="px-4 text-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Nombre representativo de un conjunto de productos.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="pb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button size="sm" type="submit">
                    {isPending ? (
                      <div className="flex items-center gap-2">
                        <Loader size={16} className="animate-spin" />
                        Guardando
                      </div>
                    ) : (
                      "Guardar"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    );
}
