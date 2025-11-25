import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Hero from '@/components/hero';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Halvestor - Sharia-Compliant Investing Made Simple"
        description="The first platform designed specifically for Muslim investors. Discover halal investment opportunities with complete transparency and religious compliance."
      />
      <Hero />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
