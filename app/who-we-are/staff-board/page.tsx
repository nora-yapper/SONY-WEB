import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function StaffBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-4 pb-4 sm:pt-6 sm:pb-8">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/staff-board.png"
                alt="Meet our Team"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="mt-8 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
              While the free sports training and competition, in-school
              programming, athlete health initiatives and leadership training we
              provide rely heavily on the efforts of an army of volunteers and
              partners throughout the state, none would be possible without the
              guidance of our board and the dedication of our staff.
            </p>
            <p className="mt-8 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
              Our experienced executive leaders help make Special Olympics New
              York one of the most trusted, successful and sustainable nonprofit
              organizations in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Leadership
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Stacey Hengsterman
                  </h3>
                  <p className="text-primary">President & CEO</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Casey Vattimo
                  </h3>
                  <p className="text-gray-600 mb-2">Senior Vice President</p>
                  <p className="text-sm text-gray-500">External Relations</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Steve Fuller
                  </h3>
                  <p className="text-gray-600 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Program & Competition</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ray Polikoski
                  </h3>
                  <p className="text-gray-600 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">
                    Finance & Administration
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Renee Snyder
                  </h3>
                  <p className="text-gray-600 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Development</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Diane Colonna
                  </h3>
                  <p className="text-gray-600 mb-2">Vice President</p>
                  <p className="text-sm text-gray-500">Downstate Operations</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Nathan Johnson
                  </h3>
                  <p className="text-gray-600 mb-2">Executive Director</p>
                  <p className="text-sm text-gray-500">Unified Sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Board of Directors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ceylane Meyers-Ruff", title: "Chair" },
              { name: "Kan Kotecha", title: "Vice Chair" },
              { name: "Adam Merino", title: "Treasurer" },
              { name: "Ani Mooney", title: "Secretary" },
              { name: "Paul Asaro", title: "Athlete" },
              { name: "Joseph Belluck", title: "" },
              { name: "Maricela Brea", title: "" },
              { name: "Kathy S. Brooks", title: "" },
              { name: "Dr. Abra Caroci", title: "" },
              { name: "Mitch Cohen", title: "" },
              { name: "Robert S. Cohen, Esq.", title: "" },
              { name: "Shaun Cuddeback", title: "" },
              { name: "Anishah Cumber-Taj, Esq.", title: "" },
              { name: "Frank Downing", title: "" },
              { name: "Andrew Guelcher", title: "" },
              { name: "Christina Foti", title: "" },
              { name: "Elias Lambros", title: "" },
              { name: "Kerri Neifeld", title: "" },
              { name: "Todd Nelson", title: "" },
              { name: "Gary Pierre", title: "" },
              { name: "Ron Ward", title: "Athlete & Statewide ALC Chair" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl"
              >
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  {member.title && (
                    <p className="text-primary text-sm">{member.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
