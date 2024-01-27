onEvent('recipes', event => {
	rocketScience(event) //火箭科技
})

function rocketScience(event) {
event.remove({ output: 'beyond_earth:solar_panel' })
event.remove({ output: 'beyond_earth:coal_generator' })
event.remove({ output: 'beyond_earth:compressor' })
event.remove({ output: 'beyond_earth:fuel_refinery' })
event.remove({ output: 'beyond_earth:oxygen_gear' })
event.remove({ output: 'beyond_earth:water_pump' })
event.remove({ output: 'beyond_earth:nasa_workbench' })

let gear = TE("diamond_gear")
let plastic = KJ("matter_plastics")
let plastic_sheet = MEK("hdpe_sheet")
let casing = KJ("matter_casing")
let machine = AE2("controller")
let matrix = KJ("computation_matrix")

//一级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier1", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t1", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'Z D Z'
], {
	A: plastic,
	Z: plastic_sheet,
	M: machine,
	G: gear,
	S: matrix,
	B: 'beyond_earth:steel_tank',
	D: 'beyond_earth:steel_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

event.remove({ id: "beyond_earth:oxygen_loader" })
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_loader", [
	'AAA',
	'GSG',
	'AMA'
], {
	A: plastic,
	M: machine,
	G: gear,
	S: MC("bucket")
})

event.remove({ id: "beyond_earth:oxygen_bubble_distributor" })
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_bubble_distributor", [
	'AAA',
	'GSG',
	'AMA'
], {
	A: plastic,
	M: machine,
	G: gear,
	S: CR("propeller")
})

let pattern = [
	' A ',
	'GSG',
	' A '
];

event.remove({ id: "beyond_earth:space_suit" })
event.recipes.createMechanicalCrafting("beyond_earth:space_suit", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: CR("netherite_backtank")
	})

event.remove({ id: "beyond_earth:oxygen_mask" })	
event.recipes.createMechanicalCrafting("beyond_earth:oxygen_mask", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: CR("netherite_diving_helmet")
	})

event.remove({ id: "beyond_earth:space_leggings" })	
event.recipes.createMechanicalCrafting("beyond_earth:space_pants", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: MC("iron_leggings")
	})

event.remove({ id: "beyond_earth:space_boots" })		
event.recipes.createMechanicalCrafting("beyond_earth:space_boots", pattern,
	{
		A: plastic,
		G: CR("golden_sheet"),
		S: MC("iron_boots")
	})

event.remove({ id: "beyond_earth:rocket_launch_pad" })	
let smithAndMechCraft = (r, i1, i2) => {
	event.smithing(r, i1, i2)
	event.recipes.createMechanicalCrafting(r, "AB", { A: i1, B: i2 })
}

smithAndMechCraft("9x beyond_earth:rocket_launch_pad", 'create_dd:steel_block', plastic)

//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:hydrogen")).energy(100000)
//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:oxygen")).energy(10000)

////航空燃油
event.remove({ id: "beyond_earth:fuel_refining/fuel_from_oil" })
//沉浸蒸馏
event.custom({
  "type": "immersivepetroleum:distillation",
  "results": [
    {
      "fluid": "beyond_earth:fuel",
      "amount": 10
    }
  ],
  "input": {
    "tag": "kubejs:gasoline",
    "amount": 10
  },
  "time": 1,
  "energy": 2048
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluid": "createdieselgenerators:gasoline",
      "amount": 10
    }
  ],
  "heatRequirement": "superheated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "beyond_earth:fuel",
      "amount": 10
    }
  ]
})
//热力蒸馏
event.custom({
	"type": "thermal:refinery",
	"ingredient": {
		"fluid": "createdieselgenerators:gasoline",
		"amount": 200
	},
	"result": [
		{
			"fluid": "beyond_earth:fuel",
			"amount": 200
		  }
	],
	"energy": 40960
})


//// 月球后

//月球奶酪转戴斯
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "beyond_earth:cheese"
    }
  ],
  "output": [
    {
      "item": "beyond_earth:desh_nugget"
    },
    {
      "item": "beyond_earth:desh_nugget"
    }
  ]
})

//二级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier2", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t2", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'Z D Z'
], {
	A: plastic,
	Z: plastic_sheet,
	M: machine,
	G: 'beyond_earth:desh_plate',
	S: matrix,
	B: 'beyond_earth:desh_tank',
	D: 'beyond_earth:desh_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

//三级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier3", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t3", [
	'  G  ',
	' AYA ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'Z D Z'
], {
	A: plastic,
	Z: plastic_sheet,
	M: machine,
	G: 'beyond_earth:compressed_ostrum',
	S: matrix,
	B: 'beyond_earth:ostrum_tank',
	D: 'beyond_earth:ostrum_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})

//四级火箭
event.remove({ id: "beyond_earth:nasa_workbenching/tier4", })
event.recipes.createMechanicalCrafting("beyond_earth:rocket_t4", [
	'  G  ',
	' AYA ',
	' YYY ',
	' YEY ',
	' SES ',
	' YEY ',
	'GYYYG',
	'ABMBA',
	'Z D Z'
], {
	A: plastic,
	Z: plastic_sheet,
	M: machine,
	G: 'beyond_earth:compressed_calorite',
	S: matrix,
	B: 'beyond_earth:calorite_tank',
	D: 'beyond_earth:calorite_engine',
	E: '#thermal:glass/hardened',
	Y: casing
})


}