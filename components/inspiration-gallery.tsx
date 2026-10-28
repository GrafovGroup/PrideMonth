import Link from '@/components/site-link';
import {imageById,imageSrc,imageSrcSet} from '@/lib/image-catalog';
const complementary:Record<string,string[]>={
'workplace-pride-kits':['pins-accessories','pride-apparel'],
'pride-merchandise':['pins-accessories','employee-kits'],
'pride-flags-signage':['retail-window','pride-decor'],
'pride-event-rentals':['outdoor-gathering','team-workshop'],
'pride-decorations':['event-lounge','flags-signage'],
'multi-location-pride-programs':['employee-kits','retail-window'],
'corporate-pride-month':['team-workshop','event-lounge'],
'employee-pride-kits':['pins-accessories','pride-apparel'],
'corporate-pride-events':['event-lounge','team-workshop'],
'retail-property-programs':['flags-signage','pride-decor'],
'national-pride-rollouts':['employee-kits','flags-signage']
};
export default function InspirationGallery({fr=false,slug}:{fr?:boolean;slug?:string}){
const ids=slug?(complementary[slug]||[]):['team-workshop','retail-window','outdoor-gathering','pins-accessories'];
if(!ids.length)return null;
return <section className={'inspiration-gallery '+(slug?'related-inspiration':'wrap')} aria-label={fr?'Inspirations pour votre programme':'Inspiration for your program'}><div className="section-title"><div><p className="eyebrow">{fr?'IMAGINEZ LES POSSIBILITÉS':'PICTURE THE POSSIBILITIES'}</p><h2>{fr?'Une Fierté':'Your Pride,'} <span className="serif">{fr?'à votre image.':'your way.'}</span></h2></div><p className="section-description">{fr?'Des idées pour les personnes, les espaces et les moments qui comptent.':'Ideas for the people, places and moments that matter to your team.'}</p></div><p className="imagery-disclosure">{fr?'Images de concepts créées par IA pour inspirer votre projet. Elles ne représentent pas des réalisations clients. Les produits et services restent à confirmer.':'AI-created concept imagery to inspire your brief. These are not completed client projects. Products and services are subject to confirmation.'}</p><div className={'inspiration-grid '+(slug?'two-up':'')}>{ids.map(id=>{const p=imageById(id);return <Link key={id} href={(fr?'/fr':'')+p.href} className="inspiration-card"><figure><img src={imageSrc(id)} srcSet={imageSrcSet(id)} sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 600px" alt={fr?p.altFr:p.alt} width="1280" height="853" loading="lazy" decoding="async"/><figcaption><span>{fr?p.titleFr:p.title}</span><span aria-hidden="true">↗</span></figcaption></figure></Link>})}</div></section>;
}
