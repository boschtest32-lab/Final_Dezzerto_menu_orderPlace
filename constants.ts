import { Category } from './types';

// Placeholder images
const PLACEHOLDER_IMG = (seed: string) => `https://picsum.photos/seed/${seed}/400/400`;

// export const WHATSAPP_NUMBER = "919876543210"; // Replace with actual cafe owner number
export const WHATSAPP_NUMBERS = [
  { label: "Main Counter", number: "918600135430" },
  { label: "Manager", number: "919975325430" }
];

export const INITIAL_MENU: Category[] = [
  {
    id: 'c1',
    name: 'Thick Shake',
    image: '/images/thickshake.jpg',
    subCategories: [
      {
        id: 'sc1',
        name: 'Regular Thick Shake',
        image: '/images/regularThickShake.jpg',
        products: [
          { id: 'p29', name: 'Choco Vanilla', price: 99, image: '/images/chocoVenillaThickShake.jpg' },
          { id: 'p30', name: 'Rose', price: 99, image: '/images/roseThickShake.jpg' },
          { id: 'p31', name: 'Munch', price: 110, image: '/images/chocoMunchThickShake.jpg' },
          { id: 'p32', name: 'Choco Pie', price: 110, image: '/images/chocoPieThickShakes.jpg' },
          { id: 'p33', name: 'Gems', price: 110, image: '/images/gemesThickShake.jpg' },
          { id: 'p34', name: 'Mango', price: 110, image: '/images/mangoThickShake_regularTS.jpg' },
          { id: 'p35', name: 'Strawberry', price: 110, image: '/images/strawberyThickShake.jpg' },
          { id: 'p36', name: 'Choco Chips', price: 110, image: '/images/chocoChipsThickShake.jpg' },
          { id: 'p37', name: 'Butterscotch', price: 120, image: '/images/butterScotchThickShake.jpg' },
        ]
      },
      {
        id: 'sc2',
        name: 'Brown Thick Shake',
        image: '/images/browniThickShake.jpg',
        products: [
          { id: 'p38', name: 'Chocolate Brownie', price: 140, image: '/images/chocolateBrownieTS.jpg' },
          { id: 'p39', name: 'Brewing Brownie', price: 140, image: '/images/brewingBrownieTS.jpg' },
          { id: 'p40', name: 'Brownie Dark Chocolate', price: 160, image: '/images/brownieDarkChocolate.jpg' },
          { id: 'p41', name: 'Swiss Choco Brownie', price: 160, image: '/images/swissChocoBrownieTS.jpg' },
          { id: 'p42', name: 'Brownie Kit Kat', price: 160, image: '/images/kitkatBrownieTS.jpg' },
          { id: 'p43', name: 'Brownie Nutties', price: 160, image: '/images/brownieNuttiesTS.jpg' },
          { id: 'p44', name: 'Oreo Brownie Break', price: 160, image: '/images/orioBrownieBreakTS.jpg' },
          { id: 'p45', name: 'Choco Brownie Fudge', price: 160, image: '/images/chocoBrownieFudgeTS.jpg' },
          { id: 'p46', name: 'Brownie Caramel', price: 160, image: '/images/brownieCaramil.jpg' },
          { id: 'p47', name: 'Nutella Brownie', price: 170, image: '/images/nutellRochers.jpg' },
          { id: 'p48', name: 'Brownie Rocher', price: 170, image: '/images/nutellaBrownieRochers.jpg' },
          { id: 'p49', name: 'Hazelnut Brownie', price: 170, image: '/images/hazzlenutBrownieTS.jpg' },
        ]
      },
      {
        id: 'sc3',
        name: 'Chocolate Thick Shake',
        image: '/images/thickshake.jpg',
        products: [
          { id: 'p50', name: 'Swiss Chocolate', price: 140, image: '/images/swissChocolateTS.jpg' },
          { id: 'p51', name: 'Belgian Cashewnuts', price: 140, image: '/images/belgianCashewnutesTS.jpg' },
          { id: 'p52', name: 'Oreo', price: 140, image: '/images/oreoTS.jpg' },
          { id: 'p53', name: 'Kit-Kat', price: 140, image: '/images/kitKatTS.jpg' },
          { id: 'p54', name: "Hershey's Almond", price: 140, image: '/images/harshlaysAlmondTS.jpg' },
          { id: 'p55', name: 'Crunchy Carnival', price: 160, image: '/images/vrunchyCarnivalTS.jpg' },
          { id: 'p56', name: 'Nutties Rocher', price: 160, image: '/images/nuttiesRocherTS.jpg' },
          { id: 'p57', name: 'Dark on the Mark', price: 160, image: '/images/darkOnTheMarkTS.jpg' },
          { id: 'p58', name: 'Choco Lava', price: 160, image: '/images/chocoLavaThickShake.jpg' },
          { id: 'p59', name: 'Rocher Kit-Kat', price: 180, image: '/images/rocherKitKatTS.jpg' },
          { id: 'p60', name: 'Hazelnut', price: 180, image: '/images/HazelnutTS.jpg' },
          { id: 'p61', name: 'Nutella Kit-Kat', price: 180, image: '/images/nutellaKitKatTS.jpg' },
          { id: 'p62', name: 'Rocher Nutella', price: 190, image: '/images/rocherNutella.jpg' },
          { id: 'p63', name: 'Nutella Hazelnut', price: 190, image: '/images/nutellaHazelnutTS.jpg' },
          { id: 'p64', name: 'Nutella Nutties Rocher', price: 220, image: '/images/nutellaNuttiesRocher.jpg' },
          { id: 'p65', name: 'Rocher Rocher', price: 220, image: '/images/rochersRochers.jpg' },
        ]
      },
      {
        id: 'sc4',
        name: 'Fruit Thick Shake',
        image: '/images/fruitThickShake.jpg',
        products: [
          { id: 'p66', name: 'Pineapple', price: 140, image: '/images/pineappleTS.jpg' },
          { id: 'p67', name: 'Litchi', price: 140, image: '/images/litchiTS.jpg' },
          { id: 'p68', name: 'Sitafal (S)', price: 160, image: '/images/sitaphalTS.jpg' },
          { id: 'p69', name: 'Mango Delight (S)', price: 160, image: '/images/mangoThickShake.jpg' },
          { id: 'p70', name: 'Strawberry Delight (S)', price: 160, image: '/images/strawBerryTS_FruitTS.jpg' },
          { id: 'p71', name: 'Banana Caramel', price: 160, image: '/images/bananaCaremelTS.jpg' },
          { id: 'p72', name: 'Blue Berry', price: 160, image: '/images/blueBerryTS_fruitTS.jpg' },
          { id: 'p73', name: 'Triple Berry', price: 160, image: '/images/trippleBerryTS.jpg' },
        ]
      },
      {
        id: 'sc5',
        name: 'Dry Fruit Thick Shake',
        image: '/images/dryFruitThickShake.jpg',
        products: [
          { id: 'p74', name: 'Kesar Pista', price: 100, image: '/images/kesarPistaTS.jpg' },
          { id: 'p75', name: 'Kaju Anjeer', price: 160, image: '/images/kajuAngirTS.jpg' },
          { id: 'p76', name: 'Kaju Gulkand', price: 170, image: '/images/kajuGulkandTS.jpg' },
          { id: 'p77', name: 'Roasted Almond', price: 170, image: '/images/roastedAlmondTS.jpg' },
          { id: 'p78', name: 'Royal Saffron Nuts', price: 190, image: '/images/royalSafronTS.jpg' },
        ]
      },
      {
        id: 'sc6',
        name: 'Special Classic Thick Shake',
        image: '/images/specialClassicThickShake.jpg',
        products: [
          { id: 'p79', name: 'Red Velvet', price: 140, image: '/images/redVelvetTS.jpg' },
          { id: 'p80', name: 'Paan', price: 140, image: '/images/paanTS.jpg' },
          { id: 'p81', name: 'Bubblegum', price: 140, image: '/images/regularThickShake.jpg' },
          { id: 'p82', name: 'Tiramisu', price: 160, image: '/images/chocoChipsThickShake.jpg' },
          { id: 'p83', name: 'Biscoff Crumbs', price: 190, image: '/images/biscoffTS.jpg' },
        ]
      }
    ]
  },
  {
    id: 'c2',
    name: 'Milkshake',
    image: '/images/milkshake.jpg',
    products: [
      { id: 'p84', name: 'Chocolate', price: 160, image: '/images/chocolateMS.jpg' },
      { id: 'p85', name: 'Butterscotch', price: 160, image: '/images/butterscotchMS.jpg' },
      { id: 'p86', name: 'Nutella', price: 160, image: '/images/nutellaMS.jpg' },
      { id: 'p87', name: 'Dry Fruit', price: 160, image: '/images/dryFruitMS.jpg' },
      { id: 'p88', name: 'Oreo', price: 160, image: '/images/oreoMS.jpg' },
      { id: 'p89', name: 'Strawberry', price: 160, image: '/images/strawberryMS.jpg' },
      { id: 'p90', name: 'Mango', price: 160, image: '/images/mangoMS.jpg' },
      { id: 'p91', name: 'Kitkat', price: 160, image: '/images/kitKatMS.jpg' },
      { id: 'p92', name: 'Dark Chocolate', price: 160, image: '/images/darkChocolateMS.jpg' },
    ]
  },
  {
    id: 'c2-waffles',
    name: 'Waffles',
    image: '/images/waffel.jpg',
    products: [
      { id: 'p121', name: 'White Chocolate', price: 150, image: '/images/whiteChocolateWaffel.jpg' },
      { id: 'p122', name: 'Chocolate Overload', price: 150, image: '/images/waffel.jpg' },
      { id: 'p123', name: 'Dark Chocolate', price: 150, image: '/images/darkChocolateWaffel.jpg' },
      { id: 'p124', name: 'Triple Chocolate', price: 150, image: '/images/trippleChocolateWaffel.jpg' },
      { id: 'p125', name: 'Oreo Crunch', price: 150, image: '/images/oreoCrunchWaffel.jpg' },
      { id: 'p126', name: 'Kit-Kat', price: 150, image: '/images/kit-katWaffel.jpg' },
      { id: 'p127', name: 'Swiss Choco Chips', price: 150, image: '/images/waffel.jpg' },
      { id: 'p128', name: 'Brownie Kit-Kat', price: 170, image: '/images/brownieWaffel.jpg' },
      { id: 'p129', name: 'Nutella', price: 170, image: '/images/nutellaWaffel.jpg' },
      { id: 'p130', name: 'Lotus Biscoff', price: 170, image: '/images/biscOffWaffel.jpg' },
      { id: 'p131', name: 'Hazelnut', price: 170, image: '/images/hazzlenutWaffel.jpg' },
      { id: 'p132', name: 'Chocolate Mocha', price: 170, image: '/images/chocolateMochaWaffel.jpg' },
    ]
  },
    {
    id: 'c3',
    name: 'Natural Ice Cream',
    image: '/images/mangoIC.jpg',
    products: [
      { id: 'p136', name: 'Ukadiche Modak Ice cream', price: 150, image: '/images/ukadicheModakIC.jpg' },
      { id: 'p136', name: 'Mysore Pak Ice Cream', price: 150, image: '/images/pineappleIC.jpg' },
      { id: 'p136', name: 'Ratnagiri Happus Ice cream', price: 120, image: '/images/ratnagiriHappusMangoIC.jpg' },
      { id: 'p136', name: 'Gulkand Ice cream', price: 120, image: '/images/pineappleIC.jpg' },
      { id: 'p133', name: 'Sitafal', price: 120, image: '/images/sitaphalIceCream.jpg' },
      { id: 'p134', name: 'Tender Coconut', price: 120, image: '/images/pineappleIC.jpg' },
      { id: 'p135', name: 'Chikoo', price: 110, image: '/images/pineappleIC.jpg' },
      { id: 'p136', name: 'Guava', price: 120, image: '/images/guavaIC.jpg' },
      { id: 'p136', name: 'Salted Caramel', price: 120, image: '/images/pineappleIC.jpg' },
      { id: 'p136', name: 'Belgian Chocolate', price: 150, image: '/images/bengianDarkChocolateIC.jpg' }

    ]
  },
  {
    id: 'c8',
    name: 'Winter Special Hot Chocolate',
    image: '/images/hotchocolate.jpg',
    products: [
      { id: 'p27', name: 'HOT CHOCOLATE', price: 110, image: '/images/hotchocolate.jpg' },
      { id: 'p27', name: 'HAZELNUT HOT CHOCOLATE', price: 120, image: '/images/hotchocolate.jpg' },
      { id: 'p27', name: 'BROWNIE HOT CHOCOLATE', price: 120, image: '/images/hotchocolate.jpg' },
      { id: 'p27', name: 'DARK HOT CHOCOLATE', price: 130, image: '/images/hotchocolate.jpg' },
      { id: 'p27', name: 'COFFEE HOT CHOCOLATE', price: 130, image: '/images/hotchocolate.jpg' },
      { id: 'p27', name: 'BOURNVITA HOT CHOCOLATE', price: 130, image: '/images/hotchocolate.jpg' },
    ]
  },
  {
    id: 'c4',
    name: 'Brownies',
    image: '/images/brownies.jpg',
    products: [
      { id: 'p100', name: 'Choco Lava Cake', price: 100, image: '/images/chocolavaCakeBR.jpg' },
      { id: 'p101', name: 'Brownie Fudge', price: 110, image: '/images/brownieFudgeBr.jpg' },
      { id: 'p102', name: 'Lava Bomb', price: 130, image: '/images/laveBombBr.jpg' },
      { id: 'p103', name: 'Hot Sizzling Brownie', price: 140, image: '/images/brownies.jpg' },
      { id: 'p104', name: 'Nutella Brownie Fudge', price: 150, image: '/images/nutellaBrownieFudgeBr.jpg' },
      { id: 'p105', name: 'Hazelnut Brownie Fudge', price: 150, image: '/images/brownieFudgeBr.jpg' },
      { id: 'p106', name: 'Brownie Fudge with Ice Cream', price: 150, image: '/images/brownieFudgeWithIcBr.jpg' },
    ]
  },
  {
    id: 'c5',
    name: 'Hot Brew',
    image: '/images/hotbreve.jpg',
    products: [
      { id: 'p93', name: 'Americano Black Coffee', price: 160, image: '/images/AmericanoCaffe.jpg' },
      { id: 'p94', name: 'Cappuccino', price: 160, image: '/images/cappuchino.jpg' },
      { id: 'p95', name: 'Café Mocha', price: 170, image: '/images/caffeMocha.jpg' },
      { id: 'p96', name: 'Café Latte', price: 170, image: '/images/caffeeLatte.jpg' },
    ]
  },
  {
    id: 'c6',
    name: 'Cold Coffee',
    image: '/images/coldbreve.jpg',
    products: [
      { id: 'p97', name: 'Creamy Cold Coffee', price: 130, image: '/images/coldbreve.jpg' },
      { id: 'p98', name: 'Chocolate Coffee', price: 140, image: '/images/coldbreve.jpg' },
      { id: 'p99', name: 'Hazelnut Cold Coffee', price: 150, image: '/images/coldbreve.jpg' },
    ]
  },
  {
    id: 'c7',
    name: 'Jamun Shot',
    image: '/images/jamunshot.jpg',
    products: [
      { id: 'p25', name: 'Classic Jamun Shot', price: 110, image: '/images/jamunshot.jpg' }
    ]
  },
  {
    id: 'c9',
    name: 'Ice Cream',
    image: 'images/chocoChipsIC.jpg',
    products: [
      { id: 'p107', name: 'Vanilla', price: 70, image: '/images/roastedAlmondIceCream.jpg' },
      { id: 'p108', name: 'Butter Scotch', price: 90, image: '/images/butterscotchIC.jpg' },
      { id: 'p109', name: 'Cookies N Cream', price: 90, image: '/images/cookieNCreamIC.jpg' },
      { id: 'p110', name: 'Pineapple', price: 90, image: '/images/pineappleIC.jpg' },
      { id: 'p111', name: 'Strawberry', price: 90, image: '/images/strawberryIC.jpg' },
      { id: 'p112', name: 'American Nuts', price: 100, image: '/images/americanNuttsIC.jpg' },
      { id: 'p113', name: 'Black Current', price: 100, image: '/images/blackCurrentIC.jpg' },
      { id: 'p114', name: 'Choco Chips', price: 100, image: '/images/chocoChipsIC.jpg' },
      { id: 'p115', name: 'Mango', price: 100, image: '/images/mangoIC.jpg' },
      { id: 'p116', name: 'Kesar Pista', price: 100, image: '/images/kesarPistaIC.jpg' },
      { id: 'p117', name: 'Almond', price: 100, image: '/images/almondIC.jpg' },
      { id: 'p118', name: 'Rajbhog', price: 110, image: '/images/rajBoghIC.jpg' },
      { id: 'p119', name: 'Mocha Brownie Fudge', price: 110, image: '/images/mochaBrownieIC.jpg' },
      { id: 'p120', name: 'Belgian Dark Chocolate', price: 110, image: '/images/bengianDarkChocolateIC.jpg' },
    ]
  },

];