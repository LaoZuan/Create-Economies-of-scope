onEvent('recipes', event => {
	electronTube(event)//电子管
	seed_growing(event)//催化
})

function electronTube(event) {
event.recipes.createFilling(CR("electron_tube"), [CR('polished_rose_quartz'), Fluid.of(TC('molten_iron'), 20)])

let redstone = MC('redstone')
event.shapeless('create:rose_quartz', [[MC('quartz'), KJ('purified_nether_quartz_crystal') , AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], redstone, redstone, redstone, redstone])

event.recipes.createMilling([AE2('certus_quartz_dust')], '#ae2:crystals/certus').processingTime(200)

event.remove({ id: CR('compat/ae2/milling/sky_stone_block') })
event.remove({ id: CR('compat/ae2/milling/certus_quartz') })
event.remove({ id: CR('crafting/materials/electron_tube') })
event.remove({ id: CR('crafting/materials/rose_quartz') })
event.remove({ id: TC('smeltery/melting/metal/slimesteel/reinforcement') })
event.remove({ id: TC('smeltery/melting/metal/iron/reinforcement') })
event.remove({ id: TC('smeltery/melting/diamond/enchanting_table') })

event.recipes.createMechanicalCrafting(Item.of(AE2('certus_crystal_seed'), 2), ['A'], { A: F('#gems/certus_quartz') })
event.recipes.createMechanicalCrafting(Item.of(AE2('fluix_crystal_seed'), 2), ['A'], { A: F('#gems/fluix') })
event.recipes.createMechanicalCrafting(Item.of(KJ('nether_seed'), 2), ['A'], { A: F('#gems/quartz') })
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "tag": F("gems/arcane_crystal") },
	"result": { "item": KJ("arcane_crystal_seed") }
})

event.recipes.createMixing(Fluid.of(KJ("sky_stone"), 500), [AE2('sky_dust', 4), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(CR('polished_rose_quartz'), [[AE2('certus_quartz_crystal'), KJ('purified_certus_quartz_crystal')], Fluid.of(TE("redstone"), 250)])
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('redstone'), 250)], [AE2('charged_certus_quartz_crystal'), Fluid.of(KJ('sky_stone'), 250)])
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('glowstone'), 500)], [AE2('charged_certus_quartz_crystal'), MC('glowstone_dust'), Fluid.of(KJ('sky_stone'), 500)])

//真空管半成品
event.remove({ id: IM('blueprint/electron_tube') })
let electronTube = 'kubejs:incomplete_tube'
	event.recipes.createSequencedAssembly([
		KJ('incomplete_electron_tube'),
	], CR('electron_tube'), [
		event.recipes.createFilling(electronTube, [electronTube, Fluid.of(TC('molten_brass'), 10)]),
		event.recipes.createDeploying(electronTube, [electronTube, KJ('nickel_wire')]),
	]).transitionalItem(electronTube)
		.loops(1)
		.id('kubejs:electron_tube');
/*
let electronTube2 = 'kubejs:incomplete_tube'
	event.recipes.createSequencedAssembly([
		KJ('incomplete_electron_tube'),
	], CR('electron_tube'), [
		event.recipes.createFilling(electronTube2, [electronTube2, Fluid.of(TC('molten_bronze'), 10)]),
		event.recipes.createDeploying(electronTube2, [electronTube2, KJ('nickel_wire')]),
	]).transitionalItem(electronTube2)
		.loops(1)
		.id('kubejs:electron_tube2');
*/

//电灯泡半成品
/*
event.remove({ id: IM('blueprint/light_bulb') })
let light_bulb = 'kubejs:incomplete_tube'
	event.recipes.createSequencedAssembly([
		KJ('incomplete_light_bulb'),
	], CR('electron_tube'), [
		event.recipes.createFilling(light_bulb, [light_bulb, Fluid.of(TC('molten_brass'), 10)]),
		event.recipes.createDeploying(light_bulb, [light_bulb, [MC('paper'), MC('bamboo')]]),
	]).transitionalItem(light_bulb)
		.loops(1)
		.id('kubejs:light_bulb');
*/
let light_bulb2 = 'kubejs:incomplete_tube'
	event.recipes.createSequencedAssembly([
		KJ('incomplete_light_bulb'),
	], CR('electron_tube'), [
		event.recipes.createFilling(light_bulb2, [light_bulb2, Fluid.of(TC('molten_bronze'), 10)]),
		event.recipes.createDeploying(light_bulb2, [light_bulb2, [MC('paper'), MC('bamboo')]]),
	]).transitionalItem(light_bulb2)
		.loops(1)
		.id('kubejs:light_bulb2');

///抽真空
/*
//工作盆
event.custom({//真空管
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"item": "kubejs:incomplete_electron_tube"
		}
	],
	"results": [
		{
			"item": "immersiveengineering:electron_tube",
			"chance": 0.25
		}
	],
	"processingTime": 250,
	"heatRequirement": "heated"
})
event.custom({//灯泡
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"item": "kubejs:incomplete_light_bulb"
		}
	],
	"results": [
		{
			"item": "immersiveengineering:light_bulb",
			"chance": 0.25
		}
	],
	"processingTime": 250,
	"heatRequirement": "heated"
})
*/
//压力室
event.custom({//真空管
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "kubejs:incomplete_electron_tube"
	  }
	],
	"pressure": -0.25,
	"results": [
	  {
		"item": "immersiveengineering:electron_tube"
	  }
	]
})
event.custom({//灯泡
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "kubejs:incomplete_light_bulb"
	  }
	],
	"pressure": -0.25,
	"results": [
	  {
		"item": "immersiveengineering:light_bulb"
	  }
	]
})

}

function seed_growing(event) {	
let grow = (from, via, to) => {
	event.recipes.createSequencedAssembly([to], from, [
		event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
	]).transitionalItem(via)
		.loops(4)
		.id('kubejs:grow_' + to.split(':')[1])
}

	grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'))
	grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'))
	grow(KJ("nether_seed"), KJ('growing_nether_seed'), KJ('tiny_nether_crystal'))
	grow(KJ("arcane_crystal_seed"), KJ('growing_arcane_seed'), KJ('tiny_arcane_crystal'))

	grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'))
	grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'))
	grow(KJ("tiny_nether_crystal"), KJ('growing_tiny_nether_crystal'), KJ('small_nether_crystal'))
	grow(KJ("tiny_arcane_crystal"), KJ('growing_tiny_arcane_crystal'), KJ('small_arcane_crystal'))

	grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), KJ('purified_certus_quartz_crystal'))
	grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'))
	grow(KJ("small_nether_crystal"), KJ('growing_small_nether_crystal'), KJ('purified_nether_quartz_crystal'))
	grow(KJ("small_arcane_crystal"), KJ('growing_small_arcane_crystal'), KJ('purified_arcane_crystal'))


let grow_imbuement = (from, to) => {//灌注室
	event.custom({
		"type": "ars_nouveau:imbuement",
		"input": {
		  "item": from
		},
		"output": to,
		"count": 1,
		"source": 2000,
		"pedestalItems": []
	  }).id('kubejs:imbuement_grow_' + to.split(':')[1])

}

grow_imbuement(AE2("certus_crystal_seed"), KJ('tiny_certus_crystal'))
grow_imbuement(AE2("fluix_crystal_seed"), KJ('tiny_fluix_crystal'))
grow_imbuement(KJ("nether_seed"), KJ('tiny_nether_crystal'))
grow_imbuement(KJ("arcane_crystal_seed"), KJ('tiny_arcane_crystal'))

grow_imbuement(KJ("tiny_certus_crystal"), KJ('small_certus_crystal'))
grow_imbuement(KJ("tiny_fluix_crystal"), KJ('small_fluix_crystal'))
grow_imbuement(KJ("tiny_nether_crystal"), KJ('small_nether_crystal'))
grow_imbuement(KJ("tiny_arcane_crystal"), KJ('small_arcane_crystal'))

grow_imbuement(KJ("small_certus_crystal"), KJ('purified_certus_quartz_crystal'))
grow_imbuement(KJ("small_fluix_crystal"), AE2('fluix_crystal'))
grow_imbuement(KJ("small_nether_crystal"), KJ('purified_nether_quartz_crystal'))
grow_imbuement(KJ("small_arcane_crystal"), KJ('purified_arcane_crystal'))   


}