const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Main = require("../api/model/main.model")

dotenv.config()

personajes_nintendo = [
    {
        "nombre": "Mario",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Bros.",
        "descripcion": "El famoso fontanero italiano que se embarca en aventuras para rescatar a la princesa Peach.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af", "648b6b9f0d6685f9d04180b1"],
        "imagen": "https://i.blogs.es/2377dd/super-mario-bros-por-que-el-personaje-mas-famoso-de-nintendo-se-llama-mario-2/450_1000.jpeg"
    },
    {
        "nombre": "Link",
        "franquicia": "The Legend of Zelda",
        "juego_debut": "The Legend of Zelda",
        "descripcion": "El valiente héroe que lucha contra el malvado Ganon para salvar el reino de Hyrule.",
        "vilains": ["648b6b9f0d6685f9d04180a9"],
        "imagen": "https://www.zelda.com/links-awakening/assets/img/home/hero-char.png"
    },
    {
        "nombre": "Pikachu",
        "franquicia": "Pokémon",
        "juego_debut": "Pokémon Red/Green",
        "descripcion": "La icónica criatura eléctrica y mascota de la franquicia Pokémon.",
        "vilains": ["648b6b9f0d6685f9d04180aa", "648b6b9f0d6685f9d04180b3"],
        "imagen": "https://www.bitgab.com/uploads/1597796080-pikachu-1597796080.png"
    },
    {
        "nombre": "Samus Aran",
        "franquicia": "Metroid",
        "juego_debut": "Metroid",
        "descripcion": "Una cazadora espacial que combate a criaturas alienígenas en la serie Metroid.",
        "vilains": ["648b6b9f0d6685f9d04180ab", "648b6b9f0d6685f9d04180ae"],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/0/03/latest/20230410032906/Samus_SSBU.png/800px-Samus_SSBU.png"
    },
    {
        "nombre": "Donkey Kong",
        "franquicia": "Donkey Kong",
        "juego_debut": "Donkey Kong",
        "descripcion": "El poderoso gorila que ha protagonizado numerosos juegos y es conocido por sus aventuras y su amor por los plátanos.",
        "vilains": ["648b6b9f0d6685f9d04180ac"],
        "imagen": "https://i.blogs.es/e600d8/donkey-kong/840_560.jpeg"
    },
    {
        "nombre": "Yoshi",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario World",
        "descripcion": "El fiel compañero de Mario que es capaz de comer enemigos y lanzar huevos.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://i.blogs.es/1bfe0b/yoshi-mario-bros-pelicula/1366_2000.jpeg"
    },
    {
        "nombre": "Kirby",
        "franquicia": "Kirby",
        "juego_debut": "Kirby's Dream Land",
        "descripcion": "Una pequeña y adorable criatura rosa que puede absorber a sus enemigos y adquirir sus poderes.",
        "vilains": ["648b6b9f0d6685f9d04180ad"],
        "imagen": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/kirby-tierra-olvidada-2634935.jpg?tf=3840x"
    },
    {
        "nombre": "Fox McCloud",
        "franquicia": "Star Fox",
        "juego_debut": "Star Fox",
        "descripcion": "El audaz piloto de Arwing y líder del equipo Star Fox en su lucha contra el malvado Andross.",
        "vilains": ["648b6b9f0d6685f9d04180b0"],
        "imagen": "https://static.wikia.nocookie.net/ssbb/images/1/14/Fox_Starlink.png/revision/latest?cb=20181203170148&path-prefix=es"
    },
    {
        "nombre": "Captain Falcon",
        "franquicia": "F-Zero",
        "juego_debut": "F-Zero",
        "descripcion": "Un famoso corredor de carreras y cazarrecompensas que participa en las peligrosas carreras de F-Zero.",
        "vilains": [],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/4/4c/Captain_Falcon_character_portrait.png"
    },
    {
        "nombre": "Luigi",
        "franquicia": "Super Mario",
        "juego_debut": "Mario Bros.",
        "descripcion": "El hermano de Mario, conocido por su valentía y su papel como personaje secundario en muchos juegos de Mario.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://static.wikia.nocookie.net/mario/images/b/b6/Luigi_the_super_mario_bros_movie_full_render.png/revision/latest?cb=20230305024303"
    },
    {
        "nombre": "Ness",
        "franquicia": "EarthBound",
        "juego_debut": "EarthBound",
        "descripcion": "Un niño con poderes psíquicos que se embarca en una aventura para salvar al mundo de extrañas criaturas.",
        "vilains": ["648b3382e006c3c61dff2351"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Ness_%28EarthBound%29.png/220px-Ness_%28EarthBound%29.png"
    },
    {
        "nombre": "Zelda",
        "franquicia": "The Legend of Zelda",
        "juego_debut": "The Legend of Zelda",
        "descripcion": "La princesa de Hyrule que a menudo necesita ser rescatada por Link, pero también tiene su propio poder y sabiduría.",
        "vilains": ["648b3382e006c3c61dff234c"],
        "imagen": "https://media.vandal.net/i/1200x630/5-2023/20235151325420_1.jpg"
    },
    {
        "nombre": "Marth",
        "franquicia": "Fire Emblem",
        "juego_debut": "Fire Emblem: Shadow Dragon and the Blade of Light",
        "descripcion": "El príncipe de Altea y un valiente espadachín en la serie Fire Emblem.",
        "vilains": [],
        "imagen": "https://www.smashbros.com/images/og/marth.jpg"
    },
    {
        "nombre": "Ryu",
        "franquicia": "Street Fighter",
        "juego_debut": "Street Fighter",
        "descripcion": "Un luchador mundialmente conocido que ha participado en numerosos torneos de Street Fighter.",
        "vilains": [],
        "imagen": "https://teppenthegame.com/_materials/img/world/heroes/hero001/char_sp.png"
    },
    {
        "nombre": "Inkling",
        "franquicia": "Splatoon",
        "juego_debut": "Splatoon",
        "descripcion": "Los jóvenes calamar que participan en batallas de tinta en la colorida franquicia Splatoon.",
        "vilains": [],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/2/2e/latest/20180612205327/Inkling_SSBU.png/1200px-Inkling_SSBU.png"
    },
    {
        "nombre": "Wario",
        "franquicia": "Wario",
        "juego_debut": "Super Mario Land 2: 6 Golden Coins",
        "descripcion": "El antihéroe de la serie Mario que se caracteriza por su avaricia y sus travesuras.",
        "vilains": [],
        "imagen": "https://www.nintenderos.com/wp-content/uploads/2020/11/wario-logo.jpg"
    },
    {
        "nombre": "Mega Man",
        "franquicia": "Mega Man",
        "juego_debut": "Mega Man",
        "descripcion": "El robot azul creado por el Dr. Light para luchar contra los malvados robots del Dr. Wily.",
        "vilains": [],
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/4/46/latest/20230328150646/Mega_Man_SSBU.png/1200px-Mega_Man_SSBU.png"
    },
    {
        "nombre": "Peach",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Bros.",
        "descripcion": "La princesa de Mushroom Kingdom y una de las protagonistas principales en los juegos de Mario.",
        "vilains": ["648b6b9f0d6685f9d04180a8", "648b6b9f0d6685f9d04180af"],
        "imagen": "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2022/04/17/5EB43CB4-BCB6-44AC-B878-2C7FC7C3689D/princesa-peach_104.jpg?crop=608,608,x224,y0&width=1200&height=1200&optimize=low&format=webply"
    },
    {
        "nombre": "Diddy Kong",
        "franquicia": "Donkey Kong",
        "juego_debut": "Donkey Kong Country",
        "descripcion": "El ágil y juguetón compañero de Donkey Kong, conocido por su gorra y su habilidad para saltar.",
        "vilains": ["648b6b9f0d6685f9d04180ac"],
        "imagen": "https://static.wikia.nocookie.net/donkeykong/images/0/06/DiddyKong2.png/revision/latest?cb=20210729200637&path-prefix=es"
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