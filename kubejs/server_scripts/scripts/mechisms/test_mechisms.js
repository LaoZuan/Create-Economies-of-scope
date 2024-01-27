// 临时配方文件

console.info('Initializing CEOS Unique Assembly Recipes')
console.info('You are going to love it ;)')

onEvent('recipes', event => {
event.remove({ output: 'create_dd:inductive_mechanism' })	
event.remove({ output: 'create_dd:crafting_inductive_mechanism1' })	
event.remove({ output: 'create_dd:crafting_inductive_mechanism2' })	
event.remove({ input: 'create_dd:inductive_mechanism' })
event.remove({ output: 'create_dd:calculation_mechanism' })	
event.remove({ input: 'create_dd:calculation_mechanism' })
event.remove({ output: 'create_dd:infernal_mechanism' })	
event.remove({ output: 'create_dd:sealed_mechanism' })	
event.remove({ output: 'create_dd:integrated_mechanism' })	
event.replaceInput("create_dd:integrated_mechanism",Ingredient.of(Item.of('create:precision_mechanism')).toJson())
event.remove({ output: 'create_sa:heat_engine' })
event.replaceInput("create_sa:heat_engine",Ingredient.of(Item.of('kubejs:infernal_mechanism')).toJson())

    //c1
    kinetic(event) //动力
    logistic(event) //物流
    seal(event) //密封
    g_source(event) //金源
    //c2
    precision(event) //精密
    infernal(event) //酷热
    sturdy(event) //坚实
    meta(event) //异构
    //c3
    inductive(event) //感应
    abstruse(event) //谐振
    //c4
    calcu(event) //计算
})

////c1

function kinetic(event){
//动力构件0
let km0 = 'kubejs:incomplete_kinetic_mechanism'
event.recipes.createSequencedAssembly([
    Item.of(KJ('kinetic_mechanism')).withChance(0.7),
    Item.of('ftbquests:lootcrate', '{CustomModelData:13,type:"km"}').withChance(0.15),
    Item.of('ftbquests:lootcrate', '{CustomModelData:14,type:"km"}').withChance(0.15)
], MC('#wooden_slabs'), [
    event.recipes.createDeploying(km0, [km0, CR('andesite_alloy')]),
    event.recipes.createDeploying(km0, [km0, CR('andesite_alloy')]),
    event.recipes.createDeploying(km0, [km0, F('#saws')])
]).transitionalItem(km0)
    .loops(1)
    .id('kubejs:kinetic_mechanism') 
//动力构件1
let km1 = 'kubejs:incomplete_kinetic_mechanism'
event.recipes.createSequencedAssembly([
    Item.of(KJ('kinetic_mechanism'))
], MC('#wooden_slabs'), [
    event.recipes.createDeploying(km1, [km1, KJ('andesite_alloy_gear')]),
    event.recipes.createDeploying(km1, [km1, KJ('andesite_alloy_gear')]),
    event.recipes.createDeploying(km1, [km1, F('#saws')])
]).transitionalItem(km1)
    .loops(1)
    .id('kubejs:kinetic_mechanism1') 
//动力构件2
let km2 = 'kubejs:incomplete_kinetic_mechanism'
event.recipes.createSequencedAssembly([
    Item.of(KJ('kinetic_mechanism'))
], TC('pattern'), [
    event.recipes.createDeploying(km2, [km2, KJ('andesite_alloy_gear')]),
    event.recipes.createDeploying(km2, [km2, F('#deforester_saw')])
]).transitionalItem(km2)
    .loops(1)
    .id('kubejs:kinetic_mechanism2') 
//动力构件3
event.recipes.botania.mana_infusion(KJ('kinetic_mechanism'), 'create_dd:inductive_mechanism', 500)
}

function logistic(event){
//物流构件0
let lm0 = 'create_dd:incomplete_inductive_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of('create_dd:inductive_mechanism')
	], 'create_dd:andesite_sheet', [
		event.recipes.createDeploying(lm0, [lm0, KJ('wood_gear')]),
		event.recipes.createDeploying(lm0, [lm0, KJ('wood_gear')]),
        event.recipes.createCutting(lm0, lm0)
	]).transitionalItem(lm0)
		.loops(1)
		.id('kubejs:logistic_mechanism')
}

function seal(event){
//密封构件1
let sm0 = 'kubejs:incomplete_sealed_mechanism2'
event.recipes.createSequencedAssembly([
    Item.of(KJ('sealed_mechanism')).withChance(0.7),
    Item.of(KJ('kinetic_mechanism')).withChance(0.3),
], KJ('#kinetic_mechanism'), [
    event.recipes.createDeploying(sm0, [sm0, TE('cured_rubber')]),
    event.recipes.createDeploying(sm0, [sm0, TE('cured_rubber')]),
]).transitionalItem(sm0)
    .loops(1)
    .id('kubejs:sealed_mechanism') 
//密封构件2
let sm1 = 'kubejs:incomplete_sealed_mechanism2'
event.recipes.createSequencedAssembly([
    Item.of(KJ('sealed_mechanism'))
], KJ('#kinetic_mechanism'), [
    event.recipes.createFilling(sm1, [sm1, Fluid.of(IM("creosote"), 250)]),
    event.recipes.createDeploying(sm1, [sm1, TE('cured_rubber')]),
    event.recipes.createDeploying(sm1, [sm1, TE('cured_rubber')]),
]).transitionalItem(sm1)
    .loops(1)
    .id('kubejs:sealed_mechanism1') 

}

function g_source(event){
//金源构件配方0
let gsm0 = 'kubejs:incomplete_gold_source_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of(KJ("gold_source_mechanism")).withChance(0.3),
		Item.of(KJ("arcane_golden_sheet")).withChance(0.7),
	], BO('livingwood_planks_slab'), [
		event.recipes.createDeploying(gsm0, [gsm0, KJ('rune_dust')]),
		event.recipes.createDeploying(gsm0, [gsm0, KJ('arcane_gold_gear')]),
        event.recipes.createDeploying(gsm0, [gsm0, F('#saws')])
	]).transitionalItem(gsm0)
		.loops(2)
		.id('kubejs:gold_source_mechanism')
//金源构件配方1
let gsm1 = 'kubejs:incomplete_gold_source_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of(KJ("gold_source_mechanism"))
	], BO('livingwood_planks_slab'), [
		event.recipes.createDeploying(gsm1, [gsm1, KJ('naga_dust')]),
		event.recipes.createDeploying(gsm1, [gsm1, KJ('arcane_gold_gear')]),
		event.recipes.createDeploying(gsm1, [gsm1, KJ('arcane_gold_gear')]),
        event.recipes.createDeploying(gsm1, [gsm1, F('#saws')])
	]).transitionalItem(gsm1)
		.loops(1)
		.id('kubejs:gold_source_mechanism1')
//金源构件配方2
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "botania:livingwood_planks_slab"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:naga_dust"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_nugget"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_nugget"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_nugget"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_nugget"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_nugget"
      }
    }
  ],
  "output": {
    "item": "kubejs:gold_source_mechanism"
  },
  "sourceCost": 2000,
  "keepNbtOfReagent": false
})
/*
event.recipes.botania.runic_altar(KJ("gold_source_mechanism", 2), [
	BO('livingwood_planks_slab'), 
	KJ("arcane_golden_sheet"), 
	KJ('naga_dust')
], 3500)
*/

}

////c2

function precision(event){
event.remove({ id: CR("sequenced_assembly/precision_mechanism") })  
//精密构件0
let pm0 = CR('incomplete_precision_mechanism')
event.recipes.createSequencedAssembly([
	Item.of(CR("precision_mechanism")).withChance(0.6),
  Item.of(MC("clock")).withChance(0.2),
  Item.of(MC("bell")).withChance(0.2),
], KJ('#c1_mechanism'), [
	event.recipes.createDeploying(pm0, [pm0, CR('electron_tube')]),
	event.recipes.createDeploying(pm0, [pm0, CR('electron_tube')]),
	event.recipes.createDeploying(pm0, [pm0, '#forge:screwdrivers'])
]).transitionalItem(pm0)
	.loops(1)
	.id('kubejs:precision_mechanism')
//精密构件1
let pm1 = CR('incomplete_precision_mechanism')
event.recipes.createSequencedAssembly([
	Item.of(CR("precision_mechanism"))
], KJ('#c1_mechanism'), [
	event.recipes.createDeploying(pm1, [pm1, [IM('electron_tube'), IM('light_bulb')]]),
	event.recipes.createDeploying(pm1, [pm1, [IM('electron_tube'), IM('light_bulb')]]),
	event.recipes.createDeploying(pm1, [pm1, '#forge:screwdrivers'])
]).transitionalItem(pm1)
	.loops(1)
	.id('kubejs:precision_mechanism1')  


}

function infernal(event){
//酷热构件0
let if0 = KJ('incomplete_infernal_mechanism')
event.recipes.createSequencedAssembly([
	KJ('infernal_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createFilling(if0, [if0, Fluid.of(TC("liquid_soul"), 500)]),
	event.recipes.createFilling(if0, [if0, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(if0, [if0, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(if0, [if0, Fluid.of(MC("lava"), 1000)])
]).transitionalItem(if0)
	.loops(1)
	.id('kubejs:infernal_mechanism')
//酷热构件1
event.recipes.bloodmagic.altar(//半成品
  Item.of('kubejs:incomplete_infernal_mechanism', '{SequencedAssembly:{Progress:0.25f,Step:1,id:"kubejs:infernal_mechanism"}}'), 
	CR('precision_mechanism'))
.upgradeLevel(3)
.altarSyphon(750)
.consumptionRate(15)
.drainRate(10)
event.custom({//半成品完成
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "kubejs:incomplete_infernal_mechanism"
  },
  "output": "kubejs:infernal_mechanism",
  "count": 1,
  "source": 0,
  "pedestalItems": [
    {
      "item": {
        "item": "bloodmagic:activationcrystalweak"
      }
    }
  ]
}).id('kubejs:infernal_mechanism1')
//酷热构件2
event.shaped(KJ("infernal_mechanism", 8), [
	"SSS",
	"SCS",
	"SSS"
], {
	C: TF("#fiery_vial"),
	S: CR("precision_mechanism")
})
}

function sturdy(event){
//坚实构件0
let st0 = "kubejs:incomplete_sturdy_mechanism"
event.recipes.createSequencedAssembly([
	"kubejs:sturdy_mechanism",
], CR('precision_mechanism'), [
	event.recipes.createDeploying(st0, [st0, CR("sturdy_sheet")]),
	event.recipes.createDeploying(st0, [st0, CR("sturdy_sheet")]),
	//event.recipes.createDeploying(st0, [st0, KJ("density_detector")]),
	event.recipes.createPressing(st0, st0)
]).transitionalItem(st0)
	.loops(1)
	.id("kubejs:sturdy_mechanism")
//坚实构件1
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:precision_mechanism"
	  },
	  {
		"type": "pneumaticcraft:stacked_item",
		"item": "create:sturdy_sheet",
    "count": 1
	  }
	],
	"pressure": -0.5,
	"results": [
	  {
		"item": "kubejs:sturdy_mechanism"
	  }
	]
}).id("kubejs:sturdy_mechanism1")
}

function meta(event){
//异构构件0
let mm0 = 'kubejs:incomplete_metamorphic_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of(KJ('metamorphic_mechanism')).withChance(0.5),
		Item.of('create:brass_funnel', "{display:{Lore:['[\"§b放置后自动幻化为黄铜漏斗\"]'],Name:'[\"§d异构漏斗\"]'},CustomModelData:1}").withChance(0.5),
	], KJ('gold_source_mechanism'), [
		event.recipes.createDeploying(mm0, [mm0, KJ('metamorphic_alloy')]),
		event.recipes.createDeploying(mm0, [mm0, BO('manasteel_nugget')])
	]).transitionalItem(mm0)
		.loops(2)
		.id('kubejs:metamorphic_mechanism')
//异构构件1
let mm1 = 'kubejs:incomplete_metamorphic_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of(KJ('metamorphic_mechanism')),
	], KJ('gold_source_mechanism'), [
		event.recipes.createDeploying(mm1, [mm1, KJ('metamorphic_lich_core')]),
		event.recipes.createDeploying(mm1, [mm1, BO('manasteel_nugget')])
	]).transitionalItem(mm1)
		.loops(2)
		.id('kubejs:metamorphic_mechanism1')

}

////c3

function inductive(event){
//感应构件0
let im0 = KJ('incomplete_inductive_mechanism')
event.recipes.createSequencedAssembly([
	Item.of(KJ('inductive_mechanism')).withChance(0.7),
  Item.of(AE2('quantum_entangled_singularity')).withChance(0.3),
], KJ('#c2_mechanism'), [
	event.recipes.createDeploying(im0, [im0, KJ('radiant_coil')]),
	event.recipes.createDeploying(im0, [im0, KJ('radiant_coil')]),
	event.recipes.createDeploying(im0, [im0, '#forge:chromatic_resonators'])
]).transitionalItem(im0)
	.loops(1)
	.id('kubejs:inductive_mechanism')
//感应构件1
let im1 = KJ('incomplete_inductive_mechanism')
event.recipes.createSequencedAssembly([
	Item.of(KJ('inductive_mechanism')),
], KJ('#c2_mechanism'), [
	event.recipes.createDeploying(im1, [im1, KJ('component_refined_radiance')]),
	event.recipes.createDeploying(im1, [im1, '#forge:chromatic_resonators'])
]).transitionalItem(im1)
	.loops(1)
	.id('kubejs:inductive_mechanism1')


}

function abstruse(event){
//深邃构件0
event.recipes.thermal.smelter(KJ("abstruse_mechanism"), [KJ("inductive_mechanism"), TE("enderium_ingot")]).energy(2000)
//深邃构件1
event.recipes.immersiveengineering.arc_furnace([KJ("abstruse_mechanism")], KJ("inductive_mechanism"), TE('enderium_ingot')).time(200).energy(2000)
}

////c4

function calcu(event){
//计算构件0
let cm0 = KJ('incomplete_calculation_mechanism')
event.recipes.createSequencedAssembly([
	KJ('calculation_mechanism'),
], KJ('inductive_mechanism'), [
	event.recipes.createDeploying(cm0, [cm0, AE2('printed_silicon')]),
	event.recipes.createDeploying(cm0, [cm0, AE2('printed_silicon')]),
	event.recipes.createDeploying(cm0, [cm0, '#forge:boot_mediums'])
]).transitionalItem(cm0)
	.loops(1)
	.id('kubejs:calculation_mechanism')


}