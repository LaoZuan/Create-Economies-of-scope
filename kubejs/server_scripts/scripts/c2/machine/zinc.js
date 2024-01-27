
onEvent('recipes', event => {
	liquid_soul(event)
	zincMachine(event)
})

function liquid_soul(event) {
event.remove({ id: TC('smeltery/melting/soul/sand') })

event.recipes.createDeploying([FA('soulless_sand'), FA('soul')], [MC('soul_sand'), KJ('#soul_extractor')])//灵魂沙提魂
event.recipes.createHaunting([Item.of(MC('soul_sand'))], FA('soulless_sand'))//失魂沙缠魂

event.recipes.createMixing(Fluid.of(TC("liquid_soul"), 500), [MC('twisting_vines'), MC('weeping_vines')]).heated()
event.recipes.createMixing(Fluid.of(TC("liquid_soul"), 125), [FA("soul")])

//恶魔意志
event.custom({
  "type": "create_dd:superheating",
  "ingredients": [
    {
      "item": "forbidden_arcanus:soul"
    }
  ],
  "results": [
    {
      "chance": 0.1,
      "item": "bloodmagic:corrosivecrystal"
    },
	{
      "chance": 0.1,
      "item": "bloodmagic:defaultcrystal"
    },
	{
      "chance": 0.1,
      "item": "bloodmagic:vengefulcrystal"
    },
	{
      "chance": 0.1,
      "item": "bloodmagic:destructivecrystal"
    },
	{
      "chance": 0.1,
      "item": "bloodmagic:steadfastcrystal"
    }
  ]
})

}

function zincMachine(event) {
event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })

//焦黑炉核心
donutCraft(event, TC('foundry_controller'), TC('scorched_bricks'), KJ('infernal_mechanism'))

event.shaped(KJ('zinc_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('zinc_casing'), 'create_dd:industrial_casing'],
	S: KJ('infernal_mechanism')
})

/*
event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 6)),
		Ingredient.of(KJ('zinc_casing')),
	],
	result: [
		Item.of(KJ('zinc_machine'))
	],
	energy: 1000
})
*/

let zinc_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:zinc_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:zinc_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:zinc_machine')
}

zinc_machine(TE('device_rock_gen'), 1, MC('piston'))
zinc_machine(TE('device_collector'), 1, MC('ender_pearl'))
zinc_machine(TE('device_nullifier'), 1, MC('lava_bucket'))
zinc_machine(TE('device_potion_diffuser'), 1, MC('glass_bottle'))
zinc_machine('storagedrawers:controller', 1, MC('diamond'))
zinc_machine('storagedrawers:controller_slave', 1, MC('gold_ingot'))
zinc_machine('torchmaster:megatorch', 1, MC('torch'))
zinc_machine('thermal:upgrade_augment_2', 1, MC('redstone'))
zinc_machine('create_dd:industrial_fan', 1, CR('propeller'))
zinc_machine('create_dd:superheating_sail', 1)
zinc_machine('create_dd:furnace_engine', 1, 'create_dd:reinforcement_plating')
//采油机
zinc_machine('createdieselgenerators:pumpjack_bearing', 1)
zinc_machine('createdieselgenerators:pumpjack_head', 1)
zinc_machine('createdieselgenerators:pumpjack_crank', 1)
zinc_machine('createdieselgenerators:distillation_controller', 2)
/*
//鸡舍
zinc_machine('chickens:breeder', 1, F('#seeds'))
zinc_machine('chickens:roost', 1, MC('hay_block'))
*/

//密封罐
event.remove({ id: 'createdieselgenerators:crafting/canister' })
event.shaped('createdieselgenerators:canister', [
	' S ',
	'PMP',
	' S '
], {
	P: CR("iron_sheet"),
	M: MC("barrel"),
	S: CR("andesite_alloy")
})

//石油探测器
event.remove({ id: 'createdieselgenerators:crafting/oil_scanner' })
event.shaped('createdieselgenerators:oil_scanner', [
	'PMP',
	'PSP',
	' S '
], {
	P: CR("iron_sheet"),
	M: KJ("infernal_mechanism"),
	S: CR("andesite_alloy")
})
}