"use client";

import React, { SyntheticEvent, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ReceiptPercentIcon,
  LockClosedIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { PropsForm } from "../../zod-schema";

export default function DiscountTypeRadius({ form }: PropsForm) {
  const [type, setType] = useState<string>(
    form.control._formValues.discount_type
  );
  const [percentage, setPercentage] = useState([0]);

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="discount_type"
        render={({ field }) => (
          <FormItem className="space-y-3 mt-5">
            <FormLabel>
              Tipo de Descuento <span className="text-red-600">*</span>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  setType(value);
                }}
                defaultValue={field.value}
                className="grid grid-cols-3"
              >
                <FormItem className="inline-flex">
                  <FormLabel
                    className={`cursor-pointer rounded-md w-full border p-2 ${
                      field.value === "no_discount"
                        ? "border ring-4 ring-ring/20 border-primary"
                        : ""
                    }`}
                  >
                    <FormControl>
                      <RadioGroupItem className="hidden" value="no_discount" />
                    </FormControl>
                    <div>
                      <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                        <CursorArrowRaysIcon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className="capitalize font-bold">
                          Sin Descuento
                        </span>
                        <span className="text-muted-foreground text-xs">
                          No aplicar descuento
                        </span>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem className="inline-flex">
                  <FormLabel
                    className={`cursor-pointer rounded-md w-full border p-2 ${
                      field.value === "porcentage"
                        ? "border ring-4 ring-ring/20 border-primary"
                        : ""
                    }`}
                  >
                    <FormControl>
                      <RadioGroupItem className="hidden" value="porcentage" />
                    </FormControl>
                    <div>
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
                        <ReceiptPercentIcon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className="capitalize font-bold">Porcentaje</span>
                        <span className="text-muted-foreground text-xs">
                          Porcentaje de descuento
                        </span>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem className="inline-flex">
                  <FormLabel
                    className={`cursor-pointer rounded-md w-full border p-2 ${
                      field.value === "fixed_price"
                        ? "border ring-4 ring-ring/20 border-primary"
                        : ""
                    }`}
                  >
                    <FormControl>
                      <RadioGroupItem className="hidden" value="fixed_price" />
                    </FormControl>
                    <div>
                      <div className="w-6 h-6 rounded bg-violet-500 flex items-center justify-center">
                        <LockClosedIcon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className="capitalize font-bold">
                          Precio Fijo
                        </span>
                        <span className="text-muted-foreground text-xs">
                          Fijar precio del producto
                        </span>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {
        form.getValues("discount_type") === "porcentage" && (
            <FormField
              control={form.control}
              name="percentage"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Porcentaje</FormLabel>
                  <FormControl>
                    <div>
                      <p className="text-4xl font-bold text-center my-4">
                        {percentage}%
                      </p>
                      <Slider
                        defaultValue={percentage}
                        max={100}
                        step={1}
                        onChange={(e: React.BaseSyntheticEvent) => {
                          setPercentage([e.target.value]);
                          form.setValue("percentage", e.target.value);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Establezca el porcentaje de descuento que se aplicará a este
                    producto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) 
      }
      {form.getValues("discount_type") === "fixed_price" && (
        <FormField
          control={form.control}
          name="fixed_price"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Precio Fijo Con Descuento</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Ej: 120.00"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Establezca el precio rebajado del producto.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
}
