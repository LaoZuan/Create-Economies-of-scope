
onEvent('recipes', event => {
	obsidianMachine(event)
})

function obsidianMachine(event) {
event.shaped(KJ("obsidian_machine"), [
	"SSS",
	"SCS",
	"SSS"
], {
	C: CR("railway_casing"),
	S: KJ("sturdy_mechanism")
})

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 4)),
		Ingredient.of(CR('railway_casing')),
	],
	result: [
		Item.of(KJ('obsidian_machine'))
	],
	energy: 1000
})

let transitional = "kubejs:incomplete_sturdy_mechanism"
event.recipes.createSequencedAssembly([
	"kubejs:sturdy_mechanism",
], CR('precision_mechanism'), [
	event.recipes.createDeploying(transitional, [transitional, CR("sturdy_sheet")]),
	event.recipes.createDeploying(transitional, [transitional, CR("sturdy_sheet")]),
	//event.recipes.createDeploying(transitional, [transitional, KJ("density_detector")]),
	event.recipes.createPressing(transitional, transitional)
]).transitionalItem(transitional)
	.loops(1)
	.id("kubejs:sturdy_mechanism")

let obsidian_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), "kubejs:obsidian_machine", other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:obsidian_machine", B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), "kubejs:obsidian_machine")
	}
obsidian_machine(CR("track_station"), 1, MC("compass"))
obsidian_machine(CR("track_signal"), 1, CR("electron_tube"))
obsidian_machine(CR("track_observer"), 1, MC("observer"))
obsidian_machine(CR("controls"), 1, MC("lever"))
obsidian_machine("toms_storage:ts.storage_terminal", 1, ("create_sa:vault_component"))
}