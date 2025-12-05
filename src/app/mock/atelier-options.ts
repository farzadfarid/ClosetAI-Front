// src/app/mock/atelier-options.ts

export interface TitleCategory {
  title: string;
  items: AtelierCategory[];
}

export interface AtelierCategory {
  name: string;
  image: string;
  prompt?: string;
  defaultColor?: string;
} 


export const ATELIER_CATEGORIES = [
  { key: 'newborn', label: 'Newborn Portrait', icon: './../../assets/styles/atelier/categories/newborn.jpg' },
  { key: 'children', label: 'Children Portrait', icon: './../../assets/styles/atelier/categories/children.jpg' },
  { key: 'fashion', label: 'Fashion Editorial', icon: './../../assets/styles/atelier/categories/fashion.jpg' },
  { key: 'classic', label: 'Classic Portrait', icon: './../../assets/styles/atelier/categories/classic.jpg' },
  { key: 'vintage', label: 'Vintage Film Look', icon: './../../assets/styles/atelier/categories/vintage.jpg' },
  { key: 'blackwhite', label: 'Black & White', icon: './../../assets/styles/atelier/categories/blackwhite.jpg' },
  { key: 'goldenhour', label: 'Golden Hour Light', icon: './../../assets/styles/atelier/categories/goldenhour.jpg' },
  { key: 'studiohighkey', label: 'High-Key Studio', icon: './../../assets/styles/atelier/categories/highkey.jpg' },
  { key: 'studiolowkey', label: 'Low-Key Dramatic', icon: './../../assets/styles/atelier/categories/lowkey.jpg' },
  { key: 'couple', label: 'Couple & Love Portrait', icon: './../../assets/styles/atelier/categories/couple.jpg' },
  { key: 'family', label: 'Family Lifestyle', icon: './../../assets/styles/atelier/categories/family.jpg' },
  { key: 'cinematic', label: 'Cinematic Look', icon: './../../assets/styles/atelier/categories/cinematic.jpg' },
];



export const ATELIER_FASHION: TitleCategory[] = [
  {
    title: 'Fashion Editorial Portraits',
    items: [
      {
        name: 'Vogue Studio Look',
        image: './../../assets/styles/atelier/Fashion/Vogue-Studio-Look.jpg',
        prompt: `
        create a high-fashion editorial portrait inspired by Vogue magazine studio photography;
        adjust body pose naturally to a confident elegant posture while keeping the same face region exactly as in the original photo;
        preserve the face pixel-identical — do not redraw or regenerate the face area;
        restyle clothing into refined modern outfit with realistic texture and lighting;
        apply professional soft lighting and pastel studio background;
        subtle editorial makeup allowed but must look realistic; natural skin pores visible.
        `,
      },
      {
        name: 'Runway Daylight Scene',
        image: './../../assets/styles/atelier/Fashion/Runway-Daylight.jpg',
        prompt: `
        create a bright fashion runway portrait in daylight with cinematic color tones;
        keep the original face region completely unchanged, do not redraw or replace it;
        refine body posture and clothing style into a chic runway outfit;
        ensure realistic proportions and photorealistic lighting with shallow depth of field;
        background minimalist and clean, like outdoor fashion catalog.
        `,
      },
      {
        name: 'High-Fashion Monochrome',
        image: './../../assets/styles/atelier/Fashion/High-Fashion-Monochrome.jpg',
        prompt: `
        generate a stylish black-and-white fashion portrait with soft side lighting;
        preserve the exact original face area — pixel-identical, no regeneration;
        allow minimal pose refinement for artistic composition but keep realistic body alignment;
        wardrobe can shift into a sleek monochrome outfit (suit, coat, or elegant dress);
        maintain high detail on eyes and lips, realistic skin lighting and contrast.
        `,
      },
{
  name: 'Couture Glamour Shot',
  image: './../../assets/styles/atelier/Fashion/Couture-Glamour.jpg',
  prompt: `
  studio fashion portrait with refined formal outfit and elegant styling;
  keep the original face region unchanged from the input image; do not redraw or replace any facial pixels; 
  do not modify facial landmarks: eyes, nose, mouth, jawline, ears, eyebrows;
  allow natural pose refinement from the neck and shoulders downward; keep head orientation realistic;
  realistic fabric highlights and subtle editorial makeup are allowed; skin texture must remain natural and photorealistic.
  `,
},
{
  name: 'Street Style Editorial',
  image: './../../assets/styles/atelier/Fashion/Street-Style.jpg',
  prompt: `
  modern street-style editorial portrait in daylight, urban background with soft bokeh;
  keep the face region unaltered from the input image; do not regenerate, beautify, or smooth the face;
  no face-restoration or face-replacement; preserve identity, proportions, and micro-details;
  allow outfit restyle into a trendy urban look; refine body pose naturally from the shoulders downward;
  maintain true human proportions and photorealistic lighting and color tone.
  `,
}

    ],
  },
];


export const ATELIER_CLASSIC: TitleCategory[] = [
  {
    title: 'Classic & Timeless Portraits',
    items: [
      {
        name: 'Studio Headshot',
        image: './../../assets/styles/atelier/Classic/Studio-Headshot.jpg',
        prompt: `
        professional studio headshot portrait with soft diffused front lighting and neutral gray background;
        keep the face region exactly as in the uploaded photo; do not redraw, beautify, or regenerate any facial pixels;
        refine only lighting, exposure, and wardrobe slightly for professional appearance;
        natural expression and realistic skin pores, eyes, and details must remain identical;
        subtle makeup allowed but keep a natural photorealistic tone.
        `,
      },
      {
        name: 'Formal Business Portrait',
        image: './../../assets/styles/atelier/Classic/Formal-Business.jpg',
        prompt: `
        classic business portrait with clean studio background and controlled side lighting;
        keep the entire face and head region unchanged from the original input photo; do not re-render or alter identity;
        adjust clothing into a formal outfit (suit, blazer, or shirt) while keeping neck and shoulders natural;
        correct upright posture and realistic shadows;
        lighting balanced from both sides for even complexion and professional tone.
        `,
      },
      {
        name: 'Rembrandt Lighting Portrait',
        image: './../../assets/styles/atelier/Classic/Rembrandt-Lighting.jpg',
        prompt: `
        portrait with classic Rembrandt lighting setup — soft side light creating a small triangle under one eye;
        preserve the exact original face and expression, pixel by pixel; do not redraw or stylize facial area;
        refine only body posture slightly to suit a studio setting;
        natural matte skin texture and true color depth;
        subtle background blur for realistic studio depth of field.
        `,
      },
      {
        name: 'Fine-Art Studio Look',
        image: './../../assets/styles/atelier/Classic/Fine-Art-Studio.jpg',
        prompt: `
        fine-art inspired studio portrait with softly painted textured backdrop and warm directional light;
        keep the person’s face perfectly identical to the uploaded image, no regeneration or stylization;
        allow gentle pose refinement from the neck downward to match artistic composition;
        outfit may adjust subtly to harmonize with scene color palette;
        maintain photorealistic lighting, skin detail, and authentic human texture.
        `,
      },
      {
        name: 'Black Suit Editorial',
        image: './../../assets/styles/atelier/Classic/Black-Suit-Editorial.jpg',
        prompt: `
        timeless editorial-style studio portrait in black formal suit;
        preserve the entire facial structure and features exactly — no redraw, no smooth filter, no facial retouch;
        refine posture and wardrobe naturally to match a magazine-style studio look;
        lighting low-contrast with soft gradient background;
        cinematic realism with true skin texture, depth, and accurate proportions.
        `,
      },
    ],
  },
];

export const ATELIER_VINTAGE: TitleCategory[] = [ 
  {
    title: 'Vintage & Film-Inspired Portraits',
    items: [
      {
        name: 'Retro Film Grain',
        image: './../../assets/styles/atelier/Vintage/Retro-Film-Grain.jpg',
        prompt: `
        make this portrait look like an authentic film photograph while keeping the original photo face exactly intact;
        apply color grading, film grain, and tone curve only to the background, lighting, and wardrobe areas;
        never modify, repaint, or smooth the face region — keep its color and texture exactly as in the uploaded image;
        warm nostalgic tone, gentle fade in shadows, natural depth and light falloff;
        output must remain photorealistic, same identity, same skin details.
        `,
      },
      {
        name: '70s Warm Studio',
        image: './../../assets/styles/atelier/Vintage/70s-Warm-Studio.jpg',
        prompt: `
        create a 1970s-style warm studio portrait with golden light and brown tones;
        keep the entire face region identical to the input photo; do not adjust color, light, or sharpness of the face;
        apply analog film look and retro palette only to clothing, background, and lighting;
        preserve same hairstyle and expression;
        film texture should look authentic and subtle, not digital.
        `,
      },
      {
        name: 'Old Polaroid Style',
        image: './../../assets/styles/atelier/Vintage/Polaroid-Style.jpg',
        prompt: `
        make this look like a nostalgic Polaroid print with faded colors and off-white tone;
        keep the face region completely unchanged from the uploaded image; apply grading only outside the face area;
        natural lighting with gentle film fade; same eyes, mouth, proportions, and skin tone;
        wardrobe may softly adapt to vintage palette but must stay photorealistic.
        `,
      },
      {
        name: 'Classic Sepia Mood',
        image: './../../assets/styles/atelier/Vintage/Sepia-Mood.jpg',
        prompt: `
        transform this portrait into a sepia-toned photo while preserving the entire face exactly as-is;
        do not recolor or relight the face; apply sepia tone and vignette only to background and wardrobe;
        same identity, same facial lighting, and same expression;
        authentic film grain, soft contrast, and realistic human texture.
        `,
      },
      {
        name: 'Retro Street Portrait',
        image: './../../assets/styles/atelier/Vintage/Retro-Street.jpg',
        prompt: `
        outdoor portrait with vintage street-film tone and visible fine grain;
        apply all grading and color fade only to non-face regions;
        keep the uploaded face exactly identical — same color, light, and structure;
        allow mild outfit adjustment into retro fashion style;
        maintain photorealistic skin, eyes, and proportions.
        `,
      },
    ],
  },
];

export const ATELIER_BLACKWHITE: TitleCategory[] = [
  {
    title: 'Black & White Artistic Portraits',
    items: [
      {
        name: 'High-Contrast Drama',
        image: './../../assets/styles/atelier/BlackWhite/High-Contrast-Drama.jpg',
        prompt: `
        convert this photo into a dramatic black-and-white portrait with strong side lighting and deep contrast;
        keep the face region identical to the uploaded image — do not redraw, beautify, or modify expression;
        apply monochrome tone mapping only to non-face areas (background, clothing, lighting);
        preserve realistic skin texture, eyes, and proportions exactly;
        cinematic grayscale contrast with natural light falloff.
        `,
      },
      {
        name: 'Soft Monochrome Beauty',
        image: './../../assets/styles/atelier/BlackWhite/Soft-Monochrome-Beauty.jpg',
        prompt: `
        make this portrait a soft monochrome beauty shot with gentle grayscale tones and delicate studio lighting;
        preserve the face region and all details exactly as in the input photo; no redraw or regeneration;
        apply the monochrome tone only to lighting and wardrobe;
        allow subtle editorial-style shading, but keep real skin texture visible;
        output must remain photorealistic, balanced, and human-like.
        `,
      },
      {
  name: 'Classic Hollywood Light',
  image: './../../assets/styles/atelier/BlackWhite/Classic-Hollywood.jpg',
  prompt: `
  convert this photo into a black-and-white portrait inspired by 1940s Hollywood studio lighting;
  the face region must remain pixel-identical to the uploaded photo — do not redraw, reshape, or re-light it;
  simulate the key light and rim light by adjusting overall exposure and contrast, not by repainting the face;
  apply lighting adjustments only to the background, wardrobe, and environment around the subject;
  preserve identical skin tone mapping, eye reflections, and all micro-details of the original face.
  `,
}
,
{
  name: 'Fine-Art Shadow Play',
  image: './../../assets/styles/atelier/BlackWhite/Fine-Art-Shadow.jpg',
  prompt: `
  black and white portrait with artistic shadows on the background and wardrobe only;
  do not change the face region; keep expression and features the same as the uploaded image;
  gentle global exposure adjustment; photorealistic result with natural texture.
  `,
}

,
      {
        name: 'Low-Key Grayscale Mood',
        image: './../../assets/styles/atelier/BlackWhite/Low-Key-Grayscale.jpg',
        prompt: `
        convert this photo into a low-key black-and-white portrait with a dark moody background;
        keep the face area completely unchanged from the uploaded image — same pixels, same tone, same expression;
        apply lighting and contrast adjustments only to non-face areas;
        preserve realistic eye reflections, skin pores, and facial proportions;
        cinematic grayscale tone, natural shadows, true human realism.
        `,
      },
    ],
  },
];

export const ATELIER_GOLDENHOUR: TitleCategory[] = [
  {
    title: 'Golden Hour & Sunset Portraits',
    items: [
{
  name: 'Sunset Glow Portrait',
  image: './../../assets/styles/atelier/GoldenHour/Sunset-Glow.jpg',
  prompt: `
  golden hour look with warm light in background and on hair edges;
  do not change the face; same color, same lighting, same expression;
  apply warmth to background and wardrobe only; realistic outdoor shadows.
  `,
}

,
      {
        name: 'Backlight Rim Effect',
        image: './../../assets/styles/atelier/GoldenHour/Backlight-Rim.jpg',
        prompt: `
        add a natural golden rim light around hair and shoulders, as if backlit by sunset;
        the face region must remain unchanged from the uploaded photo — do not redraw or relight it;
        adjust background and wardrobe glow to match golden tone;
        preserve identical facial features, expression, and proportions;
        cinematic outdoor feeling with realistic depth and color balance.
        `,
      },
      // {
      //   name: 'Couple Sunset Scene',
      //   image: './../../assets/styles/atelier/GoldenHour/Couple-Sunset.jpg',
      //   prompt: `
      //   create a romantic outdoor couple portrait during golden hour;
      //   apply warm sunlight glow across scene while keeping both faces perfectly identical to the uploaded image;
      //   do not modify facial details, shapes, or expressions;
      //   allow natural color grading, gentle lens flare, and realistic sunset reflections;
      //   preserve emotional realism and photorealistic texture.
      //   `,
      // },
      {
  name: 'Golden Field Portrait',
  image: './../../assets/styles/atelier/GoldenHour/Golden-Field.jpg',
  prompt: `
  portrait in an open field at golden hour with gentle warm atmosphere;
  keep the face exactly as in the uploaded photo; no face editing or relighting;
  add soft glow to hair edges and field background; keep facial histogram and tone the same; 
  maintain natural expression and proportions; realistic outdoor depth.
  `,
}
,
      {
  name: 'Urban Sunset Look',
  image: './../../assets/styles/atelier/GoldenHour/Urban-Sunset.jpg',
  prompt: `
  urban sunset portrait with warm reflections on buildings and a subtle rim on clothing;
  keep the face unchanged from the uploaded image; do not modify color, lighting, or details of the face;
  apply golden tone to background and wardrobe only; maintain the same expression and proportions;
  realistic perspective and photorealistic texture.
  `,
}
,
    ],
  },
];

export const ATELIER_STUDIOHIGHKEY: TitleCategory[] = [
  {
    title: 'High-Key Studio Portraits',
    items: [
// Alt A (خیلی محافظه‌کار)
{
  name: 'Bright Editorial Look',
  image: './../../assets/styles/atelier/HighKey/Bright-Editorial.jpg',
  prompt: `
  clean high-key studio portrait against white seamless;
  soft, even lighting with airy highlights;
  keep the person’s likeness, expression, and skin texture consistent with the photo;
  adjust only overall brightness and tone for a bright editorial mood;
  subtle beauty makeup; photorealistic result.
  `,
},



      {
        name: 'Clean Beauty Shot',
        image: './../../assets/styles/atelier/HighKey/Clean-Beauty.jpg',
        prompt: `
        minimalistic high-key beauty portrait with creamy highlights and soft front lighting;
        preserve the exact face structure and expression without any beautification or smoothing;
        apply global brightness increase while keeping original skin texture and pores visible;
        fashion-magazine aesthetic, photorealistic depth, balanced tones.
        `,
      },
      {
        name: 'Modern Lifestyle White',
        image: './../../assets/styles/atelier/HighKey/Modern-Lifestyle.jpg',
        prompt: `
        bright casual studio portrait against seamless white background in natural daylight tone;
        maintain identical facial identity, tone, and expression;
        apply global high-key exposure — not localized relighting;
        allow casual clothing and realistic soft shadows for depth;
        result should look luminous yet human and true-to-life.
        `,
      },
      {
        name: 'Fashion High-Key Pose',
        image: './../../assets/styles/atelier/HighKey/Fashion-Pose.jpg',
        prompt: `
        editorial fashion portrait with clean high-key lighting and dynamic pose;
        keep face and head identical to the uploaded image — do not repaint or alter structure;
        adjust overall light intensity to bright studio tone;
        allow modern wardrobe and natural highlight contrast;
        realistic glossy finish with true skin reflection and depth.
        `,
      },
      {
        name: 'Creative Overexposed Art',
        image: './../../assets/styles/atelier/HighKey/Creative-Overexposed.jpg',
        prompt: `
        artistic high-key portrait with controlled overexposure and pastel color palette;
        preserve facial identity and proportions exactly as in input photo;
        apply mild global glow around subject — not face-specific;
        keep skin luminance within realistic range, avoiding loss of facial detail;
        cinematic photorealism with airy artistic mood.
        `,
      },
    ],
  },
];

export const ATELIER_STUDIOLOWKEY: TitleCategory[] = [
  {
    title: 'Low-Key Dramatic Portraits',
    items: [
      {
  name: 'Cinematic Shadow Portrait',
  image: './../../assets/styles/atelier/LowKey/Cinematic-Shadow.jpg',
  prompt: `
  cinematic low-key portrait with gentle directional lighting from one side;
  dark neutral background and soft contrast to create mood;
  apply all lighting and tone adjustments globally, not per facial area;
  keep the person’s real face completely natural and identical to the uploaded photo;
  never repaint, beautify, or re-light the facial region;
  preserve original skin tone, eyes, and expression without modification;
  photorealistic, film-like depth and authentic atmosphere.
  `,
},



     {
        name: 'Moody Studio Close-Up',
        image: './../../assets/styles/atelier/LowKey/Moody-CloseUp.jpg',
        prompt: `
        close-up low-key studio portrait with cinematic light falloff;
        soft edges and rich tonal depth on a dark background;
        keep the person's real face unchanged — same eyes, mouth, and proportions;
        no digital beautification or redraw of facial features;
        apply global tone and shadow balance while keeping natural texture;
        realistic fine-art look with emotional intensity.
        `,
      },
      {
        name: 'Elegant Black Background',
        image: './../../assets/styles/atelier/LowKey/Elegant-Black.jpg',
        prompt: `
        minimalist portrait on a deep dark background with subtle rim light;
        balanced illumination on face and shoulders;
        maintain the same person’s identity and expression realistically;
        smooth light gradient and fine-art atmosphere; modern elegant mood.
        `,
      },
      {
        name: 'Creative Spotlight Effect',
        image: './../../assets/styles/atelier/LowKey/Spotlight.jpg',
        prompt: `
        artistic low-key portrait illuminated by a soft circular spotlight;
        gentle halo of light around head and shoulders;
        maintain realistic facial proportions and identity consistency;
        cinematic depth with controlled contrast and warm color balance.
        `,
      },
    ],
  },
];

export const ATELIER_COUPLE: TitleCategory[] = [
  {
    title: 'Couple & Love Portraits',
    items: [
{
  name: 'Photobooth Love Strip',
  image: './../../assets/styles/atelier/Couple/Photobooth-Strip.jpg',
  prompt: `
  recreate a playful photobooth strip with the same couple in three frames.
use the uploaded image as the exact facial reference — no repainting, no smoothing, no face reconstruction.
faces must remain fully photorealistic with original skin texture, pores, and natural imperfections.

IDENTITY LOCK:
• woman: shoulder-length hair, soft rounded facial shape
• man: short dark hair, strong jawline, thicker eyebrows
do not swap, merge, duplicate, or alter identities.

HEAD LOCK:
do not rotate, tilt, or change head direction — keep the same forward-facing angle as the uploaded image.
only small expression changes allowed (eyes, mouth, eyebrows).

CLOTHING + SCENE:
change outfits to simple relaxed holiday wear;
use a photobooth curtain background with even light and white borders.
add a handwritten “I love you ♥” at the bottom.

  `,
}
,


      {
        name: 'Golden Hour Embrace',
        image: './../../assets/styles/atelier/Couple/GoldenHour-Embrace.jpg',
        prompt: `
        romantic couple portrait during golden hour lighting;
        use the uploaded image as facial reference for both individuals — keep both people clearly recognizable with the same identity, facial structure, and expression style as in the input photo;
        do not replace one person with another and do not merge, blend, or regenerate their faces;
        clothing, scene, and lighting may change to match golden-hour mood with warm sunlight and soft glow;
        keep their pose naturally similar while allowing gentle artistic adjustment to posture without modifying their faces;
        photorealistic finish with cinematic depth.
        `,
      },
      {
        name: 'Studio Intimate Pose',
        image: './../../assets/styles/atelier/Couple/Studio-Intimate.jpg',
        prompt: `
        elegant studio-style portrait of a couple with soft neutral lighting;
        use the uploaded image as facial reference to preserve both individuals' identity and natural look exactly;
        do not redraw or beautify either face and do not substitute the woman for the man or vice-versa;
        outfit, background, and scene may transform into a clean fine-art studio setting;
        maintain their natural closeness and interaction while keeping their facial details unchanged;
        photorealistic soft intimate atmosphere.
        `,
      },
      {
        name: 'Urban Romantic Scene',
        image: './../../assets/styles/atelier/Couple/Urban-Romantic.jpg',
        prompt: `
        cinematic outdoor couple portrait in an urban environment;
        use the attached input photo as the facial reference — keep both people clearly recognizable with their real identity and micro-features unchanged;
        do not replace one person with another and do not reconstruct or enhance the faces;
        clothing and environment may switch to a modern outdoor city setting with warm reflections and soft bokeh;
        maintain their natural interaction while keeping faces untouched and photorealistic.
        `,
      },
      {
        name: 'Classic Black & White Duo',
        image: './../../assets/styles/atelier/Couple/Classic-BW-Duo.jpg',
        prompt: `
        fine-art black and white couple portrait with elegant tonal balance;
        keep both individuals’ real faces exactly as in the uploaded reference — same identity, same proportions, same structure;
        no face swapping, beautifying, or regeneration allowed;
        convert the scene into monochrome with global contrast shaping and soft film-like depth;
        maintain natural expressions and realistic texture.
        `,
      },
      {
        name: 'Nature Love Portrait',
        image: './../../assets/styles/atelier/Couple/Nature-Love.jpg',
        prompt: `
        romantic outdoor couple portrait surrounded by soft greenery;
        use the uploaded image as facial reference to keep both people fully recognizable and unchanged;
        do not merge, blend, or redraw their faces — maintain identity and expression exactly;
        clothing and scenery may update to a nature setting with gentle sunlight and warm tones;
        photorealistic natural finish with cinematic harmony.
        `,
      },
{
  name: 'Rainy Street Romance',
  image: './../../assets/styles/atelier/Couple/Rainy-Street-Romance.jpg',
  prompt: `
  cinematic couple portrait on a rainy street with soft reflections on wet pavement;
  use the uploaded image as facial reference — keep both individuals clearly recognizable with unchanged identity and facial structure;
  do not swap, redraw, or regenerate either face;
  clothing may shift into stylish coats or jackets suitable for a rainy scene;
  gentle city lights, umbrellas, and warm reflections may be added around them;
  maintain natural body posture and photorealistic mood.
  `,
},
{
  name: 'Cozy Indoor Window Light',
  image: './../../assets/styles/atelier/Couple/Cozy-Window-Light.jpg',
  prompt: `
  intimate indoor couple portrait near a bright window with soft natural light;
  preserve both people’s real faces exactly as in the uploaded photo — no alteration of identity or features; 
  allow warm cozy styling: sweaters, indoor outfits, curtain textures, warm tones;
  maintain their closeness and natural interaction while keeping facial regions untouched;
  photorealistic soft daylight finish.
  `,
},
{
  name: 'Beach Sunset Silhouette',
  image: './../../assets/styles/atelier/Couple/Beach-Sunset.jpg',
  prompt: `
  romantic beach-side couple portrait during sunset with glowing pastel sky;
  keep both individuals’ faces fully recognizable and identical to the input reference — no redrawing or face generation;
  silhouettes, warm backlighting, soft wind effects, and beach atmosphere may be added;
  clothing may be light, comfortable, and sunset-friendly;
  final image should feel cinematic, natural, and photorealistic.
  `,
},
{
  name: 'Vintage Film Lovers',
  image: './../../assets/styles/atelier/Couple/Vintage-Film-Lovers.jpg',
  prompt: `
  vintage film-style couple portrait with soft grain and nostalgic tones;
  use the uploaded image as facial reference — keep identities, facial details, and expressions unchanged;
  apply warm film grain, soft contrast, and subtle retro colors globally;
  outfits and environment may shift to vintage-inspired tones;
  maintain natural closeness without altering facial regions.
  `,
},
{
  name: 'Urban Night Lights',
  image: './../../assets/styles/atelier/Couple/Urban-Night-Lights.jpg',
  prompt: `
  modern couple portrait at night in a city with glowing neon and soft bokeh lights;
  keep both individuals’ real faces exactly the same as in the uploaded reference — no face swapping, smoothing, or regeneration;
  clothing may be updated to stylish nighttime outfits;
  apply cinematic night lighting, neon reflections, and shallow depth of field;
  maintain photorealistic detail and emotional connection between the couple.
  `,
},


    ],
  },
];


export const ATELIER_FAMILY: TitleCategory[] = [
  {
    title: 'Family Lifestyle Portraits',
    items: [

      {
        name: 'Cozy Home Moment',
        image: './../../assets/styles/atelier/Family/Cozy-Home.jpg',
        prompt: `
        warm indoor family portrait in a cozy home setting with soft natural daylight;
        use the uploaded photo as facial reference — keep every family member clearly recognizable with their real identity, facial structure, and expressions unchanged;
        do not redraw, smooth, beautify, swap, or regenerate any faces, and do not replace one person with another;
        outfits, background elements, and lighting may be adjusted to create a warm, harmonious home atmosphere;
        apply gentle global warm tones and balanced contrast while keeping all facial regions untouched;
        photorealistic family mood with authentic emotional connection.
        `,
      },

      {
        name: 'Outdoor Family Walk',
        image: './../../assets/styles/atelier/Family/Outdoor-Walk.jpg',
        prompt: `
        natural family lifestyle portrait walking outdoors under soft sunlight;
        use the uploaded photo as facial reference — preserve the real identity and facial details of all adults and children exactly as captured;
        do not blend or regenerate faces, and do not substitute one person for another;
        clothing and environment may shift into a warm outdoor scene with golden tones and soft depth;
        apply global light enhancement while keeping all faces fully natural and untouched;
        photorealistic cinematic outdoor atmosphere.
        `,
      },

      {
        name: 'Studio Classic Family',
        image: './../../assets/styles/atelier/Family/Studio-Classic.jpg',
        prompt: `
        elegant studio-style family portrait with clean soft-neutral lighting;
        use the uploaded image as facial reference — keep every individual’s face exactly the same with no reconstruction, swapping, or beautifying;
        maintain authentic expressions, proportions, and identity for all family members;
        allow wardrobe refining, studio background transformation, and tonal balancing;
        apply global exposure and contrast adjustments only outside the face regions;
        timeless fine-art photorealistic studio finish.
        `,
      },

      {
        name: 'Playful Kids Moment',
        image: './../../assets/styles/atelier/Family/Playful-Kids.jpg',
        prompt: `
        candid family portrait capturing joyful playful energy among kids;
        use the uploaded photo as facial reference — preserve the identity, facial structure, and expressions of all adults and children exactly as in the input;
        do not regenerate or blend faces, and do not replace any person;
        you may enhance background, colors, soft daylight, and warm tones to emphasize liveliness;
        maintain natural proportions, real smiles, and realistic motion depth;
        photorealistic lively family atmosphere.
        `,
      },

      {
        name: 'Family Togetherness',
        image: './../../assets/styles/atelier/Family/Family-Togetherness.jpg',
        prompt: `
        warm and emotional family portrait expressing genuine togetherness;
        include only the same people from the uploaded photo — no new or missing members;
        use the uploaded image as facial reference to keep every face identical in identity, structure, and detail;
        do not redraw, regenerate, or beautify any faces;
        environment, lighting style, and wardrobe colors may be enhanced to create a soft golden or warm indoor harmony;
        apply global exposure and tonal adjustments outside the face regions;
        cinematic fine-art mood with photorealistic clarity and natural emotion.
        `,
      },

    ],
  },
];


export const ATELIER_CINEMATIC: TitleCategory[] = [
  {
    title: 'Cinematic Portraits',
    items: [
      {
        name: 'Teal & Orange Drama',
        image: './../../assets/styles/atelier/Cinematic/Teal-Orange.jpg',
        prompt: `
        cinematic portrait with subtle teal and orange color grading and soft film lighting;
        apply the grading globally — not only on the face;
        keep the person’s real face and expression naturally recognizable as in the input photo;
        preserve real skin texture and lighting balance;
        photorealistic cinematic tone with shallow depth and natural contrast.
        `,
      },
      {
        name: 'Night Street Scene',
        image: './../../assets/styles/atelier/Cinematic/Night-Street.jpg',
        prompt: `
        night-time cinematic portrait with urban street and neon reflections;
        use existing person and posture from the uploaded photo — do not add or replace people;
        enhance global lighting with realistic reflections and gentle blue-orange tint;
        keep facial appearance natural and recognizable;
        moody atmosphere with photorealistic lighting and film depth.
        `,
      },
      {
        name: 'Film Noir Contrast',
        image: './../../assets/styles/atelier/Cinematic/Film-Noir.jpg',
        prompt: `
        black-and-white portrait inspired by film noir cinematography;
        apply global high-contrast tone mapping with directional shadows;
        do not repaint or stylize the face — keep natural structure and realism;
        preserve true skin microtexture and light falloff;
        cinematic fine-art look with controlled highlights and soft shadows.
        `,
      },
{
  name: 'Golden Cinematic Light',
  image: './../../assets/styles/atelier/Cinematic/Golden-Cinematic.jpg',
  prompt: `
  apply a cinematic color tone inspired by golden-hour films, without altering the real lighting on the person;
  keep the face, skin tone, and expression exactly as in the uploaded photo — no relighting, repainting, or beautifying;
  adjust background and global color balance only, adding a subtle warm cinematic hue to the entire image;
  preserve all facial micro-details, natural texture, and proportions;
  result should remain fully photorealistic and faithful to the original person.
  `,
},


      {
        name: 'Rainy Window Scene',
        image: './../../assets/styles/atelier/Cinematic/Rainy-Window.jpg',
        prompt: `
        cinematic portrait viewed through a rainy window with visible droplets and reflections;
        keep the same person as in the uploaded photo — do not add or replace anyone;
        apply realistic moisture and lighting effects globally, not locally on the face;
        preserve natural facial features and emotion;
        moody photorealistic depth and soft cinematic color.
        `,
      },
    ],
  },
];

export const ATELIER_NEWBORN: TitleCategory[] = [
  {
    title: 'Newborn Portraits',
    items: [

      {
  name: 'Soft Natural Light',
  image: './../../assets/styles/atelier/Newborn/Soft-Natural-Light.jpg',
  prompt: `
  soft natural-light newborn portrait near a large window, with bright airy background and creamy pastel tones;
  keep the baby's real face and expression exactly as in the uploaded photo; do not redraw, smooth, or regenerate the face;
  keep the head direction and general pose similar to the original photo;
  you may change wrap, blanket, and background to look like a professional newborn studio shot with gentle daylight mood;
  final image must stay fully photorealistic and natural.
  `,
}
,

     {
  name: 'Warm Blanket Scene',
  image: './../../assets/styles/atelier/Newborn/Warm-Blanket.jpg',
  prompt: `
  warm cozy newborn portrait with textured knitted blankets and soft golden daylight;
  keep the baby's real face, expression, head angle, and proportions exactly as in the uploaded photo — do not redraw or regenerate the face;
  keep the baby's pose and body orientation similar to the original image;
  you may restyle the blanket, wrap, and background to warm studio tones;
  apply warm highlights and soft shadows globally without touching the facial region;
  final result must remain fully photorealistic, natural, and gentle.
  `,
}
,

      {
  name: 'Studio Basket Setup',
  image: './../../assets/styles/atelier/Newborn/Studio-Basket.jpg',
  prompt: `
  fine-art newborn studio portrait inside a soft basket setup with neutral beige tones;
  keep the baby's real face, expression, head angle, and proportions exactly as in the uploaded photo — no redrawing or smoothing;
  keep the baby's pose and wrap shape consistent with the original image;
  you may transform the basket, fabric texture, background, and lighting to match a soft cinematic studio style;
  apply gentle depth of field and warm neutral grading globally, without altering the face region;
  final result must remain natural and photorealistic.
  `,
}
,

     {
  name: 'Sleeping Dream Pose',
  image: './../../assets/styles/atelier/Newborn/Sleeping-Dream.jpg',
  prompt: `
  dreamy newborn sleeping portrait with soft pastel tones and creamy highlights;
  keep the baby’s real face, expression, eyelashes, skin texture, and head angle exactly as in the uploaded photo — no redrawing, no smoothing, no alteration of the facial region;
  keep the baby’s pose and wrap structure identical to the original;
  you may adjust only the background, lighting diffusion, and global tone to create a gentle dreamy fine-art mood;
  apply soft highlight glow and subtle background blur globally, without touching the face area;
  final result must remain fully natural and photorealistic.
  `,
}
,

      {
  name: 'Soft Basket Close-Up',
  image: './../../assets/styles/atelier/Newborn/Soft-Basket-CloseUp.jpg',
  prompt: `
  soft close-up newborn portrait resting in a woven basket with warm diffused daylight;
  keep the baby's real face, expression, head angle, and proportions exactly as in the uploaded photo — no redrawing, no smoothing, no altering the facial region;
  keep the baby's pose (arms folded, head resting) exactly the same as the original;
  you may adjust the basket texture, blanket softness, background warmth, and global lighting only outside the face area;
  apply gentle warm tones and soft depth-of-field for a cozy fine-art newborn look;
  final image must remain fully natural and photorealistic.
  `,
}
,

      {
  name: 'Minimal Wrapped Pose',
  image: './../../assets/styles/atelier/Newborn/Minimal-Wrapped.jpg',
  prompt: `
  minimal newborn wrapped pose in a clean neutral studio setting with soft window daylight;
  keep the baby’s real face, expression, skin texture, and head angle exactly as in the uploaded photo — no redrawing, no smoothing, no changes to the facial region;
  keep the wrapped pose and body orientation exactly the same as the original;
  you may adjust the fabric texture, background brightness, and global tone to create a soft minimal fine-art look;
  apply gentle window-light diffusion globally, without altering the face area;
  final result must stay fully natural and photorealistic.
  `,
}
,

     {
  name: 'Beanbag Side-View Pose',
  image: './../../assets/styles/atelier/Newborn/Beanbag-SideView.jpg',
  prompt: `
  newborn beanbag side-view pose with gentle directional soft light and clean neutral background;
  keep the baby’s real face, expression, skin texture, and head angle exactly as in the uploaded photo — no redrawing, smoothing, or any modification to the facial region;
  keep the side-lying pose, arm placement, and body positioning exactly the same as the original;
  you may adjust only the beanbag texture, blanket softness, and global lighting to enhance the fine-art look;
  apply subtle depth-of-field and warm neutral tones globally, without touching the baby’s face;
  final image must remain natural and photorealistic.
  `,
}
,

      {
  name: 'Wrapped Hat & Blanket Studio',
  image: './../../assets/styles/atelier/Newborn/Wrapped-Hat-Blanket.jpg',
  prompt: `
  fine-art newborn studio portrait with knitted hat and soft textured blankets in muted warm tones;
  keep the baby’s real face, expression, skin texture, and head angle exactly as in the uploaded photo — no redrawing, smoothing, or any modification to the facial region;
  keep the wrapped pose and overall body shape exactly the same as the original;
  you may adjust the hat texture, blanket softness, background warmth, and global lighting only outside the baby’s face;
  apply gentle studio-grade warm tones and soft depth-of-field globally, without altering the face;
  final result must remain natural and fully photorealistic.
  `,
}
,


    ],
  },
];



export const ATELIER_CHILDREN: TitleCategory[] = [
  {
    title: 'Children Portraits (3–10 Years)',
    items: [
      {
        name: 'Sunny Outdoor Play',
        image: './../../assets/styles/atelier/Children/Sunny-Play.jpg',
        prompt: `
        cheerful outdoor portrait of children playing in soft sunlight;
        keep every child’s real face, features, and expression untouched;
        apply daylight tone and brightness globally without modifying faces;
        preserve hair detail, natural motion, and photorealistic depth;
        joyful and authentic outdoor atmosphere.
        `,
      },
      {
        name: 'Classic Studio Smile',
        image: './../../assets/styles/atelier/Children/Studio-Smile.jpg',
        prompt: `
        classic bright studio child portrait with soft frontal light and neutral background;
        retain each child’s real facial structure and natural smile exactly;
        refine exposure and tone globally, avoid local retouching;
        preserve true skin texture, eyes, and proportions;
        photorealistic timeless studio quality.
        `,
      },
      {
        name: 'Golden Field Adventure',
        image: './../../assets/styles/atelier/Children/Golden-Field.jpg',
        prompt: `
        outdoor child portrait in golden-hour light with natural warmth;
        preserve all real faces and proportions exactly as in the input image;
        apply color grading globally to add gentle sunset tone;
        maintain authentic joy, motion, and skin realism;
        cinematic yet fully natural atmosphere.
        `,
      },
      {
        name: 'Urban Kids Style',
        image: './../../assets/styles/atelier/Children/Urban-Style.jpg',
        prompt: `
        modern children’s portrait in an urban background with soft bokeh;
        keep every child’s real face and expression unchanged;
        adjust overall color palette and lighting globally;
        maintain realistic clothing texture and skin tone;
        photorealistic modern lifestyle tone.
        `,
      },
      {
  name: 'Joyful Park Portrait',
  image: './../../assets/styles/atelier/Children/Joyful-Park.jpg',
  prompt: `
  individual child portrait outdoors in a green park during daylight;
  keep the child’s real face and smile completely unchanged;
  apply soft sunlight tone and background blur globally;
  preserve hair texture, clothing detail, and authentic expression;
  photorealistic bright and cheerful mood.
  `,
},

{
        name: 'Whimsical Storybook Scene',
        image: './../../assets/styles/atelier/Children/Whimsical-Storybook.jpg',
        prompt: `
        a beautiful child aged around 4–7 in a whimsical storybook studio scene with soft cinematic light;
        pastel background, gentle props like a vintage chair or open book;
        natural smile, real hair, and unaltered facial features;
        global tone and brightness adjusted for magical story mood;
        photorealistic fine-art children portrait with fairy-tale atmosphere.
        `,
      },
      {
        name: 'Black & White Classic Expression',
        image: './../../assets/styles/atelier/Children/BlackWhite-Expression.jpg',
        prompt: `
        a timeless black and white studio portrait of a child aged 6–10;
        soft yet directional lighting emphasizing facial expression and texture;
        child’s real features and skin details preserved, no retouching;
        minimal background and pure emotional tone; photorealistic and classic.
        `,
      },
      {
        name: 'Mid-Century Retro Lounge',
        image: './../../assets/styles/atelier/Children/Retro-Lounge.jpg',
        prompt: `
        child portrait aged 5–9 set in a mid-century lounge scene with warm wood tones and vintage sofa;
        natural pose and expression, real face and hair unchanged;
        global color grading for retro warmth with soft daylight;
        photorealistic modern-vintage lifestyle portrait.
        `,
      },
      {
        name: 'High Energy Jump & Laugh',
        image: './../../assets/styles/atelier/Children/Jump-Laugh.jpg',
        prompt: `
        dynamic outdoor portrait of a child around 3–8 captured mid-jump or mid-laugh in soft late-afternoon light;
        natural expression, hair motion, and clothing movement preserved;
        global exposure and contrast tuned for lively energy;
        photorealistic joyful children action portrait.
        `,
      },
      {
        name: 'Fine-Art Minimal Studio Calm',
        image: './../../assets/styles/atelier/Children/Minimal-Studio-Calm.jpg',
        prompt: `
        calm minimal studio portrait of a child aged 7–10 in neutral tones;
        soft diffused light from a large window, clean composition;
        realistic skin texture, natural posture, and serene expression;
        photorealistic fine-art minimal aesthetic.
        `,
      },


    ],
  },
];

