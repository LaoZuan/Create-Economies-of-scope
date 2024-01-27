
onEvent('recipes', event => {
	radiant_coil(event)
	invarMachine(event)
})

function radiant_coil(event) {
event.remove({ id: /ae2:tools\/paintballs.*/ })
event.remove({ id: /mekanismadditions:pigment_extracting.*/ })
event.remove({ id: /mekanism:pigment_extracting.*/ })
event.remove({ id: /mekanism:compat\/biomesoplenty\/pigment_extracting.*/ })
event.remove({ output: CR("chromatic_compound") })
let chop = (type, output) => {
	event.custom({//切片
		"type": "farmersdelight:cutting",
		"ingredients": [{ "item": TC(type + "_slime_fern") }],
		"tool": { "tag": "forge:tools/knives" },
		"result": [Item.of(KJ(type + "_slimy_fern_leaf"), 2).toResultJson()]
	})
	//还原1
	event.custom({
		"type": "occultism:spirit_fire",
		"ingredient": { "item": KJ(type + "_slimy_fern_leaf") },
		"result": { "item": TC(type + "_slime_fern") }
	})
	//还原2
	event.recipes.botania.mana_infusion(TC(type + "_slime_fern", 2), KJ(type + "_slimy_fern_leaf"), 4000)
	//还原3
	event.custom({
		"type": "ars_nouveau:imbuement",
		"input": {
		  "item": KJ(type + "_slimy_fern_leaf")
		},
		"output": TC(type + "_slime_fern"),
		"count": 1,
		"source": 500,
		"pedestalItems": []
	})	
	//还原4
	event.recipes.bloodmagic.altar(TC(type + "_slime_fern", 2), KJ(type + "_slimy_fern_leaf")).upgradeLevel(1).altarSyphon(500).consumptionRate(5).drainRate(5)
	
event.recipes.createMilling([KJ(type + "_slimy_fern_paste")], KJ(type + "_slimy_fern_leaf"))
event.campfireCooking(output, KJ(type + "_slimy_fern_paste")).cookingTime(300)
}

let fern1 = KJ("ender_slimy_fern_leaf")
let fern2 = KJ("sky_slimy_fern_leaf")
let fern3 = KJ("earth_slimy_fern_leaf")
event.shapeless(fern1, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern3, fern3, fern3, fern3])
event.shapeless(fern2, ["forbidden_arcanus:rune", fern3, fern3, fern3, fern3, fern1, fern1, fern1, fern1])
event.shapeless(fern3, ["forbidden_arcanus:rune", fern2, fern2, fern2, fern2, fern1, fern1, fern1, fern1])

chop("earth", MC('gunpowder'))
chop("sky", MC('bone_meal'))
chop("ender", AE2('ender_dust'))

event.campfireCooking(MC("torch"), MC("stick")).cookingTime(20)

event.shapeless(KJ('nickel_compound'), [TE('nickel_ingot'), TE("iron_dust"), TE("iron_dust"), TE("iron_dust")])
event.blasting(KJ('invar_compound'), KJ('nickel_compound'))
let s = KJ('invar_compound')
event.recipes.createSequencedAssembly([
	TE('invar_ingot'),
], KJ('invar_compound'), [
	event.recipes.createPressing(s, s)
]).transitionalItem(s)
	.loops(16)
	.id('kubejs:invar')

event.remove({ id: CR("mechanical_crafting/crushing_wheel") })
event.recipes.createMechanicalCrafting(Item.of(CR('crushing_wheel'), 2), [
	' AAA ',
	'AACAA',
	'ACBCA',
	'AACAA',
	' AAA '
], {
	A: F('#cobblestone'),
	B: [CR('andesite_alloy'), KJ('diorite_alloy'), KJ('granite_alloy'), KJ('metamorphic_alloy')],
	C: [MC('stick'), IM('stick_treated')]
})

event.recipes.createCrushing([Item.of(AE2("singularity")).withChance(1)], CR('crushing_wheel')).processingTime(250)

let dyes = [MC('orange_dye'), MC('magenta_dye'), MC('light_blue_dye'), MC('yellow_dye'), MC('lime_dye'), MC('pink_dye'), MC('cyan_dye'), MC('purple_dye'), MC('blue_dye'), MC('brown_dye'), MC('green_dye'), MC('red_dye'), MC('black_dye'), MC('white_dye')]
event.recipes.createCompacting('1x ' + KJ("dye_entangled_singularity"), [dyes, Item.of(AE2('quantum_entangled_singularity'), 1)])
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "ae2:quantum_entangled_singularity"
  },
  "output": "kubejs:dye_entangled_singularity",
  "count": 1,
  "source": 100,
  "pedestalItems": [
    {
      "item": {
        "item": "twilightforest:quest_ram_trophy"
      }
    }
  ]
})
event.recipes.createConversion([AE2('quantum_entangled_singularity')], AE2("singularity"))
event.recipes.createCrushing([
	Item.of(AE2("red_paint_ball"), 1).withChance(.90),
	Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
	Item.of(AE2("green_paint_ball"), 1).withChance(.70),
	Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
	Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)],
KJ('dye_entangled_singularity')).processingTime(50)

let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
for (let index = 0; index < colors.length; index++) {
	var element = colors[index];
	if (index == colors.length - 1)
		continue;
	event.recipes.createEmptying([AE2(colors[index + 1] + '_paint_ball'), Fluid.of(KJ('waste'), 250)], AE2(element + '_paint_ball'))
}

event.recipes.createMechanicalCrafting(CR('chromatic_compound'), [
	'AA',
	'AA'
], {
	A: AE2('magenta_paint_ball')
})

event.shapeless(CR("chromatic_compound", 9), [
	'create_dd:chromatic_block'
])

//event.recipes.createPressing(KJ("radiant_sheet"), CR("refined_radiance"))
event.recipes.createMechanicalCrafting(KJ('radiant_coil'), ['A'], { A: 'create_dd:refined_radiance_sheet' })
event.recipes.createMechanicalCrafting(KJ('component_refined_radiance'), ['ABA'], { A: KJ('radiant_coil'), B: PC('plastic') })
event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"create_dd:refined_radiance_sheet"}
	],
    "category":"components",
    "result":{"count":1, "item":"kubejs:radiant_coil"}
})
event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"kubejs:radiant_wire"}, 
		{"item":"kubejs:shadow_steel_rod"},
	],
    "category":"components",
    "result":{"count":4, "item":"kubejs:radiant_coil"}
})
event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"count":2,"base_ingredient":{"item":"kubejs:radiant_coil"}}, 
		{"item":"pneumaticcraft:plastic"},
	],
    "category":"components",
    "result":{"count":1, "item":"kubejs:component_refined_radiance"}
})
}

function invarMachine(event) {

event.remove({ output: TE('machine_frame') })
event.shaped(TE('machine_frame'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('invar_casing'),
	S: KJ('inductive_mechanism')
})

/*
event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('signalum_coin', 6)),
		Ingredient.of(KJ('invar_casing')),
	],
	result: [
		Item.of(TE('machine_frame'))
	],
	energy: 1000
})
*/

event.shaped(KJ('chromatic_resonator'), [
	' R ',
	'R S',
	'LS '
], {
	R: TE('ruby'),
	L: TE('lead_ingot'),
	S: TE('sapphire')
})

event.recipes.botania.mana_infusion(TE('ruby'), TE('cinnabar'), 50000)
event.recipes.botania.mana_infusion(TE('sapphire'), MC('lapis_lazuli'), 50000)

let invar_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), TE('machine_frame'), other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: TE('machine_frame'), B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), TE('machine_frame'))
}

invar_machine(TE('dynamo_compression'), 1, TE('rf_coil'))
invar_machine('kubejs:pipe_module_tier_2', 4)

event.replaceInput({ type: "minecraft:crafting_shaped", id: /ae2:.*/ }, F("#ingots/iron"), TE("lead_plate"))

// invar_machine(TE('machine_crucible'), 1, MC('nether_bricks'))
// invar_machine(TE('machine_furnace'), 1, MC('bricks'))
// invar_machine(TE('machine_chiller'), 1, MC('packed_ice'))
// invar_machine(TE('machine_pyrolyzer'), 1, MC('blaze_rod'))
// invar_machine(TE('machine_bottler'), 1, MC('bucket'))
// invar_machine(TE('machine_centrifuge'), 1, MC('compass'))
// invar_machine(TE('machine_refinery'), 1, '#forge:glass')
// invar_machine(TE('machine_pulverizer'), 1, MC('flint'))
// invar_machine(TE('machine_smelter'), 1, MC('blast_furnace'))
// invar_machine(TE('machine_sawmill'), 1, TE('saw_blade'))
// invar_machine(TE('machine_brewer'), 1, MC('brewing_stand'))
// invar_machine(TE('machine_insolator'), 1, MC('dirt'))

}