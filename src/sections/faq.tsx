import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Marquee from 'react-fast-marquee'

export default function Faq() {
  return (
    <div>
      <section className=" bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>What is VeriGood.ai?</AccordionTrigger>
              <AccordionContent>
                VeriGood.ai is an AI-powered software verification platform that automates the process of ensuring security and reliability in software applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>How does VeriGood.ai improve software security?</AccordionTrigger>
              <AccordionContent>
                VeriGood.ai uses AI models to automatically generate formal specifications, guide verification, and refactor code to fix vulnerabilities, making software security more efficient and accessible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>Who can benefit from using VeriGood.ai?</AccordionTrigger>
              <AccordionContent>
                Software developers, development firms, and large enterprises across various industries can benefit from using VeriGood.ai to enhance the security and reliability of their applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>When is the public beta launch of VeriGood.ai?</AccordionTrigger>
              <AccordionContent>
                The public beta launch of VeriGood.ai is scheduled for July 2024. Join our community to stay updated and be among the first to experience our platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-2 border-y-black bg-white py-3 font-base sm:py-5"
          direction="right"
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
    </div>
  )
}
