
onEvent('recipes', event => {
	essence(event) //新生魔艺 精华
	rune(event) //植物魔法 符文
})

function essence(event) {
//水之精华
event.remove({ output: ARS('water_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:water_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "tag": "kubejs:ice"
      }
    },
    {
      "item": {
        "tag": "kubejs:ice"
      }
    },
    {
      "item": {
        "tag": "kubejs:ice"
      }
    },
    {
      "item": {
        "tag": "kubejs:ice"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:water_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "tag": "kubejs:water_essence"
      }
    },
    {
      "item": {
        "tag": "forge:raw_fishes"
      }
    },
    {
      "item": {
        "item": "minecraft:water_bucket"
      }
    },
    {
      "item": {
        "tag": "kubejs:water_essence"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:water_essence",
  "count": 1,
  "source": 1000,
  "pedestalItems": [
    {
      "item": {
        "tag": "kubejs:neptunium_fishing_rod"
      }
    },
    {
      "item": {
        "tag": "forge:raw_fishes"
      }
    },
    {
      "item": {
        "item": "aquaculture:message_in_a_bottle"
      }
    },
    {
      "item": {
        "item": "aquaculture:neptunes_bounty"
      }
    }
  ]
})
//风之精华
event.remove({ output: ARS('air_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:air_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:wilden_wing"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:golden_feather"
      }
    },
    {
      "item": {
        "item": "minecraft:phantom_membrane"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:air_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "item": "create:white_sail"
      }
    },
    {
      "item": {
        "tag": "minecraft:arrows"
      }
    },
    {
      "item": {
        "item": "create:encased_fan"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:air_essence",
  "count": 1,
  "source": 1000,
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:phantom_membrane"
      }
    },
    {
      "item": {
        "item": "minecraft:phantom_membrane"
      }
    },
    {
      "item": {
        "item": "minecraft:phantom_membrane"
      }
    },
    {
      "item": {
        "item": "minecraft:phantom_membrane"
      }
    }
  ]
})
//土之精华
event.remove({ output: ARS('earth_essence') })
event.custom({//草方块
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "minecraft:dirt"
  },
  "output": "minecraft:grass_block",
  "count": 1,
  "source": 1000,
  "pedestalItems": [
    {
      "item": {
        "tag": "kubejs:compost"
      }
    },
    {
      "item": {
        "tag": "kubejs:compost"
      }
    },
    {
      "item": {
        "tag": "kubejs:compost"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:earth_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:grass_block"
      }
    },
    {
      "item": {
        "item": "minecraft:fern"
      }
    },
    {
      "item": {
        "item": "minecraft:grass"
      }
    },
    {
      "item": {
        "tag": "minecraft:flowers"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:earth_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:flowering_azalea"
      }
    },
    {
      "item": {
        "item": "minecraft:glow_lichen"
      }
    },
    {
      "item": {
        "item": "minecraft:vine"
      }
    },
    {
      "item": {
        "item": "minecraft:glow_berries"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:earth_essence",
  "count": 1,
  "source": 1000,
  "pedestalItems": [
    {
      "item": {
        "item": "twilightforest:ironwood_ingot"
      }
    },
    {
      "item": {
        "tag": "botania:livingwood_logs"
      }
    },
    {
      "item": {
        "item": "twilightforest:torchberries"
      }
    }
  ]
})
//火之精华
event.remove({ output: ARS('fire_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:fire_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "tag": "kubejs:fire_essence"
      }
    },
    {
      "item": {
        "item": "minecraft:flint_and_steel"
      }
    },
    {
      "item": {
        "item": "minecraft:gunpowder"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:fire_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "thermal:niter_dust"
      }
    },
    {
      "item": {
        "item": "thermal:sulfur_dust"
      }
    },
    {
      "item": {
        "item": "thermal:niter_dust"
      }
    },
    {
      "item": {
        "item": "minecraft:charcoal"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:fire_essence",
  "count": 1,
  "source": 1000,
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:fire_charge"
      }
    },
    {
      "item": {
        "item": "minecraft:fire_charge"
      }
    },
    {
      "item": {
        "item": "create_dd:ember_alloy"
      }
    },
    {
      "item": {
        "item": "create_dd:ember_alloy"
      }
    },
    {
      "item": {
        "item": "minecraft:fire_charge"
      }
    }
  ]
})
//召唤之精华
event.remove({ output: ARS('conjuration_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:conjuration_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "item": "forbidden_arcanus:spawner_scrap"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:spawner_scrap"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:spawner_scrap"
      }
    },
    {
      "item": {
        "item": "forbidden_arcanus:spawner_scrap"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:conjuration_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:starbuncle_shards"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:wilden_horn"
      }
    },
    {
      "item": {
        "item": "minecraft:book"
      }
    }
  ]
})
//操纵之精华
event.remove({ output: ARS('manipulation_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:manipulation_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:clock"
      }
    },
    {
      "item": {
        "item": "minecraft:bell"
      }
    },
    {
      "item": {
        "item": "minecraft:saddle"
      }
    },
    {
      "item": {
        "item": "ftbquests:book"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:manipulation_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "create:haunted_bell"
      }
    },
    {
      "item": {
        "item": "supplementaries:rope"
      }
    },
    {
      "item": {
        "item": "minecraft:lead"
      }
    },
    {
      "item": {
        "item": "create:brass_hand"
      }
    }
  ]
})
//防护之精华
event.remove({ output: ARS('abjuration_essence') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:abjuration_essence",
  "count": 1,
  "source": 2000,
  "pedestalItems": [
    {
      "item": {
        "tag": "forge:milk"
      }
    },
    {
      "item": {
        "item": "minecraft:fermented_spider_eye"
      }
    },
    {
      "item": {
        "item": "minecraft:cocoa_beans"
      }
    },
    {
      "item": {
        "item": "minecraft:sugar"
      }
    }
  ]
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:abjuration_essence",
  "count": 1,
  "source": 1500,
  "pedestalItems": [
    {
      "item": {
        "item": "create:sweet_roll"
      }
    },
    {
      "item": {
        "item": "farmersrespite:purulent_tea"
      }
    },
    {
      "item": {
        "item": "create:bar_of_chocolate"
      }
    },
    {
      "item": {
        "item": "supplementaries:candy"
      }
    }
  ]
})

}

function rune(event) {

////一级符文	
event.remove({ output: BO('rune_water') })//水之符文
event.recipes.botania.runic_altar(BO("rune_water", 1), [
	BO('mana_powder'), 
	ARS('water_essence'), 
], 4000)

event.remove({ output: BO('rune_air') })//风之符文
event.recipes.botania.runic_altar(BO("rune_air", 1), [
	BO('mana_powder'), 
	ARS('air_essence'), 
], 4000)

event.remove({ output: BO('rune_earth') })//地之符文
event.recipes.botania.runic_altar(BO("rune_earth", 1), [
	BO('mana_powder'), 
	ARS('earth_essence'), 
], 4000)

event.remove({ output: BO('rune_fire') })//火之符文
event.recipes.botania.runic_altar(BO("rune_fire", 1), [
	BO('mana_powder'), 
	ARS('fire_essence'), 
], 4000)

event.remove({ output: BO('rune_mana') })//魔力符文
event.recipes.botania.runic_altar(BO("rune_mana"), [
	BO('mana_powder'), 
	BO('mana_pearl'), 
	BO('manasteel_ingot')
], 8000)


////二级符文
event.remove({ output: BO('rune_spring') })//春之符文
event.recipes.botania.runic_altar(BO("rune_spring", 1), [
	BO('rune_water'), 
  BO('rune_fire'), 
	ARS('conjuration_essence'), 
  F('#seeds'), 
  MC('#saplings'), 
], 8000)

event.remove({ output: BO('rune_summer') })//夏之符文
event.recipes.botania.runic_altar(BO("rune_summer", 1), [
	BO('rune_earth'), 
  BO('rune_air'), 
	ARS('manipulation_essence'), 
  F('#fruits/melon'), 
  MC('#sand'), 
], 8000)

event.remove({ output: BO('rune_autumn') })//秋之符文
event.recipes.botania.runic_altar(BO("rune_autumn", 1), [
	BO('rune_fire'), 
  BO('rune_air'), 
	ARS('conjuration_essence'), 
  F('#crops/wheat'), 
  MC('#leaves'), 
], 8000)

event.remove({ output: BO('rune_winter') })//冬之符文
event.recipes.botania.runic_altar(BO("rune_winter", 1), [
	BO('rune_water'), 
  BO('rune_earth'), 
	ARS('abjuration_essence'), 
  F('#wool'), 
  MC('snow_block'), 
], 8000)



}

onEvent('item.tags', event => {

event.get('kubejs:water_essence')
.add('mekanism:salt')
.add('minecraft:seagrass')
.add('upgrade_aquatic:polar_kelp')
.add('minecraft:kelp')
.add('biomesoplenty:watergrass')

event.get('kubejs:ice')
.add('minecraft:ice')
.add('minecraft:packed_ice')
.add('minecraft:blue_ice')

event.get('kubejs:neptunium_fishing_rod')
.add('aquaculture:neptunium_fishing_rod')

event.get('kubejs:fire_essence')
.add('minecraft:gunpowder')
.add('thermal:niter_dust')
.add('thermal:sulfur_dust')
.add('create:cinder_flour')

event.get('kubejs:compost')
.add('thermal:compost')	
.add('minecraft:bone_meal')
.add('forbidden_arcanus:arcane_bone_meal')
.add('thermal:phytogro')

event.get('kubejs:conjuration_essence')
.add('ars_nouveau:wilden_horn')
.add('ars_nouveau:starbuncle_shards')

event.get('kubejs:manipulation_essence')
.add('minecraft:clock')
.add('minecraft:compass')

})