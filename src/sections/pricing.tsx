import PricingPlan from '@/components/pricing-plan'

export default function Pricing() {
  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-b-2 border-b-black bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Pricing
        </h2>
        <div className="w900:grid-cols-1 w900:w-2/3 w900:mx-auto w500:w-full grid grid-cols-3 gap-8">
          <PricingPlan
            planName="Free"
            description="Ideal for individual developers starting with software verification."
            price="0"
            perks={[
              '1 project',
              'Up to 100 verifications',
              'Basic analytics',
              'Community support',
            ]}
          />
          <PricingPlan
            planName="Pro"
            description="Best for growing teams needing advanced features."
            price="25"
            perks={[
              '25 projects',
              'Up to 10,000 verifications',
              'Self-healing code engine',
              'Advanced analytics',
              '24-hour support response time',
              'Integration with CI/CD tools',
            ]}
            mostPopular
          />
          <PricingPlan
            planName="Enterprise"
            description="Perfect for large enterprises with custom needs."
            price="Contact us"
            perks={[
              'Unlimited projects',
              'Unlimited verifications',
              'Self-healing code engine',
              'Advanced analytics',
              '1-hour, dedicated support response time',
              'Custom integrations',
              'Priority feature requests',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
