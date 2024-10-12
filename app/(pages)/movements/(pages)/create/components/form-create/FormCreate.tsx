"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { ContentSectionForm } from "../content-section-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { formSchema } from "../../zod-schema";
import { SelectWarehouse } from "../select-warehouse";
import { Loader } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CornerUpLeft, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectProducts } from "../select-products";
import { Textarea } from "@/components/ui/textarea";
import { useMovementsMutation } from "@/app/(pages)/movements/hooks/use-movements-mutation";

export default function FormCreate() {
  const { mutate, isPending } = useMovementsMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  })

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
        <div className='space-y-5'>
          <ContentSectionForm title="Tipo">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Tipo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar Tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="inventory_entry"><div className="flex items-center gap-2">Entrada Inventario</div></SelectItem>
                          <SelectItem value="inventory_outflow"><div className="flex items-center gap-2">Salida Inventario</div></SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </ContentSectionForm>
          <ContentSectionForm title="Producto">
            <SelectProducts form={form} />
          </ContentSectionForm>
          <ContentSectionForm title="Inventario">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ej: 10" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentSectionForm>
          <ContentSectionForm title="note">
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nota</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Movimiento realizado por..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Puedes detallar el movimiento a realizar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentSectionForm>
        </div>
        <div className="flex items-center justify-start gap-2 mt-4">
              <Link href="/movements" className={cn(buttonVariants({size: "sm", variant: "outline"}), "flex items-center gap-2")}>
                <CornerUpLeft size={16} />
                Descartar
              </Link>
              <div>
                <Button size="sm" disabled={false} className="flex items-center gap-2">
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
