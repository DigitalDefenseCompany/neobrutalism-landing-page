import { Button } from '@/components/ui/button'
import { Github, Calendar } from 'lucide-react'

export default function Header() {
  return (
    <header className="inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          AI-Powered Software Verification
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          VeriGood.ai ensures your software is mathematically bug-free with formal verification.
          <br />Join the private beta and secure your software today.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://github.com/apps/verigood-ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full md:w-auto h-10 md:h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl">
              <Github className="mr-2 h-5 w-5" />
              Install Github App
            </Button>
          </a>
          <a href="https://calendly.com/saurabhchalke/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full md:w-auto h-10 md:h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl">
              <Calendar className="mr-2 h-5 w-5" />
              Request a Demo
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
