"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { ContentSectionForm } from "../content-section-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { formSchema } from "../../zod-schema";
import { SelectCategory } from "../select-category";
import { useProductsMutation } from "../../../../hooks";
import { SelectWarehouse } from "../select-warehouse";
import { Loader } from "lucide-react";
import Link from "next/link";
import { DiscountTypeRadius } from "../discount_type_radius";
import { SelectTaxes } from "../select-taxes";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CornerUpLeft, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FormCreate() {
  const { mutate, isPending } = useProductsMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      discount_type: "no_discount",
      taxes_class: "tax_free",
    }
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
          <ContentSectionForm title="Descripción">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Nombre del Producto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Camiseta de algodón blanca" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentSectionForm>
          <ContentSectionForm title="Inventario">
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="sku"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: SKU123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="barcode"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Código de Barras</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Ej: 1234567890123" min={1} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
          <ContentSectionForm title="Precio">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Precio Base</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ej: 100.00" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DiscountTypeRadius form={form}/>
          </ContentSectionForm>
          <ContentSectionForm title="Impuestos">
            <SelectTaxes form={form} /> 
          </ContentSectionForm>
          <ContentSectionForm title="Ubicación">
            <SelectWarehouse form={form} />
            <FormField
              control={form.control}
              name="fulllocation"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Ubicación</FormLabel>
                  <FormControl>
                    <Input placeholder="Aisle 3, Shelf B" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ContentSectionForm>
          <ContentSectionForm title="Categoría">
            <SelectCategory form={form} />
          </ContentSectionForm>
          <ContentSectionForm title="Estado">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Estado</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar Estado" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="available"><div className="flex items-center gap-2">Disponible</div></SelectItem>
                          <SelectItem value="scarce"><div className="flex items-center gap-2">Escaso</div></SelectItem>
                          <SelectItem value="terminated"><div className="flex items-center gap-2">Terminado</div></SelectItem>
                          <SelectItem value="inactive"><div className="flex items-center gap-2">Inactivo</div></SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </ContentSectionForm>
        </div>
        <div className="flex items-center justify-start gap-2 mt-4">
              <Link href="/inventory/products" className={cn(buttonVariants({size: "sm", variant: "outline"}), "flex items-center gap-2")}>
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
