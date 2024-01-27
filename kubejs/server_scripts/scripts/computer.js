
onEvent('recipes', event => {
	computercraft(event)
})

function computercraft(event) {

event.remove({ id: "computercraft:turtle_advanced" })
event.remove({ id: "computercraft:turtle_advanced_upgrade" })
event.remove({ id: "computercraft:turtle_normal" })

//海龟
event.smithing("computercraft:turtle_normal", "computercraft:computer_normal", TE("invar_gear"))
event.smithing("computercraft:turtle_advanced", "computercraft:computer_advanced", TE("invar_gear"))
event.recipes.createMechanicalCrafting("computercraft:turtle_normal", "AB", { A: "computercraft:computer_normal", B: TE("invar_gear") })
event.recipes.createMechanicalCrafting("computercraft:turtle_advanced", "AB", { A: "computercraft:computer_advanced", B: TE("invar_gear") })
event.shaped("computercraft:turtle_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:turtle_normal",
	S: TE('netherite_plate')
})


event.remove({ id: "computercraft:computer_normal" })
event.remove({ id: "computercraft:computer_advanced" })
event.remove({ id: "computercraft:computer_advanced_upgrade" })
event.remove({ id: "computercraft:pocket_computer_normal" })
event.remove({ id: "computercraft:pocket_computer_advanced" })
event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" })

//电脑
event.shaped("computercraft:computer_normal", [
	'SSS',
	'SMS',
	'S S'
], {
	M: KJ('electric_machine'),
	S: 'create_dd:lapis_sheet'
})
event.shaped("computercraft:computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:computer_normal",
	S: TE('netherite_plate')
})
event.shaped("computercraft:computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: KJ('electric_machine'),
	S: TE('netherite_plate')
})
//掌上电脑
event.shaped("computercraft:pocket_computer_normal", [
	'SSS',
	'SMS',
	'SAS'
], {
	M: KJ('electric_machine'),
	S: 'create_dd:lapis_sheet',
	A: MC('golden_apple'),
})
event.shaped("computercraft:pocket_computer_advanced", [
	'SSS',
	'SMS',
	'S S'
], {
	M: "computercraft:pocket_computer_normal",
	S: TE('netherite_plate')
})
event.shaped("computercraft:pocket_computer_advanced", [
	'SSS',
	'SMS',
	'SAS'
], {
	M: KJ('electric_machine'),
	S: TE('netherite_plate'),
	A: MC('golden_apple'),
})




}