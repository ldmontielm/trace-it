"use client";

import React, { useState, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PropsForm } from "../../zod-schema";


const generateSKU = ( name: string, quantity: number, category: string, uniqueId: number ) => {
  // Aquí puedes personalizar la lógica de generación del SKU según tus necesidades
  const formattedName = name ? name.substring(0, 3).toUpperCase() : "";
  const formattedQuantity = quantity
    ? quantity.toString().padStart(3, "0")
    : "";
  const formattedCategory = category
    ? category.substring(0, 3).toUpperCase()
    : "";

  return `${formattedName}${formattedQuantity}${formattedCategory}-${uniqueId}`
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function InputSku({ form }: PropsForm) {
  const [uniqueId, setUniqueId] = useState(Math.floor(Math.random() * 10000));
  const name = form.watch("name");
  const quantity = form.watch("quantity");
  const category = form.watch("category");

  useEffect(() => {
    const sku = generateSKU(name, quantity, category, uniqueId);
    form.setValue("sku", sku);
  }, [name, quantity, category, form, uniqueId]);

  return (
    <FormField
      control={form.control}
      name="sku"
      render={({ field }) => (
        <FormItem className="mb-2">
          <FormLabel>SKU(Inhabilitado)</FormLabel>
          <FormControl>
            <Input placeholder="SKU123456" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
