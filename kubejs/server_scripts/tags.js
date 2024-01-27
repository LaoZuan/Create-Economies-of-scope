onEvent('item.tags', event => {
global.trades.forEach(element => {
		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
	});

global.professions.forEach(element => {
		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
	});

//钢笔标记物品
event.get('minecraft:wooden_slabs')
.add('kubejs:pen_regis_1M0A')
.add('kubejs:pen_regis_1M1A')
.add('kubejs:pen_regis_1M2A')
.add('kubejs:pen_regis_1M3A')
.add('kubejs:pen_regis_1M4A')

//罐中物品
event.get('supplementaries:cookies')
.add('create_confectionery:full_chocolate_bar')
.add('create_confectionery:full_black_chocolate_bar')
.add('create_confectionery:full_white_chocolate_bar')
.add('create_confectionery:full_ruby_chocolate_bar')
.add('botania:mana_cookie')
.add('cookielicious:vanilla_cookie')
.add('cookielicious:chocolate_cookie')
.add('cookielicious:strawberry_cookie')
.add('cookielicious:banana_cookie')
.add('cookielicious:mint_cookie')
.add('cookielicious:adzuki_cookie')
.add('endersdelight:uncanny_cookies')
.add('farmersdelight:sweet_berry_cookie')
.add('farmersdelight:honey_cookie')
.add('twilightdelight:torchberry_cookie')
//.add('botania:gaia_head')

//为高贵的石磨献上手磨的美
event.get('forge:tools/knives').add('create:millstone')

event.get('kubejs:certus_quartz_crystal').add('ae2:certus_quartz_crystal')

event.get('ae2:quantum_entangled_singularity').add('ae2:quantum_entangled_singularity')

event.get('minecraft:coals').add('thermal:coal_coke')

event.get('ars_nouveau:stripped_wood').add('ars_nouveau:stripped_purple_archwood_wood')
event.get('ars_nouveau:stripped_wood').add('ars_nouveau:stripped_red_archwood_wood')
event.get('ars_nouveau:stripped_wood').add('ars_nouveau:stripped_green_archwood_wood')
event.get('ars_nouveau:stripped_wood').add('ars_nouveau:stripped_blue_archwood_wood')

event.get('ars_nouveau:stripped_log').add('ars_nouveau:stripped_purple_archwood_log')
event.get('ars_nouveau:stripped_log').add('ars_nouveau:stripped_red_archwood_log')
event.get('ars_nouveau:stripped_log').add('ars_nouveau:stripped_green_archwood_log')
event.get('ars_nouveau:stripped_log').add('ars_nouveau:stripped_blue_archwood_log')


event.get('chipped:vine').add('biomesoplenty:willow_vine')
event.get('chipped:vine').add('expcaves:cave_vine_end')

event.get('thermal:crafting/dies').add('#forge:trade_cards')
event.get('thermal:crafting/dies').add('#forge:profession_cards')
event.get('thermal:crafting/dies').add('kubejs:press_rod_die')

event.get('create:upright_on_belt')
		.add(AE2("red_paint_ball"))
		.add(AE2("yellow_paint_ball"))
		.add(AE2("green_paint_ball"))
		.add(AE2("blue_paint_ball"))
		.add(AE2("magenta_paint_ball"))
		.add(AE2("black_paint_ball"))

event.get('tconstruct:anvil_metal').add(CR('zinc_block'))

event.get('forge:dusts/brass').add(KJ('brass_dust'))
event.get('forge:dusts/zinc').add(KJ('zinc_dust'))
event.get('forge:dusts/cobalt').add(KJ('cobalt_dust'))
event.get('forge:wires/zinc').add('kubejs:zinc_wire')

event.get('forge:wires/nickel').add('kubejs:nickel_wire')

event.get('forge:rods/refined_radiance').add('kubejs:radiant_rod')
//event.get('forge:wires/refined_radiance').add('kubejs:radiant_wire')
//event.get('forge:plates/refined_radiance').add('kubejs:radiant_sheet')
event.get('forge:rods/shadow_steel').add('kubejs:shadow_steel_rod')

event.get('forge:plates/compressed_iron').add('kubejs:iron_compressed_sheet')

event.get('forge:fuels/bio').add('createaddition:biomass')

event.get('kubejs:insulating_glass').add('immersiveengineering:insulating_glass')
event.get('kubejs:insulating_glass').add('immersiveengineering:slag_glass')

event.get('kubejs:archwood').add('#forge:logs/archwood')

event.get('ae2:all_certus_quartz').add('kubejs:purified_certus_quartz_crystal')
event.get('ae2:all_nether_quartz').add('kubejs:purified_nether_quartz_crystal')
event.get('forge:gems/quartz').add('kubejs:purified_nether_quartz_crystal')
event.get('forge:gems/certus_quartz').add('kubejs:purified_certus_quartz_crystal')

/*
event.get('forge:raw_ores/tungsten').add('stalwart_dungeons:raw_tungsten')
event.get('forge:raw_materials/tungsten').add('stalwart_dungeons:raw_tungsten')
event.get('forge:ingots/tungsten').add('stalwart_dungeons:tungsten_ingot')
*/

event.get('forge:ingots/black_chocolate').add('create_confectionery:bar_of_black_chocolate')
event.get('forge:ingots/white_chocolate').add('create_confectionery:bar_of_white_chocolate')

event.get('forge:ingots/platinum').add('buddycards:buddysteel_ingot')
event.get('forge:nuggets/platinum').add('buddycards:buddysteel_nugget')

event.get('forge:circuit_press').add('ae2:calculation_processor_press')
event.get('forge:circuit_press').add('ae2:engineering_processor_press')
event.get('forge:circuit_press').add('ae2:logic_processor_press')
event.get('forge:circuit_press').add('ae2:silicon_press')

event.get('thermal:crafting/dies').add('kubejs:calculator')

event.get('forge:plates/arcane_gold').add('kubejs:arcane_golden_sheet')

//event.get('forge:rods/steel').add('createindustry:rebar')

event.get('immersive_weathering:bark').add('farmersdelight:tree_bark')

event.get('forge:rods/wooden').add('forbidden_arcanus:edelwood_stick')
event.get('forge:rods/wooden').add('botania:livingwood_twig')
event.get('forge:rods/wooden').add('botania:dreamwood_twig')

event.get('twilightforest:liveroot').add('botania:living_root')
event.get('twilightforest:liveroot').add('twilightforest:liveroot')
event.get('twilightforest:raw_iron').add('minecraft:raw_iron')
event.get('twilightforest:raw_iron').add('create:crushed_raw_iron')

event.get('twilightforest:slabs').add('twilightforest:twilight_oak_slab')
event.get('twilightforest:slabs').add('twilightforest:mangrove_slab')
event.get('twilightforest:slabs').add('twilightforest:dark_slab')
event.get('twilightforest:slabs').add('twilightforest:time_slab')
event.get('twilightforest:slabs').add('twilightforest:transformation_slab')
event.get('twilightforest:slabs').add('twilightforest:mining_slab')
event.get('twilightforest:slabs').add('twilightforest:sorting_slab')

event.get('kubejs:metamorphic_stones').add('botania:metamorphic_desert_stone')
event.get('kubejs:metamorphic_stones').add('botania:metamorphic_plains_stone')
event.get('kubejs:metamorphic_stones').add('botania:metamorphic_forest_stone')
event.get('kubejs:metamorphic_stones').add('botania:metamorphic_fungal_stone')
event.get('kubejs:metamorphic_stones').add('botania:metamorphic_taiga_stone')
event.get('kubejs:metamorphic_stones').add('botania:metamorphic_mesa_stone')

event.get('kubejs:scepters').add('twilightforest:twilight_scepter')
event.get('kubejs:scepters').add('twilightforest:lifedrain_scepter')
event.get('kubejs:scepters').add('twilightforest:zombie_scepter')
event.get('kubejs:scepters').add('twilightforest:fortification_scepter')

event.get('forge:tea_leaves/green').add('thermal:tea')
event.get('forge:seeds').remove('immersiveengineering:seed')
event.get('kubejs:oil_crops').add('#forge:crops/corn')
event.get('kubejs:oil_crops').add('#forge:crops/peanut')
event.get('kubejs:oil_crops').add('minecraft:sunflower')
event.get('kubejs:oil_crops').add('#forge:crops/flax')
event.get('kubejs:oil_crops').add('#farmersrespite:tea_leaves')
event.get('kubejs:oil_crops').add('biomesoplenty:palm_sapling')
event.get('kubejs:oil_crops').add('biomesoplenty:palm_sapling')

event.get('createbigcannons:sheet_steel').add('create_dd:steel_sheet')

event.get('forge:ingots/cast_iron').add('#forge:ingots/industrial_iron')
event.get('forge:plates/cast_iron').add('#forge:plates/industrial_iron')
event.get('forge:nuggets/cast_iron').add('#forge:nuggets/industrial_iron')
event.get('forge:storage_blocks/industrial_iron').add('create:industrial_iron_block')
event.get('forge:storage_blocks/cast_iron').add('#forge:storage_blocks/industrial_iron')

event.get('forge:ingots/cast_iron').add('#forge:ingots/industrial_iron')

event.get('forge:dusts/ash').add('immersive_weathering:ash_layer_block')
event.get('forge:dusts/ash').add('darkerdepths:ash')

event.get('forge:gems/arcane_crystal').add('kubejs:purified_arcane_crystal')

event.removeAllTagsFrom('immersiveengineering:ore_lead')
event.removeAllTagsFrom('immersiveengineering:deepslate_ore_lead')
event.removeAllTagsFrom('immersiveengineering:raw_block_lead')
event.removeAllTagsFrom('immersiveengineering:ore_uranium')
event.removeAllTagsFrom('immersiveengineering:deepslate_ore_uranium')
event.removeAllTagsFrom('immersiveengineering:raw_block_uranium')

/*
event.get('forge:raw_materials/manasteel').add('kubejs:raw_mana_steel')
event.get('create:crushed_raw_materials').add('kubejs:crushed_raw_mana_steel')
*/

event.get('immersive_weathering:wax').add('immersivepetroleum:paraffin_wax')

event.removeAllTagsFrom('immersiveengineering:storage_steel')

//罐头
event.get('#forge:cans_sealed').add('kubjs:can_sealed')

})

onEvent('fluid.tags', event => {

event.get('forge:blood').add('tconstruct:blood')
event.get('forge:blood').add('biomesoplenty:blood')

/*
event.get('forge:kerosene').add('createindustry:kerosene')
event.get('forge:diesel').add('createindustry:diesel')
event.get('forge:crude_oil').add('createindustry:crude_oil_fluid')
*/

})

onEvent('fluid.tags', event => {

//event.get('minecraft:water').remove('nethers_exoticism:jaboticaba_juice')
event.get('minecraft:water').remove('create:honey')
event.get('minecraft:water').remove('create:chocolate')
event.get('minecraft:water').remove('create_enchantment_industry:ink')
event.get('minecraft:water').remove('create_enchantment_industry:flowing_ink')
/*
event.get('minecraft:water').remove('creatania:molten_gold')
event.get('minecraft:water').remove('creatania:molten_iron')
event.get('minecraft:water').remove('creatania:molten_copper')
event.get('minecraft:water').remove('creatania:molten_zinc')
event.get('minecraft:water').remove('creatania:molten_brass')
event.get('minecraft:water').remove('creatania:molten_andesite')
event.get('minecraft:water').remove('creatania:molten_manasteel')
event.get('minecraft:water').remove('creatania:molten_terrasteel')
event.get('minecraft:water').remove('creatania:molten_elementium')
event.get('minecraft:water').remove('creatania:molten_gaia')
event.get('minecraft:water').remove('creatania:pure_mana')
event.get('minecraft:water').remove('creatania:corrupt_mana')
event.get('minecraft:water').remove('creatania:real_mana')
event.get('minecraft:water').remove('creatania:flowing_molten_gold')
event.get('minecraft:water').remove('creatania:flowing_molten_iron')
event.get('minecraft:water').remove('creatania:flowing_molten_copper')
event.get('minecraft:water').remove('creatania:flowing_molten_zinc')
event.get('minecraft:water').remove('creatania:flowing_molten_brass')
event.get('minecraft:water').remove('creatania:flowing_molten_andesite')
event.get('minecraft:water').remove('creatania:flowing_molten_manasteel')
event.get('minecraft:water').remove('creatania:flowing_molten_terrasteel')
event.get('minecraft:water').remove('creatania:flowing_molten_elementium')
event.get('minecraft:water').remove('creatania:flowing_molten_gaia')
event.get('minecraft:water').remove('creatania:flowing_pure_mana')
event.get('minecraft:water').remove('creatania:flowing_corrupt_mana')
event.get('minecraft:water').remove('creatania:flowing_real_mana')
*/
event.get('minecraft:water').remove('createaddition:seed_oil')
event.get('minecraft:water').remove('create_central_kitchen:sap')
event.get('minecraft:water').remove('create_central_kitchen:syrup')
event.get('minecraft:water').remove('create_central_kitchen:tomato_sauce')
event.get('minecraft:water').remove('create_confectionery:black_chocolate')
event.get('minecraft:water').remove('create_confectionery:white_chocolate')
event.get('minecraft:water').remove('create_confectionery:hot_chocolate')
event.get('minecraft:water').remove('create_confectionery:caramel')
event.get('minecraft:water').remove('create_confectionery:ruby_chocolate')
/*
event.get('minecraft:water').remove('createindustry:crude_oil_fluid')
event.get('minecraft:water').remove('createindustry:kerosene')
event.get('minecraft:water').remove('createindustry:napalm')
event.get('minecraft:water').remove('createindustry:diesel')
event.get('minecraft:water').remove('createindustry:gasoline')
event.get('minecraft:water').remove('createindustry:naphta')
event.get('minecraft:water').remove('createindustry:heavy_oil')
event.get('minecraft:water').remove('createindustry:lubrication_oil')
*/
//event.get('minecraft:water').remove('enlightened_end:ooze_fluid')
event.get('minecraft:water').remove('beyond_earth:fuel')
event.get('minecraft:water').remove('beyond_earth:oil')
event.get('minecraft:water').remove('createaddition:bioethanol')
//event.get('minecraft:water').remove('nethers_exoticism:flowing_jaboticaba_juice')
event.get('minecraft:water').remove('create:flowing_honey')
event.get('minecraft:water').remove('create:flowing_chocolate')
event.get('minecraft:water').remove('createaddition:flowing_seed_oil')
event.get('minecraft:water').remove('create_central_kitchen:flowing_sap')
event.get('minecraft:water').remove('create_central_kitchen:flowing_syrup')
event.get('minecraft:water').remove('create_central_kitchen:flowing_tomato_sauce')
event.get('minecraft:water').remove('create_confectionery:flowing_black_chocolate')
event.get('minecraft:water').remove('create_confectionery:flowing_white_chocolate')
event.get('minecraft:water').remove('create_confectionery:flowing_hot_chocolate')
event.get('minecraft:water').remove('create_confectionery:flowing_caramel')
event.get('minecraft:water').remove('create_confectionery:flowing_ruby_chocolate')
/*
event.get('minecraft:water').remove('createindustry:crude_oil_flowing')
event.get('minecraft:water').remove('createindustry:flowing_kerosene')
event.get('minecraft:water').remove('createindustry:flowing_napalm')
event.get('minecraft:water').remove('createindustry:flowing_diesel')
event.get('minecraft:water').remove('createindustry:flowing_gasoline')
event.get('minecraft:water').remove('createindustry:flowing_naphta')
event.get('minecraft:water').remove('createindustry:flowing_heavy_oil')
event.get('minecraft:water').remove('createindustry:flowing_lubrication_oil')
*/
//event.get('minecraft:water').remove('enlightened_end:flowing_ooze_fluid')
event.get('minecraft:water').remove('create_dd:flowing_condense_milk')
event.get('minecraft:water').remove('create_dd:flowing_condense_milk')
event.get('minecraft:water').remove('create_dd:flowing_vanilla')
event.get('minecraft:water').remove('create_dd:flowing_vanilla_milkshake')
event.get('minecraft:water').remove('create_dd:flowing_strawberry')
event.get('minecraft:water').remove('create_dd:flowing_strawberry_milkshake')
event.get('minecraft:water').remove('create_dd:flowing_glowberry')
event.get('minecraft:water').remove('create_dd:flowing_glowberry_milkshake')
event.get('minecraft:water').remove('create_dd:flowing_caramel')
event.get('minecraft:water').remove('create_dd:flowing_caramel_milkshake')
event.get('minecraft:water').remove('create_dd:flowing_cream')
event.get('minecraft:water').remove('create_dd:flowing_hot_chocolate')
event.get('minecraft:water').remove('create_dd:flowing_chocolate_milkshake')
event.get('minecraft:water').remove('create_dd:condense_milk')
event.get('minecraft:water').remove('create_dd:condense_milk')
event.get('minecraft:water').remove('create_dd:vanilla')
event.get('minecraft:water').remove('create_dd:vanilla_milkshake')
event.get('minecraft:water').remove('create_dd:strawberry')
event.get('minecraft:water').remove('create_dd:strawberry_milkshake')
event.get('minecraft:water').remove('create_dd:glowberry')
event.get('minecraft:water').remove('create_dd:glowberry_milkshake')
event.get('minecraft:water').remove('create_dd:caramel')
event.get('minecraft:water').remove('create_dd:caramel_milkshake')
event.get('minecraft:water').remove('create_dd:cream')
event.get('minecraft:water').remove('create_dd:hot_chocolate')
event.get('minecraft:water').remove('create_dd:chocolate_milkshake')
event.get('minecraft:water').remove('create_dd:sap')
event.get('minecraft:water').remove('create_dd:shimmer')
event.get('minecraft:water').remove('create_dd:chromatic_waste')
event.get('minecraft:water').remove('create_dd:flowing_sap')
event.get('minecraft:water').remove('create_dd:flowing_shimmer')
event.get('minecraft:water').remove('create_dd:flowing_chromatic_waste')
event.get('minecraft:water').remove('beyond_earth:flowing_fuel')
event.get('minecraft:water').remove('beyond_earth:flowing_oil')
event.get('minecraft:water').remove('createaddition:flowing_bioethanol')
/*
event.get('minecraft:water').remove('garnished:garnish')
event.get('minecraft:water').remove('garnished:apple_cider')
event.get('minecraft:water').remove('garnished:peanut_oil')
event.get('minecraft:water').remove('garnished:cashew_mixture')
*/
})