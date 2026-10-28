import type {Metadata} from 'next';
export const siteOrigin='https://pridemonth.ca';
export function pageMetadata(title:string,description:string,path:string):Metadata{const url=siteOrigin+path;const french=path==="/fr"||path.startsWith("/fr/");const en=french?(path.slice(3)||"/"):path;const fr="/fr"+(en==="/"?"":en);return {title,description,alternates:{canonical:url,languages:{'en-CA':siteOrigin+en,'fr-CA':siteOrigin+fr,'x-default':siteOrigin+en}},openGraph:{title,description,url,siteName:'PrideMonth.ca',locale:french?'fr_CA':'en_CA',type:'website',images:[{url:siteOrigin+'/pride-kit.webp',width:1536,height:1024,alt:french?'Concept de trousse de la Fierté pour le personnel':'Illustrative workplace Pride kit'}]},twitter:{card:'summary_large_image',title,description,images:[siteOrigin+'/pride-kit.webp']}};}
export const serviceDescriptions:Record<string,string>={
'corporate-pride-month':'Coordinate employee kits, merchandise, signage and corporate Pride events in one program brief. Request a custom proposal for your Canadian organization.',
'workplace-pride-kits':'Plan workplace Pride kits with pins, flags, apparel and useful employee gifts. Specify team sizes, branding and delivery needs for a custom Canadian quote.',
'pride-merchandise':'Source branded Pride apparel, tote bags, pins and lanyards for your organization. Share quantities, artwork and deadlines to request a merchandise proposal.',
'pride-flags-signage':'Plan Pride flags, banners, window graphics and event signage for Canadian workplaces. Request a quote based on dimensions, branding and installation needs.',
'pride-event-rentals':'Request corporate Pride event rentals and support, including furniture, tents, AV and photo booths. Local availability and logistics are confirmed by quote.',
'pride-decorations':'Plan coordinated Pride decorations for offices, lobbies, storefronts and events. Share your space, installation needs and budget for a custom proposal.',
'multi-location-pride-programs':'Coordinate Pride kits, branding and delivery requirements across Canadian offices, stores and properties. Build one brief for your multi-location rollout.'
};
