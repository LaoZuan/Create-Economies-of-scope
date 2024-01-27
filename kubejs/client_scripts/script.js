onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('jei.remove.categories', event => {
	event.remove("twilightforest:uncrafting")
})

onEvent('rei.add.items', event => {
    event.add(Item.of('create:refined_radiance'));
    event.add(Item.of('create:shadow_steel'));
    event.add(Item.of('create:chromatic_compound'));
    event.add('thermal:ruby')
	  event.add('thermal:ruby_dust')
	  event.add('thermal:ruby_ore')
	  event.add('thermal:apatite_ore')
	  event.add('thermal:sapphire')
	  event.add('thermal:sapphire_dust')
	  event.add('thermal:sapphire_ore')
  })

  onEvent('jei.hide.items', event => {
    event.hide('appliedenergistics2:facade')
    event.hide(`#buddycards:cards`)
    event.hide(`#buddycards:gummy_cards`)
  })