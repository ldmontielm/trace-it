"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropsForm } from "../../zod-schema";

export default function SelectTaxes({ form }: PropsForm) {
  return (
    <FormField
      control={form.control}
      name="taxes_class"
      render={({ field }) => (
        <div className="grid grid-cols-2 gap-2">
          <FormItem>
            <FormLabel>Clase de Impuesto</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="capitalize">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar Impuesto" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="tax_free" className="capitalize">
                  Libre de Impuesto
                </SelectItem>
                <SelectItem value="taxable_goods" className="capitalize">
                  Sujeto a Impuestos
                </SelectItem>
                <SelectItem value="downloadable_product" className="capitalize">
                  Producto Descargable
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="iva"
            render={({ field }) => (
                <FormItem className="mb-2">
                <FormLabel>Importe IVA (%)</FormLabel>
                <FormControl>
                    <Input
                        disabled={form.getValues("taxes_class") === "tax_free" ? true : false}
                        placeholder="Ej: 16%"
                        max={100}
                        min={1}
                        {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
      )}
    />
  );
}
