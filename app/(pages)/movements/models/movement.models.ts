export interface Movement {
  id: string;
  created_at: string;
  type: string;
  quantity: number;
  note?: string;
  originating_warehouse?: string;
  destination_warehouse?: string;
  product: string;
  supplier?: string;
}

export enum MovementType {
  inventory_outflow = "inventory_outflow",
  inventory_entry = "inventory_entry",
}