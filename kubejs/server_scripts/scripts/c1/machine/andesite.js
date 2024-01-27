onEvent('recipes', event => {
	sawdust(event)
	andesiteMachine(event)
})

function sawdust(event) {
//event.remove({ id: "createindustry:crafting/sawdust_from_block" })
//event.remove({ id: "createindustry:compacting/sawdust_block" })
event.remove({ id: "immersiveengineering:crafting/sawdust" })
event.remove({ output: "createdieselgenerators:wood_chip" })
event.remove({ id: "createdieselgenerators:crafting/chip_wood_block" })

//木齿轮
event.recipes.create.deploying({
    ingredients: [
      Ingredient.of('thermal:sawdust'),
      [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die")]
    ],
    results: [Item.of('kubejs:wood_gear')],
    keepHeldItem: true,
});

event.recipes.thermalPress('kubejs:wood_gear', [
	'thermal:sawdust',
	"thermal:press_gear_die",
]);

event.recipes.immersiveengineeringMetalPress('kubejs:wood_gear',
    'thermal:sawdust',
	"immersiveengineering:mold_gear"
);

//木屑处理
event.recipes.createCompacting(TC("pattern"), [F("#sawdust"), F("#sawdust")])
event.shaped('createdieselgenerators:chip_wood_block', [//木屑块
	'SS',
	'SS',
	], {
	S: 'thermal:sawdust'
})
event.shaped('immersiveengineering:sawdust', [//木屑地板
	'S',
	], {
	S: 'thermal:sawdust'
})
/*
event.custom({//刨花板
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "createdieselgenerators:chip_wood_block"
	  },
	  {
		"fluidTag": "tconstruct:tooltips/slime",
		"amount": 50
	  }
	],
	"results": [
	  {
		"item": "createindustry:chipwood"
	  }
	]
})
*/
event.custom({//纤维块
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "thermal:sawdust"
	  },
	  {
		"fluid": "immersiveengineering:phenolic_resin",
		"amount": 125
	  }
	],
	"results": [
	  {
		"item": "immersiveengineering:fiberboard"
	  }
	]
})

event.recipes.createMilling(TE("sawdust", 2), "#forge:rods/wooden")
event.recipes.createMilling(TE("sawdust", 2), "#minecraft:wooden_slabs")
event.recipes.createMilling(TE("sawdust", 4), "#minecraft:planks")
event.recipes.createMilling(TE("sawdust", 2), "#immersive_weathering:bark")
event.recipes.createCrushing(TE("sawdust", 2), "#forge:rods/wooden")
event.recipes.createCrushing(TE("sawdust", 2), "#minecraft:wooden_slabs")
event.recipes.createCrushing(TE("sawdust", 4), "#minecraft:planks")
event.recipes.createCrushing(TE("sawdust", 2), "#immersive_weathering:bark")

event.shaped(MC('stick', 1), [
	'S',
	], {
	S: '#immersive_weathering:bark'
})

}

function andesiteMachine(event) {

event.shapeless(KJ('kinetic_mechanism'), [
	F('#saws'), 
	CR('cogwheel'), 
	CR('andesite_alloy'), 
	'#minecraft:logs'])
	.id("kubejs:kinetic_mechanism_manual_only")
.damageIngredient(Item.of(KJ('stone_saw')))
.damageIngredient(Item.of(KJ('iron_saw')))
.damageIngredient(Item.of(KJ('diamond_saw')))
.damageIngredient(Item.of(KJ('netherite_saw')))
.damageIngredient(Item.of('create_dd:deforester_saw'))

//安山合金齿轮
event.recipes.create.deploying({
    ingredients: [
      Ingredient.of('create_dd:andesite_sheet'),
      [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die")]
    ],
    results: [Item.of('kubejs:andesite_alloy_gear')],
    keepHeldItem: true,
});

event.recipes.thermalPress('kubejs:andesite_alloy_gear', [
	'create:andesite_alloy',
	"thermal:press_gear_die",
]);

event.recipes.immersiveengineeringMetalPress('kubejs:andesite_alloy_gear',
    'create:andesite_alloy',
	"immersiveengineering:mold_gear"
);


event.recipes.createCompacting(MC("dripstone_block"), [MC("calcite"), MC("calcite"), MC("calcite")])



/*
event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('electrum_coin', 3)),
		Ingredient.of(CR('andesite_casing')),
	],
	result: [
		Item.of(KJ('andesite_machine'))
	],
	energy: 1000
})
*/

event.shaped(KJ('andesite_machine'), [
	'SSS',
	'SCS',
	'SSS'
	], {
		C: CR('andesite_casing'),
		S: KJ('kinetic_mechanism')
})
event.shaped(KJ('andesite_machine'), [
	'SBS',
	'BCB',
	'SBS'
	], {
		C: CR('andesite_casing'),
		B: KJ('kinetic_mechanism'),
		S: 'create_dd:inductive_mechanism',
})

	let andesite_machine = (id, amount, other_ingredient) => {
			event.remove({ output: id })
			if (other_ingredient) {
				event.smithing(Item.of(id, amount), 'kubejs:andesite_machine', other_ingredient)
				event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:andesite_machine', B: other_ingredient })
			}
			else
				event.stonecutting(Item.of(id, amount), 'kubejs:andesite_machine')
		}

	andesite_machine('create:portable_storage_interface', 2)
	andesite_machine('create:encased_fan', 1, CR('propeller'))
	andesite_machine('create:mechanical_press', 1, MC('iron_block'))
	andesite_machine('waterstrainer:strainer_base', 1, MC('iron_bars'))
	andesite_machine('thermal:device_fisher', 1, AC('iron_hook'))
	andesite_machine('create:mechanical_mixer', 1, CR('whisk'))
	andesite_machine('create:mechanical_drill', 1, TE('drill_head'))
	andesite_machine('create:mechanical_saw', 1, TE('saw_blade'))
	andesite_machine('create:deployer', 1, CR('brass_hand'))
	andesite_machine('create:mechanical_harvester', 2)
	andesite_machine('create:mechanical_plough', 2)
	andesite_machine('thermal:device_tree_extractor', 1, MC('bucket'))
	andesite_machine(AE2('sky_compass'), 1, AE2('charged_certus_quartz_crystal'))
	andesite_machine(AE2('charger'), 1, F('#gems/fluix'))
	andesite_machine('thermal:dynamo_stirling', 1, TE('rf_coil'))
	andesite_machine('thermal:device_hive_extractor', 1, F('#shears'))
	andesite_machine('thermal:device_composter', 1, MC('composter'))
	andesite_machine('create:andesite_funnel', 4)
	andesite_machine('create:andesite_tunnel', 4)
	andesite_machine('kubejs:pipe_module_utility', 4)
	andesite_machine('createaddition:rolling_mill', 1, ('create:shaft'))
	andesite_machine('create:mechanical_roller', 1, CR('crushing_wheel'))
	andesite_machine('create:contraption_controls', 1, MC('#buttons'))
	andesite_machine('create:rope_pulley', 1, SP('#ropes'))


	event.remove({ output: TE('drill_head') })
	event.shaped(TE('drill_head'), [
			'NN ',
			'NLP',
			' PL'
		], {
			N: MC('iron_nugget'),
			P: CR('iron_sheet'),
			L: TE('lead_ingot')
		})
	
	event.remove({ output: TE('saw_blade') })
	event.shaped(TE('saw_blade'), [
			'NPN',
			'PLP',
			'NPN'
		], {
			N: MC('iron_nugget'),
			P: CR('iron_sheet'),
			L: TE('lead_ingot')
		})	

	event.remove({ output: 'create_dd:bronze_saw' })	
    event.smithing('create_dd:bronze_saw', 'create:mechanical_saw', 'create_dd:reinforcement_plating')
	event.recipes.createMechanicalCrafting('create_dd:bronze_saw', "AB", { A: 'create:mechanical_saw', B: 'create_dd:reinforcement_plating' })
	event.remove({ output: 'create_dd:bronze_drill' })	
    event.smithing('create_dd:bronze_drill', 'create:mechanical_drill', 'create_dd:reinforcement_plating')
	event.recipes.createMechanicalCrafting('create_dd:bronze_drill', "AB", { A: 'create:mechanical_drill', B: 'create_dd:reinforcement_plating' })
}
