onEvent('fluid.tags', event => {

event.get('forge:redstone')
.add('thermal:redstone')

})

onEvent('item.tags', event => {

event.get('kubejs:c2_mechanism')
.add(CR('precision_mechanism'))
.add(KJ('infernal_mechanism'))
.add(KJ('sturdy_mechanism'))
.add(KJ('metamorphic_mechanism'))

event.get('kubejs:stone_alloy')
.add(CR('andesite_alloy'))
.add(KJ('diorite_alloy'))
.add(KJ('granite_alloy'))

event.get('create:upright_on_belt')
.add(FA('soul'))
.add(FA('dark_soul'))

event.get('kubejs:soul_extractor')
.add(FA('soul_extractor'))

event.get('forge:screwdrivers')
.add(PR_C('screwdriver'))
//.add(IM('screwdriver'))
//.add('supercircuitmaker:screwdriver')

event.get('forge:fruits/melon')
.add(TE('frost_melon_slice'))

})
