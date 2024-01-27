onEvent('recipes', event => {
	platesproduction(event)
	canproduction(event)
	canopentoeat(event)
	steelfacing(event)
})

function platesproduction(event) {
	/*
	onEvent('recipes', event => {
		//铁板辊压2次获得4张薄铁板
		event.recipes.createSequencedAssembly('4x kubejs:iron_thin_plate', '#forge:plates/iron', [
			event.recipes.createPressing('kubejs:iron_thin_plate', 'kubejs:iron_thin_plate')
		]).transitionalItem('kubejs:iron_thin_plate')
  			.loops(2)  //循环2次
  			.id('kubejs:iron_thin_plate')
	})

	onEvent('recipes', event => {
		//制造镀锡薄铁板
		event.recipes.createFilling('kubejs:iron_thin_plate_with_tin', [
			'kubejs:iron_thin_plate',
		Fluid.of('tconstruct:molten_tin', 10)
 	])
	})
	*/
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "create:iron_sheet" // 输入铁板
		},
		"transitionalItem": {
		  "item": "kubejs:tinned_iron_sheet"
		},
		"sequence": [
		  {
			"type": "create:filling",
			"ingredients": [
			  {
				"item": "kubejs:tinned_iron_sheet"
			  },
			  {
				"fluid": "tconstruct:molten_tin",
				"nbt": {},
				"amount": 45 // 45ml熔融锡
			  }
			],
			"results": [
			  {
				"item": "kubejs:tinned_iron_sheet"
			  }
			]
		  },
		  {
			"type": "createaddition:rolling", // 轧制
			"ingredients": [
			  {
				"item": "kubejs:tinned_iron_sheet"
			  }
			],
			"results": [
			  {
				"item": "kubejs:tinned_iron_sheet"
			  }
			]
		  }
		],
		"results": [
		  {
			"item": "kubejs:tinned_iron_sheet"
		  }
		],
		"loops": 1
	  })
}

function canproduction(event) {
	onEvent('recipes', event => {
		//制作罐头
		event.recipes.createDeploying('kubejs:can_empty', ['kubejs:tinned_iron_sheet', 'minecraft:iron_block']).keepIngredient('minecraft:iron_block')

	onEvent('recipes', event => {
		//封罐头
		event.recipes.createDeploying('kubejs:can_sealed', ['kubejs:can_empty', 'kubejs:tinned_iron_sheet'])
	})})
	}

function canopentoeat(event) {
	onEvent('recipes', event => {
		event.shapeless('kubejs:can_empty', ['kubejs:can_sealed', '#forge:wirecutters'])
	})
}

function steelfacing(event) {
		//钢牙套
		/*
		event.recipes.createSequencedAssembly([
			//成品：
			Item.of('kubejs:steel_facing')],
   			//输入物品：
   			'#forge:bones', 
   			[
	 		event.recipes.createDeploying('kubejs:incomplete_steel_facing', ['kubejs:incomplete_steel_facing', 'create:sturdy_sheet']),//第一步
			event.recipes.createDeploying('kubejs:incomplete_steel_facing', ['kubejs:incomplete_steel_facing', '#forge:wires/copper']),//第二步
			event.recipes.createDeploying('kubejs:incomplete_steel_facing', ['kubejs:incomplete_steel_facing', 'create:sturdy_sheet']),//第三步
		]).transitionalItem('kubejs:incomplete_steel_facing').loops(2)
		*/
		event.smithing('kubejs:study_tooth', 'alexsmobs:cachalot_whale_tooth', 'create:sturdy_sheet')
		event.smithing('kubejs:study_tooth', 'alexsmobs:bone_serpent_tooth', 'create:sturdy_sheet')
		event.smithing('kubejs:study_tooth', 'alexsmobs:shark_tooth', 'create:sturdy_sheet')

}