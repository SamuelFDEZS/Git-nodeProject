const vilains = require("../api/model/vilains.model")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

var villanosNintendo = [
    {
        "nombre": "Bowser",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Bros.",
        "descripcion": "El rey de los Koopas y principal antagonista en los juegos de Mario.",
        "imagen": "https://i.blogs.es/696096/super-mario-bros-character-posters-bowser/840_560.jpeg"
    },
    {
        "nombre": "Ganondorf",
        "franquicia": "The Legend of Zelda",
        "juego_debut": "The Legend of Zelda: Ocarina of Time",
        "descripcion": "El malvado señor de la oscuridad que se enfrenta a Link en su búsqueda por dominar Hyrule.",
        "imagen": "https://i.blogs.es/fe58e3/ganondorf-zelda-tears-of-the-kingdom/1366_2000.jpeg"
    },
    {
        "nombre": "Team Rocket",
        "franquicia": "Pokémon",
        "juego_debut": "Pokémon Red/Green",
        "descripcion": "Una organización criminal que intenta robar Pokémon y frustrar los planes del protagonista.",
        "imagen": "https://sm.ign.com/ign_es/screenshot/default/sin-titulo-1_bh3n.jpg"
    },
    {
        "nombre": "Ridley",
        "franquicia": "Metroid",
        "juego_debut": "Metroid",
        "descripcion": "Un poderoso y siniestro dragón espacial que es un enemigo recurrente de Samus Aran.",
        "imagen": "https://static.wikia.nocookie.net/metroid/images/9/9d/Ridley_de_Zero_Mission.png/revision/latest?cb=20190110221325&path-prefix=es"
    },
    {
        "nombre": "King K. Rool",
        "franquicia": "Donkey Kong",
        "juego_debut": "Donkey Kong Country",
        "descripcion": "El líder de los Kremlings y principal rival de Donkey Kong y sus amigos.",
        "imagen": "https://upload.wikimedia.org/wikipedia/en/7/70/King_K._Rool_Smash_Ultimate.png"
    },
    {
        "nombre": "Meta Knight",
        "franquicia": "Kirby",
        "juego_debut": "Kirby's Adventure",
        "descripcion": "Un enigmático espadachín enmascarado que a veces actúa como rival y a veces como aliado de Kirby.",
        "imagen": "https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png"
    },
    {
        "nombre": "Mother Brain",
        "franquicia": "Metroid",
        "juego_debut": "Metroid",
        "descripcion": "Una entidad biomecánica y villana final en varios juegos de Metroid.",
        "imagen": "https://static.wikia.nocookie.net/metroid/images/5/51/Cerebro_Madre_artwork_mzm.png/revision/latest?cb=20190110202520&path-prefix=es"
    },
    {
        "nombre": "Kamek",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario World 2: Yoshi's Island",
        "descripcion": "Un mago leal a Bowser que intenta detener a Yoshi y a Mario en sus aventuras.",
        "imagen": "https://images.wikidexcdn.net/mwuploads/esssbwiki/b/bf/latest/20221002134831/Kamek_Mario_Party_Superstars.png"
    },
    {
        "nombre": "Andross",
        "franquicia": "Star Fox",
        "juego_debut": "Star Fox",
        "descripcion": "Un científico loco y enemigo principal de Fox McCloud y el equipo Star Fox.",
        "imagen": "https://static.wikia.nocookie.net/starfox/images/f/f8/StarFoxZeroLaunchtrl-610.jpg/revision/latest?cb=20160629143404&path-prefix=de"
    },
    {
        "nombre": "Wario",
        "franquicia": "Super Mario",
        "juego_debut": "Super Mario Land 2: 6 Golden Coins",
        "descripcion": "El archirrival y contraparte malvada de Mario, conocido por su avaricia y su amor por el dinero.",
        "imagen": "https://www.nintenderos.com/wp-content/uploads/2020/11/wario-logo.jpg"
    },
    {
        "nombre": "Dr. Eggman",
        "franquicia": "Sonic the Hedgehog",
        "juego_debut": "Sonic the Hedgehog",
        "descripcion": "El científico loco y principal enemigo de Sonic, siempre buscando dominar el mundo con sus creaciones robóticas.",
        "imagen": "https://upload.wikimedia.org/wikipedia/en/9/96/Doctor_Eggman.png"
    },
    {
        "nombre": "Mewtwo",
        "franquicia": "Pokémon",
        "juego_debut": "Pokémon Red/Green",
        "descripcion": "Un poderoso Pokémon creado mediante manipulación genética que busca venganza contra los humanos.",
        "imagen": "https://static.wikia.nocookie.net/pokemonleyendas/images/d/d3/Mewtwo.png/revision/latest?cb=20150307182008&path-prefix=es"
    }
]

mongoose.connect(process.env.DB_URL)

    .then(async () => {
        try {
            const allVilains = await vilains.find()
            if (allVilains.length > 0) {
                await vilains.collection.drop()
                console.log("vilains database dropped successfully")
            }
        } catch (error) {
            console.log(`An error has ocurred while dropping database: ${error}`)
        }
    })

    .then(async () => {
        try {
            const mapVilains = villanosNintendo.map((vilain) => new vilains(vilain))
            await vilains.collection.insertMany(mapVilains)
            console.log("Villans successfully added to database")
        } catch (error) {
            console.log(`An error has ocurred while adding Villains: ${error}`)
        }
    })

    .finally(mongoose.disconnect)