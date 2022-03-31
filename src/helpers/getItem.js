const products = [
    { id: 1, category: 'female', name: "The Witcher X BlackMilk: Witcher Schools Swoop Dress", price: 78.50, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.121457.jpg?quality=80&fit=cover&height=945&width=630', stock: 120, description:"Wolf, Cat, Bear, Viper, Griffin — whatever witcher school you gravitate toward, each one has the same ultimate goal: to train the Continent’s most formidable monster slayers. This witcher school dress has a slightly different goal: to make sure you look as stunning and badass as can be. We think it’ll do pretty well." },
    { id: 2, category: 'female', name: "The Witcher X BlackMilk: Yennefer Burned Velvet Romance Dress", price: 78.50, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.121720.jpg?quality=80&fit=cover&height=945&width=630', stock: 10, description: "Just one glance and it’s clear: this dress radiates with the incomparable style of Yennefer of Vengerberg. Charming, sophisticated, and supremely spellbinding — wearing this will always give you that magic touch." },
    { id: 3, category: 'female', name: "The Witcher X BlackMilk: World of the Witcher Bomber Jacket", price: 93.90, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.122376.jpg?quality=80&fit=cover&height=945&width=630', stock: 80, description: "Two tips for any tenacious traveller starting out on the Path: know where you’re going and make sure you’re dressed appropriately. Fortunately, this hardy bomber jacket, lined with a map showcasing the extreme terrain of the Continent, has you covered on both fronts. Let your epic adventure begin!" },
    { id: 4, category: 'female', name: "The Witcher X BlackMilk: GWENT Journey Cardback Longsleeve", price: 65.75, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.122717.jpg?quality=80&fit=cover&height=945&width=630', stock: 20, description: "Originally a cardback in Geralt’s GWENT Journey, this design feels destined to become an iconic part of your wardrobe! With the Wolf School emblem front and center buoyed by Igni, Axii, Aard, Yrden, and Quen witcher signs, there’s no doubt that this longsleeve holds a power only few can wield. Care to try?" },
    { id: 5, category: 'male', name: "Water Hag Face Off T-shirt", price: 24, img:'https://i5.walmartimages.com/asr/aad9cbc4-ecc4-4630-956b-8c932f55e5c0_1.4a1ae448f701e229e29b90ec90eb2648.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', stock: 89, description: "Marsh or swamp, river or lake — danger lurks in every wetland. Water hags prowl from coast to canal, but a wise witcher will always make sure they’re on the right side of the sword! Wear this t-shirt and keep the waterways clean — and when the battles are over, throw it in the washing machine without breaking a sweat!" },
    { id: 6, category: 'male', name: "Leshen — King of the Forest T‑shirt", price: 20.90, img:'https://walyou.com/wp-content/uploads//2016/11/Witcher-Leshen-T-Shirt-e1479327990626.jpg', stock: 134, description: "In Slavic mythos, the Leshen was perceived as a woodland demon, the king of the forest and commander of animals. Nobody messes with the king, so wear this dude with pride." },
    { id: 8, category: 'male', name: "Wolf School T‑shirt", price: 23, img:'https://m.media-amazon.com/images/I/61o3VdA-esL._UL1140_.jpg', stock: 140, description: "Is there anything more iconic than Geralt’s Wolf School medallion? Yes! Your very own Wolf School t-shirt! Take the power of the Gwynbleidd’s most famed accessory and instantly hone your Witcher fashion senses!" },
    { id: 9, category: 'male', name: "Wolf School Hoodie", price: 60, img:'https://http2.mlstatic.com/D_826296-MLA45687352039_042021-O.jpg', stock: 74, description: "The School of the Wolf teaches many vital lessons. Sword techniques, potion brewing, how not to be eaten by a hungry striga… but the true secret of success for any adept: style. Slip this hoodie over your cuirass and begin the fight with comfort at an all-time high." },
    { id: 10, category: 'objects', name: "Vesemir's Superior Swallow Mug", price: 16.50, img: 'https://a.allegroimg.com/original/1119da/2ee8cc7842a2b975ae0b12498dcd/Wiedzmin-Kubek-Wysmienita-Jaskolka-Vesemira', stock: 250, description: "Behold! The fabled recipe for Vesemir's Superior Swallow a potion known to grant users vastly accelerated vitality regeneration and instantly kill those not witcher enough to handle its supreme potency." },
    { id: 11, category: 'objects', name: "Witcher Medallion ‑ Wolf School", price: 20.50, img: 'https://a.allegroimg.com/s1024/0c249d/b7ebc27240c18491186434b7bdff', stock: 200, description: "The iconic insignia, worn only by those unique, one-of-kind, irreplaceable individuals. Just to be clear, we’re not referring to Geralt of Rivia here…" },
    { id: 12, category: 'objects', name: "Geralt Ronin Figure", price: 234, img: 'https://cdn.igromania.ru/mnt/news/4/d/1/9/b/1/82721/html/more/48a361ee12efd386_848xH.jpg', stock: 20, description: "Though Slavic by birth, Geralt is an archetypal hero who appears in many cultures. A monster hunter for hire and wandering swordsmaster in search of a greater purpose. Inspired by medieval Japan, this hand-painted 12 inch polystone figure depicts Geralt of Rivia as a Rōnin monster hunter." },
    { id: 13, category: 'objects', name: "Ciri and the Kitsune Figure ‑ Limited Edition", price: 247, img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/12/witcher-3-ciri-figure-front.jpg?q=50&fit=crop&w=2500&dpr=1.5', stock: 15, description: "The Lion Cub of Cintra is perfectly at home in the ancient Land of the Rising Sun. After tracking down a mythical yōkai to a destroyed shrine, she steels herself, unsheaths her katana, and envisions her blade severing the demon’s head clean off its shoulders. With her faithful kitsune companion by her side, the Child of Prophecy heads into battle." },
    { id: 14, category: 'objects', name: "Yennefer the Kunoichi Figure", price: 320, img: 'https://media.vandalsports.com/i/1080x1080/7-2021/202171313368_1.jpg', stock: 5, description: "Few can master the shadow arts of ninjutsu; to even come close, one must hold near-unattainable levels of fortitude, skill, and inner strength. Here, with this 17-inch hand-painted figure, we envision Yennefer as a powerful kunoichi from ancient Japan — finely tuned to the demands of a life shrouded in such deadly darkness." },
    { id: 15, category: 'objects', name: "Witcher Notebook With Cover — Harpy & Fiend", price: 46.50, img: 'https://znaj.ua/crops/79234a/620x0/1/0/2020/04/18/RMPE2vyIvjsMtzMgrr0Vti7WH5K3Y7Y6oBHVPqvm.jpeg', stock: 50, description: "Building your own bestiary? Tracking important quests? We’ve got just the thing. Housed inside a stylish, eco-friendly Washpapa cover, these pages are yours to fill with witcher knowledge and artistry. Monster sketches, potion recipes, or passages from your favorite Dandelion-penned poetry. Whatever you fancy, really." },
    { id: 16, category: 'objects', name: "Ladies of the Wood Candle Bowl", price: 69, img: 'https://a.allegroimg.com/original/1103ca/6088e79042bead851ea026edc01e/Swiecznik-Panie-Lasu-Rodzaj-gadzetu-gamingowy', stock: 35, description: " As darkness settles in, the Ladies of the Wood gather ‘round the cauldron seeking tribute. They toil away at their wicked brew which awaits those who offer too little — yet perhaps this object would be a fitting way to appease the wretched Crones of Crookback Bog? A candle holder of heft (4,5kg), with a monochromatic sheen and precise details which cast the sisters in a glowing light. With this in your possession, a gruesome fate may be swiftly avoided. " }
]

export const getItems = new Promise((resolve, reject)=>{

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(products)                    
        }, 2000);
    } else {
        reject('404 - not found')        
    }
})

