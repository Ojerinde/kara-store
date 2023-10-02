export const productsDumyData = {
  categories: [
    {
      id: "phones",
      name: "Phones",
      subcategories: [
        {
          id: "android",
          name: "Android",
          products: [
            {
              id: "1",
              name: "Samsung Galaxy S21",
              brand: "Samsung",
              description: "The latest Samsung Galaxy smartphone.",
              price: 799.99,
              image: "samsung-galaxy-s21.jpg",
              specs: {
                display: "6.2-inch AMOLED",
                processor: "Exynos 2100",
                camera: "12MP Triple Camera",
                storage: "128GB",
                battery: "4000mAh",
              },
            },
            {
              id: "2",
              name: "Google Pixel 6",
              brand: "Google",
              description: "A flagship Google Pixel smartphone.",
              price: 699.99,
              image: "google-pixel-6.jpg",
              specs: {
                display: "6.4-inch OLED",
                processor: "Snapdragon 888",
                camera: "50MP Dual Camera",
                storage: "128GB",
                battery: "4500mAh",
              },
            },
          ],
        },
        {
          id: "ios",
          name: "iOS",
          products: [
            {
              id: "3",
              name: "iPhone 13 Pro",
              brand: "Apple",
              description: "The latest iPhone with Pro features.",
              price: 999.99,
              image: "iphone-13-pro.jpg",
              specs: {
                display: "6.1-inch Super Retina XDR",
                processor: "A15 Bionic",
                camera: "12MP Triple Camera",
                storage: "256GB",
                battery: "3095mAh",
              },
            },
            {
              id: "4",
              name: "iPad Air (2021)",
              brand: "Apple",
              description: "The latest iPad Air with M1 chip.",
              price: 599.99,
              image: "ipad-air-2021.jpg",
              specs: {
                display: "10.9-inch Liquid Retina",
                processor: "M1",
                storage: "128GB",
                battery: "7200mAh",
              },
            },
          ],
        },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      subcategories: [
        {
          id: "cases",
          name: "Cases",
          products: [
            {
              id: "5",
              name: "iPhone 13 Pro Silicone Case",
              brand: "Apple",
              price: 39.99,
              image: "iphone-13-pro-case.jpg",
              compatibleDevices: ["iPhone 13 Pro"],
            },
            {
              id: "6",
              name: "Samsung Galaxy S21 Clear Case",
              brand: "Samsung",
              price: 19.99,
              image: "samsung-s21-case.jpg",
              compatibleDevices: ["Samsung Galaxy S21"],
            },
          ],
        },
        {
          id: "chargers",
          name: "Chargers",
          products: [
            {
              id: "7",
              name: "Anker USB-C Charger",
              brand: "Anker",
              price: 29.99,
              image: "anker-charger.jpg",
              compatibleDevices: ["iPhone", "Samsung Galaxy"],
            },
            {
              id: "8",
              name: "Samsung Wireless Charger",
              brand: "Samsung",
              price: 49.99,
              image: "samsung-wireless-charger.jpg",
              compatibleDevices: ["Samsung Galaxy", "Google Pixel"],
            },
          ],
        },
      ],
    },
    {
      id: "generators",
      name: "Generators",
      subcategories: [
        {
          id: "portable",
          name: "Portable Generators",
          products: [
            {
              id: "101",
              name: "Honda EU2200i",
              brand: "Honda",
              description: "A reliable portable generator for outdoor use.",
              price: 999.99,
              image: "honda-eu2200i.jpg",
              specs: {
                powerOutput: "2200 Watts",
                fuelType: "Gasoline",
                runTime: "8.1 hours at 25% load",
                outlets: "2 x 120V AC, 1 x 12V DC",
              },
            },
            {
              id: "102",
              name: "Champion 3100-Watt RV Generator",
              brand: "Champion",
              description: "A portable generator ideal for RV and camping.",
              price: 549.99,
              image: "champion-3100-watt.jpg",
              specs: {
                powerOutput: "3100 Watts",
                fuelType: "Gasoline",
                runTime: "7.5 hours at 25% load",
                outlets: "2 x 120V AC, 1 x 12V DC",
              },
            },
          ],
        },
        {
          id: "standby",
          name: "Standby Generators",
          products: [
            {
              id: "201",
              name: "Generac Guardian Series 22kW",
              brand: "Generac",
              description:
                "A powerful standby generator for homes and businesses.",
              price: 3499.99,
              image: "generac-22kw.jpg",
              specs: {
                powerOutput: "22,000 Watts",
                fuelType: "Natural Gas or Propane",
                runTime: "Continuous with proper fuel supply",
                outlets: "Multiple circuits",
              },
            },
            {
              id: "202",
              name: "Kohler 20RESCL-200SELS",
              brand: "Kohler",
              description:
                "A reliable standby generator with automatic transfer switch.",
              price: 4199.99,
              image: "kohler-20rescl.jpg",
              specs: {
                powerOutput: "20,000 Watts",
                fuelType: "Natural Gas or Propane",
                runTime: "Continuous with proper fuel supply",
                outlets: "Multiple circuits",
              },
            },
          ],
        },
      ],
    },
    {
      id: "electronics",
      name: "Electronics",
      subcategories: [
        {
          id: "laptops",
          name: "Laptops",
          products: [
            {
              id: "301",
              name: "Apple MacBook Pro 13-inch",
              brand: "Apple",
              description: "A powerful and sleek laptop for professionals.",
              price: 1299.99,
              image: "macbook-pro-13.jpg",
              specs: {
                displaySize: "13.3 inches",
                processor: "Intel Core i5",
                memory: "8GB RAM",
                storage: "256GB SSD",
              },
            },
            {
              id: "302",
              name: "Dell XPS 15",
              brand: "Dell",
              description: "A high-performance laptop for multimedia tasks.",
              price: 1399.99,
              image: "dell-xps-15.jpg",
              specs: {
                displaySize: "15.6 inches",
                processor: "Intel Core i7",
                memory: "16GB RAM",
                storage: "512GB SSD",
              },
            },
          ],
        },
        {
          id: "smartphones",
          name: "Smartphones",
          products: [
            {
              id: "401",
              name: "Samsung Galaxy S21 Ultra",
              brand: "Samsung",
              description:
                "The ultimate Samsung smartphone with a powerful camera.",
              price: 1399.99,
              image: "samsung-s21-ultra.jpg",
              specs: {
                displaySize: "6.8 inches",
                camera: "108MP Quad Camera",
                processor: "Snapdragon 888",
                storage: "128GB",
              },
            },
            {
              id: "402",
              name: "iPhone 12 Pro Max",
              brand: "Apple",
              description:
                "A top-of-the-line iPhone with a stunning OLED display.",
              price: 1299.99,
              image: "iphone-12-pro-max.jpg",
              specs: {
                displaySize: "6.7 inches",
                camera: "12MP Triple Camera",
                processor: "A14 Bionic",
                storage: "256GB",
              },
            },
          ],
        },
      ],
    },
    {
      id: "gaming",
      name: "Gaming",
      subcategories: [
        {
          id: "consoles",
          name: "Game Consoles",
          products: [
            {
              id: "501",
              name: "PlayStation 5",
              brand: "Sony",
              description: "The latest PlayStation gaming console.",
              price: 499.99,
              image: "playstation-5.jpg",
              specs: {
                storage: "825GB SSD",
                controller: "DualSense Wireless Controller",
              },
            },
            {
              id: "502",
              name: "Xbox Series X",
              brand: "Microsoft",
              description:
                "The next-gen Xbox gaming console with powerful performance.",
              price: 499.99,
              image: "xbox-series-x.jpg",
              specs: {
                storage: "1TB SSD",
                controller: "Xbox Wireless Controller",
              },
            },
          ],
        },
        {
          id: "games",
          name: "Games",
          products: [
            {
              id: "601",
              name: "The Legend of Zelda: Breath of the Wild",
              platform: "Nintendo Switch",
              price: 59.99,
              image: "zelda-breath-of-the-wild.jpg",
            },
            {
              id: "602",
              name: "Cyberpunk 2077",
              platform: "PlayStation 4",
              price: 49.99,
              image: "cyberpunk-2077.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "home_and_kitchen",
      name: "Home and Kitchen Equipment",
      subcategories: [
        {
          id: "appliances",
          name: "Appliances",
          products: [
            {
              id: "701",
              name: "KitchenAid Stand Mixer",
              brand: "KitchenAid",
              description: "A versatile stand mixer for baking and cooking.",
              price: 299.99,
              image: "kitchenaid-mixer.jpg",
              specs: {
                capacity: "5 Quarts",
                attachments: "Flat Beater, Dough Hook, Wire Whip",
              },
            },
            {
              id: "702",
              name: "iRobot Roomba 980",
              brand: "iRobot",
              description: "A robot vacuum cleaner for hassle-free cleaning.",
              price: 499.99,
              image: "roomba-980.jpg",
              specs: {
                cleaningType: "Smart Navigation",
                batteryLife: "120 minutes",
              },
            },
          ],
        },
        {
          id: "cookware",
          name: "Cookware",
          products: [
            {
              id: "801",
              name: "T-fal Nonstick Cookware Set",
              brand: "T-fal",
              description:
                "A comprehensive nonstick cookware set for home chefs.",
              price: 149.99,
              image: "tfal-cookware-set.jpg",
              specs: {
                setPieces: "14",
                coating: "T-fal Titanium",
              },
            },
            {
              id: "802",
              name: "Instant Pot Duo Evo Plus",
              brand: "Instant Pot",
              description: "A versatile multi-cooker for quick and easy meals.",
              price: 89.99,
              image: "instant-pot-evo-plus.jpg",
              specs: {
                capacity: "6 Quarts",
                functions:
                  "Pressure Cooker, Slow Cooker, Rice Cooker, and more",
              },
            },
          ],
        },
      ],
    },
  ],
};
export const imagesDummyData = [
  "/images/allinone.jpg",
  "/images/iphone_banner.jpg",
  "/images/laptop_deals.jpg",
  "/images/midea_big.png",
  "/images/site1.png",
  "/images/smart_phone_big.png",
];

export const gadgetStoreItems = [
  { label: "All Categories", value: "All Categories" },
  { label: "Smartphone", value: "Smartphone" },
  { label: "Laptop", value: "Laptop" },
  { label: "Tablet", value: "Tablet" },
  { label: "Headphones", value: "Headphones" },
  { label: "Camera", value: "Camera" },
  { label: "Smartwatch", value: "Smartwatch" },
  { label: "Gaming Console", value: "Gaming Console" },
  { label: "Accessories", value: "Accessories" },
  { label: "Drones", value: "Drones" },
  { label: "Wearables", value: "Wearables" },
];
