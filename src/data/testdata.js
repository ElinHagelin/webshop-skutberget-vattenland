const testData = [
	{
		"name": "Badring med motiv",
		"description": "En badring med roliga djurmotiv som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 149,
		"productid": "BR-001",
		"picture": [
			"https://example.com/images/badring-djur-1.jpg",
			"https://example.com/images/badring-djur-2.jpg",
			"https://example.com/images/badring-djur-3.jpg"
		]
	},
	{
		"name": "Badring enfärgad",
		"description": "En färgglad badring som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"productid": "BR-001",
		"picture": [
			"https://example.com/images/badring-djur-1.jpg",
			"https://example.com/images/badring-djur-2.jpg",
			"https://example.com/images/badring-djur-3.jpg"
		]
	},
	{
		"name": "Armpuffar",
		"description": "Färgglada armpuffar. Perfekt för de minsta barnen! Kommer i 2-pack.",
		"price": 89,
		"productid": "VL-001",
		"picture": [
			"https://example.com/images/vattenleksak-1.jpg",
			"https://example.com/images/vattenleksak-2.jpg",
			"https://example.com/images/vattenleksak-3.jpg"
		]
	},
	{
		"name": "Flytande volleybollnät",
		"description": "Ett flytande volleybollnät som gör det möjligt att spela beachvolleyboll i vattnet. Perfekt för en dag på stranden!",
		"price": 799,
		"productid": "FV-001",
		"picture": [
			"https://example.com/images/volleybollnat-1.jpg",
			"https://example.com/images/volleybollnat-2.jpg",
			"https://example.com/images/volleybollnat-3.jpg"
		]
	},
	{
		"name": "Poolnudel",
		"description": "Färgglad poolnudel, perfekt för att slappa i poolen!",
		"price": 249,
		"productid": "VK-001",
		"picture": [
			"https://example.com/images/vattenkanon-1.jpg",
			"https://example.com/images/vattenkanon-2.jpg",
			"https://example.com/images/vattenkanon-3.jpg"
		]
	},
	{
		"name": "Flytande basketkorg",
		"description": "En flytande basketkorg som gör det möjligt att spela basket i vattnet. Perfekt för en dag på stranden!",
		"price": 599,
		"productid": "FBK-001",
		"picture": [
			"https://example.com/images/basketkorg-1.jpg",
			"https://example.com/images/basketkorg-2.jpg",
			"https://example.com/images/basketkorg-3.jpg"
		]
	},
	{
		"name": "Badboll flerfärgad",
		"description": "En badboll med roligt tryck som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 99,
		"productid": "BB-001",
		"picture": [
			"https://example.com/images/badboll-1.jpg",
			"https://example.com/images/badboll-2.jpg",
			"https://example.com/images/badboll-3.jpg"
		]
	},
	{
		"name": "Badboll enfärgad",
		"description": "En färgglad badboll som passar både barn och vuxna. Tillverkad av hållbart PVC-material.",
		"price": 79,
		"productid": "BB-001",
		"picture": [
			"https://example.com/images/badboll-1.jpg",
			"https://example.com/images/badboll-2.jpg",
			"https://example.com/images/badboll-3.jpg"
		]
	}
	// ,
	// {
	// 	"name": "Cyklop",
	// 	"description": "Ett cyklop med snorkel för dig som vill se under vattnet utan att få vatten i ögonen!",
	// 	"price": 199,
	// 	"productid": "WR-1001",
	// 	"picture": [
	// 		"https://example.com/water-rocket-1.jpg",
	// 		"https://example.com/water-rocket-2.jpg",
	// 		"https://example.com/water-rocket-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Simdyna",
	// 	"description": "En fin simdyna som passar perfekt för simning eller avkoppling på vattnet.",
	// 	"price": 129,
	// 	"productid": "SD-2001",
	// 	"picture": [
	// 		"https://example.com/mermaid-float-1.jpg",
	// 		"https://example.com/mermaid-float-2.jpg",
	// 		"https://example.com/mermaid-float-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Vattenpistol",
	// 	"description": "En klassisk vattenpistol för härlig vattenlek!",
	// 	"price": 79,
	// 	"productid": "VP-3001",
	// 	"picture": [
	// 		"https://example.com/water-gun-1.jpg",
	// 		"https://example.com/water-gun-2.jpg",
	// 		"https://example.com/water-gun-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Vattenkanna",
	// 	"description": "För sinnesstimulerande vatten- och sandlek",
	// 	"price": 69,
	// 	"productid": "SS-4001",
	// 	"picture": [
	// 		"https://example.com/floating-lounge-chair-1.jpg",
	// 		"https://example.com/floating-lounge-chair-2.jpg",
	// 		"https://example.com/floating-lounge-chair-3.jpg"
	// 	]
	// }
	// ,
	// {
	// 	"name": "Vattenspruta",
	// 	"description": "En rolig vattenspruta för lek och skoj på vattnet!",
	// 	"price": 59,
	// 	"productid": "VS-5001",
	// 	"picture": [
	// 		"https://example.com/water-squirt-1.jpg",
	// 		"https://example.com/water-squirt-2.jpg",
	// 		"https://example.com/water-squirt-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Simring",
	// 	"description": "En söt delfin-simring för de minsta barnen.",
	// 	"price": 79,
	// 	"productid": "SR-6001",
	// 	"picture": [
	// 		"https://example.com/dolphin-swim-ring-1.jpg",
	// 		"https://example.com/dolphin-swim-ring-2.jpg",
	// 		"https://example.com/dolphin-swim-ring-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Badbåt",
	// 	"description": "En lekfull badbåt som flyter på vattnet.",
	// 	"price": 149,
	// 	"productid": "BB-7001",
	// 	"picture": [
	// 		"https://example.com/water-boat-1.jpg",
	// 		"https://example.com/water-boat-2.jpg",
	// 		"https://example.com/water-boat-3.jpg",
	// 	]
	// },
	// {
	// 	"name": "Vattenkanon",
	// 	"description": "En superkul vattenkanon som sprutar vatten upp till 10 meter!",
	// 	"price": 299,
	// 	"productid": "VPK001",
	// 	"picture": [
	// 		"https://example.com/toy1-1.jpg",
	// 		"https://example.com/toy1-2.jpg",
	// 		"https://example.com/toy1-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Simfena",
	// 	"description": "Simhjälpmedel med hajfena, perfekt för att skrämma slag på kompisarna!",
	// 	"price": 199,
	// 	"productid": "VRT002",
	// 	"picture": [
	// 		"https://example.com/toy2-1.jpg",
	// 		"https://example.com/toy2-2.jpg",
	// 		"https://example.com/toy2-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Simglasögon",
	// 	"description": "Simglasögon för barn. Ett imfritt och uv-skyddat simglasöga med clips för att enkelt justera bandet.",
	// 	"price": 169,
	// 	"productid": "BP001",
	// 	"picture": [
	// 		"https://example.com/toy3-1.jpg",
	// 		"https://example.com/toy3-2.jpg",
	// 		"https://example.com/toy3-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Badring enhörning",
	// 	"description": "För dig som vill ha en badring med axtra allt!",
	// 	"price": 399,
	// 	"productid": "VRB001",
	// 	"picture": [
	// 		"https://example.com/toy4-1.jpg",
	// 		"https://example.com/toy4-2.jpg",
	// 		"https://example.com/toy4-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Badanka",
	// 	"description": "Klassisk badanka, går alltid hem!",
	// 	"price": 49,
	// 	"productid": "VHB001",
	// 	"picture": [
	// 		"https://example.com/toy5-1.jpg",
	// 		"https://example.com/toy5-2.jpg",
	// 		"https://example.com/toy5-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Badmadrass",
	// 	"description": "En badmadrass för dig som hellre slappar i poolen än leker!",
	// 	"price": 149,
	// 	"productid": "VSP001",
	// 	"picture": [
	// 		"https://example.com/toy6-1.jpg",
	// 		"https://example.com/toy6-2.jpg",
	// 		"https://example.com/toy6-3.jpg"
	// 	]
	// },
	// {
	// 	"name": "Dykringar",
	// 	"description": "Paket med 3 dykringar, Perfekt när du vill träna på att dyka och hämta saker på botten.",
	// 	"price": 89,
	// 	"productid": "VFL001",
	// 	"picture": [
	// 		"https://example.com/toy7-1.jpg",
	// 		"https://example.com/toy7-2.jpg",
	// 		"https://example.com/toy7-3.jpg"
	// 	]
	// }
]

export default testData