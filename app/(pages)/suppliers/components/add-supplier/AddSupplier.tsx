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
import { Label } from "@/components/ui/label";
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
import { useSuppliersMutation } from "../../hooks";
import { Loader } from "lucide-react";

const formSchema = z.object({
  nit: z.string().min(2, {
    message: "El NIT debe tener más de dos caracteres.",
  }),
  name: z.string().min(2, {
    message: "El nombre debe tener más de dos caracteres.",
  }),
  company: z.string().min(2, {
    message: "La compañía debe tener más de dos caracteres.",
  }),
  address: z.string().min(2, {
    message: "La dirección debe tener más de dos caracteres.",
  }),
  email: z.string().min(2, {
    message: "El correo debe tener más de dos caracteres.",
  }),
  phone: z.string().min(2, {
    message: "El teléfono debe tener más de dos caracteres.",
  }),
  city: z.string().min(2, {
    message: "La ciudad debe tener más de dos caracteres.",
  }),
});

export default function AddCategory() {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useSuppliersMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append("name", values.name);

    mutate(formData);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Agregar Proveedor</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg overflow-hidden">
        <div className="border-b flex items-center justify-between">
          <div className="bg-neutral-50 p-4 w-full">
            <h2 className="font-bold text-lg">Agregar Proveedor</h2>
            <p className="text-xs text-muted-foreground">
              Agrega todos los proveedores que desees.
            </p>
          </div>
        </div>
        <div className="px-4 text-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="nit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NIT</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Número de Identificación Tributaria.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Compañía</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Empresa del proveedor.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Nombre del proveedor.</FormDescription>
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
                      Agregando
                    </div>
                  ) : (
                    "Agregar"
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
