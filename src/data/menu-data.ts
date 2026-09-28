export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  category: string;
  notes?: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: "Snacks & Sweets",
    items: [
      {
        name: "M&M's",
        description: "(Peanut Chocolate, Crispy) [E, G, F, A]",
        price: "3,50€",
      },
      {
        name: "NicNac's",
        description: "(Classic, Barbecue, Nachocheese) [A, G, I, J]",
        price: "3,50€",
      },
      { name: "Chips", description: "[G, J]", price: "3,50€" },
      {
        name: "Kinder Pingui / Maxi King",
        description: "[A, G, F, H]",
        price: "2,00€",
      },
      {
        name: "Schnucketüte",
        description: "[A, G, F, H je nach Inhalt]",
        price: "2,00€",
      },
      { name: "Cookie", description: "[A, C, G, H]", price: "4,50€" },
      { name: "Kuchen", description: "[A, C, G, H]", price: "4,00€" },
      { name: "Donuts", description: "[A, C, G, F]", price: "4,00€" },
      {
        name: "Lotus Cake",
        description: "(Dubai, Schokolade) [A, C, G, F, K]",
        price: "4,00€",
      },
    ],
  },
  {
    category: "Warme Snacks",
    items: [
      {
        name: "Sucuk Toast",
        description: "(Sucuk, Käse, Streichfett) [A, G, I, J]",
        price: "3,50€",
      },
      {
        name: "Hotdog",
        description: "(Mit Ketchup, Senf, Mayo) [A, C, I, J]",
        price: "4,40€",
      },
      {
        name: "Nachos",
        description: "mit warmen Käse Dip [G, A]",
        price: "6,50€",
      },
      { name: "Ramen", description: "[A, F, I, K, C]", price: "4,00€" },
      { name: "Extra Dip", description: "[G, C, J]", price: "0,50€" },
    ],
  },
  {
    category: "Vegan",
    items: [
      {
        name: "Coconut Milk Drink",
        description: "(Avocado, Mango, Mangosteen) - 0.33l",
        price: "3,90€",
      },
    ],
  },
  {
    category: "Soft Drinks",
    items: [
      {
        name: "Coca Cola",
        description: "(classic, light, zero) - 0.33l",
        price: "3,90€",
      },
      {
        name: "Fanta",
        description: "(Orange, Exotic, Drachenfrucht) - 0.33l",
        price: "3,90€",
      },
      { name: "Moloko", description: "0.25l", price: "4,00€" },
      {
        name: "Redbull",
        description: "(Classic / White) - 0.25l",
        price: "4,00€",
      },
      { name: "28 Black", description: "0.25l", price: "4,00€" },
      { name: "Vita Malz", description: "[A] - 0.33l", price: "4,00€" },
      {
        name: "Wasser",
        description: "(still & sprudelig) - 0.33l",
        price: "3,50€",
      },
      { name: "Tonic Water", description: "0.33l", price: "3,90€" },
      { name: "Ginger Ale", description: "0.33l", price: "3,90€" },
      { name: "Chocomel", description: "0.33l", price: "3,90€" },
      {
        name: "Hausgemachter Eistee",
        description: "0.33l",
        price: "3,90€",
      },
    ],
  },
  {
    category: "Heißgetränke",
    notes:
      "Mit Sirup nach Wahl (Kokos, Vanille, Salted Caramel) 0,50€ Aufpreis [G]",
    items: [
      { name: "Café Crema", description: "[G]", price: "3,80€" },
      { name: "Café Tonic", description: "", price: "4,30€" },
      { name: "Espresso", description: "", price: "3,20€" },
      { name: "Cappuccino", description: "[G]", price: "3,80€" },
      { name: "Latte Macchiato", description: "[G]", price: "4,00€" },
      { name: "Heiße Schokolade", description: "[G]", price: "4,00€" },
      {
        name: "Tee",
        description: "(verschiedene Sorten)",
        price: "3,80€",
      },
      {
        name: "Matcha",
        description: "[G] Falls mit milch",
        price: "6,50€",
      },
    ],
  },
  {
    category: "Säfte",
    items: [
      { name: "Orangensaft", description: "0.3l", price: "3,80€" },
      { name: "Mangosaft", description: "0.3l", price: "3,80€" },
      { name: "Bananensaft", description: "0.3l", price: "3,80€" },
      { name: "KiBa", description: "0.3l", price: "3,80€" },
    ],
  },
  {
    category: "Milkshakes",
    items: [
      { name: "Erdbeershake", description: "[G] - 0.4l", price: "6,50€" },
      { name: "Bananenshake", description: "[G] - 0.4l", price: "6,50€" },
      { name: "Oreoshake", description: "[A, G] - 0.4l", price: "6,50€" },
      { name: "Raffaelloshake", description: "[G, H] - 0.4l", price: "6,50€" },
      { name: "Mangoshake", description: "[G] - 0.4l", price: "6,50€" },
      { name: "Proteinshake", description: "[G, F] - 0.4l", price: "7,00€" },
    ],
  },
  {
    category: "Bier",
    items: [
      { name: "Heineken", description: "[A] - 0.33l", price: "4,50€" },
      { name: "Bayreuther Hell", description: "[A] - 0.33l", price: "4,50€" },
      { name: "Corona", description: "[A] - 0.33l", price: "4,90€" },
      { name: "Desperados", description: "[A] - 0.33l", price: "4,90€" },
    ],
  },
  {
    category: "Long Drinks",
    items: [
      {
        name: "Jacky Cola",
        description: "(Jack Daniels, Coca Cola) - 0.4l",
        price: "6,50€",
      },
      {
        name: "Vodka E",
        description: "(Vodka, Redbull, Eis) - 0.4l",
        price: "6,50€",
      },
      {
        name: "Havanna Cola",
        description: "(Havana Club, Cola) - 0.4l",
        price: "6,50€",
      },
      {
        name: "Jägermeister Cola",
        description: "(Jägermeister, Cola) - 0.4l",
        price: "6,50€",
      },
    ],
  },
  {
    category: "Cocktails (Alkohol)",
    items: [
      {
        name: "Sex on the Beach",
        description:
          "(Vodka, Orangensaft, Mangosaft, Zitronensaft, Grenadine, Ananassaft) - 0.5l",
        price: "8,00€",
      },
      {
        name: "Pina Colada",
        description:
          "(Weißer Rum, Kokossirup, Ananassaft, Sahne) [G] - 0.5l",
        price: "8,00€",
      },
      {
        name: "Mojito",
        description:
          "(Weißer Rum, Limettensaft, Rohrzucker, Minze, Soda) - 0.5l",
        price: "8,00€",
      },
      {
        name: "Cuba Libre",
        description: "(Havana Club, Limette, Cola) - 0.5l",
        price: "8,00€",
      },
      {
        name: "Tequila Sunrise",
        description: "(Tequila, Orangensaft, Grenadine) - 0.5l",
        price: "8,00€",
      },
    ],
  },
  {
    category: "Mocktails (Alkoholfrei)",
    items: [
      {
        name: "Virgin Colada",
        description: "(Kokossirup, Ananassaft, Sahne) [G] - 0.5l",
        price: "7,00€",
      },
      {
        name: "Virgin Mojito",
        description: "(Limette, Minze, Rohrzucker, Ginger Ale) - 0.5l",
        price: "7,00€",
      },
      {
        name: "Ipanema",
        description: "(Limette, Maracuja, Rohrzucker, Ginger Ale) - 0.5l",
        price: "7,00€",
      },
      {
        name: "Flamingo",
        description:
          "(Barsirup Kokos, Orangensaft, Grapefruitsaft, Barsirup Erdbeere) - 0.5l",
        price: "7,00€",
      },
    ],
  },
];
