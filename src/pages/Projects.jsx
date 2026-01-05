import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Portfolio() {
  const availableTags = [
    "Digital",
    "Analog",
    "Writer",
    "Programmer",
    "Artist",
    "Designer",
    "Released",
    "Forthcoming",
  ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "The Archipelago",
      year: 2022,
      description:
        "A melancholy narrative game about making tea and watching the world change.",
      image: "/images/The_Archipelago1.png",
      images: [
        "/images/The_Archipelago2.png",
        "/images/The_Archipelago3.png",
        "/images/The_Archipelago4.png",
        "/images/The_Archipelago5.png",
        "/images/The_Archipelago6.png",
      ],
      link: "https://store.steampowered.com/app/2169730/The_Archipelago/",

      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Archipelago is a quiet narrative game about brewing tea: making
            what we can from the ruins of what we loved. The Archipelago is
            available on{" "}
            <b>
              <a
                href="https://store.steampowered.com/app/2169730/The_Archipelago/"
                style={{ fontWeight: "bold", color: "#a98b30" }}
              >
                Steam
              </a>
            </b>{" "}
            and{" "}
            <a
              href="https://kaelandm.itch.io/the-archipelago"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              itch.io
            </a>
            .
          </p>
          <p style={{ padding: 5 }}>
            Once, this place was one island, a city floating in the sky. Thirty
            years ago it broke apart into dozens of pieces. Children lost their
            parents, lovers were separated, and much of the city fell beneath
            the clouds. Those who remain can communicate only through the
            Messengers: flying mail deliverers with lofty ambitions of their
            own…
          </p>
          <p style={{ padding: 5 }}>
            The player makes tea for whoever needs it, and in exchange can
            listen in on their conversations. Depending on the flavours in the
            brew, different people show up to the café, giving players the
            chance to witness different interactions and story arcs.
          </p>
          <p style={{ padding: 5 }}>
            I developed The Archipelago for the{" "}
            <a
              href="https://www.brainmind.art/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Brainmind Residency
            </a>
            , a four-month long remote residency created by YouTuber Harry
            “Hbomberguy” Brewis. I wrote over 20,000 words of content in Ink,
            including branching pathways dependent on player interaction and tea
            choice. I also developed all of the art for the game, including
            animations. I am working closely with Andrew Tran, who programmed
            the game in Unity and composed the music.
          </p>
        </div>
      ),
      tags: ["Digital", "Writer", "Artist", "Released"],
    },
    {
      id: 2,
      title: "Reel Big Phishing Trainer",
      year: 2021,
      description:
        "A web game developed to teach Humber and Seneca College staff how to avoid phishing scams.",
      image: "/images/Reel_Big_Phishing_Trainer1.png",
      images: [
        "/images/Reel_Big_Phishing_Trainer2.png",
        "/images/Reel_Big_Phishing_Trainer3.png",
        "/images/Reel_Big_Phishing_Trainer4.png",
        "/images/Reel_Big_Phishing_Trainer5.png",
      ],
      link: "#",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Reel Big Phishing Trainer is an educational game created by the
            Gamma Space Co-op for Humber and Seneca Colleges in Toronto.
            Designed to teach College faculty and staff how to detect and report
            phishing scams, the game takes place at the fictional Husen College.
            Players navigate a stylized email interface and report or reply to
            emails from colleagues and strangers.
          </p>
          <p style={{ padding: 5 }}>
            I served as the narrative designer and writer for this project in
            2021 and 2022. In 2021, I outlined and wrote over two dozen emails,
            as well as reply trees. I communicated with the client to ensure the
            tone and content of each email fit with their vision for the
            project. I drew from my own experience working in University
            settings to craft content that would feel familiar and funny to the
            staff at Humber/Seneca.
          </p>
          <p style={{ padding: 5 }}>
            I developed this game as part of the Gamma Space Co-op, including an
            artist, programmer and a producer. I worked in close communication
            with the team to complete the game within the tight time limit
            required by our client. We completed and delivered this project in
            about three months.
          </p>
          <p style={{ padding: 5 }}>
            In 2022, we produced a second season of content that followed up on
            the characters and storyworld of the original game, while remaining
            approachable for new players. Once again I designed the narrative,
            implemented new mechanics according to the revised pedagogical goals
            of the client, and provided all of the writing - about thirty emails
            plus reply trees.{" "}
          </p>
        </div>
      ),
      tags: ["Digital", "Writer", "Released"],
    },
    {
      id: 3,
      title: "Bilgebirds",
      year: 2019,
      description:
        "A turn-based naval strategy game, with birds piloting the ships.",
      image: "/images/Bilgebirds1.png",
      images: ["/images/Bilgebirds2.gif", "/images/Bilgebirds3.gif"],
      link: "https://rosalindmc.itch.io/bilgebirds",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Bilgebirds is a turn-based naval strategy game in which you play
            seven spunky birds defending their archipelago from a host of
            Krakens. Players take command of a fleet of ships with deep
            strategic elements including wind speed, currents and
            procedurally-generated landscapes. Ships are crewed with a colorful
            cast of characters, from the eccentric Parrot to the sarcastic Crow.
          </p>
          <p style={{ padding: 5 }}>
            Bilgebirds began at a weekend-long game jam I organized in October
            2018 at the Social Media and Collaboration Lab at OCAD University,
            in which we generated a prompt using InspiroBot. I continued
            developing the game with Rosalind Chapman until June 2019, when we
            debuted the game at Bit Bazaar.
          </p>
          <p style={{ padding: 5 }}>
            Rosalind programmed the game in Gamemaker Studio 2 and took point on
            the game design. I drew all the art, designed the UI and characters,
            assisted with combat design and mechanics, and wrote the dialogue,
            including over two dozen barks.
          </p>
        </div>
      ),
      tags: ["Digital", "Writer", "Artist", "Released"],
    },
    {
      id: 4,
      title: "The Traveller",
      year: 2017,
      description: "A branching-narrative time-travelling visual novel.",
      image: "/images/The_Traveller1.png",
      images: ["/images/The_Traveller2.png", "/images/The_Traveller3.png"],
      link: "http://traveller-game.com/",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Traveller is a branching narrative visual novel. In this game
            you play as an unnamed traveller wandering through space in search
            of her daughter. Depending on which paths you choose, you will
            experience different moments in the history of three different
            planets. Experiencing the narrative fully will require at least
            three playthroughs.
          </p>
          <p style={{ padding: 5 }}>
            I designed a complex branching narrative system and wrote over
            40,000 words of dialogue for this game. I also contributed all of
            the art assets.{" "}
            <a
              href="https://willyvvu.github.io/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Willy Wu
            </a>{" "}
            programmed the game and Paul Geldart, AKA{" "}
            <a
              href="https://astrolope.bandcamp.com/album/astrolope"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Astrolope
            </a>
            , composed the music.
          </p>
          <p style={{ padding: 5 }}>
            <a
              href="https://ifdb.org/viewgame?id=w7og4qbxr2osac"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              The Traveller
            </a>{" "}
            was featured in the Interactive Fiction Competition (IFComp) in
            2017. In 2025,{" "}
            <a
              href="https://www.tier-review.com/my-waltz-into-the-ifcomp/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              I wrote a retrospective for the Imaginary Engine Review
            </a>{" "}
            reflecting on both the game and the competition.
          </p>
        </div>
      ),
      tags: ["Digital", "Writer", "Artist", "Released"],
    },
    {
      id: 5,
      title: "Harvest",
      year: 2021,
      description:
        "A browser-based grid puzzle game developed in collaboration with Toronto artist Jordan Sook.",
      image: "/images/Harvest1.png",
      images: ["/images/Harvest2.png", "/images/Harvest3.png"],
      link: "https://harvestthefuture.art/",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Harvest is a web-based grid puzzle game in which players tend to a
            community garden and choose between supporting their artistic
            neighbourhood or reaping individual benefits. Players are at first
            encouraged to plant neat, segregated rows of purebred flowers, for
            which they receive awards and accolades from bureaucratic officials.
            But if they instead mix and match plants, they can create
            techno-plant crossbreeds that revitalize the community center and
            inspire its members to create together.{" "}
          </p>
          <p style={{ padding: 5 }}>
            Harvest has an explicit political message: grassroots community arts
            organizations often suffer under the weight of bureaucratic grants
            and institutionalized arts creation pipelines. Often, artists must
            choose between serving their community and getting paid or
            recognized. We were inspired by real events: this game was created
            in the wake of the eviction of the Toronto Media Arts Centre, a
            collective of media and interactive arts organizations, from a
            downtown location they had occupied for over five years. The loss of
            TMAC has been felt intensely by the Toronto independent game dev
            community and we chose to express our anger and grief through
            creative work.
          </p>
          <p style={{ padding: 5 }}>
            I worked as the lead designer and programmer for this project,
            completed in about a month between June and July 2021. I created
            this game with the Gamma Space co-op, a nascent game design
            co-operative, in collaboration with media artist{" "}
            <a
              href="https://www.jordansook.com/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Jordan Sook.
            </a>
          </p>
          <p style={{ padding: 5 }}>
            I programmed Harvest start to finish in P5.js, a Javascript library
            for creative coding. I optimized the game to work on both desktop
            (on Firefox, Google chrome and Safari) and mobile devices. I
            implemented a scalable system for narrative elements and plant
            combinations. I also programmed UI, sound and visual interactions in
            dialogue with a multi-disciplinary creative team.
          </p>
          <p style={{ padding: 5 }}>
            On the design side, Harvest presented a unique challenge: we had to
            represent through gameplay the beauty and messiness of grassroots
            community work, but in a small-scale project that could be scoped
            within a month. We chose to represent the tension between community
            work and municipal bureaucracies through a division between points
            value and aesthetic value. If the player chooses to plant purebred
            flowers for city projects, they earn points, titles and accolades,
            but the community center remains dilapidated and the local artists
            are left to fend for themselves. Cultivating techno-plants does not
            award points, but does reward the player with new and interesting
            flower varieties, a repaired and vibrant community center, and novel
            interactions with community members.
          </p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Released"],
    },
    {
      id: 6,
      title: "The Faceless City",
      year: 2020,
      description:
        "A Godot minigame in which you play a monster who steals faces.",
      image: "/images/The_Faceless_City1.png",
      images: ["/images/The_Faceless_City2.jpg"],
      link: "https://kaelandm.itch.io/the-faceless-city",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Faceless City is a short game inspired by Flash minigames in
            which you play as a monstrous curse who steals faces from the
            inhabitants of a city. I created this game in April 2021 as part of
            the first Toronto Comic Arts Festival Comics X Games Jam, in
            collaboration with{" "}
            <a
              href="https://ericalee.cc/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              artist Erica Lee.
            </a>
          </p>
          <p style={{ padding: 5 }}>
            I programmed this game in the Godot engine, and though I have worked
            in Godot before, this was my first time participating in a game jam
            as a programmer. I am proud of how I scoped the game, communicated
            with my collaborator, and solved programming problems on the go.
          </p>
          <p style={{ padding: 5 }}>
            We began our design process with conceptualization using my game{" "}
            <a
              href="https://kaelandm.itch.io/one-hour-worldbuilders"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              One Hour Worldbuilders,
            </a>{" "}
            and came up with the core concept, mechanics and aesthetics based on
            the world we built. I am interested in the potential of
            worldbuilding-led game design for game jams, and hope to develop
            more projects in this way in the future!
          </p>
        </div>
      ),

      tags: ["Digital", "Programmer", "Released"],
    },
    {
      id: 7,
      title: "Dear Lighthouse",
      year: 2020,
      description:
        "A point-and-click narrative game about caring for people from a distance.",
      image: "/images/Dear_Lighthouse1.gif",
      images: ["/images/Dear_Lighthouse2.png", "/images/Dear_Lighthouse3.png"],
      link: "https://kaelandm.itch.io/dear-lighthouse",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Dear Lighthouse was my submission to Jamdemic 2020, a month-long
            game jam based on itch.io that I organized in response to the
            COVID-19 pandemic. I wanted to make a game that reflected both the
            deep loneliness and the profound sense of care I felt for people in
            my community as we isolated ourselves from each other. The work of a
            lighthouse keeper, who takes a faraway post and rarely sees the
            results of their work, but who keeps people safe and comforted, was
            an apt metaphor.
          </p>
          <p style={{ padding: 5 }}>
            I took the lead with initial conceptual work, programmed the game in
            P5.js, and did all of the artwork. This was my first time
            programming for a game jam, and I am proud of the result!
          </p>
          <p style={{ padding: 5 }}>
            <a
              href="https://www.tristanbwillis.com/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Tristan Willis
            </a>{" "}
            did all of the writing, including a number of letters that the
            keeper receives randomly throughout the game. Andrew Tran designed
            the eerie soundscape.
          </p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Released"],
    },
    {
      id: 8,
      title: "Puzzle Party Project",
      year: 2018,
      description:
        "A puzzle-themed ARG developed for a party for a large tech company in Cambridge, MA.",
      image: "/images/Puzzle_Party_Project1.png",
      images: ["/images/Puzzle_Party_Project2.png"],
      link: "#",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            As part of my work as a Research Assistant at the MIT Game Lab, I
            developed several puzzle chains for a puzzle-themed party with over
            two hundred guests at a tech company in Cambridge, MA. Each chain
            featured three to four puzzles united by a theme (for example,
            number puzzles or grid-based puzzles) and a “meta puzzle” that would
            require information from the other puzzles in that chain.
          </p>
          <p style={{ padding: 5 }}>
            I also developed a secret puzzle chain with clues and information
            located throughout the party venue. Intrepid party-goers who
            followed the clues and solved the puzzles would be rewarded with
            pieces of a narrative that answered key questions about the theme of
            the party itself.
          </p>
          <p style={{ padding: 5 }}>
            I designed, revised and play-tested puzzles for difficulty,
            researched puzzle design, and designed the secret puzzle chain from
            beginning to end, including graphic design elements for clues.
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Released"],
    },
    {
      id: 9,
      title: "Windowpane",
      year: 2019,
      description:
        "A microgame about being bored on a bus, developed for the Meditations project",
      image: "/images/Windowpane1.png",
      link: "https://kaelandm.github.io/projects/windowpane/windowpane.html",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            In late 2018 I was invited to participate in{" "}
            <a
              href="https://meditations.games/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Meditations,
            </a>{" "}
            a collection of daily microgames by indie devs assembled by Jupiter
            Hadley and Rami Ismail. Each microgame would create a five
            minute-long meditative experience related to the day on which it was
            released.
          </p>
          <p style={{ padding: 5 }}>
            I chose March 28th. On March 28th, 2018, I took an important – and
            nervewracking – bus trip. Windowpane, in which the player draws on a
            fogged-over bus window as the world goes by outside, is inspired by
            that experience.
          </p>
          <p style={{ padding: 5 }}>
            I designed the game and the soundscape, produced the visuals, and
            collaborated on the programming (in P5.js) with{" "}
            <a
              href="https://willy-vvu.github.io/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Willy Wu,
            </a>{" "}
            who produced the incredible window graphics.
          </p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Released"],
    },
    {
      id: 10,
      title: "Death and the Maiden",
      year: 2019,
      description: "A a browser-based, death metal-inspired action minigame.",
      image: "/images/Death_and_the_Maiden1.png",
      images: ["/images/Death_and_the_Maiden2.png"],
      link: "https://kaelandm.github.io/projects/death-maiden.html",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Death and the Maiden is a browser-based game made in p5.js over the
            course of a few months in 2018. The player controls a giant skeleton
            hovering over a woman, whom it must protect from danger in the form
            of fireballs that threaten to kill her. It began as an excuse to
            improve my spriting skills and return to creative work after
            finishing my thesis; it developed into a way to exercise my
            programming muscles as well. The result is an aesthetic experience
            more than anything else – I paid attention to the difficulty curve,
            but I focused on making interesting visuals and cultivating a dark
            atmosphere rather than innovative gameplay.
          </p>
          <p style={{ padding: 5 }}>
            I did the spriting (including a font, logo, backgrounds, and
            character animations), programming and game design. Andrew Tran
            composed and arranged the excellent music.
          </p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Artist", "Released"],
    },
    {
      id: 11,
      title: "The Final Frontier",
      year: 2018,
      description: "A browser-based explorable solar system generator.",
      image: "/images/The_Final_Frontier1.png",
      link: "https://kaelandm.github.io/projects/space.html",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Final Frontier is a randomly-generated 3D space exploration
            game/experience, programmed by myself in p5. The game generates a
            random number of stars and planets of different sizes and colours,
            some of which have moons or rings. The program also features a
            mini-map, an info panel, and a planet name generator. It is intended
            both as a fun exploration game and as a useful tool for anyone who
            needs a large number of planets created in a short time (for
            example, tabletop GMs).
          </p>
          <p style={{ padding: 5 }}></p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Released"],
    },
    {
      id: 24,
      title: "Worldbot",
      year: 2020,
      description: "A discord bot game for collaborative worldbuilding.",
      image: "/images/Worldbot2.png",
      images: ["/images/Worldbot1.png", "/images/Worldbot3.png"],
      link: "https://atranimal.github.io/worldbot-art/",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            I developed Worldbot in 2020 as a themed commission for Remote
            Realities, a multimedia art exhibit co-presented by Trinity Square
            Video and Dames Making Games with the theme of playing in isolation.
            In 2021, Worldbot was featured in the arts magazine
            <a
              href="https://hyperallergic.com/how-artists-used-the-discord-app-to-build-community-during-covid-19/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Hyperallergic.
            </a>
          </p>
          <p style={{ padding: 5 }}>
            Worldbot uses a branching structure of prompts to guide players
            through a secretive collaborative process. In each round, players
            respond anonymously in writing to Worldbot’s prompts; Worldbot
            reveals their written passages; in voice chat discussions, players
            must hide which passages they wrote. In the process of obfuscating
            their relationships to their own creative work, players must take on
            each other’s voices and ideas.
          </p>
          <p style={{ padding: 5 }}>
            During the Remote Realities residency, I prototyped Worldbot and ran
            a play session with Maggie Haughey, Seb Pines, Eryn Raimondo, and
            Arundhati Sriraman. I developed the world they made into a small
            web-based artwork in collaboration with Andrew Tran.
          </p>
          <p style={{ padding: 5 }}>
            My plans to release Worldbot publicly were waylaid by the COVID-19
            pandemic, but I have incorporated aspects of its structure,
            including its logo, into my worldbuilding web application,
            Planetary.
          </p>
        </div>
      ),
      tags: ["Digital", "Designer", "Artist", "Released"],
    },
    {
      id: 12,
      title: "One Hour Worldbuilders",
      year: 2019,
      description: "A collaborative worldbuilding card game.",
      image: "/images/One_Hour_Worldbuilders1.png",
      images: [
        "/images/One_Hour_Worldbuilders2.png",
        "/images/One_Hour_Worldbuilders3.jpeg",
        "/images/One_Hour_Worldbuilders4.jpg",
      ],
      link: "https://kaelandm.itch.io/one-hour-worldbuilders",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            As part of my work at the City University of Hong Kong researching
            worldbuilding, I examined games and rule structures designed to help
            people collaboratively build worlds. I couldn’t find any
            worldbuilding games that were portable, easy to learn, and playable
            in a short time. So I made One Hour Worldbuilders: a cooperative
            card game for four players designed to help you collaboratively
            build a world in under an hour.
          </p>
          <p style={{ padding: 5 }}>
            The game consists of a series of prompts that players read and
            respond to while asking each other questions and making
            clarifications. One challenge I noted early in development is that
            given such a short time, it’s easy for players to fall back on
            familiar tropes and genres, resulting in worlds that feel derivative
            and samey. To get away from this, I have players begin with Theme
            cards, which prompt them to create a world based on ideas, feelings
            and thoughts from their own lives. In this way, the theme cards also
            function as an icebreaker and a bridge from the social setting into
            a more creative space.
          </p>
          <p style={{ padding: 5 }}>
            Since I printed the first edition in 2019, One Hour Worldbuilders
            has been played around the world, by activists, journalists,
            students, children, hobbyists, and myriad creative types. It has
            been featured in workshops at the Goethe Institut Taipei, the Ford
            Foundation, and M+ Museum in Hong Kong.
          </p>
          <p style={{ padding: 5 }}>
            The second print edition of the game is forthcoming. Follow my itch
            page for updates!
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Writer", "Released"],
    },
    {
      id: 13,
      title: "The Garrison and the Gardiner",
      year: 2021,
      description:
        "A two-player game designed for on-site play at the Bentway in Toronto. Commissioned by the Bentway.",
      image: "/images/The_Garrison_and_the_Gardiner1.png",
      images: [
        "/images/The_Garrison_and_the_Gardiner2.png",
        "/images/The_Garrison_and_the_Gardiner3.png",
      ],
      link: "https://play.thebentway.ca/experience/the-garrison-and-the-gardiner/",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Garrison and the Gardiner is a two-player roleplaying game in
            which you stage a conversation between the Garrison Creek, a buried
            river that runs through downtown Toronto, and the Gardiner
            Expressway, an elevated highway that has shaped the development of
            the city since it was built in the 1950s. The game is meant to be
            played at the Bentway, an art venue under the Gardiner Expressway;
            specifically, players should play the game at the place where the
            Garrison and the Gardiner meet.
          </p>
          <p style={{ padding: 5 }}>
            I created this game as an independent commissioned project for{" "}
            <a
              href="https://thebentway.ca/"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              the Bentway‘s
            </a>{" "}
            Playing in Public summer exhibition in 2021. The criteria for this
            project were very strict: designers had to make games playable
            without any props or objects, and the instructions had to be 200
            words or less. Furthermore, I wanted my game to express my deep
            frustration and sadness at the gentrification of Toronto’s downtown
            core. The decision to pave over the Garrison Creek, and later to
            build a highway bisecting the city from Lake Ontario, has had an
            immense, immeasurable impact on the shape and feeling of Toronto as
            a city. By inhabiting the “minds” of these structures, I hope that
            players can better understand the breadth and timescale of this
            impact, and perhaps imagine what the city might have been like had
            other choices been made.
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Writer", "Released"],
    },
    {
      id: 14,
      title: "City Planning Department",
      year: 2019,
      description: "A secret-role city-building game for 3-6 players.",
      image: "/images/City_Planning_Department1.png",
      images: [
        "/images/City_Planning_Department2.png",
        "/images/City_Planning_Department3.png",
      ],
      link: "https://kaelandm.itch.io/city-planning-department",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            In the Summer of 2018, I organized and led a Game Jam based at my
            family’s cottage near Wasaga Beach, Ontario. I designed the jam
            around the goal of creating a game to evoke a particular mood, which
            would be chosen at the event. The mood we chose was disorganization.
            We were determined to create a game not about organizing a
            disordered system — think <i>Tetris</i>, <i>Super Mario Sunshine</i>
            , or
            <i> Civilization</i> — but about finding pleasure in disorganization
            and its inevitability.
          </p>
          <p style={{ padding: 5 }}>
            The result was City Planning Department. In this 3-6 player oneshot
            tabletop game, players collaborate to design a city and juggle the
            interests of the group with their own secret goals and motivations.
            We were surprised to find that beyond being fun, CPD had a lot to
            say about the complexities of the political process.
          </p>
          <p style={{ padding: 5 }}>
            City Planning Department has been played on the actual-play podcast{" "}
            <a
              href="https://friendsatthetable.net/the-road-to-palisade-20-city-planning-department"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              Friends at the Table
            </a>
            and featured in a{" "}
            <a
              href="https://www.youtube.com/watch?v=KQRcOGRGblY"
              style={{ fontWeight: "bold", color: "#a98b30" }}
            >
              video essay about city-building TTRPGs by A.A. Voigt.
            </a>
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Writer", "Artist", "Released"],
    },
    {
      id: 15,
      title: "The Shukaku Game",
      year: 2020,
      description:
        "A two-player puzzle game in which you make a cup of tea and transform to accommodate its flavors.",
      image: "/images/The_Shukaku_Game1.png",
      link: "https://kaelandm.itch.io/the-shukaku-game",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            The Shukaku Game is a short puzzle game for two players in which you
            brew a cup of tea and transform to accommodate its flavours. Players
            take on the role of Shukaku, a Tanuki who masquerades as a human
            monk in order to serve delicious tea.
          </p>
          <p style={{ padding: 5 }}>
            The Shukaku Game combines puzzle, roleplaying and taste-based
            mechanics to create a unique tabletop experience. This game is
            GM-less, requires no prep, and is playable in about 30 minutes. It
            is easy to learn and great for people with minimal board game
            experience!
          </p>
          <p style={{ padding: 5 }}>
            I created this game as part of a course at the University of Chicago
            called “Yokai Media” taught by Professor Thomas Lamarre. At the
            beginning of the course, we each chose a Yokai, or Japanese spirit,
            to study and work with throughout the entire semester, as we learned
            about the history of Yokai and the roles they play in Japan’s media
            landscape. My goal with this project was to design a game that would
            reflect my Yokai not only on the level of representation, but
            through the game mechanics.
          </p>
          <p style={{ padding: 5 }}>
            I was inspired by the way that descriptions of taste and
            descriptions of aesthetics often sound similar: words like
            “flowery,” “zesty” and “overpowering” can be used for food or
            fashion to equally evocative effect. The Shukaku Game leverages this
            by asking players to use these words both to determine the flavours
            of their brew, and to transform themselves through fashion. The
            result is a quirky but very fun little game!
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Released"],
    },
    {
      id: 16,
      title: "Rendezvous",
      year: 2019,
      description:
        "A two-player RPG about meeting after a long time. Developed for the 200 Word RPG Challenge.",
      image: "/images/Rendezvous1.png",
      link: "https://200wordrpg.github.io/2019/rpg/finalist/2019/10/12/Rendezvous.html",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Rendezvous is a two-player oneshot tabletop RPG designed as part of
            the 2019 200 Word RPG Challenge. I created it with my partner,
            Andrew Tran, to play during a period of long distance. The game
            stages an encounter between two characters who have not seen each
            other in a long time. Rendezvous was named one of only 37 finalists
            for the 2019 competition.
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Writer", "Released"],
    },
    {
      id: 17,
      title: "Space Pitch",
      year: 2017,
      description: "A four-player story-building card game.",
      image: "/images/Space_Pitch1.png",
      images: [
        "/images/Space_Pitch2.png",
        "/images/Space_Pitch3.png",
        "/images/Space_Pitch4.png",
      ],
      link: "#",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Space Pitch is a co-operative narrative building sci-fi card game.
            Players work together to place and order plot points involving
            randomized characters, with the goal of making a coherent science
            fiction story. I designed this game independently for a course on
            Interactive Narrative at MIT.
          </p>
        </div>
      ),
      tags: ["Analog", "Designer", "Released"],
    },
    {
      id: 18,
      title: "Tech Company Game Project",
      year: 2017,
      description:
        "A game/social behavior experiment developed with a large tech company in Cambridge, MA.",
      image: "/images/Tech_Company_Game_Project1.png",
      images: [
        "/images/Tech_Company_Game_Project2.png",
        "/images/Tech_Company_Game_Project3.png",
        "/images/Tech_Company_Game_Project4.png",
      ],
      link: "#",
      tags: ["Digital", "Artist"],
    },
    {
      id: 19,
      title: "Tournament Winner",
      year: 2025,
      description:
        "A narrative game about entering a fighting game tournament.",
      image: "/images/Tournament_Winner1.png",
      link: "#",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            In Tournament Winner, you play an up-and-coming competitive player
            of a fictional fighting game. Your goal is to win your city's weekly
            tournament in as few weeks as possible. Along the way, you will make
            friends, rivals, and tough decisions in an arena of
            procedurally-generated character profiles.
          </p>
          <p style={{ padding: 5 }}>
            Tournament Winner is a love letter to the Super Smash Bros. Melee
            competitive community. Our goal is to capture the emotional
            experience of playing a fighting game: the social dynamics of
            getting to know people through the game, the mental challenge of
            maintaining focus and energy across multiple sets, and the embodied
            experiences of playing your matches in a crowded venue where
            anything can happen.
          </p>
          <p style={{ padding: 5 }}>
            Tournament Winner does not feature any actual fighting game
            mechanics; instead, you determine your fate through narrative
            choices and the strategic management of mental and physical
            resources.
          </p>
          <p style={{ padding: 5 }}>
            Never Done Games is developing Tournament Winner as a labor-of-love
            side project. I am leading the narrative design and writing, and
            collaborating on game design. The game draws from my partner Andrew
            Tran's experiences as a competitive Smash player, and my own more
            recent experiences learning the game and becoming involved in the
            scene.
          </p>
        </div>
      ),
      tags: ["Digital", "Artist", "Writer", "Designer", "Forthcoming"],
    },
    {
      id: 20,
      title: "Creatures After Calamity",
      year: 2025,
      description:
        "An unsettling monster battler in which your creatures remember how you treat them.",
      image: "/images/Creatures_After_Calamity1.png",
      images: ["/images/Creatures_After_Calamity2.png"],
      link: "https://store.steampowered.com/app/2859560/Creatures_After_Calamity/",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            In Creatures After Calamity, you must assemble a team of strange
            creatures and outsmart your opponents before your monsters turn on
            you. In the process, you build relationships with your team as you
            balance your strategies with their needs. The game centers
            deceptively simple turn-based strategy, and features a dynamic
            branching narrative and online multiplayer play.
          </p>
          <p style={{ padding: 5 }}>
            I am developing this project as part of Never Done Games, a nascent
            two-person indie studio with my partner, Andrew Tran. We are
            interested in blending branching storytelling with strategic online
            play, and developing strategic systems that are quick to pick up but
            challenging to master. I am developing all of the art, the narrative
            and writing, and collaborating on the game design.
          </p>
          <p style={{ padding: 5 }}>
            In 2023, Creatures After Calamity was selected to participate in the
            NYU Game Center Incubator. We are currently planning for a 2026
            release.
          </p>
        </div>
      ),
      tags: ["Digital", "Artist", "Writer", "Designer", "Forthcoming"],
    },
    {
      id: 21,
      title: "Planetary",
      year: 2025,
      description:
        "A suite of digital minigames for playful collaborative worldbuilding.",
      image: "/images/Planetary1.png",
      link: "#",
      content: (
        <div>
          <p style={{ padding: 5 }}>
            Planetary is a suite of web-based minigames designed to facilitate
            collaborative worldbuilding. It combines the familiar structures of
            fictional worldbuilding - drawing maps, developing timelines, and
            envisioning cultures - with a playful, irreverent, and asymmetrical
            interaction system.
          </p>
          <p style={{ padding: 5 }}>
            I am developing Planetary as part of my doctoral disseratation in
            Cinema and Media Studies at the University of Chicago. Planetary
            responds to and satirizes existing web-based worldbuilding tools,
            which frame the process in terms of optimization and productivity.
            Instead, Planetary frames worldbuilding as a silly, surprising,
            mischievous, and sometimes contentious collaborative process.
          </p>
          <p style={{ padding: 5 }}>
            I am designing and coding this project independently, using React,
            Javascript, and socket.io.
          </p>
        </div>
      ),
      tags: ["Digital", "Programmer", "Designer", "Writer", "Forthcoming"],
    },
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const sortedProjects = [...projects].sort((a, b) => {
    // Forthcoming projects first
    const aIsForthcoming = a.tags.includes("Forthcoming");
    const bIsForthcoming = b.tags.includes("Forthcoming");

    if (aIsForthcoming && !bIsForthcoming) return -1;
    if (!aIsForthcoming && bIsForthcoming) return 1;

    // Then sort by year, most recent first
    return b.year - a.year;
  });

  const filteredProjects =
    selectedTags.length === 0
      ? sortedProjects
      : sortedProjects.filter((project) =>
          selectedTags.every((tag) => project.tags.includes(tag))
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="section-title">My Portfolio</h1>
      <p className="section-subtitle">
        This is a full list of all the games I've made! Filter projects by tags
        to explore my work across different disciplines. Click on a project to
        learn more about it.
      </p>

      {/* Tag Filter */}
      <div className="mb-12 flex flex-wrap gap-3">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedTags.includes(tag)
                ? "bg-accent text-primary-light ring-2 ring-accent-alt"
                : "bg-primary/10 text-primary hover:bg-primary/15"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      {selectedTags.length > 0 && (
        <p className="text-primary/70 mb-6 font-medium">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-primary/70 text-lg">
            No projects match the selected tags. Try adjusting your filters.
          </p>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Portfolio;
