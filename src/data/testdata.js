const testData = [
	{
		"name": "Badring med motiv",
		"description": "En badring med roligt donutmotiv som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 139,
		"productid": "BR-001",
		"picture": [
			"https://static.panduro.com/ArticleImages/1200x1200/803970_01.webp",
			"https://static.panduro.com/ArticleImages/1200x1200/803970_80.webp",
			"https://static.panduro.com/ArticleImages/1200x1200/803970_81.webp"
		]
	},
	{
		"name": "Badring regnbåge",
		"description": "En färgglad badring som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"productid": "BR-002",
		"picture": [
			"https://quickbutik.imgix.net/888R/products/643a8b8d1a7f0.png?auto=format",
			"https://quickbutik.imgix.net/888R/products/62c88788a3dbd.png?auto=format",
			"https://quickbutik.imgix.net/888R/products/64396db42107a.png?auto=format"
		]
	},
	{
		"name": "Armpuffar",
		"description": "Färgglada armpuffar. Perfekt för de minsta barnen! Kommer i 2-pack.",
		"price": 89,
		"productid": "VL-001",
		"picture": [
			"https://images.clasohlson.com/medias/sys_master/h47/h0d/68161075839006.png",
			"https://www.babyworld.se/assets/blobs/babyworld_aquarapid_armringar_030_kg_green_42051_3-060457eb8e.jpg?preset=tiny&dpr=2",
			"https://www.boxholmshus.se/images/18.2a76b991180abd356bf7c83f/1652428526601/(2)%20(2)%20Bildspel%20p%C3%A5%20start%20(2).jpg"
		]
	},
	{
		"name": "Flytande volleybollnät",
		"description": "Ett flytande volleybollnät som gör det möjligt att spela beachvolleyboll i vattnet. Perfekt för en dag på stranden!",
		"price": 349,
		"productid": "FV-001",
		"picture": [
			"https://contents.mediadecathlon.com/p2170055/k$2227e18fb194e612a47c1d5ba8f0fbf1/volleybollnat-uppblasbart-pool-intex.jpg?&f=800x800",
			"https://contents.mediadecathlon.com/p2170054/k$93caa54654b3bdda7d5325d2b7a1dd60/volleybollnat-uppblasbart-pool-intex.jpg?&f=800x800",
			"https://contents.mediadecathlon.com/p2170053/k$48c4db5e8b60875d2a91b43eed2d74d2/volleybollnat-uppblasbart-pool-intex.jpg?&f=800x800"
		]
	},
	{
		"name": "Poolnudel",
		"description": "Färgglad poolnudel, perfekt för att slappa i poolen!",
		"price": 249,
		"productid": "VK-001",
		"picture": [
			"https://contents.mediadecathlon.com/p1983491/k$9333bcbb25c96a17707166114ec64ccc/flytorm-i-skum-for-poolen-118-cm-lang-bla.jpg?&f=800x800",
			"https://contents.mediadecathlon.com/p1983490/k$1a63a4d89d1ee7ff3178de517a54885b/flytorm-i-skum-for-poolen-118-cm-lang-bla.jpg?&f=800x800",
			"https://contents.mediadecathlon.com/p1933108/k$c2ac2e482b1cc847b02046264985c55d/flytorm-i-skum-for-poolen-118-cm-lang-bla.jpg?&f=800x800"
		]
	},
	{
		"name": "Flytande basketkorg",
		"description": "En flytande basketkorg som gör det möjligt att spela basket i vattnet. Perfekt för en dag på stranden!",
		"price": 599,
		"productid": "FBK-001",
		"picture": [
			"https://m.media-amazon.com/images/I/71fCk985WRL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81mpk9E33YL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/81inhVkmLFL._AC_SL1500_.jpg"
		]
	},
	{
		"name": "Badboll flerfärgad",
		"description": "En färgglad badboll som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"productid": "BB-001",
		"picture": [
			"https://www.tradeinn.com/f/13651/136517422/intex-badboll.jpg",
			"https://www.tradeinn.com/f/13651/136517422_4/intex-badboll.jpg",
			"https://www.tradeinn.com/f/13651/136517422_3/intex-badboll.jpg"
		]
	},
	{
		"name": "Badboll enfärgad",
		"description": "En färgglad badboll som passar både barn och vuxna. Tillverkad av hållbart PVC-material. diameter: 33cm.",
		"price": 79,
		"productid": "BB-002",
		"picture": [
			"https://www.feedbackprofil.se/wp-content/uploads/10037100.jpg",
			"https://www.feedbackprofil.se/wp-content/uploads/10037100_PP_Y1.jpg",
			"https://www.feedbackprofil.se/wp-content/uploads/10037100_F_PP_Y2.jpg"
		]
	}
	,
	{
		"name": "Cyklop",
		"description": "Ett cyklop med snorkel för dig som vill se under vattnet utan att få vatten i ögonen!",
		"price": 189,
		"productid": "WR-1001",
		"picture": [
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/KidsCliffFisherCombosaet_Snorkelsaet_7_1.png?v=1651828646&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryCliffDivingMaskKids-Pink_1_f5343f15-8355-46fe-9415-34a2ac03edca.jpg?v=1652097156&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryCliffDivingMaskKids-Pink_5_fb027b61-05f0-4c45-8fde-fceaf62f4645.jpg?v=1652097159&width=950"
		]
	},
	{
		"name": "Simdyna",
		"description": "En fin simdyna som passar perfekt för simning eller avkoppling på vattnet.",
		"price": 129,
		"productid": "SD-2001",
		"picture": [
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryHeatkickboardblue.jpg?v=1623674716&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/4_3_1bcd21b2-db52-4943-9bf7-414d5bbb155a.jpg?v=1622801120&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryHeatkickboardblue-6.jpg?v=1623674722&width=950"
		]
	},
	{
		"name": "Vattenpistoler",
		"description": "Roliga vattenpistoler i form av en haj och en krokodil för härlig vattenlek! kommer i pack med 2 pistoler",
		"price": 89,
		"productid": "VP-3001",
		"picture": [
			"https://m.media-amazon.com/images/I/61pgPsiWmpL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71ECaN1L7EL._AC_SL1500_.jpg",
			"https://m.media-amazon.com/images/I/71yGTfheGmL._AC_SL1500_.jpg"
		]
	},
	{
		"name": "Vattenkanna",
		"description": "För sinnesstimulerande vatten- och sandlek. Blandade färger. Volym: 1L",
		"price": 59,
		"productid": "SS-4001",
		"picture": [
			"https://www.bauhaus.se/media/catalog/product/cache/9d0f0c8eb514963e1fda0eb95b4bf3ab/6/9/6999437a.jpg",
			"https://www.bauhaus.se/media/catalog/product/cache/06447b731d1cbff22138e7150384a1c9/6/9/6999437a_2.jpg",
			"https://www.bauhaus.se/media/catalog/product/cache/06447b731d1cbff22138e7150384a1c9/6/9/6999437a_3.jpg"
		]
	}
	,
	{
		"name": "Vattenspruta",
		"description": "En rolig vattenspruta för lek och skoj på vattnet!",
		"price": 59,
		"productid": "VS-5001",
		"picture": [
			"https://hurryskurry.com/wp-content/uploads/2022/06/Vattenspruta-i-Skummaterial.jpg",
			"https://hurryskurry.com/wp-content/uploads/2022/06/Vattenspruta-i-Skummaterial.webp",
			"https://hurryskurry.com/wp-content/uploads/2022/06/Vattenspruta-i-Skummaterial-2.jpg"
		]
	},
	{
		"name": "Simring",
		"description": "En söt simring med djurmotiv för de minsta barnen.",
		"price": 79,
		"productid": "SR-6001",
		"picture": [
			"https://images.fyndiq.se/images/f_auto/t_600x600/prod/822745b830214296/1a42b0252215/baby-simring-ring-uppblasbar-float-seat-bla-blue",
			"https://images.fyndiq.se/images/f_auto/t_600x600/prod/822745b830214296/a1458b9fdb7c/baby-simring-ring-uppblasbar-float-seat-bla-blue",
			"https://images.fyndiq.se/images/f_auto/t_600x600/prod/822745b830214296/c4556791f3f3/baby-simring-ring-uppblasbar-float-seat-bla-blue"
		]
	},
	{
		"name": "Badbåt",
		"description": "En lekfull badbåt som flyter på vattnet.",
		"price": 119,
		"productid": "BB-7001",
		"picture": [
			"https://www.jollyroom.se/storage/718D51A6A0646046896156E0B35B818FD153A822F8E3156D4A443C43E2107AA8/82621e4a3eb84c5eb638972172912e70/400-365-0-jpg.Jpeg/media/affcd31b087544789502a8fd4db48a64/1689002-2139_1.jpeg",
			"https://www.jollyroom.se/storage/C646B13FC8AE132ECA4285D381664959AB8075CE59E979FE73A236418A3DB406/a7f6f4a34a5c4b4685b9e5cb58edadd0/400-205-0-jpg.Jpeg/media/a70a7dc407bd40fa888969fec0bc547f/1689002-2139_2.jpeg",
			"https://www.jollyroom.se/storage/5AD63254BA7CA90A160AF920A7CF9C5A3E2801AE050DEC57411E46E8AD27C99B/f03608014e4e486fb0d21fca32f1b242/400-305-0-jpg.Jpeg/media/37dca27b9fa84359b41396c187f6a55f/1689002-2139_4a.jpeg",
		]
	},
	{
		"name": "Vattenkanon",
		"description": "En superkul vattenkanon som sprutar vatten upp till 10 meter!",
		"price": 299,
		"productid": "VPK001",
		"picture": [
			"https://images.clasohlson.com/medias/sys_master/hd9/h07/68105438068766.jpg",
			"https://images.clasohlson.com/medias/sys_master/h20/h2f/68105438167070.jpg",
			"https://images.clasohlson.com/medias/sys_master/hdd/h89/68105438199838.jpg"
		]
	},
	{
		"name": "Simfena",
		"description": "Simhjälpmedel med hajfena, perfekt för att skrämma slag på kompisarna!",
		"price": 199,
		"productid": "VRT002",
		"picture": [
			"https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AC4GU2/3ac683df32cb473190ebdfa229af2f36.jpg/f/swimfin-antracitgraa.jpg?height=960&transparent=1&borderless=1",
			"https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AC4GU2/3f7ea087adbc48efa240e51486955c2b.jpg/f/swimfin-antracitgraa.jpg?height=960&transparent=1&borderless=1",
			"https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AC4GU2/893bf9affcfe4948b386d82a6a2ba51f.jpg/f/swimfin-antracitgraa.jpg?height=960&transparent=1&borderless=1"
		]
	},
	{
		"name": "Simglasögon",
		"description": "Simglasögon för barn. Ett imfritt och uv-skyddat simglasöga med clips för att enkelt justera bandet.",
		"price": 169,
		"productid": "BP001",
		"picture": [
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryMantisKids-Blue-ClearLens_2.jpg?v=1655381736&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryMantisKids-Blue-ClearLens_1.jpg?v=1655381738&width=950",
			"https://cdn.shopify.com/s/files/1/0188/6063/8272/products/WateryMantisKids-Blue-ClearLens_6_1.jpg?v=1672820195&width=950"
		]
	},
	{
		"name": "Badring enhörning",
		"description": "För dig som vill ha en badring med axtra allt!",
		"price": 229,
		"productid": "VRB001",
		"picture": [
			"https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1598740_Fs&mw=1500&fmt=webp",
			"https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1598740_De_03&mw=1500&fmt=webp",
			"https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1598740_De_01&mw=1500&fmt=webp"
		]
	},
	{
		"name": "Badanka",
		"description": "Klassisk badanka, går alltid hem!",
		"price": 49,
		"productid": "VHB001",
		"picture": [
			"https://www.klubbensport.se/Media/Cache/Images/1/2/WEB_Image_Badanka_Klassisk__li1607_12091052014_plid_128002.jpeg",
			"https://www.klubbensport.se/Media/Cache/Images/1/2/WEB_Image_Badanka_Klassisk__li1607-1426641677_plid_128002.jpeg",
			"https://www.klubbensport.se/Media/Cache/Images/1/2/WEB_Image_Badanka_Klassisk__li1607_21018493156_plid_128002.jpeg"
		]
	},
	{
		"name": "Badmadrass",
		"description": "En badmadrass för dig som hellre slappar i poolen än leker!",
		"price": 149,
		"productid": "VSP001",
		"picture": [
			"https://asset.conrad.com/media10/isa/160267/c1/-/sv/002377671PI02/image.jpg?x=&y=",
			"https://asset.conrad.com/media10/isa/160267/c1/-/sv/002377671PI03/image.jpg?x=&y=",
			"https://asset.conrad.com/media10/isa/160267/c1/-/sv/002377671PI05/image.jpg?x=&y="
		]
	},
	{
		"name": "Dykringar",
		"description": "Paket med 3 dykringar, Perfekt när du vill träna på att dyka och hämta saker på botten.",
		"price": 89,
		"productid": "VFL001",
		"picture": [
			"https://www.klubbensport.se/Media/Cache/Images/3/5/WEB_Image_Dyringar_Toypedo_%C3%98_14_cm_Set_med_3_dykri_248666__1108841470_plid_340065.jpeg",
			"https://www.klubbensport.se/Media/Cache/Images/3/5/WEB_Image_Dyringar_Toypedo_%C3%98_14_cm_Set_med_3_dykri_248666__5385476002_plid_340065.jpeg",
			"https://www.klubbensport.se/Media/Cache/Images/3/5/WEB_Image_Dyringar_Toypedo_%C3%98_14_cm_Set_med_3_dykri_248666__62039637897_plid_340065.jpeg"
		]
	}
]

export default testData