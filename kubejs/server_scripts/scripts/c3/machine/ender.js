
onEvent('recipes', event => {
	enderium_ingot(event)
	enderMachine(event)
})

function enderium_ingot(event) {
event.remove({ id: TE("machines/crucible/crucible_ender_pearl") })
event.remove({ id: TE("machines/smelter/smelter_alloy_enderium") })

//热力
event.recipes.thermal.insolator(['phantasm:hanging_pream_berry'], 'phantasm:hanging_pream_leaves').water(1000)
event.recipes.thermal.insolator(['phantasm:pream_berry'], 'phantasm:hanging_pream_berry').water(1000)
event.recipes.thermal.insolator(['tconstruct:ender_slime_ball', '3x phantasm:hanging_pream_leaves'], 'phantasm:pream_berry').water(1000)
//沉浸
event.custom({"type":"immersiveengineering:cloche",
"results":[{"item":"phantasm:hanging_pream_berry"}],
"input":{"item":"phantasm:hanging_pream_leaves"},
"soil":{"item":"phantasm:pream_log"},
"time":2550,
"render":{"type":"stacking","block":"phantasm:pream_leaves"}
})
event.custom({"type":"immersiveengineering:sawmill",
"secondaries":[{"output":{"item":"phantasm:hanging_pream_leaves"},"stripping":false}],
"result":{"item":"phantasm:pream_berry"},
"input":{"item":"phantasm:hanging_pream_berry"},
"energy":10000
})
event.custom({"type":"immersiveengineering:squeezer",
"fluid":{"fluid":"tconstruct:ender_slime","amount":250},
"input":{"item":"phantasm:pream_berry"},
"energy":10000
})

event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), "phantasm:hanging_pream_berry", MC("ender_pearl")]).energy(10000)
event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), "phantasm:hanging_pream_berry", AE2("ender_dust", 4)]).energy(10000)
event.recipes.immersiveengineering.arc_furnace([TE("enderium_ingot")], TE("silver_ingot"), ["phantasm:hanging_pream_berry", MC('ender_pearl')]).time(400).energy(10000)
event.recipes.immersiveengineering.arc_furnace([TE("enderium_ingot")], TE("silver_ingot"), ["phantasm:hanging_pream_berry", AE2("ender_dust", 4)]).time(400).energy(10000)
}

function enderMachine(event) {

event.shaped(KJ('enderium_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('enderium_casing'),
	S: KJ('abstruse_mechanism')
})

let ender_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:enderium_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:enderium_machine', B: other_ingredient })
	}
	else
	event.stonecutting(Item.of(id, amount), 'kubejs:enderium_machine')
}

ender_machine("enderstorage:ender_chest", 1, MC('chest'))
ender_machine("enderstorage:ender_tank", 1, CR('fluid_tank'))
ender_machine("portality:controller", 1, MC('diamond'))
ender_machine(TE("upgrade_augment_3"), 1, MC('redstone'))
ender_machine(TE("dynamo_lapidary"), 1, TE('rf_coil'))
ender_machine(AE2("quantum_ring"), 1, AE2('energy_cell'))
ender_machine(AE2("quantum_link"), 1, AE2('fluix_pearl'))
ender_machine('kubejs:pipe_module_tier_3', 4)

}