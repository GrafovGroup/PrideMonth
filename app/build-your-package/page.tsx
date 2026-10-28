import {pageMetadata} from '@/lib/seo';
import {Header,Footer} from '../page';
import QuoteForm from './quote-form';
export const metadata=pageMetadata("Request a Corporate Pride Proposal","Build your corporate Pride brief with team sizes, locations, merchandise, events, budget and timing. Submit your requirements to PrideMonth.ca for review.","/build-your-package");
export default function Page(){return <><Header/><main id="main-content" tabIndex={-1} className="form-shell"><p className="eyebrow">LET’S BRING YOUR PLAN TOGETHER</p><h1>Make it <span className="serif">your Pride.</span></h1><p className="lead">Tell us about your team, your space and what you have in mind. Review your brief, then submit it directly for a custom proposal.</p><QuoteForm/></main><Footer/></>}
