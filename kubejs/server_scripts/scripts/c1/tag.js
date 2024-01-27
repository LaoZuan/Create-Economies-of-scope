onEvent('fluid.tags', event => {

event.get('forge:honey').add('kubejs:arcane_honey')
event.get('kubejs:honey').add('create:honey')
event.get('kubejs:honey').add('cofh_core:honey')
event.get('kubejs:honey').add('tconstruct:honey')

})

onEvent('item.tags', event => {

event.get('kubejs:kinetic_mechanism')
.add(KJ('kinetic_mechanism'))
.add('create_dd:inductive_mechanism')

event.get('kubejs:c1_mechanism')
.add(KJ('kinetic_mechanism'))
.add(KJ('gold_source_mechanism'))
.add(KJ('sealed_mechanism'))
.add('create_dd:inductive_mechanism')


event.get('forge:gears').add('kubejs:andesite_alloy_gear')
event.get('forge:gears').add('kubejs:wood_gear')
event.get('forge:gears').add('kubejs:arcane_gold_gear')

event.get('forge:flax_block').add('thermal:flax_block')
event.get('forge:flax_block').add('supplementaries:flax_block')

event.get('cb_microblock:tools/saw').add('kubejs:netherite_saw')
event.get('forge:saws').add('create_dd:deforester_saw')
event.get('forge:saws').add('#cb_microblock:tools/saw')
event.get('forge:deforester_saw').add('create_dd:deforester_saw')
event.get('forge:chromatic_resonators').add(KJ('chromatic_resonator'))
event.get('forge:boot_mediums').add(KJ('boot_medium'))
event.get('forge:calculators').add(KJ('calculator'))
event.get('forge:thermal_greases').add(KJ('thermal_grease'))
event.get('forge:hop_slimes').add(KJ('hop_slime'))
//event.get('forge:water_insulation').add('createindustry:water_insulation')
event.get('forge:metamorphic_lich_rods').add(KJ('metamorphic_lich_rod'))
//event.get('forge:prospector_tool').add('createindustry:prospector_tool')
event.get('forge:sewing_spool').add(KJ('sewing_spool'))

event.get('forge:mana_pearl').add(MC('ender_pearl'))
event.get('forge:mana_pearl').add(MC('ender_eye'))

})
