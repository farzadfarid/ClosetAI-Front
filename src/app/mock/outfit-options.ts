
export interface TitleCategory {
  title: string;
  items: MenCategory[];
 
}

export interface MenCategory {
  name: string;
  image: string;
  prompt?: string;
  defaultColor?: string;
}

export const MEN_BACKGROUNDS: TitleCategory[] = [
  {
    title: 'Backgrounds and Clothes (Try with AI)',
    items: [
      {
        name: 'Beach Sunset',
        image: './../../assets/styles/background/Beach.jpg',
        prompt:
          'background of a beach at sunset with calm ocean and sky in distance; no people; neutral environmental view'
      },
      {
        name: 'Brick Wall Studio',
        image: './../../assets/styles/background/Brick-Wall-Studio.jpg',
        prompt:
          'indoor brick wall background with smooth floor; plain and neutral studio setting; no objects or people'
      },
      {
        name: 'Cafe Interior',
        image: './../../assets/styles/background/Cafe-Interior.jpg',
        prompt:
          'indoor cafe background with tables and chairs; cozy environment; no people or direct lighting effects'
      },
      {
        name: 'City Rooftop',
        image: './../../assets/styles/background/City-Rooftop.jpg',
        prompt:
          'city rooftop view with skyline in distance; outdoor environment; plain sky; no people'
      },
      {
        name: 'Countryside Field',
        image: './../../assets/styles/background/Countryside.jpg',
        prompt:
          'open countryside field with grass and trees; neutral outdoor environment; no people'
      },
      {
        name: 'Old European Street',
        image: './../../assets/styles/background/European-Street.jpg',
        prompt:
          'empty old european stone street with buildings on both sides; no people; plain ambient view'
      },
      {
        name: 'Fitness Gym',
        image: './../../assets/styles/background/Fitness-Gym.jpg',
        prompt:
          'indoor gym background with exercise machines; clean environment; no people or reflections'
      },
      {
        name: 'Forest Path',
        image: './../../assets/styles/background/Forest-Path.jpg',
        prompt:
          'forest background with tall trees and path; neutral outdoor scene; no people or sunlight effects'
      },
      {
        name: 'Library Interior',
        image: './../../assets/styles/background/Library-Interior.jpg',
        prompt:
          'library background with bookshelves and wooden floor; calm indoor scene; no people'
      },
      {
        name: 'Luxury Apartment',
        image: './../../assets/styles/background/Luxury-Apartment.jpg',
        prompt:
          'luxury apartment interior with sofa and window view; modern background; no people or lighting description'
      },
      {
        name: 'Luxury Car Garage',
        image: './../../assets/styles/background/Luxury-Car.jpg',
        prompt:
          'luxury car garage interior with reflective floor and cars; neutral background; no people or strong light'
      },
      {
        name: 'Modern Office',
        image: './../../assets/styles/background/Modern-Office.jpg',
        prompt:
          'modern office background with glass walls and desk; neutral indoor view; no lighting or people'
      },
      {
        name: 'Mountain Trail',
        image: './../../assets/styles/background/Mountain-Trail.jpg',
        prompt:
          'mountain trail with rocks and trees; neutral outdoor environment; no people'
      },
      {
        name: 'Night City Lights',
        image: './../../assets/styles/background/Night-City.jpg',
        prompt:
          'night city street background with buildings and street lights; neutral night environment; no people'
      },
      {
        name: 'Outdoor Park',
        image: './../../assets/styles/background/Outdoor-Park.jpg',
        prompt:
          'park background with grass and trees; plain neutral outdoor view; no lighting details'
      },
      {
        name: 'Classic Photography Studio',
        image: './../../assets/styles/background/Photography-Studio.jpg',
        prompt:
          'professional studio background with lighting equipment and backdrop; neutral environment; no person'
      },
      {
        name: 'Shopping Mall',
        image: './../../assets/styles/background/Shopping-Mall.jpg',
        prompt:
          'indoor shopping mall background with shops and glass walls; neutral ambient scene; no people'
      },
      {
        name: 'Studio Light Gray',
        image: './../../assets/styles/background/Studio-Light-Gray.jpg',
        prompt:
          'plain studio background with light gray curved wall; no shadows; no lighting description'
      },
      {
        name: 'Urban Street',
        image: './../../assets/styles/background/Urban-Street.jpg',
        prompt:
          'modern urban street with buildings and wet road; neutral environment; no lighting or reflections'
      },
      // {
      //   name: 'Wooden Cabin Interior',
      //   image: './../../assets/styles/background/Wooden-Cabin.jpg',
      //   prompt:
      //     'wooden cabin interior background with fireplace and window; warm environment; no people or light effects'
      // }
    ]
  }
];





export const MEN_CATEGORIES = [
  { key: 'shirt', label: 'Shirts', icon: './../../assets/styles/men/Categories/Shirts.jpg' },
  { key: 'tshirt', label: 'T-Shirts', icon: './../../assets/styles/men/Categories/T-Shirts.jpg' },
  { key: 'pants', label: 'Pants', icon: './../../assets/styles/men/Categories/Pants.jpg' },
  { key: 'jeans', label: 'Jeans', icon: './../../assets/styles/men/Categories/Jeans.jpg' },
  { key: 'suit', label: 'Suits & Blazers', icon: './../../assets/styles/men/Categories/Suits-&-Blazers.jpg' },
  { key: 'jacket', label: 'Jackets & Coats', icon: './../../assets/styles/men/Categories/Jackets-&-Coats.jpg' },
  { key: 'hoodie', label: 'Hoodies', icon: './../../assets/styles/men/Categories/Hoodies-&-Sweatshirts.jpg' },
  { key: 'shorts', label: 'Shorts', icon: './../../assets/styles/men/Categories/Shorts.jpg' },
  { key: 'shoes', label: 'Shoes', icon: './../../assets/styles/men/Categories/Shoes.jpg' },
  // { key: 'background', label: 'Backgrounds and Clothes (Try with AI)', icon: './../../assets/styles/men/Categories/background.jpg' },
];


// ==========================================
// 🔹 ITEMS: برای هر گروه 10 لباس واقعی
// ==========================================

export const MEN_SHIRTS: TitleCategory[] = [
  {
    title: 'Classic Shirts',
    items: [
      { 
        name: 'Oxford Shirt',
        image: './../../assets/styles/men/ClassicShirts/Oxford-White.jpg',
        defaultColor: 'white',
        prompt: '{color} cotton Oxford shirt with button-down collar and crisp texture, long sleeves, worn naturally under or without a blazer'
      },
      { 
        name: 'Slim Fit Shirt',
        image: './../../assets/styles/men/ClassicShirts/Slim-Fit-Blue.jpg',
        defaultColor: 'light blue',
        prompt: '{color} slim-fit dress shirt with smooth cotton fabric, long sleeves, and tailored fit, styled neatly beneath jacket or on its own'
      },
      { 
        name: 'Checked Cotton Shirt',
        image: './../../assets/styles/men/ClassicShirts/Checked-Cotton.jpg',
        defaultColor: 'red and navy',
        prompt: '{color} checked cotton shirt with button-down collar, casual pattern, worn naturally under blazer or jacket with pattern visible at chest and collar area'
      },
      { 
        name: 'Linen Summer Shirt',
        image: './../../assets/styles/men/ClassicShirts/Linen-Summer.jpg',
        defaultColor: 'beige',
        prompt: '{color} short-sleeve linen summer shirt with airy texture and relaxed fit, can appear alone or slightly visible under lightweight blazer'
      },
      { 
        name: 'Mandarin Collar Shirt',
        image: './../../assets/styles/men/ClassicShirts/Mandarin-Collar.jpg',
        defaultColor: 'light grey',
        prompt: '{color} mandarin collar shirt with minimal buttons and soft drape, styled cleanly beneath blazer or as standalone top'
      },
      { 
        name: 'Formal Shirt',
        image: './../../assets/styles/men/ClassicShirts/Black-Formal.jpg',
        defaultColor: 'black',
        prompt: '{color} formal cotton shirt with crisp texture and long sleeves, neatly layered beneath suit jacket or blazer'
      },
      { 
        name: 'Denim Shirt',
        image: './../../assets/styles/men/ClassicShirts/Denim.jpg',
        defaultColor: 'blue denim',
        prompt: '{color} denim shirt with front pockets and rolled sleeves, rugged yet balanced look, layered naturally under casual jacket or worn on its own'
      },
      { 
        name: 'Striped Dress Shirt',
        image: './../../assets/styles/men/ClassicShirts/Striped-Dress.jpg',
        defaultColor: 'light blue striped',
        prompt: '{color} striped dress shirt with long sleeves and slim fit, visible under blazer with subtle formal pattern on chest and collar'
      },
      { 
        name: 'Flannel Plaid Shirt',
        image: './../../assets/styles/men/ClassicShirts/Flannel-Plaid.jpg',
        defaultColor: 'red and black plaid',
        prompt: '{color} flannel plaid shirt layered under jacket, soft cozy fabric visible at collar and sleeves, preserving outer layer'
      },
      { 
        name: 'Casual Chambray Shirt',
        image: './../../assets/styles/men/ClassicShirts/Casual-Chambray.jpg',
        defaultColor: 'light blue chambray',
        prompt: '{color} chambray shirt with relaxed fit and button-down design, styled beneath blazer with texture visible at neckline and cuffs'
      },
    ]
  }
];




export const MEN_TSHIRTS: TitleCategory[] = [
  {
    title: 'Casual T-Shirts',
    items: [
      { 
        name: 'Plain Tee',
        image: './../../assets/styles/men/T-sherts/Plain-White.jpg',
        defaultColor: 'white',
        prompt: '{color} cotton T-shirt, smooth fabric, short sleeves, classic regular fit'
      },
      { 
        name: 'Crew Neck',
        image: './../../assets/styles/men/T-sherts/Black-Crew-Neck.jpg',
        defaultColor: 'black',
        prompt: '{color} crew-neck T-shirt, soft cotton, short sleeves, minimal design'
      },
      { 
        name: 'Graphic Print Tee',
        image: './../../assets/styles/men/T-sherts/Graphic-Print.jpg',
        defaultColor: 'black',
        prompt: '{color} cotton T-shirt featuring an artistic motif with dynamic colors, smooth texture, urban streetwear style'
      },

      { 
        name: 'Oversized Beige Tee',
        image: './../../assets/styles/men/T-sherts/Oversized-Beige.jpg',
        defaultColor: 'beige',
        prompt: 'loose-fit {color} oversized T-shirt, wide sleeves, casual relaxed cut'
      },
      { 
        name: 'Striped Navy Tee',
        image: './../../assets/styles/men/T-sherts/Striped-Navy.jpg',
        defaultColor: 'navy blue',
        prompt: '{color} T-shirt with white horizontal stripes, soft cotton, nautical style'
      },
      { 
        name: 'Henley Cotton Tee',
        image: './../../assets/styles/men/T-sherts/Henley-Cotton.jpg',
        defaultColor: 'light beige',
        prompt: 'short-sleeve Henley T-shirt in {color}, three buttons at neckline, textured cotton fabric'
      },
      { 
        name: 'V-Neck Tee',
        image: './../../assets/styles/men/T-sherts/V-Neck-Grey.jpg',
        defaultColor: 'grey',
        prompt: '{color} V-neck T-shirt, lightweight cotton, simple casual design'
      },
      { 
        name: 'Pocket Tee',
        image: './../../assets/styles/men/T-sherts/Pocket.jpg',
        defaultColor: 'olive green',
        prompt: '{color} T-shirt with a small front chest pocket, regular fit, soft texture'
      },
      { 
        name: 'Retro Logo Tee',
        image: './../../assets/styles/men/T-sherts/Retro-Logo.jpg',
        defaultColor: 'cream',
        prompt: '{color} T-shirt with vintage eagle logo print, retro-style graphic, worn cotton texture'
      },
      { 
        name: 'Textured Tee',
        image: './../../assets/styles/men/T-sherts/Textured-Green.jpg',
        defaultColor: 'deep green',
        prompt: '{color} textured T-shirt, round neck, short sleeves, subtle woven pattern'
      },
    ]
  }
];



export const MEN_PANTS: TitleCategory[] = [
  {
    title: 'Casual Pants',
    items: [
      { 
        name: 'Chino Khaki Pants',
        image: './../../assets/styles/men/Pants/Chino-Khaki.jpg',
        defaultColor: 'khaki beige',
        prompt: '{color} chino pants, straight fit, cotton twill fabric, back welt pocket with button, casual refined look'
      },
      { 
        name: 'Slim Fit Pants',
        image: './../../assets/styles/men/Pants/Slim-Fit-Black.jpg',
        defaultColor: 'black',
        prompt: '{color} slim-fit trousers, smooth stretch fabric, narrow leg cut, modern minimalist formal style'
      },
      { 
        name: 'Linen Beige Pants',
        image: './../../assets/styles/men/Pants/Linen-Beige.jpg',
        defaultColor: 'light beige linen',
        prompt: '{color} linen pants, soft and airy texture, straight leg, drawstring waist, relaxed summer look'
      },
      { 
        name: 'Cargo Pants',
        image: './../../assets/styles/men/Pants/Cargo-Olive.jpg',
        defaultColor: 'olive green',
        prompt: '{color} cotton cargo pants with large side pockets, straight relaxed leg, durable outdoor utility design'
      },
      { 
        name: 'Pleated Trousers',
        image: './../../assets/styles/men/Pants/Pleated-Trousers.jpg',
        defaultColor: 'mid grey',
        prompt: '{color} pleated formal trousers, pressed crease front, tailored fit, smooth wool-blend texture'
      },
      { 
        name: 'Navy Dress Pants',
        image: './../../assets/styles/men/Pants/Navy-Dress.jpg',
        defaultColor: 'navy blue',
        prompt: '{color} dress trousers, sleek and slim, formal structured look, smooth lightweight fabric'
      },
      { 
        name: 'Smart Pants',
        image: './../../assets/styles/men/Pants/Grey-Smart.jpg',
        defaultColor: 'light grey',
        prompt: '{color} smart office trousers, slightly tapered cut, polished surface texture, business casual tone'
      },
      { 
        name: 'Relaxed Fit Pants',
        image: './../../assets/styles/men/Pants/Relaxed-Fit.jpg',
        defaultColor: 'sand beige',
        prompt: '{color} relaxed fit cotton pants, drawstring waist, loose leg, natural texture, comfort casual feel'
      },
      { 
        name: 'Cotton Drawstring Pants',
        image: './../../assets/styles/men/Pants/Cotton-Drawstring.jpg',
        defaultColor: 'ash grey',
        prompt: '{color} cotton drawstring pants, lounge-style fit, soft textured weave, minimal seams, everyday comfort'
      },
      { 
        name: 'Streetwear Cargo Pants',
        image: './../../assets/styles/men/Pants/Streetwear-Cargo.jpg',
        defaultColor: 'dark army green',
        prompt: '{color} streetwear cargo jogger pants, cuffed ankles, side utility pockets, relaxed fit, urban modern look'
      },
    ]
  }
];



export const MEN_JEANS: TitleCategory[] = [
  {
    title: 'Jeans',
    items: [
      { 
        name: 'Classic Jeans',
        image: './../../assets/styles/men/Jeans/Classic-Blue.jpg',
        defaultColor: 'medium blue denim',
        prompt: '{color} straight-leg jeans, mid-rise, slightly faded wash, classic five-pocket denim style'
      },
      { 
        name: 'Slim Fit Jeans',
        image: './../../assets/styles/men/Jeans/Slim-Fit.jpg',
        defaultColor: 'dark indigo denim',
        prompt: '{color} slim-fit jeans, soft stretch denim, dark clean tone, modern streamlined silhouette'
      },
      { 
        name: 'Straight Fit Jeans',
        image: './../../assets/styles/men/Jeans/Straight-Fit.jpg',
        defaultColor: 'light indigo denim',
        prompt: '{color} straight-fit jeans, regular rise, softly washed denim with gentle tonal fading, casual everyday look'
      },
      { 
        name: 'Wash Jeans',
        image: './../../assets/styles/men/Jeans/Dark-Wash.jpg',
        defaultColor: 'deep navy wash',
        prompt: '{color} dark-wash jeans, smooth texture, refined tone, subtle fading, sleek smart-casual style'
      },
      { 
        name: 'Ripped Jeans',
        image: './../../assets/styles/men/Jeans/Ripped.jpg',
        defaultColor: 'faded blue denim',
      prompt: '{color} denim jeans with soft aged texture and gentle tonal fading, relaxed street style'

      },

      { 
        name: 'Tapered Fit Jeans',
        image: './../../assets/styles/men/Jeans/Tapered-Fit.jpg',
        defaultColor: 'medium blue wash',
        prompt: '{color} tapered jeans, gently narrowing from knee to ankle, mild tonal fading, soft stretch denim'
      },
      { 
        name: 'Washed Grey Jeans',
        image: './../../assets/styles/men/Jeans/Washed-Grey.jpg',
        defaultColor: 'washed grey denim',
        prompt: '{color} grey-wash jeans, smooth fabric, gentle fading, straight cut, natural denim texture'
      },
      { 
        name: 'Relaxed Fit Jeans',
        image: './../../assets/styles/men/Jeans/Relaxed-Fit.jpg',
        defaultColor: 'light blue denim',
        prompt: '{color} relaxed-fit jeans, loose straight leg, soft faded denim, laid-back casual style'
      },
      { 
        name: 'Light Jeans',
        image: './../../assets/styles/men/Jeans/Light-Blue.jpg',
        defaultColor: 'pale blue denim',
        prompt: '{color} light-wash jeans, straight fit, soft cotton denim, simple casual tone'
      },
      { 
        name: 'Vintage Distressed Jeans',
        image: './../../assets/styles/men/Jeans/Vintage-Distressed.jpg',
        defaultColor: 'light vintage blue denim',
        prompt: '{color} denim jeans with subtle aged texture, gentle tonal fading, classic retro-inspired style'
      }
    ]
  }
];




export const MEN_SUITS: TitleCategory[] = [
  {
    title: 'Formal Wear',
    items: [
      { 
        name: 'Classic Suit',
        image: './../../assets/styles/men/Suit/Classic-Black.jpg',
        defaultColor: 'black',
        prompt: '{color} two-piece suit with notch lapel jacket and matching trousers, smooth wool-blend fabric, formal business style'
      },
      { 
        name: 'Navy Slim Fit Suit',
        image: './../../assets/styles/men/Suit/Navy-Slim-Fit.jpg',
        defaultColor: 'navy blue',
        prompt: '{color} slim-fit suit with single-breasted jacket, two buttons, flat-front trousers, lightweight fine wool fabric'
      },
      { 
        name: 'Grey Two-Piece Suit',
        image: './../../assets/styles/men/Suit/Grey-Two-Piece.jpg',
        defaultColor: 'medium grey',
        prompt: '{color} two-piece suit, tailored fit, soft wool-blend fabric, subtle texture, modern professional look'
      },
      { 
        name: 'Tuxedo Dinner Suit',
        image: './../../assets/styles/men/Suit/Tuxedo-Dinner.jpg',
        defaultColor: 'jet black',
        prompt: '{color} tuxedo suit with satin peak lapels, crisp white shirt, black tie, classic formal evening wear'
      },
      { 
        name: 'Wool Suit',
        image: './../../assets/styles/men/Suit/Brown-Wool.jpg',
        defaultColor: 'chestnut brown',
        prompt: '{color} wool suit with fine texture, single-breasted jacket, notch lapel, warm tone suitable for fall or winter'
      },
      { 
        name: 'Checked Pattern Suit',
        image: './../../assets/styles/men/Suit/Checked-Pattern.jpg',
        defaultColor: 'light grey check',
        prompt: '{color} patterned suit featuring fine check design, tailored fit, notch lapel jacket, classic yet modern look'
      },
      { 
        name: 'Beige Summer Suit',
        image: './../../assets/styles/men/Suit/Beige-Summer.jpg',
        defaultColor: 'beige',
        prompt: '{color} lightweight summer suit with single-breasted jacket, two buttons, breathable cotton-linen blend fabric'
      },
      { 
        name: 'Double Breasted Suit',
        image: './../../assets/styles/men/Suit/Double-Breasted.jpg',
        defaultColor: 'deep navy',
        prompt: '{color} double-breasted suit with six buttons, structured shoulders, elegant tailored design, classic formal wear'
      },
      { 
        name: 'Blazer',
        image: './../../assets/styles/men/Suit/Blue-Blazer.jpg',
        defaultColor: 'dark navy',
        prompt: '{color} blazer with two-button closure, lightweight structured fit, paired with matching trousers, semi-formal business style'
      },
      { 
        name: 'Charcoal Business Suit',
        image: './../../assets/styles/men/Suit/Charcoal-Business.jpg',
        defaultColor: 'charcoal grey',
        prompt: '{color} business suit with sharp cut, fine wool texture, single-breasted jacket and matching trousers, executive professional look'
      },
    ]
  }
];


export const MEN_JACKETS: TitleCategory[] = [
  {
    title: 'Outerwear',
    items: [
      { 
        name: 'Leather Jacket',
        image: './../../assets/styles/men/Outerwear/Leather.jpg',
        defaultColor: 'black leather',
        prompt: '{color} biker-style leather jacket, slightly glossy finish, silver zippers and pockets, fitted silhouette'
      },
      { 
        name: 'Bomber Jacket',
        image: './../../assets/styles/men/Outerwear/Bomber.jpg',
        defaultColor: 'olive green',
        prompt: '{color} bomber jacket with ribbed collar, cuffs, and hem, front zipper, lightweight nylon material'
      },
      { 
        name: 'Denim Jacket',
        image: './../../assets/styles/men/Outerwear/Denim.jpg',
        defaultColor: 'medium blue denim',
        prompt: '{color} denim jacket with button front, two chest pockets, classic casual style'
      },
      { 
        name: 'Puffer Jacket',
        image: './../../assets/styles/men/Outerwear/Puffer.jpg',
        defaultColor: 'black',
        prompt: '{color} puffer jacket with quilted padding, high collar, front zipper, warm insulated winter style'
      },
      { 
        name: 'Trench Coat',
        image: './../../assets/styles/men/Outerwear/Trench-Coat.jpg',
        defaultColor: 'beige',
        prompt: 'long {color} trench coat with belt at waist, double-breasted front, epaulets, and smooth waterproof fabric'
      },
      { 
        name: 'Peacoat Navy',
        image: './../../assets/styles/men/Outerwear/Peacoat-Navy.jpg',
        defaultColor: 'navy blue',
        prompt: 'double-breasted {color} wool peacoat, wide lapels, front buttons, structured classic naval style'
      },
      { 
        name: 'Varsity Jacket',
        image: './../../assets/styles/men/Outerwear/Varsity.jpg',
        defaultColor: 'royal blue and cream',
        prompt: '{color} varsity jacket with contrast sleeves, striped ribbed cuffs and collar, button front, sporty college style'
      },
      { 
        name: 'Parka Coat',
        image: './../../assets/styles/men/Outerwear/Parka-Coat.jpg',
        defaultColor: 'dark green',
        prompt: '{color} parka coat with fur-trimmed hood, front pockets, insulated lining, long winter outerwear'
      },
      { 
        name: 'Windbreaker',
        image: './../../assets/styles/men/Outerwear/Windbreaker.jpg',
        defaultColor: 'sky blue',
        prompt: '{color} windbreaker jacket with zipper closure, high collar, lightweight fabric, sporty casual design'
      },
      { 
        name: 'Corduroy Jacket',
        image: './../../assets/styles/men/Outerwear/Corduroy.jpg',
        defaultColor: 'brown',
        prompt: '{color} corduroy jacket with button front, two flap pockets, soft textured cotton, relaxed casual style'
      },
    ]
  }
];


export const MEN_HOODIES: TitleCategory[] = [
  {
    title: 'Casual Hoodies',
    items: [
      {
        name: 'Pullover Hoodie',
        image: './../../assets/styles/men/Hoodies/Grey-Pullover.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} pullover hoodie made of soft cotton fleece, front kangaroo pocket, drawstring hood, relaxed casual fit'
      },
      {
        name: 'Zip Hoodie',
        image: './../../assets/styles/men/Hoodies/Black-Zip.jpg',
        defaultColor: 'black',
        prompt:
          '{color} zip-up hoodie with metal zipper, front pockets, drawstring hood, soft fleece fabric, casual everyday style'
      },
      {
        name: 'Beige Oversized Hoodie',
        image: './../../assets/styles/men/Hoodies/Beige-Oversized.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} oversized hoodie with dropped shoulders, large hood, front kangaroo pocket, relaxed streetwear style'
      },
      {
        name: 'Graphic Street Hoodie',
        image: './../../assets/styles/men/Hoodies/Graphic-Street.jpg',
        defaultColor: 'black',
        prompt:
          '{color} street-style hoodie with bold graphic motif on the chest, ribbed cuffs and hem, modern urban look'
      },
      {
        name: 'Sports Hoodie',
        image: './../../assets/styles/men/Hoodies/Blue-Sports.jpg',
        defaultColor: 'blue',
        prompt:
          '{color} athletic performance hoodie made from lightweight stretch fabric, moisture-wicking, slim fit with drawstring hood'
      },
      {
        name: 'Minimal Hoodie',
        image: './../../assets/styles/men/Hoodies/White-Minimal.jpg',
        defaultColor: 'white',
        prompt:
          '{color} minimal design hoodie with no visible logo, clean lines, front pocket, and drawstring hood'
      },
      {
        name: 'Classic Hoodie',
        image: './../../assets/styles/men/Hoodies/Red-Classic.jpg',
        defaultColor: 'red',
        prompt:
          '{color} classic cotton hoodie, standard fit with front pocket and adjustable hood, simple everyday design'
      },
      {
        name: 'Earth Tone Hoodie',
        image: './../../assets/styles/men/Hoodies/Brown-Earth-Tone.jpg',
        defaultColor: 'brown',
        prompt:
          '{color} earth-tone hoodie in soft brushed fleece, relaxed cut, warm and cozy look for fall or winter'
      },
      {
        name: 'Hoodie',
        image: './../../assets/styles/men/Hoodies/Olive-Green.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} casual hoodie with kangaroo pocket, cotton-poly blend, and adjustable drawstring hood'
      },
      {
        name: 'Zip Sweatshirt',
        image: './../../assets/styles/men/Hoodies/Zip-Sweatshirt.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} zip-front sweatshirt with ribbed cuffs and hem, soft cotton material, simple and functional'
      }
    ]
  }
];



export const MEN_SHORTS: TitleCategory[] = [
  {
    title: 'Summer Shorts',
    items: [
      {
        name: 'Denim Shorts',
        image: './../../assets/styles/men/Shorts/Denim.jpg',
        defaultColor: 'mid blue denim',
        prompt:
          '{color} denim shorts, above-knee (~7-inch inseam), rolled hems, five pockets, visible stitching; casual summer style with natural fabric texture'
      },
      {
        name: 'Chino Shorts',
        image: './../../assets/styles/men/Shorts/Chino.jpg',
        defaultColor: 'beige',
        prompt:
          '{color} chino shorts, knee-length or slightly above knee (~7-9 inch inseam), button closure, side pockets, cotton twill; simple and lightweight design'
      },
      {
        name: 'Cargo Shorts',
        image: './../../assets/styles/men/Shorts/Cargo.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} cargo shorts with large flap side pockets, durable cotton canvas, knee-length; utility-inspired design with relaxed fit'
      },
      {
        name: 'Linen Shorts',
        image: './../../assets/styles/men/Shorts/Linen.jpg',
        defaultColor: 'light beige linen',
        prompt:
          '{color} linen shorts with drawstring waistband, lightweight and breathable, above-knee (~7-inch inseam); soft fabric with relaxed summer feel'
      },
      {
        name: 'Sweat Shorts',
        image: './../../assets/styles/men/Shorts/Sweat.jpg',
        defaultColor: 'light grey',
        prompt:
          '{color} sweat shorts made of soft cotton fleece, drawstring waist, relaxed fit, above-knee (~7-inch inseam); comfortable casual style'
      },
      {
        name: 'Athletic Shorts',
        image: './../../assets/styles/men/Shorts/Athletic.jpg',
        defaultColor: 'black',
        prompt:
          '{color} athletic shorts in lightweight performance fabric, elastic waistband, above-knee (~5-7 inch inseam); sport-inspired look with smooth texture'
      },
      {
        name: 'Tailored Shorts',
        image: './../../assets/styles/men/Shorts/Tailored.jpg',
        defaultColor: 'navy blue',
        prompt:
          '{color} tailored shorts with pleated front, clean hem, structured silhouette, knee-length; refined summer style with neat appearance'
      },
      {
        name: 'Plaid Shorts',
        image: './../../assets/styles/men/Shorts/Plaid.jpg',
        defaultColor: 'navy and olive plaid',
        prompt:
          '{color} plaid pattern shorts with button front and belt loops, above-knee (~7-inch inseam); classic casual design with textured fabric'
      },
      {
        name: 'Cotton Relax Shorts',
        image: './../../assets/styles/men/Shorts/Cotton-Relax.jpg',
        defaultColor: 'sand beige',
        prompt:
          '{color} relaxed cotton shorts with drawstring waist, soft texture, above-knee (~7-inch inseam); loose summer fit for comfort'
      },
      {
        name: 'Street Style Shorts',
        image: './../../assets/styles/men/Shorts/Street-Style.jpg',
        defaultColor: 'charcoal grey',
        prompt:
          '{color} street-style shorts with dropped-crotch silhouette, cargo pockets, elastic waistband, above-knee (~7-inch inseam); modern urban look with casual fit'
      }
    ]
  }
];




export const MEN_SHOES: TitleCategory[] = [
  {
    title: 'Shoes',
    items: [
      {
        name: 'Oxford Shoes',
        image: './../../assets/styles/men/Shoes/Black-Oxford.jpg',
        defaultColor: 'black',
        prompt: '{color} polished leather oxford dress shoes with closed lacing and sleek toe cap, worn with formal or business attire'
      },
      {
        name: 'Brogues',
        image: './../../assets/styles/men/Shoes/Brown-Brogues.jpg',
        defaultColor: 'tan brown',
        prompt: '{color} leather brogues with decorative perforations, suitable for smart casual or semi-formal looks'
      },
      {
        name: 'Chelsea Boots',
        image: './../../assets/styles/men/Shoes/Chelsea-Boots.jpg',
        defaultColor: 'brown',
        prompt: '{color} suede chelsea boots with elastic side panels and rounded toe, paired with slim trousers or jeans'
      },
      {
        name: 'Desert Boots',
        image: './../../assets/styles/men/Shoes/Desert-Boots.jpg',
        defaultColor: 'sand beige',
        prompt: '{color} desert boots made of soft suede, casual mid-ankle height design with crepe sole, worn with chinos or shorts'
      },
      {
        name: 'High-top Sneakers',
        image: './../../assets/styles/men/Shoes/High-top.jpg',
        defaultColor: 'white and gray',
        prompt: '{color} high-top sneakers with padded ankle collar and sporty silhouette, ideal for casual or streetwear outfits'
      },
      {
        name: 'Sport Trainers',
        image: './../../assets/styles/men/Shoes/Sport-Trainers.jpg',
        defaultColor: 'light gray',
        prompt: '{color} athletic running trainers with mesh upper and rubber sole, designed for active or casual outfits'
      },
      {
        name: 'White Sneakers',
        image: './../../assets/styles/men/Shoes/White-Sneakers.jpg',
        defaultColor: 'white',
        prompt: '{color} minimalist low-top leather sneakers with clean silhouette, versatile style suitable for casual or smart-casual wear'
      },
      {
        name: 'Loafers',
        image: './../../assets/styles/men/Shoes/Loafers.jpg',
        defaultColor: 'dark brown',
        prompt: '{color} leather loafers with slip-on design and smooth finish, classic style for semi-formal or business casual looks'
      },
      {
        name: 'Leather Moccasins',
        image: './../../assets/styles/men/Shoes/Leather.jpg',
        defaultColor: 'chocolate brown',
        prompt: '{color} driving moccasins with soft leather construction and stitched toe detail, ideal for relaxed smart-casual outfits'
      },
      {
        name: 'Sandals',
        image: './../../assets/styles/men/Shoes/Sandals.jpg',
        defaultColor: 'tan brown',
        prompt: '{color} leather sandals with cross straps and buckle, comfortable open design for summer or beachwear looks'
      }
    ]
  }
];


// export const MEN_ACCESSORIES: TitleCategory[] = [
//   {
//     title: 'Accessories',
//     items: [
//       { name: 'Leather Belt', image: 'assets/styles/men/accessories/belt.jpg' },
//       { name: 'Analog Watch', image: 'assets/styles/men/accessories/watch.jpg' },
//       { name: 'Sunglasses', image: 'assets/styles/men/accessories/sunglasses.jpg' },
//       { name: 'Wallet', image: 'assets/styles/men/accessories/wallet.jpg' },
//       { name: 'Bracelet', image: 'assets/styles/men/accessories/bracelet.jpg' },
//       { name: 'Neck Tie', image: 'assets/styles/men/accessories/tie.jpg' },
//       { name: 'Scarf', image: 'assets/styles/men/accessories/scarf.jpg' },
//       { name: 'Cap', image: 'assets/styles/men/accessories/cap.jpg' },
//       { name: 'Ring', image: 'assets/styles/men/accessories/ring.jpg' },
//       { name: 'Cufflinks', image: 'assets/styles/men/accessories/cufflinks.jpg' },
//     ]
//   }
// ];






//Women


export interface WomenTitleCategory {
  title: string;
  items: WomenCategory[];
}

export interface WomenCategory {
  name: string;
  image: string;
  prompt?: string; 
    defaultColor?: string;
}

export const WOMEN_CATEGORIES = [
  // 🩱 Tops & Blouses
  { key: 'blouse', label: 'Blouses & Shirts', icon: './../../assets/styles/women/Categories/Blouses-&-Shirts.jpg' },
  { key: 'tshirt', label: 'T-Shirts & Tops', icon: './../../assets/styles/women/Categories/T-Shirts-&-Tops.jpg' },
  { key: 'crop', label: 'Crop Tops', icon: './../../assets/styles/women/Categories/Crop-Tops.jpg' },
  { key: 'sweater', label: 'Sweaters & Cardigans', icon: './../../assets/styles/women/Categories/Sweaters-&-Cardigans.jpg' },

  // 👗 Dresses & One-Piece
  { key: 'dress', label: 'Dresses', icon: './../../assets/styles/women/Categories/Dresses.jpg' },
  { key: 'jumpsuit', label: 'Jumpsuits & Rompers', icon: './../../assets/styles/women/Categories/Jumpsuits-&-Rompers.jpg' },

  // 👖 Bottoms
  { key: 'pants', label: 'Pants', icon: './../../assets/styles/women/Categories/Pants-&-Trousers.jpg' },
  { key: 'jeans', label: 'Jeans', icon: './../../assets/styles/women/Categories/Jeans.jpg' },
  { key: 'skirt', label: 'Skirts', icon: './../../assets/styles/women/Categories/Skirts.jpg' },
  { key: 'shorts', label: 'Shorts', icon: './../../assets/styles/women/Categories/Shorts.jpg' },

  // 🧥 Outerwear
  { key: 'jacket', label: 'Jackets & Coats', icon: './../../assets/styles/women/Categories/Jackets-&-Coats.jpg' },
  { key: 'blazer', label: 'Blazers', icon: './../../assets/styles/women/Categories/Blazers.jpg' },
  { key: 'hoodie', label: 'Hoodies & Sweatshirts', icon: './../../assets/styles/women/Categories/Hoodies-&-Sweatshirts.jpg' },
  { key: 'cardigan', label: 'Cardigans', icon: './../../assets/styles/women/Categories/Cardigans.jpg' },

  // 👠 Shoes
  { key: 'heels', label: 'Heels', icon: './../../assets/styles/women/Categories/Heels.jpg' },
  { key: 'sneakers', label: 'Sneakers', icon: './../../assets/styles/women/Categories/Sneakers.jpg' },
  { key: 'boots', label: 'Boots', icon: './../../assets/styles/women/Categories/Boots.jpg' },
  { key: 'sandals', label: 'Sandals', icon: './../../assets/styles/women/Categories/Sandals.jpg' },

  // 💍 Accessories
  { key: 'bag', label: 'Bags & Purses', icon: './../../assets/styles/women/Categories/Bags-&-Purses.jpg' },
  { key: 'jewelry', label: 'Jewelry', icon: './../../assets/styles/women/Categories/Jewelry.jpg' },
  { key: 'scarf', label: 'Scarves', icon: './../../assets/styles/women/Categories/Scarves.jpg' },
  { key: 'hat', label: 'Hats', icon: './../../assets/styles/women/Categories/Hats.jpg' },

  // 🏞 Background
  // { key: 'background', label: 'Backgrounds and Clothes (Try with AI)', icon: './../../assets/styles/men/Categories/background.jpg' },
];




export const WOMEN_DRESSES: WomenTitleCategory[] = [
  {
    title: 'Dresses',
    items: [
      {
        name: 'Maxi Dress',
        image: './../../assets/styles/women/Dresses/Maxi.jpg',
        defaultColor: 'soft lavender',
        prompt:
          '{color} maxi dress, floor-length with gentle flare, high round neckline, short sleeves; smooth flowing fabric with soft drape; elegant yet modest silhouette suitable for summer or formal day events'
      },
      {
        name: 'Midi Dress',
        image: './../../assets/styles/women/Dresses/Midi.jpg',
        defaultColor: 'light black',
        prompt:
          '{color} midi dress with long fitted sleeves, high neckline, and straight pencil silhouette; mid-calf length with smooth knit fabric; refined and minimal design emphasizing clean lines'
      },
     {
  name: 'Evening Gown',
  image: './../../assets/styles/women/Dresses/Evening-Gown.jpg',
  defaultColor: 'midnight blue',
  prompt:
    '{color} elegant evening gown with covered shoulders and modest neckline; fitted bodice and gently flared floor-length skirt; subtle satin or fine sequined texture with soft, realistic light reflection; refined formal design with opaque fabric and stable silhouette consistent from front, side, and back views'
}
,
      {
        name: 'A-Line Dress',
        image: './../../assets/styles/women/Dresses/A-Line.jpg',
        defaultColor: 'light Purple',
        prompt:
          '{color} A-line dress, floor-length chiffon fabric with gathered neckline and long bishop sleeves; soft, flowing drape with natural pleats; modest and feminine evening silhouette'
      },
 {
  name: 'Bodycon Dress',
  image: './../../assets/styles/women/Dresses/Bodycon.jpg',
  defaultColor: 'deep emerald green',
  prompt:
    '{color} bodycon dress with long sleeves, high neckline, and ankle-length design; smooth stretch fabric with clean lines; fitted silhouette following body shape without patterns or decorations; minimal, elegant, and realistic appearance'
},

      {
  name: 'Mini Dress',
  image: './../../assets/styles/women/Dresses/Mini.jpg',
  defaultColor: 'sky blue',
  prompt:
    '{color} short summer dress reaching mid-thigh, sleeveless with modest shoulder coverage and fitted waist; smooth cotton-blend fabric with clean seams; ensure full-body outfit with visible legs (no pants or trousers underneath); consistent opaque fabric and stable form from all angles'
}
,
      {
        name: 'Off-Shoulder Dress',
        image: './../../assets/styles/women/Dresses/Off-Shoulder.jpg',
        defaultColor: 'cream beige',
        prompt:
          '{color} off-shoulder dress with puffed sleeves and gathered bodice, mid-calf flowy skirt; light cotton or chiffon fabric; elegant and romantic silhouette with balanced volume'
      },
     {
  name: 'Shirt Dress',
  image: './../../assets/styles/women/Dresses/Shirt.jpg',
  defaultColor: 'light blue',
  prompt:
    '{color} shirt-style dress with button-up front, short sleeves with rolled cuffs, and belted waist; knee-length opaque cotton fabric; single-piece outfit replacing any pants or trousers; casual daytime design with consistent structure from all sides'
}
,
      {
        name: 'Slip Dress',
        image: './../../assets/styles/women/Dresses/Slip.jpg',
        defaultColor: 'champagne gold',
        prompt:
          '{color} slip dress made of satin fabric, mid-length, draped neckline, thin straps; soft sheen and fluid silhouette; elegant minimalist evening wear'
      },
      {
        name: 'Wrap Dress',
        image: './../../assets/styles/women/Dresses/Wrap.jpg',
        defaultColor: 'floral print on dark navy base',
        prompt:
          '{color} wrap dress with long sleeves, waist tie, and asymmetric hem; lightweight fabric with soft floral pattern; casual yet graceful look suitable for all seasons'
      }
    ]
  }
];



export const WOMEN_JEANS = [
  {
    title: 'Jeans',
    items: [
      {
        name: 'Skinny Jeans',
        image: './../../assets/styles/women/Jeans/Skinny.jpg',
        defaultColor: 'deep blue denim',
        prompt:
          '{color} high-waist skinny denim jeans with close, even fit down to the ankles; full-length stretch denim with smooth clean surface and subtle natural fading; classic five-pocket construction, seams and shape consistent from front, side, and back views'
      },
      {
        name: 'High Waist Jeans',
        image: './../../assets/styles/women/Jeans/High-Waist.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} high-waist denim jeans with slim straight legs and ankle-length cut; soft even wash with light shading; classic five-pocket layout and stable, simple silhouette clearly visible from all angles'
      },
      {
  name: 'Mom Jeans',
  image: './../../assets/styles/women/Jeans/Mom.jpg',
  defaultColor: 'light washed blue denim',
  prompt:
    '{color} mom jeans with high waist and full-length straight to gently tapered legs; light vintage wash with soft even fading; classic five-pocket design and structured silhouette consistent from front, side, and back views'
},
      {
        name: 'Straight Fit Jeans',
        image: './../../assets/styles/women/Jeans/Straight-Fit.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} straight-leg denim jeans with mid to high waist and full-length cut; uniform width from knee to hem and balanced medium wash; clean seams, classic pockets, and stable straight outline from all sides'
      },
      {
        name: 'Flared Jeans',
        image: './../../assets/styles/women/Jeans/Flared.jpg',
        defaultColor: 'dark indigo denim',
        prompt:
          '{color} flared denim jeans with high waist, slim upper leg, and clear flare from below the knee to the hem; full length with smooth dark wash and minimal fading; consistent flare shape and proportions in front, side, and back views'
      },
      {
        name: 'Boyfriend Jeans',
        image: './../../assets/styles/women/Jeans/Boyfriend.jpg',
        defaultColor: 'soft faded blue denim',
        prompt:
          '{color} boyfriend denim jeans with relaxed straight fit and neatly rolled cuffs above the ankle; light washed finish with soft worn effect; volume, cuff height, and pocket placement stable across all viewing angles'
      },
      {
        name: 'Wide Leg Jeans',
        image: './../../assets/styles/women/Jeans/Wide-Leg.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} wide-leg denim jeans with high waist and long full-length wide silhouette; structured fabric with smooth vertical fall; even wash, clean hem, and clearly defined wide shape consistent from every direction'
      },
      {
  name: 'Distressed Jeans',
  image: './../../assets/styles/women/Jeans/Distressed.jpg',
  defaultColor: 'light blue denim',
  prompt:
    '{color} slim straight full-length jeans with controlled distressed details and small frayed patches on the front; realistic denim texture with balanced fading; seams, pockets, and distress positions kept consistent in all views'
},
{
  name: 'Cropped Jeans',
  image: './../../assets/styles/women/Jeans/Cropped.jpg',
  defaultColor: 'medium blue denim',
  prompt:
    '{color} cropped jeans with slim straight legs ending slightly above the ankle; clean simple hems and classic five-pocket style; clearly jeans, not shorts, with length and silhouette consistent from every viewing angle'
},
      {
        name: 'Vintage Blue Jeans',
        image: './../../assets/styles/women/Jeans/Vintage-Blue.jpg',
        defaultColor: 'vintage blue wash denim',
        prompt:
          '{color} classic straight-leg denim jeans with mid to high waist and full-length cut; vintage-style blue wash with gentle fading at seams; structured, timeless silhouette and pocket placement consistent in every view'
      }
    ]
  }
];





export const WOMEN_HEELS = [
  {
    title: 'Heels',
    items: [
      {
        name: 'Stiletto Heels',
        image: './../../assets/styles/women/Heels/Stiletto.jpg',
        defaultColor: 'black patent leather',
        prompt:
          '{color} stiletto heels with slim high heel and open-toe design; ankle strap with small buckle; glossy patent finish and elegant curve'
      },
      {
        name: 'Block Heels',
        image: './../../assets/styles/women/Heels/Block.jpg',
        defaultColor: 'beige matte leather',
        prompt:
          '{color} block heels with open toe and thick stable heel; minimalist design with soft matte leather texture; comfortable and modern look'
      },
      {
        name: 'Wedge Heels',
        image: './../../assets/styles/women/Heels/Wedge.jpg',
        defaultColor: 'pastel mint and peach tones',
        prompt:
          '{color} wedge heels with woven espadrille base; pastel straps in mint, yellow, and peach shades; open-toe summer style with natural lighting'
      },
      {
        name: 'Ankle Strap Heels',
        image: './../../assets/styles/women/Heels/Ankle-Strap.jpg',
        defaultColor: 'black patent leather',
        prompt:
          '{color} ankle-strap heels with thin high stiletto heel, open toe, and double ankle straps; sleek glossy finish and refined silhouette'
      },
      {
        name: 'Platform Heels',
        image: './../../assets/styles/women/Heels/Platform.jpg',
        defaultColor: 'deep red patent leather',
        prompt:
          '{color} platform heels with thick block heel and front platform; glossy patent leather texture; bold evening style with buckle strap'
      },
      {
        name: 'Peep Toe Heels',
        image: './../../assets/styles/women/Heels/Peep-Toe.jpg',
        defaultColor: 'navy blue satin',
        prompt:
          '{color} peep-toe heels with smooth satin finish, medium block heel, and elegant open front; soft fabric texture and gentle shine'
      },
      {
        name: 'Slingback Heels',
        image: './../../assets/styles/women/Heels/Slingback.jpg',
        defaultColor: 'cream beige leather',
        prompt:
          '{color} slingback heels with medium stiletto heel, open toe, and back strap; minimalist silhouette with smooth leather texture'
      },
      {
        name: 'Pumps',
        image: './../../assets/styles/women/Heels/Pumps.jpg',
        defaultColor: 'navy leather',
        prompt:
          '{color} classic pumps with closed pointed toe and medium-high heel; smooth leather surface with subtle sheen; timeless formal look'
      },
      {
        name: 'Kitten Heels',
        image: './../../assets/styles/women/Heels/Kitten.jpg',
        defaultColor: 'mint green and pastel pink',
        prompt:
          '{color} kitten heels with low slim heel and cross straps in pastel shades; soft matte finish with gentle contrast detailing'
      },
      
    ]
  }
];



export const WOMEN_BLOUSES = [
  {
    title: 'Blouses & Shirts',
    items: [
      {
        name: 'Classic White Blouse',
        image: './../../assets/styles/women/Blouses/Classic.jpg',
        defaultColor: 'pure white cotton',
        prompt:
          '{color} cotton blouse with long sleeves, classic collar, and button-down front; fitted silhouette with smooth even texture and matte finish; minimal professional style suitable for all angles'
      },
      {
        name: 'Silk Button-Up Blouse',
        image: './../../assets/styles/women/Blouses/Silk-Button-Up.jpg',
        defaultColor: 'champagne silk',
        prompt:
          '{color} silk blouse with button-up front and long sleeves; soft lightweight drape with gentle natural sheen; clean tailored cut consistent across all views'
      },
      {
        name: 'Chiffon Ruffle Blouse',
        image: './../../assets/styles/women/Blouses/Chiffon-Ruffle.jpg',
        defaultColor: 'lavender chiffon',
        prompt:
          '{color} chiffon blouse with layered ruffles along front and sleeves; light chiffon fabric with soft ruffles and semi-matte texture; natural flow and volume visible from every angle'
      },
     {
  name: 'Satin Wrap Blouse',
  image: './../../assets/styles/women/Blouses/Satin-Wrap.jpg',
   defaultColor: 'warm champagne beige satin',
  prompt:
    '{color} satin wrap blouse with a secure crossover front and modest high V-neck (no cleavage), long sleeves, and a fixed left-side waist tie bow; opaque satin with smooth even texture and gentle low-gloss sheen; stable overlap, bow position, and hem length consistent from front, right-side, and back views'
}
      ,
     {
  name: 'Lace Detail Blouse',
  image: './../../assets/styles/women/Blouses/Lace-Detail.jpg',
  defaultColor: 'ivory lace and chiffon',
  prompt:
    '{color} long-sleeve blouse with a lined lace-style decorative front panel and opaque chiffon-style sleeves; structured cuffs with subtle lace trim; fully opaque, modest, vintage-inspired design with consistent shape and coverage from all angles'
}
,
      {
        name: 'Puff Sleeve Blouse',
        image: './../../assets/styles/women/Blouses/Puff-Sleeve.jpg',
        defaultColor: 'cream beige',
        prompt:
          '{color} blouse with puffed shoulders, fitted waist, and long tailored sleeves; mid-weight fabric with soft matte surface; symmetrical volume around arms and torso across all views'
      },
      {
        name: 'Striped Office Shirt',
        image: './../../assets/styles/women/Blouses/Striped-Office.jpg',
        defaultColor: 'blue and white stripes',
        prompt:
          '{color} office shirt with classic collar, long sleeves, and vertical stripe pattern; button-down front with structured fit; pattern alignment and form remain consistent from all angles'
      },
      {
        name: 'Denim Shirt',
        image: './../../assets/styles/women/Blouses/Denim.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} denim shirt with button-down front and chest pockets; sturdy cotton texture with visible seams; consistent structure and proportions across front, side, and back views'
      },
     {
  name: 'Bow Tie Blouse',
  image: './../../assets/styles/women/Blouses/Bow-Tie.jpg',
  defaultColor: 'ivory silk',
  prompt:
    '{color} bow tie blouse with soft neckline bow, long sleeves, and buttoned cuffs; smooth silk-like fabric with light natural drape; maintain realistic symmetry and natural bow position across views'
}
,
      {
        name: 'Peplum Blouse',
        image: './../../assets/styles/women/Blouses/Peplum.jpg',
        defaultColor: 'pastel blue',
        prompt:
          '{color} peplum blouse with fitted bodice and flared waist ruffle; mid-length sleeves and clean neckline; structured hem and waistline appearing uniform from every side'
      }
    ]
  }
];



export const WOMEN_TSHIRTS = [
  {
    title: 'T-Shirts & Tops',
    items: [
      {
        name: 'Basic Cotton T-Shirt',
        image: './../../assets/styles/women/T-Shirts/Basic-Cotton.jpg',
        defaultColor: 'light gray cotton',
        prompt:
          '{color} short-sleeve crew-neck T-shirt with relaxed straight fit; plain cotton fabric with smooth even surface and uniform tone; neckline, sleeves, and hem stay consistent and realistic in any viewing context'
      },
      {
        name: 'Oversized T-Shirt',
        image: './../../assets/styles/women/T-Shirts/Oversized.jpg',
        defaultColor: 'beige cotton',
        prompt:
         '{color} oversized crew-neck T-shirt with short sleeves and hip-length straight hem; plain cotton jersey fabric with uniform surface and relaxed structure; overall width and sleeve shape remain stable and realistic across all views'

      },
      {
        name: 'V-Neck Tee',
        image: './../../assets/styles/women/T-Shirts/V-Neck.jpg',
        defaultColor: 'pastel blue cotton',
        prompt:
          '{color} short-sleeve V-neck T-shirt with natural neckline and softly contoured fit; stretch cotton knit with smooth even surface; neckline and proportions stay visually balanced and realistic in all generation contexts'

      },
      {
        name: 'Round Neck T-Shirt',
        image: './../../assets/styles/women/T-Shirts/Round-Neck.jpg',
        defaultColor: 'light gray cotton',
        prompt:
          '{color} round-neck short-sleeve T-shirt with regular straight fit; lightweight cotton with uniform tone and flat surface; neckline and shoulder alignment stay consistent and balanced in single or multi-view generation'
      },
      {
        name: 'Graphic Print Tee',
        image: './../../assets/styles/women/T-Shirts/Graphic-Print.jpg',
        defaultColor: 'white cotton',
        prompt:
          '{color} crew-neck T-shirt with simple centered chest graphic, short sleeves, and straight hem; plain cotton fabric with uniform tone and smooth texture; the graphic and shirt proportions stay natural and consistent with realistic clothing anatomy'
      },
      {
        name: 'Ribbed Tank Top',
        image: './../../assets/styles/women/T-Shirts/Ribbed-Tank.jpg',
        defaultColor: 'nude beige ribbed fabric',
        prompt:
          '{color} sleeveless ribbed tank top with scoop neckline and fitted silhouette; fine rib knit with evenly spaced lines and smooth finish; neckline and body shape remain proportional and coherent across views'
      },
{
  name: 'Off-Shoulder Top',
  image: './../../assets/styles/women/T-Shirts/Off-Shoulder.jpg',
  defaultColor: 'lavender jersey',
  prompt:
    '{color} off-shoulder jersey top with a wide stable neckline placed on the upper shoulders and full chest coverage; long sleeves with clean fitted lines; neckline and sleeve alignment remain realistic and consistent with natural clothing anatomy'
}

,
      {
        name: 'Crop Tee',
        image: './../../assets/styles/women/T-Shirts/Crop.jpg',
        defaultColor: 'beige cotton',
        prompt:
          '{color} cropped T-shirt with short sleeves, high straight hem, and minimal design; cotton fabric with even surface and consistent structure; proportions and hem placement remain coherent and realistic in all generation modes'
      },
      {
        name: 'Long Sleeve Top',
        image: './../../assets/styles/women/T-Shirts/Long-Sleeve.jpg',
        defaultColor: 'striped cream and brown jersey',
        prompt:
          '{color} long-sleeve crew-neck top with horizontal stripes and gentle fitted cut; jersey knit with evenly aligned stripes and uniform fabric density; stripe alignment and proportions remain stable and natural in all results'
      },
      {
        name: 'Knotted Front T-Shirt',
        image: './../../assets/styles/women/T-Shirts/Knotted-Front.jpg',
        defaultColor: 'light beige cotton',
        prompt:
          '{color} short-sleeve T-shirt with small fixed front knot at the waist and round neckline; plain cotton fabric with balanced texture and even tone; knot placement and overall shape remain realistic and consistent in all cases'
      }
    ]
  }
];







export const WOMEN_CROPS = [
  {
    title: 'Crop Tops',
    items: [
      {
        name: 'Basic Cotton Crop Top',
        image: './../../assets/styles/women/Crop-Tops/Basic-Cotton.jpg',
        defaultColor: 'light gray cotton',
        prompt:
          '{color} short fitted crop top ending just above the waist with crew neckline and short sleeves; plain cotton jersey fabric with smooth even surface and stable hemline; neckline and waist edges appear natural and consistent in all contexts'
      },
      {
        name: 'Wrap Front Crop Top',
        image: './../../assets/styles/women/Crop-Tops/Wrap-Front.jpg',
        defaultColor: 'terracotta stretch jersey',
        prompt:
          '{color} wrap-front crop top with long sleeves and tie closure above the waist; soft stretch jersey fabric with smooth matte texture; wrap alignment and sleeve fit remain consistent and realistic across all outputs'
      },
      {
        name: 'Lace Trim Crop Top',
        image: './../../assets/styles/women/Crop-Tops/Lace-Trim.jpg',
        defaultColor: 'cream lace and mesh',
        prompt:
          '{color} lace-trim crop top with delicate floral lace overlay, lined interior, and scalloped hem; semi-sheer texture rendered modestly with smooth transitions; neckline and hem appear balanced and realistic in all outputs'
      },





     {
  name: 'Ribbed Knit Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Ribbed-Knit.jpg',
  defaultColor: 'lavender ribbed fabric',
  prompt:
    '{color} ribbed knit crop top designed with short sleeves and round neckline; soft elastic rib pattern forming a natural upper fit without altering body shape; fabric surface remains uniform and proportional in all generated results'
},
      {
  name: 'Halter Neck Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Halter-Neck.jpg',
  defaultColor: 'white stretch fabric',
  prompt:
    '{color} halter-style crop top with slim shoulder coverage and straight neckline; stretch fabric forms a stable smooth fit around the torso; neckline, straps, and silhouette stay natural and realistic under all output conditions'
},
{
  name: 'Sleeveless Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Sleeveless.jpg',
  defaultColor: 'light gray cotton blend',  
  prompt:
    '{color} sleeveless fitted crop top with balanced neckline and regular arm openings; cotton-blend fabric with fine knit texture that conforms smoothly to upper body; edges and overall fit appear realistic and stable in all views'
},
      {
  name: 'Graphic Crop Tee',
  image: './../../assets/styles/women/Crop-Tops/Graphic.jpg',
  defaultColor: 'black cotton',
  prompt:
    '{color} cropped graphic tee with short sleeves and crew neckline; small centered front print integrated naturally into the fabric; cotton jersey texture and proportions remain consistent and realistic while allowing tonal harmony with the outfit'
},
     
{
  name: 'Denim Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Denim.jpg',
  defaultColor: 'faded blue denim',
  prompt:
    '{color} short top inspired by denim styling with short sleeves, round neckline, clean hem, and light topstitch accents; soft cotton-blend jersey with gentle structure; seams and overall shape remain stable and realistic in all results'
}
,
{
  name: 'Off-Shoulder Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Off-Shoulder.jpg',
  defaultColor: 'ivory cotton blend',
  prompt:
    '{color} short top inspired by an off-shoulder silhouette, with a wide relaxed neckline, short puff sleeves with elastic cuffs, and a gently gathered waist; lightweight cotton-blend with even texture; neckline and sleeve positions remain natural and consistent with maintained coverage'
}
,
 {
  name: 'Sequin Party Crop Top',
  image: './../../assets/styles/women/Crop-Tops/Sequin-Party.jpg',
  defaultColor: 'silver sequin fabric',
  prompt:
    '{color} short top with round neckline and neat fitted shape, finished with micro-sequin surface over a soft base; reflection kept controlled and even; proportions and structure remain realistic across all outputs'
}

    ]
  }
];




export const WOMEN_SWEATERS = [
  {
    title: 'Sweaters & Cardigans',
    items: [


{
  name: 'Cable Knit Sweater',
  image: './../../assets/styles/women/Sweaters/Cable-Knit.jpg',
  defaultColor: 'ivory wool',
  prompt:
    '{color} knit sweater with subtle braided texture and balanced cable detailing, crew neckline, and ribbed cuffs and hem; medium-weight soft yarn with even surface and realistic stitch depth; overall shape remains stable and natural in all results'
},
      {
        name: 'Turtleneck Sweater',
        image: './../../assets/styles/women/Sweaters/Turtleneck.jpg',
        defaultColor: 'beige wool blend',
        prompt:
          '{color} turtleneck sweater with folded high neck, long sleeves, and ribbed knit texture; smooth surface and comfortable winter design'
      },
      {
        name: 'Cropped Sweater',
        image: './../../assets/styles/women/Sweaters/Cropped.jpg',
        defaultColor: 'light blue wool blend',
        prompt:
          '{color} short cropped sweater with crew neck and wide ribbed hem; soft knit texture with slightly loose silhouette and cozy feel'
      },

     {
  name: 'Button-Up Cardigan',
  image: './../../assets/styles/women/Sweaters/Button-Up.jpg',
  defaultColor: 'dusty rose wool blend',
  prompt:
    '{color} wool-blend cardigan with a fully closed front and evenly spaced buttons; crew neckline, long sleeves, and ribbed cuffs and hem; medium-gauge knit with smooth soft texture; modest opaque fabric and stable shape consistent from all viewing angles'
}
,
      {
        name: 'V-Neck Sweater',
        image: './../../assets/styles/women/Sweaters/V-Neck.jpg',
        defaultColor: 'light gray knit',
        prompt:
          '{color} V-neck sweater with long sleeves and ribbed edges; simple design in fine knit fabric with smooth consistent texture'
      },
      {
        name: 'Striped Knit Sweater',
        image: './../../assets/styles/women/Sweaters/Striped-Knit.jpg',
        defaultColor: 'multicolor wool blend',
        prompt:
          '{color} striped knit sweater with horizontal color bands, crew neckline, and ribbed cuffs and hem; soft wool fabric with visible knit texture'
      },
{
  name: 'Wool Blend Sweater',
  image: './../../assets/styles/women/Sweaters/Wool-Blend.jpg',
  defaultColor: 'mottled brown wool blend',
  prompt:
    '{color} fine knit sweater made from blended yarn with subtle heather effect, crew neckline, and ribbed edges; medium-weight soft knit maintaining balanced texture and proportional shape in all results'
},
      {
        name: 'Open Front Cardigan',
        image: './../../assets/styles/women/Sweaters/Open-Front.jpg',
        defaultColor: 'camel wool knit',
        prompt:
          '{color} open front cardigan with long sleeves and relaxed drape; smooth knit fabric with clean hems and minimal detailing, ideal for layering'
      }
    ]
  }
];



// 🧍‍♀️ WOMEN_JUMPSUITS
export const WOMEN_JUMPSUITS = [
  {
    title: 'Jumpsuits & Rompers',
    items: [
      {
  name: 'Casual Jumpsuit',
  image: './../../assets/styles/women/Jumpsuits/Casual.jpg',
  defaultColor: 'ivory linen blend',
  prompt:
    '{color} short-sleeve jumpsuit with button front closure, adjustable fabric tie at middle, and side pockets; light linen blend material with even matte finish and plain weave texture'
}
,
      {
        name: 'Formal Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Formal.jpg',
        defaultColor: 'navy blue crepe fabric',
        prompt:
          '{color} long-sleeve formal jumpsuit with belted waist and pleated front; smooth crepe material with structured drape and clean stitching'
      },
      {
        name: 'Denim Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Denim.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} denim jumpsuit with long sleeves, button front, patch pockets, and belt; textured denim fabric with visible seams and washed finish'
      },
      {
        name: 'Wide-Leg Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Wide-Leg.jpg',
        defaultColor: 'charcoal gray fabric',
        prompt:
          '{color} sleeveless wide-leg jumpsuit with wrapped front and elastic waist; smooth woven fabric with gentle drape and matte surface'
      },
      {
        name: 'Short Romper',
        image: './../../assets/styles/women/Jumpsuits/Short.jpg',
        defaultColor: 'yellow striped cotton',
        prompt:
          '{color} short romper with half sleeves, front buttons, and adjustable drawstring waist; soft cotton fabric with thin vertical stripes'
      },
      {
        name: 'Sleeveless Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Sleeveless.jpg',
        defaultColor: 'dark gray stretch fabric',
        prompt:
          '{color} sleeveless jumpsuit with wrap-style front and wide legs; lightweight stretch material with smooth finish and relaxed drape'
      },
      {
        name: 'Printed Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Printed.jpg',
        defaultColor: 'multicolor floral fabric',
        prompt:
          '{color} floral printed jumpsuit with halter neck and wide cropped legs; vibrant tropical pattern on soft lightweight fabric'
      },
      {
        name: 'Utility Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Utility.jpg',
        defaultColor: 'tan cotton twill',
        prompt:
          '{color} utility jumpsuit with long sleeves, front zipper, chest pockets, and belt; durable cotton twill fabric with structured feel'
      },
      {
        name: 'Off-Shoulder Jumpsuit',
        image: './../../assets/styles/women/Jumpsuits/Off-Shoulder.jpg',
        defaultColor: 'mint green rayon blend',
        prompt:
          '{color} jumpsuit with wide neckline positioned below the shoulders, short flutter sleeves, and drawstring waist; smooth rayon fabric with soft flow'
      },
      {
  name: 'Belted Jumpsuit',
  image: './../../assets/styles/women/Jumpsuits/Belted.jpg',
  defaultColor: 'olive green crepe fabric',
  prompt:
    '{color} long-sleeve jumpsuit with attached belt and straight wide legs; crepe fabric with matte surface, smooth drape, and clean stitched lines'
}

    ]
  }
];



// 👖 WOMEN_PANTS
export const WOMEN_PANTS = [
  {
    title: 'Pants & Trousers',
    items: [
      {
  name: 'Wide-Leg Pants',
  image: './../../assets/styles/women/Pants/Wide-Leg.jpg',
  defaultColor: 'ivory linen blend',
  prompt:
    '{color} wide-leg trousers with relaxed straight cut and flat waistband; lightweight linen blend fabric with plain weave and soft matte texture'
}
,
      {
        name: 'High-Waisted Pants',
        image: './../../assets/styles/women/Pants/High-Waisted.jpg',
        defaultColor: 'white crepe fabric',
        prompt:
          '{color} high-waisted pants with pressed front seams and straight legs; crepe fabric with even matte surface and fine woven texture'
      },
      {
        name: 'Culottes',
        image: './../../assets/styles/women/Pants/Culottes.jpg',
        defaultColor: 'light blue cotton blend',
        prompt:
          '{color} culotte-style pants with elastic waistband and wide cropped legs; soft cotton blend fabric with lightweight drape and subtle weave'
      },
      {
        name: 'Straight Pants',
        image: './../../assets/styles/women/Pants/Straight.jpg',
        defaultColor: 'gray twill fabric',
        prompt:
          '{color} straight-leg pants with belt loops and side pockets; twill weave fabric with smooth matte texture and crisp seams'
      },
      {
        name: 'Flared Pants',
        image: './../../assets/styles/women/Pants/Flared.jpg',
        defaultColor: 'rust brown cotton blend',
        prompt:
          '{color} flared pants with mid-rise waist and stitched front seams; cotton blend fabric with uniform tone and light structure'
      },
      {
        name: 'Pleated Trousers',
        image: './../../assets/styles/women/Pants/Pleated.jpg',
        defaultColor: 'medium grey woven fabric',
        prompt:
          '{color} trousers with soft front pleats and straight legs; smooth woven fabric with matte finish and clean vertical creases'
      },
      {
        name: 'Chino Pants',
        image: './../../assets/styles/women/Pants/Chino.jpg',
        defaultColor: 'beige cotton twill',
        prompt:
          '{color} chino pants with slanted side pockets and cuffed hems; cotton twill fabric with structured weave and light sheen'
      },
      {
        name: 'Paperbag Pants',
        image: './../../assets/styles/women/Pants/Paperbag.jpg',
        defaultColor: 'olive green polyester blend',
        prompt:
          '{color} paperbag-waist pants with fabric belt and gathered top edge; soft polyester blend fabric with smooth surface and light drape'
      },
      {
        name: 'Cropped Pants',
        image: './../../assets/styles/women/Pants/Cropped.jpg',
        defaultColor: 'light pink crepe fabric',
        prompt:
          '{color} cropped pants with clean front seam and pressed leg line; crepe material with matte finish and balanced drape'
      },
      {
        name: 'Tailored Trousers',
        image: './../../assets/styles/women/Pants/Tailored.jpg',
        defaultColor: 'navy blue suiting fabric',
        prompt:
          '{color} tailored trousers with precise seams and structured waistband; suiting fabric with smooth finish and light sheen'
      }
    ]
  }
];



// 👗 WOMEN_SKIRTS
export const WOMEN_SKIRTS: WomenTitleCategory[] = [
  {
    title: 'Skirts',
    items: [
      {
        name: 'Mini Skirt',
        image: './../../assets/styles/women/Skirts/Mini.jpg',
        defaultColor: 'light blue denim',
        prompt:
          '{color} denim mini skirt with short straight cut and front button design; solid opaque denim texture with clear seam lines; worn as single-piece skirt with no pants or trousers underneath; proportions and shape consistent in all views'
      },
      {
        name: 'Midi Skirt',
        image: './../../assets/styles/women/Skirts/Midi.jpg',
        defaultColor: 'sage green satin',
        prompt:
          '{color} midi-length satin skirt reaching mid-calf, gentle A-line shape with smooth drape; soft satin surface with modest low sheen; single-piece skirt without pants, consistent fabric thickness and symmetry from all angles'
      },
      {
        name: 'Maxi Skirt',
        image: './../../assets/styles/women/Skirts/Maxi.jpg',
        defaultColor: 'lavender chiffon',
        prompt:
          '{color} long full-length maxi skirt with soft volume and layered opaque chiffon fabric; matte surface with natural fall; no pants underneath, consistent flow and coverage from front, side, and back views'
      },
      {
  name: 'Pleated Skirt',
  image: './../../assets/styles/women/Skirts/Pleated.jpg',
  defaultColor: 'pale yellow chiffon',
  prompt:
    '{color} mid-length pleated skirt replacing any existing pants or jeans; fine vertical pleats with fitted waistband; opaque chiffon fabric with smooth matte finish; uniform folds and stable modest silhouette from all viewing angles'
},
      {
  name: 'A-Line Skirt',
  image: './../../assets/styles/women/Skirts/A-Line.jpg',
  defaultColor: 'charcoal gray wool blend',
  prompt:
    '{color} A-line skirt replacing any pants or trousers, fitted at the waist and gently flared to knee-length; medium-weight wool-blend fabric with matte smooth texture; opaque structure with consistent clean shape from every side'
},
      {
        name: 'Pencil Skirt',
        image: './../../assets/styles/women/Skirts/Pencil.jpg',
        defaultColor: 'navy crepe',
        prompt:
          '{color} knee-length pencil skirt with straight fitted cut and small back vent; opaque crepe fabric with clean matte surface; formal and modest design worn as single-piece skirt without trousers; structure stable from all sides'
      },
      {
        name: 'Wrap Skirt',
        image: './../../assets/styles/women/Skirts/Wrap.jpg',
        defaultColor: 'light orange cotton blend',
        prompt:
          '{color} wrap skirt with left-side overlap and fixed tie; medium-weight cotton-blend fabric with matte smooth finish; secure closure with opaque modest texture, consistent design and coverage from all angles'
      },


      {
        name: 'Leather Skirt',
        image: './../../assets/styles/women/Skirts/Leather.jpg',
        defaultColor: 'black faux leather',
        prompt:
          '{color} flared knee-length skirt made of smooth faux leather; soft sheen and firm structure; fully opaque material with stable panel seams; worn as single-piece skirt, form and hem consistent from all angles'
      },
      {
  name: 'Tulle Skirt',
  image: './../../assets/styles/women/Skirts/Tulle.jpg',
  defaultColor: 'ivory tulle',
  prompt:
    '{color} midi-length tulle skirt that completely replaces any previous lower clothing; soft layered tulle over an opaque inner lining, creating gentle volume; no transparency, modest continuous coverage; silhouette and hem uniform and stable from every viewing angle'
}
    ]
  }
];



// 🩳 WOMEN_SHORTS
export const WOMEN_SHORTS = [
  {
    title: 'Shorts',
    items: [
      {
  name: 'Denim Shorts',
  image: './../../assets/styles/women/Shorts/Denim.jpg',
  defaultColor: 'medium blue denim',
  prompt:
    '{color} denim shorts with short casual length clearly above the knee; classic five-pocket layout with belt loops and neat rolled hem; medium-weight cotton denim with gentle faded wash and visible stitching; clear shorts silhouette with consistent shape from front, side, and back views'
},
      {
        name: 'High-Waisted Shorts',
        image: './../../assets/styles/women/Shorts/High-Waisted.jpg',
        defaultColor: 'light beige twill',
        prompt:
          '{color} high-waisted shorts with clean flat front and slant pockets; short upper-thigh length, smooth cotton twill with matte texture and crisp seams; balanced silhouette, consistent fit from every view'
      },
      {
        name: 'Tailored Shorts',
        image: './../../assets/styles/women/Shorts/Tailored.jpg',
        defaultColor: 'black crepe',
        prompt:
          '{color} tailored shorts with neat front pleats, short length ending above mid-thigh; structured design with zipper fly and pressed creases; opaque crepe fabric with smooth matte finish and precise edges'
      },
      {
        name: 'Bermuda Shorts',
        image: './../../assets/styles/women/Shorts/Bermuda.jpg',
        defaultColor: 'sky blue cotton',
        prompt:
          '{color} casual cotton shorts with straight legs and length just above mid-thigh; side pockets and belt loops; soft woven cotton fabric with subtle texture, clean seams, and uniform tone'
      },
      {
  name: 'Paperbag Shorts',
  image: './../../assets/styles/women/Shorts/Paperbag.jpg',
  defaultColor: 'ivory linen blend',
  prompt:
    '{color} paperbag-waist shorts with softly gathered waistband and fabric tie belt; relaxed short length clearly above the knee; lightweight opaque linen-blend with matte plain weave and smooth drape; clear shorts design with even proportions from all directions'
},
      {
        name: 'Pleated Shorts',
        image: './../../assets/styles/women/Shorts/Pleated.jpg',
        defaultColor: 'mint woven fabric',
        prompt:
          '{color} pleated-front shorts with smooth waistband and short upper-thigh length; lightweight woven fabric with matte finish and pressed folds; consistent structure and length from front, side, and back'
      },
      {
        name: 'Linen Shorts',
        image: './../../assets/styles/women/Shorts/Linen.jpg',
        defaultColor: 'sand linen blend',
        prompt:
          '{color} linen shorts with elastic drawstring waist and side pockets; short relaxed fit ending at upper thigh; breathable opaque linen-blend with soft matte surface and mild wrinkles'
      },
      {
        name: 'Cargo Shorts',
        image: './../../assets/styles/women/Shorts/Cargo.jpg',
        defaultColor: 'olive green',
        prompt:
          '{color} utility-style cotton shorts with flap side pockets and belt loops; above mid-thigh length, durable canvas weave with reinforced seams and clean hem; sturdy balanced silhouette'
      },
      {
  name: 'Leather Shorts',
  image: './../../assets/styles/women/Shorts/Leather.jpg',
  defaultColor: 'matte black faux leather',
  prompt:
    '{color} faux-leather shorts with clean front, subtle panel seams and side pockets; short length clearly above the knee with neat straight hem; designed as structured shorts, not long trousers, with a stable smooth silhouette consistent from every view'
},
      {
        name: 'Sport Shorts',
        image: './../../assets/styles/women/Shorts/Sport.jpg',
        defaultColor: 'heather gray with black waistband',
        prompt:
          '{color} sporty shorts with elastic black waistband and short curved hem; lightweight stretch-knit fabric with breathable texture; upper-thigh length, consistent fit and coverage in all views'
      }
    ]
  }
];




// 🧥 WOMEN_JACKETS
export const WOMEN_JACKETS: WomenTitleCategory[] = [
  {
    title: 'Jackets & Coats',
    items: [
      {
        name: 'Leather Jacket',
        image: './../../assets/styles/women/Jackets/Leather.jpg',
        defaultColor: 'black faux leather',
        prompt:
          '{color} biker-style leather jacket with asymmetric front zip, side pockets, and structured fit; smooth faux leather with subtle sheen'
      },
      {
        name: 'Denim Jacket',
        image: './../../assets/styles/women/Jackets/Denim.jpg',
        defaultColor: 'medium blue denim',
        prompt:
          '{color} denim jacket with front buttons, chest flap pockets, and adjustable cuffs; cotton denim fabric with washed texture and visible stitching'
      },

      {
        name: 'Puffer Jacket',
        image: './../../assets/styles/women/Jackets/Puffer.jpg',
        defaultColor: 'navy polyester',
        prompt:
          '{color} quilted puffer jacket with zip front, stand collar, and horizontal padding; smooth polyester fabric with matte finish'
      },
      {
        name: 'Trench Coat',
        image: './../../assets/styles/women/Jackets/Trench.jpg',
        defaultColor: 'beige cotton blend',
        prompt:
          '{color} double-breasted trench coat with waist belt and storm flaps; cotton-blend twill fabric with matte texture and classic structure'
      },
      {
        name: 'Wool Coat',
        image: './../../assets/styles/women/Jackets/Wool.jpg',
        defaultColor: 'charcoal gray wool blend',
        prompt:
          '{color} long wool coat with notch lapel and two-button closure; wool-blend fabric with smooth matte texture and tailored fit'
      },
{
  name: 'Raincoat',
  image: './../../assets/styles/women/Jackets/Raincoat.jpg',
  defaultColor: 'bright magenta waterproof fabric',
  prompt:
    '{color} hooded raincoat with long sleeves, full front zipper and covered placket, plus side pockets; straight relaxed cut falling slightly above the knee; opaque water-resistant fabric with soft uniform sheen; clean simple silhouette with consistent proportions from front, side, and back views'
}
,      {
        name: 'Peacoat',
        image: './../../assets/styles/women/Jackets/Peacoat.jpg',
        defaultColor: 'navy wool blend',
        prompt:
          '{color} double-breasted peacoat with wide lapels and side pockets; wool-blend fabric with structured shape and soft matte texture'
      },
      {
        name: 'Faux Fur Coat',
        image: './../../assets/styles/women/Jackets/Faux-Fur.jpg',
        defaultColor: 'ivory faux fur',
        prompt:
          '{color} faux fur coat with wide collar and front pockets; soft plush fabric with fluffy texture and matte finish'
      },
      {
        name: 'Quilted Jacket',
        image: './../../assets/styles/women/Jackets/Quilted.jpg',
        defaultColor: 'forest green polyester',
        prompt:
          '{color} quilted jacket with snap buttons and diamond stitching; lightweight polyester fabric with matte surface and clean lines'
      },
    ],
  },
];



// 🧥 WOMEN_BLAZERS
export const WOMEN_BLAZERS: WomenTitleCategory[] = [
  {
    title: 'Blazers',
    items: [
      {
        name: 'Classic Blazer',
        image: './../../assets/styles/women/Blazers/Classic.jpg',
        defaultColor: 'camel beige suiting fabric',
        prompt:
          '{color} single-breasted blazer with two buttons and notch lapel; tailored fit with flap pockets and smooth woven texture'
      },
      {
  name: 'Oversized Blazer',
  image: './../../assets/styles/women/Blazers/Oversized.jpg',
  defaultColor: 'olive green woven fabric',
  prompt:
    '{color} oversized blazer with long straight cut and loose fit; single-button front with side pockets and matte woven texture'
}
,
      {
        name: 'Double-Breasted Blazer',
        image: './../../assets/styles/women/Blazers/Double-Breasted.jpg',
        defaultColor: 'navy blue suiting fabric',
        prompt:
          '{color} double-breasted blazer with peak lapel and four-button front; structured fit with flap pockets and smooth woven surface'
      },
      {
        name: 'Fitted Blazer',
        image: './../../assets/styles/women/Blazers/Fitted.jpg',
        defaultColor: 'charcoal gray suiting fabric',
        prompt:
          '{color} fitted blazer with single button closure and slim waist; smooth woven suiting fabric with clean matte texture'
      },
      {
        name: 'Plaid Blazer',
        image: './../../assets/styles/women/Blazers/Plaid.jpg',
        defaultColor: 'cream and navy plaid wool blend',
        prompt:
          '{color} plaid blazer with two-button front and structured shoulders; wool-blend fabric with check pattern and soft matte finish'
      },
      {
        name: 'Linen Blazer',
        image: './../../assets/styles/women/Blazers/Linen.jpg',
        defaultColor: 'light pink linen blend',
        prompt:
          '{color} linen blazer with one-button closure and patch pockets; lightweight linen-blend fabric with natural weave and soft texture'
      },
      {
        name: 'Velvet Blazer',
        image: './../../assets/styles/women/Blazers/Velvet.jpg',
        defaultColor: 'emerald green velvet',
        prompt:
          '{color} single-breasted blazer with satin lapel and front pockets; soft velvet fabric with smooth pile and subtle luster'
      },
      {
  name: 'Cropped Blazer',
  image: './../../assets/styles/women/Blazers/Cropped.jpg',
  defaultColor: 'black suiting fabric',
  prompt:
    '{color} cropped blazer with single button closure and short length; smooth woven suiting fabric with clean matte texture'
}
,

      {
        name: 'Tuxedo Blazer',
        image: './../../assets/styles/women/Blazers/Tuxedo.jpg',
        defaultColor: 'black satin-trim suiting fabric',
        prompt:
          '{color} tuxedo blazer with satin lapel and single button closure; smooth suiting fabric with matte body and subtle satin details'
      }
    ]
  }
];


// 🧥 WOMEN_HOODIES
export const WOMEN_HOODIES: WomenTitleCategory[] = [
  {
    title: 'Hoodies & Sweatshirts',
    items: [
      {
        name: 'Pullover Hoodie',
        image: './../../assets/styles/women/Hoodies/Pullover.jpg',
        defaultColor: 'taupe cotton fleece',
        prompt:
          '{color} pullover hoodie with front kangaroo pocket and drawstring hood; soft cotton-blend fleece fabric with smooth matte finish'
      },
      {
        name: 'Zip-Up Hoodie',
        image: './../../assets/styles/women/Hoodies/Zip-Up.jpg',
        defaultColor: 'dusty blue cotton blend',
        prompt:
          '{color} zip-up hoodie with front zipper and pouch pockets; medium-weight cotton-blend fabric with soft inner texture'
      },
      {
        name: 'Oversized Hoodie',
        image: './../../assets/styles/women/Hoodies/Oversized.jpg',
        defaultColor: 'light gray cotton fleece',
        prompt:
          '{color} oversized hoodie with loose cut and drawstring hood; brushed cotton fleece fabric with soft matte surface'
      },
      {
        name: 'Cropped Hoodie',
        image: './../../assets/styles/women/Hoodies/Cropped.jpg',
        defaultColor: 'ash gray cotton fleece',
        prompt:
          '{color} cropped hoodie with drawstring hood and ribbed cuffs; lightweight cotton-blend fabric with smooth knit texture'
      },
      {
        name: 'Graphic Hoodie',
        image: './../../assets/styles/women/Hoodies/Graphic.jpg',
        defaultColor: 'charcoal gray printed fleece',
        prompt:
          '{color} graphic hoodie with printed front design and drawstring hood; cotton-blend fleece fabric with soft brushed interior'
      },
      {
        name: 'Sweatshirt',
        image: './../../assets/styles/women/Hoodies/Sweatshirt.jpg',
        defaultColor: 'navy blue cotton blend',
        prompt:
          '{color} crewneck sweatshirt with ribbed cuffs and hem; soft cotton-blend fabric with smooth flat-knit texture'
      },
      {
        name: 'Fleece Hoodie',
        image: './../../assets/styles/women/Hoodies/Fleece.jpg',
        defaultColor: 'cream sherpa fleece',
        prompt:
          '{color} fleece hoodie with kangaroo pocket and drawstring hood; plush sherpa fleece fabric with warm textured surface'
      },
     {
  name: 'Tie-Dye Hoodie',
  image: './../../assets/styles/women/Hoodies/Tie-Dye.jpg',
  defaultColor: 'multicolor cotton blend',
  prompt:
    '{color} tie dye hoodie with drawstring hood and front kangaroo pocket; cotton-blend fleece with soft matte finish; abstract dye pattern with smooth color transitions, no logos or text'
}
,
      {
        name: 'Athletic Hoodie',
        image: './../../assets/styles/women/Hoodies/Athletic.jpg',
        defaultColor: 'black and gray performance fabric',
        prompt:
          '{color} athletic zip-up hoodie with fitted cut and side panels; stretch performance fabric with smooth matte texture and moisture-wicking finish'
      },
      {
        name: 'Knitted Hoodie',
        image: './../../assets/styles/women/Hoodies/Knitted.jpg',
        defaultColor: 'beige chunky knit yarn',
        prompt:
          '{color} knitted hoodie with drawstring hood and ribbed hem; thick cable-knit yarn fabric with soft textured feel'
      }
    ]
  }
];



// 🧶 WOMEN_CARDIGANS
export const WOMEN_CARDIGANS: WomenTitleCategory[] = [
  {
    title: 'Cardigans',
    items: [
      {
        name: 'Long Cardigan',
        image: './../../assets/styles/women/Cardigans/Long.jpg',
        defaultColor: 'light gray knit fabric',
        prompt:
          '{color} long cardigan with open front and extended length; lightweight knit fabric with soft drape and smooth texture'
      },
      {
        name: 'Cropped Cardigan',
        image: './../../assets/styles/women/Cardigans/Cropped.jpg',
        defaultColor: 'light gray cotton knit',
        prompt:
          '{color} cropped cardigan with button front and ribbed cuffs; soft cotton-knit fabric with smooth matte finish'
      },
      {
        name: 'Chunky Knit Cardigan',
        image: './../../assets/styles/women/Cardigans/Chunky-Knit.jpg',
        defaultColor: 'cream wool yarn',
        prompt:
          '{color} chunky knit cardigan with button front and thick texture; hand-knit wool fabric with raised woven pattern'
      },
      {
        name: 'Belted Cardigan',
        image: './../../assets/styles/women/Cardigans/Belted.jpg',
        defaultColor: 'olive green wool blend',
        prompt:
          '{color} belted cardigan with shawl collar and waist tie; medium-weight wool-blend knit with soft textured surface'
      },
      {
        name: 'Button-Up Cardigan',
        image: './../../assets/styles/women/Cardigans/Button-Up.jpg',
        defaultColor: 'mustard yellow wool blend',
        prompt:
          '{color} button-up cardigan with ribbed hem and cuffs; fine wool-blend knit fabric with smooth matte texture'
      },
      {
        name: 'Open Front Cardigan',
        image: './../../assets/styles/women/Cardigans/Open-Front.jpg',
        defaultColor: 'light gray mohair blend',
        prompt:
          '{color} open front cardigan with relaxed fit and ribbed edges; lightweight mohair-blend knit with fuzzy soft texture'
      },
      {
        name: 'Printed Cardigan',
        image: './../../assets/styles/women/Cardigans/Printed.jpg',
        defaultColor: 'multicolor cotton knit',
        prompt:
          '{color} printed cardigan with button front and ribbed trims; cotton-knit fabric featuring colorful floral pattern'
      },
      {
        name: 'Cable Knit Cardigan',
        image: './../../assets/styles/women/Cardigans/Cable-Knit.jpg',
        defaultColor: 'cream wool yarn',
        prompt:
          '{color} cable knit cardigan with button front and ribbed hem; thick wool yarn fabric with raised braided pattern'
      },
      {
        name: 'Wool Cardigan',
        image: './../../assets/styles/women/Cardigans/Wool.jpg',
        defaultColor: 'beige brushed wool',
        prompt:
          '{color} wool cardigan with open front and ribbed cuffs; soft brushed wool knit fabric with fine textured surface'
      },
      {
        name: 'Mohair Cardigan',
        image: './../../assets/styles/women/Cardigans/Mohair.jpg',
        defaultColor: 'light beige mohair blend',
        prompt:
          '{color} mohair cardigan with open front and ribbed edges; fluffy mohair-blend knit fabric with soft sheen and airy texture'
      }
    ]
  }
];



// 👜 WOMEN_BAGS
export const WOMEN_BAGS: WomenTitleCategory[] = [
  {
    title: 'Bags & Purses',
    items: [
   {
  name: 'Tote Bag',
  image: './../../assets/styles/women/Bags/Tote.jpg',
  defaultColor: 'beige smooth leather',
  prompt:
    '{color} structured tote bag appearing naturally beside the body; medium rectangular form with two handles and subtle top opening; smooth matte leather with fine stitching; accessory is visible and proportionate while all clothing stays unchanged'
}
,
      {
        name: 'Shoulder Bag',
        image: './../../assets/styles/women/Bags/Shoulder.jpg',
        defaultColor: 'ivory leather with tan strap',
        prompt:
          '{color} compact shoulder bag with single short strap resting comfortably under the arm; smooth fine-grain leather with small flap closure and minimal hardware; bag proportions stable and natural relative to the outfit'
      },
      {
        name: 'Crossbody Bag',
        image: './../../assets/styles/women/Bags/Crossbody.jpg',
        defaultColor: 'chestnut pebbled leather',
        prompt:
          '{color} small crossbody bag worn across the torso with adjustable strap; rectangular soft body, pebbled leather texture, and subtle metallic details; natural position and scale consistent from all sides without altering clothing'
      },
      {
        name: 'Clutch',
        image: './../../assets/styles/women/Bags/Clutch.jpg',
        defaultColor: 'cobalt blue satin',
        prompt:
          '{color} rectangular clutch bag gently held in one hand; smooth satin surface with simple metallic frame; compact accessory adding contrast to the outfit while clothing remains unchanged'
      },
      {
        name: 'Satchel Bag',
        image: './../../assets/styles/women/Bags/Satchel.jpg',
        defaultColor: 'tan smooth leather',
        prompt:
          '{color} medium satchel bag with structured body and top handle; optional long strap resting naturally on shoulder; smooth leather texture with precise stitching and stable form in all angles'
      },
      
      {
        name: 'Bucket Bag',
        image: './../../assets/styles/women/Bags/Bucket.jpg',
        defaultColor: 'chocolate grained leather',
        prompt:
          '{color} bucket bag with drawstring closure and rounded base, carried on the shoulder or by hand; grained leather with soft structure; stable size and shape across all perspectives'
      },
      {
        name: 'Mini Bag',
        image: './../../assets/styles/women/Bags/Mini.jpg',
        defaultColor: 'mirror silver metallic',
        prompt:
          '{color} small metallic mini bag with slim chain strap worn diagonally or by hand; rigid compact body with subtle reflective surface; proportional accessory that complements the outfit without altering garments'
      },
      {
        name: 'Evening Bag',
        image: './../../assets/styles/women/Bags/Evening.jpg',
        defaultColor: 'gold sequin finish',
        prompt:
          '{color} elegant evening bag with fine chain strap and structured rectangular shape; decorative surface with subtle shimmer; worn gracefully by hand or over the shoulder while the outfit remains unchanged'
      },
      {
        name: 'Quilted Bag',
        image: './../../assets/styles/women/Bags/Quilted.jpg',
        defaultColor: 'black leather',
        prompt:
          '{color} quilted flap bag with diamond stitching and chain strap, medium size; soft leather texture with subtle metallic clasp; worn naturally on the shoulder with consistent position and scale in every view'
      }
    ]
  }
];




// 💍 WOMEN_JEWELRY
export const WOMEN_JEWELRY: WomenTitleCategory[] = [
  {
    title: 'Jewelry',
    items: [
      {
        name: 'Necklace',
        image: './../../assets/styles/women/Jewelry/Necklace.jpg',
        defaultColor: 'rose gold with pearl pendant',
        prompt:
          '{color} fine necklace accessory visible near the neck area with small drop pendant; subtle metallic sheen and simple balanced form; added jewelry element while all clothing and facial features stay unchanged'
      },
      {
        name: 'Bracelet',
        image: './../../assets/styles/women/Jewelry/Bracelet.jpg',
        defaultColor: 'rose gold chain',
        prompt:
          '{color} delicate bracelet accessory appearing near the wrist area with small charm accent; light reflective metal texture and thin chain; accessory added naturally without altering clothing or skin'
      },
      {
        name: 'Earrings',
        image: './../../assets/styles/women/Jewelry/Earrings.jpg',
        defaultColor: 'rose gold with pearl drop',
        prompt:
          '{color} small earring accessories visible near the ears with simple drop shape; polished metallic texture and minimal elegant design; jewelry addition only, keeping hair and outfit intact'
      },
      {
        name: 'Rings',
        image: './../../assets/styles/women/Jewelry/Rings.jpg',
        defaultColor: 'mixed metal tones with clear stones',
        prompt:
          'set of {color} ring accessories visible on the hands with slim metallic bands and subtle stone accents; reflective texture and consistent size; all other body parts and clothing unchanged'
      },
      {
        name: 'Anklet',
        image: './../../assets/styles/women/Jewelry/Anklet.jpg',
        defaultColor: 'rose gold with small heart charm',
        prompt:
          '{color} anklet accessory visible around the ankle area with fine chain and tiny charm; polished surface and minimal shape; accessory added without modifying skin tone or clothing'
      },
      {
        name: 'Brooch',
        image: './../../assets/styles/women/Jewelry/Brooch.jpg',
        defaultColor: 'rose gold with green stones',
        prompt:
          '{color} decorative brooch accessory appearing on the upper outfit area; metallic surface with small green stones and curved form; fixed accessory while outfit fabric and folds remain unchanged'
      },
      {
        name: 'Choker',
        image: './../../assets/styles/women/Jewelry/Choker.jpg',
        defaultColor: 'rose gold with single stone center',
        prompt:
          '{color} slim choker accessory appearing near the neck area with small central gem; polished metallic finish; accessory addition while preserving all clothing and textures'
      },
      {
        name: 'Pendant',
        image: './../../assets/styles/women/Jewelry/Pendant.jpg',
        defaultColor: 'rose gold with pearl charm',
        prompt:
          '{color} pendant necklace accessory visible close to the upper body; delicate chain and small charm accent; light reflection consistent, clothing and posture remain unchanged'
      },
      {
        name: 'Cuff Bracelet',
        image: './../../assets/styles/women/Jewelry/Cuff.jpg',
        defaultColor: 'rose gold polished metal',
        prompt:
          '{color} cuff bracelet accessory seen near the wrist area with smooth curved metallic surface; simple reflective finish; added jewelry item only, clothing and hands unchanged'
      },
      {
        name: 'Hoop Earrings',
        image: './../../assets/styles/women/Jewelry/Hoop.jpg',
        defaultColor: 'yellow gold metal',
        prompt:
          'pair of {color} hoop earring accessories visible beside the face with circular polished form; balanced metallic tone and consistent scale; hair and clothing remain exactly the same'
      }
    ]
  }
];




// 🧣 WOMEN_SCARVES
export const WOMEN_SCARVES: WomenTitleCategory[] = [
  {
    title: 'Scarves',
    items: [
      {
        name: 'Silk Scarf',
        image: './../../assets/styles/women/Scarves/Silk.jpg',
        defaultColor: 'light gray silk fabric',
        prompt:
          '{color} rectangular silk scarf with smooth surface and soft drape; fine texture and lightweight feel'
      },
      {
        name: 'Wool Scarf',
        image: './../../assets/styles/women/Scarves/Wool.jpg',
         defaultColor: 'brown and beige mixed wool yarn',
        prompt:
          '{color} wool scarf with soft surface and short fringe edges; medium thickness and natural woven texture'
      },
      {
        name: 'Printed Scarf',
        image: './../../assets/styles/women/Scarves/Printed.jpg',
        defaultColor: 'multicolor lightweight fabric',
        prompt:
          '{color} printed scarf with smooth flat texture; rectangular shape with fine weave and soft drape'
      },
      {
        name: 'Knitted Scarf',
        image: './../../assets/styles/women/Scarves/Knitted.jpg',
        defaultColor: 'brown mixed yarn',
        prompt:
          '{color} knitted scarf with visible thick pattern; soft flexible surface and evenly woven structure'
      },
      {
        name: 'Cashmere Scarf',
        image: './../../assets/styles/women/Scarves/Cashmere.jpg',
        defaultColor: 'light gray cashmere fabric',
        prompt:
          '{color} cashmere scarf with fine soft surface and plain smooth texture; rectangular form with gentle folds'
      },
      {
        name: 'Infinity Scarf',
        image: './../../assets/styles/women/Scarves/Infinity.jpg',
        defaultColor: 'light gray knitted yarn',
        prompt:
          '{color} infinity scarf with looped circular shape; thick soft knit texture and uniform stitch pattern'
      },
      {
        name: 'Square Scarf',
        image: './../../assets/styles/women/Scarves/Square.jpg',
        defaultColor: 'white base with blue border pattern',
        prompt:
          '{color} square scarf with flat surface and folded edges; fine smooth fabric with neat finish'
      },
      {
        name: 'Pashmina Scarf',
        image: './../../assets/styles/women/Scarves/Pashmina.jpg',
        defaultColor: 'light pink woven fabric',
        prompt:
          '{color} pashmina scarf with soft flexible texture and light folds; fine weave and smooth matte surface'
      },
      {
        name: 'Fringe Scarf',
        image: './../../assets/styles/women/Scarves/Fringe.jpg',
        defaultColor: 'teal and mustard woven fabric',
        prompt:
          '{color} scarf with woven texture and short tassel edges; soft medium-weight fabric with straight pattern lines'
      },
      {
        name: 'Lightweight Scarf',
        image: './../../assets/styles/women/Scarves/Lightweight.jpg',
        defaultColor: 'sheer floral fabric',
        prompt:
          '{color} lightweight scarf with soft transparent texture; smooth fine weave and delicate thin material'
      }
    ]
  }
];


// 👒 WOMEN_HATS
export const WOMEN_HATS: WomenTitleCategory[] = [
  {
    title: 'Hats',
    items: [
      {
        name: 'Wide Brim Hat',
        image: './../../assets/styles/women/Hats/Wide-Brim.jpg',
        defaultColor: 'natural straw beige',
        prompt:
          '{color} wide-brim hat accessory appearing above the head with soft woven straw texture and thin band detail; visible as headwear addition while keeping all hair, face, and clothing unchanged'
      },
      {
        name: 'Bucket Hat',
        image: './../../assets/styles/women/Hats/Bucket.jpg',
        defaultColor: 'light beige cotton fabric',
        prompt:
          '{color} bucket-style hat accessory visible above the head with downward brim and soft cotton texture; subtle stitching detail; headwear added without modifying hairstyle or outfit'
      },
      {
        name: 'Fedora',
        image: './../../assets/styles/women/Hats/Fedora.jpg',
        defaultColor: 'deep green felt with brown band',
        prompt:
          '{color} fedora hat accessory with medium brim and narrow ribbon band; felt texture with soft shape; appears naturally on head area while face and clothes remain unchanged'
      },
      {
        name: 'Beret',
        image: './../../assets/styles/women/Hats/Beret.jpg',
        defaultColor: 'red wool fabric',
        prompt:
          '{color} beret hat accessory resting softly above the head; round flat shape made of even wool texture; added element without altering hair or clothing'
      },
{
  name: 'Baseball Cap',
  image: './../../assets/styles/women/Hats/Baseball.jpg',
  defaultColor: 'navy cotton fabric',
  prompt:
    '{color} baseball cap gently resting over the hair with curved brim and six-panel cotton structure; realistic fit following natural head shape; soft shadows and proper contact with hair; all clothing and facial features stay completely unchanged'
}
,
      {
        name: 'Beanie',
        image: './../../assets/styles/women/Hats/Beanie.jpg',
        defaultColor: 'light gray knitted yarn',
        prompt:
          '{color} knitted beanie head accessory with soft rounded top and folded edge; thick yarn pattern visible; added naturally on head while keeping hair and clothes intact'
      },
      {
        name: 'Panama Hat',
        image: './../../assets/styles/women/Hats/Panama.jpg',
        defaultColor: 'natural beige',
        prompt:
          '{color} panama hat accessory with flat crown, medium straight brim, and thin ribbon band; woven straw texture; visible on head area while hairstyle and outfit stay unchanged'
      },
      {
  name: 'Visor',
  image: './../../assets/styles/women/Hats/Visor.jpg',
  defaultColor: 'light gray synthetic fabric',
  prompt:
    '{color} sports visor naturally fitted around the upper head with open top and curved front brim; adjustable back strap detail; realistic soft fit over hairline while keeping face and hairstyle unchanged'
},
      {
        name: 'Cloche Hat',
        image: './../../assets/styles/women/Hats/Cloche.jpg',
        defaultColor: 'burgundy felt fabric',
        prompt:
          '{color} cloche-style head accessory with rounded crown and short brim; smooth felt texture and slim ribbon detail; accessory added without changing hair or outfit'
      },
      {
        name: 'Straw Hat',
        image: './../../assets/styles/women/Hats/Straw.jpg',
        defaultColor: 'natural straw beige with black ribbon',
        prompt:
          '{color} straw hat accessory with wide round brim and soft woven pattern; thin decorative ribbon visible; appears on head naturally while keeping all facial and clothing features the same'
      }
    ]
  }
];







// 👟 WOMEN_SNEAKERS
export const WOMEN_SNEAKERS: WomenTitleCategory[] = [
  {
    title: 'Sneakers',
    items: [
      {
  name: 'Classic Sneakers',
  image: './../../assets/styles/women/Sneakers/Classic.jpg',
  defaultColor: 'off-white canvas',
  prompt:
    '{color} classic low-top canvas sneakers with lace-up front, white rubber toe cap and flat sole; simple casual design that fits naturally on the feet; clean proportions and consistent shape from front, side, and three-quarter views'
},
      {
        name: 'Chunky Sneakers',
        image: './../../assets/styles/women/Sneakers/Chunky.jpg',
        defaultColor: 'white and gray mixed materials',
        prompt:
          '{color} chunky sneakers with thick multi-layer sole and lace-up front; mesh and synthetic panels; isolated studio lighting; no model'
      },
      {
        name: 'Slip-On Sneakers',
        image: './../../assets/styles/women/Sneakers/Slip-On.jpg',
        defaultColor: 'navy blue fabric',
        prompt:
          '{color} slip-on sneakers with smooth surface and elastic sides; white flat sole; neutral backdrop; no background elements'
      },
      {
        name: 'Platform Sneakers',
        image: './../../assets/styles/women/Sneakers/Platform.jpg',
        defaultColor: 'cream leather',
        prompt:
          '{color} platform sneakers with elevated rubber sole and lace-up closure; minimal stitching; neutral background; no shadows on model'
      },
      {
        name: 'High-Top Sneakers',
        image: './../../assets/styles/women/Sneakers/High-Top.jpg',
        defaultColor: 'black canvas with white sole',
        prompt:
          '{color} high-top sneakers with lace-up front and round rubber toe cap; flat sole; neutral studio background; no person'
      },
      {
  name: 'Low-Top Sneakers',
  image: './../../assets/styles/women/Sneakers/Low-Top.jpg',
  defaultColor: 'light green leather',
  prompt:
    '{color} smooth low-top sneakers with clean panels, slim sole and minimal detailing; modern lightweight look that aligns naturally with the foot; stable contours and sole thickness consistent in all viewing angles'
},
      {
        name: 'Running Sneakers',
        image: './../../assets/styles/women/Sneakers/Running.jpg',
        defaultColor: 'light blue mesh',
        prompt:
          '{color} running sneakers with breathable mesh upper and flexible sole; lightweight athletic design; product isolated on gray surface'
      },
      {
        name: 'Canvas Sneakers',
        image: './../../assets/styles/women/Sneakers/Canvas.jpg',
        defaultColor: 'ivory canvas with white sole',
        prompt:
          '{color} canvas sneakers with simple lace-up front and flat white rubber sole; even lighting; isolated on plain background'
      },
      {
        name: 'Leather Sneakers',
        image: './../../assets/styles/women/Sneakers/Leather.jpg',
        defaultColor: 'white leather',
        prompt:
          '{color} leather sneakers with clean lines and subtle stitching; minimal sole design; soft shadow; plain background'
      },
      {
  name: 'Designer Sneakers',
  image: './../../assets/styles/women/Sneakers/Designer.jpg',
  defaultColor: 'white with beige accents',
  prompt:
    '{color} modern designer-style sneakers with mixed material panels and subtle side motif; structured low-top shape with balanced sole height; clean, refined appearance with consistent details from every view, suitable to wear with various outfits'
}
    ]
  }
];



// 👢 WOMEN_BOOTS
export const WOMEN_BOOTS: WomenTitleCategory[] = [
  {
    title: 'Boots',
    items: [
      {
  name: 'Ankle Boots',
  image: './../../assets/styles/women/Boots/Ankle.jpg',
  defaultColor: 'tan leather',
  prompt:
    '{color} ankle boots with smooth leather texture, short shaft reaching just above the ankle, and low block heel; subtle side zipper detail; sturdy structured shape that fits naturally over the feet with consistent proportions from all views'
},
      {
        name: 'Chelsea Boots',
        image: './../../assets/styles/women/Boots/Chelsea.jpg',
        defaultColor: 'dark brown leather',
        prompt:
          '{color} chelsea boots with elastic side panels and pull tabs; smooth polished leather texture; even lighting; isolated on neutral background'
      },
      {
        name: 'Combat Boots',
        image: './../../assets/styles/women/Boots/Combat.jpg',
        defaultColor: 'black leather',
        prompt:
          '{color} combat boots with lace-up front, side zipper and rugged sole; matte leather texture; studio lighting; no model'
      },
     {
  name: 'Flat Boots',
  image: './../../assets/styles/women/Boots/Flat.jpg',
  defaultColor: 'medium brown',
  prompt:
    '{color} flat mid-calf boots made of smooth leather, low heel and minimal stitching; stable balanced design with soft matte finish; boots positioned naturally on the feet with consistent shape from front, side, and back'
},
      {
        name: 'Heeled Boots',
        image: './../../assets/styles/women/Boots/Heeled.jpg',
        defaultColor: 'black stretch fabric',
        prompt:
          '{color} heeled ankle boots with pointed toe and slim high heel; clean silhouette; isolated on white background; no extra objects'
      },
      {
        name: 'Knee-High Boots',
        image: './../../assets/styles/women/Boots/Knee-High.jpg',
        defaultColor: 'brown leather and gray suede',
        prompt:
          '{color} knee-high boots with low square heel; smooth texture and straight shaft; product photo on light background; no outfit or person'
      },
      {
        name: 'Over-the-Knee Boots',
        image: './../../assets/styles/women/Boots/Over-the-Knee.jpg',
        defaultColor: 'black suede',
        prompt:
          '{color} over-the-knee boots with block heel and long fitted shaft; soft texture; studio photo with neutral background; no human figure'
      },
      {
  name: 'Rain Boots',
  image: './../../assets/styles/women/Boots/Rain.jpg',
  defaultColor: 'black glossy rubber',
  prompt:
    '{color} waterproof rubber rain boots with short shaft and rounded toe; glossy surface with subtle highlights; sturdy weather-resistant look that sits naturally over the feet, maintaining consistent shape and reflections in all views'
},
{
  name: 'Suede Boots',
  image: './../../assets/styles/women/Boots/Suede.jpg',
  defaultColor: 'light tan',
  prompt:
    '{color} suede ankle boots with soft matte finish, short shaft and low heel; elastic side panels for easy fit; stable opaque structure that aligns naturally with the feet and remains consistent from every angle'
},
{
  name: 'Western Boots',
  image: './../../assets/styles/women/Boots/Western.jpg',
  defaultColor: 'warm brown',
  prompt:
    '{color} western boots, mid-calf height, low block heel, slightly pointed toe, subtle stitched lines on the shaft; smooth leather surface; plain studio background; product only; no logos or accessories'
}

    ]
  }
];



// 🩴 WOMEN_SANDALS
export const WOMEN_SANDALS: WomenTitleCategory[] = [
  {
    title: 'Sandals',
    items: [
      {
        name: 'Flat Sandals',
        image: './../../assets/styles/women/Sandals/Flat.jpg',
        defaultColor: 'tan leather',
        prompt:
          '{color} flat sandals with slim straps and small buckle, low flexible sole and clean edges; simple everyday design that sits naturally on the feet; shape, strap placement and sole thickness consistent from front, side and three-quarter views'
      },
      {
        name: 'Heeled Sandals',
        image: './../../assets/styles/women/Sandals/Heeled.jpg',
        defaultColor: 'black patent leather',
        prompt:
          '{color} heeled sandals with slim ankle strap, stable block or slim heel and open front; smooth glossy finish; elegant, balanced proportions that align naturally with the feet and remain consistent in all views'
      },
      {
        name: 'Strappy Sandals',
        image: './../../assets/styles/women/Sandals/Strappy.jpg',
        defaultColor: 'light brown leather',
        prompt:
          '{color} flat strappy sandals with multiple slim straps across the foot and secure buckle; matte leather texture with clean stitching; comfortable fitted look with strap pattern and sole line stable from every angle'
      },
      {
        name: 'Platform Sandals',
        image: './../../assets/styles/women/Sandals/Platform.jpg',
        defaultColor: 'off-white leather with cork sole',
        prompt:
          '{color} platform sandals with wide upper straps, ankle buckle and cork-style platform sole; solid, even platform height and secure fit; structured silhouette and strap layout consistent from front, side and back views'
      },
      {
        name: 'Gladiator Sandals',
        image: './../../assets/styles/women/Sandals/Gladiator.jpg',
        defaultColor: 'brown leather',
        prompt:
          '{color} gladiator sandals with multiple horizontal straps and secure fastening around the ankle or lower leg; matte leather finish with neat edges; clear structured strap pattern that follows the foot naturally and remains consistent in all views'
      },
      {
        name: 'Slide Sandals',
        image: './../../assets/styles/women/Sandals/Slide.jpg',
        defaultColor: 'light pink',
        prompt:
          '{color} slide sandals with one wide strap and flat sole; soft smooth surface with clean contour; easy slip-on style that aligns evenly across both feet with consistent strap width and sole thickness from every angle'
      },
      {
        name: 'Wedge Sandals',
        image: './../../assets/styles/women/Sandals/Wedge.jpg',
        defaultColor: 'cream leather with cork wedge',
        prompt:
          '{color} wedge sandals with cross straps, ankle buckle and cork-style wedge heel; stable continuous wedge from heel to mid-foot; straps, wedge height and overall shape kept uniform in front, side and back views'
      },
      {
        name: 'Thong Sandals',
        image: './../../assets/styles/women/Sandals/Thong.jpg',
        defaultColor: 'tan leather',
        prompt:
          '{color} toe-post flat sandals with slender straps and simple flat sole; minimal clean design with matte leather look; strap placement and sole outline consistent and balanced on both feet in all viewing angles'
      },

      {
        name: 'Dress Sandals',
        image: './../../assets/styles/women/Sandals/Dress.jpg',
        defaultColor: 'nude leather',
        prompt:
          '{color} dress sandals with slim crossed straps, small buckle and low to mid heel; smooth refined finish; elegant, balanced silhouette that fits neatly on the feet with strap positions and heel height consistent in all views'
      }
    ]
  }
];

