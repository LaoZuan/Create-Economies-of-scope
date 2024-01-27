
onEvent('recipes', event => {
	meta_alloy(event)
  metamorphicMachine(event)
	c2_flowers(event)
})

function meta_alloy(event) {
////异构合金
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "tag": "kubejs:metamorphic_stones"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "forbidden_arcanus:arcane_crystal_dust"
      }
    }
  ],
  "output": {
    "item": "kubejs:metamorphic_alloy"
  },
  "sourceCost": 2500,
  "keepNbtOfReagent": false
})
//血之祭坛合成
event.recipes.bloodmagic.altar(
	KJ('metamorphic_alloy'), 
	KJ('#stone_alloy'))
.upgradeLevel(1)
.altarSyphon(250)
.consumptionRate(5)
.drainRate(1)
//困难合成
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "kubejs:stone_alloy"
  },
  "output": "kubejs:metamorphic_alloy",
  "count": 1,
  "source": 5000,
  "pedestalItems": []
})
//复原安山合金
event.recipes.botania.mana_infusion(CR('andesite_alloy'), KJ('metamorphic_alloy'), 1000)

////腐化核心
//暮色森林巫妖王获取
//event.recipes.createMilling([KJ('metamorphic_lich_core', 32)], KJ('#scepters')).processingTime(1500)
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "kubejs:scepters"
  },
  "output": "kubejs:metamorphic_lich_core",
  "count": 32,
  "source": 5000,
  "pedestalItems": []
})

//注液
event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "kubejs:metamorphic_alloy"
    },
    {
      "fluid": "bloodmagic:life_essence_fluid",
      "amount": 250
    }
  ],
  "results": [
    {
      "item": "kubejs:metamorphic_lich_core"
    }
  ]
})
//血之祭坛
event.recipes.bloodmagic.altar(
	KJ('metamorphic_lich_core'), 
	KJ('metamorphic_alloy'))
.upgradeLevel(1)
.altarSyphon(250)
.consumptionRate(5)
.drainRate(1)
//炼金术桌
event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "tag": "kubejs:metamorphic_stones"
    },
    {
      "item": "forbidden_arcanus:arcane_crystal_dust"
    }
  ],
  "output": {
    "item": "bloodmagic:silk_touch_anointment",
    "count": 2
  },
  "syphon": 360,
  "ticks": 100,
  "upgradeLevel": 2
})

/*
event.shaped(Item.of(KJ('metamorphic_lich_rod')), [
	' FA',
	'DSE',
	'BC ',
], {
	A: KJ('metamorphic_lich_core'),
	B: BO('rune_mana'),
	C: BO('rune_earth'),
	D: BO('rune_air'),
	E: BO('rune_water'),
	F: BO('rune_fire'),
	S: BO('livingwood_twig')
})
event.shapeless(KJ('metamorphic_mechanism'), [KJ('gold_source_mechanism'), KJ('metamorphic_alloy'), KJ('metamorphic_alloy'), BO('manasteel_nugget'), BO('manasteel_nugget'), Item.of(KJ('metamorphic_lich_rod')).ignoreNBT()]).id("kubejs:metamorphic_mechanism_manual_only")
.damageIngredient(Item.of(KJ('metamorphic_lich_rod')).ignoreNBT())
*/

}

function metamorphicMachine(event) {
//异构黄铜漏斗
event.recipes.botania.runic_altar(Item.of('create:brass_funnel', "{display:{Lore:['[\"§b放置后自动幻化为黄铜漏斗\"]'],Name:'[\"§d异构漏斗\"]'},CustomModelData:1}"), [
	CR('andesite_funnel'), 
	KJ('gold_source_mechanism'), 
	FA('arcane_crystal_block'), 
], 8000)

event.recipes.botania.runic_altar(Item.of('create:brass_funnel', "{display:{Lore:['[\"§b放置后自动幻化为黄铜漏斗\"]'],Name:'[\"§d异构漏斗\"]'},CustomModelData:1}"), [
	CR('andesite_funnel'), 
	KJ('metamorphic_mechanism')
], 4000)

event.shaped(KJ('metamorphic_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('mana_casing'), 'create_dd:overburden_casing'],
	S: KJ('metamorphic_mechanism')
})
let metamorphic_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:metamorphic_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:metamorphic_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:metamorphic_machine')
}

metamorphic_machine(BO('mana_distributor'), 2)
metamorphic_machine(BO('pump'), 4)
metamorphic_machine(BO('mana_distributor'), 1, MC('obsidian'))
metamorphic_machine(BO('mana_detector'), 1, MC('target'))
metamorphic_machine(BO('forest_eye'), 1, BO('mana_pearl'))
metamorphic_machine(BO('brewery'), 1, MC('brewing_stand'))
metamorphic_machine(BO('alchemy_catalyst'), 1, BO('brewery'))
//metamorphic_machine('creatania:mana_generator', 1, CR('mechanical_pump'))
//metamorphic_machine('creatania:mana_motor', 1, KJ('motor'))
//metamorphic_machine('creatania:mana_condenser', 1, CR('propeller'))
//metamorphic_machine('creatania:omnibox', 1, CR('gearbox'))

//异构之魂
event.recipes.botania.mana_infusion(KJ('life_metamorphic', 1), KJ('metamorphic_machine'), 1000)
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "item": KJ("metamorphic_machine") },
	"result": { "item": KJ("life_metamorphic") }
})

//泰拉凝聚板
event.replaceInput({ id: BO("terra_plate") }, BO('manasteel_block'), KJ('metamorphic_mechanism'))


}

function c2_flowers(event) {
////产能花
event.remove({ output: BO('rosa_arcana') })//阿卡纳蔷薇
event.recipes.botania.petal_apothecary(BO('rosa_arcana'), [
	KJ("life_metamorphic"), 
  BO('rune_mana'), 
	BO('#petals/pink'), 
	BO('#petals/pink'),
  BO('#petals/purple'), 
  BO('#petals/purple'), 
  BO('#petals/lime'), 
])

event.remove({ output: BO('gourmaryllis') })//彼方兰
event.recipes.botania.petal_apothecary(BO('gourmaryllis'), [
	KJ("life_metamorphic"), 
  BO('rune_summer'), 
  BO('rune_fire'), 
	BO('#petals/light_gray'), 
	BO('#petals/light_gray'),
  BO('#petals/yellow'), 
  BO('#petals/yellow'), 
  BO('#petals/red'), 
])


////功能花


}