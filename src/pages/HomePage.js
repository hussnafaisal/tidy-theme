  import React from 'react';
import Hero from '../components/Hero/Hero';
import TabsSection from '../components/TabsSection/TabsSection';
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';
import AdvancedFeatures from '../components/AdvancedFeatures/AdvancedFeatures';
import ExpertsSection from '../components/ExpertsSection/ExpertsSection';
import PricingSection from '../components/PricingSection/PricingSection';
import CTASection from '../components/CTASection/CTASection';
import Store from '../components/Store/store';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Store />
      <TabsSection />
      <FeatureHighlight />
      <AdvancedFeatures />
      <ExpertsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default HomePage; 