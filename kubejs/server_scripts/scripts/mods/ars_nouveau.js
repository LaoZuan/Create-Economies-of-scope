
onEvent('recipes', event => {
	ars_nouveau(event)
})

function ars_nouveau(event) {
//法术书
event.remove({ id: ARS('novice_spell_book') })//初学者法术书
event.shapeless(ARS("novice_spell_book"), [
	MC('writable_book'), 
	FA('arcane_gold_ingot'), 
	FA('rune'), 
	MC('iron_sword'), 
	MC('iron_pickaxe'), 
	MC('iron_axe'), 
	MC('iron_shovel')])
event.remove({ id: ARS('apprentice_spell_book_upgrade') })//法师法术书
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "ars_nouveau:novice_spell_book"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "forbidden_arcanus:arcane_gold_block"
      }
    },
    {
      "item": {
        "item": "botania:spell_cloth"
      }
    },
    {
      "item": {
        "item": "reliquary:witch_hat"
      }
    }
  ],
  "output": {
    "item": "ars_nouveau:apprentice_spell_book"
  },
  "sourceCost": 20000,
  "keepNbtOfReagent": true
})

event.remove({ id: ARS('archmage_spell_book_upgrade') })//大法师法术书
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "ars_nouveau:apprentice_spell_book"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:wilden_tribute"
      }
    },
    {
      "item": {
        "item": "botania:elementium_block"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:end_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:end_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:end_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:end_fiber"
      }
    }
  ],
  "output": {
    "item": "ars_nouveau:archmage_spell_book"
  },
  "sourceCost": 20000,
  "keepNbtOfReagent": true
})

//羊皮纸
event.replaceInput({ id: ARS("blank_parchment") }, MC('paper'), F('#leather'))	

//永恒之石
event.recipes.botania.mana_infusion(FA('xpetrified_orb'), 'create_sa:heap_of_experience', 6000)//石化经验球
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "rubber_duck:rubber_duck_item"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "forbidden_arcanus:xpetrified_orb"
      }
    },
    {
      "item": {
        "item": "botania:terrasteel_ingot"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:xpetrified_orb"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:stellarite_piece"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:xpetrified_orb"
      }
    },
    {
      "item": {
        "item": "botania:terrasteel_ingot"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:xpetrified_orb"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:stellarite_piece"
      }
    }
  ],
  "output": {
    "item": "forbidden_arcanus:eternal_stella"
  },
  "sourceCost": 5000,
  "keepNbtOfReagent": false
})
		
//魔源浆果派
event.remove({ id: ARS('source_berry_pie') })
event.shaped(ARS('source_berry_pie'), [
	'DAD',
	'PPP',
	'BCB'
], {
	P: ARS('source_berry'),
	A: ARS('magebloom'),
	D: F('#milk'),
	B: MC('sugar'),
	C: FD('pie_crust')
})	
let source_berry_pie = FD('pie_crust')
event.recipes.createSequencedAssembly([
	ARS('source_berry_pie'),
], FD('pie_crust'), [
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('source_berry')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('source_berry')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('magebloom')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, MC('sugar')]),
]).transitionalItem(source_berry_pie)
	.loops(1)
	.id('kubejs:source_berry_pie')

event.remove({ id: ARS('scribes_table') })//抄写台
event.shaped(ARS('scribes_table', 1), [
		'AAA',
		'BPC'
	], {
		P: KJ('gold_source_mechanism'),
		B: MC('crafting_table'),
		C: F('#chests/wooden'),
		A: MC('smooth_stone_slab')
})	

//星宝石兽碎片
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "reagent": [
    {
      "item": "create_dd:polished_spectral_ruby"
    }
  ],
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:arcane_honey_block"
      }
    },
    {
      "item": {
        "item": "kubejs:arcane_honey_block"
      }
    },
    {
      "item": {
        "item": "kubejs:arcane_honey_block"
      }
    },
    {
      "item": {
        "item": "kubejs:arcane_honey_block"
      }
    }
  ],
  "output": {
    "item": "ars_nouveau:starbuncle_shards"
  },
  "sourceCost": 4000,
  "keepNbtOfReagent": false
})
}