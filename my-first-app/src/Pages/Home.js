const Home = () => {
    return(
        <body>
        <img src = { require("./Assets/literallyMe.jpg") } alt = "Ya boi" id = "Noah" />
        <p>
          Hello and welcome my friend! My name is Noah John Oosterhoff, I am an employee here at Eli Lilly, specifically a Software Engineer! I love and adore quite a few things, so I will list them out below in a nice nested ul :D
        </p>

        { /* Span for the ULs */ }
        <span class = "ListSpan">

          { /* First UL */}
          <span>
            <ul>
              <li>
                People
                <ul>
                  <li>Jesus Christ</li>
                  <li>My family, especially my lil bro Eli</li>
                  <li>Anna Louise Krueger, my fiance</li>
                  <li>My homies</li>
                </ul>
              </li>
              <li>
                Hobbies
                <ul>
                  <li>Gaming</li>
                  <li>Working Out</li>
                  <li>Tennis</li>
                  <li>Fishing</li>
                </ul>
              </li>
              <li>
                Video Games
                <ul>
                  <li>Silent Hill 2 & 3</li>
                  <li>Shin Megami Tensei III Nocturne</li>
                  <li>Super Smash Brothers</li>
                  <li>Pokemon</li>
                  <li>League of Legends</li>
                  <li>Lethal Company</li>
                  <li>Terraria</li>
                </ul>
              </li>
            </ul>
          </span>

          { /* Second UL */ }
          <span>
            <ul>
              <li>
                Foods
                <ul>
                  <li>Chicken Kiev</li>
                  <li>Steak</li>
                  <li>Panang Curry</li>
                  <li>Fajitas</li>
                  <li>Anything Chinese</li>
                  <li>Swiss Cheese</li>
                </ul>
              </li>
              <li>
                League of Legends Champions
                <ul>
                  <li>Jhin</li>
                  <li>Kha'Zix</li>
                  <li>Vladimir</li>
                  <li>Kindred</li>
                  <li>Aphelios</li>
                  <li>Jinx</li>
                  <li>Tristana</li>
                  <li>Ryze</li>
                  <li>Lulu</li>
                  <li>Poppy</li>
                </ul>
              </li>
            </ul>
          </span>

          { /* Third UL */ }
          <ul>
            <li>
              Musical Artists
              <ul>
                <li>Stone Temple Pilots</li>
                <li>Van Halen</li>
                <li>Steely Dan</li>
                <li>Snail's House</li>
                <li>Mitchie M</li>
                <li>Nanahira</li>
                <li>Megadeth</li>
              </ul>
            </li>
            <li>
              Shows
              <ul>
                <li>Hunter x Hunter</li>
                <li>Seinfeld</li>
                <li>Breaking Bad</li>
                <li>Animal Documentaries</li>
              </ul>
            </li>
            <li>
              Movies
              <ul>
                <li>American Psycho</li>
                <li>Apocalypse Now</li>
                <li>Fantastic Mr.Fox</li>
                <li>Megamind</li>
              </ul>
            </li>
          </ul>

        </span>

        { /* Footer */ }
        <footer>
          <img src = { require("./Assets/DancingTails.gif") } alt = "Dancing tails \^-^/" />
          <p>
            © Certified based
          </p>
        </footer>

        <img src = { require("./Assets/ZombieSlayerJinx.png") } alt = "Zombie Slayer Jinx >:)" id = "ZombieSlayerJinx" />
      </body>
    )
}

export default Home;