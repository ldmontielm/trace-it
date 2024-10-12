"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCog, ClipboardList, Dot } from "lucide-react";
import { Product } from "../../models";
import { AnimatePresence, motion } from "framer-motion";
import { formattedCop } from "@/lib/currency";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  product: Product;
}

export default function ProductDetailsDialog({ product }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <span className="relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50">
            <UserCog size={14} />
            <span>Detalles</span>
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg overflow-hidden">
          <div className="border-b flex items-center justify-between">
            <div className="bg-neutral-50 p-4 w-full">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-xs text-muted-foreground">
                Detalles del producto.
              </p>
            </div>
          </div>
          <div className="px-4 text-sm">
            <div className="border rounded-lg">
              <div className="flex items-center border-b">
                <Subtitle title="SKU" />
                <div>{product.sku}</div>
              </div>
              <div className="flex items-center border-b">
                <Subtitle title="Cantidad" />
                <div>{product.quantity}</div>
              </div>
              <div className="flex items-center border-b">
                <Subtitle title="Precio" />
                <div>{formattedCop(product.price)}</div>
              </div>
              <div className="flex items-center border-b">
                <Subtitle title="Categoría" />
                <div>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>
              <div className="flex items-center">
                <Subtitle title="Estado" />
                <div>
                  <Badge variant="outline">
                    {product.status === "available"
                      ? "Disponible"
                      : product.status === "scarce"
                      ? "Escaso"
                      : product.status === "terminated"
                      ? "Terminado"
                      : "Inactivo"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4 px-4">
            <p className="text-muted-foreground text-xs">
              Control de pedidos, ventas y/o compras.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Subtitle({ title }: { title: string }) {
  return (
    <div className="w-[100px] text-muted-foreground font-medium uppercase bg-neutral-50 py-2 pl-2 border-r mr-2 text-xs">
      {title}:
    </div>
  );
}
