
onEvent('recipes', event => {
	crude_oil(event)//石油
  light_oil(event)//轻油
  heavy_oil(event)//重油
  phenolic_resin(event)//酚醛树脂
  substrate(event)//基片
  plastic(event)//牢不可破的塑料
})

function crude_oil(event) {
event.remove({ output: 'createindustry:distillation_tower_controller' })
event.remove({ output: 'createindustry:distiller' })
event.remove({ output: 'createindustry:cast_iron_distillation_controller' })
event.remove({ output: 'createindustry:machine_input' })
event.remove({ output: 'createindustry:pumpjack_crank' })
event.remove({ output: 'createindustry:deposit_scanner' })
event.remove({ output: 'createindustry:pumpjack_hammer_holder' })
event.remove({ output: 'createindustry:pumpjack_base' })
event.remove({ output: 'createindustry:distillation_tower_output' })
event.remove({ output: 'createindustry:turbine_engine' })
event.remove({ id: 'createindustry:distillation/heavy_oil' })
event.replaceOutput({ id: 'createindustry:mixing/coal_coke' }, 'createindustry:coal_coke', 'thermal:coal_coke')
event.remove({ id: "createaddition:compacting/bioethanol" })
event.remove({ id: "createaddition:mixing/bioethanol" })
event.remove({ id: /createaddition:mixing\/biomass_.*/ })
event.remove({ id: "createaddition:compacting/biomass_pellet" })
event.remove({ id: "createaddition:compacting/seed_oil" })
event.remove({ id: "immersiveengineering:squeezer/melon_seeds" })
event.remove({ id: "immersiveengineering:squeezer/beetroot_seeds" })
event.remove({ id: "immersiveengineering:squeezer/pumpkin_seeds" })
event.remove({ id: "immersiveengineering:squeezer/hemp_seeds" })
event.remove({ id: "immersiveengineering:squeezer/wheat_seeds" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/squeezer/cabbage_seeds" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/squeezer/tomato_seeds" })
event.remove({ id: "thermal:compat/immersiveengineering/press_ie_hemp_to_plantoil" })
event.remove({ id: PC("thermo_plant/ethanol_from_sugar") })
event.remove({ id: PC("thermo_plant/ethanol_from_poisonous_potato") })
event.remove({ id: PC("thermo_plant/ethanol_from_potato") })
event.remove({ id: PC("thermo_plant/ethanol_from_sweet_berries") })
event.remove({ id: PC("thermo_plant/ethanol_from_apple") })
event.remove({ id: PC("thermo_plant/ethanol_from_melon") })
event.remove({ id: PC("thermo_plant/vegetable_oil_from_crops") }) 
event.remove({ id: PC("thermo_plant/vegetable_oil_from_seeds") }) 
event.remove({ id: PC("refinery/oil_2") }) 
event.remove({ id: PC("refinery/oil_3") }) 
event.remove({ id: PC("refinery/oil_4") }) 
event.remove({ id: "immersiveengineering:fermenter/beetroot" })
event.remove({ id: "immersiveengineering:fermenter/potato" })
event.remove({ id: "immersiveengineering:fermenter/glow_berries" })
event.remove({ id: "immersiveengineering:fermenter/honey" })
event.remove({ id: "immersiveengineering:fermenter/sugar_cane" })
event.remove({ id: "immersiveengineering:fermenter/sweet_berries" })
event.remove({ id: "immersiveengineering:fermenter/apple" })
event.remove({ id: "immersiveengineering:fermenter/melon_slice" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/fermenter/tomato" })
event.remove({ id: "immersiveengineering:refinery/biodiesel" })
event.remove({ id: PC("fluid_mixer/biodiesel") })
event.remove({ id: PC("thermo_plant/lubricant_from_biodiesel") })
event.remove({ id: PC("thermo_plant/lubricant_from_diesel") })
event.remove({ id: "createdieselgenerators:distillation/crude_oil" })

////沥青沙提取
///动力搅拌
event.recipes.createMixing([
Fluid.of('createdieselgenerators:crude_oil', 75),
Item.of('thermal:bitumen').withChance(0.85),
Item.of('thermal:tar').withChance(0.45),
Item.of('minecraft:sand')
], [Item.of('thermal:oil_sand', 1)])
//红的
event.recipes.createMixing([
Fluid.of('createdieselgenerators:crude_oil', 75),
Item.of('thermal:bitumen').withChance(0.85),
Item.of('thermal:tar').withChance(0.45),
Item.of('minecraft:red_sand')
], [Item.of('thermal:oil_red_sand', 1)])
///粉碎轮
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("sand")).withChance(0.25)], TE("oil_sand"))
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("red_sand")).withChance(0.25)], TE("oil_red_sand"))

//沉浸替代热力的石油
event.remove({ id: TE('machines/centrifuge/centrifuge_oil_sand') })
event.remove({ id: TE('machines/centrifuge/centrifuge_oil_red_sand') })
event.custom({
    "type": "thermal:centrifuge",
    "ingredient": {
      "item": "thermal:oil_sand"
    },
    "result": [
      {
        "item": "minecraft:sand",
        "chance": 0.75,
        "locked": true
      },
      {
        "item": "thermal:bitumen",
        "chance": 1.5
      },
      {
        "item": "thermal:tar",
        "chance": 1.0
      },
      {
        "fluid": "createdieselgenerators:crude_oil",
        "amount": 100
      }
    ],
    "energy": 20000
})
event.custom({
    "type": "thermal:centrifuge",
    "ingredient": {
      "item": "thermal:oil_red_sand"
    },
    "result": [
      {
        "item": "minecraft:red_sand",
        "chance": 0.75,
        "locked": true
      },
      {
        "item": "thermal:bitumen",
        "chance": 1.5
      },
      {
        "item": "thermal:tar",
        "chance": 1.0
      },
      {
        "fluid": "createdieselgenerators:crude_oil",
        "amount": 100
      }
    ],
    "energy": 20000
})

//沥青混凝土
event.remove({ id: 'immersivepetroleum:asphalt' })
//无序合成
event.shapeless('4x immersivepetroleum:asphalt', [
	MC("#sand"),
	MC("#sand"),
	[F("#gravel"), MEK("dust_fluorite")],
	[F("#gravel"), MEK("dust_fluorite")],
    TE("bitumen"),
]).id("kubejs:asphalt_manual_only")
//动力搅拌
event.recipes.createMixing('4x immersivepetroleum:asphalt', ['#minecraft:sand', '#forge:gravel', TE("bitumen")])
event.recipes.createMixing('4x immersivepetroleum:asphalt', [Fluid.of(KJ('fine_sand'), 500), '#forge:gravel', TE("bitumen")])


////蒸馏提取
event.remove({ id: "immersivepetroleum:distillationtower/oil" });
event.custom({
    "type": "immersivepetroleum:distillation",
    "byproducts": [
      {
        "item": "thermal:bitumen",
        "chance": "0.1"
      }
    ],
    "results": [
      {
        "fluid": "thermal:heavy_oil",
        "amount": 15
      },
      {
        "fluid": "thermal:light_oil",
        "amount": 30
      },
      {
        "fluid": "immersivepetroleum:lubricant",
        "amount": 5
      }
    ],
    "input": {
      "tag": "forge:crude_oil",
      "amount": 50
    },
    "time": 1,
    "energy": 1024,
}).id("kubejs:crude_oil")
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:crude_oil",
      "amount": 50
    }
  ],
  "heatRequirement": "superheated",
  "processingTime": 150,
  "results": [
    {
      "fluid": "thermal:heavy_oil",
      "amount": 15
    },
    {
      "fluid": "thermal:light_oil",
      "amount": 30
    },
    {
      "fluid": "immersivepetroleum:lubricant",
      "amount": 5
    }
  ]
})
}

function light_oil(event) {
event.remove({ id: TE("machines/refinery/refinery_light_oil") });
event.remove({ id: TE("machines/refinery/refinery_heavy_oil") });
event.remove({ id: TE("machines/refinery/refinery_crude_oil") });
////裂化轻油
//精炼
event.remove({ id: "immersivepetroleum:hydrotreater/naphtha_cracking" });
event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 5,
  "energy": 2560,
  "result": {
    "fluid": "immersivepetroleum:naphtha_cracked",
    "amount": 20
  },
  "input": {
    "tag": "forge:naphtha",
    "amount": 20
  },
  "secondary_input": {
    "tag": "minecraft:water",
    "amount": 10
  }
}).id("kubejs:naphtha_cracking")
//蒸馏
//event.remove({ id: "immersivepetroleum:refinery/phenol" });//简化苯和丙烯加工杂酚油流程
event.remove({ id: "immersivepetroleum:distillationtower/naphtha_cracking" });
event.custom({
  "type": "immersivepetroleum:distillation",
  "results": [
    {
      "fluid": "mekanism:ethene",
      "amount": 6
    },
    {
      "fluid": "immersivepetroleum:benzene",
      "amount": 2
    },
    {
      "fluid": "immersivepetroleum:propylene",
      "amount": 2
    }
  ],
  "input": {
    "tag": "forge:naphtha_cracked",
    "amount": 10
  },
  "time": 1,
  "energy": 1024
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:crude_oil",
      "amount": 10
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "mekanism:ethene",
      "amount": 6
    },
    {
      "fluid": "immersivepetroleum:benzene",
      "amount": 2
    },
    {
      "fluid": "immersivepetroleum:propylene",
      "amount": 2
    }
  ]
})

////柴油
//精炼
event.remove({ id: "immersivepetroleum:hydrotreater/sulfur_recovery" });
event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 1,
  "energy": 80,
  "result": {
    "fluid": "createdieselgenerators:diesel",
    "amount": 10
  },
  "input": {
    "tag": "forge:diesel_sulfur",
    "amount": 10
  },
  "secondary_input": {
    "tag": "minecraft:water",
    "amount": 10
  },
  "secondary_result": {
    "item": "thermal:sulfur_dust",
    "chance": "0.05"
  }
}).id("kubejs:diesel")

////乙醛
event.remove({ id: "immersivepetroleum:refinery/acetaldehyde" });
event.remove({ id: "immersiveengineering:refinery/acetaldehyde" });
//乙烯提炼
event.custom({
  "type": "immersiveengineering:refinery",
  "result": {
    "fluid": "immersiveengineering:acetaldehyde",
    "amount": 12
  },
  "catalyst": {
    "item": "create:copper_sheet"
  },
  "input0": {
    "tag": "forge:ethylene",
    "amount": 12
  },
  "energy": 120
})
//乙醇提炼
event.custom({
  "type": "immersiveengineering:refinery",
  "result": {
    "fluid": "immersiveengineering:acetaldehyde",
    "amount": 12
  },
  "catalyst": {
    "item": "thermal:silver_plate"
  },
  "input0": {
    "tag": "forge:ethanol",
    "amount": 12
  },
  "energy": 120
})

////汽油
event.remove({ id: "immersivepetroleum:refinery/gasoline" });
event.custom({
  "type": "immersiveengineering:refinery",
  "result": {
    "fluid": "createdieselgenerators:gasoline",
    "amount": 10
  },
  "input0": {
    "tag": "forge:naphtha",
    "amount": 7
  },
  "input1": {
    "tag": "forge:gasoline_additives",
    "amount": 3
  },
  "energy": 80
})

////汽油转石油气
event.remove({ id: PC("thermo_plant/gasoline") })
event.remove({ id: PC("thermo_plant/lpg") })
event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 5,
  "energy": 2560,
  "result": {
    "fluid": "pneumaticcraft:lpg",
    "amount": 8
  },
  "input": {
    "tag": "forge:gasoline",
    "amount": 10
  },
  "secondary_input": {
    "tag": "minecraft:water",
    "amount": 10
  },
  "secondary_result": {
    "item": "immersivepetroleum:paraffin_wax",
    "chance": "0.20"
  }
}).id("kubejs:lpg")

}

function heavy_oil(event) {
//重油蒸馏
event.custom({
  "type": "immersivepetroleum:distillation",
  "byproducts": [
    {
      "item": "immersivepetroleum:petcoke",
      "chance": "0.2"
    }
  ],
  "results": [
    {
      "fluid": "thermal:light_oil",
      "amount": 7
    },
    {
      "fluid": "immersivepetroleum:gasoline_additives",
      "amount": 3
    },
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 5
    }
  ],
  "input": {
    "tag": "forge:heavy_oil",
    "amount": 15
  },
  "time": 1,
  "energy": 1024
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:heavy_oil",
      "amount": 15
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 45,
  "results": [
    {
      "fluid": "thermal:light_oil",
      "amount": 7
    },
    {
      "fluid": "immersivepetroleum:gasoline_additives",
      "amount": 3
    },
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 5
    }
  ]
})
//焦煤塔精炼
event.custom({
  "type": "immersivepetroleum:coker",
  "result": {
    "item": "thermal:tar",
    "count": 1
  },
  "resultfluid": {
    "fluid": "immersivepetroleum:diesel_sulfur",
    "amount": 10
  },
  "input": {
    "count": 0,
    "base_ingredient": {
      "item": "thermal:tar"
    }
  },
  "inputfluid": {
    "tag": "forge:heavy_oil",
    "amount": 15
  },
  "time": 1,
  "energy": 400
})

////焦煤塔
//焦煤
event.custom({
  "type": "immersivepetroleum:coker",
  "result": {
    "item": "thermal:coal_coke",
    "count": 1
  },
  "resultfluid": {
    "fluid": "immersivepetroleum:diesel_sulfur",
    "amount": 10
  },
  "input": {
    "count": 1,
    "base_ingredient": {
      "tag": "forge:coal_petcoke"
    }
  },
  "inputfluid": {
    "tag": "minecraft:water",
    "amount": 100
  },
  "time": 15,
  "energy": 4000
})
event.custom({
  "type": "immersivepetroleum:coker",
  "result": {
    "item": "thermal:coal_coke",
    "count": 1
  },
  "resultfluid": {
    "fluid": "immersivepetroleum:diesel_sulfur",
    "amount": 20
  },
  "input": {
    "count": 1,
    "base_ingredient": {
      "tag": "forge:tar"
    }
  },
  "inputfluid": {
    "tag": "minecraft:water",
    "amount": 100
  },
  "time": 15,
  "energy": 4000
})
//焦油
event.custom({
  "type": "immersivepetroleum:coker",
  "result": {
    "item": "thermal:tar",
    "count": 1
  },
  "resultfluid": {
    "fluid": "immersiveengineering:creosote",
    "amount": 500
  },
  "input": {
    "count": 1,
    "base_ingredient": {
      "item": "minecraft:coal"
    }
  },
  "inputfluid": {
    "tag": "minecraft:water",
    "amount": 100
  },
  "time": 15,
  "energy": 4000
})

////煤油
event.remove({ id: PC("thermo_plant/kerosene") })
event.remove({ id: "immersivepetroleum:distillationtower/lubricant_cracking" });
event.custom({
  "type": "immersivepetroleum:distillation",
  "results": [
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 5
    },
    {
      "fluid": "immersivepetroleum:diesel_sulfur",
      "amount": 10
    }
  ],
  "input": {
    "tag": "forge:lubricant_cracked",
    "amount": 10
  },
  "time": 1,
  "energy": 1024
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:lubricant_cracked",
      "amount": 10
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 5
    },
    {
      "fluid": "immersivepetroleum:diesel_sulfur",
      "amount": 10
    }
  ]
})
//柴油转煤油
event.custom({
  "type": "immersivepetroleum:distillation",
  "results": [
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 10
    }
  ],
  "input": {
    "tag": "kubejs:diesel",
    "amount": 10
  },
  "time": 1,
  "energy": 1024
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "kubejs:diesel",
      "amount": 10
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "immersivepetroleum:kerosene",
      "amount": 10
    }
  ]
})
//精炼
event.remove({ id: "immersivepetroleum:distillationtower/kerosene" });
event.custom({
  "type": "immersivepetroleum:distillation",
  "results": [
    {
      "fluid": "thermal:light_oil",
      "amount": 7
    },
    {
      "fluid": "immersivepetroleum:gasoline_additives",
      "amount": 3
    }
  ],
  "input": {
    "tag": "kubejs:kerosene",
    "amount": 10
  },
  "time": 1,
  "energy": 1024
})
//机动蒸馏
event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "fluidTag": "forge:kerosene",
      "amount": 10
    }
  ],
  "heatRequirement": "heated",
  "processingTime": 30,
  "results": [
    {
      "fluid": "thermal:light_oil",
      "amount": 7
    },
    {
      "fluid": "immersivepetroleum:gasoline_additives",
      "amount": 3
    }
  ]
})
}

function phenolic_resin(event) {
//炼油厂
event.remove({ id: "immersiveengineering:refinery/resin" });
event.custom({
  "type": "immersiveengineering:refinery",
  "result": {
    "fluid": "immersiveengineering:phenolic_resin",
    "amount": 10
  },
  "input0": {
    "tag": "forge:acetaldehyde",
    "amount": 12
  },
  "input1": {
    "tag": "forge:creosote",
    "amount": 8
  },
  "energy": 120
})

//浇筑成型
event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
	"item": IM('mold_plate')},
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 250},
	"result": Item.of(IM("plate_duroplast")),
 	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
	"item": TC('ingot_cast')},
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 250},
	"result": Item.of(IM("plate_duroplast")),
 	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
	"item": TE('chiller_ingot_cast')},
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 250},
	"result": Item.of(IM("plate_duroplast")),
 	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
	"tag": TC('casts/single_use/ingot')},
	"cast_consumed": true,
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 250},
	"result": Item.of(IM("plate_duroplast")),
 	"cooling_time": 15
})

event.custom({
	"type": "tconstruct:casting_basin",
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 1000},
	"result": Item.of(IM("duroplast")),
 	"cooling_time": 60
})
}

function substrate(event) {
////生物质
event.remove({ id: /mekanism:crushing\/biofuel.*/ })
//流体生物质
event.recipes.createMixing([Fluid.of('kubejs:bio', 100)], ['createaddition:biomass'])
//event.recipes.createCompacting(['createaddition:biomass'], [Fluid.of('kubejs:bio', 100)])
//密封发酵加工
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
    {
		  "item": "createaddition:biomass_pellet"
		}
	],
	"results": [
		{
		  "item": "createaddition:biomass"
		}
	],
	"processingTime": 50,
	"heatRequirement": "lowheated"
})
//密封发酵生物质
event.remove({ id: "createdieselgenerators:basin_fermenting/fermentable" })
event.remove({ id: "createdieselgenerators:compat/farmers_delight//basin_fermenting/fermentable" })
event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    {
      "tag": "forge:crops"
    },
    {
      "item": "minecraft:bone_meal"
    }
  ],
  "results": [
    {
      "item": "createaddition:biomass"
    }
  ],
  "processingTime": 200,
  "heatRequirement": "lowheated"
})


///植物油
event.remove({ id: "createdieselgenerators:compacting/plant_oil" })
/*
//树油转化植物油
event.recipes.createMixing([Fluid.of('createdieselgenerators:plant_oil', 1)], [Fluid.of(TE('tree_oil'), 5)]).processingTime(5)
//树油获取
event.recipes.createMixing([
	Fluid.of(TE('tree_oil'), 100),
	Item.of(TE('rosin')).withChance(0.75)
], [Fluid.of(TE('resin'), 200)]).heated()
*/
//血魔法植物油
event.recipes.createEmptying(['minecraft:bone_meal', Fluid.of(('createdieselgenerators:plant_oil'), 150)], 'bloodmagic:plantoil')
//动力辊压植物油
event.recipes.createCompacting([Fluid.of(('createdieselgenerators:plant_oil'), 175)], [KJ("#oil_crops", 2)])
event.recipes.createCompacting([Fluid.of(('createdieselgenerators:plant_oil'), 150)], [F("#seeds", 2)])
event.recipes.createCompacting([Fluid.of(('createdieselgenerators:plant_oil'), 175)], [IM("seed", 2)])
//工业挤压植物油
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":2 },//副产物：生物质颗粒x2
    "fluid":{"fluid":"createdieselgenerators:plant_oil","amount": 100 },
    "input":{"tag":"kubejs:oil_crops"},//输入：油性农作物
    "energy": 5000
})
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":1 },//副产物：生物质颗粒
    "fluid":{"fluid":"createdieselgenerators:plant_oil","amount": 75 },
    "input":{"tag":"forge:seeds"},//输入：种子
    "energy": 5000
})
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":2 },//副产物：生物质颗粒x2
    "fluid":{"fluid":"createdieselgenerators:plant_oil","amount": 100 },
    "input":{"item":"immersiveengineering:seed"},//输入：工业大麻种子
    "energy": 5000
})
/*
//热气动加工机挤压植物油
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "tag": "kubejs:oil_crops"//输入：油性农作物
	},
	"item_output": {
	  "item": "createaddition:biomass_pellet",//副产物：生物质颗粒x6
	  "count": 6
	},
	"fluid_output": {
	  "fluid": "createdieselgenerators:plant_oil",
	  "amount": 20
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "tag": "forge:seeds"//输入：种子
	},
	"item_output": {
		"item": "createaddition:biomass_pellet",//副产物：生物质颗粒x2
		"count": 2
	  },
	"fluid_output": {
	  "fluid": "createdieselgenerators:plant_oil",
	  "amount": 20
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "item": "immersiveengineering:seed"//输入：工业大麻种子
	},
	"item_output": {
		"item": "createaddition:biomass_pellet",//副产物：生物质颗粒x4
		"count": 4
	  },
	"fluid_output": {
	  "fluid": "createdieselgenerators:plant_oil",
	  "amount": 50
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})
*/
//动力挤压生物质
event.recipes.createCompacting([Fluid.of(('createdieselgenerators:plant_oil'), 50)], [Fluid.of(('kubejs:bio'), 100)])

///乙醇
//工业发酵生物质
event.custom({
    "type":"immersiveengineering:fermenter",
    "fluid":{"fluid":"createdieselgenerators:ethanol","amount": 75},
    "input":{"item":"createaddition:biomass"},
    "energy": 3000
})
event.custom({
  "type":"immersiveengineering:fermenter",
  "fluid":{"fluid":"createdieselgenerators:ethanol","amount": 50},
  "input":{"tag":"forge:fermentable"},
  "energy": 3000
})
event.custom({
  "type":"immersiveengineering:fermenter",
  "fluid":{"fluid":"createdieselgenerators:ethanol","amount": 50},
  "input":{"tag":"createdieselgenerators:fd_fermentable"},
  "energy": 3000
})
//密封发酵
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
    {
			"amount": 25,
			"fluid": "pneumaticcraft:yeast_culture"
		},
		{
			"amount": 100,
			"fluid": "kubejs:bio"
		}
	],
	"results": [
		{
			"amount": 100,
			"fluid": "createdieselgenerators:ethanol"
		}
	],
	"processingTime": 200,
	"heatRequirement": "lowheated"
})

////酵母菌相关
////蘑菇加工
//密封发酵
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
    {
		  "tag": "forge:mushrooms"
		},
    {
			"amount": 1000,
			"fluid": "minecraft:water"
		}
	],
	"results": [
		{
			"amount": 250,
			"fluid": "pneumaticcraft:yeast_culture"
		}
	],
	"processingTime": 50,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
    {
		  "item": "thermal:sadiroot"
		},
    {
			"amount": 1000,
			"fluid": "minecraft:water"
		}
	],
	"results": [
		{
			"amount": 250,
			"fluid": "pneumaticcraft:yeast_culture"
		}
	],
	"processingTime": 50,
	"heatRequirement": "lowheated"
})
//工业挤压机挤压蘑菇
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"botania:mycelium_seeds"},//副产物：菌丝孢子
    "input":{"tag":"forge:mushrooms"},
    "energy": 3000
})

///菌丝孢子再利用
//菌丝孢子缠魂
event.recipes.createSplashing([
	Item.of(SP('ash')).withChance(0.75),
	Item.of(TE('redstone_mushroom_spores')).withChance(0.0625),
	Item.of(TE('glowstone_mushroom_spores')).withChance(0.0625),
	Item.of(TE('slime_mushroom_spores')).withChance(0.0625),
	Item.of(TE('gunpowder_mushroom_spores')).withChance(0.0625),
], BO('mycelium_seeds'))

///酵母菌再生
//发酵再生酵母菌
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
    {
		  "item": "minecraft:sugar"
		},
    {
			"amount": 50,
			"fluid": "pneumaticcraft:yeast_culture"
		},
    {
			"amount": 50,
			"fluid": "minecraft:water"
		}
	],
	"results": [
		{
			"amount": 100,
			"fluid": "pneumaticcraft:yeast_culture"
		}
	],
	"processingTime": 50,
	"heatRequirement": "lowheated"
})
//酵母面包
event.remove({ id: PC("sourdough") })
event.recipes.createFilling(PC("sourdough"), [F('#dough'), Fluid.of(PC('yeast_culture'), 125)])
event.shapeless(PC("sourdough", 8), [PC('yeast_culture_bucket'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough')])

////生物柴油
event.remove({ id: "createdieselgenerators:mixing/biodiesel" })
//机械搅拌加工
event.remove({ id: PC("sourdough") })
event.recipes.createMixing([
	Fluid.of('createdieselgenerators:biodiesel', 12),
	Item.of(PC('glycerol')).withChance(0.75)
], [
	Fluid.of('createdieselgenerators:plant_oil', 6), 
	Fluid.of('createdieselgenerators:ethanol', 6)
]).processingTime(15)
//沉浸炼油厂加工
event.custom({
	"type":"immersiveengineering:refinery",
	"result":{"fluid":"createdieselgenerators:biodiesel","amount":24},
	"catalyst":{"tag":"forge:dusts/saltpeter"},
	"input0":{"tag":"forge:plantoil","amount":12},
	"input1":{"tag":"forge:ethanol","amount":12},
	"energy": 500
})
//气动流体混合机加工
/*
event.custom({
	"type": "pneumaticcraft:fluid_mixer",
	"input1": {
	  "type": "pneumaticcraft:fluid",
	  "tag": "forge:plantoil",
	  "amount": 24
	},
	"input2": {
	  "type": "pneumaticcraft:fluid",
	  "tag": "forge:ethanol",
	  "amount": 12
	},
	"fluid_output": {
	  "fluid": "createdieselgenerators:biodiesel",
	  "amount": 12
	},
	"item_output": {
	  "item": "pneumaticcraft:glycerol"
	},
	"pressure": 2.0,
	"time": 300
})
*/

////基片
event.remove({ id: 'mekanism:reaction/substrate/water_hydrogen' })
//高压精炼
event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 100,
  "energy": 25600,
  "result": {
    "fluid": "mekanism:ethene",
    "amount": 24
  },
  "input": {
    "tag": "forge:lpg",
    "amount": 100
  },
  "secondary_input": {
    "tag": "forge:bio",
    "amount": 200
  },
  "secondary_result": {
    "item": "mekanism:substrate",
    "chance": "1.00"
  }
}).id("kubejs:substrate")
event.custom({
  "type": "immersivepetroleum:hydrotreater",
  "time": 100,
  "energy": 25600,
  "result": {
    "fluid": "mekanism:ethene",
    "amount": 24
  },
  "input": {
    "tag": "kubejs:diesel",
    "amount": 150
  },
  "secondary_input": {
    "tag": "forge:bio",
    "amount": 200
  },
  "secondary_result": {
    "item": "mekanism:substrate",
    "chance": "1.00"
  }
}).id("kubejs:substrate2")
}

function plastic(event) {
event.remove({ id: 'immersivepetroleum:hydrotreater/ethylene_plastic' })
event.remove({ id: 'immersivepetroleum:hydrotreater/propylene_plastic' })
event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_lpg' })
event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel' })
//精炼
event.custom({
  "type": "pneumaticcraft:thermo_plant",
  "item_input": {
    "item": "mekanism:substrate"
  },
  "fluid_input": {
    "type": "pneumaticcraft:fluid",
    "tag": "forge:phenolic_resin",
    "amount": 200
  },
  "fluid_output": {
    "fluid": "pneumaticcraft:plastic",
    "amount": 1000
  },
  "temperature": {
    "min_temp": 373
  },
  "exothermic": false
})
//塑料片成型
event.recipes.createCompacting(PC("plastic"), [Fluid.of(PC('plastic'), 1000)])

}

onEvent('item.tags', event => {

event.get('createdieselgenerators:fd_fermentable').add('#forge:crops/tomato')
event.get('forge:fermentable').add('#forge:crops/barley')
event.get('forge:fermentable').add('#forge:fruits/glow_berries')

})

onEvent('fluid.tags', event => {
/*
event.get('forge:kerosene').add('createindustry:kerosene')
event.get('forge:diesel').add('createindustry:diesel')
event.get('forge:crude_oil').add('createindustry:crude_oil_fluid')
*/
event.get('forge:heavy_oil').add('thermal:heavy_oil')

event.get('forge:naphtha').add('thermal:light_oil')
event.get('forge:naphtha').remove('immersivepetroleum:naphtha')

event.get('forge:ethylene').remove('immersivepetroleum:ethylene')
event.get('forge:ethylene').add('mekanism:ethene')

event.get('forge:bio').add('kubejs:bio')

//event.get('forge:diesel').add('thermal:refined_fuel')
event.get('kubejs:diesel').add('createdieselgenerators:diesel')
event.get('kubejs:kerosene').add('immersivepetroleum:kerosene')

event.get('forge:crude_oil').add('beyond_earth:oil')
event.get('forge:biodiesel').add('#forge:diesel')
    
})