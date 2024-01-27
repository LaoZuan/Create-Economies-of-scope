
onEvent('recipes', event => {
    inductiveMachine(event)
})

function inductiveMachine(event) {

event.shaped(KJ('inductive_machine'), [
	'SSS',
	'SCS',
	'SSS'
	], {
		C: CR('andesite_casing'),
		S: 'create_dd:inductive_mechanism',
	})
event.shaped(KJ('inductive_machine'), [
	'SBS',
	'BCB',
	'SBS'
	], {
		C: CR('andesite_casing'),
		S: KJ('kinetic_mechanism'),
		B: 'create_dd:inductive_mechanism',
})

event.remove({ output: 'create_dd:kinetic_motor' })

let inductive_machine = (id, amount, other_ingredient) => {
			//event.remove({ output: id })
			if (other_ingredient) {
				event.smithing(Item.of(id, amount), 'kubejs:inductive_machine', other_ingredient)
				event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:inductive_machine', B: other_ingredient })
			}
			else
				event.stonecutting(Item.of(id, amount), 'kubejs:inductive_machine')
		}

inductive_machine('create:encased_chain_drive', 6)
inductive_machine('create:gearbox', 8)
inductive_machine('create:vertical_gearbox', 8)
inductive_machine('create_dd:kinetic_motor', 2)
inductive_machine('create_dd:deforester_saw', 1, CR('mechanical_saw'))
}