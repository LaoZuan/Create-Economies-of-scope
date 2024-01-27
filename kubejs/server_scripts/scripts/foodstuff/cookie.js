
onEvent('recipes', event => {
	cookie(event)
})

function cookie(event) {

event.recipes.createMixing([Fluid.of(KJ("egg_liquid"), 50)], F('#eggs'))//蛋液
event.recipes.createMixing(Fluid.of(KJ("flour_paste"), 45), [Fluid.of(KJ("egg_liquid"), 50), CR('wheat_flour', 2), MC('sugar')])//面糊
event.recipes.createMixing(Fluid.of(KJ("flour_paste"), 75), [Fluid.of(KJ("egg_liquid"), 50),Fluid.of(PC("yeast_culture"), 25), CR('wheat_flour', 2), MC('sugar')])//面糊倍产
event.recipes.createCompacting(CR("dough"), [Fluid.of(KJ("flour_paste"), 15)])//面团
event.recipes.createCompacting("createaddition:cake_base", [Fluid.of(KJ("flour_paste"), 20)])//蛋糕底座

//奶酪轮
event.remove({ id: "thermal:cheese_wheel", })
//酵母菌发酵
event.custom({
"type": "createdieselgenerators:basin_fermenting",
"ingredients": [
    {
		"amount": 1000,
		"fluid": "minecraft:milk"
	},
	{
		"amount": 250,
		"fluid": "pneumaticcraft:yeast_culture"
	}
	],
"results": [
	{
		"item": "thermal:cheese_wheel"
	}
	],
"processingTime": 75,
"heatRequirement": "lowheated"
})
//萨蒂根茎发酵
event.custom({
"type": "createdieselgenerators:basin_fermenting",
"ingredients": [
    {
		"amount": 1000,
		"fluid": "minecraft:milk"
	},
	{
		"item": "thermal:sadiroot"
	}
	],
"results": [
	{
		"item": "thermal:cheese_wheel"
	}
	],
"processingTime": 150,
"heatRequirement": "lowheated"
})
//压塑成型
event.shaped(TE("cheese_wheel"), [
	'SS',
	'SS'
], {
	S: TE("cheese_wedge")
})

}
