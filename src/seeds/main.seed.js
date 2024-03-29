const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Main = require("../api/model/main.model")

dotenv.config()

personajes_nintendo = [
    {
        "nombre": "Mario",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Bros.",
        "descripcion": "El famoso fontanero italiano que se embarca en numerosas aventuras para rescatar a la princesa Peach del malvado Bowser. Mario es valiente, habilidoso y conocido por su icónico traje rojo y su bigote espeso. Además de su destreza en el salto, puede adquirir poderes especiales al comerse una seta y convertirse en Super Mario.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af", "648b6b9f0d6685f9d04180b1"],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/4/44/latest/20180613001020/Mario_SSBU.png/800px-Mario_SSBU.png"
    },
    {
        "nombre": "Link",
        "franquicia": "The Legend of Zelda",
        "juego_debut": "The Legend of Zelda",
        "descripcion": "El valiente héroe vestido de verde que se enfrenta al malvado Ganon y se embarca en misiones épicas para salvar el reino de Hyrule. Link es conocido por su coraje, ingenio y habilidades de combate. Armado con su espada legendaria, la Espada Maestra, y otros objetos sagrados como el arco y la flecha, debe resolver acertijos, explorar mazmorras y luchar contra monstruos para proteger a la princesa Zelda y la Trifuerza.",
        "vilains": ["648b6b9f0d6685f9d04180a9"],
        "imagen": "https://www.zelda.com/links-awakening/assets/img/home/hero-char.png"
    },
    {
        "nombre": "Pikachu",
        "franquicia": "Pokémon",
        "juego_debut": "Pokémon Red/Green",
        "descripcion": "La icónica criatura eléctrica y mascota de la franquicia Pokémon. Pikachu es un Pokémon de tipo eléctrico conocido por su aspecto adorable, sus mejillas rojas y su capacidad para generar electricidad. Es el compañero principal del entrenador Pokémon Ash Ketchum en la serie animada y ha protagonizado numerosos juegos de Pokémon. Pikachu puede lanzar poderosos ataques eléctricos como el Trueno y el Rayo.",
        "vilains": ["648b6b9f0d6685f9d04180aa", "648b6b9f0d6685f9d04180b3"],
        "imagen": "https://www.bitgab.com/uploads/1597796080-pikachu-1597796080.png"
    },
    {
        "nombre": "Samus Aran",
        "franquicia": "Metroid",
        "juego_debut": "Metroid",
        "descripcion": "Una valiente cazadora espacial que combate a criaturas alienígenas y se enfrenta a peligrosos piratas espaciales en la serie Metroid. Samus es conocida por su traje de combate altamente avanzado, que le brinda protección y diversas habilidades, como disparar rayos y lanzar misiles. A lo largo de la serie, se revela que Samus es una poderosa guerrera y también tiene una conexión personal con los Metroides.",
        "vilains": ["648b6b9f0d6685f9d04180ab", "648b6b9f0d6685f9d04180ae"],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/0/03/latest/20230410032906/Samus_SSBU.png/800px-Samus_SSBU.png"
    },
    {
        "nombre": "Donkey Kong",
        "franquicia": "Donkey Kong",
        "juego_debut": "Donkey Kong",
        "descripcion": "El poderoso gorila que ha protagonizado numerosos juegos y es conocido por sus aventuras y su amor por los plátanos. Donkey Kong es un héroe que defiende su hogar, la Isla Kong, de enemigos como los Kremlings y otros villanos. Con su fuerza sobrehumana, puede golpear el suelo para aturdir a los enemigos, lanzar barriles y realizar acrobacias impresionantes en sus juegos de plataformas.",
        "vilains": ["648b6b9f0d6685f9d04180ac"],
        "imagen": "https://i.blogs.es/e600d8/donkey-kong/840_560.jpeg"
    },
    {
        "nombre": "Yoshi",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario World",
        "descripcion": "El fiel compañero de Mario que es capaz de comer enemigos y lanzar huevos. Yoshi es una criatura de aspecto dinosauriano con una larga lengua y una espalda cubierta de púas. Es conocido por su habilidad para tragarse a los enemigos y convertirlos en huevos que puede lanzar con precisión. Además de su papel como montura de Mario en varios juegos, Yoshi también ha protagonizado sus propios títulos, como Yoshi's Island.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://i.blogs.es/1bfe0b/yoshi-mario-bros-pelicula/1366_2000.jpeg"
    },
    {
        "nombre": "Kirby",
        "franquicia": "Kirby",
        "juego_debut": "Kirby's Dream Land",
        "descripcion": "Una pequeña y adorable criatura rosa que puede absorber a sus enemigos y adquirir sus poderes. Kirby es conocido por su capacidad de inhalar objetos y enemigos, lo que le permite copiar sus habilidades. Puede volar, lanzar proyectiles y usar una variedad de poderes especiales según los enemigos que haya absorbido. A pesar de su apariencia amigable, Kirby es un luchador formidable y ha salvado su hogar, Dream Land, en numerosas ocasiones.",
        "vilains": ["648b6b9f0d6685f9d04180ad"],
        "imagen": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/kirby-tierra-olvidada-2634935.jpg?tf=3840x"
    },
    {
        "nombre": "Fox McCloud",
        "franquicia": "Star Fox",
        "juego_debut": "Star Fox",
        "descripcion": "El audaz piloto de Arwing y líder del equipo Star Fox en su lucha contra el malvado Andross y otros enemigos del espacio. Fox es conocido por su habilidad para pilotar naves espaciales y su destreza en el combate aéreo. Junto con su equipo, compuesto por Slippy Toad, Peppy Hare y Falco Lombardi, Fox se enfrenta a desafíos intergalácticos en emocionantes misiones espaciales.",
        "vilains": ["648b6b9f0d6685f9d04180b0"],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/74/latest/20230116140557/Fox_SSB4.png/1200px-Fox_SSB4.png"
    },
    {
        "nombre": "Captain Falcon",
        "franquicia": "F-Zero",
        "juego_debut": "F-Zero",
        "descripcion": "Un famoso corredor de carreras y cazarrecompensas que participa en las peligrosas carreras de F-Zero. Captain Falcon es conocido por su estilo de conducción agresivo y su emblemático vehículo, el Blue Falcon. Además de su destreza como piloto, Falcon es un luchador hábil y utiliza potentes golpes y ataques en sus encuentros fuera de la pista. Es un personaje enigmático y se le asocia con el famoso movimiento 'Falcon Punch'.",
        "vilains": [],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/4/4c/Captain_Falcon_character_portrait.png"
    },
    {
        "nombre": "Luigi",
        "franquicia": "Super Mario",
        "juego_debut": "Mario Bros.",
        "descripcion": "El hermano menor de Mario, conocido por su personalidad tímida y su atuendo verde. Luigi a menudo acompaña a Mario en sus aventuras, y aunque a veces se muestra temeroso, demuestra valentía cuando es necesario. Luigi posee habilidades similares a las de su hermano, como saltar alto y aplastar a los enemigos. También ha protagonizado sus propios juegos, como Luigi's Mansion.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://www.nintenderos.com/wp-content/uploads/2009/08/luigi-nintendo.jpg?width=1200&enable=upscale"
    },
    {
        "nombre": "Ness",
        "franquicia": "EarthBound",
        "juego_debut": "EarthBound",
        "descripcion": "Un niño con poderes psíquicos que se embarca en una aventura para salvar al mundo de extrañas criaturas. Ness es el protagonista principal de la franquicia EarthBound. Es un joven valiente y determinado que utiliza sus habilidades psíquicas para enfrentarse a enemigos y resolver diversos desafíos. Su arma principal es un bate de béisbol, y cuenta con una variedad de habilidades psíquicas, como PK Fire y PK Thunder, que le permiten atacar a distancia y curarse a sí mismo y a sus aliados. Ness se ha convertido en uno de los personajes más reconocidos de la saga Super Smash Bros.",
        "vilains": ["648b3382e006c3c61dff2351"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Ness_%28EarthBound%29.png/220px-Ness_%28EarthBound%29.png"
    },
    {
        "nombre": "Zelda",
        "franquicia": "The Legend of Zelda",
        "juego_debut": "The Legend of Zelda",
        "descripcion": "La princesa de Hyrule que a menudo necesita ser rescatada por Link, pero también tiene su propio poder y sabiduría. Zelda es una figura icónica de la franquicia The Legend of Zelda. Es la princesa del reino de Hyrule y tiene un papel crucial en la lucha contra el mal. Aunque a veces es secuestrada por el villano principal, como Ganondorf, Zelda también posee poderes mágicos y una sabiduría ancestral que la convierten en una aliada valiosa para Link. Además, en algunos juegos, Zelda adopta la identidad de Sheik, una hábil guerrera ninja. Su arma principal es la Espada Maestra y utiliza la magia para ayudar a Link en su misión de salvar Hyrule.",
        "vilains": ["648b3382e006c3c61dff234c"],
        "imagen": "https://media.vandal.net/i/1200x630/5-2023/20235151325420_1.jpg"
    },
    {
        "nombre": "Marth",
        "franquicia": "Fire Emblem",
        "juego_debut": "Fire Emblem: Shadow Dragon and the Blade of Light",
        "descripcion": "El príncipe de Altea y un valiente espadachín en la serie Fire Emblem. Marth es uno de los personajes principales de la franquicia Fire Emblem. Es conocido por su habilidad en el combate con espadas y su nobleza. Marth es el príncipe de Altea y lidera a su ejército en la lucha contra la opresión y la injusticia. Es un espadachín ágil y elegante que utiliza movimientos precisos y rápidos para derrotar a sus enemigos. Su espada legendaria, Falchion, es una de las armas más poderosas en el universo de Fire Emblem.",
        "vilains": [],
        "imagen": "https://www.smashbros.com/images/og/marth.jpg"
    },
    {
        "nombre": "Ryu",
        "franquicia": "Street Fighter",
        "juego_debut": "Street Fighter",
        "descripcion": "Un luchador mundialmente conocido que ha participado en numerosos torneos de Street Fighter. Ryu es uno de los personajes más emblemáticos de la franquicia Street Fighter. Es un maestro de artes marciales y ha dedicado su vida a perfeccionar sus habilidades de combate. Ryu es un luchador serio y disciplinado, y se caracteriza por su búsqueda constante de la perfección en la lucha. Utiliza una combinación de puñetazos, patadas y técnicas especiales, como el Hadoken y el Shoryuken, para enfrentarse a sus oponentes. Ryu ha participado en numerosos torneos de lucha en todo el mundo, ganándose la admiración de muchos fanáticos de los juegos de lucha.",
        "vilains": [],
        "imagen": "https://teppenthegame.com/_materials/img/world/heroes/hero001/char_sp.png"
    },
    {
        "nombre": "Inkling",
        "franquicia": "Splatoon",
        "juego_debut": "Splatoon",
        "descripcion": "Los jóvenes calamares que participan en batallas de tinta en la colorida franquicia Splatoon. Los Inklings son los protagonistas principales de la serie Splatoon. Son criaturas mitad humanas, mitad calamares que tienen la capacidad de transformarse entre forma humana y forma de calamar. Los Inklings participan en emocionantes batallas multijugador donde compiten por cubrir el territorio con tinta de su equipo. Además de utilizar armas de tinta, como pistolas y rodillos, los Inklings pueden nadar rápidamente a través de la tinta y esconderse en ella para planificar estrategias. Son personajes coloridos y carismáticos que se han ganado un lugar en el corazón de los jugadores de Splatoon.",
        "vilains": [],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/2/2e/latest/20180612205327/Inkling_SSBU.png/1200px-Inkling_SSBU.png"
    },
    {
        "nombre": "Wario",
        "franquicia": "Wario",
        "juego_debut": "Super Mario Land 2: 6 Golden Coins",
        "descripcion": "El antihéroe de la serie Mario que se caracteriza por su avaricia y sus travesuras. Wario es un personaje conocido por ser el antagonista de Mario en algunos juegos, así como por tener su propia serie de juegos. Es el opuesto de Mario en términos de personalidad, ya que es avaricioso, egoísta y travieso. Wario está siempre en busca de tesoros y riquezas, y no duda en usar la fuerza bruta para conseguir lo que quiere. Aunque no tiene habilidades especiales como las de Mario, Wario es fuerte y resistente, y utiliza su fuerza para derrotar a sus enemigos. También es conocido por su famoso ataque 'Wario Waft', en el que libera gases tóxicos para dañar a sus oponentes.",
        "vilains": [],
        "imagen": "https://www.nintenderos.com/wp-content/uploads/2020/11/wario-logo.jpg"
    },
    {
        "nombre": "Mega Man",
        "franquicia": "Mega Man",
        "juego_debut": "Mega Man",
        "descripcion": "Descripción: El robot azul creado por el Dr. Light para luchar contra los malvados robots del Dr. Wily. Mega Man, también conocido como Rockman en Japón, es el protagonista principal de la serie Mega Man. Es un robot creado por el Dr. Light, diseñado originalmente para realizar tareas domésticas, pero que se convierte en un valiente defensor de la justicia. Mega Man se enfrenta a los malvados robots del Dr. Wily, que buscan dominar el mundo. Una de las características distintivas de Mega Man es su habilidad para copiar las armas y habilidades de los enemigos derrotados, lo que le permite enfrentar diferentes desafíos. Su arma principal es el Mega Buster, un cañón de energía montado en su brazo.",
        "vilains": [],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/4/46/latest/20230328150646/Mega_Man_SSBU.png/1200px-Mega_Man_SSBU.png"
    },
    {
        "nombre": "Peach",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Bros.",
        "descripcion": "La princesa de Mushroom Kingdom y una de las protagonistas principales en los juegos de Mario. Peach es la princesa del Reino Champiñón y es conocida por su gentileza, gracia y amabilidad. A menudo se encuentra en apuros y necesita ser rescatada por Mario de las garras de Bowser, pero también ha demostrado ser una heroína valiente en varias ocasiones. Peach tiene la habilidad de flotar en el aire durante cortos períodos de tiempo, lo que le permite sortear obstáculos y alcanzar lugares altos. Además, es una experta en deportes y participa en diversas competiciones junto a Mario y sus amigos.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2022/04/17/5EB43CB4-BCB6-44AC-B878-2C7FC7C3689D/princesa-peach_104.jpg?crop=608,608,x224,y0&width=1200&height=1200&optimize=low&format=webply"
    },
    {
        "nombre": "Diddy Kong",
        "franquicia": "Donkey Kong",
        "juego_debut": "Donkey Kong Country",
        "descripcion": "El ágil y juguetón compañero de Donkey Kong, conocido por su gorra y su habilidad para saltar. Diddy Kong es un personaje de la franquicia Donkey Kong y es el fiel compañero de Donkey Kong. Es un mono pequeño y ágil que posee una gran destreza en la acrobacia y el salto. Diddy Kong ayuda a Donkey Kong en sus aventuras, brindando apoyo y compañerismo. Utiliza un barril propulsor para moverse rápidamente y lanzar ataques a distancia. Diddy Kong es conocido por su energía y su personalidad juguetona, lo que lo convierte en un personaje carismático y querido por los fanáticos de los juegos de Donkey Kong.",
        "vilains": ["648b6b9f0d6685f9d04180ac"],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/7d/latest/20210602184646/Diddy_Kong_DKC_Tropical_Freeze.png/1200px-Diddy_Kong_DKC_Tropical_Freeze.png"
    },

    {
        "nombre": "Captain Toad",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Galaxy",
        "descripcion": "Un valiente explorador que protagoniza su propio juego, Captain Toad: Treasure Tracker, donde debe superar obstáculos y resolver acertijos. Captain Toad es un Toad aventurero que se destaca por su valentía y determinación. Aunque los Toads suelen ser personajes secundarios en los juegos de Mario, Captain Toad ha demostrado tener las habilidades necesarias para protagonizar su propio juego, Captain Toad: Treasure Tracker. En este juego, Captain Toad debe enfrentarse a desafíos de plataformas y resolver acertijos para encontrar tesoros escondidos. A diferencia de otros personajes de Mario, Captain Toad no puede saltar, lo que le obliga a utilizar su ingenio y estrategia para superar los obstáculos.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://static.fnac-static.com/multimedia/Images/ES/NR/22/62/16/1466914/1520-5/tsp20180405132318/Captain-Toad-Treasure-Tracker-Nintendo-3DS.jpg"
    }
]


mongoose.connect(process.env.DB_URL)
.then(async () => {
    try {
        const allMain = await Main.find()
    if(allMain.length > 0){
        await Main.collection.drop();
        console.log("Database dropped")
    }
    } catch (error) {
        console.log(`Error while dropping database: ${error}`)
    }
})

.then(async () => {
    try {
        const mapMain = personajes_nintendo.map((personaje) => new Main(personaje))
    await Main.collection.insertMany(mapMain)
    console.log("Main Characters inserted")
    } catch (error) {
        console.log(`Error while inserting Main characters: ${error}`)
    }
})
.finally(mongoose.disconnect)