
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
    title: 'Backgrounds',
    items: [
      {
        name: 'Urban Street',
        image: './../../assets/styles/background/Urban-Street.jpg',
        prompt: 'Urban street with natural daylight, realistic shadows, and correct human scale. Perspective from eye level, slightly blurred background for portrait depth.'
      },
      {
        name: 'Modern Office',
        image: './../../assets/styles/background/Modern-Office.jpg',
        prompt: 'Modern office interior with soft natural light from windows, neutral color tones, slight depth blur for realistic portrait integration.'
      },
      {
        name: 'Luxury Apartment',
        image: './../../assets/styles/background/Luxury-Apartment.jpg',
        prompt: 'Bright luxury apartment with large windows and soft warm lighting. Realistic indoor perspective, matching subject size and direction of light.'
      },
      {
        name: 'Outdoor Park',
        image: './../../assets/styles/background/Outdoor-Park.jpg',
        prompt: 'Outdoor park with daylight, green trees, and soft diffused sunlight. Natural shadows and depth-of-field blur behind subject.'
      },
      {
        name: 'Mountain Trail',
        image: './../../assets/styles/background/Mountain-Trail.jpg',
        prompt: 'Mountain trail under daylight, cool natural tones, soft atmospheric haze, realistic perspective and depth.'
      },
      {
        name: 'Beach Sunset',
        image: './../../assets/styles/background/Beach.jpg',
        prompt: 'Beach at sunset with warm golden lighting and soft reflections. Natural shadows and consistent warm tone on skin and clothes.'
      },
      {
        name: 'Studio Light Gray',
        image: './../../assets/styles/background/Studio-Light-Gray.jpg',
        prompt: 'Professional light gray studio backdrop with soft diffused lighting, even illumination, and realistic shadow beneath feet.'
      },
      {
        name: 'Classic Photography Studio',
        image: './../../assets/styles/background/Photography-Studio.jpg',
        prompt: 'Classic portrait studio with gradient gray background, balanced lighting from both sides, and soft shadows. Realistic studio mood.'
      },
      {
        name: 'Cafe Interior',
        image: './../../assets/styles/background/Cafe-Interior.jpg',
        prompt: 'Cozy cafe interior with warm soft lighting, shallow depth of field, realistic perspective and natural integration with indoor environment.'
      },
      {
        name: 'Shopping Mall',
        image: './../../assets/styles/background/Shopping-Mall.jpg',
        prompt: 'Modern shopping mall interior with clean lighting and balanced reflections, slight background blur for realism.'
      },
      {
        name: 'City Rooftop',
        image: './../../assets/styles/background/City-Rooftop.jpg',
        prompt: 'City rooftop during golden hour, realistic perspective, soft warm sunlight, correct human scale and depth.'
      },
      {
        name: 'Old European Street',
        image: './../../assets/styles/background/European-Street.jpg',
        prompt: 'Old European cobblestone street with warm ambient light and soft background blur, realistic depth and natural scale.'
      },
      {
        name: 'Brick Wall Studio',
        image: './../../assets/styles/background/Brick-Wall-Studio.jpg',
        prompt: 'Brick wall studio interior with balanced lighting, neutral shadows, realistic portrait perspective.'
      },
      {
        name: 'Wooden Cabin Interior',
        image: './../../assets/styles/background/Wooden-Cabin.jpg',
        prompt: 'Warm wooden cabin interior with soft yellow light and cozy ambience, depth blur and natural integration.'
      },
      {
        name: 'Library Interior',
        image: './../../assets/styles/background/Library-Interior.jpg',
        prompt: 'Classic library interior with warm soft lighting, wooden shelves, realistic perspective, and natural shadow blending.'
      },
      {
        name: 'Fitness Gym',
        image: './../../assets/styles/background/Fitness-Gym.jpg',
        prompt: 'Fitness gym with neutral cool lighting, metallic reflections, realistic human scale and correct shadow direction.'
      },
      {
        name: 'Night City Lights',
        image: './../../assets/styles/background/Night-City.jpg',
        prompt: 'Night city scene with soft ambient neon lighting, realistic reflections on skin, gentle background blur for portrait realism.'
      },
      {
        name: 'Forest Path',
        image: './../../assets/styles/background/Forest-Path.jpg',
        prompt: 'Forest path with filtered sunlight through trees, soft green ambient tone, misty depth and natural integration.'
      },
      {
        name: 'Countryside Field',
        image: './../../assets/styles/background/Countryside.jpg',
        prompt: 'Countryside field with soft daylight, open horizon, gentle wind and warm tone, realistic outdoor composition.'
      },
      {
        name: 'Luxury Car Garage',
        image: './../../assets/styles/background/Luxury-Car.jpg',
        prompt: 'Luxury car garage with soft neutral light, reflective floor, correct shadow direction and natural human placement.'
      }
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
  { key: 'background', label: 'Backgrounds', icon: './../../assets/styles/men/Categories/background.jpg' },
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
  { key: 'pants', label: 'Pants & Trousers', icon: './../../assets/styles/women/Categories/Pants-&-Trousers.jpg' },
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
  { key: 'background', label: 'Backgrounds', icon: './../../assets/styles/men/Categories/background.jpg' },
];




export const WOMEN_DRESSES: WomenTitleCategory[] = [
  {
    title: 'Dresses',
    items: [
      { name: 'Maxi Dress', image: './../../assets/styles/women/Dresses/Maxi.jpg' },
      { name: 'Midi Dress', image: './../../assets/styles/women/Dresses/Midi.jpg' },
      { name: 'Mini Dress', image: './../../assets/styles/women/Dresses/Mini.jpg' },
      { name: 'Bodycon Dress', image: './../../assets/styles/women/Dresses/Bodycon.jpg' },
      { name: 'Wrap Dress', image: './../../assets/styles/women/Dresses/Wrap.jpg' },
      { name: 'A-Line Dress', image: './../../assets/styles/women/Dresses/A-Line.jpg' },
      { name: 'Slip Dress', image: './../../assets/styles/women/Dresses/Slip.jpg' },
      { name: 'Off-Shoulder Dress', image: './../../assets/styles/women/Dresses/Off-Shoulder.jpg' },
      { name: 'Shirt Dress', image: './../../assets/styles/women/Dresses/Shirt.jpg' },
      { name: 'Evening Gown', image: './../../assets/styles/women/Dresses/Evening-Gown.jpg' },
    ],
  },
];


export const WOMEN_JEANS: WomenTitleCategory[] = [
  {
    title: 'Jeans',
    items: [
      { name: 'Skinny Jeans', image: './../../assets/styles/women/Jeans/Skinny.jpg' },
      { name: 'High Waist Jeans', image: './../../assets/styles/women/Jeans/High-Waist.jpg' },
      { name: 'Mom Jeans', image: './../../assets/styles/women/Jeans/Mom.jpg' },
      { name: 'Straight Fit Jeans', image: './../../assets/styles/women/Jeans/Straight-Fit.jpg' },
      { name: 'Flared Jeans', image: './../../assets/styles/women/Jeans/Flared.jpg' },
      { name: 'Boyfriend Jeans', image: './../../assets/styles/women/Jeans/Boyfriend.jpg' },
      { name: 'Wide Leg Jeans', image: './../../assets/styles/women/Jeans/Wide-Leg.jpg' },
      { name: 'Distressed Jeans', image: './../../assets/styles/women/Jeans/Distressed.jpg' },
      { name: 'Cropped Jeans', image: './../../assets/styles/women/Jeans/Cropped.jpg' },
      { name: 'Vintage Blue Jeans', image: './../../assets/styles/women/Jeans/Vintage-Blue.jpg' },
    ],
  },
];


export const WOMEN_HEELS: WomenTitleCategory[] = [
  {
    title: 'Heels',
    items: [
      { name: 'Stiletto Heels', image: './../../assets/styles/women/Heels/Stiletto.jpg' },
      { name: 'Block Heels', image: './../../assets/styles/women/Heels/Block.jpg' },
      { name: 'Wedge Heels', image: './../../assets/styles/women/Heels/Wedge.jpg' },
      { name: 'Ankle Strap Heels', image: './../../assets/styles/women/Heels/Ankle-Strap.jpg' },
      { name: 'Platform Heels', image: './../../assets/styles/women/Heels/Platform.jpg' },
      { name: 'Peep Toe Heels', image: './../../assets/styles/women/Heels/Peep-Toe.jpg' },
      { name: 'Slingback Heels', image: './../../assets/styles/women/Heels/Slingback.jpg' },
      { name: 'Pumps', image: './../../assets/styles/women/Heels/Pumps.jpg' },
      { name: 'Kitten Heels', image: './../../assets/styles/women/Heels/Kitten.jpg' },
      { name: 'Embellished Heels', image: './../../assets/styles/women/Heels/Embellished.jpg' },
    ],
  },
];


export const WOMEN_BLOUSES: WomenTitleCategory[] = [
  {
    title: 'Blouses & Shirts',
    items: [
      { name: 'Classic White Blouse', image: './../../assets/styles/women/Blouses/Classic.jpg' },
      { name: 'Silk Button-Up Blouse', image: './../../assets/styles/women/Blouses/Silk-Button-Up.jpg' },
      { name: 'Chiffon Ruffle Blouse', image: './../../assets/styles/women/Blouses/Chiffon-Ruffle.jpg' },
      { name: 'Satin Wrap Blouse', image: './../../assets/styles/women/Blouses/Satin-Wrap.jpg' },
      { name: 'Lace Detail Blouse', image: './../../assets/styles/women/Blouses/Lace-Detail.jpg' },
      { name: 'Puff Sleeve Blouse', image: './../../assets/styles/women/Blouses/Puff-Sleeve.jpg' },
      { name: 'Striped Office Shirt', image: './../../assets/styles/women/Blouses/Striped-Office.jpg' },
      { name: 'Denim Shirt', image: './../../assets/styles/women/Blouses/Denim.jpg' },
      { name: 'Bow Tie Blouse', image: './../../assets/styles/women/Blouses/Bow-Tie.jpg' },
      { name: 'Peplum Blouse', image: './../../assets/styles/women/Blouses/Peplum.jpg' },
    ],
  },
];


export const WOMEN_TSHIRTS: WomenTitleCategory[] = [
  {
    title: 'T-Shirts & Tops',
    items: [
      { name: 'Basic Cotton T-Shirt', image: './../../assets/styles/women/T-Shirts/Basic-Cotton.jpg' },
      { name: 'Oversized T-Shirt', image: './../../assets/styles/women/T-Shirts/Oversized.jpg' },
      { name: 'V-Neck Tee', image: './../../assets/styles/women/T-Shirts/V-Neck.jpg' },
      { name: 'Round Neck T-Shirt', image: './../../assets/styles/women/T-Shirts/Round-Neck.jpg' },
      { name: 'Graphic Print Tee', image: './../../assets/styles/women/T-Shirts/Graphic-Print.jpg' },
      { name: 'Ribbed Tank Top', image: './../../assets/styles/women/T-Shirts/Ribbed-Tank.jpg' },
      { name: 'Off-Shoulder Top', image: './../../assets/styles/women/T-Shirts/Off-Shoulder.jpg' },
      { name: 'Crop Tee', image: './../../assets/styles/women/T-Shirts/Crop.jpg' },
      { name: 'Long Sleeve Top', image: './../../assets/styles/women/T-Shirts/Long-Sleeve.jpg' },
      { name: 'Knotted Front T-Shirt', image: './../../assets/styles/women/T-Shirts/Knotted-Front.jpg' },
    ],
  },
];



export const WOMEN_CROPS: WomenTitleCategory[] = [
  {
    title: 'Crop Tops',
    items: [
      { name: 'Basic Cotton Crop Top', image: './../../assets/styles/women/Crop-Tops/Basic-Cotton.jpg' },
      { name: 'Ribbed Knit Crop Top', image: './../../assets/styles/women/Crop-Tops/Ribbed-Knit.jpg' },
      { name: 'Halter Neck Crop Top', image: './../../assets/styles/women/Crop-Tops/Halter-Neck.jpg' },
      { name: 'Sleeveless Crop Top', image: './../../assets/styles/women/Crop-Tops/Sleeveless.jpg' },
      { name: 'Graphic Crop Tee', image: './../../assets/styles/women/Crop-Tops/Graphic.jpg' },
      { name: 'Wrap Front Crop Top', image: './../../assets/styles/women/Crop-Tops/Wrap-Front.jpg' },
      { name: 'Lace Trim Crop Top', image: './../../assets/styles/women/Crop-Tops/Lace-Trim.jpg' },
      { name: 'Denim Crop Top', image: './../../assets/styles/women/Crop-Tops/Denim.jpg' },
      { name: 'Off-Shoulder Crop Top', image: './../../assets/styles/women/Crop-Tops/Off-Shoulder.jpg' },
      { name: 'Sequin Party Crop Top', image: './../../assets/styles/women/Crop-Tops/Sequin-Party.jpg' },
    ],
  },
];


export const WOMEN_SWEATERS: WomenTitleCategory[] = [
  {
    title: 'Sweaters & Cardigans',
    items: [
      { name: 'Chunky Knit Sweater', image: './../../assets/styles/women/Sweaters/Chunky-Knit.jpg' },
      { name: 'Cable Knit Sweater', image: './../../assets/styles/women/Sweaters/Cable-Knit.jpg' },
      { name: 'Turtleneck Sweater', image: './../../assets/styles/women/Sweaters/Turtleneck.jpg' },
      { name: 'Cropped Sweater', image: './../../assets/styles/women/Sweaters/Cropped.jpg' },
      { name: 'Oversized Cardigan', image: './../../assets/styles/women/Sweaters/Oversized.jpg' },
      { name: 'Button-Up Cardigan', image: './../../assets/styles/women/Sweaters/Button-Up.jpg' },
      { name: 'V-Neck Sweater', image: './../../assets/styles/women/Sweaters/V-Neck.jpg' },
      { name: 'Striped Knit Sweater', image: './../../assets/styles/women/Sweaters/Striped-Knit.jpg' },
      { name: 'Wool Blend Sweater', image: './../../assets/styles/women/Sweaters/Wool-Blend.jpg' },
      { name: 'Open Front Cardigan', image: './../../assets/styles/women/Sweaters/Open-Front.jpg' },
    ],
  },
];


// 🧍‍♀️ WOMEN_JUMPSUITS
export const WOMEN_JUMPSUITS: WomenTitleCategory[] = [
  {
    title: 'Jumpsuits & Rompers',
    items: [
      { name: 'Casual Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Casual.jpg' },
      { name: 'Formal Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Formal.jpg' },
      { name: 'Denim Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Denim.jpg' },
      { name: 'Wide-Leg Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Wide-Leg.jpg' },
      { name: 'Short Romper', image: './../../assets/styles/women/Jumpsuits/Short.jpg' },
      { name: 'Sleeveless Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Sleeveless.jpg' },
      { name: 'Printed Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Printed.jpg' },
      { name: 'Utility Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Utility.jpg' },
      { name: 'Off-Shoulder Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Off-Shoulder.jpg' },
      { name: 'Belted Jumpsuit', image: './../../assets/styles/women/Jumpsuits/Belted.jpg' },
    ],
  },
];


// 👖 WOMEN_PANTS
export const WOMEN_PANTS: WomenTitleCategory[] = [
  {
    title: 'Pants & Trousers',
    items: [
      { name: 'Wide-Leg Pants', image: './../../assets/styles/women/Pants/Wide-Leg.jpg' },
      { name: 'High-Waisted Pants', image: './../../assets/styles/women/Pants/High-Waisted.jpg' },
      { name: 'Culottes', image: './../../assets/styles/women/Pants/Culottes.jpg' },
      { name: 'Straight Pants', image: './../../assets/styles/women/Pants/Straight.jpg' },
      { name: 'Flared Pants', image: './../../assets/styles/women/Pants/Flared.jpg' },
      { name: 'Pleated Trousers', image: './../../assets/styles/women/Pants/Pleated.jpg' },
      { name: 'Chino Pants', image: './../../assets/styles/women/Pants/Chino.jpg' },
      { name: 'Paperbag Pants', image: './../../assets/styles/women/Pants/Paperbag.jpg' },
      { name: 'Cropped Pants', image: './../../assets/styles/women/Pants/Cropped.jpg' },
      { name: 'Tailored Trousers', image: './../../assets/styles/women/Pants/Tailored.jpg' },
    ],
  },
];


// 👗 WOMEN_SKIRTS
export const WOMEN_SKIRTS: WomenTitleCategory[] = [
  {
    title: 'Skirts',
    items: [
      { name: 'Mini Skirt', image: './../../assets/styles/women/Skirts/Mini.jpg' },
      { name: 'Midi Skirt', image: './../../assets/styles/women/Skirts/Midi.jpg' },
      { name: 'Maxi Skirt', image: './../../assets/styles/women/Skirts/Maxi.jpg' },
      { name: 'Pleated Skirt', image: './../../assets/styles/women/Skirts/Pleated.jpg' },
      { name: 'A-Line Skirt', image: './../../assets/styles/women/Skirts/A-Line.jpg' },
      { name: 'Pencil Skirt', image: './../../assets/styles/women/Skirts/Pencil.jpg' },
      { name: 'Wrap Skirt', image: './../../assets/styles/women/Skirts/Wrap.jpg' },
      { name: 'Denim Skirt', image: './../../assets/styles/women/Skirts/Denim.jpg' },
      { name: 'Leather Skirt', image: './../../assets/styles/women/Skirts/Leather.jpg' },
      { name: 'Tulle Skirt', image: './../../assets/styles/women/Skirts/Tulle.jpg' },
    ],
  },
];

// 🩳 WOMEN_SHORTS
export const WOMEN_SHORTS: WomenTitleCategory[] = [
  {
    title: 'Shorts',
    items: [
      { name: 'Denim Shorts', image: './../../assets/styles/women/Shorts/Denim.jpg' },
      { name: 'High-Waisted Shorts', image: './../../assets/styles/women/Shorts/High-Waisted.jpg' },
      { name: 'Tailored Shorts', image: './../../assets/styles/women/Shorts/Tailored.jpg' },
      { name: 'Bermuda Shorts', image: './../../assets/styles/women/Shorts/Bermuda.jpg' },
      { name: 'Paperbag Shorts', image: './../../assets/styles/women/Shorts/Paperbag.jpg' },
      { name: 'Pleated Shorts', image: './../../assets/styles/women/Shorts/Pleated.jpg' },
      { name: 'Linen Shorts', image: './../../assets/styles/women/Shorts/Linen.jpg' },
      { name: 'Cargo Shorts', image: './../../assets/styles/women/Shorts/Cargo.jpg' },
      { name: 'Leather Shorts', image: './../../assets/styles/women/Shorts/Leather.jpg' },
      { name: 'Sport Shorts', image: './../../assets/styles/women/Shorts/Sport.jpg' },
    ],
  },
];


// 🧥 WOMEN_JACKETS
export const WOMEN_JACKETS: WomenTitleCategory[] = [
  {
    title: 'Jackets & Coats',
    items: [
      { name: 'Leather Jacket', image: './../../assets/styles/women/Jackets/Leather.jpg' },
      { name: 'Denim Jacket', image: './../../assets/styles/women/Jackets/Denim.jpg' },
      { name: 'Bomber Jacket', image: './../../assets/styles/women/Jackets/Bomber.jpg' },
      { name: 'Puffer Jacket', image: './../../assets/styles/women/Jackets/Puffer.jpg' },
      { name: 'Trench Coat', image: './../../assets/styles/women/Jackets/Trench.jpg' },
      { name: 'Wool Coat', image: './../../assets/styles/women/Jackets/Wool.jpg' },
      { name: 'Raincoat', image: './../../assets/styles/women/Jackets/Raincoat.jpg' },
      { name: 'Peacoat', image: './../../assets/styles/women/Jackets/Peacoat.jpg' },
      { name: 'Faux Fur Coat', image: './../../assets/styles/women/Jackets/Faux-Fur.jpg' },
      { name: 'Quilted Jacket', image: './../../assets/styles/women/Jackets/Quilted.jpg' },
    ],
  },
];


// 🧥 WOMEN_BLAZERS
export const WOMEN_BLAZERS: WomenTitleCategory[] = [
  {
    title: 'Blazers',
    items: [
      { name: 'Classic Blazer', image: './../../assets/styles/women/Blazers/Classic.jpg' },
      { name: 'Oversized Blazer', image: './../../assets/styles/women/Blazers/Oversized.jpg' },
      { name: 'Double-Breasted Blazer', image: './../../assets/styles/women/Blazers/Double-Breasted.jpg' },
      { name: 'Fitted Blazer', image: './../../assets/styles/women/Blazers/Fitted.jpg' },
      { name: 'Plaid Blazer', image: './../../assets/styles/women/Blazers/Plaid.jpg' },
      { name: 'Linen Blazer', image: './../../assets/styles/women/Blazers/Linen.jpg' },
      { name: 'Velvet Blazer', image: './../../assets/styles/women/Blazers/Velvet.jpg' },
      { name: 'Cropped Blazer', image: './../../assets/styles/women/Blazers/Cropped.jpg' },
      { name: 'Sleeveless Blazer', image: './../../assets/styles/women/Blazers/Sleeveless.jpg' },
      { name: 'Tuxedo Blazer', image: './../../assets/styles/women/Blazers/Tuxedo.jpg' },
    ],
  },
];

// 🧥 WOMEN_HOODIES
export const WOMEN_HOODIES: WomenTitleCategory[] = [
  {
    title: 'Hoodies & Sweatshirts',
    items: [
      { name: 'Pullover Hoodie', image: './../../assets/styles/women/Hoodies/Pullover.jpg' },
      { name: 'Zip-Up Hoodie', image: './../../assets/styles/women/Hoodies/Zip-Up.jpg' },
      { name: 'Oversized Hoodie', image: './../../assets/styles/women/Hoodies/Oversized.jpg' },
      { name: 'Cropped Hoodie', image: './../../assets/styles/women/Hoodies/Cropped.jpg' },
      { name: 'Graphic Hoodie', image: './../../assets/styles/women/Hoodies/Graphic.jpg' },
      { name: 'Sweatshirt', image: './../../assets/styles/women/Hoodies/Sweatshirt.jpg' },
      { name: 'Fleece Hoodie', image: './../../assets/styles/women/Hoodies/Fleece.jpg' },
      { name: 'Tie-Dye Hoodie', image: './../../assets/styles/women/Hoodies/Tie-Dye.jpg' },
      { name: 'Athletic Hoodie', image: './../../assets/styles/women/Hoodies/Athletic.jpg' },
      { name: 'Knitted Hoodie', image: './../../assets/styles/women/Hoodies/Knitted.jpg' },
    ],
  },
];


// 🧶 WOMEN_CARDIGANS
export const WOMEN_CARDIGANS: WomenTitleCategory[] = [
  {
    title: 'Cardigans',
    items: [
      { name: 'Long Cardigan', image: './../../assets/styles/women/Cardigans/Long.jpg' },
      { name: 'Cropped Cardigan', image: './../../assets/styles/women/Cardigans/Cropped.jpg' },
      { name: 'Chunky Knit Cardigan', image: './../../assets/styles/women/Cardigans/Chunky-Knit.jpg' },
      { name: 'Belted Cardigan', image: './../../assets/styles/women/Cardigans/Belted.jpg' },
      { name: 'Button-Up Cardigan', image: './../../assets/styles/women/Cardigans/Button-Up.jpg' },
      { name: 'Open Front Cardigan', image: './../../assets/styles/women/Cardigans/Open-Front.jpg' },
      { name: 'Printed Cardigan', image: './../../assets/styles/women/Cardigans/Printed.jpg' },
      { name: 'Cable Knit Cardigan', image: './../../assets/styles/women/Cardigans/Cable-Knit.jpg' },
      { name: 'Wool Cardigan', image: './../../assets/styles/women/Cardigans/Wool.jpg' },
      { name: 'Mohair Cardigan', image: './../../assets/styles/women/Cardigans/Mohair.jpg' },
    ],
  },
];


// 👜 WOMEN_BAGS
export const WOMEN_BAGS: WomenTitleCategory[] = [
  {
    title: 'Bags & Purses',
    items: [
      { name: 'Tote Bag', image: './../../assets/styles/women/Bags/Tote.jpg' },
      { name: 'Shoulder Bag', image: './../../assets/styles/women/Bags/Shoulder.jpg' },
      { name: 'Crossbody Bag', image: './../../assets/styles/women/Bags/Crossbody.jpg' },
      { name: 'Clutch', image: './../../assets/styles/women/Bags/Clutch.jpg' },
      { name: 'Satchel Bag', image: './../../assets/styles/women/Bags/Satchel.jpg' },
      { name: 'Backpack', image: './../../assets/styles/women/Bags/Backpack.jpg' },
      { name: 'Bucket Bag', image: './../../assets/styles/women/Bags/Bucket.jpg' },
      { name: 'Mini Bag', image: './../../assets/styles/women/Bags/Mini.jpg' },
      { name: 'Evening Bag', image: './../../assets/styles/women/Bags/Evening.jpg' },
      { name: 'Quilted Bag', image: './../../assets/styles/women/Bags/Quilted.jpg' },
    ],
  },
];


// 💍 WOMEN_JEWELRY
export const WOMEN_JEWELRY: WomenTitleCategory[] = [
  {
    title: 'Jewelry',
    items: [
      { name: 'Necklace', image: './../../assets/styles/women/Jewelry/Necklace.jpg' },
      { name: 'Bracelet', image: './../../assets/styles/women/Jewelry/Bracelet.jpg' },
      { name: 'Earrings', image: './../../assets/styles/women/Jewelry/Earrings.jpg' },
      { name: 'Rings', image: './../../assets/styles/women/Jewelry/Rings.jpg' },
      { name: 'Anklet', image: './../../assets/styles/women/Jewelry/Anklet.jpg' },
      { name: 'Brooch', image: './../../assets/styles/women/Jewelry/Brooch.jpg' },
      { name: 'Choker', image: './../../assets/styles/women/Jewelry/Choker.jpg' },
      { name: 'Pendant', image: './../../assets/styles/women/Jewelry/Pendant.jpg' },
      { name: 'Cuff Bracelet', image: './../../assets/styles/women/Jewelry/Cuff.jpg' },
      { name: 'Hoop Earrings', image: './../../assets/styles/women/Jewelry/Hoop.jpg' },
    ],
  },
];


// 🧣 WOMEN_SCARVES
export const WOMEN_SCARVES: WomenTitleCategory[] = [
  {
    title: 'Scarves',
    items: [
      { name: 'Silk Scarf', image: './../../assets/styles/women/Scarves/Silk.jpg' },
      { name: 'Wool Scarf', image: './../../assets/styles/women/Scarves/Wool.jpg' },
      { name: 'Printed Scarf', image: './../../assets/styles/women/Scarves/Printed.jpg' },
      { name: 'Knitted Scarf', image: './../../assets/styles/women/Scarves/Knitted.jpg' },
      { name: 'Cashmere Scarf', image: './../../assets/styles/women/Scarves/Cashmere.jpg' },
      { name: 'Infinity Scarf', image: './../../assets/styles/women/Scarves/Infinity.jpg' },
      { name: 'Square Scarf', image: './../../assets/styles/women/Scarves/Square.jpg' },
      { name: 'Pashmina Scarf', image: './../../assets/styles/women/Scarves/Pashmina.jpg' },
      { name: 'Fringe Scarf', image: './../../assets/styles/women/Scarves/Fringe.jpg' },
      { name: 'Lightweight Scarf', image: './../../assets/styles/women/Scarves/Lightweight.jpg' },
    ],
  },
];


// 👒 WOMEN_HATS
export const WOMEN_HATS: WomenTitleCategory[] = [
  {
    title: 'Hats',
    items: [
      { name: 'Wide Brim Hat', image: './../../assets/styles/women/Hats/Wide-Brim.jpg' },
      { name: 'Bucket Hat', image: './../../assets/styles/women/Hats/Bucket.jpg' },
      { name: 'Fedora', image: './../../assets/styles/women/Hats/Fedora.jpg' },
      { name: 'Beret', image: './../../assets/styles/women/Hats/Beret.jpg' },
      { name: 'Baseball Cap', image: './../../assets/styles/women/Hats/Baseball.jpg' },
      { name: 'Beanie', image: './../../assets/styles/women/Hats/Beanie.jpg' },
      { name: 'Panama Hat', image: './../../assets/styles/women/Hats/Panama.jpg' },
      { name: 'Visor', image: './../../assets/styles/women/Hats/Visor.jpg' },
      { name: 'Cloche Hat', image: './../../assets/styles/women/Hats/Cloche.jpg' },
      { name: 'Straw Hat', image: './../../assets/styles/women/Hats/Straw.jpg' },
    ],
  },
];





// 👟 WOMEN_SNEAKERS
export const WOMEN_SNEAKERS: WomenTitleCategory[] = [
  {
    title: 'Sneakers',
    items: [
      { name: 'Classic Sneakers', image: './../../assets/styles/women/Sneakers/Classic.jpg' },
      { name: 'Chunky Sneakers', image: './../../assets/styles/women/Sneakers/Chunky.jpg' },
      { name: 'Slip-On Sneakers', image: './../../assets/styles/women/Sneakers/Slip-On.jpg' },
      { name: 'Platform Sneakers', image: './../../assets/styles/women/Sneakers/Platform.jpg' },
      { name: 'High-Top Sneakers', image: './../../assets/styles/women/Sneakers/High-Top.jpg' },
      { name: 'Low-Top Sneakers', image: './../../assets/styles/women/Sneakers/Low-Top.jpg' },
      { name: 'Running Sneakers', image: './../../assets/styles/women/Sneakers/Running.jpg' },
      { name: 'Canvas Sneakers', image: './../../assets/styles/women/Sneakers/Canvas.jpg' },
      { name: 'Leather Sneakers', image: './../../assets/styles/women/Sneakers/Leather.jpg' },
      { name: 'Designer Sneakers', image: './../../assets/styles/women/Sneakers/Designer.jpg' },
    ],
  },
];


// 👢 WOMEN_BOOTS
export const WOMEN_BOOTS: WomenTitleCategory[] = [
  {
    title: 'Boots',
    items: [
      { name: 'Ankle Boots', image: './../../assets/styles/women/Boots/Ankle.jpg' },
      { name: 'Knee-High Boots', image: './../../assets/styles/women/Boots/Knee-High.jpg' },
      { name: 'Over-the-Knee Boots', image: './../../assets/styles/women/Boots/Over-the-Knee.jpg' },
      { name: 'Chelsea Boots', image: './../../assets/styles/women/Boots/Chelsea.jpg' },
      { name: 'Combat Boots', image: './../../assets/styles/women/Boots/Combat.jpg' },
      { name: 'Heeled Boots', image: './../../assets/styles/women/Boots/Heeled.jpg' },
      { name: 'Flat Boots', image: './../../assets/styles/women/Boots/Flat.jpg' },
      { name: 'Western Boots', image: './../../assets/styles/women/Boots/Western.jpg' },
      { name: 'Suede Boots', image: './../../assets/styles/women/Boots/Suede.jpg' },
      { name: 'Rain Boots', image: './../../assets/styles/women/Boots/Rain.jpg' },
    ],
  },
];


// 🩴 WOMEN_SANDALS
export const WOMEN_SANDALS: WomenTitleCategory[] = [
  {
    title: 'Sandals',
    items: [
      { name: 'Flat Sandals', image: './../../assets/styles/women/Sandals/Flat.jpg' },
      { name: 'Heeled Sandals', image: './../../assets/styles/women/Sandals/Heeled.jpg' },
      { name: 'Strappy Sandals', image: './../../assets/styles/women/Sandals/Strappy.jpg' },
      { name: 'Platform Sandals', image: './../../assets/styles/women/Sandals/Platform.jpg' },
      { name: 'Gladiator Sandals', image: './../../assets/styles/women/Sandals/Gladiator.jpg' },
      { name: 'Slide Sandals', image: './../../assets/styles/women/Sandals/Slide.jpg' },
      { name: 'Wedge Sandals', image: './../../assets/styles/women/Sandals/Wedge.jpg' },
      { name: 'Thong Sandals', image: './../../assets/styles/women/Sandals/Thong.jpg' },
      { name: 'Espadrille Sandals', image: './../../assets/styles/women/Sandals/Espadrille.jpg' },
      { name: 'Dress Sandals', image: './../../assets/styles/women/Sandals/Dress.jpg' },
    ],
  },
];
