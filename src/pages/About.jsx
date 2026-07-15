function CV() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">Curriculum Vitae</h1>

      {/* Flexible Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column (2 parts) */}
        <div className="md:col-span-2 space-y-12" style={{ width: "95%" }}>
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold italic text-primary mb-4">
              Experience
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Lead Narrative Designer and Game Writer{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      Kitten Cup Studio
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">2026</p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Wrote over 40,000 words, including branching questlines,
                    gameplay-reactive dialogue, and two-player co-operative
                    narrative choices, for Capy Castaway.
                  </li>
                  <li>
                    Implemented dialogue and tutorial text in Yarnspinner and
                    Unity.
                  </li>
                  <li>
                    Took ownership of overall narrative design; contributed to
                    UI/UX and game design.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Narrative Designer{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      Kitten Cup Studio
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">2023</p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Contributed to narrative concepting for cozy 3D adventure
                    game, Capy Castaway.
                  </li>
                  <li>
                    Developed a world and concepted characters with the lead
                    writer and creative director, utilizing Miro for synchronous
                    and asynchronous collaborative work.
                  </li>
                  <li>
                    Worked according to pre-production deadlines as part of a
                    10-person studio.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Game Designer{" "}
                    <span className="text-accent-dark text-sm font-light ml-2">
                      Gamma Space Co-op
                    </span>
                  </h3>
                  <p className="text-accent-dark text-sm whitespace-nowrap">
                    2020 - 2022
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent-dark pl-4">
                  <li>Founding member of an independent games co-operative.</li>
                  <li>
                    Designed games for clients in several roles, including
                    programmer, narrative designer, and project manager.
                  </li>
                  <li className="ml-4">
                    ◦ Programmed "Harvest," a mobile-friendly web-based game in
                    Javascript, for a multimedia exhibit in collaboration with
                    Toronto artist Jordan Sook.
                  </li>
                  <li className="ml-4">
                    ◦ Designed the narrative and wrote all content for "Reel Big
                    Phishing Trainer," a web-based educational game for Humber
                    and Seneca College staff.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Research Associate in Worldbuilding{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      City University of Hong Kong
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">2019</p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Participated in ongoing research on worldbuilding with Prof.
                    Damien Charrieras.
                  </li>
                  <li>
                    Designed worldbuilding games and exercises for University
                    students.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Research Assistant{" "}
                    <span className="text-accent-dark text-sm font-light ml-2">
                      MIT Game Lab
                    </span>
                  </h3>
                  <p className="text-accent-dark text-sm whitespace-nowrap">
                    2016-2018
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent-dark pl-4">
                  <li>
                    Contributed to game design projects, workshops and events.
                  </li>
                  <li className="ml-4">
                    ◦ Designed interconnected puzzle chains for a tech company
                    event with 100+ attendees.
                  </li>
                  <li className="ml-4">
                    ◦ Developed a modular character creation system and
                    consulted on design for a digital game, in collaboration
                    with corporate partners.
                  </li>
                  <li>
                    Investigated gaming-related cultural trends through
                    ethnographic research.
                  </li>
                  <li className="ml-4">
                    ◦ Conducted on-site research at events including PAX EAST.
                  </li>
                  <li className="ml-4">
                    ◦ Facilitated an industry focus group on gender inclusivity
                    in collegiate esports.
                  </li>
                  <li>
                    Brainstormed design solutions for gender stereotypes in
                    cooperative video games.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Teaching */}
          <section>
            <h2 className="text-2xl font-bold italic text-primary mb-4">
              Teaching
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Instructor: Critical Worldbuilding{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      University of Chicago
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">2026</p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Designed and taught (as instructor of record) Critical
                    Worldbuilding, a hybrid theory/practice course on the
                    history and methodologies for fictional worldbuilding with
                    12 students.
                  </li>
                  <li>
                    Independently developed a course concept, syllabus, lesson
                    plans, and assignments.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Instructor: Film and the Moving Image{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      University of Chicago
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">2025</p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Served as instructor of record for Film and the Moving
                    Image, an introductory media studies course with 17
                    students.
                  </li>
                  <li>
                    Independently designed a syllabus, lesson plans, and
                    assignments.
                  </li>
                  <li>
                    Collaboratively developed a screening list with instructors
                    of other sections.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Teaching Assistant in New Media{" "}
                    <span className="text-accent-dark text-sm font-light ml-2">
                      University of Chicago
                    </span>
                  </h3>
                  <p className="text-accent-dark text-sm whitespace-nowrap">
                    2022-2024
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent-dark pl-4">
                  <li>
                    Served as TA for two introductory, undergraduate-level
                    courses:
                  </li>
                  <li className="ml-4">
                    ◦ Japanese Animation: The Making of a Global Media with
                    Prof. Thomas Lamarre, 100 students (Fall 2022 and Spring
                    2024).
                  </li>
                  <li className="ml-4">
                    ◦ History of International Cinema, Part III: 1960 - present
                    with Prof. Jim Lastra, 30 students (Spring 2024).
                  </li>
                  <li>
                    Graded assignments, held weekly office hours, and managed a
                    course Slack.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Instructor: Introduction to Game Design{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      OCAD University
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">
                    2020-2021
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Designed and taught Introduction to Game Design as the
                    instructor of record for a total of three semesters.
                  </li>
                  <li>
                    Developed weekly creative exercises to educate on game
                    design fundamentals.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Instructor: Worldbuilding Intensive{" "}
                    <span className="text-accent-dark text-sm font-light ml-2">
                      Dames Making Games Toronto
                    </span>
                  </h3>
                  <p className="text-accent-dark text-sm whitespace-nowrap">
                    2021
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent-dark pl-4">
                  <li>
                    Designed and taught a four-week intensive course on
                    worldbuilding methods for fifteen participants with DMG, a
                    Toronto-based community organization for marginalized game
                    developers.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service */}
          <section>
            <h2 className="text-2xl font-bold italic text-primary mb-4">
              Service & Volunteer Work
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Lead Co-Organizer{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      Queerness and Games Conference
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">
                    2019 - present
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Organizer of the Queerness and Games Conference (QGCon), a
                    conference/convention hybrid for LGBTQ+ gamemakers and
                    scholars.
                  </li>
                  <li>
                    Organized events and led fundraising efforts for QGCon 2020
                    (canceled due to COVID-19).
                  </li>
                  <li>
                    Led the organization of QGJam, a two-week game jam inspired
                    by queer theory.
                  </li>
                  <li>
                    Lead organizer for QGCon 2025, held in September 2025 in
                    Montreal, Canada.
                  </li>
                  <li>
                    Managed a team of 10 organizers and over 20 volunteers, for
                    a conference with 300 attendees, featuring talks, workshops,
                    and a convention-style games arcade.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    English Teacher{" "}
                    <span className="text-accent-dark text-sm font-light ml-2">
                      Teen's Key
                    </span>
                  </h3>
                  <p className="text-accent-dark text-sm whitespace-nowrap">
                    2015
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent-dark pl-4">
                  <li>
                    Volunteered as an English teacher for Teen's Key, a
                    non-profit organization providing support for young mothers
                    and vulnerable young women in Hong Kong.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-primary">
                    Founder and President, McGill Students Mafia Club{" "}
                    <span className="text-accent text-sm font-light ml-2">
                      McGill University
                    </span>
                  </h3>
                  <p className="text-accent text-sm whitespace-nowrap">
                    2013 - 2015
                  </p>
                </div>
                <ul className="text-primary/70 text-sm mt-2 ml-4 space-y-1 border-l-2 border-accent pl-4">
                  <li>
                    Founded the McGill Students Mafia Club, a student
                    organization dedicated to the social deduction game of
                    Mafia.
                  </li>
                  <li>Hosted weekly game nights with 20+ attendees.</li>
                  <li>Grew the club to a membership of over 100 students.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Narrower) */}
        <div className="space-y-12">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold italic text-primary mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-primary">
                  PhD in Cinema and Media Studies
                </h3>
                <p className="text-accent text-sm">University of Chicago</p>
                <p className="text-accent text-xs">2020 - present</p>
                <p className="text-primary/70 text-sm mt-1">
                  <b>Dissertation:</b> Experiments in Playful Worldbuilding
                  <br />
                  <b>Committee:</b> Thomas Lamarre, Marc Downie, Patrick Jagoda
                  (chair)
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary">
                  MSc in Comparative Media Studies
                </h3>
                <p className="text-accent-dark text-sm">
                  Massachusetts Institute of Technology
                </p>
                <p className="text-accent-dark text-xs">2016 - 2018</p>
                <p className="text-primary/70 text-sm mt-1">
                  <b>Thesis:</b> Intimate Worlds: Reading for Intimate Affects
                  in Video Games
                  <br />
                  <b>Advisor:</b> Eugenie Brinkema
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary">
                  BA with Honors in East Asian Studies
                </h3>
                <p className="text-accent text-sm">McGill University</p>
                <p className="text-accent text-xs">2012 - 2016</p>
                <p className="text-primary/70 text-sm mt-1">
                  <b>Thesis:</b> Belonging and Tactical Contribution: A
                  Comparison of Gamic Feeling in Pokémon and Smogon University
                  <br />
                  <b>Advisor:</b> Thomas Lamarre
                </p>
              </div>
            </div>
          </section>
          {/* Awards */}
          <section>
            <h2 className="text-2xl font-bold italic text-primary mb-4">
              Awards & Scholarships
            </h2>
            <ul className="space-y-2 text-primary/70 text-sm ml-4">
              <li>
                <b>2023:</b> NYU Game Center Incubator, New York University
              </li>
              <li>
                <b>2021:</b> Brainmind Residency
              </li>
              <li>
                <b>2020:</b> Neubauer Fellowship, University of Chicago
              </li>
              <li>
                <b>2015:</b> Sir William MacDonald Scholarship, McGill
                University
              </li>
              <li>
                <b>2012:</b> J.W. McConnell Scholarship, McGill University
              </li>
            </ul>
          </section>

          {/* Skills, Languages, Hobbies */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold italic text-primary mb-3">
                Skills
              </h3>
              <div className="space-y-2">
                {[
                  {
                    category: "Game Design",
                    desc: "I develop unconventional games and playful social experiences in independent and team-based contexts.",
                  },
                  {
                    category: "Narrative Design",
                    desc: "I craft intricate branching stories and world systems for games and interactive media.",
                  },
                  {
                    category: "Research & Analysis",
                    desc: "I investigate cultural trends and produce scholarly work on games and media through ethnographic and textual methods.",
                  },
                  {
                    category: "Teaching & Facilitation",
                    desc: "I design and deliver courses and workshops that cultivate creative thinking and analytical skills.",
                  },
                  {
                    category: "Creative Coding",
                    desc: "I am proficient in Javascript and familiar with Python and C#. I have experience with game engines including Unity, Godot, and GBStudio.",
                  },
                ].map((skill) => (
                  <div key={skill.category} className="mb-2">
                    <span className="text-accent text-l font-extrabold mb-1">
                      {skill.category}
                    </span>
                    <p className="text-primary/70 text-sm">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold italic text-primary mb-3">
                Languages
              </h3>
              <ul className="space-y-1 text-primary/70 text-sm">
                <li>English (Fluent)</li>
                <li>Spanish, Japanese (Intermediate)</li>
                <li>French, Mandarin (Basic)</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-lg font-bold italic text-primary mb-3">
                Hobbies
              </h3>
              <p className="text-primary/70 text-sm">
                Sewing & garment construction, hiking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
