onEvent('recipes', event => {
	Recipes(event)
	stone_alloys(event)
	cast_iron(event) //铸铁/工业铁
	iron_compressed(event) //压缩铁
	steel(event)  //钢
	ManaAlloys(event)  //魔力合金
	alloys(event) //合金
})

function Recipes(event) {
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ id: CR('crafting/materials/andesite_alloy') })
event.remove({ id: CR('crafting/materials/andesite_alloy_from_zinc') })
event.remove({ id: CR('mixing/andesite_alloy') })
event.remove({ id: CR('mixing/andesite_alloy_from_zinc') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TC('compat/create/andesite_alloy_zinc') })
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ output: AP('algal_brick') })
event.remove({ id: AP('algal_blend') })
event.remove({ id: 'create_dd:industrial_iron/andesite_alloy' })
event.remove({ id: 'create_dd:industrial_iron/andesite_alloy_mixing' })

event.remove({ output: BO('mana_powder') })
event.remove({ id: BO('mana_infusion/manasteel') })

event.remove({ output: 'createindustry:steel_block' })
event.remove({ output: 'createbigcannons:cast_iron_ingot' })
event.remove({ id: ('createindustry:mixing/steel_ingot' )})
event.remove({ id: ('create_dd:compacting/steel_ingot' )})
event.remove({ id: TE('machines/smelter/smelter_alloy_steel') })
event.remove({ id: TC('smeltery/alloys/molten_pig_iron') })
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron') })
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron_2') })
event.remove({ id: ('thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot') })
event.remove({ id: 'create_dd:mixing/steel_ingot' })
event.remove({ id: 'create_dd:compacting/industrial_iron_ingot' })
event.remove({ id: 'minecraft:compacting/cast_iron_ingot' })
event.remove({ id: 'minecraft:compacting/cast_iron_block' })
event.remove({ id: 'createindustry:mixing/cast_iron_ingot' })
event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
event.remove({ id: 'beyond_earth:steel_ingot_blasting' })

event.remove({ id: IM("blastfurnace/steel") })
event.remove({ id: IM("arcfurnace/steel") })
event.remove({ id: "immersivepetroleum:arcfurnace/steel" })

event.remove({ id: "createbigcannons:compacting/iron_to_cast_iron_ingot" })
event.remove({ id: TC('smeltery/alloys/molten_bronze') })
event.remove({ id: TC('smeltery/alloys/molten_brass') })
event.remove({ id: TC('smeltery/alloys/molten_invar') })
event.remove({ id: TC('smeltery/alloys/molten_electrum') })
event.remove({ id: TC('smeltery/alloys/molten_constantan') })
event.remove({ id: TC('smeltery/alloys/molten_rose_gold') })
event.remove({ id: TC('smeltery/alloys/molten_enderium') })
event.remove({ id: TC('smeltery/alloys/molten_netherite') })
event.remove({ id: CR('mixing/brass_ingot') })
event.remove({ id: 'alloyed:mixing/bronze_ingot' })
event.remove({ id: 'alloyed:mixing/steel_ingot' })
event.remove({ id: 'alloyed:mixing/bronze_ingot_x3' })
event.remove({ id: 'createaddition:compat/immersiveengineering/constantan' })
event.remove({ id: 'createaddition:compat/immersiveengineering/electrum' })
event.remove({ id: 'createaddition:compat/tconstruct/rose_gold' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_ingot' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_nugget' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_block' })
event.remove({ id: 'createbigcannons:melting/melt_steel_ingot' })
event.remove({ id: 'createbigcannons:melting/melt_steel_nugget' })
event.remove({ id: 'createbigcannons:melting/melt_steel_block' })
event.remove({ id: 'minecraft:netherite_ingot' })
event.remove({ id: 'raw_netherite:thermal/netherite_ingot_fire_charge' })
event.remove({ id: IM('blastfurnace/steel_block') })
event.remove({ id: 'twilightforest:material/raw_ironwood' })
event.remove({ id: IM("alloysmelter/invar") })
event.remove({ id: IM("alloysmelter/constantan") })
event.remove({ id: IM("alloysmelter/rose_gold") })	
event.remove({ id: IM("alloysmelter/bronze") })	
event.remove({ id: IM("alloysmelter/manyullyn") })	
event.remove({ id: IM('alloysmelter/brass') })
event.remove({ id: IM('alloysmelter/electrum') })
event.remove({ id: 'createaddition:mixing/electrum' })

event.remove({ type: MC("crafting_shapeless"), output: TE('constantan_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('electrum_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('lumium_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('signalum_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('enderium_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('bronze_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('invar_dust') })

event.remove({ id: PC("pressure_chamber/compressed_iron_ingot") })
event.remove({ id: PC("pressure_chamber/compressed_iron_block") })
event.remove({ id: PC("explosion_crafting/compressed_iron_ingot") })
event.remove({ id: PC("explosion_crafting/compressed_iron_block") })

event.remove({ output: 'createbigcannons:cast_iron_block' })
event.remove({ output: 'createindustry:cast_iron_block' })	

event.remove({ id: TE('fire_charge/invar_ingot_3') })
event.remove({ id: TE('fire_charge/enderium_ingot_2') })
event.remove({ id: TE('fire_charge/constantan_ingot_2') })
event.remove({ id: TE('fire_charge/bronze_ingot_4') })
event.remove({ id: TE('fire_charge/electrum_ingot_2') })
event.remove({ id: TE('fire_charge/lumium_ingot_4') })
event.remove({ id: TE('fire_charge/signalum_ingot_4') })
event.remove({ id: TE('machine/pulverizer/pulverizer_cinnabar') })
event.remove({ id: TE('machine/smelter/smelter_alloy_signalum') })
event.remove({ id: TE('machine/smelter/smelter_alloy_lumium') })
event.remove({ id: TE('machine/smelter/smelter_alloy_electrum') })
event.remove({ id: TE('machine/smelter/smelter_alloy_enderium') })
event.remove({ id: TE('machine/smelter/smelter_alloy_invar') })
event.remove({ id: TE('machine/smelter/smelter_alloy_constantan') })
event.remove({ id: TE('machine/smelter/smelter_alloy_bronze') })
event.remove({ id: TE('compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot') })
}

function stone_alloys(event) {
event.smelting(AP('algal_brick'), AP('algal_blend')).xp(0).cookingTime(120)
//安山合金复杂合成
event.shaped(Item.of('ftbquests:lootcrate', '{CustomModelData:12,type:"andesite_alloy_ingot"}'), [
	'SSS',
	'SAB',
	'BBB',
], {
	S: 'architects_palette:algal_brick',
	B: 'minecraft:andesite',
	A: ['minecraft:iron_ingot', 'create:zinc_ingot', 'thermal:nickel_ingot']
})
event.shaped(Item.of('ftbquests:lootcrate', '{CustomModelData:12,type:"andesite_alloy_ingot"}'), [
	'BBB',
	'BAS',
	'SSS',
], {
	S: 'architects_palette:algal_brick',
	B: 'minecraft:andesite',
	A: ['minecraft:iron_ingot', 'create:zinc_ingot', 'thermal:nickel_ingot']
})
event.stonecutting(CR('andesite_alloy', 2), Item.of('ftbquests:lootcrate', '{CustomModelData:12,type:"andesite_alloy_ingot"}'))

////安山合金
event.shaped(Item.of(AP('algal_blend'), 4), [
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']
})
event.shaped(Item.of(AP('algal_blend'), 4), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']
})
//魔法双倍
event.shaped(Item.of(AP('algal_blend'), 8), [
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})
event.shaped(Item.of(AP('algal_blend'), 8), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})
event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'architects_palette:algal_brick', '2x minecraft:andesite')
event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'architects_palette:algal_blend', '2x minecraft:andesite')

event.recipes.createMixing(Item.of(AP('algal_blend'), 2), ['minecraft:clay_ball', ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']])
event.recipes.createMixing(Item.of(AP('algal_blend'), 8), ['minecraft:clay_ball', 'upgrade_aquatic:polar_kelp'])
event.recipes.createMixing(Item.of(CR('andesite_alloy'), 2), [AP('algal_brick'), ['minecraft:andesite', CR('andesite_cobblestone')]])

////花岗岩合金
event.shaped(Item.of(KJ('granite_alloy'), 2), [
	'SS',
	'AA'
], {
	A: ['minecraft:granite'],
	S: [MC('iron_nugget'), TE('nickel_nugget')]
})
event.shaped(Item.of(KJ('granite_alloy'), 2), [
	'AA',
	'SS'
], {
	A: ['minecraft:granite'],
	S: [MC('iron_nugget'), TE('nickel_nugget')]
})

event.recipes.createMixing(Item.of(KJ('granite_alloy'), 2), ['minecraft:granite', [MC('iron_nugget'), TE('nickel_nugget')]])

////闪长岩合金
event.smelting(SP('ash_brick'), F('#dusts/ash')).xp(0).cookingTime(120)
event.shaped(Item.of(KJ('diorite_alloy'), 2), [
	'SS',
	'AA'
], {
	A: ['minecraft:diorite'],
	S: [SP('ash_brick')]
})
event.shaped(Item.of(KJ('diorite_alloy'), 2), [
	'AA',
	'SS'
], {
	A: ['minecraft:diorite'],
	S: [SP('ash_brick')]
})

event.recipes.createMixing(Item.of(KJ('diorite_alloy'), 2), ['minecraft:diorite', SP('ash_brick')])
//event.recipes.createMixing(Item.of(SP('ash'), 6), ('#minecraft:logs_that_burn')).heated()
//event.recipes.createMixing(Item.of(SP('ash'), 2), ('#minecraft:planks')).heated()

//青金合金
event.remove({ id: 'create_dd:crafting/lapis_alloy' })
event.shaped(Item.of('create_dd:lapis_alloy', 2), [
	'SS',
	'AA'
], {
	A: 'minecraft:lapis_lazuli',
	S: 'thermal:tin_nugget'
})
event.shaped(Item.of('create_dd:lapis_alloy', 2), [
	'AA',
	'SS'
], {
	A: 'minecraft:lapis_lazuli',
	S: 'thermal:tin_nugget'
})

event.recipes.createMixing(Item.of('create_dd:lapis_alloy', 2), ['minecraft:lapis_lazuli', 'thermal:tin_nugget'])
}

function cast_iron(event) {
////工业铁锭/铸铁
///锭
//工作盆加工
event.recipes.createCompacting(['create_dd:industrial_iron_ingot'], [MC('iron_ingot')]).heated()
//合金窑
event.recipes.immersiveengineering.alloy('2x create_dd:industrial_iron_ingot', 'thermal:iron_dust', 'thermal:iron_dust')
//高炉
event.recipes.immersiveengineering.blast_furnace('create_dd:industrial_iron_ingot', MC('iron_ingot'), TE('slag')).time(180)
event.recipes.immersiveengineering.blast_furnace('create:industrial_iron_block', MC('iron_block'), TE('slag_block')).time(1340)
//感应炉
event.recipes.thermal.smelter('2x create_dd:industrial_iron_ingot', ["minecraft:iron_ingot", "minecraft:iron_ingot"]).energy(8000)
}

function iron_compressed(event) {
////压缩铁锭
///爆炸合成50%
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "minecraft:iron_ingot"
	},
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	],
	"loss_rate": 50
})//锭合成
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "create:industrial_iron_block"
	},
	"results": [
	  {
		"item": "minecraft:iron_block"
	  }
	],
	"loss_rate": 50
})//块合成
///爆炸合成25%
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "create_dd:industrial_iron_ingot"
	},
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	],
	"loss_rate": 25
})//锭合成
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "create:industrial_iron_block"
	},
	"results": [
	  {
		"item": "pneumaticcraft:compressed_iron_block"
	  }
	],
	"loss_rate": 25
})//块合成
///压缩加工
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create_dd:industrial_iron_ingot"
	  }
	],
	"pressure": 2.0,
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	]
})
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:industrial_iron_block"
	  }
	],
	"pressure": 2.0,
	"results": [
	  {
		"item": "pneumaticcraft:compressed_iron_block"
	  }
	]
})
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "minecraft:iron_ingot"
	  }
	],
	"pressure": 3.0,
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	]
})
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:industrial_iron_block"
	  }
	],
	"pressure": 3.0,
	"results": [
	  {
		"item": "minecraft:iron_block"
	  }
	]
})
//无序合成
event.shapeless(PC('ingot_iron_compressed'), ['create_dd:industrial_iron_ingot', 'create_dd:industrial_iron_ingot', TE('earth_charge')])
event.shapeless(PC('ingot_iron_compressed'), ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', TE('earth_charge')])
//板材
event.recipes.createPressing(KJ("iron_compressed_sheet"), PC("ingot_iron_compressed"))//压缩铁板
//还原
event.blasting(PC('ingot_iron_compressed'), KJ('iron_compressed_sheet'))
//压缩铁齿轮
event.remove({ id: 'pneumaticcraft:compressed_iron_gear' })
//合成
event.shaped('4x pneumaticcraft:compressed_iron_gear', [
	' A ',
	'ASA',
	' A ',
], {
	A: 'pneumaticcraft:ingot_iron_compressed',
	S: ['minecraft:iron_nugget', 'create:zinc_nugget', 'thermal:nickel_nugget', 'thermal:tin_nugget']
})
//冲压
event.recipes.thermalPress('pneumaticcraft:compressed_iron_gear', [
	'pneumaticcraft:ingot_iron_compressed',
	"thermal:press_gear_die",
])
event.recipes.create.deploying({
	ingredients: [
	  Ingredient.of('pneumaticcraft:ingot_iron_compressed'),
	  [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die")]
	],
	results: [Item.of('pneumaticcraft:compressed_iron_gear')],
	keepHeldItem: true,
})
event.recipes.immersiveengineeringMetalPress(
	'pneumaticcraft:compressed_iron_gear',
	'pneumaticcraft:ingot_iron_compressed',
	"immersiveengineering:mold_gear"
)
}

function steel(event) {
////生铁变钢
//高炉
event.recipes.immersiveengineering.blast_furnace('create_dd:steel_ingot', TC('pig_iron_ingot'), TE('slag')).time(460)
event.recipes.immersiveengineering.blast_furnace('create_dd:steel_block', TC('pig_iron_block'), TE('slag_block')).time(3680)
//流体搅拌
event.recipes.createMixing([Fluid.of(TC("molten_steel"), 120), TE('slag')], [Fluid.of(TC("molten_pig_iron"), 120), F('#dusts/charcoal')]).processingTime(480)
//特殊加工
event.recipes.thermal.smelter(['create_dd:steel_ingot', TE('rich_slag')], [TC('pig_iron_ingot'), F('#dusts/charcoal')]).energy(38000)
event.recipes.immersiveengineering.arc_furnace('3x create_dd:steel_ingot', TC('pig_iron_ingot', 3), [F('#dusts/charcoal')], TE('rich_slag')).time(400).energy(51200)
////铸铁变钢
//高炉
event.recipes.immersiveengineering.blast_furnace('kubejs:steel_compound', 'create_dd:industrial_iron_ingot', TE('slag')).time(460)
event.recipes.immersiveengineering.blast_furnace('kubejs:steel_block_compound', 'create:industrial_iron_block', TE('slag_block')).time(3680)
//流体搅拌
event.recipes.createMixing([Fluid.of(TC("molten_steel"), 120), TE('slag')], [Fluid.of('createbigcannons:molten_cast_iron', 120), F('#dusts/charcoal')]).processingTime(480)
//特殊加工
event.recipes.thermal.smelter(['create_dd:steel_ingot', TE('rich_slag')], ['create_dd:industrial_iron_ingot', F('#dusts/charcoal')]).energy(38000)
event.recipes.immersiveengineering.arc_furnace('3x create_dd:steel_ingot', '3x create_dd:industrial_iron_ingot', [F('#dusts/charcoal')], TE('rich_slag')).time(400).energy(51200)
let st = KJ('steel_compound')
	event.recipes.createSequencedAssembly([
		'create_dd:steel_ingot',
	], KJ('steel_compound'), [
		event.recipes.createPressing(st, st)
	]).transitionalItem(st)
		.loops(6)
		.id('kubejs:steel')
let stb = KJ('steel_block_compound')
	event.recipes.createSequencedAssembly([
		'create_dd:steel_block',
	], KJ('steel_block_compound'), [
		event.recipes.createPressing(stb, stb)
	]).transitionalItem(stb)
		.loops(24)
		.id('kubejs:steelblock')
}

function ManaAlloys(event) {
////魔力钢
//流体搅拌
//event.recipes.createMixing(Fluid.of('materialis:molten_manasteel', 90), [Fluid.of(TC('molten_tin'), 90), BO('mana_pearl')]).processingTime(110)
event.recipes.createMixing(Fluid.of('materialis:molten_manasteel', 90), [Fluid.of(TC('molten_tin'), 90), BO('mana_powder', 4)]).processingTime(110)
//附魔装置
//event.recipes.botania.mana_infusion(KJ('raw_mana_steel'), MC('raw_iron'), 4000)
//event.recipes.botania.mana_infusion(BO('manasteel_ingot'), MC('iron_ingot'), 6000)
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "thermal:tin_ingot"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "botania:mana_powder"
      }
    },
    {
      "item": {
        "item": "botania:mana_powder"
      }
    },
    {
      "item": {
        "item": "botania:mana_powder"
      }
    },
    {
      "item": {
        "item": "botania:mana_powder"
      }
    }
  ],
  "output": {
    "item": "kubejs:manasteel_compound"
  },
  "sourceCost": 1000,
  "keepNbtOfReagent": false
})
//魔钢混合物
event.recipes.immersiveengineering.alloy(KJ('manasteel_compound'), TE('tin_ingot'), BO('mana_powder', 4))
//event.recipes.immersiveengineering.alloy(KJ('manasteel_compound'), TE('tin_ingot'), BO('mana_pearl'))
//还原
event.recipes.immersiveengineering.alloy('2x botania:manasteel_ingot', KJ('manasteel_compound'), KJ('manasteel_compound'))
event.recipes.createCompacting('botania:manasteel_ingot', [KJ('manasteel_compound')]).heated()
event.recipes.botania.mana_infusion('2x botania:manasteel_ingot', KJ('manasteel_compound'), 6000)
}

function alloys(event) {
//巧克力
event.recipes.createMixing(Fluid.of('tinkers_thinking:molten_white_chocolate', 4), [Fluid.of('create_confectionery:caramel', 2), Fluid.of(('create_confectionery:white_chocolate'), 2)]).processingTime(1)
event.recipes.createMixing(Fluid.of('tinkers_thinking:molten_black_chocolate', 4), [Fluid.of('create_confectionery:caramel', 2), Fluid.of(('create_confectionery:black_chocolate'), 2)]).processingTime(1)

////黄铜
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_brass'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_zinc'), 4)]).processingTime(1)
//铜锌混合物
event.recipes.immersiveengineering.alloy('kubejs:brass_compound', 'minecraft:copper_ingot', 'kubejs:zinc_dust')
//还原
event.recipes.immersiveengineering.alloy('4x create:brass_ingot', KJ('brass_compound'), KJ('brass_compound'))
event.recipes.createCompacting([CR('brass_ingot', 2)], [KJ('brass_compound')]).heated()
//event.recipes.thermal.smelter(CR('brass_ingot', 2), [MC("copper_ingot"), CR("zinc_ingot")])

////青铜
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_bronze'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_tin'), 4)]).processingTime(1)
//铜锡混合物
event.recipes.immersiveengineering.alloy('kubejs:bronze_compound', 'minecraft:copper_ingot', 'thermal:tin_dust')
//还原
event.recipes.immersiveengineering.alloy('4x create_dd:bronze_ingot', KJ('bronze_compound'), KJ('bronze_compound'))
event.recipes.createCompacting(['2x create_dd:bronze_ingot'], [KJ('bronze_compound')]).heated()
event.recipes.thermal.smelter('2x create_dd:bronze_ingot', [MC("copper_ingot"), TE("tin_ingot")])

////康铜
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_constantan'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_nickel'), 4)]).processingTime(1)
//铜镍混合物
event.recipes.immersiveengineering.alloy('kubejs:constantan_compound', 'minecraft:copper_ingot', 'thermal:nickel_dust')
//还原
event.recipes.immersiveengineering.alloy('4x thermal:constantan_ingot', KJ('constantan_compound'), KJ('constantan_compound'))
event.recipes.createCompacting(['2x thermal:constantan_ingot'], [KJ('constantan_compound')]).heated()
event.recipes.thermal.smelter(TE("constantan_ingot", 2), [MC("copper_ingot"), TE("nickel_ingot")])

////玫瑰金
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_rose_gold'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_gold'), 4)]).processingTime(1)
//铜金混合物
event.recipes.immersiveengineering.alloy('kubejs:rose_gold_compound', 'minecraft:copper_ingot', 'thermal:gold_dust')
//还原
event.recipes.immersiveengineering.alloy('4x tconstruct:rose_gold_ingot', KJ('rose_gold_compound'), KJ('rose_gold_compound'))
event.recipes.createCompacting(['2x tconstruct:rose_gold_ingot'], [KJ('rose_gold_compound')]).heated()
event.recipes.thermal.smelter(TC("rose_gold_ingot", 2), [MC("copper_ingot"), MC("gold_ingot")])

////琥珀金
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_electrum'), 8), [Fluid.of(TC('molten_gold'), 4), Fluid.of(TC('molten_silver'), 4)]).processingTime(1)
//金银混合物
event.recipes.immersiveengineering.alloy('kubejs:electrum_compound', 'minecraft:gold_ingot', 'thermal:silver_dust')
//还原
event.recipes.immersiveengineering.alloy('4x thermal:electrum_ingot', KJ('electrum_compound'), KJ('electrum_compound'))
event.recipes.createCompacting(['2x thermal:electrum_ingot'], [KJ('electrum_compound')]).heated()
event.recipes.thermal.smelter(TE("electrum_ingot", 2), [TE("silver_ingot"), MC("gold_ingot")])

////下界合金
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_netherite'), 10), [Fluid.of(TC('molten_debris'), 10), Fluid.of(TC('molten_gold'), 9)]).processingTime(2)
//混合物
event.recipes.createMixing(Item.of('kubejs:netherite_compound'), [MC('netherite_scrap', 4), MC('gold_ingot', 3)]).superheated()
event.recipes.immersiveengineering.alloy('kubejs:netherite_compound', '4x minecraft:netherite_scrap', '4x minecraft:gold_ingot')
//还原
let nc = KJ('netherite_compound')
	event.recipes.createSequencedAssembly([
		Item.of(MC('netherite_ingot', 2)).withChance(0.3),
		Item.of(KJ('netherite_compound')).withChance(0.7),
	], KJ('netherite_compound'), [
		event.recipes.createPressing(nc, nc)
	]).transitionalItem(nc)
		.loops(8)
		.id('kubejs:netherite')

event.custom({
    "type": "architects_palette:warping",
    "ingredient": [
        {
            "item": "kubejs:netherite_compound"
        }
    ],
    "result": {
        "item": "minecraft:netherite_ingot", 
		"count": 2
    },
    "dimension": "minecraft:the_nether"
})
event.recipes.thermal.smelter(MC('netherite_ingot', 2), [MC('netherite_scrap', 4), MC('gold_ingot', 4)])

////殷瓦
//铁镍混合物
event.shapeless(KJ('nickel_compound'), [TE('nickel_ingot'), CR("crushed_raw_iron")])
event.recipes.immersiveengineering.alloy('kubejs:nickel_compound', 'thermal:nickel_ingot', 'thermal:iron_dust')
//殷瓦钢胚
event.recipes.immersiveengineering.alloy('4x kubejs:invar_compound', 'kubejs:nickel_compound', 'kubejs:nickel_compound')
event.recipes.thermal.smelter([KJ("invar_compound"), KJ("invar_compound")], [TE("nickel_ingot"), MC("iron_ingot")])
event.blasting(KJ('invar_compound'), KJ('nickel_compound'))
//殷瓦锭
let s = KJ('invar_compound')
	event.recipes.createSequencedAssembly([
		TE('invar_ingot'),
	], KJ('invar_compound'), [
		event.recipes.createPressing(s, s)
	]).transitionalItem(s)
		.loops(16)
		.id('kubejs:invar')
		
////生铁
//流体搅拌
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 8), [
	Fluid.of('materialis:molten_manasteel', 3), 
	Fluid.of(('create:honey'), 5)
]).heated().processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 8), [
	Fluid.of('materialis:molten_manasteel', 3), 
	Fluid.of(('tconstruct:honey'), 5)
]).heated().processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 8), [
	Fluid.of('materialis:molten_manasteel', 3), 
	Fluid.of(('create_central_kitchen:syrup'), 5)
]).heated().processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 8), [
	Fluid.of('materialis:molten_manasteel', 3), 
	Fluid.of(('tconstruct:blood'), 5)
]).heated().processingTime(1)
//生铁胚
event.recipes.thermal.smelter(KJ("pigiron_compound"), ["botania:manasteel_ingot", 'tconstruct:blood_slime']).energy(8000)
event.recipes.thermal.smelter(KJ("pigiron_compound"), ["botania:manasteel_ingot", 'minecraft:honey_block']).energy(8000)
event.recipes.immersiveengineering.alloy(KJ("pigiron_compound"), "botania:manasteel_ingot", 'tconstruct:blood_slime')
event.recipes.immersiveengineering.alloy(KJ("pigiron_compound"), "botania:manasteel_ingot", 'minecraft:honey_block')
//还原
event.recipes.immersiveengineering.alloy('4x tconstruct:pig_iron_ingot', KJ('pigiron_compound'), KJ('pigiron_compound'))
event.recipes.createCompacting(['2x tconstruct:pig_iron_ingot'], [KJ('pigiron_compound')]).heated()
event.recipes.botania.mana_infusion('3x tconstruct:pig_iron_ingot', KJ('pigiron_compound'), 1500)

}

onEvent('item.tags', event => {
})