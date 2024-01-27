
onEvent('recipes', event => {
	ammunition(event)//弹药
	firearm(event)//火器
	accessories(event)//配件
})

function ammunition(event) {
event.remove({ mod: ('cgm') })
event.remove({ id: 'createindustry:stonecutting/rebar' })
event.remove({ output: IM('empty_casing') })
event.shaped('cgm:workbench', [
	'SSS',
	'B B',
	'B B'
], {
	S: F('#treated_wood'),
	B: 'create_dd:industrial_iron_ingot'
})

event.remove({ output: 'createbigcannons:shot_balls' })//霰弹丸
event.shapeless('2x createbigcannons:shot_balls', [
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')], 
	[MC('iron_nugget'), TE('nickel_nugget'), CR('zinc_nugget'), TE('lead_nugget')],
])

//压缩气瓶
/*
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"tag": "forge:plates/copper"
	  }
	],
	"pressure": -0.5,
	"results": [
	  {
		"item": "kubejs:compressed_air_canister"
	  }
	]
})
*/

event.remove({ output: 'createbigcannons:packed_gunpowder' })//包装火药
event.recipes.createCompacting('createbigcannons:packed_gunpowder', [MC('gunpowder'), MC('gunpowder')])

//包装弹药
event.remove({ output: 'musketmod:cartridge' })
event.shapeless('3x musketmod:cartridge', ['createbigcannons:shot_balls', MC('paper'), MC('gunpowder')])


////弹药制造
//霰弹壳
event.remove({ output: IM('empty_shell') })
event.remove({ output: 'alloyedguns:empty_shell' })
event.shaped(IM('empty_shell', 1), [
	'PL',
], {
	P: [KJ('treated_kelp'), MC('dried_kelp')],
	L: 'immersiveengineering:empty_casing'
})	
event.shaped(IM('empty_shell', 1), [
	'LP',
], {
	P: [KJ('treated_kelp'), MC('dried_kelp')],
	L: 'immersiveengineering:empty_casing'
})	
event.shaped(IM('empty_shell', 1), [
	'P',
	'L',
], {
	P: [KJ('treated_kelp'), MC('dried_kelp')],
	L: 'immersiveengineering:empty_casing'
})	
event.shaped(IM('empty_shell', 1), [
	'L',
	'P',
], {
	P: [KJ('treated_kelp'), MC('dried_kelp')],
	L: 'immersiveengineering:empty_casing'
})	
//霰弹
event.remove({ id: IM('blueprint/bullet_buckshot') })
//event.remove({ output: 'alloyedguns:shell' })
let ammo1 = 'kubejs:incomplete_shell'
	event.recipes.createSequencedAssembly([
		'cgm:shell',
	], IM('empty_shell'), [
		event.recipes.createDeploying(ammo1, [ammo1, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(ammo1, [ammo1, 'createbigcannons:shot_balls']),
		event.recipes.createPressing(ammo1, ammo1)
	]).transitionalItem(ammo1)
		.loops(1)
		.id('kubejs:shell')
event.shapeless(IM('buckshot'), ['cgm:shell', F('#dyes/red')])

//大型空弹壳
//event.remove({ output: 'alloyedguns:advanced_bullet_casing' })
let bc = 'immersiveengineering:empty_casing'
	event.recipes.createSequencedAssembly([
		'kubejs:advanced_bullet_casing',
	], 'immersiveengineering:empty_casing', [
		event.recipes.createDeploying(bc, [bc, 'immersiveengineering:empty_casing']),
		event.recipes.createPressing(bc, bc)
	]).transitionalItem(bc)
		.loops(1)
		.id('kubejs:advanced_bullet_casing')

//小型空弹壳
let bc2 = 'create:brass_sheet'
	event.recipes.createSequencedAssembly([
		'immersiveengineering:empty_casing',
	], 'create:brass_sheet', [
		event.recipes.createDeploying(bc2, [bc2, 'supercircuitmaker:tiny_redstone'])
	]).transitionalItem(bc2)
		.loops(1)
		.id('kubejs:basic_bullet_casing')

//复合空弹壳
let bc3 = 'kubejs:advanced_bullet_casing'
	event.recipes.createSequencedAssembly([
		'kubejs:complex_bullet_casing',
	], 'kubejs:advanced_bullet_casing', [
		event.recipes.createDeploying(bc3, [bc3, 'create:sturdy_sheet']),
		event.recipes.createPressing(bc3, bc3)
	]).transitionalItem(bc3)
		.loops(2)
		.id('kubejs:complex_bullet_casing')

//高级弹药
event.remove({ output: 'cgm:advanced_bullet' })
let ammo2 = 'kubejs:incomplete_advanced_bullet'
	event.recipes.createSequencedAssembly([
		'cgm:advanced_bullet',
	], 'kubejs:advanced_bullet_casing', [
		event.recipes.createDeploying(ammo2, [ammo2, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(ammo2, [ammo2, F('#nuggets/constantan')]),
		event.recipes.createPressing(ammo2, ammo2)
	]).transitionalItem(ammo2)
		.loops(1)
		.id('kubejs:advanced_bullet')

//初级弹药
//event.remove({ output: 'alloyedguns:basic_bullet' })
let ammo3 = 'kubejs:incomplete_basic_bullet'
	event.recipes.createSequencedAssembly([
		'cgm:basic_bullet',
	], 'immersiveengineering:empty_casing', [
		event.recipes.createDeploying(ammo3, [ammo3, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(ammo3, [ammo3, CR('zinc_nugget')]),
		event.recipes.createPressing(ammo3, ammo3)
	]).transitionalItem(ammo3)
		.loops(1)
		.id('kubejs:basic_bullet')

//复合弹药
//event.remove({ output: 'alloyedguns:complex_bullet' })
let ammo4 = 'kubejs:incomplete_complex_bullet'
	event.recipes.createSequencedAssembly([
		'kubejs:complex_bullet',
	], 'kubejs:complex_bullet_casing', [
		event.recipes.createDeploying(ammo4, [ammo4, 'createbigcannons:packed_gunpowder']),
		event.recipes.createDeploying(ammo4, [ammo4, F('#nuggets/steel')]),
		event.recipes.createDeploying(ammo4, [ammo4, F('#nuggets/steel')]),
		event.recipes.createPressing(ammo4, ammo4)
	]).transitionalItem(ammo4)
		.loops(1)
		.id('kubejs:complex_bullet')

//导弹
//event.remove({ output: 'alloyedguns:missile' })
let ammo5 = 'kubejs:unarmed_missile'
	event.recipes.createSequencedAssembly([
		'cgm:missile',
	], 'pneumaticcraft:air_canister', [
		event.recipes.createDeploying(ammo5, [ammo5, AE2('tiny_tnt')]),
		event.recipes.createPressing(ammo5, ammo5)
	]).transitionalItem(ammo5)
		.loops(1)
		.id('kubejs:missile')

/*
event.shaped(PC('micromissiles', 1), [//微型导弹
	'LPA',
], {
	P: 'cgm:missile',
	L: MEK('basic_control_circuit'),
	A: PC('plastic'),
})	
*/

//手榴弹
let g = 'minecraft:glass_bottle'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:grenade', 2),
	], 'minecraft:glass_bottle', [
		event.recipes.createDeploying(g, [g, '#forge:gunpowder']),
		event.recipes.createDeploying(g, [g, '#forge:nuggets/steel']),
		event.recipes.createDeploying(g, [g, 'supercircuitmaker:tiny_redstone']),
	]).transitionalItem(g)
		.loops(1)
		.id('kubejs:grenade')

//闪光弹
let g1 = 'minecraft:glass_bottle'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:stun_grenade', 2),
	], 'minecraft:glass_bottle', [
		event.recipes.createDeploying(g1, [g1, ['#forge:dusts/glowstone', 'thermal:lumium_dust']]),
		event.recipes.createDeploying(g1, [g1, '#forge:nuggets/steel']),
		event.recipes.createDeploying(g1, [g1, 'supercircuitmaker:tiny_redstone']),
	]).transitionalItem(g1)
		.loops(1)
		.id('kubejs:stun_grenade')
}

function firearm(event) {
//手枪
event.shaped(Item.of('cgm:pistol', '{AmmoCount:0}'), [
	' PA',
	' CL',
	'B  ',
], {
	P: IM('gunpart_hammer'),
	L: IM('component_iron'),
	A: IM('wooden_grip'),
	B: IM('gunpart_barrel'),
	C: IM('gunpart_drum'),
})	

//霰弹枪
event.recipes.createMechanicalCrafting(Item.of('cgm:shotgun', '{AmmoCount:0}'), [
	' PA',
	'BLP',
	' B '
], {
	P: IM('gunpart_hammer'),
	L: IM('component_steel'),
	A: IM('wooden_grip'),
	B: IM('gunpart_barrel')
})	

//榴弹发射器
event.recipes.createMechanicalCrafting(Item.of('cgm:grenade_launcher', '{AmmoCount:0}'), [
	' PA',
	' BL',
	'B  '
], {
	P: IM('gunpart_hammer'),
	L: IM('component_steel'),
	A: IM('wooden_grip'),
	B: CR('chute')
})	

//巴祖卡
event.recipes.createMechanicalCrafting(Item.of('cgm:bazooka', '{AmmoCount:0}'), [
    "  A  ",
    "SJJJS",
    " RCV "
], {
	R: 'create_dd:steel_ingot',
	S: CR('smart_chute'),
	C: KJ('inductive_mechanism'),
	V: IM('gunpart_hammer'),
	A: 'cgm:short_scope',
	J: CR('chute')
})	

//突击步枪
/*
event.recipes.botania.runic_altar(Item.of('cgm:assault_rifle', '{AmmoCount:0,CustomModelData:1}'), [
	'immersiveengineering:gunpart_barrel', 
	'createindustry:screw', 
	'createbigcannons:recoil_spring', 
	'createbigcannons:quickfiring_mechanism', 
	'cgm:pistol'
], 10000)
*/
let ar = 'cgm:pistol'
	event.recipes.createSequencedAssembly([
		Item.of('cgm:assault_rifle', '{AmmoCount:0'),
	], 'cgm:pistol', [
		event.recipes.createDeploying(ar, [ar, IM('gunpart_barrel')]),
		event.recipes.createDeploying(ar, [ar, 'createbigcannons:recoil_spring']),
		event.recipes.createDeploying(ar, [ar, 'createbigcannons:quickfiring_mechanism']),
		event.recipes.createDeploying(ar, [ar, '#forge:screwdrivers']),
	]).transitionalItem(ar)
		.loops(1)
		.id('kubejs:pistol')

//机枪
event.recipes.createMechanicalCrafting(Item.of('cgm:mini_gun', '{AmmoCount:0}'), [
    "AVCRR",
    " JSRR"
  ], {
	R: 'cgm:assault_rifle',
	S: CR('mechanical_bearing'),
	C: 'create_dd:steel_casing',
	V: 'createbigcannons:recoil_spring',
	A: 'thermal:machine_frame',
	J: CR('copper_backtank')
})

//重型步枪
event.recipes.createMechanicalCrafting(Item.of('cgm:heavy_rifle', '{AmmoCount:0}'), [
    "    SS   ",
    "LRRRRRRRR",
    "L CVLLA L"
  ], {
	R: IM('gunpart_barrel'),
	S: 'create_dd:steel_ingot',
	C: 'create_dd:steel_casing',
	V: 'cgm:pistol',
	A: KJ('shadow_steel_rod'),
	L: IM('component_steel')
})

//射钉枪
event.custom({
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:reinforcement_plating",
      "count": 4
    },
	{
      "item": "kubejs:sealed_mechanism",
      "count": 2
    },
	{
      "item": "createdieselgenerators:kelp_handle",
      "count": 2
    },
	{
      "item": "pneumaticcraft:pneumatic_cylinder",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:machine_pistol",
    "count": 1
  }
})

//传动杆步枪
event.custom({
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:reinforcement_plating",
      "count": 7
    },
	{
      "item": "kubejs:sealed_mechanism",
      "count": 4
    },
	{
      "item": "projectred_core:motor",
      "count": 1
    },
	{
      "item": "createdieselgenerators:kelp_handle",
      "count": 2
    },
	{
      "item": "pneumaticcraft:pneumatic_cylinder",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:rifle",
    "count": 1
  }
})
}

function accessories(event) {
//瞄具
event.stonecutting('cgm:short_scope', MC("spyglass"))
event.custom({//近程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:short_scope",
    "count": 1
  }
})
event.stonecutting('cgm:medium_scope', MC("spyglass"))
event.custom({//中程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:medium_scope",
    "count": 1
  }
})
event.stonecutting('cgm:long_scope', MC("spyglass"))
event.custom({//远程
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "minecraft:spyglass",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:long_scope",
    "count": 1
  }
})

//枪托
event.custom({//重型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:industrial_iron_sheet",
      "count": 1
    },
    {
      "tag": "forge:treated_wood",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:weighted_stock",
    "count": 1
  }
})
event.custom({//战术
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:industrial_iron_sheet",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:tactical_stock",
    "count": 1
  }
})
event.custom({//轻型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:industrial_iron_sheet",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:light_stock",
    "count": 1
  }
})

//握把
event.custom({//轻型
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:industrial_iron_ingot",
      "count": 2
    }
  ],
  "result": {
    "item": "cgm:light_grip",
    "count": 1
  }
})
event.custom({//特种
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "create_dd:industrial_iron_ingot",
      "count": 1
    },
	{
      "item": "thermal:cured_rubber",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:specialised_grip",
    "count": 1
  }
})

//消音器
event.custom({
  "type": "cgm:workbench",
  "materials": [
    {
      "item": "immersiveengineering:gunpart_barrel",
      "count": 1
    },
	{
      "item": "minecraft:sponge",
      "count": 1
    }
  ],
  "result": {
    "item": "cgm:silencer",
    "count": 1
  }
})

}