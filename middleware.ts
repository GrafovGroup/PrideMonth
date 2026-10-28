import {NextRequest,NextResponse} from 'next/server';
export function middleware(request:NextRequest){const headers=new Headers(request.headers);headers.set('x-site-language',request.nextUrl.pathname==='/fr'||request.nextUrl.pathname.startsWith('/fr/')?'fr-CA':'en-CA');return NextResponse.next({request:{headers}});}
export const config={matcher:['/((?!api|_next|favicon|.*\\..*).*)']};
