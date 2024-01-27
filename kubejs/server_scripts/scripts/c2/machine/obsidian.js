
onEvent('recipes', event => {
    concrete(event)
	obsidianMachine(event)
})

function concrete(event) {
//矿渣砂砾
event.replaceInput({ id: TE("machines/smelter/smelter_gravel") }, F('#gravel'), MC('gravel'))
event.recipes.createMilling([Item.of(IM('slag_gravel'))], Item.of(TE("slag")))
event.recipes.createMilling([Item.of(IM('slag_gravel')), Item.of(IM('slag_gravel', 2)).withChance(0.75)], Item.of(TE("rich_slag")))
event.recipes.immersiveengineeringCrusher(IM('slag_gravel', 3), TE("rich_slag"))

///混凝土粉末
//无序合成
event.shapeless(MC('light_gray_concrete_powder', 8), [
	MC("#sand"),
	MC("#sand"),
	MC("#sand"),
	MC("#sand"),
	F("#gravel"),
	F("#gravel"),
	F("#gravel"),
	F("#gravel")
]).id("kubejs:concrete_powder_manual_only")
//动力搅拌
event.recipes.createMixing(MC('light_gray_concrete_powder', 2), ['#minecraft:sand', '#forge:gravel'])
event.recipes.createMixing(MC('light_gray_concrete_powder', 2), [Fluid.of(KJ('fine_sand'), 500), '#forge:gravel'])

//混凝土流体
//event.remove({ id: 'createindustry:mixing/liquid_concrete' })
event.remove({ id: IM('mixer/concrete') })
event.remove({ id: IM('crafting/concrete') })
event.recipes.createMixing([Fluid.of(IM('concrete'), 1000)], [F('#concrete_powders'), Fluid.of(MC('water'), 500)])
event.custom({"type":"immersiveengineering:mixer",
"inputs":[
	{"count":1,"base_ingredient":{"tag":"forge:concrete_powders"}}
],
"result":
    {"fluid":"immersiveengineering:concrete","amount":1500},
	"fluid":{"tag":"minecraft:water","amount":500}
	,"energy":3500
})
/*
event.recipes.createMixing([Fluid.of(IM('concrete'), 1000)], [F('#sand'), 'createindustry:cement', Fluid.of(MC('water'), 500)])
event.custom({"type":"immersiveengineering:mixer",
"inputs":[
	{"count":1,"base_ingredient":{"tag":"forge:sand"}},
	{"item":"createindustry:cement"}
],
"result":
    {"fluid":"immersiveengineering:concrete","amount":1500},
	"fluid":{"tag":"minecraft:water","amount":500}
	,"energy":3500
})
*/
event.recipes.createMixing([Fluid.of(IM('concrete'), 1000)], [Fluid.of(TC('seared_stone'), 500), Fluid.of(MC('water'), 500)])

//switchCutting(event, 'createindustry:concrete', 'immersiveengineering:concrete')
//event.replaceInput('createindustry:concrete',Ingredient.of("immersiveengineering:concrete"));

//强化石
event.remove({ id: PC('reinforced_stone') })
event.custom({
	"type": "tconstruct:casting_basin",
	"cast": { "item": 'create:metal_bracket' },
	"cast_consumed": true,
	"fluid": {
		"name": "immersiveengineering:concrete",
		"amount": 500
	},
	"result": 'pneumaticcraft:reinforced_stone',
	"cooling_time": 100
})

//砖泥
//event.shapeless(TC("grout"), [F("#sand"),'createindustry:cement'])

}

function obsidianMachine(event) {
////坚固板
//热气动加工
event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "item_input": {
    "item": "create:powdered_obsidian"
  },
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "fluid": "minecraft:lava",
    "amount": 500
  },
  "item_output": {
    "item": "create:sturdy_sheet"
  },
  "temperature": {
    "min_temp": 323
  },
  "pressure": 4.0,
  "speed": 0.5,
  "air_use_multiplier": 2.0,
  "exothermic": false
})
//序列装配
event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' })
let ss = 'create:unprocessed_obsidian_sheet'
event.recipes.createSequencedAssembly([
	Item.of(CR('sturdy_sheet')).withChance(0.1),
	Item.of('create:unprocessed_obsidian_sheet', '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"kubejs:sturdy_sheet"}}').withChance(0.9),
], CR('powdered_obsidian'), [
	event.recipes.createFilling(ss, [ss, Fluid.of(MC("lava"), 500)]),
	event.recipes.createPressing(ss, ss),
	event.recipes.createPressing(ss, ss)
]).transitionalItem(ss)
	.loops(1)
	.id("kubejs:sturdy_sheet")
	
event.shaped(KJ("obsidian_machine"), [
	"SSS",
	"SCS",
	"SSS"
], {
	C: [CR("railway_casing"), 'compressedcreativity:compressed_iron_casing'],
	S: KJ("sturdy_mechanism")
})

/*
event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 4)),
		Ingredient.of(CR('railway_casing')),
	],
	result: [
		Item.of(KJ('obsidian_machine'))
	],
	energy: 1000
})
*/

let obsidian_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), "kubejs:obsidian_machine", other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:obsidian_machine", B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), "kubejs:obsidian_machine")
	}
obsidian_machine(CR("track_station"), 1, MC("compass"))
obsidian_machine(CR("track_signal"), 1, CR("electron_tube"))
obsidian_machine(CR("track_observer"), 1, MC("observer"))
obsidian_machine(CR("controls"), 1, MC("lever"))
obsidian_machine("toms_storage:ts.storage_terminal", 1, ("create_sa:vault_component"))
obsidian_machine('immersive_aircraft:hull', 1)
//气动
obsidian_machine(PC('air_compressor'), 1, MC('furnace'))
obsidian_machine(PC('fluid_mixer'), 1, CR('whisk'))
obsidian_machine(PC('etching_tank'), 1, TE('#glass/hardened'))
obsidian_machine(PC('vacuum_trap'), 1, MC('ender_eye'))
obsidian_machine(PC('amadron_tablet'), 1, PC('gps_tool'))
obsidian_machine(PC('kerosene_lamp'), 1)
obsidian_machine(PC('thermopneumatic_processing_plant'), 1, PC('compressed_iron_gear'))

event.remove({ output: 'pneumaticcraft:refinery' })
event.remove({ output: 'pneumaticcraft:refinery_output' })

//通量压缩机
event.remove({ id: PC("flux_compressor") })
event.shaped(PC('flux_compressor'), [
	' A ',
	'DCD',
	'SBS'
], {
	A: 'thermal:rf_coil',
	D: 'mekanism:basic_control_circuit',
	C: 'pneumaticcraft:advanced_pressure_tube',
	S: 'pneumaticcraft:ingot_iron_compressed',
	B: 'minecraft:blast_furnace',
})

//石油探测器
event.remove({ output: 'pneumaticcraft:seismic_sensor' })
event.stonecutting('pneumaticcraft:seismic_sensor', KJ("sturdy_mechanism"))
}