onEvent('recipes', event => {
	water(event)
})

function water(event) {
////烧开水
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:-1}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		},
		{
		  "item": "mekanism:salt",
		  "chance": 0.02
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:0}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		},
		{
		  "item": "mekanism:salt",
		  "chance": 0.015
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:1}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:2}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})

//盐水
event.recipes.createMixing(Fluid.of(MEK("brine"), 15), ['mekanism:salt', Fluid.of('minecraft:water', 15)])
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 15,
			"fluid": "mekanism:brine"
		}
	],
	"results": [
		{
		  "item": "mekanism:salt",
		}
	],
	"processingTime": 5,
	"heatRequirement": "lowheated"
})
}