import Marquee from 'react-fast-marquee'

export default function Features() {
  const icons = ['star', 'star2', 'star3', 'star4', 'plus', 'pentagon']

  const features = [
    {
      title: 'AI-Powered Specification Generation',
      text: 'Utilize large language models to automatically generate high-quality formal specifications from code and requirements.',
    },
    {
      title: 'CI Integration with SMT Solvers',
      text: 'Integrate with continuous integration pipelines and SMT solvers for automated, seamless verification.',
    },
    {
      title: 'Self-Healing Code Capabilities',
      text: 'Automatically refactor code and adjust specifications to address vulnerabilities and improve security.',
    },
    {
      title: 'Human-in-the-Loop Verification',
      text: 'Enable human-in-the-loop mode for reviewing and refining specifications, ensuring accuracy and reliability.',
    },
    {
      title: 'User-Friendly Interface',
      text: 'An intuitive platform designed for developers of all skill levels, simplifying the formal verification process.',
    },
    {
      title: 'Comprehensive Analytics',
      text: 'Gain valuable insights into the verification process and software security with detailed analytics and reporting.',
    },
  ]

  return (
    <div>
      <div>
        <Marquee
          className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                    VeriGood.ai - Build Bulletproof Software
                  </span>
                  <img
                    className="w-[35px] sm:w-[45px]"
                    src={'/neobrutalism-icons/star3.svg'}
                    alt="star"
                  />
                </div>
              )
            })}
        </Marquee>
      </div>
      <section className="border-t-2 border-t-black bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Features of VeriGood.ai
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="flex flex-col gap-3 rounded-base border-2 border-black bg-white p-5 shadow-base"
                key={i}
              >
                <img
                  className="h-12 w-12 rounded-base"
                  src={`/neobrutalism-icons/${icons[i]}.svg`}
                  alt="icon"
                />

                <h4 className="mt-2 text-xl font-heading">
                  {feature.title}
                </h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
