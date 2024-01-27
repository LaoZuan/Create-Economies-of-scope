
onEvent('recipes', event => {
	arcane_core(event)
})

function arcane_core(event) {
//魔源灌注器	
event.remove({ id: ARS('imbuement_chamber') })
event.shaped(ARS('imbuement_chamber', 1), [
		' C ',
		'CBC',
		' C '
	], {
		B: FA('arcane_crystal'),
		C: KJ('gold_source_mechanism'),
})

//奥术石
event.remove({ id: ARS('arcane_stone') })
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "botania:livingrock"
  },
  "output": "ars_nouveau:arcane_stone",
  "count": 1,
  "source": 500,
  "pedestalItems": []
})
event.custom({
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "forbidden_arcanus:darkstone"
  },
  "output": "ars_nouveau:arcane_stone",
  "count": 1,
  "source": 750,
  "pedestalItems": []
})

//魔源宝石
event.custom({//神秘水晶合成
  "type": "ars_nouveau:imbuement",
  "input": {
    "tag": "forge:gems/arcane_crystal"
  },
  "output": "ars_nouveau:source_gem",
  "count": 1,
  "source": 500,
  "pedestalItems": []
})
event.custom({//神秘水晶块合成
  "type": "ars_nouveau:imbuement",
  "input": {
    "item": "forbidden_arcanus:arcane_crystal_block"
  },
  "output": "ars_nouveau:source_gem_block",
  "count": 1,
  "source": 2000,
  "pedestalItems": []
})


////奥术核心

event.remove({ id: ARS('arcane_core') })
event.shaped(ARS('arcane_core', 1), [
	'AAA',
	'PBP',
	'AAA'
], {
	P: ARS('archwood_planks'),
	B: KJ('mysterious_casing'),
	A: ARS('source_gem')
})	

let arcane_core = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), 'ars_nouveau:arcane_core', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'ars_nouveau:arcane_core', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'ars_nouveau:arcane_core')
	}

arcane_core('ars_nouveau:arcane_pedestal', 4)
arcane_core('ars_nouveau:source_jar', 1, CR('fluid_tank'))
arcane_core('ars_nouveau:enchanting_apparatus', 1, 'minecraft:bookshelf')
arcane_core('ars_nouveau:agronomic_sourcelink', 1, BO('rune_earth'))
arcane_core('ars_nouveau:relay', 1, ARS('manipulation_essence'))
arcane_core('ars_nouveau:volcanic_sourcelink', 1, BO('rune_fire'))
arcane_core('ars_nouveau:basic_spell_turret', 1, BO('rune_air'))
arcane_core('ars_nouveau:alchemical_sourcelink', 1, ARS('abjuration_essence'))
arcane_core('ars_nouveau:vitalic_sourcelink', 1, ARS('conjuration_essence'))
arcane_core('ars_nouveau:mycelial_sourcelink', 1, BO('mycelium_seeds'))

}