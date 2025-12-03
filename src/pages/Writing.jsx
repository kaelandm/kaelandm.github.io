import { useState } from "react";

function Writing() {
  const intro = `Here you can find a list of my published writing, organized by type. Click any title to read (if available). Some of my essays are unavailable online; contact me if you need a copy.`;
  const [expandedCategories, setExpandedCategories] = useState({
    Journalism: false,
    "Academic Writing": false,
    "Invited Talks": false,
    "Conference Presentations": false,
  });

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const journalism = [
    {
      id: 1,
      title:
        "New Indie Board Games Build Worlds Without Capitalism or Colonialism",
      venue: "The Conversation",
      year: 2021,
      link: "https://theconversation.com/new-indie-board-games-build-worlds-without-capitalism-or-colonialism-154246",
      summary: "A survey of the emerging genre of worldbuilding TTRPGs.",
    },
    {
      id: 2,
      title: "What Does it Mean to be the Creator of a World?",
      venue: "Story Engine Deck Blog (Guest Column)",
      year: 2021,
      link: "https://storyenginedeck.myshopify.com/blogs/news/what-does-it-mean-to-be-the-creator-of-a-world",
      summary: "Ruminating on the nature of creatorship in worldbuilding.",
    },
    {
      id: 23,
      title: "My Waltz into the IFComp",
      venue: "The Imaginary Engine Review",
      year: 2025,
      link: "https://www.tier-review.com/my-waltz-into-the-ifcomp/",
      summary:
        "A seven-year retrospective on my first publicly-released game, The Traveller.",
    },
  ];

  const academic = [
    {
      id: 22,
      title: "Play, Ecology, and Reimagining Worldbuilding",
      venue: "Storyworlds",
      year: "Under Review",
      summary: "Journal article under review.",
    },
    {
      id: 3,
      title:
        "An engine by consent: GBStudio and queer pleasure through (design) restriction",
      venue: "Journal of Gaming & Virtual Worlds",
      link: "https://doi.org/10.1386/jgvw_00115_1",
      year: 2025,
      summary:
        "A queer reading of the game engine GBStudio and its pleasurable design constraints.",
    },
    {
      id: 4,
      title:
        "A Queer OS Powered by the Apocalypse: Feminist Platforms and TTRPG Engines",
      venue: "Analog Game Studies",
      year: 2025,
      link: "https://analoggamestudies.org/2025/07/a-queer-os-powered-by-the-apocalypse-feminist-platforms-and-ttrpg-engines/",
      summary:
        "We can use TTRPGs to imagine feminist futures for digital platforms.",
    },
    {
      id: 5,
      title: "Designing Games for Affect: A Two-Year Post-Mortem",
      venue: "First-Person Scholar",
      year: 2021,
      link: "http://www.firstpersonscholar.com/designing-games-for-affect/",
      summary:
        "A roadmap for game design processes driven by emotion, atmosphere and mood.",
    },

    {
      id: 6,
      title:
        "The Monster Has Kind Eyes: Intimacy and Frustration in The Last Guardian",
      venue: "InVisible Culture",
      year: 2019,
      link: "https://www.invisibleculturejournal.com/pub/the-monster-has-kind-eyes/release/1",
      summary:
        "A close reading of how The Last Guardian creates a sense of intimacy through frustration.",
    },
    {
      id: 7,
      title:
        "The Path that Lies Ahead: Intimacy and Overwhelmedness in The Legend of Zelda: Breath of the Wild",
      venue: "Proceedings of the 2019 DiGRA International Conference",
      year: 2019,
      link: "https://doi.org/10.26503/dl.v2019i1.1109",
      summary:
        "A close reading of intimacy, overwhelmedness and open-world game design in The Legend of Zelda: Breath of the Wild.",
    },
    {
      id: 8,
      title:
        "To Be Beautful is to be Almost Dead: The Erotic Logic of Necrophilia and Mediated Undeadness in Penny Dreadful",
      venue: "Dark Arts Journal",
      year: 2018,
      link: "https://web.archive.org/web/20190801152117/https://thedarkartsjournal.wordpress.com/penny-dreadful/penny-dreadful-necro/'",
      summary:
        "A close analysis of mediation, eroticism and undeadness in the TV series Penny Dreadful.",
    },
    {
      id: 9,
      title:
        "Jamming for Allies: Finding a Formula for Inclusive Co-Design Exploration",
      venue:
        "Proceedings of the 2nd Annual International Conference of Game Jams, Hackathons and Game Creation Events",
      year: 2017,
      summary:
        "A study on inclusive co-design practices in game jams. Co-authored with Rik Eberhardt, Mikael Jakobsson, and Claudia Lo.",
    },
  ];

  const invited = [
    {
      id: 13,
      title:
        "Debugging - Deconstruct Normality, and The Inclusion Quest - The Other Protagonists (Roundtables)",
      venue: "Female Protagonists: International Women Game Makers Week",
      year: 2023,
      summary:
        "I spoke on my experiences as a transgender game developer at the Goethe Institut in Taipei.",
    },
    {
      id: 19,
      title: "How to Build Intimate Worlds ",
      venue: "Worlds and World-building Symposium",
      year: 2018,
      link: "https://calendar.mit.edu/event/worlds_world-building#.Wtw0Vsgh3L8",
      summary:
        "An invited talk on creating a sense of intimacy in interactive worlds.",
    },
  ];

  const conference = [
    {
      id: 24,
      title:
        "Every Game is a World: New Perspectives on Worldbuilding (Roundtable)",
      venue: "Society of Cinema and Media Studies",
      year: 2025,
      summary:
        "A roundtable on the theoretical dimensions of worldbuilding for video games.",
    },
    {
      id: 11,
      title: "GBStudio and Engines by Consent",
      venue: "Digital Games Research Association (DiGRA)",
      year: 2023,
      summary:
        "I argue that GBStudio creates a pleasurable creative experience through design constraints.",
    },
    {
      id: 12,
      title:
        "Other Worlds are Possible: Games as Speculative Research-Creation Processes",
      venue: "Digital Games Research Association (DiGRA)",
      year: 2023,
      summary:
        "I reflect on my game One Hour Worldbuilders as a tool for research-creation.",
    },
    {
      id: 14,
      title:
        "A Queer OS Powered by the Apocalypse: Speculating on Feminist Platforms through Analog Game Engines",
      venue: "Society of Cinema and Media Studies",
      year: 2022,
      summary:
        "I analyze the Powered by the Apocalypse TTRPG engine through the lens of feminist theory.",
    },
    {
      id: 15,
      title: "Collaborative Critical Worldbuilding in 30 Minutes or Less",
      venue: "Wordplay",
      year: 2020,
      link: "https://www.twitch.tv/videos/812129511?collection=UN1IuGeWSRYgBA",
      summary:
        "I provide tools and strategies for building fictional worlds in a more critical way.",
    },
    {
      id: 10,
      title:
        "Playful Worldbuilding: Using Play and Game Mechanics for Better Collaborative Imagination",
      venue: "Narrascope",
      year: 2025,
      link: "https://www.youtube.com/watch?v=6-Wwo1WSa_Q",
      summary:
        "How to use play and game mechanics to facilitate collaborative worldbuilding.",
    },
    {
      id: 16,
      title:
        "The Path that Lies Ahead: Intimacy and Overwhelmedness in The Legend of Zelda: Breath of the Wild",
      venue: "Digital Games Research Association (DiGRA)",
      year: 2019,
      summary:
        "A close analysis of the intimate open world design of The Legend of Zelda: Breath of the Wild.",
    },
    {
      id: 17,
      title: "How to Build Intimate Worlds: A Travelogue from Theory to Praxis",
      venue: "Queerness and Games Conference",
      year: 2018,
      summary:
        "A reflection on intimacy in game design, and the forms of intimacy unique to games.",
    },
    {
      id: 18,
      title:
        "If You Can't Fix What's Broken: The Redemptive Sensation of Movement in Mad Max: Fury Road",
      venue: "Society of Cinema and Media Studies",
      year: 2018,
      summary:
        "A close reading of the sensation of movement in the 2015 film Mad Max: Fury Road.",
    },
    {
      id: 20,
      title: "I'm Taking Care of You: Pharmercy and the Logic of Sensation",
      venue: "Queerness and Games Conference",
      year: 2017,
      link: "https://www.youtube.com/watch?v=kpJCj-BxZx8",
      summary:
        "An analysis of co-operative gameplay and multiplayer intimacy in Overwatch.",
    },
    {
      id: 21,
      title:
        "You and I Have Begun to Blur: Intimacy and Identity in Hannibal and The Iliad",
      venue: "Feasting on Hannibal: An Interdisciplinary Conference",
      year: 2016,
      summary:
        "A close comparison between The Iliad and the television series Hannibal.",
    },
  ];

  const creative = [
    {
      id: 25,
      title: "A Shifting Assemblage",
      venue: "Theoretically in the Gutter: A Manga Essay Collection",
      year: 2016,
      summary:
        "A semilinear comic adaptation of Kathleen Stewart’s Ordinary Affects, published in a manga essay collection edited by Hera Chan and Annie Harrisson.",
    },
    {
      id: 26,
      title: "Humanshape",
      venue: "Experimental Documentary",
      year: 2014,
      link: "https://www.youtube.com/watch?v=s834fnGK_ic",
      summary:
        "An experimental documentary film about the body, objectification, embodiment, and dolls.",
    },
    {
      id: 27,
      title: "Shizuka: Peaceful",
      venue: "Hot Docs Film Festival",
      year: 2010,
      summary:
        "A short documentary film about a local Japanese grocery store in Toronto, Canada.",
    },
  ];

  const parseYear = (y) => {
    if (typeof y === "number") return y;
    if (typeof y === "string") {
      if (y === "Under Review") return Infinity;
      const n = parseInt(y, 10);
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  };

  const sortDesc = (arr) =>
    [...arr].sort((a, b) => parseYear(b.year) - parseYear(a.year));

  const renderList = (items) => (
    <ul className="divide-y divide-primary/10">
      {items.map((item) => (
        <li
          key={item.id}
          className="py-4 flex items-start justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <a
              href={item.link || "#"}
              className="block text-primary hover:text-accent text-base font-semibold not-italic truncate"
            >
              {item.title}
            </a>
            <div className="mt-1 text-sm text-primary/60">
              <span className="font-semibold text-primary">{item.venue}</span>
              <span className="mx-2">•</span>
              <span className="text-primary/60">{item.summary}</span>
            </div>
          </div>

          <div className="flex-shrink-0 text-sm text-primary/80 font-semibold w-20 text-right">
            {item.year}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Writing</h1>
      <p className="text-primary/70 mb-8 max-w-3xl">{intro}</p>

      <section className="mb-12">
        <h2 className="text-2xl font-extrabold italic text-primary mb-4">
          <button
            onClick={() => toggleCategory("Journalism")}
            className="cursor-pointer hover:text-accent transition-colors font-extrabold italic"
          >
            {expandedCategories["Journalism"] ? "v" : ">"} Journalism
          </button>
        </h2>
        {expandedCategories["Journalism"] && renderList(sortDesc(journalism))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-extrabold italic text-primary mb-4">
          <button
            onClick={() => toggleCategory("Academic Writing")}
            className="cursor-pointer hover:text-accent transition-colors font-extrabold italic"
          >
            {expandedCategories["Academic Writing"] ? "v" : ">"} Academic
            Writing
          </button>
        </h2>
        {expandedCategories["Academic Writing"] &&
          renderList(sortDesc(academic))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-extrabold italic text-primary mb-4">
          <button
            onClick={() => toggleCategory("Invited Talks")}
            className="cursor-pointer hover:text-accent transition-colors font-extrabold italic"
          >
            {expandedCategories["Invited Talks"] ? "v" : ">"} Invited Talks
          </button>
        </h2>
        {expandedCategories["Invited Talks"] && renderList(sortDesc(invited))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-extrabold italic text-primary mb-4">
          <button
            onClick={() => toggleCategory("Conference Presentations")}
            className="cursor-pointer hover:text-accent transition-colors font-extrabold italic"
          >
            {expandedCategories["Conference Presentations"] ? "v" : ">"}{" "}
            Conference Presentations
          </button>
        </h2>
        {expandedCategories["Conference Presentations"] &&
          renderList(sortDesc(conference))}
      </section>

      <section>
        <h2 className="text-2xl font-extrabold italic text-primary mb-4">
          <button
            onClick={() => toggleCategory("Creative Publications")}
            className="cursor-pointer hover:text-accent transition-colors font-extrabold italic"
          >
            {expandedCategories["Creative Publications"] ? "v" : ">"} Creative
            Publications
          </button>
        </h2>
        {expandedCategories["Creative Publications"] &&
          renderList(sortDesc(creative))}
      </section>
    </div>
  );
}

export default Writing;
