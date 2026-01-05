import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <img
            src="/images/Headshot.png"
            alt="Profile"
            className="rounded-lg w-full"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-5xl font-black italic text-primary mb-4">
            Hi! I'm Kaelan.
          </h2>
          <p className="text-lg text-primary/70 mb-6 leading-relaxed">
            I am a game designer, narrative designer, and media researcher. I
            make games that center tense social dynamics, complex storyworlds,
            and creative collaboration.
          </p>
          <p className="text-lg text-primary/70 mb-6 leading-relaxed">
            I am a PhD candidate in Cinema and Media Studies at the University
            of Chicago, where I am writing my dissertation on playful methods
            for fictional worldbuilding. As a researcher, I am interested in the
            ways that game engines, creative tools and digital platforms shape
            creative processes. I develop my own tools with the goal of helping
            creators think more critically about how and what they make.
          </p>
          <p className="text-lg text-primary/70 mb-6 leading-relaxed">
            I am the creative half of Never Done Games, a nascent indie studio.
            We are currently working on Creatures After Calamity, an unsettling
            monster battler in which your creatures remember how you treat them.
            Creatures After Calamity was selected for the 2023 NYU Game Center
            Incubator and is slated for release next year.
          </p>
          <p className="text-lg text-primary/70 mb-6 leading-relaxed">
            I am also the lead organizer of the Queerness and Games Conference (
            <a
              href="https://www.qgcon.org/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              QGCon
            </a>
            ), a conference/convention at the intersection of LGBTQ+ issues and
            games. The most recent QGCon took place in September 2025 in
            Montreal, Quebec.
          </p>
          <p className="text-lg text-primary/70 mb-6 leading-relaxed">
            If you want to hear more of my thoughts on worldbuilding, you can
            subscribe to my Substack below. If you like my work, please get in
            touch! I’m always open to new opportunities and collaborators.
          </p>
          <div className="flex gap-4">
            <Link to="/portfolio" className="btn-primary">
              View My Work
            </Link>
            <Link to="https://kaelan.substack.com" className="btn-primary">
              Read My Substack
            </Link>
            <Link to="https://kaelandm.itch.io/" className="btn-primary">
              Play My Games
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
