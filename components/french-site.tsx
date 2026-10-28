import {SiteHeader,SiteFooter} from '@/components/site-chrome';
import {imageFor} from '@/components/service-image';
export function FrenchHeader(){return <SiteHeader fr/>}
export function FrenchFooter(){return <SiteFooter fr/>}
export function FrenchImage({slug,compact=false}:{slug:string;compact?:boolean}){const photo=imageFor(slug);const product=photo.src==='/pride-kit.webp';return <figure className={compact?'service-photo compact':'service-photo'}><img src={photo.src} alt={product?'Sac en toile, épinglettes arc-en-ciel, vêtements blancs et drapeau de bureau réunis dans une trousse de la Fierté':'Espace événementiel en entreprise avec sièges, tables et éléments décoratifs arc-en-ciel'} width="1536" height="1024" loading={compact?'lazy':'eager'} decoding="async"/>{!compact&&<figcaption>{product?'Inspiration pour les trousses':'Inspiration pour les espaces et événements'}<span>Concept illustratif · mandat établi sur devis</span></figcaption>}</figure>}
