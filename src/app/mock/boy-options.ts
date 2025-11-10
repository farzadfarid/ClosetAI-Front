// src/app/mock/boy-options.ts

export interface BoyTitleCategory {
  title: string;
  items: BoyCategory[];
}

export interface BoyCategory {
  name: string;
  image: string;
  prompt?: string;
  defaultColor?: string;
}

export const BOY_CATEGORIES = [
  // 👕 Tops
  { key: 'tshirt', label: 'T-Shirts', icon: './../../assets/styles/boys/Categories/T-Shirts.jpg' }, 
  { key: 'shirt', label: 'Shirts', icon: './../../assets/styles/boys/Categories/Shirts.jpg' },
  { key: 'sweater', label: 'Sweaters', icon: './../../assets/styles/boys/Categories/Sweaters.jpg' },
  { key: 'hoodie', label: 'Hoodies', icon: './../../assets/styles/boys/Categories/Hoodies.jpg' },

  // 👖 Bottoms
  { key: 'pants', label: 'Pants', icon: './../../assets/styles/boys/Categories/Pants.jpg' },
  { key: 'jeans', label: 'Jeans', icon: './../../assets/styles/boys/Categories/Jeans.jpg' },
  { key: 'shorts', label: 'Shorts', icon: './../../assets/styles/boys/Categories/Shorts.jpg' },

  // 🧥 Outerwear
  { key: 'jacket', label: 'Jackets', icon: './../../assets/styles/boys/Categories/Jackets.jpg' },
  { key: 'coat', label: 'Coats', icon: './../../assets/styles/boys/Categories/Coats.jpg' },

  // 👟 Shoes
  { key: 'sneakers', label: 'Sneakers', icon: './../../assets/styles/boys/Categories/Sneakers.jpg' },
  { key: 'boots', label: 'Boots', icon: './../../assets/styles/boys/Categories/Boots.jpg' },

  // 🎒 Accessories
  { key: 'cap', label: 'Caps & Hats', icon: './../../assets/styles/boys/Categories/Caps.jpg' },
  { key: 'scarf', label: 'Scarves', icon: './../../assets/styles/boys/Categories/Scarves.jpg' }
];

export const BOY_TSHIRTS: BoyTitleCategory[] = [
  {
    title: 'T-Shirts',
    items: [
      {
        name: 'Basic Cotton',
        image: './../../assets/styles/boys/Tshirts/Basic-Cotton.jpg',
        defaultColor: 'light blue',
        prompt:
          '{color} short-sleeve cotton t-shirt with soft fabric; relaxed fit suitable for a young boy aged 2–10; modify shirt only, keeping outfit, proportions, and background identical'
      },
      {
        name: 'Graphic Print',
        image: './../../assets/styles/boys/Tshirts/Graphic-Print.jpg',
        defaultColor: 'white with small cartoon or car print',
        prompt:
          '{color} t-shirt with small playful cartoon or car pattern on front; soft cotton fabric; modify only shirt, preserving shorts or pants, body, and lighting'
      },
      {
        name: 'Raglan Sleeve',
        image: './../../assets/styles/boys/Tshirts/Raglan-Sleeve.jpg',
        defaultColor: 'white and navy',
        prompt:
          '{color} raglan-sleeve cotton t-shirt with contrast sleeves; sporty casual look; modify shirt only, keeping background and proportions unchanged'
      },
      {
        name: 'Striped',
        image: './../../assets/styles/boys/Tshirts/Striped.jpg',
        defaultColor: 'white and sky blue stripes',
        prompt:
          '{color} striped cotton t-shirt with classic round neckline; soft texture; modify only shirt keeping natural lighting and pose consistent'
      },
      {
        name: 'Pocket Tee',
        image: './../../assets/styles/boys/Tshirts/Pocket-Tee.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} short-sleeve cotton t-shirt with small chest pocket; natural texture; modify shirt only keeping hairstyle, pants, and background identical'
      },
      {
        name: 'Henley',
        image: './../../assets/styles/boys/Tshirts/Henley.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} henley-style t-shirt with short button placket; soft breathable fabric; modify shirt only keeping all other outfit parts the same'
      },
      {
        name: 'Color Block',
        image: './../../assets/styles/boys/Tshirts/Color-Block.jpg',
        defaultColor: 'blue and white mix',
        prompt:
          '{color} color-block t-shirt with two-tone design; casual and comfortable; modify only shirt keeping lighting and proportions natural'
      },
      {
        name: 'Printed Motif',
        image: './../../assets/styles/boys/Tshirts/Printed-Motif.jpg',
        defaultColor: 'light gray with small logo motif',
        prompt:
          '{color} t-shirt with small chest motif or text pattern; keep details subtle and age-appropriate; modify only shirt keeping outfit intact'
      },
      {
        name: 'Sports',
        image: './../../assets/styles/boys/Tshirts/Sports.jpg', 
        defaultColor: 'navy blue',
        prompt:
          '{color} sporty cotton t-shirt with simple athletic design; lightweight fabric; modify shirt only preserving proportions and lighting'
      },
      {
        name: 'Dinosaur Print',
        image: './../../assets/styles/boys/Tshirts/Dinosaur-Print.jpg',
        defaultColor: 'white with green dinosaur pattern',
        prompt:
          '{color} t-shirt featuring small dinosaur or adventure-themed print; soft cotton fabric; modify shirt only keeping body, outfit, and background unchanged'
      }
    ]
  }
];
export const BOY_SHIRTS: BoyTitleCategory[] = [
  {
    title: 'Shirts',
    items: [
      {
        name: 'Button-Up',
        image: './../../assets/styles/boys/Shirts/Classic-Button-Up.jpg',
        defaultColor: 'light blue',
        prompt:
          '{color} classic cotton button-up shirt with collar; relaxed fit suitable for a young boy aged 2–10; modify shirt only, keeping proportions, background, and other outfit parts identical'
      },
      {
        name: 'Plaid',
        image: './../../assets/styles/boys/Shirts/Plaid.jpg',
        defaultColor: 'red and navy plaid',
        prompt:
          '{color} plaid long-sleeve shirt with button front; soft flannel texture; modify only shirt keeping pants, lighting, and pose unchanged'
      },

      {
        name: 'Short-Sleeve Casual',
        image: './../../assets/styles/boys/Shirts/Short-Sleeve-Casual.jpg',
        defaultColor: 'white with thin stripes',
        prompt:
          '{color} short-sleeve casual shirt with button front; breathable cotton fabric; modify only shirt keeping other clothes and lighting identical'
      },
      {
        name: 'Checkered',
        image: './../../assets/styles/boys/Shirts/Checkered.jpg',
        defaultColor: 'green and white checks',
        prompt:
          '{color} checkered cotton shirt; soft lightweight texture; modify only shirt keeping outfit consistent and pose unchanged'
      },
      {
        name: 'Linen',
        image: './../../assets/styles/boys/Shirts/Linen.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} linen shirt with short sleeves and natural wrinkles; comfortable summer look; modify shirt only keeping proportions intact'
      },
      {
        name: 'Oxford',
        image: './../../assets/styles/boys/Shirts/Oxford.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} oxford-style cotton shirt with subtle texture and buttons; classic clean design; modify shirt only keeping all other parts unchanged'
      },
      {
        name: 'Printed',
        image: './../../assets/styles/boys/Shirts/Printed.jpg',
        defaultColor: 'white with small airplane pattern',
        prompt:
          '{color} cotton shirt with small playful pattern (like stars or airplanes); modify only shirt, keeping proportions, lighting, and background consistent'
      },

      {
        name: 'Corduroy',
        image: './../../assets/styles/boys/Shirts/Corduroy.jpg',
        defaultColor: 'light brown',
        prompt:
          '{color} corduroy shirt with fine texture and front pockets; warm and soft look; modify only shirt keeping proportions and lighting unchanged'
      }
    ]
  }
];
export const BOY_SWEATERS: BoyTitleCategory[] = [
  {
    title: 'Sweaters',
    items: [
      {
        name: 'Classic Knit',
        image: './../../assets/styles/boys/Sweaters/Classic-Knit.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} knitted sweater with simple round neckline; soft wool-blend texture; modify sweater only, keeping shirt, pants, background, and proportions identical'
      },
      {
        name: 'Cable Knit',
        image: './../../assets/styles/boys/Sweaters/Cable-Knit.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} cable-knit wool sweater with cozy texture; age-appropriate classic style for a young boy; modify sweater only, preserving all other outfit elements'
      },
      {
        name: 'Striped Pullover',
        image: './../../assets/styles/boys/Sweaters/Striped-Pullover.jpg',
        defaultColor: 'gray and blue stripes',
        prompt:
          '{color} striped pullover sweater with round neckline; soft knit fabric; modify sweater only keeping background, proportions, and lighting consistent'
      },
      {
        name: 'V-Neck',
        image: './../../assets/styles/boys/Sweaters/V-Neck.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} v-neck cotton-blend sweater layered over a shirt; clean, classic look for a young boy; modify sweater only keeping other clothes intact'
      },
      {
        name: 'Half-Zip',
        image: './../../assets/styles/boys/Sweaters/Half-Zip.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} half-zip pullover sweater with ribbed collar and cuffs; comfortable and casual; modify sweater only keeping lighting and proportions natural'
      },
      {
        name: 'Crew Neck',
        image: './../../assets/styles/boys/Sweaters/Crew-Neck.jpg',
        defaultColor: 'burgundy',
        prompt:
          '{color} crew-neck sweater made of soft cotton or fleece; relaxed everyday look; modify only sweater keeping outfit and background identical'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/boys/Sweaters/Patterned.jpg',
        defaultColor: 'light blue with simple geometric pattern',
        prompt:
          '{color} sweater with subtle geometric or stripe pattern; soft knitted material; modify sweater only keeping all proportions and lighting consistent'
      },
      {
        name: 'Ribbed',
        image: './../../assets/styles/boys/Sweaters/Ribbed.jpg',
        defaultColor: 'dark gray',
        prompt:
          '{color} ribbed cotton sweater with elastic cuffs and waistband; natural texture; modify sweater only keeping outfit unchanged'
      },
      {
        name: 'Color Block',
        image: './../../assets/styles/boys/Sweaters/Color-Block.jpg',
        defaultColor: 'blue and white mix',
        prompt:
          '{color} color-block knit sweater with two-tone pattern; soft material; modify sweater only keeping pose and proportions natural'
      },
      {
        name: 'Zip-Up ',
        image: './../../assets/styles/boys/Sweaters/Zip-Up-Knit.jpg',
        defaultColor: 'light brown',
        prompt:
          '{color} zip-up knitted sweater with soft collar; cozy texture and casual fit; modify sweater only keeping all other outfit parts identical'
      }
    ]
  }
];
export const BOY_HOODIES: BoyTitleCategory[] = [
  {
    title: 'Hoodies',
    items: [
      {
        name: 'Classic Pullover',
        image: './../../assets/styles/boys/Hoodies/Classic-Pullover.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} pullover hoodie with kangaroo pocket and soft fleece texture; comfortable everyday style for a young boy; modify hoodie only, keeping proportions, background, and body identical'
      },
      {
        name: 'Zip-Up',
        image: './../../assets/styles/boys/Hoodies/Zip-Up.jpg',
        defaultColor: 'gray',
        prompt:
          '{color} zip-up cotton hoodie with front pockets; relaxed fit; modify hoodie only keeping pants, lighting, and facial features unchanged'
      },
      {
        name: 'Color Block',
        image: './../../assets/styles/boys/Hoodies/Color-Block.jpg',
        defaultColor: 'blue and white mix',
        prompt:
          '{color} two-tone color-block hoodie; sporty look suitable for a boy aged 2–10; modify hoodie only preserving outfit proportions and background'
      },
      {
        name: 'Graphic Print',
        image: './../../assets/styles/boys/Hoodies/Graphic-Print.jpg',
        defaultColor: 'light gray with small pattern',
        prompt:
          '{color} hoodie with small playful print (cartoon or animal); soft cotton fleece; modify only hoodie keeping pose and lighting natural'
      },
      {
        name: 'Sporty',
        image: './../../assets/styles/boys/Hoodies/Sporty.jpg',
        defaultColor: 'dark blue with stripe detail',
        prompt:
          '{color} sporty hoodie with minimal stripe or logo detail; breathable fabric; modify hoodie only keeping all proportions identical'
      },
      {
        name: 'Fleece-Lined',
        image: './../../assets/styles/boys/Hoodies/Fleece-Lined.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} hoodie with warm fleece lining; soft cozy texture; modify only hoodie keeping other outfit elements unchanged'
      },

      {
        name: 'Striped',
        image: './../../assets/styles/boys/Hoodies/Striped.jpg',
        defaultColor: 'gray and navy stripes',
        prompt:
          '{color} striped hoodie with casual design; modify hoodie only keeping pants, pose, and facial details the same'
      },
      {
        name: 'Pocket Detail',
        image: './../../assets/styles/boys/Hoodies/Pocket-Detail.jpg',
        defaultColor: 'light brown',
        prompt:
          '{color} hoodie with front pocket and ribbed cuffs; natural soft texture; modify hoodie only keeping background consistent'
      },

    ]
  }
];
export const BOY_PANTS: BoyTitleCategory[] = [
  {
    title: 'Pants',
    items: [
      {
        name: 'Classic Cotton',
        image: './../../assets/styles/boys/Pants/Classic-Cotton.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} straight-cut cotton pants with soft fabric; comfortable everyday style for a young boy aged 2–10; modify pants only keeping shirt, background, and body proportions identical'
      },
      {
        name: 'Chino',
        image: './../../assets/styles/boys/Pants/Chino.jpg',
        defaultColor: 'khaki',
        prompt:
          '{color} chino pants with side pockets; light cotton-twill texture; modify pants only keeping lighting, pose, and upper clothing unchanged'
      },
      {
        name: 'Cargo',
        image: './../../assets/styles/boys/Pants/Cargo.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} cargo pants with flap pockets on the sides; durable fabric suitable for active boys; modify pants only keeping outfit proportions and background the same'
      },
      {
        name: 'Jogger',
        image: './../../assets/styles/boys/Pants/Jogger.jpg',
        defaultColor: 'dark gray',
        prompt:
          '{color} jogger pants with elastic waistband and cuffs; soft cotton or fleece; modify pants only keeping all other outfit parts identical'
      },
      {
        name: 'Corduroy',
        image: './../../assets/styles/boys/Pants/Corduroy.jpg',
        defaultColor: 'light brown', 
        prompt:
          '{color} corduroy pants with fine ribbed texture; soft and warm; modify pants only keeping shirt and background consistent'
      },
      {
        name: 'Slim Fit',
        image: './../../assets/styles/boys/Pants/Slim-Fit.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} slim-cut cotton pants (not tight, comfortable for a child); modify only pants keeping natural proportions and lighting identical'
      },
      {
        name: 'Drawstring',
        image: './../../assets/styles/boys/Pants/Drawstring.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} drawstring pants made of soft cotton blend; relaxed fit for daily wear; modify pants only keeping upper clothes and lighting unchanged'
      },
      {
        name: 'Denim Look',
        image: './../../assets/styles/boys/Pants/Denim-Look.jpg',
        defaultColor: 'blue denim tone',
        prompt:
          '{color} denim-style cotton pants with elastic waistband; casual comfortable look; modify pants only keeping proportions and background natural'
      },
      {
        name: 'Checkered',
        image: './../../assets/styles/boys/Pants/Checkered.jpg',
        defaultColor: 'gray check pattern',
        prompt:
          '{color} checkered pants with straight relaxed fit; soft cotton fabric; modify only pants keeping shirt, lighting, and pose unchanged'
      },
      {
        name: 'Sweatpants',
        image: './../../assets/styles/boys/Pants/Sweatpants.jpg',
        defaultColor: 'charcoal gray',
        prompt:
          '{color} fleece sweatpants with elastic cuffs and waistband; casual and cozy style for young boys; modify pants only keeping background and shirt identical'
      }
    ]
  }
];
export const BOY_JEANS: BoyTitleCategory[] = [
  {
    title: 'Jeans',
    items: [
      {
        name: 'Classic Blue',
        image: './../../assets/styles/boys/Jeans/Classic-Blue.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} classic straight-leg denim jeans; soft cotton fabric; natural fit for a young boy aged 2–10; modify jeans only keeping shirt, background, and proportions unchanged'
      },
      {
        name: 'Light Wash',
        image: './../../assets/styles/boys/Jeans/Light-Wash.jpg',
        defaultColor: 'light blue',
        prompt:
          '{color} light-wash denim jeans with soft worn texture; comfortable and casual; modify jeans only keeping other outfit parts and lighting consistent'
      },

      {
        name: 'Slim Fit',
        image: './../../assets/styles/boys/Jeans/Slim-Fit.jpg',
        defaultColor: 'navy denim',
        prompt:
          '{color} slim-fit jeans (comfortable, not tight); soft stretch denim; modify jeans only keeping upper clothes and pose identical'
      },

      {
        name: 'Ripped Style',
        image: './../../assets/styles/boys/Jeans/Ripped-Style.jpg',
        defaultColor: 'faded blue',
        prompt:
          '{color} jeans with light distressed texture (no holes, age-appropriate); natural worn denim; modify jeans only keeping outfit and body proportions consistent'
      },
      {
        name: 'Cargo Denim',
        image: './../../assets/styles/boys/Jeans/Cargo-Denim.jpg',
        defaultColor: 'washed blue',
        prompt:
          '{color} denim cargo jeans with small side pockets; casual durable style; modify jeans only keeping shirt, pose, and background identical'
      },

      {
        name: 'Black Denim',
        image: './../../assets/styles/boys/Jeans/Black-Denim.jpg',
        defaultColor: 'black',
        prompt:
          '{color} black denim jeans with clean straight design; modify jeans only keeping lighting, pose, and upper clothes consistent'
      },
      {
        name: 'Gray Wash',
        image: './../../assets/styles/boys/Jeans/Gray-Wash.jpg',
        defaultColor: 'gray denim',
        prompt:
          '{color} gray-wash jeans with simple stitching; soft cotton blend; modify jeans only preserving proportions and background identical'
      }
    ]
  }
];
export const BOY_SHORTS: BoyTitleCategory[] = [
  {
    title: 'Shorts',
    items: [
      {
        name: 'Classic Cotton',
        image: './../../assets/styles/boys/Shorts/Classic-Cotton.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} cotton shorts with straight relaxed fit; lightweight and breathable for a young boy aged 2–10; modify shorts only keeping shirt, lighting, and background identical'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/boys/Shorts/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim shorts with rolled hems and soft texture; casual summer style; modify shorts only preserving pose, shirt, and lighting'
      },
      {
        name: 'Cargo',
        image: './../../assets/styles/boys/Shorts/Cargo.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} cargo shorts with small side pockets; durable cotton fabric; modify shorts only keeping body proportions and background consistent'
      },
      {
        name: 'Sport',
        image: './../../assets/styles/boys/Shorts/Sport.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} sporty shorts made of soft polyester or cotton blend; elastic waistband; modify shorts only keeping outfit and proportions identical'
      },
      {
        name: 'Drawstring',
        image: './../../assets/styles/boys/Shorts/Drawstring.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} drawstring shorts with soft cotton texture; relaxed fit for daily wear; modify shorts only keeping upper clothes unchanged'
      },
      {
        name: 'Checkered',
        image: './../../assets/styles/boys/Shorts/Checkered.jpg',
        defaultColor: 'blue and white check pattern',
        prompt:
          '{color} checkered cotton shorts with straight leg; soft and natural look; modify shorts only keeping lighting and pose identical'
      },
      {
        name: 'Jersey',
        image: './../../assets/styles/boys/Shorts/Jersey.jpg',
        defaultColor: 'charcoal gray',
        prompt:
          '{color} jersey shorts with elastic waistband; soft lightweight fabric; modify shorts only preserving shirt, lighting, and background'
      },

      {
        name: 'Khaki',
        image: './../../assets/styles/boys/Shorts/Khaki.jpg',
        defaultColor: 'sand beige',
        prompt:
          '{color} khaki shorts with front pockets; lightweight twill cotton; modify shorts only keeping upper outfit and background unchanged'
      },
      {
        name: 'Printed',
        image: './../../assets/styles/boys/Shorts/Printed.jpg',
        defaultColor: 'light blue with small print',
        prompt:
          '{color} printed cotton shorts with tiny playful motifs (stars or animals); age-appropriate design; modify shorts only preserving proportions and lighting'
      }
    ]
  }
];
export const BOY_JACKETS: BoyTitleCategory[] = [
  {
    title: 'Jackets',
    items: [
      {
        name: 'Denim',
        image: './../../assets/styles/boys/Jackets/Denim-Jacket.jpg', 
        defaultColor: 'blue denim',
        prompt:
          '{color} denim jacket with front buttons and chest pockets; soft cotton denim; natural fit for a young boy aged 2–10; modify jacket only keeping shirt, pants, lighting, and face identical'
      },
      {
        name: 'Bomber',
        image: './../../assets/styles/boys/Jackets/Bomber-Jacket.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} bomber jacket with ribbed cuffs and waistband; lightweight nylon or cotton; modify jacket only preserving proportions, background, and outfit consistency'
      },
      {
        name: 'Puffer',
        image: './../../assets/styles/boys/Jackets/Puffer-Jacket.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} puffer jacket with soft quilted texture; cozy and warm; modify jacket only keeping pants, pose, and lighting unchanged'
      },
      {
        name: 'Windbreaker',
        image: './../../assets/styles/boys/Jackets/Windbreaker.jpg',
        defaultColor: 'light gray',
        prompt:
          '{color} windbreaker jacket with front zipper and hood; light material for outdoor play; modify jacket only preserving proportions and background identical'
      },
      {
        name: 'Hooded',
        image: './../../assets/styles/boys/Jackets/Hooded-Jacket.jpg',
        defaultColor: 'charcoal gray',
        prompt:
          '{color} hooded jacket with front zipper and pockets; soft cotton-blend; modify jacket only keeping shirt, pants, and lighting consistent'
      },
      {
        name: 'Varsity',
        image: './../../assets/styles/boys/Jackets/Varsity-Jacket.jpg',
        defaultColor: 'navy and white',
        prompt:
          '{color} varsity-style jacket with ribbed cuffs and letter-style design; modify jacket only keeping proportions and background identical'
      },
      {
        name: 'Corduroy',
        image: './../../assets/styles/boys/Jackets/Corduroy-Jacket.jpg',
        defaultColor: 'brown',
        prompt:
          '{color} corduroy jacket with soft ribbed texture; warm autumn look; modify jacket only keeping pants and lighting unchanged'
      },
      {
        name: 'Rain',
        image: './../../assets/styles/boys/Jackets/Rain-Jacket.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} waterproof rain jacket with hood; smooth matte texture; modify jacket only keeping background and outfit proportions the same'
      },
      {
        name: 'Fleece',
        image: './../../assets/styles/boys/Jackets/Fleece-Jacket.jpg',
        defaultColor: 'dark green',
        prompt:
          '{color} fleece zip-up jacket; soft warm texture; modify jacket only preserving shirt, lighting, and proportions identical'
      },
      {
        name: 'Classic Zip',
        image: './../../assets/styles/boys/Jackets/Classic-Zip-Jacket.jpg',
        defaultColor: 'black',
        prompt:
          '{color} classic zip jacket with minimal design; smooth cotton blend fabric; modify jacket only keeping all other outfit parts unchanged'
      }
    ]
  }
];
export const BOY_COATS: BoyTitleCategory[] = [
  {
    title: 'Coats',
    items: [
      {
        name: 'Wool Blend',
        image: './../../assets/styles/boys/Coats/Wool-Blend-Coat.jpg',
        defaultColor: 'charcoal gray',
        prompt:
          '{color} wool-blend coat with soft texture and front buttons; warm and elegant winter wear for a young boy aged 2–10; modify coat only keeping shirt, pants, and proportions unchanged'
      },
      {
        name: 'Peacoat',
        image: './../../assets/styles/boys/Coats/Peacoat.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} double-breasted peacoat with short length and smooth wool texture; modify coat only preserving lighting, face, and outfit proportions'
      },
      {
        name: 'Trench',
        image: './../../assets/styles/boys/Coats/Trench-Coat.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} lightweight trench coat with belt and buttons; natural relaxed fit; modify coat only keeping background, shirt, and pose identical'
      },
      {
        name: 'Parka',
        image: './../../assets/styles/boys/Coats/Parka-Coat.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} parka coat with hood and soft lining; outdoor winter design; modify coat only keeping pants, shirt, and lighting consistent'
      },
      {
        name: 'Rain',
        image: './../../assets/styles/boys/Coats/Rain-Coat.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} waterproof raincoat with hood; smooth matte finish; modify coat only keeping proportions and face unchanged'
      },
      {
        name: 'Faux Fur Hooded',
        image: './../../assets/styles/boys/Coats/Faux-Fur-Hooded-Coat.jpg',
        defaultColor: 'dark brown',
        prompt:
          '{color} winter coat with faux fur hood; warm cozy design; modify coat only keeping pants, background, and lighting consistent'
      },
      {
        name: 'Padded Long',
        image: './../../assets/styles/boys/Coats/Padded-Long-Coat.jpg',
        defaultColor: 'black',
        prompt:
          '{color} padded long coat with quilted texture; modify coat only keeping proportions, face, and outfit unchanged'
      },
      {
        name: 'Classic Button',
        image: './../../assets/styles/boys/Coats/Classic-Button-Coat.jpg',
        defaultColor: 'camel brown',
        prompt:
          '{color} classic cotton coat with front buttons and straight silhouette; modify coat only keeping lighting and pose identical'
      },
      {
        name: 'Fleece-Lined',
        image: './../../assets/styles/boys/Coats/Fleece-Lined-Coat.jpg',
        defaultColor: 'navy',
        prompt:
          '{color} fleece-lined coat with soft texture; warm and practical; modify coat only keeping shirt, pants, and background consistent'
      },
      {
        name: 'Checked Wool',
        image: './../../assets/styles/boys/Coats/Checked-Wool-Coat.jpg',
        defaultColor: 'gray check pattern',
        prompt:
          '{color} wool coat with check pattern and front buttons; age-appropriate neat look; modify coat only keeping proportions and lighting the same'
      }
    ]
  }
];

export const BOY_SNEAKERS: BoyTitleCategory[] = [
  {
    title: 'Sneakers',
    items: [
      {
        name: 'Classic White',
        image: './../../assets/styles/boys/Sneakers/Classic-White.jpg', 
        defaultColor: 'white',
        prompt:
          '{color} classic sneakers with simple design and rubber sole; clean look suitable for young boys aged 2–10; modify shoes only keeping legs, proportions, and background identical'
      },
      {
        name: 'Color Block',
        image: './../../assets/styles/boys/Sneakers/Color-Block.jpg',
        defaultColor: 'blue and red mix',
        prompt:
          '{color} sneakers with color-block design; soft and lightweight material; modify shoes only keeping lighting and outfit consistent'
      },
      {
        name: 'Velcro Strap',
        image: './../../assets/styles/boys/Sneakers/Velcro-Strap.jpg',
        defaultColor: 'gray with white sole',
        prompt:
          '{color} sneakers with velcro straps; comfortable easy-to-wear design for children; modify shoes only preserving body proportions and background unchanged'
      },
      {
        name: 'Sporty Running',
        image: './../../assets/styles/boys/Sneakers/Sporty-Running.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} sporty running sneakers with breathable mesh upper; modify shoes only keeping pose, pants, and lighting identical'
      },
      {
        name: 'Canvas Low-Top',
        image: './../../assets/styles/boys/Sneakers/Canvas-Low-Top.jpg',
        defaultColor: 'light blue',
        prompt:
          '{color} canvas low-top sneakers with laces; soft flexible fabric; modify shoes only keeping outfit and background consistent'
      },
      {
        name: 'High-Top',
        image: './../../assets/styles/boys/Sneakers/High-Top.jpg',
        defaultColor: 'red',
        prompt:
          '{color} high-top sneakers with soft canvas material and white rubber sole; modify shoes only keeping proportions and lighting identical'
      },
      
      {
        name: 'Slip-On',
        image: './../../assets/styles/boys/Sneakers/Slip-On.jpg',
        defaultColor: 'gray',
        prompt:
          '{color} slip-on sneakers with elastic sides; minimal clean look; modify shoes only keeping legs and lighting consistent'
      },
      {
        name: 'Chunky Sole',
        image: './../../assets/styles/boys/Sneakers/Chunky-Sole.jpg',
        defaultColor: 'white and gray mix',
        prompt:
          '{color} sneakers with slightly chunky sole and sporty design; modify shoes only keeping outfit proportions unchanged'
      },

    ]
  }
];
export const BOY_BOOTS: BoyTitleCategory[] = [
  {
    title: 'Boots',
    items: [
      {
        name: 'Classic Leather',
        image: './../../assets/styles/boys/Boots/Classic-Leather.jpg',
        defaultColor: 'brown',
        prompt:
          '{color} ankle leather boots with simple classic design and rubber sole; modify boots only keeping pants, proportions, and background unchanged'
      },
      {
        name: 'Chelsea',
        image: './../../assets/styles/boys/Boots/Chelsea.jpg',
        defaultColor: 'tan brown',
        prompt:
          '{color} chelsea boots with elastic side panels; smooth leather finish; modify boots only keeping legs and pose identical'
      },
      {
        name: 'Lace-Up',
        image: './../../assets/styles/boys/Boots/Lace-Up.jpg',
        defaultColor: 'dark brown',
        prompt:
          '{color} lace-up boots with durable sole and stitched detail; modify boots only preserving outfit proportions and lighting consistent'
      },
      {
        name: 'Snow',
        image: './../../assets/styles/boys/Boots/Snow-Boots.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} snow boots with padded lining and waterproof texture; modify boots only keeping pants and background the same'
      },
      {
        name: 'Hiking',
        image: './../../assets/styles/boys/Boots/Hiking-Boots.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} hiking boots with rugged sole and ankle support; suitable for outdoor look; modify boots only keeping proportions identical'
      },
      {
        name: 'Rain',
        image: './../../assets/styles/boys/Boots/Rain-Boots.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} waterproof rain boots with glossy finish; cheerful and playful; modify boots only keeping lighting and outfit consistent'
      },
      {
        name: 'Fur-Lined Winter',
        image: './../../assets/styles/boys/Boots/Fur-Lined-Winter-Boots.jpg',
        defaultColor: 'dark gray',
        prompt:
          '{color} warm winter boots with faux-fur lining; modify boots only keeping proportions and body unchanged'
      },

      {
        name: 'Two-Tone',
        image: './../../assets/styles/boys/Boots/Two-Tone-Boots.jpg',
        defaultColor: 'brown and beige mix',
        prompt:
          '{color} two-tone boots with soft leather and contrast sole; modify boots only preserving lighting and proportions'
      },

    ]
  }
];

export const BOY_CAPS: BoyTitleCategory[] = [
  {
    title: 'Caps & Hats',
    items: [
      {
        name: 'Baseball',
        image: './../../assets/styles/boys/Caps/Baseball-Cap.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} baseball cap with curved brim and adjustable back strap; casual and sporty; modify hat only keeping hair, face, and background unchanged'
      },
      {
        name: 'Beanie',
        image: './../../assets/styles/boys/Caps/Beanie.jpg',
        defaultColor: 'gray',
        prompt:
          '{color} knitted beanie with soft texture; suitable for cold weather; modify hat only preserving facial features and proportions identical'
      },
      {
        name: 'Bucket',
        image: './../../assets/styles/boys/Caps/Bucket-Hat.jpg',
        defaultColor: 'light blue',
        prompt:
          '{color} bucket hat with soft brim and lightweight cotton fabric; modify hat only keeping lighting and expression consistent'
      },
      {
        name: 'Snapback',
        image: './../../assets/styles/boys/Caps/Snapback.jpg',
        defaultColor: 'black',
        prompt:
          '{color} snapback cap with flat brim and structured crown; modify hat only preserving hairstyle, proportions, and background unchanged'
      },
      {
        name: 'Sun',
        image: './../../assets/styles/boys/Caps/Sun-Hat.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} wide-brimmed sun hat made of light cotton; cheerful summer style; modify hat only keeping lighting and pose identical'
      },
      {
        name: 'Trucker',
        image: './../../assets/styles/boys/Caps/Trucker-Cap.jpg',
        defaultColor: 'red and white',
        prompt:
          '{color} trucker cap with mesh back; playful casual style; modify hat only keeping face, expression, and lighting consistent'
      },
      {
        name: 'Winter Pom',
        image: './../../assets/styles/boys/Caps/Winter-Pom-Hat.jpg',
        defaultColor: 'blue with pom',
        prompt:
          '{color} knitted winter hat with pom-pom on top; warm and cozy; modify hat only keeping hair and facial proportions unchanged'
      },
      {
        name: 'Flat',
        image: './../../assets/styles/boys/Caps/Flat-Cap.jpg',
        defaultColor: 'dark gray',
        prompt:
          '{color} flat cap with soft rounded shape; classic boyish look; modify hat only keeping body and background identical'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/boys/Caps/Patterned-Cap.jpg',
        defaultColor: 'blue with pattern',
        prompt:
          '{color} cap with playful printed pattern or small cartoon motif; modify hat only preserving lighting and natural facial features'
      },
      {
        name: 'Rain',
        image: './../../assets/styles/boys/Caps/Rain-Hat.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} waterproof rain hat with short brim; cheerful and childlike style; modify hat only keeping outfit and lighting consistent'
      }
    ]
  }
];

export const BOY_SCARVES: BoyTitleCategory[] = [
  {
    title: 'Scarves',
    items: [
      {
        name: 'Knitted',
        image: './../../assets/styles/boys/Scarves/Knitted-Scarf.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} knitted wool scarf with soft texture; cozy winter accessory; modify scarf only keeping proportions, body, and lighting identical'
      },
      {
        name: 'Plaid',
        image: './../../assets/styles/boys/Scarves/Plaid-Scarf.jpg',
        defaultColor: 'red and gray plaid',
        prompt:
          '{color} plaid patterned scarf with warm fabric; stylish yet childlike; modify scarf only preserving outfit and background unchanged'
      },
      {
        name: 'Striped Cotton',
        image: './../../assets/styles/boys/Scarves/Striped-Cotton-Scarf.jpg',
        defaultColor: 'white and blue stripes',
        prompt:
          '{color} lightweight cotton scarf with subtle stripes; modify scarf only keeping posture, proportions, and lighting consistent'
      },
      {
        name: 'Chunky Winter',
        image: './../../assets/styles/boys/Scarves/Chunky-Winter-Scarf.jpg',
        defaultColor: 'gray',
        prompt:
          '{color} thick chunky knit scarf; warm and cozy look for winter; modify scarf only keeping outfit, background, and lighting the same'
      },
      {
        name: 'Fleece',
        image: './../../assets/styles/boys/Scarves/Fleece-Scarf.jpg',
        defaultColor: 'dark blue',
        prompt:
          '{color} fleece scarf with smooth texture; lightweight winter accessory; modify scarf only keeping proportions identical'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/boys/Scarves/Patterned-Scarf.jpg',
        defaultColor: 'light gray with small pattern',
        prompt:
          '{color} patterned cotton scarf; playful yet simple design; modify scarf only keeping outfit and body proportions unchanged'
      },
      {
        name: 'Fringed',
        image: './../../assets/styles/boys/Scarves/Fringed-Scarf.jpg',
        defaultColor: 'brown',
        prompt:
          '{color} scarf with short fringe edges; soft wool blend; modify scarf only keeping lighting and facial expression consistent'
      },
      {
        name: 'Winter Set',
        image: './../../assets/styles/boys/Scarves/Winter-Set-Scarf.jpg',
        defaultColor: 'blue with matching hat',
        prompt:
          '{color} winter scarf as part of matching hat-and-scarf set; modify scarf only keeping hat and proportions consistent'
      },
      {
        name: 'Solid Cotton',
        image: './../../assets/styles/boys/Scarves/Solid-Cotton-Scarf.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} solid-colored cotton scarf with simple knot; modify scarf only preserving outfit and body unchanged'
      },

    ]
  }
];
