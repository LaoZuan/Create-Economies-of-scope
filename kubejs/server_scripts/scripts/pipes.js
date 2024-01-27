onEvent('recipes', event => {
	prettierpipes(event)
})

function prettierpipes(event) {

	event.remove({ output: PP('pipe') })
	event.remove({ output: PP('blank_module') })
	event.remove({ output: 'pipez:item_pipe' })
	event.remove({ output: 'pipez:fluid_pipe' })
	event.remove({ output: 'pipez:gas_pipe' })
	event.remove({ output: 'pipez:energy_pipe' })
	event.remove({ output: 'pipez:universal_pipe' })
	
		event.shaped(PP("pipe", 8), [
			'PMP'
		], {
			P: CR('brass_sheet'),
			M: CR('brass_ingot')
		})
	
		event.shaped("8x pipez:energy_pipe", [
			'PMP'
		], {
			P: TE('invar_ingot'),
			M: MC('redstone')
		})
	
		event.shaped("8x pipez:gas_pipe", [
			'PMP'
		], {
			P: 'create_dd:steel_ingot',
			M: 'mekanism:ingot_osmium'
		})
	
		let module = (type, result) => {
			event.remove({ output: PP(result) })
			event.stonecutting(PP(result), 'kubejs:pipe_module_' + type)
		}
	
		module('utility', 'filter_increase_modifier')
		module('utility', 'tag_filter_modifier')
		module('utility', 'mod_filter_modifier')
		module('utility', 'nbt_filter_modifier')
		module('utility', 'damage_filter_modifier')
		module('utility', 'round_robin_sorting_modifier')
		module('utility', 'random_sorting_modifier')
		module('utility', 'redstone_module')
		module('utility', 'stack_size_module')
		module('utility', 'low_high_priority_module')
		module('utility', 'medium_high_priority_module')
		module('utility', 'high_high_priority_module')
		module('utility', 'low_low_priority_module')
		module('utility', 'medium_low_priority_module')
		module('utility', 'high_low_priority_module')
	
		let tiers = ['low', 'medium', 'high']
		for (var i = 0; i < tiers.length; i++) {
			let tier = 'tier_' + (i + 1)
			let prefix = tiers[i] + "_"
			module(tier, prefix + 'extraction_module')
			module(tier, prefix + 'retrieval_module')
			module(tier, prefix + 'speed_module')
			module(tier, prefix + 'filter_module')
			module(tier, prefix + 'crafting_module')
		}
	
}