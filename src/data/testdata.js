const testData = [
	{
		"name": "Badring med motiv",
		"description": "En badring med roligt donutmotiv som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 139,
		"picture": "https://static.panduro.com/ArticleImages/1200x1200/803970_01.webp"
	},
	{
		"name": "Badring regnbåge",
		"description": "En färgglad badring som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"picture": "https://quickbutik.imgix.net/888R/products/643a8b8d1a7f0.png?auto=format"
	},
	{
		"name": "Armpuffar",
		"description": "Färgglada armpuffar. Perfekt för de minsta barnen! Kommer i 2-pack.",
		"price": 89,
		"picture": "https://images.clasohlson.com/medias/sys_master/h47/h0d/68161075839006.png"
	},
	{
		"name": "Flytande volleybollnät",
		"description": "Ett flytande volleybollnät som gör det möjligt att spela beachvolleyboll i vattnet. Perfekt för en dag på stranden!",
		"price": 349,
		"picture": "https://contents.mediadecathlon.com/p2170055/k$2227e18fb194e612a47c1d5ba8f0fbf1/volleybollnat-uppblasbart-pool-intex.jpg?&f=800x800"
	},
	{
		"name": "Poolnudel",
		"description": "Färgglad poolnudel, perfekt för att slappa i poolen!",
		"price": 249,
		"picture": "https://contents.mediadecathlon.com/p1983491/k$9333bcbb25c96a17707166114ec64ccc/flytorm-i-skum-for-poolen-118-cm-lang-bla.jpg?&f=800x800"
	},
	{
		"name": "Flytande basketkorg",
		"description": "En flytande basketkorg som gör det möjligt att spela basket i vattnet. Perfekt för en dag på stranden!",
		"price": 599,
		"picture": "https://m.media-amazon.com/images/I/71fCk985WRL._AC_SL1500_.jpg"
	},
	{
		"name": "Badboll flerfärgad",
		"description": "En färgglad badboll som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"picture": "https://www.tradeinn.com/f/13651/136517422/intex-badboll.jpg"
	},
	{
		"name": "Badboll enfärgad",
		"description": "En färgglad badboll som passar både barn och vuxna. Tillverkad av hållbart PVC-material. diameter: 33cm.",
		"price": 79,
		"picture": "https://www.feedbackprofil.se/wp-content/uploads/10037100.jpg"
	}
	,
	{
		"name": "Cyklop",
		"description": "Ett cyklop med snorkel för dig som vill se under vattnet utan att få vatten i ögonen!",
		"price": 189,
		"picture": "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/KidsCliffFisherCombosaet_Snorkelsaet_7_1.png?v=1651828646&width=950"
	},
	{
		"name": "Simdyna",
		"description": "En fin simdyna som passar perfekt för simning eller avkoppling på vattnet.",
		"price": 129,
		"picture": "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryHeatkickboardblue.jpg?v=1623674716&width=950"
	},
	{
		"name": "Vattenpistoler",
		"description": "Roliga vattenpistoler i form av en haj och en krokodil för härlig vattenlek! kommer i pack med 2 pistoler",
		"price": 89,
		"picture": "https://m.media-amazon.com/images/I/61pgPsiWmpL._AC_SL1500_.jpg"
	},
	{
		"name": "Vattenkanna",
		"description": "För sinnesstimulerande vatten- och sandlek. Blandade färger. Volym: 1L",
		"price": 59,
		"picture": "https://www.bauhaus.se/media/catalog/product/cache/9d0f0c8eb514963e1fda0eb95b4bf3ab/6/9/6999437a.jpg"
	}
	,
	{
		"name": "Vattenspruta",
		"description": "En rolig vattenspruta för lek och skoj på vattnet!",
		"price": 59,
		"picture": "https://hurryskurry.com/wp-content/uploads/2022/06/Vattenspruta-i-Skummaterial.jpg"
	},
	{
		"name": "Simring",
		"description": "En söt simring med djurmotiv för de minsta barnen.",
		"price": 79,
		"picture": "https://images.fyndiq.se/images/f_auto/t_600x600/prod/822745b830214296/1a42b0252215/baby-simring-ring-uppblasbar-float-seat-bla-blue"
	},
	{
		"name": "Badbåt",
		"description": "En lekfull badbåt som flyter på vattnet.",
		"price": 119,
		"picture": "https://www.jollyroom.se/storage/718D51A6A0646046896156E0B35B818FD153A822F8E3156D4A443C43E2107AA8/82621e4a3eb84c5eb638972172912e70/400-365-0-jpg.Jpeg/media/affcd31b087544789502a8fd4db48a64/1689002-2139_1.jpeg"
	},
	{
		"name": "Vattenkanon",
		"description": "En superkul vattenkanon som sprutar vatten upp till 10 meter!",
		"price": 299,
		"picture": "https://images.clasohlson.com/medias/sys_master/hd9/h07/68105438068766.jpg"
	},
	{
		"name": "Simfena",
		"description": "Simhjälpmedel med hajfena, perfekt för att skrämma slag på kompisarna!",
		"price": 199,
		"picture": "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AC4GU2/3ac683df32cb473190ebdfa229af2f36.jpg/f/swimfin-antracitgraa.jpg?height=960&transparent=1&borderless=1"
	},
	{
		"name": "Simglasögon",
		"description": "Simglasögon för barn. Ett imfritt och uv-skyddat simglasöga med clips för att enkelt justera bandet.",
		"price": 169,
		"picture": "https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryMantisKids-Blue-ClearLens_2.jpg?v=1655381736&width=950"
	},
	{
		"name": "Badring enhörning",
		"description": "För dig som vill ha en badring med axtra allt!",
		"price": 229,
		"picture": "https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1598740_Fs&mw=1500&fmt=webp"
	},
	{
		"name": "Badanka",
		"description": "Klassisk badanka, går alltid hem!",
		"price": 49,
		"picture": "https://www.klubbensport.se/Media/Cache/Images/1/2/WEB_Image_Badanka_Klassisk__li1607_12091052014_plid_128002.jpeg"
	},
	{
		"name": "Badmadrass",
		"description": "En badmadrass för dig som hellre slappar i poolen än leker!",
		"price": 149,
		"picture": 'https://medieserver.jemogfix.dk//fotoweb/se/varer/700//2121%209055772_2.jpg'
	},
	{
		"name": "Dykringar",
		"description": "Paket med 3 dykringar, Perfekt när du vill träna på att dyka och hämta saker på botten.",
		"price": 89,
		"picture": "https://www.klubbensport.se/Media/Cache/Images/3/5/WEB_Image_Dyringar_Toypedo_%C3%98_14_cm_Set_med_3_dykri_248666__1108841470_plid_340065.jpeg"
	}
]

export default testData