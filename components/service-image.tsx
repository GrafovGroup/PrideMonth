const imagery:Record<string,{src:string;alt:string;caption:string}>={
 products:{src:'/pride-kit.webp',alt:'Canvas tote, rainbow pins, white apparel and a desk flag arranged as a workplace Pride kit',caption:'Workplace kit inspiration'},
 events:{src:'/pride-event.webp',alt:'Contemporary corporate event space with seating, cocktail tables and rainbow Pride accents',caption:'Corporate event inspiration'},
 spaces:{src:'/pride-event.webp',alt:'Modern office lobby with rainbow flags and coordinated window graphics',caption:'Workplace and property inspiration'}
};
export function imageFor(slug:string){if(/event|corporate-pride-month/.test(slug))return imagery.events;if(/flags|signage|decorations|retail|property/.test(slug))return imagery.spaces;return imagery.products;}
export default function ServiceImage({slug,compact=false}:{slug:string;compact?:boolean}){const photo=imageFor(slug);return <figure className={compact?'service-photo compact':'service-photo'}><img src={photo.src} alt={photo.alt} width="1536" height="1024" loading={compact?'lazy':'eager'} decoding="async"/>{!compact&&<figcaption>{photo.caption}<span>Illustrative concept · final scope custom quoted</span></figcaption>}</figure>}
