export type Drink = {
  id: string;
  brand: string;
  name: string;
  price: number;
  tier: "S" | "A" | "B" | "C" | "D";
  tags: string[];
  type: string;
  date: string;
  comment?: string;
};

export type TierLevel = {
  id: "S" | "A" | "B" | "C" | "D";
  label: string;
  description: string;
  color: string;
};
