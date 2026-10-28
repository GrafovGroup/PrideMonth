import {FrenchPage,metadataFr} from '../content';
type Props={params:Promise<{segments:string[]}>};
export async function generateMetadata({params}:Props){return metadataFr('/'+(await params).segments.join('/'));}
export default async function Page({params}:Props){return <FrenchPage path={'/'+(await params).segments.join('/')}/>}
