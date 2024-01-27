onEvent('item.registry', event => {
    
    //event.create('kubejs:incomplete_steel_facing', 'create:sequenced_assembly').texture("kubejs:item/cans/steel_facing").displayName('钢牙套（未完成）')
    event.create('study_tooth').texture("kubejs:item/cans/study_tooth").displayName('坚固牙齿')
    // 罐装食品
    event.create('iron_sheet', 'create:sequenced_assembly').texture("kubejs:item/cans/iron_sheet").displayName('薄铁板')
    event.create('tinned_iron_sheet').texture("kubejs:item/cans/tinned_iron_sheet").displayName('镀锡薄铁板')
    event.create('can_empty').texture("kubejs:item/cans/can_empty").displayName('空罐头').maxStackSize(32)

    event.create('can_sealed').texture("kubejs:item/cans/can_sealed").displayName('封装罐头')
	    .food((food) => {
	    	food.hunger(2)
	    	.meat(true)
	    	.alwaysEdible(true)
	})

    event.create('can_sealed_vegetable_soup').texture("kubejs:item/cans/can_sealed").displayName('封装蔬菜汤罐头')
	    .food((food) => {
		    food.hunger(2)
		    .meat(true)
		    .alwaysEdible(true)
	})

    event.create('can_opened_vegetable_soup').texture("kubejs:item/cans/can_opened").displayName('蔬菜汤罐头')
	    .food((food) => {
		    food.hunger(14)
		    food.saturation(4)
		    .meat(false)
		    .alwaysEdible(true)
		    .fastToEat(true)
		    .effect('farmersdelight:comfort', 240, 1, 1)
	})

})