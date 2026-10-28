import {SiteHeader,SiteFooter} from '@/components/site-chrome';
import ServiceImage from '@/components/service-image';
export function FrenchHeader(){return <SiteHeader fr/>}
export function FrenchFooter(){return <SiteFooter fr/>}
export function FrenchImage({slug,compact=false}:{slug:string;compact?:boolean}){return <ServiceImage slug={slug} compact={compact} fr/>}
