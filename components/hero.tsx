import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center pt-4 pb-20 sm:pt-6 sm:pb-32">

          <div className="w-full max-w-4xl mx-auto">
            <Image
              src="/images/landing-visual.png"
              alt="Discover and Unleash the Champion Within"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="mt-8 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
            Special Olympics New York provides inclusive opportunities for
            people with intellectual disabilities to discover and unleash the
            champion within. Our athletes experience the thrill of competing in
            authentic sports.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-12 py-8 text-xl font-semibold text-white font-[family-name:var(--font-changa)] hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Link href="/competition/become-an-athlete">
                BECOME AN ATHLETE
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-full border-2 border-gray-300 px-12 py-8 text-xl font-semibold text-black bg-white font-[family-name:var(--font-changa)] hover:!bg-white hover:scale-[1.02] hover:shadow-lg transition-all"
            >
              <Link href="/get-involved">GET INVOLVED</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
