onEvent('recipes', event => {
	silicon(event)//硅
	circuits(event)//芯片
	ae2Science(event)//ae2
})

function silicon(event) {

	event.replaceOutput({ id: IM("cokeoven/coke") }, IM('coal_coke'), TE('coal_coke'))
	event.recipes.thermal.pyrolyzer([MC("charcoal", 2), Fluid.of(TE('creosote'), 50)], MC("#logs")).energy(1000)
	event.recipes.thermal.pyrolyzer([TE("coal_coke"), Fluid.of(TE('creosote'), 50)], MC("charcoal")).energy(2000)
	let t = KJ('incomplete_coke_chunk')
	event.recipes.createSequencedAssembly([
		KJ('coke_chunk'),
	], TE('coal_coke'), [
		event.recipes.createFilling(t, [t, Fluid.of(MC("water"), 250)]),
		event.recipes.createCutting(t, t).processingTime(100)
	]).transitionalItem(t)
		.loops(2)
		.id('kubejs:coke_cutting')

	event.recipes.createSplashing([
		Item.of(KJ("sand_ball")).withChance(0.125)
	], 'minecraft:sandstone')
	event.recipes.thermal.bottler(KJ("sand_ball"), [Fluid.of(MC("water"), 50), F("#sand/colorless")]).energy(1000)
	event.recipes.thermal.chiller(KJ("creosote_pellet"), [Fluid.of(TE("creosote"), 50)]).energy(1000)
	event.recipes.thermal.crucible(Fluid.of("mekanism:steam", 250), KJ("creosote_pellet")).energy(3000)
	event.remove({ id: TE("blitz_powder") })
	event.remove({ output: TE("basalz_powder") })
	event.remove({ output: TE("blizz_powder") })

	event.custom({
		"type": "thermal:pulverizer",
		"ingredient": { "item": "thermal:basalz_rod" },
		"energy": 800,
		"result": [
			{ "item": "thermal:basalz_powder", "chance": 2.5 },
			{ "item": "thermal:slag", "chance": 0.125 }
		]
	})

	event.custom({
		"type": "thermal:pulverizer",
		"ingredient": { "item": "thermal:blizz_rod" },
		"energy": 800,
		"result": [
			{ "item": "thermal:blizz_powder", "chance": 2.5 },
			{ "item": "thermal:niter", "chance": 0.125 }
		]
	})

	event.custom({
		"type": "thermal:pulverizer",
		"ingredient": { "item": "thermal:blitz_rod" },
		"energy": 800,
		"result": [
			{ "item": "thermal:blitz_powder", "chance": 2.5 },
			{ "item": "thermal:niter", "chance": 0.125 }
		]
	})

	event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_glass", 1000), F("#sand")).energy(6000)
	event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_glass", 1000), F("#glass/colorless")).energy(3000)
	event.recipes.thermal.pulverizer([CR("powdered_obsidian")], F("#obsidian")).energy(7000)

	let blizz = TE("blizz_powder")
	let basalz = TE("basalz_powder")
	let blitz = TE("blitz_powder")
	event.recipes.createEmptying([KJ("rough_sand"), Fluid.of(KJ("fine_sand"), 500)], KJ("sand_ball"))
	event.recipes.createCrushing([Item.of(blizz, 1), Item.of(blizz, 1).withChance(.5)], TE("blizz_rod"))
	event.recipes.createCrushing([Item.of(basalz, 1), Item.of(basalz, 1).withChance(.5)], TE("basalz_rod"))
	event.recipes.createCrushing([Item.of(blitz, 1), Item.of(blitz, 1).withChance(.5)], TE("blitz_rod"))
	event.recipes.createCompacting(TE("ice_charge"), [blizz, blizz, blizz, blizz, blizz, blizz, blizz, blizz])
	event.recipes.createCompacting(TE("earth_charge"), [basalz, basalz, basalz, basalz, basalz, basalz, basalz, basalz])
	event.recipes.createCompacting(TE("lightning_charge"), [blitz, blitz, blitz, blitz, blitz, blitz, blitz, blitz])

	event.recipes.createCompacting(KJ("silicon_compound"), [Fluid.of(KJ("fine_sand"), 500), KJ("purified_sand"), KJ("coke_chunk")])
	event.recipes.createCompacting(KJ("smoke_mote"), [Fluid.of("mekanism:steam", 300)])
	event.recipes.createPressing(TE("blitz_rod"), KJ("smoke_mote"))
	event.custom({
		"type": "thermal:refinery",
		"ingredient": {
			"fluid": "mekanism:steam",
			"amount": 325
		},
		"result": [
			{
				"item": "thermal:blitz_rod"
			}
		],
		"energy": 6000
	})

	event.recipes.thermal.smelter(
	    [IM("dust_hop_graphite", 16)],
	    [KJ("coke_chunk"), TE("lightning_charge")])
	    .energy(7000)

	event.recipes.thermal.smelter(
		[KJ("purified_sand")],
		[KJ("rough_sand"), TE("earth_charge")])
		.energy(5000)

	event.recipes.thermal.smelter(
		[AE2("silicon")],
		[KJ("silicon_compound"), TE("ice_charge")])
		.energy(5000)

	//event.recipes.thermal.numismatic_fuel(TE('silver_coin')).energy(100000)
	//event.recipes.thermal.numismatic_fuel(TE('gold_coin')).energy(6400000)

	//event.remove({ id: TE("machine/pyrolyzer/pyrolyzer_logs") })
	//event.remove({ id: CR("crushing/obsidian") })
	//event.remove({ type: TE("sawmill") })
	//event.remove({ type: TE("centrifuge") })
	event.remove({ output: AE2("silicon") })

//岩石裂骸	    
event.recipes.bloodmagic.altar(TE('basalz_rod'), MC('basalt')).upgradeLevel(0).altarSyphon(1500).consumptionRate(10).drainRate(10)
event.recipes.botania.runic_altar(TE('basalz_rod', 8), [BO('rune_fire'), MC('basalt'), MC('basalt'), MC('basalt')], 8000)
event.recipes.botania.runic_altar(TE('basalz_rod', 32), ['mythicbotany:muspelheim_rune', MC('basalt'), MC('basalt'), MC('basalt')], 8700)
//暴雪立方
event.recipes.botania.runic_altar(TE('blizz_rod', 8), [BO('rune_winter'), MC('snow_block'), MC('snow_block'), MC('snow_block')], 8000)
event.recipes.botania.runic_altar(TE('blizz_rod', 32), ['mythicbotany:niflheim_rune', MC('snow_block'), MC('snow_block'), MC('snow_block')], 8000)


}

function circuits(event) {

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 100
		},
		"temperature": 300,
		"time": 10
	});

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone_block')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 900
		},
		"temperature": 500,
		"time": 90
	});

//ae2
event.remove({ type: AE2('inscriber') })

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": AE2("calculation_processor_press") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_copper", "amount": 90 },
		"result": { "item": AE2("printed_calculation_processor") },
		"cooling_time": 150
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": AE2("logic_processor_press") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_gold", "amount": 90 },
		"result": { "item": AE2("printed_logic_processor") },
		"cooling_time": 150
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": AE2("engineering_processor_press") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_diamond", "amount": 100 },
		"result": { "item": AE2("printed_engineering_processor") },
		"cooling_time": 150
	})

	event.recipes.thermal.crucible(Fluid.of(TC("molten_diamond"), 100), MC("diamond")).energy(1000)

	event.recipes.thermal.chiller(AE2("printed_engineering_processor"), [Fluid.of("tconstruct:molten_diamond", 100), AE2("engineering_processor_press")]).energy(5000)
	event.recipes.thermal.chiller(AE2("printed_calculation_processor"), [Fluid.of("tconstruct:molten_copper", 90), AE2("calculation_processor_press")]).energy(5000)
	event.recipes.thermal.chiller(AE2("printed_logic_processor"), [Fluid.of("tconstruct:molten_gold", 90), AE2("logic_processor_press")]).energy(5000)

	event.custom(ifiniDeploying(AE2("printed_silicon"), AE2("silicon"), AE2("silicon_press")))

	let types = ["calculation", "logic", "engineering"]
	types.forEach(e => {
		let t = KJ('incomplete_' + e + '_processor')
		event.recipes.createSequencedAssembly([
			AE2(e + '_processor'),
		], AE2('printed_silicon'), [
			event.recipes.createDeploying(t, [t, AE2('printed_' + e + "_processor")]),
			event.recipes.createFilling(t, [t, Fluid.of(TE("redstone"), 250)]),
			event.recipes.createPressing(t, t)
		]).transitionalItem(t)
			.loops(1)
			.id('kubejs:' + e + "_processor")
	})

event.recipes.thermal.smelter(AE2('quartz_glass'), F("#dusts/quartz"))
event.recipes.thermal.smelter(AE2('quartz_glass'), AE2("certus_quartz_dust"))

}

function ae2Science(event) {
event.remove({ id: AE2('tools/misctools_entropy_manipulator') })
event.remove({ id: PC("thermo_plant/plastic_from_lpg") })
event.remove({ id: PC("thermo_plant/plastic_from_biodiesel") })
event.remove({ output: MEK("hdpe_pellet") })
event.remove({ output: MEK("hdpe_rod") })
event.remove({ output: MEK("hdpe_sheet") })
event.remove({ id: MEK("hdpe_stick") })
event.remove({ id: AE2('network/blocks/controller') })

event.shaped(AE2('entropy_manipulator'), [
	'S  ',
	' M ',
	'  M'
], {
	M: TE("lead_plate"),
	S: F('#gems/fluix')
})

////物质塑料
//熔融物质
event.custom({
	"type": "createbigcannons:melting",
	"ingredients": [
	  {
		"item": "ae2:matter_ball"
	  }
	],
	"results": [
	  {
		"fluid": "kubejs:matter",
		"amount": 20
	  }
	],
	"processingTime": 40,
	"heatRequirement": "superheated"
})
//混合
event.recipes.createMixing(Fluid.of(KJ("matter_plastics"), 450), [Fluid.of(KJ("matter"), 270), Fluid.of(PC("plastic"), 500)]).heated()
//浇筑
event.custom({
 	"type": "tconstruct:casting_table",
 	"cast": { "tag": "tconstruct:casts/multi_use/ingot" },
 	"fluid": {
	"name": "kubejs:matter_plastics",
 	"amount": 450
},
 	"result": { "item": KJ("matter_plastics") },
 	"cooling_time": 25
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "tag": "tconstruct:casts/multi_use/nugget" },
	"fluid": {
   "name": "kubejs:matter_plastics",
	"amount": 50
},
	"result": { "item": MEK("hdpe_pellet") },
	"cooling_time": 5
})
//物质机壳
event.custom({
	"type": "tconstruct:casting_basin",
	"cast": { "tag": 'pneumaticcraft:plastic_bricks' },
	"cast_consumed": true,
	"fluid": {
		"name": "kubejs:matter_plastics",
		"amount": 150
	},
	"result": { "item": KJ("matter_casing") },
	"cooling_time": 25
})
//塑料块
event.recipes.createMechanicalCrafting(PC("plastic_brick_white"), [
	'S'
], {
	S: PC('plastic')
})


/*event.recipes.thermal.smelter(
	[MEK("hdpe_pellet", 1)],
	[MEK("substrate"), AE2("matter_ball", 2)])
	.energy(2000)*/
event.recipes.createPressing(MEK("hdpe_sheet"), KJ("matter_plastics"))

//event.remove({ id: AE2('decorative/quartz_vibrant_glass') })
//event.recipes.createFilling(AE2("quartz_vibrant_glass"), [AE2('quartz_glass'), Fluid.of(TC('molten_lumium'), 15)])

/*event.recipes.createMechanicalCrafting(AE2('controller'), [
	'ABA',
	'GSG',
	'AMA'
], {
	A: KJ("matter_plastics"),
	M: TE("diamond_gear"),
	G: KJ("computation_matrix"),
	S: KJ("matter_casing"),
	B: MEK("ultimate_control_circuit")
})*/
event.shaped(AE2('controller'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('matter_casing'),
	S: KJ('calculation_mechanism')
})

let controller = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), AE2('controller'), other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: AE2('controller'), B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), AE2('controller'))
}

controller(AE2('drive'), 1, AE2("engineering_processor"))
controller(AE2('formation_core'), 4, AE2("logic_processor"))
controller(AE2('annihilation_core'), 4, AE2("calculation_processor"))
controller(AE2('chest'), 1, MC('chest'))
controller('beyond_earth:steel_tank', 1, 'create_sa:large_fueling_tank')
controller('beyond_earth:steel_engine', 1, 'create:blaze_burner')

}
