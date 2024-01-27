

onEvent('rei.information', (event) => {
	
	/*event.addItem('kubejs:mana_petal',
	'魔力花瓣',
	[
		'空手破坏淡蓝色神秘花',
		' ',
		'可以少量掉落'
	]
    )*/
	
	event.addItem('forbidden_arcanus:arcane_crystal_dust_speck',
	'神秘水晶粉尘',
	[
		'来自自然生产的水椰',
		' ',
		'水椰每隔三分钟就会产生该物品，可以用9个该物品来合成神秘水晶粉末'
	]
    )    

	event.addItem(
		[
			'ars_nouveau:starbuncle_shards',
			'ars_nouveau:whirlisprig_shards',
			'ars_nouveau:drygmy_shard'
		],
		'魔艺碎片',
		[
			'他们像普通的动物一样通常都生成在平原',
			' ',
			'查询破旧的笔记本获得更多信息'
		]
	)

	event.addItem('bloodmagic:weak_tau',
		'血命果',
		[
			'在简单的地牢中很难找到',
			' ',
			'可以从耕地上收获'
		]
	)

	event.addItem('bloodmagic:strong_tau',
		'饱满血命果',
		[
			'在简单的地牢中很难找到',
			' ',
			'如果血命果生长时周围有动物，它就会吸血长成饱满血命果'
		]
	)

	event.addItem(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:smart_chicken"}}'),
		'智慧鸡',
		[
			'手持书右击原版鸡，可将原版鸡转化为智慧鸡'
		]
	)

	event.addItem('#kubejs:handmade',
		'残次品',
		[
			'部分生产线配方的残次品',
			' ',
			'不具有价值，但是能回收再利用'
		]
	)

	event.addItem('cookingforblockheads:sink',
		'这便是水槽给我带来的自信',
		[
			'你说的对，但是“水槽”是由懒人厨房的功能性方块。“水槽”存在于一个叫做“ForgeModLoader”的幻象世界，在这里，被BlayTheNinth选中的人将会被赋予“单格无限水”，引导水元素之力。你将扮演一个名为“工程师”的神秘角色，在不自由的搭建自动化生产线时邂逅一层又一层的套娃配方————同时，逐步发掘“MEK反应堆”的真相'
		]
	)
})
