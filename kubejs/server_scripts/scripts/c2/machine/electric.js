
onEvent('recipes', event => {
	redstone_acid(event)
	electricMachine(event)
})

function redstone_acid(event) {
//红石酸
event.remove({ id: IM("crafting/redstone_acid") })
event.remove({ id: IM("mixer/redstone_acid") })
event.custom({"type":"immersiveengineering:mixer",
    "inputs":[
	{"tag":"forge:dusts/redstone"},
	{"tag":"forge:dusts/saltpeter"}],
	"result":{
	"fluid":"immersiveengineering:redstone_acid","amount":500},
	"fluid":{"tag":"minecraft:water","amount":500},
	"energy":1600
})
event.custom({"type":"immersiveengineering:mixer",
    "inputs":[
	{"tag":"forge:dusts/saltpeter"}],
	"result":{
	"fluid":"immersiveengineering:redstone_acid","amount":500},
	"fluid":{"tag":"forge:redstone","amount":500},
	"energy":1600
})

event.recipes.createMixing(Fluid.of(IM("redstone_acid"), 200), [Fluid.of(MC("water"), 200), F('#dusts/redstone'), F('#dusts/saltpeter')])
event.recipes.createMixing(Fluid.of(IM("redstone_acid"), 200), [Fluid.of(TE("redstone"), 250), F('#dusts/saltpeter')])
}

function electricMachine(event) {
event.remove({ id: 'beyond_earth:iron_stick' })
event.remove({ id: IM('crafting/stick_iron') })
event.remove({ input: 'immersiveengineering:storage_steel' })

//红石通量线圈
event.remove({ id: TE("rf_coil") })
event.shapeless(TE("rf_coil"), ['createaddition:gold_rod', PR_T('red_alloy_wire')])
//蓝图制作
event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"minecraft:gold_ingot"}, 
		{"item":"projectred_transmission:red_alloy_wire"},
	],
    "category":"components",
    "result":{"count":2, "item":"thermal:rf_coil"}
})

//马达
event.remove({ id: 'projectred_core:motor' })
let mo = 'kubejs:incomplete_motor'
event.recipes.createSequencedAssembly([
	PR_C('motor'),
], 'create:precision_mechanism', [
	event.recipes.createDeploying(mo, [mo, TE('rf_coil')]),
	event.recipes.createDeploying(mo, [mo, 'createaddition:iron_rod']),
]).transitionalItem(mo)
	.loops(2)
	.id('kubejs:motor')

event.shaped(KJ('uncharged_electric_machine'), [
	'BBB',
	'BCB',
	'BBB'
], {
	C: ['createindustry:steel_casing', 'create_dd:steel_casing'],
	B: PR_C('motor')
})

//充能
event.custom({
	"type":"createaddition:charging",
	"input": {
      	"item": "kubejs:uncharged_electric_machine",
		"count": 1
	},
	"result": {
		"item": "kubejs:electric_machine",
		"count": 1
	},
	"energy": 50000
})

let electric_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:electric_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:electric_machine', B: other_ingredient })
	}
	else
	event.stonecutting(Item.of(id, amount), 'kubejs:electric_machine')
}
	
electric_machine('immersiveengineering:storage_steel', 4)
electric_machine('create_dd:accelerator_motor', 1)
electric_machine('createaddition:electric_motor', 1)
electric_machine('createaddition:modular_accumulator', 2, 'thermal:lead_ingot')
electric_machine('createaddition:portable_energy_interface', 2)
electric_machine('createaddition:alternator', 1, IM('component_iron'))
electric_machine('thermal:dynamo_numismatic', 1, TE('rf_coil'))
electric_machine(MEK('pigment_extractor'), 1, MC('bucket'))
electric_machine(MEK('pigment_mixer'), 1, CR('whisk'))
electric_machine(MEK('painting_machine'), 1, MEK('dye_base'))

let steel_engineering = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'immersiveengineering:storage_steel', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'immersiveengineering:storage_steel', B: other_ingredient })
	}
	else
	event.stonecutting(Item.of(id, amount), 'immersiveengineering:storage_steel')
}
	
steel_engineering(IM('light_engineering'), 2, CR('brass_ingot'))
steel_engineering(IM('rs_engineering'), 2, MC('redstone'))
steel_engineering(IM('heavy_engineering'), 2, TE('electrum_ingot'))
steel_engineering(IM('radiator'), 2, PC('heat_sink'))
steel_engineering(IM('generator'), 2, IM('coil_mv'))
}