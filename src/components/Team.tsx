import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team member 1 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium mb-1">Ashley Mo</h3>
                <p className="text-accent font-medium mb-3">Co-founder & CEO</p>
                <div className="flex space-x-2 mb-4">
                  <a
                    href="https://www.linkedin.com/in/ashley-mo/"
                    className="text-muted-foreground hover:text-accent"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 2 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-medium mb-1">Aoi Otani</h3>
                <p className="text-accent font-medium mb-3">Co-founder & CTO</p>
                <div className="flex space-x-2 mb-4">
                  <a
                    href="https://www.linkedin.com/in/aoi-otani-ab3a1b205/"
                    className="text-muted-foreground hover:text-accent"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
