export interface GirlTitleCategory {
  title: string;
  items: GirlCategory[];
}

export interface GirlCategory {
  name: string;
  image: string;
  prompt?: string;
  defaultColor?: string;
}


export const GIRL_CATEGORIES = [
  // 👚 Tops
  { key: 'tshirt', label: 'T-Shirts', icon: './../../assets/styles/girls/Categories/T-Shirts.jpg' },
  { key: 'crop', label: 'Crops', icon: './../../assets/styles/girls/Categories/Crops.jpg' },
  { key: 'blouse', label: 'Blouses', icon: './../../assets/styles/girls/Categories/Blouses.jpg' },
  { key: 'sweater', label: 'Sweaters ', icon: './../../assets/styles/girls/Categories/Sweaters.jpg' },

  // 👗 Dresses
  { key: 'dress', label: 'Dresses', icon: './../../assets/styles/girls/Categories/Dresses.jpg' },
  { key: 'jumpsuit', label: 'Jumpsuits', icon: './../../assets/styles/girls/Categories/Jumpsuits.jpg' },

  // 👖 Bottoms
  { key: 'pants', label: 'Pants', icon: './../../assets/styles/girls/Categories/Pants.jpg' },
  { key: 'jeans', label: 'Jeans', icon: './../../assets/styles/girls/Categories/Jeans.jpg' },
  { key: 'skirt', label: 'Skirts', icon: './../../assets/styles/girls/Categories/Skirts.jpg' },
  { key: 'shorts', label: 'Shorts', icon: './../../assets/styles/girls/Categories/Shorts.jpg' },

  // 🧥 Outerwear
  { key: 'jacket', label: 'Jackets', icon: './../../assets/styles/girls/Categories/Jackets.jpg' },
  { key: 'hoodie', label: 'Hoodies', icon: './../../assets/styles/girls/Categories/Hoodies.jpg' },
  { key: 'cardigan', label: 'Cardigans', icon: './../../assets/styles/girls/Categories/Cardigans.jpg' },
  { key: 'scarf', label: 'Scarves', icon: './../../assets/styles/girls/Categories/Scarves.jpg' },

  // 👟 Shoes
  { key: 'sneakers', label: 'Sneakers', icon: './../../assets/styles/girls/Categories/Sneakers.jpg' },
  { key: 'boots', label: 'Boots', icon: './../../assets/styles/girls/Categories/Boots.jpg' },
  { key: 'sandals', label: 'Sandals', icon: './../../assets/styles/girls/Categories/Sandals.jpg' },

  // 🎀 Accessories
  { key: 'bag', label: 'Bags', icon: './../../assets/styles/girls/Categories/Bags.jpg' },
  { key: 'hat', label: 'Hats', icon: './../../assets/styles/girls/Categories/Hats.jpg' },
  { key: 'jewelry', label: 'Jewelry ', icon: './../../assets/styles/girls/Categories/Jewelry.jpg' } 
];



export const GIRL_TSHIRTS: GirlTitleCategory[] = [
  {
    title: 'T-Shirts',
    items: [
      {
        name: 'Basic Cotton',
        image: './../../assets/styles/girls/Tshirts/Basic-Cotton.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} short-sleeve cotton t-shirt with soft texture; natural fit for a young girl; modify shirt only, keeping outfit, proportions, and background identical'
      },
      {
        name: 'Graphic',
        image: './../../assets/styles/girls/Tshirts/Graphic.jpg',
        defaultColor: 'white with cartoon print',
        prompt:
          '{color} t-shirt with cute cartoon or animal print on front; soft cotton fabric; modify only shirt, preserving pants, body, and lighting'
      },
      {
        name: 'Ruffled Sleeve',
        image: './../../assets/styles/girls/Tshirts/Ruffled-Sleeve.jpg',
        defaultColor: 'peach',
        prompt:
          '{color} short-sleeve t-shirt with small ruffles on sleeves; smooth cotton knit; modify only shirt keeping all other clothes and background unchanged'
      },
      {
        name: 'Striped',
        image: './../../assets/styles/girls/Tshirts/Striped.jpg',
        defaultColor: 'white and lavender stripes',
        prompt:
          '{color} striped cotton t-shirt with classic round neckline; soft texture; modify only shirt preserving proportions and lighting'
      },
      {
        name: 'Floral Print',
        image: './../../assets/styles/girls/Tshirts/Floral-Print.jpg',
        defaultColor: 'light yellow with small flowers',
        prompt:
          '{color} t-shirt with delicate floral print; breathable cotton fabric; modify shirt only keeping outfit consistent'
      },
      {
        name: 'Pocket',
        image: './../../assets/styles/girls/Tshirts/Pocket.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} short-sleeve t-shirt with small front pocket; soft cotton texture; modify only shirt keeping hair, background, and pants identical'
      },
      {
        name: 'Bow Detail',
        image: './../../assets/styles/girls/Tshirts/Bow-Detail.jpg',
        defaultColor: 'white with pink bow',
        prompt:
          '{color} cotton t-shirt with small decorative bow on front; smooth texture; modify shirt only keeping outfit intact'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Tshirts/Polka-Dot.jpg',
        defaultColor: 'light blue with white dots',
        prompt:
          '{color} polka dot t-shirt with round neck and soft drape; modify shirt only keeping all other outfit elements untouched'
      },
      {
        name: 'Lace Trim',
        image: './../../assets/styles/girls/Tshirts/Lace-Trim.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} t-shirt with lace trim at sleeves or hem; delicate soft texture; modify only shirt preserving lighting and pose'
      },
      {
        name: 'Butterfly Print',
        image: './../../assets/styles/girls/Tshirts/Butterfly-Print.jpg',
        defaultColor: 'white with pastel butterflies',
        prompt:
          '{color} cotton t-shirt decorated with small butterfly prints; soft light texture; modify shirt only keeping outfit and proportions identical'
      }
    ]
  }
];

export const GIRL_CROPS: GirlTitleCategory[] = [
  {
    title: 'Short Tops & Summer Styles',
    items: [
      {
        name: 'Ruffled',
        image: './../../assets/styles/girls/Crop/Ruffled.jpg',
        defaultColor: 'light pink cotton',
        prompt:
          '{color} short summer top with small ruffled hem and sleeves; lightweight cotton fabric; modest child-appropriate length; modify top only keeping pants and background consistent'
      },
      {
        name: 'Sleeveless',
        image: './../../assets/styles/girls/Crop/Sleeveless.jpg',
        defaultColor: 'white with small floral print',
        prompt:
          '{color} sleeveless cotton summer top with soft floral design; loose fit; suitable for a young girl; modify top only preserving pose and lighting'
      },
      {
        name: 'Tie-Front ',
        image: './../../assets/styles/girls/Crop/Tie-Front.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} cotton top with small front tie detail and capped sleeves; modest coverage; modify only top keeping rest of outfit unchanged'
      },
      {
        name: 'Striped',
        image: './../../assets/styles/girls/Crop/Striped.jpg',
        defaultColor: 'white and lavender stripes',
        prompt:
          '{color} short cotton t-shirt with pastel stripes; comfortable fit, not exposing skin; modify only top preserving proportions and background'
      },
      {
        name: 'Smocked',
        image: './../../assets/styles/girls/Crop/Smocked.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} smocked cotton top with soft elastic texture; short but modest design; modify only top keeping skirt and background identical'
      },
      {
        name: 'Frilled Shoulder',
        image: './../../assets/styles/girls/Crop/Frilled-Shoulder.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} short-sleeve top with small frilled shoulders; light cotton fabric; childlike and modest; modify only top preserving outfit and lighting'
      },
      {
        name: 'Bow Detail',
        image: './../../assets/styles/girls/Crop/Bow-Detail.jpg',
        defaultColor: 'light peach',
        prompt:
          '{color} short top with decorative bow at front; soft cotton blend; modify top only keeping pants and background unchanged'
      },
      {
        name: 'Eyelet Embroidery',
        image: './../../assets/styles/girls/Crop/Eyelet-Embroidery.jpg',
        defaultColor: 'white',
        prompt:
          '{color} embroidered cotton top with delicate eyelet pattern; light texture; modest child-appropriate design; modify only top preserving proportions'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/girls/Crop/Patterned-Summer.jpg',
        defaultColor: 'light blue with tiny prints',
        prompt:
          '{color} short casual top with playful pattern; airy cotton fabric; modify only top keeping outfit and lighting consistent'
      },
      {
        name: 'Sleeve Tie',
        image: './../../assets/styles/girls/Crop/Sleeve-Tie.jpg',
        defaultColor: 'pastel pink',
        prompt:
          '{color} short top with tied short sleeves and smooth cotton texture; gentle summer design; modify top only preserving background and pose'
      }
    ]
  }
];


export const GIRL_BLOUSES: GirlTitleCategory[] = [
  {
    title: 'Blouses & Shirts',
    items: [
      {
        name: 'Cotton Ruffle',
        image: './../../assets/styles/girls/Blouses/Cotton-Ruffle.jpg',
        defaultColor: 'white',
        prompt:
          '{color} cotton blouse with small ruffle collar and soft puff sleeves; lightweight and playful; natural fit for a young girl; keep face, hair, and body proportions identical'
      },
      {
        name: 'Plaid Button',
        image: './../../assets/styles/girls/Blouses/Plaid-Button.jpg',
        defaultColor: 'pink and white plaid',
        prompt:
          '{color} plaid button-up shirt with small collar and short sleeves; gentle cotton fabric; relaxed playful look; modify shirt only, keep pants and environment unchanged'
      },
      {
        name: 'Floral Print',
        image: './../../assets/styles/girls/Blouses/Floral-Print.jpg',
        defaultColor: 'pastel floral pattern',
        prompt:
          '{color} floral-pattern blouse with short puff sleeves and small buttons; lightweight cotton; cheerful everyday look for a little girl'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Blouses/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim shirt with front buttons and small chest pockets; soft washed texture; casual and age-appropriate fit'
      },
      {
        name: 'Striped Cotton',
        image: './../../assets/styles/girls/Blouses/Striped-Cotton.jpg',
        defaultColor: 'pastel pink and white stripes',
        prompt:
          '{color} striped cotton shirt with round collar and rolled short sleeves; smooth lightweight fabric; keep outfit proportions natural'
      },
      {
        name: 'Peplum',
        image: './../../assets/styles/girls/Blouses/Peplum.jpg',
        defaultColor: 'light yellow',
        prompt:
          '{color} peplum-style blouse with soft gathered waist and short sleeves; cheerful and natural fit; modify blouse only'
      },
      {
        name: 'Sleeveless Summer',
        image: './../../assets/styles/girls/Blouses/Sleeveless.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} sleeveless cotton blouse with small bow detail at front; airy and light; keep skin tone and hair exactly the same'
      },
      {
        name: 'Embroidered Collar',
        image: './../../assets/styles/girls/Blouses/Embroidered.jpg',
        defaultColor: 'white with pink embroidery',
        prompt:
          '{color} cotton shirt with delicate embroidered collar; short sleeves; soft pastel tone; cute and modest appearance for a child'
      },
      {
        name: 'Checked Linen',
        image: './../../assets/styles/girls/Blouses/Checked.jpg',
        defaultColor: 'beige and pink check',
        prompt:
          '{color} checked linen blouse with small front buttons and gentle loose shape; natural childlike style'
      },
      {
        name: 'Balloon Sleeve',
        image: './../../assets/styles/girls/Blouses/Balloon-Sleeve.jpg',
        defaultColor: 'light lavender',
        prompt:
          '{color} cotton blouse with subtle balloon sleeves and gathered cuffs; soft fabric and natural playful drape'
      }
    ]
  }
];

export const GIRL_SWEATERS: GirlTitleCategory[] = [
  {
    title: 'Sweaters & Cardigans',
    items: [
      {
        name: 'Knit Pullover',
        image: './../../assets/styles/girls/Sweaters/Knit-Pullover.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} knitted pullover sweater with soft wool texture and round neckline; long sleeves; cozy natural fit for a little girl; update sweater only, keeping all other clothes and background unchanged'
      },
      {
        name: 'Button',
        image: './../../assets/styles/girls/Sweaters/Button-Cardigan.jpg',
        defaultColor: 'cream beige',
        prompt:
          '{color} soft cotton cardigan with small buttons down the front; smooth knit texture; gentle relaxed fit; modify cardigan only, keeping shirt and dress underneath unchanged'
      },
      {
        name: 'Cable Knit',
        image: './../../assets/styles/girls/Sweaters/Cable-Knit-Sweater.jpg',
        defaultColor: 'lavender',
        prompt:
          '{color} cable-knit sweater with classic pattern, ribbed cuffs and hem; warm and soft texture suitable for a child; keep proportions, lighting, and other clothing layers intact'
      },
      {
        name: 'Hooded Knit',
        image: './../../assets/styles/girls/Sweaters/Hooded-Knit.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} hooded knit sweater with front pocket and soft fluffy texture; childlike cozy style; adjust sweater only without altering background or facial details'
      },
      {
        name: 'Floral Embroidered',
        image: './../../assets/styles/girls/Sweaters/Floral.jpg',
        defaultColor: 'pastel yellow',
        prompt:
          '{color} cardigan with small floral embroidery on chest and sleeves; soft cotton-wool blend; delicate and playful look for girls aged 2–10'
      },
      {
        name: 'Striped Pullover',
        image: './../../assets/styles/girls/Sweaters/Striped.jpg',
        defaultColor: 'pink and cream stripes',
        prompt:
          '{color} striped pullover sweater with round neck and ribbed cuffs; natural and cheerful tone; modify sweater only'
      },
      {
        name: 'Knitted Vest',
        image: './../../assets/styles/girls/Sweaters/Knitted-Vest.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} sleeveless knitted vest layered over shirt; fine knit texture; warm yet light style for kids; keep shirt visible under vest'
      },
      {
        name: 'Pom-Pom',
        image: './../../assets/styles/girls/Sweaters/Pom-Pom.jpg',
        defaultColor: 'pastel blue',
        prompt:
          '{color} soft knit sweater decorated with small pom-pom details; round neckline; cozy and playful look; maintain realistic fabric texture and proportions'
      },
      {
        name: 'Fuzzy',
        image: './../../assets/styles/girls/Sweaters/Fuzzy.jpg', 
        defaultColor: 'light beige',
        prompt:
          '{color} fuzzy-textured cardigan with open front; long sleeves; soft warm feel; realistic childlike style; modify cardigan only'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/girls/Sweaters/Patterned.jpg',
        defaultColor: 'cream with pastel hearts',
        prompt:
          '{color} patterned knit sweater with small heart or dot motifs; gentle soft surface; comfortable child-appropriate fit'
      }
    ]
  }
];

export const GIRL_DRESSES: GirlTitleCategory[] = [
  {
    title: 'Dresses',
    items: [
      {
        name: 'Floral Summer',
        image: './../../assets/styles/girls/Dresses/Floral.jpg',
        defaultColor: 'pastel pink floral pattern',
        prompt:
          '{color} cotton summer dress with soft floral print, short puff sleeves, and gathered waist; light flowing shape; modify only the dress while keeping background, body, and hair unchanged'
      },
      {
        name: 'Denim Overall',
        image: './../../assets/styles/girls/Dresses/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim overall-style dress with small front pocket and shoulder straps; casual playful look; preserve all proportions and surroundings unchanged'
      },
      {
        name: 'Party Tulle',
        image: './../../assets/styles/girls/Dresses/Party-Tulle.jpg',
        defaultColor: 'soft pink tulle',
        prompt:
          '{color} tulle dress with layered skirt and satin ribbon waist; light shiny fabric; delicate formal style suitable for a little girl; modify dress only'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Dresses/Polka-Dot.jpg',
        defaultColor: 'navy with white dots',
        prompt:
          '{color} polka-dot cotton dress with short sleeves and flared skirt; cheerful and neat look for kids aged 2–10'
      },
      {
        name: 'Striped Casual',
        image: './../../assets/styles/girls/Dresses/Striped-Casual.jpg',
        defaultColor: 'white and pink stripes',
        prompt:
          '{color} striped cotton dress with gathered waist and short sleeves; simple relaxed design; modify only dress layer'
      },
      {
        name: 'Ruffle ',
        image: './../../assets/styles/girls/Dresses/Ruffle-Sleeve.jpg',
        defaultColor: 'light lavender',
        prompt:
          '{color} dress with ruffle sleeves and small buttons on chest; smooth cotton-linen fabric; natural airy fit for a child'
      },
      {
        name: 'Corduroy',
        image: './../../assets/styles/girls/Dresses/Corduroy.jpg',
        defaultColor: 'soft brown corduroy',
        prompt:
          '{color} corduroy pinafore dress with small front pocket and A-line shape; cozy autumn style; preserve shirt or undershirt underneath unchanged'
      },
      {
        name: 'Checkered',
        image: './../../assets/styles/girls/Dresses/Checkered-Bow.jpg',
        defaultColor: 'beige and pink check pattern',
        prompt:
          '{color} checkered cotton dress with bow detail on front and soft gathered skirt; playful natural childlike tone'
      },
      {
        name: 'Long Sleeve',
        image: './../../assets/styles/girls/Dresses/Long-Sleeve-Winter.jpg',
        defaultColor: 'warm red wool-blend',
        prompt:
          '{color} long-sleeve winter dress with soft wool texture and flared bottom; cozy seasonal look; modify only dress and preserve body shape and environment'
      },
      {
        name: 'Everyday',
        image: './../../assets/styles/girls/Dresses/Simple-Everyday.jpg',
        defaultColor: 'light beige',
        prompt:
          '{color} everyday cotton dress with simple A-line silhouette; short sleeves; natural playful comfort; maintain lighting and proportions identical'
      }
    ]
  }
];
export const GIRL_JUMPSUITS: GirlTitleCategory[] = [
  {
    title: 'Jumpsuits & Rompers',
    items: [
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Jumpsuits/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim romper with short sleeves and front buttons; elastic waist; playful and comfy look for a little girl; modify only the romper while keeping background and body unchanged'
      },
      {
        name: 'Floral',
        image: './../../assets/styles/girls/Jumpsuits/Floral.jpg',
        defaultColor: 'pastel pink floral pattern',
        prompt:
          '{color} floral cotton jumpsuit with short puff sleeves and gathered waist; light soft texture; childlike cheerful summer tone'
      },
      {
        name: 'Striped Sleeveless',
        image: './../../assets/styles/girls/Jumpsuits/Striped.jpg',
        defaultColor: 'white and lavender stripes',
        prompt:
          '{color} sleeveless cotton jumpsuit with vertical stripes, short legs, and small waist tie; airy and bright feel; modify jumpsuit only'
      },
      {
        name: 'Ruffle Shoulder',
        image: './../../assets/styles/girls/Jumpsuits/Ruffle-Shoulder.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} romper with ruffled shoulder straps and soft cotton-linen fabric; short leg style; preserve natural background and facial details'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Jumpsuits/Polka-Dot.jpg',
        defaultColor: 'navy with white dots',
        prompt:
          '{color} polka-dot romper with short sleeves and small buttons; smooth cotton weave; childlike neat look; modify only outfit layer'
      },
      {
        name: 'Casual Tie-Waist',
        image: './../../assets/styles/girls/Jumpsuits/Casual-Tie-Waist.jpg',
        defaultColor: 'light beige',
        prompt:
          '{color} one-piece jumpsuit with tie waist and short sleeves; relaxed natural texture; realistic fabric folds; keep lighting and environment unchanged'
      },
      {
        name: 'Sleeveless Linen',
        image: './../../assets/styles/girls/Jumpsuits/Sleeveless-Linen.jpg',
        defaultColor: 'soft peach linen',
        prompt:
          '{color} sleeveless linen jumpsuit with front buttons and slightly loose cut; summery soft tone; adjust jumpsuit only'
      },
      {
        name: 'Playtime',
        image: './../../assets/styles/girls/Jumpsuits/Playtime.jpg',
        defaultColor: 'light yellow',
        prompt:
          '{color} cotton romper with cheerful playful pattern; soft flexible fabric for child’s movement; modify outfit only, keeping pose and lighting identical'
      },
      {
        name: 'Overall',
        image: './../../assets/styles/girls/Jumpsuits/Overall.jpg',
        defaultColor: 'beige cotton',
        prompt:
          '{color} overall-style jumpsuit with adjustable straps and side buttons; relaxed fit; layered naturally over short-sleeve T-shirt'
      },
      {
        name: 'Tulle Party',
        image: './../../assets/styles/girls/Jumpsuits/Tulle-Party.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} one-piece jumpsuit with soft tulle overlay and satin bow; formal yet childlike design; modify only jumpsuit and preserve natural background'
      }
    ]
  }
];
export const GIRL_PANTS: GirlTitleCategory[] = [
  {
    title: 'Pants & Trousers',
    items: [
      {
        name: 'Cotton',
        image: './../../assets/styles/girls/Pants/Cotton.jpg',
        defaultColor: 'light beige',
        prompt:
          '{color} cotton trousers with soft fabric and elastic waistband; straight relaxed leg; natural fit for a young girl; modify only the pants while keeping background and other clothes unchanged'
      },
      {
        name: 'Chino ',
        image: './../../assets/styles/girls/Pants/Chino.jpg',
        defaultColor: 'pastel pink',
        prompt:
          '{color} chino pants made of smooth cotton twill; adjustable waistband; childlike fit with straight silhouette; update pants only'
      },
      {
        name: 'Corduroy',
        image: './../../assets/styles/girls/Pants/Corduroy.jpg',
        defaultColor: 'soft brown',
        prompt:
          '{color} corduroy trousers with fine ribbed texture; slightly loose leg; warm tone suitable for fall; modify only trousers, keeping proportions identical'
      },
      {
        name: 'Linen Drawstring',
        image: './../../assets/styles/girls/Pants/Linen-Drawstring.jpg',
        defaultColor: 'cream linen',
        prompt:
          '{color} lightweight linen pants with drawstring waist; soft airy fabric; gentle childlike style; keep lighting and body proportions natural'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/girls/Pants/Patterned.jpg',
        defaultColor: 'white with tiny flowers',
        prompt:
          '{color} cotton pants with small floral print; elastic waistband; casual cheerful style for girls aged 2–10; modify pants only'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Pants/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim pants with soft cotton feel; child-style cut with straight leg; no rips or adult details; keep shirt and shoes unchanged'
      },
      {
        name: 'Pleated',
        image: './../../assets/styles/girls/Pants/Pleated.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} pleated trousers with soft texture and slightly loose leg; polished yet playful tone; realistic fabric folds; modify only trousers'
      },
      {
        name: 'Jogger',
        image: './../../assets/styles/girls/Pants/Jogger.jpg',
        defaultColor: 'pastel blue',
        prompt:
          '{color} jogger pants with elastic cuffs and waistband; cotton-blend soft texture; casual relaxed fit; modify pants layer only'
      },
      {
        name: 'Velvet',
        image: './../../assets/styles/girls/Pants/Velvet.jpg',
        defaultColor: 'rose velvet',
        prompt:
          '{color} velvet trousers with smooth shiny surface; straight or slightly wide leg; elegant yet childlike design; preserve shirt and environment'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Pants/Polka-Dot.jpg',
        defaultColor: 'navy with white dots',
        prompt:
          '{color} polka-dot cotton trousers; elastic waist; comfortable and playful style; keep other outfit layers and lighting identical'
      }
    ]
  }
];
export const GIRL_JEANS: GirlTitleCategory[] = [
  {
    title: 'Jeans',
    items: [
      {
        name: 'Classic Blue',
        image: './../../assets/styles/girls/Jeans/Classic-Blue.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} straight-leg jeans with soft cotton denim texture; mid-rise elastic waistband for kids; simple childlike design; modify only the jeans while keeping all other elements unchanged'
      },
      {
        name: 'Light Wash',
        image: './../../assets/styles/girls/Jeans/Light-Wash.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} light-wash denim jeans with gentle fading; relaxed straight cut; no rips or distressing; natural comfortable fit; update jeans layer only'
      },
      {
        name: 'Elastic Waist',
        image: './../../assets/styles/girls/Jeans/Elastic-Waist.jpg',
        defaultColor: 'soft blue denim',
        prompt:
          '{color} denim jeans with full elastic waistband and straight fit; childlike soft design; preserve shirt, shoes, and lighting'
      },
      {
        name: 'Embroidered',
        image: './../../assets/styles/girls/Jeans/Embroidered.jpg',
        defaultColor: 'light indigo denim with small floral embroidery',
        prompt:
          '{color} embroidered jeans featuring tiny flower patterns near pockets; playful and neat look; modify jeans only, keeping proportions identical'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Jeans/Denim.jpg',
        defaultColor: 'light denim blue',
        prompt:
          '{color} stretch denim jeggings with elastic waist; smooth cotton-blend texture; comfortable casual fit for young girls'
      },
      {
        name: 'Cuffed',
        image: './../../assets/styles/girls/Jeans/Cuffed.jpg',
        defaultColor: 'medium blue',
        prompt:
          '{color} jeans with gently rolled cuffs; straight relaxed leg; childlike proportion; modify jeans only'
      },
      {
        name: 'Dark Wash',
        image: './../../assets/styles/girls/Jeans/Dark-Wash.jpg',
        defaultColor: 'dark indigo denim',
        prompt:
          '{color} dark-wash jeans with clean finish; simple seams and elastic waistband; balanced classic style; keep all non-jeans parts identical'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/girls/Jeans/Patterned.jpg',
        defaultColor: 'light denim with small white hearts',
        prompt:
          '{color} printed denim jeans with subtle heart pattern; childlike playful tone; soft cotton fabric; adjust jeans layer only'
      },
      {
        name: 'Bootcut',
        image: './../../assets/styles/girls/Jeans/Bootcut.jpg',
        defaultColor: 'mid blue denim',
        prompt:
          '{color} bootcut jeans with mild flare and soft denim texture; elastic waist; realistic folds; keep top, face, and background unchanged'
      },
      {
        name: 'Ruffle Hem',
        image: './../../assets/styles/girls/Jeans/Ruffle-Hem.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} jeans with ruffled hems and soft denim texture; sweet and playful detail for kids; modify only jeans while preserving all proportions'
      }
    ]
  }
];

export const GIRL_SKIRTS: GirlTitleCategory[] = [
  {
    title: 'Skirts',
    items: [
      {
        name: 'Pleated Cotton',
        image: './../../assets/styles/girls/Skirts/Pleated-Cotton.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} pleated cotton skirt with elastic waistband; knee-length; soft matte fabric; natural folds and childlike silhouette; modify only the skirt while keeping all other outfit elements unchanged'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Skirts/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim skirt with front buttons and soft cotton feel; slightly above knee; childlike neat design; update skirt layer only'
      },
      {
        name: 'Floral Print',
        image: './../../assets/styles/girls/Skirts/Floral-Print.jpg',
        defaultColor: 'white with small pink flowers',
        prompt:
          '{color} floral patterned skirt with soft pleats; elastic waistband; comfortable airy cotton fabric; preserve background and proportions'
      },
      {
        name: 'Tulle Party',
        image: './../../assets/styles/girls/Skirts/Tulle-Party.jpg',
        defaultColor: 'soft blush pink',
        prompt:
          '{color} layered tulle skirt with satin waistband; fluffy yet light; knee-length design suitable for parties; modify skirt only'
      },
      {
        name: 'Corduroy',
        image: './../../assets/styles/girls/Skirts/Corduroy.jpg',
        defaultColor: 'tan brown',
        prompt:
          '{color} corduroy skirt with front buttons and fine rib texture; warm cozy tone for fall; keep other clothes and lighting identical'
      },
      {
        name: 'Linen',
        image: './../../assets/styles/girls/Skirts/Linen.jpg',
        defaultColor: 'beige linen',
        prompt:
          '{color} linen skirt with drawstring waist and gentle folds; lightweight breathable fabric; childlike simplicity; adjust skirt layer only'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Skirts/Polka-Dot.jpg',
        defaultColor: 'navy with white dots',
        prompt:
          '{color} polka-dot cotton skirt with elastic waist; medium length; cheerful playful look for kids aged 2–10; preserve lighting and pose'
      },
      {
        name: 'Tiered Ruffle',
        image: './../../assets/styles/girls/Skirts/Tiered-Ruffle.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} tiered ruffle skirt with soft gathered layers; light fabric; girlish gentle movement; modify only skirt while keeping body unchanged'
      },
      {
        name: 'Plaid',
        image: './../../assets/styles/girls/Skirts/Plaid.jpg',
        defaultColor: 'red and navy check',
        prompt:
          '{color} plaid cotton skirt with soft pleats and elastic waistband; school-inspired but playful tone; natural proportions maintained'
      },
      {
        name: 'Velvet',
        image: './../../assets/styles/girls/Skirts/Velvet.jpg',
        defaultColor: 'deep rose velvet',
        prompt:
          '{color} velvet skirt with smooth sheen and soft drape; classic winter look for young girls; modify only skirt, keeping background intact'
      }
    ]
  }
];
export const GIRL_SHORTS: GirlTitleCategory[] = [
  {
    title: 'Shorts',
    items: [
      {
        name: 'Cotton',
        image: './../../assets/styles/girls/Shorts/Cotton.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} cotton shorts with elastic waistband and small side bows; above-knee length (~7-inch inseam); soft childlike fabric; modify only shorts while keeping top, legs, and lighting identical'
      },
      {
        name: 'Denim',
        image: './../../assets/styles/girls/Shorts/Denim.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim shorts with rolled hems and soft cotton texture; no distressing or adult details; simple playful style; modify shorts only'
      },
      {
        name: 'Linen',
        image: './../../assets/styles/girls/Shorts/Linen.jpg',
        defaultColor: 'beige linen',
        prompt:
          '{color} lightweight linen shorts with drawstring waist; soft breathable texture; relaxed summer design for kids'
      },
      {
        name: 'Patterned',
        image: './../../assets/styles/girls/Shorts/Patterned.jpg',
        defaultColor: 'white with pastel flowers',
        prompt:
          '{color} printed shorts with tiny floral pattern; elastic waistband; cheerful summer tone; preserve proportions and background'
      },
      {
        name: 'Chino',
        image: './../../assets/styles/girls/Shorts/Chino.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} chino shorts made of smooth cotton twill; knee-length; childlike structure; update shorts only keeping upper outfit intact'
      },
      {
        name: 'Pleated',
        image: './../../assets/styles/girls/Shorts/Pleated.jpg',
        defaultColor: 'light lilac',
        prompt:
          '{color} pleated cotton shorts with soft fabric folds; above-knee design; girlish elegant touch; modify only shorts'
      },
      {
        name: 'Polka Dot',
        image: './../../assets/styles/girls/Shorts/Polka-Dot.jpg',
        defaultColor: 'navy with white dots',
        prompt:
          '{color} polka-dot shorts with elastic waistband and soft cotton feel; playful childlike pattern; natural comfortable fit'
      },
      {
        name: 'Terry',
        image: './../../assets/styles/girls/Shorts/Terry.jpg',
        defaultColor: 'pastel yellow',
        prompt:
          '{color} terry-cloth shorts with drawstring waist; lightweight cozy material; summer casual design; modify shorts only'
      },
      {
        name: 'Ruffle Hem',
        image: './../../assets/styles/girls/Shorts/Ruffle-Hem.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} cotton shorts with ruffled hems and elastic waist; cute and playful childlike style; keep other outfit elements unchanged'
      },
      {
        name: 'Sport',
        image: './../../assets/styles/girls/Shorts/Sport.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} soft jersey shorts with side stripes; elastic waistband; sporty relaxed design for young girls; preserve proportions and lighting'
      }
    ]
  }
];
export const GIRL_JACKETS: GirlTitleCategory[] = [
  {
    title: 'Outerwear',
    items: [
      {
        name: 'Denim Jacket',
        image: './../../assets/styles/girls/Outerwear/Denim.jpg', 
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim jacket with front buttons and chest pockets; soft cotton texture; slightly loose fit for children; modify only jacket, keeping other clothes unchanged'
      },
      {
        name: 'Hooded Windbreaker',
        image: './../../assets/styles/girls/Outerwear/Windbreaker.jpg',
        defaultColor: 'pink',
        prompt:
          '{color} lightweight hooded windbreaker; smooth nylon surface; playful and bright look; suitable for light rain; update jacket only'
      },
      {
        name: 'Puffer Jacket',
        image: './../../assets/styles/girls/Outerwear/Puffer.jpg',
        defaultColor: 'pastel purple',
        prompt:
          '{color} puffer jacket with gentle quilted padding; front zipper; cozy warm look for kids; modify jacket layer only'
      },
      {
        name: 'Raincoat',
        image: './../../assets/styles/girls/Outerwear/Raincoat.jpg',
        defaultColor: 'yellow',
        prompt:
          '{color} waterproof raincoat with hood and buttons; matte surface; cheerful childlike tone; preserve proportions and pose'
      },
      {
        name: 'Cardigan Jacket',
        image: './../../assets/styles/girls/Outerwear/Cardigan-Jacket.jpg',
        defaultColor: 'cream knit',
        prompt:
          '{color} knitted cardigan-style jacket with buttons; soft texture; warm cozy feel; modify jacket only, not shirt or dress beneath'
      },
      {
        name: 'Trench Coat',
        image: './../../assets/styles/girls/Outerwear/Trench-Coat.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} lightweight trench-style coat with belt and front buttons; simplified design for kids; knee-length; keep other outfit parts identical'
      },
      {
        name: 'Fleece Jacket',
        image: './../../assets/styles/girls/Outerwear/Fleece.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} fleece zip jacket with high collar; soft fluffy surface; comfortable and warm; modify only jacket while preserving background'
      },
      {
        name: 'Bomber Jacket',
        image: './../../assets/styles/girls/Outerwear/Bomber.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} bomber-style jacket with ribbed cuffs and hem; childlike gentle shape; matte nylon finish; keep all other layers intact'
      },
      {
        name: 'Quilted Coat',
        image: './../../assets/styles/girls/Outerwear/Quilted-Coat.jpg',
        defaultColor: 'soft rose',
        prompt:
          '{color} quilted coat with light padding and buttons; knee-length design; warm and tidy appearance; adjust coat only'
      },
      {
        name: 'Faux Fur Jacket',
        image: './../../assets/styles/girls/Outerwear/Faux-Fur.jpg',
        defaultColor: 'off-white',
        prompt:
          '{color} faux-fur jacket with fluffy surface and round collar; soft cozy tone for kids; keep outfit and background unchanged'
      }
    ]
  }
];
export const GIRL_HOODIES: GirlTitleCategory[] = [
  {
    title: 'Hoodies & Sweatshirts',
    items: [
      {
        name: 'Pullover',
        image: './../../assets/styles/girls/Hoodies/Pullover.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} pullover hoodie made of soft cotton fleece; relaxed fit for children; kangaroo pocket and hood with drawstrings; modify only the hoodie keeping all other elements unchanged'
      },
      {
        name: 'Zip',
        image: './../../assets/styles/girls/Hoodies/Zip.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} zip-up hoodie with soft brushed interior; front zipper and pockets; gentle childlike tone; modify hoodie only without altering pants or background'
      },
      {
        name: 'Graphic',
        image: './../../assets/styles/girls/Hoodies/Graphic.jpg',
        defaultColor: 'white with small rainbow print',
        prompt:
          '{color} hoodie with tiny cheerful rainbow graphic on front; soft fabric; clean playful design for girls aged 2–10; update hoodie layer only'
      },
      {
        name: 'Sweatshirt',
        image: './../../assets/styles/girls/Hoodies/Sweatshirt.jpg',
        defaultColor: 'pastel blue',
        prompt:
          '{color} crewneck sweatshirt with ribbed cuffs and hem; soft brushed cotton; lightweight and comfortable; modify only sweatshirt keeping proportions identical'
      },
      {
        name: 'Floral Print',
        image: './../../assets/styles/girls/Hoodies/Floral.jpg',
        defaultColor: 'white with pink flowers',
        prompt:
          '{color} floral patterned hoodie with front pocket; cotton material; delicate soft tones; preserve lighting and background'
      },
      {
        name: 'Two-Tone',
        image: './../../assets/styles/girls/Hoodies/Two-Tone.jpg',
        defaultColor: 'mint and cream',
        prompt:
          '{color} two-tone hoodie with gentle color blocking; soft fleece texture; childlike proportions; update only hoodie layer'
      },
      {
        name: 'Teddy',
        image: './../../assets/styles/girls/Hoodies/Teddy.jpg',
        defaultColor: 'beige fleece',
        prompt:
          '{color} teddy-textured sweatshirt with soft fluffy surface; round neckline; cozy childlike feel; modify sweatshirt only'
      },
      {
        name: 'Sport',
        image: './../../assets/styles/girls/Hoodies/Sport.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} sporty hoodie with side stripe detail; relaxed cut; soft breathable material; preserve outfit and environment'
      },
      {
        name: 'Ruffle',
        image: './../../assets/styles/girls/Hoodies/Ruffle.jpg', 
        defaultColor: 'cream',
        prompt:
          '{color} hoodie with small ruffle detail on shoulders; gentle girlish tone; cotton fleece texture; modify only hoodie'
      },
      {
        name: 'Heart Print',
        image: './../../assets/styles/girls/Hoodies/Heart.jpg',
        defaultColor: 'pink with small red hearts',
        prompt:
          '{color} sweatshirt with small heart patterns; soft cotton fabric; playful cheerful design; update sweatshirt only keeping all other elements consistent'
      }
    ]
  }
];
export const GIRL_CARDIGANS: GirlTitleCategory[] = [
  {
    title: 'Cardigans & Knits',
    items: [
      {
        name: 'Classic Knit',
        image: './../../assets/styles/girls/Cardigans/Classic-Knit.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} knitted cardigan with front buttons; soft cotton-wool blend; fine rib texture; designed for children; modify cardigan only keeping shirt and proportions identical'
      },
      {
        name: 'Pastel Button',
        image: './../../assets/styles/girls/Cardigans/Pastel-Button.jpg',
        defaultColor: 'pastel pink',
        prompt:
          '{color} pastel cardigan with round buttons and delicate knit pattern; soft lightweight texture; update cardigan only'
      },
      {
        name: 'Cable Knit',
        image: './../../assets/styles/girls/Cardigans/Cable.jpg',
        defaultColor: 'light beige',
        prompt:
          '{color} cable-knit cardigan with medium thickness yarn; slightly loose childlike fit; preserve dress or top underneath'
      },
      {
        name: 'Floral Embroidered',
        image: './../../assets/styles/girls/Cardigans/Floral.jpg',
        defaultColor: 'white with small floral embroidery',
        prompt:
          '{color} cardigan featuring tiny embroidered flowers; smooth cotton texture; charming girlish tone; modify only cardigan keeping body and lighting identical'
      },
      {
        name: 'Ruffle Edge',
        image: './../../assets/styles/girls/Cardigans/Ruffle-Edge.jpg',
        defaultColor: 'soft lilac',
        prompt:
          '{color} cardigan with ruffled edges and button front; childlike elegant look; light cotton material; update only cardigan'
      },
      {
        name: 'Open Front',
        image: './../../assets/styles/girls/Cardigans/Open-Front.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} open-front knit cardigan with long sleeves; soft draped fabric; gentle casual design; modify cardigan only'
      },
      {
        name: 'Striped Knit',
        image: './../../assets/styles/girls/Cardigans/Striped.jpg',
        defaultColor: 'white and pink stripes',
        prompt:
          '{color} striped knit cardigan with button closure; soft cotton texture; playful and cheerful childlike tone; update only cardigan'
      },
      {
        name: 'Teddy Knit',
        image: './../../assets/styles/girls/Cardigans/Teddy.jpg',
        defaultColor: 'light brown fleece',
        prompt:
          '{color} teddy-textured cardigan with fluffy surface and rounded edges; cozy and soft look; modify only cardigan keeping outfit consistent'
      },
      {
        name: 'Heart Pattern',
        image: './../../assets/styles/girls/Cardigans/Heart.jpg',
        defaultColor: 'white with pink hearts',
        prompt:
          '{color} knitted cardigan with small heart motifs; button front; cute and youthful tone; preserve background and facial details'
      },
      {
        name: 'Lace Trim',
        image: './../../assets/styles/girls/Cardigans/Lace-Trim.jpg',
        defaultColor: 'ivory',
        prompt:
          '{color} cardigan with subtle lace trim around neckline and cuffs; lightweight cotton knit; delicate girlish detail; modify cardigan only'
      }
    ]
  }
];
export const GIRL_SCARVES: GirlTitleCategory[] = [
  {
    title: 'Scarves',
    items: [
      {
        name: 'Knitted Winter',
        image: './../../assets/styles/girls/Scarves/Knitted-Winter.jpg',
        defaultColor: 'light pink wool',
        prompt:
          '{color} knitted winter scarf wrapped softly around neck; cozy wool texture; childlike winter accessory; modify only scarf, keeping coat and background identical'
      },
      {
        name: 'Floral Cotton',
        image: './../../assets/styles/girls/Scarves/Floral-Cotton.jpg',
        defaultColor: 'white with tiny pink flowers',
        prompt:
          '{color} light cotton scarf with delicate floral pattern; small size; tied loosely around neck; modify scarf only, preserving outfit and lighting'
      },
      {
        name: 'Fleece Neck',
        image: './../../assets/styles/girls/Scarves/Fleece-Warmer.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} soft fleece neck warmer, snug but comfortable fit; cozy winter look; modify scarf only keeping outfit unchanged'
      },
      {
        name: 'Pom Pom',
        image: './../../assets/styles/girls/Scarves/PomPom.jpg',
        defaultColor: 'cream with pink pom-poms',
        prompt:
          '{color} scarf with small pom-poms at ends; soft knitted material; natural drape around neck; modify scarf only keeping jacket and lighting identical'
      },
      {
        name: 'Fringed Cotton',
        image: './../../assets/styles/girls/Scarves/Fringed-Cotton.jpg',
        defaultColor: 'light yellow',
        prompt:
          '{color} lightweight cotton scarf with short fringes; casual spring accessory; modify only scarf, preserving outfit and background'
      },
      {
        name: 'Heart Print',
        image: './../../assets/styles/girls/Scarves/Heart-Print.jpg',
        defaultColor: 'white with red hearts',
        prompt:
          '{color} printed scarf with small heart motifs; soft cotton blend; playful kid look; modify scarf only keeping rest of outfit unchanged'
      },
      {
        name: 'Infinity',
        image: './../../assets/styles/girls/Scarves/Infinity.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} soft loop-style infinity scarf; lightweight knit texture; wraps naturally around neck; modify scarf only'
      },
      {
        name: 'Fur Collar',
        image: './../../assets/styles/girls/Scarves/Fur-Collar.jpg',
        defaultColor: 'beige faux fur',
        prompt:
          '{color} faux-fur collar scarf gently placed over shoulders; plush soft texture; modify only scarf keeping hairstyle and clothing intact'
      },
      {
        name: 'Plaid Wool',
        image: './../../assets/styles/girls/Scarves/Plaid-Wool.jpg',
        defaultColor: 'red and beige plaid',
        prompt:
          '{color} plaid wool scarf wrapped softly around neck; warm cozy winter design; modify scarf only keeping coat and background consistent'
      },
      {
        name: 'Bow Tie',
        image: './../../assets/styles/girls/Scarves/Bow-Tie.jpg',
        defaultColor: 'light pink satin',
        prompt:
          '{color} small satin bow-tie style scarf tied neatly at front; shiny gentle surface; modify only scarf preserving face, outfit, and lighting'
      }
    ]
  }
];
export const GIRL_SNEAKERS: GirlTitleCategory[] = [
  {
    title: 'Sneakers',
    items: [
      {
        name: 'Classic White',
        image: './../../assets/styles/girls/Sneakers/Classic-White.jpg',
        defaultColor: 'white',
        prompt:
          '{color} low-top sneakers with smooth surface and rounded toe; lightweight sole; simple clean childlike design; replace only shoes while keeping trousers and background identical'
      },
      {
        name: 'Pink Sport',
        image: './../../assets/styles/girls/Sneakers/Pink-Sport.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} sport sneakers with breathable mesh and rubber sole; comfortable fit for active kids; modify only shoes without affecting outfit or lighting'
      },
      {
        name: 'Velcro Strap',
        image: './../../assets/styles/girls/Sneakers/Velcro.jpg',
        defaultColor: 'white and lavender',
        prompt:
          '{color} sneakers with double velcro straps and flexible sole; soft comfortable look; maintain clothing and proportions unchanged'
      },
      {
        name: 'High-Top',
        image: './../../assets/styles/girls/Sneakers/High-Top.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} high-top sneakers with soft ankle padding; playful casual design; modify only shoes keeping everything else identical'
      },
      {
        name: 'Glitter Accent',
        image: './../../assets/styles/girls/Sneakers/Glitter.jpg',
        defaultColor: 'white with pink glitter details',
        prompt:
          '{color} sneakers with small glitter accents on side; lightweight sole; cheerful childlike tone; adjust shoes only'
      },
      {
        name: 'Canvas',
        image: './../../assets/styles/girls/Sneakers/Canvas.jpg',
        defaultColor: 'sky blue',
        prompt:
          '{color} canvas sneakers with rubber toe cap; flat sole; casual everyday look; modify shoes only keeping pants and background'
      },
      {
        name: 'Light-Up',
        image: './../../assets/styles/girls/Sneakers/Light-Up.jpg',
        defaultColor: 'pastel purple',
        prompt:
          '{color} light-up sneakers with small LED glow on sole; modern kids style; soft curves; keep outfit unchanged'
      },
      {
        name: 'Rainbow',
        image: './../../assets/styles/girls/Sneakers/Rainbow.jpg',
        defaultColor: 'white with rainbow stripes',
        prompt:
          '{color} sneakers decorated with thin rainbow side lines; simple round-toe design; modify only shoes, preserving everything else'
      },
      {
        name: 'Slip-On',
        image: './../../assets/styles/girls/Sneakers/Slip-On.jpg',
        defaultColor: 'cream with pink trim',
        prompt:
          '{color} slip-on sneakers with elastic sides; soft lightweight texture; neat and simple for kids; update shoes only'
      },
      {
        name: 'Sporty Mesh',
        image: './../../assets/styles/girls/Sneakers/Mesh.jpg',
        defaultColor: 'light grey and coral',
        prompt:
          '{color} sporty mesh sneakers with foam sole; breathable and flexible; modify only shoes keeping body proportions intact'
      }
    ]
  }
];
export const GIRL_BOOTS: GirlTitleCategory[] = [
  {
    title: 'Boots',
    items: [
      {
        name: 'Ankle',
        image: './../../assets/styles/girls/Boots/Ankle.jpg',
        defaultColor: 'light brown suede',
        prompt:
          '{color} ankle boots with soft suede texture and side zipper; rounded toe; gentle childlike shape; modify boots only, preserving outfit and background'
      },
      {
        name: 'Winter Fur',
        image: './../../assets/styles/girls/Boots/Winter-Fur.jpg',
        defaultColor: 'cream with white fur lining',
        prompt:
          '{color} winter boots with short faux-fur trim; cozy warm texture; soft and lightweight; update boots only keeping trousers and lighting identical'
      },
      {
        name: 'Chelsea',
        image: './../../assets/styles/girls/Boots/Chelsea.jpg',
        defaultColor: 'pink leather',
        prompt:
          '{color} chelsea boots with elastic sides and small pull tab; soft glossy texture; cute and minimal; modify only boots'
      },
      {
        name: 'Rain',
        image: './../../assets/styles/girls/Boots/Rain.jpg',
        defaultColor: 'yellow rubber',
        prompt:
          '{color} waterproof rain boots with smooth rubber surface and mid-calf height; playful and bright kids design; modify boots only'
      },
      {
        name: 'Lace-Up',
        image: './../../assets/styles/girls/Boots/Lace-Up.jpg',
        defaultColor: 'rose pink',
        prompt:
          '{color} lace-up boots with rounded toe and flat sole; cute girlish tone; soft structure; preserve outfit and proportions'
      },
      {
        name: 'Snow',
        image: './../../assets/styles/girls/Boots/Snow.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} insulated snow boots with padded upper and fur trim; waterproof lower section; modify only boots keeping pants and background intact'
      },
      {
        name: 'Knee-High',
        image: './../../assets/styles/girls/Boots/Knee-High.jpg',
        defaultColor: 'light grey suede',
        prompt:
          '{color} knee-high boots with soft flexible shaft; comfortable childlike fit; simple clean tone; update boots only'
      },
      {
        name: 'Teddy Lined',
        image: './../../assets/styles/girls/Boots/Teddy-Lined.jpg',
        defaultColor: 'beige with white lining',
        prompt:
          '{color} ankle boots lined with teddy fleece; cozy and warm appearance; modify only boots, keeping all other elements consistent'
      },
      {
        name: 'Decorative Bow',
        image: './../../assets/styles/girls/Boots/Bow.jpg',
        defaultColor: 'light pink suede',
        prompt:
          '{color} suede boots with small decorative bow on side; smooth matte texture; delicate childlike look; modify boots only'
      },
      {
        name: 'Floral Print',
        image: './../../assets/styles/girls/Boots/Floral.jpg',
        defaultColor: 'cream with small flower print',
        prompt:
          '{color} printed boots with tiny floral motifs; soft rubber or faux-leather material; playful and cute; modify only boots'
      }
    ]
  }
];
export const GIRL_SANDALS: GirlTitleCategory[] = [
  {
    title: 'Sandals',
    items: [
      {
        name: 'Classic Strap',
        image: './../../assets/styles/girls/Sandals/Classic-Strap.jpg',
        defaultColor: 'white',
        prompt:
          '{color} strap sandals with adjustable ankle strap and open toe; soft sole for comfort; simple childlike design; modify only sandals keeping feet and background unchanged'
      },
      {
        name: 'Bow Accent',
        image: './../../assets/styles/girls/Sandals/Bow-Accent.jpg',
        defaultColor: 'pink',
        prompt:
          '{color} sandals with small decorative bow on the front strap; gentle rounded shape; modify sandals only, preserving outfit and lighting'
      },
      {
        name: 'Glitter',
        image: './../../assets/styles/girls/Sandals/Glitter.jpg',
        defaultColor: 'silver glitter',
        prompt:
          '{color} sandals with glitter finish and soft straps; cute and playful; modify only sandals keeping legs and outfit identical'
      },
      {
        name: 'Closed Toe',
        image: './../../assets/styles/girls/Sandals/Closed-Toe.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} closed-toe sandals with breathable holes and adjustable strap; soft and safe design; modify sandals only'
      },
      {
        name: 'Floral',
        image: './../../assets/styles/girls/Sandals/Floral.jpg',
        defaultColor: 'white with pink flowers',
        prompt:
          '{color} sandals with small floral decorations on straps; open toe; lightweight summer look; modify only sandals'
      },
      {
        name: 'Sport',
        image: './../../assets/styles/girls/Sandals/Sport.jpg',
        defaultColor: 'lavender and grey',
        prompt:
          '{color} sporty sandals with thick cushioned sole and adjustable velcro straps; comfortable fit for kids; change sandals only'
      },
      {
        name: 'Butterfly',
        image: './../../assets/styles/girls/Sandals/Butterfly.jpg',
        defaultColor: 'peach pink',
        prompt:
          '{color} sandals with tiny butterfly decorations; soft straps; fun childlike design; modify only sandals'
      },
      {
        name: 'T-Strap',
        image: './../../assets/styles/girls/Sandals/T-Strap.jpg',
        defaultColor: 'light beige',
        prompt:
          '{color} T-strap sandals with ankle buckle; flat soft sole; natural summer tone; modify sandals only keeping skin tone and background intact'
      },
      
      {
        name: 'Rainbow',
        image: './../../assets/styles/girls/Sandals/Rainbow.jpg',
        defaultColor: 'white with pastel rainbow straps',
        prompt:
          '{color} sandals with colorful pastel straps and soft footbed; cheerful summer kids design; modify sandals only, preserving pose and background'
      }
    ]
  }
];
export const GIRL_BAGS: GirlTitleCategory[] = [
  {
    title: 'Bags & Purses',
    items: [
      {
        name: 'Mini Crossbody',
        image: './../../assets/styles/girls/Bags/Mini-Crossbody.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} mini crossbody bag with thin strap and rounded shape; soft playful design suitable for a young girl; modify only the bag, keeping outfit and lighting identical'
      },
      {
        name: 'Heart Shaped',
        image: './../../assets/styles/girls/Bags/Heart-Shaped.jpg',
        defaultColor: 'red',
        prompt:
          '{color} heart-shaped purse with small shoulder strap; smooth surface and gentle shine; cute and childlike; modify only the bag'
      },
      {
        name: 'Animal Face',
        image: './../../assets/styles/girls/Bags/Animal-Face.jpg',
        defaultColor: 'beige with bunny design',
        prompt:
          '{color} small round bag with cartoon animal face motif; soft plush texture; playful kids design; modify bag only, keeping all other elements unchanged'
      },
      {
        name: 'Backpack',
        image: './../../assets/styles/girls/Bags/Backpack.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} small kids backpack with front pocket and soft straps; matte nylon texture; comfortable and simple; change only bag'
      },
      {
        name: 'Mini Shoulder',
        image: './../../assets/styles/girls/Bags/Mini-Shoulder.jpg',
        defaultColor: 'cream',
        prompt:
          '{color} mini shoulder bag with curved flap and button closure; light pastel tone; modify only the bag keeping outfit, pose, and background intact'
      },
      {
        name: 'Bow',
        image: './../../assets/styles/girls/Bags/Bow-Purse.jpg',
        defaultColor: 'peach pink',
        prompt:
          '{color} small purse with decorative bow on front; short strap; soft childlike tone; modify bag only'
      },
      {
        name: 'Teddy Bear',
        image: './../../assets/styles/girls/Bags/Teddy-Bear.jpg',
        defaultColor: 'light brown plush',
        prompt:
          '{color} teddy bear-shaped bag made of soft plush fabric; fun and cozy; modify only the bag, keeping outfit identical'
      },
      {
        name: 'Glitter',
        image: './../../assets/styles/girls/Bags/Glitter.jpg',
        defaultColor: 'silver glitter',
        prompt:
          '{color} small glittery purse with thin strap; shiny but gentle texture; playful child design; change only bag'
      },
      {
        name: 'Mini Satchel',
        image: './../../assets/styles/girls/Bags/Mini-Satchel.jpg',
        defaultColor: 'mint green',
        prompt:
          '{color} mini satchel bag with short handle and top flap; clean edges and smooth texture; childlike simplicity; modify only bag'
      },
      {
        name: 'Rainbow Shoulder',
        image: './../../assets/styles/girls/Bags/Rainbow.jpg',
        defaultColor: 'white with pastel rainbow stripes',
        prompt:
          '{color} small rainbow-themed shoulder bag with soft curved body; colorful cheerful tone; modify bag only keeping outfit and background consistent'
      }
    ]
  }
];
export const GIRL_HATS: GirlTitleCategory[] = [
  {
    title: 'Hats & Headwear',
    items: [
      {
        name: 'Sun',
        image: './../../assets/styles/girls/Hats/Sun-Hat.jpg',
        defaultColor: 'white with pink ribbon',
        prompt:
          '{color} wide-brim sun hat made of light cotton or straw; soft flexible brim; small ribbon detail; modify only hat, keeping hairstyle and background consistent'
      },
      {
        name: 'Bucket',
        image: './../../assets/styles/girls/Hats/Bucket.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} bucket hat with soft brim and smooth cotton texture; fits naturally on head; modify only hat, preserving hairstyle, outfit, and background'
      },
      {
        name: 'Knitted Beanie',
        image: './../../assets/styles/girls/Hats/Beanie.jpg',
        defaultColor: 'pink knitted yarn',
        prompt:
          '{color} knitted beanie with small pom-pom on top; soft texture; sits naturally on head; modify hat only without altering hair or outfit'
      },
      {
        name: 'Cap',
        image: './../../assets/styles/girls/Hats/Cap.jpg',
        defaultColor: 'light pink cotton',
        prompt:
          '{color} baseball-style cap with curved brim and soft cotton fabric; naturally fitted on head; modify only hat keeping hairstyle and lighting identical'
      },
      {
        name: 'Winter Pom',
        image: './../../assets/styles/girls/Hats/Winter-Pom.jpg',
        defaultColor: 'cream with white pom-poms',
        prompt:
          '{color} winter hat with two soft pom-poms on top; cozy wool knit texture; cute childlike look; modify hat only'
      },
      {
        name: 'Floral',
        image: './../../assets/styles/girls/Hats/Floral.jpg',
        defaultColor: 'white with small floral print',
        prompt:
          '{color} soft cotton hat with tiny floral pattern; flexible brim; modify hat only keeping face and background intact'
      },
      {
        name: 'Beret',
        image: './../../assets/styles/girls/Hats/Beret.jpg',
        defaultColor: 'light peach',
        prompt:
          '{color} soft wool beret with simple rounded shape; natural fit on head; modify only hat without changing hair or lighting'
      },
      {
        name: 'Animal Ears',
        image: './../../assets/styles/girls/Hats/Animal-Ears.jpg',
        defaultColor: 'beige with bear ears',
        prompt:
          '{color} soft plush hat with small bear ears on top; cute and playful tone; modify hat only preserving hair and outfit'
      },
      {
        name: 'Visor',
        image: './../../assets/styles/girls/Hats/Visor.jpg',
        defaultColor: 'white with pink edge',
        prompt:
          '{color} visor cap with open top and curved front brim; sits naturally on head; hair visible; modify hat only keeping proportions unchanged'
      },
      {
        name: 'Ribbon',
        image: './../../assets/styles/girls/Hats/Ribbon.jpg',
        defaultColor: 'light yellow with large bow',
        prompt:
          '{color} lightweight cotton hat with wide ribbon bow at back; smooth texture and neat childlike design; modify only hat'
      }
    ]
  }
];
export const GIRL_JEWELRY: GirlTitleCategory[] = [
  {
    title: 'Jewelry',
    items: [
      {
        name: 'Beaded Necklace',
        image: './../../assets/styles/girls/Jewelry/Beaded-Necklace.jpg',
        defaultColor: 'multicolor pastel beads',
        prompt:
          '{color} beaded necklace made of round pastel beads; childlike playful design; modify only necklace, keeping clothing, lighting, and background unchanged'
      },
      {
        name: 'Friendship Bracelet',
        image: './../../assets/styles/girls/Jewelry/Friendship-Bracelet.jpg',
        defaultColor: 'pink and purple threads',
        prompt:
          '{color} handmade friendship bracelet with small beads or woven threads; gentle fit on wrist; modify bracelet only preserving outfit and pose'
      },
      {
        name: 'Charm Necklace',
        image: './../../assets/styles/girls/Jewelry/Charm-Necklace.jpg',
        defaultColor: 'light pink cord with tiny charms',
        prompt:
          '{color} small charm necklace with star and heart pendants; soft childlike look; modify necklace only keeping outfit identical'
      },
      {
        name: 'Heart Earrings',
        image: './../../assets/styles/girls/Jewelry/Heart-Earrings.jpg',
        defaultColor: 'pink plastic hearts',
        prompt:
          '{color} small stud earrings shaped like hearts; cute and subtle; modify earrings only, preserving hair and face unchanged'
      },
      {
        name: 'Flower Hair Clip',
        image: './../../assets/styles/girls/Jewelry/Flower-HairClip.jpg',
        defaultColor: 'lavender purple',
        prompt:
          '{color} floral hair clip placed naturally in hair; soft material; playful style; modify only hair accessory, keeping hairstyle and lighting consistent'
      },
      {
        name: 'Butterfly Necklace',
        image: './../../assets/styles/girls/Jewelry/Butterfly-Necklace.jpg',
        defaultColor: 'light blue and silver-tone',
        prompt:
          '{color} necklace with tiny butterfly pendant; delicate child-friendly design; modify necklace only preserving outfit and lighting'
      },
      {
        name: 'Beaded Bracelet',
        image: './../../assets/styles/girls/Jewelry/Beaded-Bracelet.jpg',
        defaultColor: 'rainbow pastel beads',
        prompt:
          '{color} bracelet with round colorful beads; soft elastic band; modify only bracelet keeping outfit and proportions identical'
      },
      {
        name: 'Star Earrings',
        image: './../../assets/styles/girls/Jewelry/Star-Earrings.jpg',
        defaultColor: 'yellow stars',
        prompt:
          '{color} small star-shaped earrings; subtle and childlike; modify only earrings keeping hairstyle and background identical'
      },
      {
        name: 'Bow Hairband',
        image: './../../assets/styles/girls/Jewelry/Bow-Hairband.jpg',
        defaultColor: 'light pink satin bow',
        prompt:
          '{color} headband with decorative satin bow; gentle soft look; modify only hairband keeping facial details and background consistent'
      },
      {
        name: 'Charm Bracelet',
        image: './../../assets/styles/girls/Jewelry/Charm-Bracelet.jpg',
        defaultColor: 'silver-tone with tiny charms',
        prompt:
          '{color} bracelet with small heart and flower charms; soft reflective surface; modify bracelet only keeping hand and outfit unchanged'
      }
    ]
  }
];

