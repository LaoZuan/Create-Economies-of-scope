
onEvent('recipes', event => {
	fluixMachine(event)
})

function fluixMachine(event) {

event.shaped(KJ("boot_medium"), [
	'SCA'
], {
	A: TC('cobalt_ingot'),
	C: AE2('logic_processor'),
	S: MC('iron_ingot')
})

event.remove({ output: AE2('controller') })
event.shaped(AE2('controller'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('fluix_casing'), KJ('matter_casing')],
	S: KJ('calculation_mechanism')
})	

let fluix_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'computercraft:computer_normal', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'computercraft:computer_normal', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'computercraft:computer_normal')
}

fluix_machine(AE2('condenser'), 1, AE2("fluix_pearl"))
fluix_machine(AE2('drive'), 1, AE2("engineering_processor"))
fluix_machine(AE2('formation_core'), 4, AE2("logic_processor"))
fluix_machine(AE2('annihilation_core'), 4, AE2("calculation_processor"))
fluix_machine(AE2('chest'), 1, MC('chest'))

event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, MC("redstone"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dusts/redstone'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, MC("green_dye"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dyes/green'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, AE2("engineering_processor"), F('#dusts/glowstone'))
event.replaceInput({ id: AE2("network/crafting/patterns_blank") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.recipes.thermal.smelter(AE2("fluix_crystal", 2), [AE2("#crystals/nether"), AE2("charged_certus_quartz_crystal"), MC("redstone")]).energy(4000)

}