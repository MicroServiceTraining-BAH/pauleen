export type MenuItem = {
  name: string;
  price?: number | string;
  description?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'for-the-table',
    label: 'For the Table',
    items: [
      {
        name: 'The Pub Platter',
        price: 25,
        description: '2 Fat Pretzels, Asiago, Smoked Sausage, Salami, Mixed Nuts, Mustards & Damn Pub Cheese Dip',
      },
      {
        name: 'The New Yorker',
        price: 15,
        description: '2 Big Fat Pretzels, Mustards & Damn Pub Cheese Dip',
      },
      {
        name: 'Antipasto Platter',
        price: 24,
        description: 'Assorted Cured Meats & Cheese, w/Olives, marinated vegetables & Ciabatta',
      },
      {
        name: 'Sausage Platter',
        price: 25,
        description: '3 varieties of sausage: kielbasa, Italian sausage and brats, served w/grainy mustard and ciabatta',
      },
      {
        name: 'Meze Platter',
        price: 20,
        description: 'Rice Stuffed Grape Leaves, Grilled Sausage, Kalamata Olives, 2 Cheeses, 2 Dips, Cucumber, Toasted Ciabatta',
      },
      {
        name: 'Loaded Pita Chips',
        price: 17,
        description: 'Grilled Chicken or Sausage, Cucumber, Tomato, Pepperoncini, Kalamata Olives, Feta, Pickled Red Onion, Tzatziki',
      },
    ],
  },
  {
    id: 'dips-tots',
    label: 'Dips & Tots',
    items: [
      {
        name: 'Dips',
        price: 10,
        description: 'Choice of: Hummus, Tzatziki, Whipped Feta, Caramelized Onion, Roasted Red Pepper. Served with toasted ciabatta & cucumbers',
      },
      {
        name: 'Hot Crab Dip',
        price: 15,
        description: 'Parmesan, breadcrumbs, pita chips',
      },
      {
        name: 'Damn Hot Pub Cheese',
        price: 10,
        description: 'Damn pub cheese w/jalapeño kick. Served warm with toasted ciabatta',
      },
      {
        name: 'Loaded Tots',
        price: 13,
        description: 'Tater tots topped with Damn Hot Pub Cheese, sour cream, bacon, and chives',
      },
      {
        name: 'Boogie Tots',
        price: 15,
        description: 'Tater tots topped with "chopped cheese" ground beef, lettuce, tomato, aioli',
      },
      {
        name: 'Gyro Tots',
        price: 15,
        description: 'Tater tots topped with gyro meat, lettuce, tomato, onion, and tzatziki',
      },
      {
        name: 'Tex Tots',
        price: 15,
        description: 'Tater tots topped with black beans, cheddar, sour cream and jalapeño',
      },
    ],
  },
  {
    id: 'not-panini',
    label: 'Not Panini',
    items: [
      {
        name: 'Gyro*',
        price: 15,
        description: 'Gyro meat, lettuce, tomato, onion, and tzatziki wrapped in a pita',
      },
      {
        name: 'Souvlaki*',
        price: 15,
        description: 'Marinated chicken or sausage, lettuce, tomato, onion, and tzatziki wrapped in a pita',
      },
      {
        name: 'Spanakopita*',
        price: 12,
        description: 'Spinach and feta wrapped in filo pie',
        note: 'Served as a plate with Greek salad, rice, tzatziki, and pita $21',
      },
      {
        name: 'Pita Pi',
        price: 12,
        description: '"Aunt Stella" pita topped with mozzarella, asiago, tomato, red onion, crispy eggplant',
        note: 'Add chicken or sausage +$3',
      },
      {
        name: '"Yia Yia"',
        price: 12,
        description: 'Pita topped with whipped feta, roasted red peppers',
        note: 'Add chicken or sausage +$3',
      },
      {
        name: 'Slider Flight',
        price: 18,
        description: 'Crab cake, cheeseburger, Santa Fe Chicken',
      },
      {
        name: 'Brats & Tots',
        price: 15,
        description: '2 brats, brioche bun, tots',
      },
    ],
  },
  {
    id: 'panini',
    label: 'Panini',
    items: [
      {
        name: 'El Cubano',
        price: 15,
        description: 'Roast Pork, Smoked Ham, Swiss, Pickles, Dijon, Aioli',
      },
      {
        name: 'Diablo',
        price: 14,
        description: 'Spicy Grilled Chicken, Pepper Jack, Pickled Jalapeño, Habanero Aioli',
      },
      {
        name: 'East Village',
        price: 14,
        description: 'Crispy Eggplant, Roasted Pepper, Mozzarella, Asiago, Roasted Garlic Spread, Basil & Sun-Dried Pesto',
      },
      {
        name: 'West Village',
        price: 15,
        description: 'Grilled Chicken, Provolone, Roasted Pepper, Aioli, Roasted Garlic Spread',
      },
      {
        name: 'Queens Village',
        price: 15,
        description: 'Pepperoni, Fresh Mozzarella, Sun Dried Tomato Pesto, Pecorino Cream',
      },
      {
        name: 'Madison Park',
        price: 15,
        description: 'Chicken cutlet, peppers & onions, provolone, garlic aioli',
      },
      {
        name: 'Arthur Avenue',
        price: 15,
        description: 'Italian Sausage, Peppers & Onions, Provolone, Aioli',
      },
      {
        name: 'Boogie Down',
        price: 15,
        description: '"Chopped Cheese" Griddled Ground Beef, American Cheese, Grilled Onion, Lettuce, Tomato, Ketchup, Aioli',
      },
      {
        name: 'Bay Ridge',
        price: 15,
        description: 'Italian Sausage, Mozzarella, Spicy Cherry Pepper Relish',
      },
      {
        name: 'Astoria Park',
        price: 15,
        description: 'Chicken Cutlet, Spicy Feta Spread, Pepper Jack, Roasted Red Pepper',
      },
      {
        name: 'Gramercy Park',
        price: 15,
        description: 'Schnitzel, Pepper Jack, Damn Pub Cheese, Pickles, Aioli, Dijon',
      },
      {
        name: 'I Soldi*',
        price: 15,
        description: 'Capicola, Arugula, Asiago, Balsamic Glaze, Hot Cherry Pepper Relish, EVOO',
      },
      {
        name: 'Uptown Funk*',
        price: 15,
        description: 'Sliced Turkey, Brie, Honey Mustard, Caramelized Onion',
      },
      {
        name: 'Italiano',
        price: 19,
        description: 'Salami, Cappacola, Mortadella, Mozzarella, Provolone, Roasted Peppers, Lettuce, Tomato, Red Onion, House Vinaigrette',
      },
      {
        name: 'Avenue A*',
        price: 15,
        description: 'Crispy Eggplant, Fresh Mozzarella, Baby Arugula, Sundried Tomato Pesto',
      },
      {
        name: 'Abbondanza*',
        price: 15,
        description: 'Mortadella, Pecorino Cream, Arugula, Sun-Dried Tomato Pesto, EVOO',
      },
      {
        name: 'Caprese*',
        price: 14,
        description: 'Fresh Mozzarella, Basil, Tomato, EVOO',
        note: 'Add chicken +$3',
      },
      {
        name: 'Amsterdam Ave',
        price: 15,
        description: 'House-made chicken salad, tomato, baby arugula',
      },
      {
        name: 'Delancey Street',
        price: 15,
        description: 'House-made Tuna Salad, Tomato, Baby Arugula',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      { name: 'Baked Potato Salad', price: 8 },
      { name: 'Greek Pasta Salad', price: 8 },
      { name: 'Greek Salad', price: 8 },
      { name: 'Crispy Tots', price: 8 },
    ],
  },
];
