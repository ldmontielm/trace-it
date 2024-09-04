"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ContentSectionForm } from "../content-section-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSuppliersMutation } from "../../../../hooks";
import { Loader } from "lucide-react";
import Link from "next/link";
import { CornerUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { formSchema } from "@/app/(pages)/suppliers/form-schemas";

export default function FormCreate() {
  const { mutate, isPending } = useSuppliersMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    const formData = new FormData()
    
    for(const key in values){
      if(values.hasOwnProperty(key)){
        formData.append(key, (values as any)[key])
      }
    }

    mutate(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ContentSectionForm>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Nombre del proveedor</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Sutanito" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ej: 3224333333" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="nit"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>NIT(Número de Identificación Tributaria)</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: 921123123" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Compañía</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: EXAMPLE SAS" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: EXAMPLE SAS" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ej: Bello" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </ContentSectionForm>
        <div className="flex items-center justify-start gap-2 mt-4">
          <Link href="/suppliers" className={cn(buttonVariants({size: "sm", variant: "outline"}), "flex items-center gap-2")}>
            <CornerUpLeft size={16} />
            Descartar
          </Link>
          <div>
            <Button size="sm" disabled={isPending} className="flex items-center gap-2">
              {
                isPending ? (
                  <Loader size={16} className="animate-spin" />
                ) : ""
              }
              Guardar Cambios
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
