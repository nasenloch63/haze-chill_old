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

function item(name: string, price: string, description = ""): MenuItem {
  return { name, description, price };
}

// Source: public/speisekarte.pdf; Maxi King and Proteinshake markings confirmed by owner.
export const menuData: MenuCategory[] = [
  {
    category: "Snacks",
    items: [
      item("Maxi King", "2,00 €", "[1, 13]"),
      item("Süßigkeitentüte", "2,50 €", "[1, 3, 13, 14]"),
      item("Jogurt mit der Ecke", "2,50 €", "[15]"),
      item("M&Ms", "3,50 €", "[1, 3, 4, 14, 13]"),
      item("NicNac’s", "3,50 €", "[1, 2, 3, 4, 13]"),
      item("Chips", "3,50 €", "[1, 2, 3, 4, 13]"),
      item("Sucuktoast", "4,00 €", "[1, 3, 6, 9]"),
      item("Bananentoast", "4,00 €", "[1, 3, 6, 9]"),
      item("Buenotoast", "4,00 €", "[1, 3, 6, 9]"),
      item("Kuchen", "4,50 €", "[1, 3, 4, 13, 14]"),
    ],
  },
  {
    category: "Fruchtbecher",
    items: [
      item("Kiwi", "4,00 €", "[1, 3, 13, 14]"),
      item("Erdbeere", "4,00 €", "[1, 3, 13, 14]"),
      item("Mango", "4,00 €", "[1, 3, 13, 14]"),
      item("Oreo", "4,00 €", "[1, 3, 13, 14]"),
      item("Lotus", "4,00 €", "[1, 3, 13, 14]"),
      item("Pistazie", "4,00 €", "[1, 3, 4, 13, 14]"),
    ],
  },
  {
    category: "Nachos",
    items: [
      item("Nachos mit Dip", "4,90 €", "[1, 3, 4, 14]"),
      item("Nachos mit Goudakäse und Dip", "5,90 €", "[1, 3, 4, 14]"),
    ],
  },
  {
    category: "Ramen",
    items: [
      item("Cup Noodles", "4,00 €", "[1, 5, 6]"),
      item("Cup Noodles scharf", "4,00 €", "[1, 5, 6]"),
    ],
  },
  {
    category: "Eis",
    items: [
      item("Spaghetti-Eis", "3,50 €", "[1, 3, 13, 14]"),
      item("Snickers, Twix oder Bounty", "2,50 €", "[1, 2, 3]"),
      item("Wassereis", "2,00 €", "Verschiedene Sorten · [9, 10, 13]"),
    ],
  },
  {
    category: "Softdrinks",
    items: [
      item("Stilles Wasser", "2,90 €", "0,33 l"),
      item("Sprudelwasser", "2,90 €", "0,33 l"),
      item("Hausgemachter Eistee", "3,50 €", "0,33 l"),
      item("Ekofresh Ice Tea", "3,50 €", "Waldfrucht, Pfirsich oder Zitrone · 0,33 l"),
      item("Hot Blood Ice Tea", "3,50 €", "Kirsche oder Tropical · 0,33 l"),
      item("Coca Cola, Sprite, Fanta", "3,50 €", "Verschiedene Sorten, auch Zero · 0,33 l · [10, 11, 13]"),
      item("Spezi", "3,50 €", "0,33 l · [15]"),
      item("Ginger Ale", "3,50 €", "0,33 l · [13]"),
      item("Chocomel", "3,50 €", "0,33 l · [1, 3, 14]"),
      item("Red Bull", "4,00 €", "Verschiedene Sorten · 0,33 l · [10, 11, 13, 15]"),
      item("28 Black", "4,00 €", "0,25 l · [15]"),
      item("Moloko", "4,00 €", "0,25 l · [15]"),
    ],
  },
  {
    category: "Heißgetränke",
    items: [
      item("Café Crema", "3,20 €", "0,2 l · [15]"),
      item("Espresso", "2,80 €", "0,04 l · [15]"),
      item("Cappuccino", "3,20 €", "0,2 l · [3, 14, 15]"),
      item("Latte Macchiato", "3,20 €", "0,3 l · [3, 14, 15]"),
      item("Heiße Schokolade", "3,20 €", "0,3 l · [3, 14, 15]"),
      item("Tee", "3,00 €", "0,3 l · [15]"),
      item("Matcha Tee", "3,50 €", "0,3 l"),
    ],
  },
  {
    category: "Säfte",
    items: [
      item("Orangennektar", "3,20 €", "0,3 l"),
      item("KiBa", "3,20 €", "Sauerkirsch- und Bananennektar · 0,3 l"),
      item("Mangonektar", "3,20 €", "0,3 l"),
      item("Bananennektar", "3,20 €", "0,3 l"),
      item("Ananasnektar", "3,20 €", "0,3 l"),
    ],
  },
  {
    category: "Shakes",
    items: [
      item("Erdbeershake", "5,90 €", "0,4 l · [3, 14]"),
      item("Mangoshake", "5,90 €", "0,4 l · [3, 14]"),
      item("Bananenshake", "5,90 €", "0,4 l · [3, 14]"),
      item("Oreoshake", "5,90 €", "0,4 l · [1, 3, 14]"),
      item("Raffaelloshake", "5,90 €", "0,4 l · [3, 4, 14]"),
      item("Proteinshake", "6,50 €", "0,4 l · [3, 14]"),
    ],
  },
  {
    category: "Bier",
    items: [
      item("Heineken", "4,00 €", "0,25 l · [1, 16]"),
      item("Bayreuther", "4,00 €", "0,33 l · [1, 16]"),
      item("Becks", "4,00 €", "0,33 l · [1, 16]"),
      item("Desperados", "4,50 €", "0,33 l · [1, 13, 16]"),
      item("Corona", "4,50 €", "0,33 l · [1, 16]"),
    ],
  },
  {
    category: "Longdrinks",
    items: [
      item("Jacky Cola", "5,50 €", "0,4 l · [13, 15, 16]"),
      item("Vodka E", "5,50 €", "0,4 l · [10, 11, 13, 15, 16]"),
      item("Cola Havanna", "5,50 €", "0,4 l · [13, 15, 16]"),
      item("Jägermeister Cola", "5,50 €", "0,4 l · [13, 15, 16]"),
      item("Gin Tonic", "5,50 €", "0,4 l · [12, 16]"),
      item("Long Island Ice Tea", "5,50 €", "0,4 l · [13, 14, 15]"),
    ],
  },
  {
    category: "Shots",
    items: [
      item("Jägermeister", "2,50 €", "[16]"),
      item("Vodka", "2,50 €", "[16]"),
      item("Tequila", "2,50 €", "[16]"),
      item("FICKEN", "2,50 €", "[16]"),
      item("Licor 43", "2,50 €", "[16]"),
    ],
  },
  {
    category: "Cocktails (mit Alkohol)",
    items: [
      item("Sex on the Beach", "6,90 €", "Vodka, Orangensaft, Mangosaft, Zitronensaft, Grenadine & Ananassaft"),
      item("Pina Colada", "6,90 €", "Weißer Rum, Kokossirup, Ananassaft & Sahne"),
      item("Mojito", "6,90 €", "Weißer Rum, Limettensaft, Rohrzucker, Minze & Soda"),
      item("Cuba Libre", "6,90 €", "Havana Club, Limette & Cola"),
      item("Tequila Sunrise", "6,90 €", "Tequila, Limettensaft & Orangensaft"),
    ],
  },
  {
    category: "Cocktails (alkoholfrei)",
    items: [
      item("Virgin Colada", "5,90 €", "Kokossirup, Ananassaft & Sahne"),
      item("Virgin Mojito", "5,90 €", "Limette, Minze, Rohrzucker & Ginger Ale"),
      item("Ipanema", "5,90 €", "Limette, Maracuja, Rohrzucker & Ginger Ale"),
      item("Flamingo", "5,90 €", "Kokossirup, Orangensaft, Grapefruitsaft & Erdbeersirup"),
    ],
  },
  {
    category: "Menüs",
    items: [
      item("Cocktail-Menü ohne Alkohol", "9,90 €", "2 × Cocktails ohne Alkohol"),
      item("Cocktail-Menü mit Alkohol", "10,90 €", "2 × Cocktails mit Alkohol"),
      item("Softdrink-Menü mit Eistee", "9,90 €", "2 × hausgemachter Eistee + Nachos"),
      item("Softdrink-Menü mit Red Bull", "10,90 €", "2 × Red Bull + Nachos"),
      item("Shake-Menü", "9,90 €", "2 × Shakes nach Wahl"),
      item("Chill-Menü mit Eistee", "9,90 €", "2 × hausgemachter Eistee + Bong"),
      item("Chill-Menü mit Red Bull", "10,90 €", "2 × Red Bull + Bong"),
    ],
  },
];
