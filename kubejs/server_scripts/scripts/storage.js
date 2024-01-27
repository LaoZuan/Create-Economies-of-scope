onEvent('recipes', event => {
	tomsstorage(event)
	drawersop(event)
	//functionalstorage(event)
})

function tomsstorage(event) {
event.remove({ output: 'toms_storage:ts.wireless_terminal' })
event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' })
	
event.replaceInput({ id: "toms_storage:inventory_connector" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:trim" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_proxy" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_cable_connector" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:inventory_hopper_basic" }, MC("#planks"), CR("brass_ingot"))
event.replaceInput({ id: "toms_storage:level_emitter" }, MC("#planks"), CR("brass_ingot"))
}

function drawersop(event) {
	let drawer_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson']
	let drawer_sizes = ['1', '2', '4']
	event.replaceInput({ id: SD('compacting_drawers_3') }, MC('iron_ingot'), CR('zinc_ingot'))
	event.remove({ output: SD("upgrade_template") })

	drawer_types.forEach(e => {

		let trim = SD(`${e}_trim`)
		let plank = MC(`${e}_planks`)
		event.remove({ id: trim })
		event.shaped(Item.of(trim, 4), [
			'SSS',
			'PMP',
			'SSS'
		], {
			P: CR('zinc_ingot'),
			M: '#forge:chests/wooden',
			S: plank
		})

		event.stonecutting(SD("upgrade_template"), trim)

		drawer_sizes.forEach(size => {
			let full = SD(`${e}_full_drawers_${size}`)
			let half = SD(`${e}_half_drawers_${size}`)
			//let functionalstorage = (`functionalstorage:${e}_${size}`)
			event.remove({ id: full })
			event.remove({ id: half })
			//event.remove({ output: functionalstorage })
			event.stonecutting(full, trim)
			event.stonecutting(Item.of(half, 2), trim)
			//event.stonecutting(functionalstorage, trim)
			event.smithing('kubejs:osmium_drawersop', trim, MEK("ingot_osmium"))
			//event.stonecutting(functionalstorage, 'kubejs:osmium_drawersop')
		})
	})

}

//function functionalstorage(event) {
//switchCraft(event, 'functionalstorage:void_upgrade', 'storagedrawers:void_upgrade')
//}