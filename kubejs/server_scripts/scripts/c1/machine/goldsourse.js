
onEvent('recipes', event => {
	goldsourseMachine(event)
  arcane_gold(event)
	c1_flowers(event)
	manastuffs(event)
})

function goldsourseMachine(event) {
//活木
event.remove({ id: BO('pure_daisy/livingwood') })
event.custom({//暮色森林木转活木
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "tag",
    "tag": "twilightforest:logs"
  },
  "output": "botania:livingwood_log"
})
event.custom({//繁茂至高木转活木
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "ars_nouveau:green_archwood_log"
  },
  "output": "botania:livingwood_log"
})
//其他类型至高木
event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "ars_nouveau:purple_archwood_log"
  },
  "output": "occultism:otherworld_log"
})
event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "ars_nouveau:blue_archwood_log"
  },
  "output": "minecraft:warped_stem"
})
event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "ars_nouveau:red_archwood_log"
  },
  "output": "minecraft:crimson_stem"
})

//event.recipes.botania.mana_infusion(FA("arcane_gold_ingot"), MC('gold_ingot'), 6000)//神秘金锭
event.recipes.botania.mana_infusion('upgrade_aquatic:polar_kelp', MC('kelp'), 50000)//极光海带
event.remove({ id: "forbidden_arcanus:mundabitur_dust" })	
event.recipes.botania.mana_infusion(FA('mundabitur_dust'), FA('arcane_crystal_dust'), 1000)//洁净粉末(暂定)

//符文粉
event.recipes.createMilling([KJ('rune_dust', 3)], FA('rune')).processingTime(700)
event.recipes.createCrushing([KJ('rune_dust', 4), Item.of(KJ("rune_dust"), 2).withChance(0.75)], FA('rune')).processingTime(500)
event.recipes.thermal.pulverizer([KJ('rune_dust', 8)], FA('rune')).energy(10000)
//还原
event.blasting(FA('rune'), KJ('rune_dust'))

//娜迦鳞粉
event.recipes.createMilling([KJ('naga_dust', 12)], 'twilightforest:naga_scale').processingTime(700)
event.recipes.createCrushing([KJ('naga_dust', 12), Item.of(KJ("naga_dust"), 6).withChance(0.75)], 'twilightforest:naga_scale').processingTime(500)
event.recipes.thermal.pulverizer([KJ('naga_dust', 18)], 'twilightforest:naga_scale').energy(10000)
//鳞片再生
event.recipes.bloodmagic.altar('twilightforest:naga_scale', KJ('naga_dust')).upgradeLevel(2).altarSyphon(4000).consumptionRate(10).drainRate(10)
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "twilightforest:naga_trophy"
    }
  ],
  "tool": {
    "tag": "forge:tools/knives"
  },
  "result": [
    {
      "item": "twilightforest:naga_trophy"
    },
    {
      "item": "kubejs:naga_dust",
      "chance": 0.05
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "twilightforest:naga_trophy"
    }
  ],
  "tool": {
    "item": "create_dd:deforester_saw"
  },
  "result": [
    {
      "item": "twilightforest:naga_trophy"
    },
    {
      "item": "kubejs:naga_dust",
      "chance": 0.15
    }
  ]
})

event.shapeless(KJ('gold_source_mechanism'), [
	KJ('naga_dust'), 
	BO('#livingwood_logs'), 
	KJ('arcane_gold_gear'), 
	KJ('arcane_gold_gear')]).id("kubejs:gold_source_mechanism_manual_only")
.damageIngredient(Item.of(KJ('stone_saw')))
.damageIngredient(Item.of(KJ('iron_saw')))
.damageIngredient(Item.of(KJ('diamond_saw')))
.damageIngredient(Item.of(KJ('netherite_saw')))
.damageIngredient(Item.of('create_dd:deforester_saw'))

event.shaped(KJ('gold_source_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('gold_source_casing'),
	S: KJ('gold_source_mechanism')
})
event.shaped(BO('mana_spreader'), [
	'PPP',
	'PA ',
	'PPP'
], {
	P: BO('#livingwood_logs'),
	A: KJ('living_core')
})	
let gold_source_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:gold_source_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:gold_source_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:gold_source_machine')
}

//gold_source_machine(KJ('life_gold_source'), 1)
gold_source_machine(BO('bellows'), 4)
gold_source_machine(BO('open_crate'), 4)
gold_source_machine(BO('mana_spreader'), 8, KJ('living_core'))
gold_source_machine(BO('turntable'), 4, CR('turntable'))


//金源之魂
event.recipes.botania.mana_infusion(KJ('life_gold_source', 1), KJ('gold_source_machine'), 1000)
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "item": KJ("gold_source_machine") },
	"result": { "item": KJ("life_gold_source") }
})

}

function c1_flowers(event) {
//黄兰花
event.recipes.botania.petal_apothecary(FA("yellow_orchid"), [
	BO("yellow_petal"), 
	BO("yellow_petal"), 
	BO("yellow_petal"), 
	BO("yellow_petal"), 
	BO("yellow_petal"), 
	BO("yellow_petal")])
//金兰花
event.recipes.botania.petal_apothecary(FA("golden_orchid_seeds"), [
	FA("yellow_orchid"), 
	'occultism:datura_seeds', 
	FA("arcane_gold_nugget"), 
	FA("arcane_gold_nugget"), 
	FA("arcane_gold_nugget"), 
	FA("arcane_gold_nugget"), 
	FA("arcane_gold_nugget")])

//活力核心
event.shaped(KJ('living_core'), [
	'PAP'
], {
	P: KJ('arcane_golden_sheet'),
	A: F('#gems')
})

////产能花
event.remove({ output: BO('endoflame') })//火红莲
event.recipes.botania.petal_apothecary(BO('endoflame'), [
	KJ("life_gold_source"), 
  BO('rune_fire'), 
	BO('#petals/light_gray'), 
	BO('#petals/red'),
	BO('#petals/brown'), 
	BO('#petals/brown')])


event.remove({ output: BO('hydroangeas') })//水绣球
event.recipes.botania.petal_apothecary(BO('hydroangeas'), [
	KJ("life_gold_source"), 
  BO('rune_water'), 
	BO('#petals/cyan'), 
	BO('#petals/blue')])


////功能花
event.remove({ output: BO('hopperhock') })//漏斗花
event.recipes.botania.petal_apothecary(BO('hopperhock'), [
	KJ("life_gold_source"), 
	BO('redstone_root'), 
	BO('#petals/gray'),
	BO('#petals/light_gray')])

event.remove({ output: BO('manastar') })//魔力星
event.recipes.botania.petal_apothecary(BO('manastar'), [
	KJ("life_gold_source"), 
	BO('#petals/red'),
	BO('#petals/green'),
	BO('#petals/cyan'),
	BO('#petals/light_blue')])

event.remove({ output: BO('daffomill') })//扇水仙
event.recipes.botania.petal_apothecary(BO('daffomill'), [
	KJ("life_gold_source"), 
	BO('redstone_root'), 
	BO('rune_air'),
	BO('#petals/yellow'),
	BO('#petals/brown'),
	BO('#petals/white')])

event.remove({ output: BO('tangleberrie') })//束缚莓
event.recipes.botania.petal_apothecary(BO('tangleberrie'), [
	KJ("life_gold_source"), 
	BO('rune_earth'),
	BO('rune_air'),
	BO('#petals/cyan'),
	BO('#petals/cyan'),
	BO('#petals/gray'),
	BO('#petals/light_gray')])

event.remove({ output: BO('medumone') })//石化草
event.recipes.botania.petal_apothecary(BO('medumone'), [
	KJ("life_gold_source"), 
	BO('redstone_root'),
	BO('rune_earth'),
	BO('#petals/brown'),
	BO('#petals/brown'),
	BO('#petals/gray')])

/*
event.remove({ output: 'creatania:blazunia' })//烈焰轰花
event.recipes.botania.petal_apothecary('creatania:blazunia', [
	KJ("life_gold_source"), 
	BO('rune_gluttony'),
	BO('#petals/yellow'),
	BO('#petals/yellow'),
	BO('#petals/red'),
	BO('#petals/light_blue')])
*/

event.remove({ output: BO('marimorphosis') })//异构花
event.recipes.botania.petal_apothecary(BO('marimorphosis'), [
	KJ("life_gold_source"), 
	BO('redstone_root'),
	BO('rune_earth'),
	BO('rune_mana'),
	BO('#petals/green'),
	BO('#petals/yellow'),
	BO('#petals/red'),
	BO('#petals/light_blue')])

}

function manastuffs(event) {
/*
//纯净魔力
event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": "creatania:mana/blocks/corrupt"
	},
	"time": 6,
	"output": {
	  "name": "creatania:pure_mana"
	}
})
*/

////魔力尘
//魔力灌注
event.recipes.botania.mana_infusion(BO('mana_powder'), KJ('rune_dust'), 1000)
//磨粉
/*
event.recipes.createMilling([BO('mana_powder', 4)], BO('mana_pearl')).processingTime(150)
//魔力结晶
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1000,
			"fluid": "creatania:pure_mana"
		}
	],
	"results": [
		{
		  "item": "kubejs:mana_crystal"
		}
	],
	"processingTime": 90,
	"heatRequirement": "lowheated"
})
event.shaped(BO('mana_powder'), [
	'RR',
	'RR'
], {
	R: KJ('mana_crystal')
})
*/

////魔力珍珠
//末影珍珠碎片
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "tconstruct:ender_slime_ball"
  },
  "output": "forbidden_arcanus:ender_pearl_fragment",
  "count": 2,
  "source": 1500,
  "pedestalItems": []
})
//末影珍珠
event.remove({ id: "forbidden_arcanus:ender_pearl" })
event.shapeless(MC('ender_pearl'), [FA('ender_pearl_fragment'), FA('ender_pearl_fragment'), FA('ender_pearl_fragment'), FA('ender_pearl_fragment')])
//浇筑
event.remove({ output: "botania:mana_pearl" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "forge:mana_pearl"
  },
  "cast_consumed": true,
  "fluid": {
    "name": "materialis:molten_manasteel",
    "amount": 90
  },
  "result": {
    "item": "botania:mana_pearl"
  },
  "cooling_time": 180
})

////魔力钻石
event.remove({ output: "botania:mana_diamond" })
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "minecraft:diamond"
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
    "item": "botania:mana_diamond"
  },
  "sourceCost": 10000,
  "keepNbtOfReagent": false
})
event.custom({
  "type": "botania:terra_plate",
  "mana": 20000,
  "ingredients": [
    {
      "item": "minecraft:diamond"
    }
  ],
  "result": {
    "item": "botania:mana_diamond"
  }
})

}

function arcane_gold(event) {
event.remove({ id: "forbidden_arcanus:arcane_gold_ingot" })	
///神秘蜂蜜
//蜂蜜块合成修正
event.remove({ id: "create:compacting/honey" })
event.remove({ id: "tconstruct:smeltery/casting/honey/block" })
event.remove({ id: "thermal:machines/chiller/chiller_honey_to_honey_block" })
//方块右键
event.recipes.create.itemApplication('kubejs:arcane_honey_block', ['minecraft:honey_block', 'forbidden_arcanus:mundabitur_dust'])
//压塑成型
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "fluidTag": "kubejs:honey",
      "amount": 1000
    }
  ],
  "results": [
    {
      "item": "minecraft:honey_block"
    }
  ]
})
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "fluid": "kubejs:arcane_honey",
      "amount": 1000
    }
  ],
  "results": [
    {
      "item": "kubejs:arcane_honey_block"
    }
  ]
})
//铸造盆
event.custom({
  "type": "tconstruct:casting_basin",
  "fluid": {
    "tag": "kubejs:honey",
    "amount": 1000
  },
  "result": "minecraft:honey_block",
  "cooling_time": 94
})
event.custom({
  "type": "tconstruct:casting_basin",
  "fluid": {
    "name": "kubejs:arcane_honey",
    "amount": 1000
  },
  "result": "kubejs:arcane_honey_block",
  "cooling_time": 94
})
//急速冷冻机
event.custom({
  "type": "thermal:chiller",
  "ingredient": {
    "fluid_tag": "kubejs:honey",
    "amount": 1000
  },
  "result": [
    {
      "item": "minecraft:honey_block"
    }
  ],
  "energy": 2000
})
event.custom({
  "type": "thermal:chiller",
  "ingredient": {
    "fluid": "kubejs:arcane_honey",
    "amount": 1000
  },
  "result": [
    {
      "item": "kubejs:arcane_honey_block"
    }
  ],
  "energy": 2000
})
//混合搅拌
event.custom({
  "type": "create:mixing",
  "heatRequirement": "lowheated",
  "ingredients": [
    {
      "item": "kubejs:arcane_honey_block"
    }
  ],
  "results": [
    {
      "amount": 1000,
      "fluid": "kubejs:arcane_honey"
    }
  ]
}
)

event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "create:honey"
  },
  "output": "kubejs:arcane_honey"
})
event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "tconstruct:honey"
  },
  "output": "kubejs:arcane_honey"
})
event.custom({
  "type": "botania:state_copying_pure_daisy",
  "input": {
    "type": "block",
    "block": "minecraft:honey_block"
  },
  "output": "kubejs:arcane_honey_block"
})

//流体搅拌
event.recipes.createMixing(Fluid.of('materialis:molten_arcane_gold', 90), [Fluid.of(TC('molten_gold'), 90), Fluid.of('kubejs:arcane_honey', 250)]).processingTime(100)
event.recipes.createMixing(Fluid.of('materialis:molten_arcane_gold', 360), [Fluid.of(TC('molten_gold'), 90), 'kubejs:arcane_honey_block']).processingTime(100)

//合金窑
event.recipes.immersiveengineering.alloy(FA('arcane_gold_ingot', 4), MC('gold_ingot', 4), KJ('arcane_honey_block'))	

}
