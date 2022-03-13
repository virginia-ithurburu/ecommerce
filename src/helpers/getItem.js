const products = [
    { id: 1, category: 'female', name: "The Witcher X BlackMilk: Witcher Schools Swoop Dress", price: 78.50, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.121457.jpg?quality=80&fit=cover&height=945&width=630', stock: 120 },
    { id: 2, category: 'female', name: "The Witcher X BlackMilk: Yennefer Burned Velvet Romance Dress", price: 78.50, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.121720.jpg?quality=80&fit=cover&height=945&width=630', stock: 120 },
    { id: 3, category: 'female', name: "The Witcher X BlackMilk: World of the Witcher Bomber Jacket", price: 93.90, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.122376.jpg?quality=80&fit=cover&height=945&width=630', stock: 80 },
    { id: 4, category: 'female', name: "The Witcher X BlackMilk: GWENT Journey Cardback Longsleeve", price: 65.75, img:'https://blackmilkclothing.com/media/catalog/product/p/h/phi-2021.10.122717.jpg?quality=80&fit=cover&height=945&width=630', stock: 20 },
    { id: 5, category: 'male', name: "Water Hag Face Off T-shirt", price: 24, img:'https://i5.walmartimages.com/asr/aad9cbc4-ecc4-4630-956b-8c932f55e5c0_1.4a1ae448f701e229e29b90ec90eb2648.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', stock: 89 },
    { id: 6, category: 'male', name: "Leshen — King of the Forest T‑shirt", price: 20.90, img:'https://walyou.com/wp-content/uploads//2016/11/Witcher-Leshen-T-Shirt-e1479327990626.jpg', stock: 134 },
    { id: 8, category: 'male', name: "Wolf School T‑shirt", price: 23, img:'https://m.media-amazon.com/images/I/61o3VdA-esL._UL1140_.jpg', stock: 140 },
    { id: 9, category: 'male', name: "Wolf School Hoodie", price: 60, img:'https://http2.mlstatic.com/D_826296-MLA45687352039_042021-O.jpg', stock: 74 },
    { id: 10, category: 'objects', name: "Vesemir's Superior Swallow Mug", price: 16.50, img: 'https://a.allegroimg.com/original/1119da/2ee8cc7842a2b975ae0b12498dcd/Wiedzmin-Kubek-Wysmienita-Jaskolka-Vesemira', stock: 250 },
    { id: 11, category: 'objects', name: "Witcher Medallion ‑ Wolf School", price: 20.50, img: 'https://a.allegroimg.com/s1024/0c249d/b7ebc27240c18491186434b7bdff', stock: 200 },
    { id: 12, category: 'objects', name: "Geralt Ronin Figure", price: 234, img: 'https://cdn.igromania.ru/mnt/news/4/d/1/9/b/1/82721/html/more/48a361ee12efd386_848xH.jpg', stock: 20 },
    { id: 13, category: 'objects', name: "Ciri and the Kitsune Figure ‑ Limited Edition", price: 247, img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/12/witcher-3-ciri-figure-front.jpg?q=50&fit=crop&w=2500&dpr=1.5', stock: 15 },
    { id: 14, category: 'objects', name: "Yennefer the Kunoichi Figure", price: 320, img: 'https://media.vandalsports.com/i/1080x1080/7-2021/202171313368_1.jpg', stock: 0 },
    { id: 15, category: 'objects', name: "Witcher Notebook With Cover — Harpy & Fiend", price: 46.50, img: 'https://znaj.ua/crops/79234a/620x0/1/0/2020/04/18/RMPE2vyIvjsMtzMgrr0Vti7WH5K3Y7Y6oBHVPqvm.jpeg', stock: 50 },
    { id: 16, category: 'objects', name: "Ladies of the Wood Candle Bowl", price: 69, img: 'https://a.allegroimg.com/original/1103ca/6088e79042bead851ea026edc01e/Swiecznik-Panie-Lasu-Rodzaj-gadzetu-gamingowy', stock: 35 }
]

export const getItem = new Promise((resolve, reject)=>{

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(products)                    
        }, 2000);
    } else {
        reject('404 - not found')        
    }
})

