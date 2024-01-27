
onEvent('recipes', event => {
	redstoneTransmute(event)
	brassMachine(event)
})

function redstoneTransmute(event) {
event.replaceInput(
	"create:electron_tube",
	Ingredient.of([Item.of("immersiveengineering:electron_tube"), "create:electron_tube"])
);
event.replaceInput({ id: TE('redstone_servo') }, MC('iron_ingot'), TE('lead_ingot'))

//红石浇筑
event.recipes.createFilling(BO("redstone_root"), [[BO("living_root"), 'twilightforest:liveroot'], Fluid.of(TE('redstone'), 100)])
event.recipes.createFilling(TE("redprint"), [MC('paper'), Fluid.of(TE('redstone'), 200)])
event.recipes.createFilling(TE("redstone_servo"), [TE('lead_plate'), Fluid.of(TE('redstone'), 200)])

let redstoneTransmute = (input, output, type, amount) => {
	event.custom({
		"type": "tconstruct:" + type,
		"cast": { "item": input },
		"cast_consumed": true,
		"fluid": {
			"name": "thermal:redstone",
			"amount": amount
		},
		"result": output,
		"cooling_time": 30
	})
}
redstoneTransmute(MC("cobblestone"), MC("netherrack"), "casting_basin", 50)
redstoneTransmute(MC("sand"), MC("red_sand"), "casting_basin", 50)
redstoneTransmute('twilightforest:liveroot', BO("redstone_root"), "casting_table", 100)
redstoneTransmute(BO("living_root"), BO("redstone_root"), "casting_table", 100)
redstoneTransmute(TE('lead_plate'), TE("redstone_servo"), "casting_table", 200)
redstoneTransmute(MC('paper'), TE("redprint"), "casting_table", 200)
}

function brassMachine(event) {
//螺丝刀
event.remove({ id: PR_C('screwdriver') })
event.shaped(PR_C('screwdriver'), [
	'  C',
	'SC ',
	'BS '
], {
	C: 'createaddition:iron_rod',
	B: 'minecraft:iron_ingot',
	S: 'minecraft:lapis_lazuli'
})

//陨石无限磨
event.recipes.createMilling([AE2('sky_dust'), AE2('sky_stone_block')], AE2('sky_stone_block')).processingTime(1000)

//沙子洗涤配方
event.remove({ id: CR('splashing/gravel') })
event.recipes.createSplashing([//砂砾
	Item.of(MC('iron_nugget', 2)).withChance(0.25),
	Item.of(MC('flint')).withChance(0.25)
], 'minecraft:gravel')

event.remove({ id: CR('splashing/red_sand') })
event.recipes.createSplashing([//红沙
	Item.of(MC('gold_nugget', 2)).withChance(0.25),
	Item.of(MC('dead_bush')).withChance(0.25)
], 'minecraft:red_sand')

event.recipes.createSplashing([//橙沙
	Item.of(TE('nickel_nugget', 2)).withChance(0.25),
	Item.of('biomesoplenty:dead_branch').withChance(0.25)
], 'biomesoplenty:orange_sand')

event.recipes.createSplashing([//白沙
	Item.of(TE('tin_nugget', 2)).withChance(0.25),
	Item.of('biomesoplenty:dead_branch').withChance(0.25)
], 'biomesoplenty:white_sand')

event.recipes.createSplashing([//黑沙
	Item.of(MC('clay_ball')).withChance(0.5)
], 'biomesoplenty:black_sand')
//沙子转变
event.recipes.botania.mana_infusion('biomesoplenty:orange_sand', 'minecraft:red_sand', 250)
event.recipes.botania.mana_infusion('biomesoplenty:white_sand', 'biomesoplenty:orange_sand', 250)
event.recipes.botania.mana_infusion('biomesoplenty:black_sand', 'biomesoplenty:white_sand', 250)
event.recipes.botania.mana_infusion('minecraft:red_sand', 'biomesoplenty:black_sand', 250)

/*
event.remove({ id: CR("sequenced_assembly/precision_mechanism") })
let p = CR('incomplete_precision_mechanism')//100%精密构件
event.recipes.createSequencedAssembly([
	CR('precision_mechanism'),
], KJ('kinetic_mechanism'), [
	event.recipes.createDeploying(p, [p, [CR('electron_tube'), IM('electron_tube')]]),
	event.recipes.createDeploying(p, [p, [CR('electron_tube'), IM('electron_tube')]]),
	event.recipes.createDeploying(p, [p, '#forge:screwdrivers'])
]).transitionalItem(p)
	.loops(1)
	.id('kubejs:precision_mechanism1')
		
let p2 = KJ('incomplete_precision_mechanism')//85%精密构件
event.recipes.createSequencedAssembly([
	Item.of(CR("precision_mechanism")).withChance(0.85),
     Item.of(KJ("handmade_precision_mechanism")).withChance(0.15),
], F('#plates/gold'), [
	event.recipes.createDeploying(p2, [p2, [CR('electron_tube'), IM('electron_tube')]]),
	event.recipes.createDeploying(p2, [p2, [CR('electron_tube'), IM('electron_tube')]]),
	event.recipes.createDeploying(p2, [p2, '#forge:screwdrivers'])
]).transitionalItem(p2)
	.loops(1)
	.id('kubejs:precision_mechanism2')

let p4 = KJ('incomplete_precision_mechanism')//200%精密构件
event.recipes.createSequencedAssembly([
	Item.of(CR("precision_mechanism", 2)),
], KJ('kinetic_mechanism'), [
	event.recipes.createDeploying(p4, [p4, 'create_dd:integrated_circuit']),
	event.recipes.createDeploying(p4, [p4, [CR('electron_tube'), IM('electron_tube')]]),
	event.recipes.createDeploying(p4, [p4, [CR('electron_tube'), IM('electron_tube')]]),
]).transitionalItem(p4)
	.loops(1)
	.id('kubejs:precision_mechanism3')
*/

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 3)),
		Ingredient.of(CR('brass_casing')),
	],
	result: [
		Item.of(KJ('brass_machine'))
	],
	energy: 1000
})

event.shaped(KJ('brass_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: CR('brass_casing'),
	S: CR('precision_mechanism')
})

let brass_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:brass_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:brass_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:brass_machine')
}

brass_machine('create:mechanical_crafter', 3, MC('crafting_table'))
brass_machine('create:sequenced_gearshift', 2)
brass_machine('create:rotation_speed_controller', 1)
brass_machine('create:mechanical_arm', 1)
brass_machine('create:stockpile_switch', 2)
brass_machine('create:content_observer', 2)
brass_machine('thermal:machine_press', 1, MC('dropper'))
brass_machine('torchmaster:feral_flare_lantern', 1, MC('glowstone_dust'))
brass_machine(PP('item_terminal'), 1, TE('diamond_gear'))
brass_machine(PP('pressurizer'), 1, CR('propeller'))
brass_machine('create:brass_funnel', 4)
brass_machine('create:brass_tunnel', 4)
brass_machine('kubejs:pipe_module_tier_1', 4)
brass_machine('createaddition:tesla_coil', 2, IM('coil_mv'))
//brass_machine('createaddition:accumulator', 1, KJ('battery'))
brass_machine('create:elevator_pulley', 1, SP('#ropes'))
brass_machine('createdieselgenerators:diesel_engine', 1, 'createdieselgenerators:engine_piston')
//气动
brass_machine('compressedcreativity:rotational_compressor', 1, PC('air_canister'))

event.stonecutting(Item.of('create:brass_funnel'), 'create:brass_tunnel')
event.stonecutting(Item.of('create:brass_tunnel'), 'create:brass_funnel')

event.remove({ output: 'createdieselgenerators:large_diesel_engine' })	
event.smithing('createdieselgenerators:large_diesel_engine', 'createdieselgenerators:diesel_engine', 'create_dd:reinforcement_plating')
event.recipes.createMechanicalCrafting('createdieselgenerators:large_diesel_engine', "AB", { A: 'createdieselgenerators:diesel_engine', B: 'create_dd:reinforcement_plating' })
event.remove({ output: 'createdieselgenerators:huge_diesel_engine' })	
event.smithing('createdieselgenerators:huge_diesel_engine', 'createdieselgenerators:large_diesel_engine', 'create_dd:reinforcement_plating')
event.recipes.createMechanicalCrafting('createdieselgenerators:huge_diesel_engine', "AB", { A: 'createdieselgenerators:large_diesel_engine', B: 'create_dd:reinforcement_plating' })
}