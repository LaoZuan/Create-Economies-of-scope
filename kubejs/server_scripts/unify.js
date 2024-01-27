onEvent('recipes', event => {

let replaceIO = (tag, item) => {
  event.replaceInput(dontReplaceMe, tag, item);
  event.replaceOutput(dontReplaceMe, tag, item);
};

let removeIO = (item) => {
  event.remove({ input: item });
  event.remove({ output: item });
};

let recompact = (id, id2) => {
  event.recipes.createCompacting(id2, [id]);
};


////移除配方

  event.remove({ id: "immersiveengineering:crusher/ore_coal" })
  event.remove({ id: "tconstruct:smeltery/melting/metal/copper/ore_dense" })
  event.remove({ input: "immersiveengineering:ore_lead" })
  event.remove({ input: "immersiveengineering:ore_uranium" })
  event.remove({ input: "immersiveengineering:deepslate_ore_lead" })
  event.remove({ input: "immersiveengineering:deepslate_ore_uranium" })
  event.remove({ input: "immersiveengineering:raw_block_lead" })
  event.remove({ output: "immersiveengineering:raw_block_lead" })
  event.remove({ input: "immersiveengineering:raw_block_uranium" })
  event.remove({ output: "immersiveengineering:raw_block_uranium" })

  event.remove({ input: "darkerdepths:aridrock_gold_ore" })
	event.remove({ input: "darkerdepths:aridrock_iron_ore" })
	event.remove({ input: "darkerdepths:limestone_gold_ore" })
	event.remove({ input: "darkerdepths:limestone_iron_ore" })

  event.remove({ id: "createaddition:pressing/steel_ingot" })

  removeIO('createindustry:saltpeter')
  removeIO('createindustry:sulfur_powder')

const dontReplaceMe = {
    not: [
      { id: /botania:.*_quartz/ },
      { id: /botania:.*_quartz_slab/ },
      { id: /botania:.*_quartz_pillar/ },
      { id: /botania:.*_quartz_stairs/ },

      { id: "tconstruct:smeltery/casts/gold_casts/ingots" },
      { id: "tconstruct:smeltery/casts/gold_casts/nuggets" },
      { id: "tconstruct:smeltery/casts/gold_casts/rods" },
      { id: "tconstruct:smeltery/casts/gold_casts/plates" },
      { id: "tconstruct:smeltery/casts/gold_casts/gears" },
      { id: "tconstruct:smeltery/casts/gold_casts/wires" },

      { id: "minecraft:quartz_pillar" },
      { id: "minecraft:cut_copper_from_copper_block_stonecutting" },
      { id: "minecraft:cut_copper_stairs_from_cut_copper_stonecutting" },
      { id: "minecraft:cut_copper_slab_from_cut_copper_stonecutting" },
      { id: "minecraft:cut_copper" },
      { id: "minecraft:cut_copper_stairs" },
      { id: "minecraft:cut_copper_slab" },
      { id: "minecraft:copper_ingot" },
      { id: "minecraft:cut_copper_stairs_from_copper_block_stonecutting" },
      { id: "minecraft:cut_copper_slab_from_copper_block_stonecutting" },
      { id: "minecraft:waxed_copper_block_from_honeycomb" },
      { id: "minecraft:waxed_cut_copper_from_honeycomb" },

      { id: /.*yellow*./ },
    ],
};


////配方

///氟石
event.recipes.createMilling(MEK("fluorite_gem", 6), MEK("fluorite_ore"))
event.recipes.createMilling(MEK("fluorite_gem", 6), MEK("deepslate_fluorite_ore"))
event.recipes.createCrushing([Item.of(MEK("fluorite_gem"), 6), Item.of(MEK("fluorite_gem"), 2).withChance(0.75), Item.of(CR("experience_nugget"), 1).withChance(0.75), Item.of(MC("cobblestone")).withChance(0.12)], MEK("fluorite_ore"))
event.recipes.createCrushing([Item.of(MEK("fluorite_gem"), 6), Item.of(MEK("fluorite_gem"), 2).withChance(0.75), Item.of(CR("experience_nugget"), 1).withChance(0.75), Item.of(MC("cobbled_deepslate")).withChance(0.12)], MEK("deepslate_fluorite_ore"))

//熔融铜矿石
event.custom({
  "type": "tconstruct:ore_melting",
  "conditions": [
    {
      "registry": "minecraft:item",
      "tags": [
        "forge:ores/copper",
        "forge:ore_rates/dense"
      ],
      "type": "tconstruct:tag_intersection_present"
    }
  ],
  "rate": "metal",
  "ingredient": {
    "type": "forge:intersection",
    "children": [
      {
        "tag": "forge:ores/copper"
      },
      {
        "tag": "forge:ore_rates/dense"
      }
    ]
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180
  },
  "temperature": 500,
  "time": 125,
  "byproducts": [
    {
      "fluid": "tconstruct:molten_gold",
      "amount": 60
    }
  ]
})

recompact(TE("emerald_dust"), MC("emerald"))
recompact(TE("lapis_dust"), MC("lapis_lazuli"))
recompact(TE("sulfur_dust"), TE("sulfur"))
recompact(TE("apatite_dust"), TE("apatite"))
recompact(TE("niter_dust"), TE("niter"))
recompact(TE("sapphire_dust"), TE("sapphire"))
recompact(TE("ruby_dust"), TE("ruby"))
recompact(FA("arcane_crystal_dust"), FA("arcane_crystal"))
recompact(MEK("dust_fluorite"), MEK("fluorite_gem"))

let stone = Item.of(MC("cobblestone"), 1).withChance(.5)
let limestone = Item.of("darkerdepths:limestone", 1).withChance(.5)
let aridrock = Item.of("darkerdepths:aridrock", 1).withChance(.5)
let otherstone = Item.of(OC("otherstone"), 1).withChance(.5)

event.recipes.createCrushing([Item.of("forbidden_arcanus:stellarite_piece", 1), Item.of("forbidden_arcanus:stellarite_piece", 1).withChance(.25), stone], "forbidden_arcanus:stella_arcanum")
event.recipes.createCrushing([Item.of("forbidden_arcanus:xpetrified_orb", 2), Item.of("forbidden_arcanus:xpetrified_orb", 1).withChance(.25), stone], "forbidden_arcanus:xpetrified_ore")
event.recipes.createCrushing([Item.of("buddycards:luminis_crystal", 2), Item.of("buddycards:luminis_crystal", 1).withChance(.25), stone], "buddycards:luminis_ore")
event.recipes.createCrushing([Item.of("forbidden_arcanus:arcane_crystal", 2), Item.of("forbidden_arcanus:arcane_crystal_dust", 1).withChance(.25), stone], "forbidden_arcanus:arcane_crystal_ore")
event.recipes.createCrushing([Item.of(OC("iesnium_dust"), 2), Item.of(OC("iesnium_dust"), 1).withChance(.25), otherstone], OC("iesnium_ore"))
event.recipes.createCrushing([Item.of(TE("sapphire"), 2), Item.of(TE("sapphire"), 1).withChance(.25), stone], TE("sapphire_ore"))
event.recipes.createCrushing([Item.of(TE("ruby"), 2), Item.of(TE("ruby"), 1).withChance(.25), stone], TE("ruby_ore"))
event.recipes.createCrushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), limestone], "darkerdepths:limestone_diamond_ore")
event.recipes.createCrushing([Item.of(MC("diamond"), 2), Item.of(MC("diamond"), 1).withChance(.25), aridrock], "darkerdepths:aridrock_diamond_ore")
event.recipes.createCrushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), limestone], "darkerdepths:limestone_coal_ore")
event.recipes.createCrushing([Item.of(MC("coal"), 2), Item.of(MC("coal"), 2).withChance(.5), aridrock], "darkerdepths:aridrock_coal_ore")
event.recipes.createCrushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), limestone], "darkerdepths:limestone_lapis_ore")
event.recipes.createCrushing([Item.of(MC("lapis_lazuli"), 12), Item.of(MC("lapis_lazuli"), 8).withChance(.25), aridrock], "darkerdepths:aridrock_lapis_ore")
event.recipes.createCrushing([Item.of(CR('crushed_raw_iron'), 1), limestone], "darkerdepths:limestone_iron_ore")
event.recipes.createCrushing([Item.of(CR('crushed_raw_iron'), 1), aridrock], "darkerdepths:aridrock_iron_ore")
event.recipes.createCrushing([Item.of(CR('crushed_raw_gold'), 1), limestone], "darkerdepths:limestone_gold_ore")
event.recipes.createCrushing([Item.of(CR('crushed_raw_gold'), 1), aridrock], "darkerdepths:aridrock_gold_ore")
//event.recipes.createCrushing([Item.of(TE('sulfur'), 1).withChance(.15)], "createindustry:sulfur")
event.recipes.createCrushing([Item.of(TE('sulfur'), 1).withChance(.15)], "biomesoplenty:brimstone")

//木炭粉
event.recipes.immersiveengineeringCrusher("mekanism:dust_charcoal", "#forge:charcoal");
event.recipes.immersiveengineeringCrusher("9x mekanism:dust_charcoal", "#forge:storage_blocks/charcoal");
event.recipes.createMilling(["mekanism:dust_charcoal"], "#forge:charcoal");
event.recipes.thermal.pulverizer("mekanism:dust_charcoal", "#forge:charcoal");
//煤粉
replaceIO("#forge:dusts/coal", "mekanism:dust_coal");
event.recipes.createMilling(["mekanism:dust_coal"], "minecraft:coal");
event.recipes.thermal.pulverizer("mekanism:dust_coal", "minecraft:coal");
//硫磺粉
replaceIO("#forge:dusts/sulfur", "thermal:sulfur_dust");
event.recipes.immersiveengineeringCrusher("thermal:sulfur_dust", "#forge:gems/sulfur");
event.recipes.createMilling(["thermal:sulfur_dust"], "#forge:gems/sulfur").processingTime(500);
event.recipes.mekanismEnriching("thermal:sulfur_dust", "#forge:gems/sulfur");
event.custom({
  "type":"immersiveengineering:crusher",
  "secondaries":[{"chance":0.15,
  "output":{"item":"thermal:sulfur_dust"}}],
  "result":{"count":4,
  "base_ingredient":{"item":"minecraft:coal"}},
  "input":{"tag":"forge:ores/coal"},
  "energy":6000
})
//硝粉
replaceIO("#forge:dusts/saltpeter", "thermal:niter_dust");
event.recipes.immersiveengineeringCrusher("thermal:niter_dust", "#forge:gems/niter");
event.recipes.createMilling(["thermal:niter_dust"], "#forge:gems/niter").processingTime(500);
event.recipes.mekanismEnriching("thermal:niter_dust", "#forge:gems/niter");
//磷灰石粉
replaceIO("#forge:dusts/apatite", "thermal:apatite_dust");
event.recipes.immersiveengineeringCrusher("thermal:apatite_dust", "#forge:gems/apatite");
event.recipes.createMilling(["thermal:apatite_dust"], "#forge:gems/apatite").processingTime(500);
event.recipes.mekanismEnriching("thermal:apatite_dust", "#forge:gems/apatite");
//石英粉
replaceIO("#forge:dusts/quartz", "thermal:quartz_dust");
event.recipes.immersiveengineeringCrusher("thermal:quartz_dust", "#forge:gems/quartz");
event.recipes.createMilling(["thermal:quartz_dust"], "#forge:gems/quartz").processingTime(500);
event.recipes.mekanismEnriching("thermal:quartz_dust", "#forge:gems/quartz");
//福禄伊克斯石英粉
replaceIO("#forge:dusts/fluix", "ae2:fluix_dust");
event.recipes.immersiveengineeringCrusher("ae2:fluix_dust", "#forge:gems/fluix");
event.recipes.createMilling(["ae2:fluix_dust"], "#forge:gems/fluix").processingTime(500);
event.recipes.mekanismEnriching("ae2:fluix_dust", "#forge:gems/fluix");
//赛特斯石英粉
replaceIO("#forge:dusts/certus_quartz", "ae2:certus_quartz_dust");
event.recipes.immersiveengineeringCrusher("ae2:certus_quartz_dust", "#forge:gems/certus_quartz");
event.recipes.createMilling(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz").processingTime(500);
event.recipes.mekanismEnriching("ae2:certus_quartz_dust", "#forge:gems/certus_quartz");
//黑曜石粉
replaceIO("#forge:dusts/obsidian", "create:powdered_obsidian");
event.recipes.immersiveengineeringCrusher("4x create:powdered_obsidian", "minecraft:obsidian");
event.recipes.thermal.pulverizer("4x create:powdered_obsidian", "minecraft:obsidian");
//氟石粉
event.recipes.thermal.pulverizer("6x mekanism:fluorite_gem", "#forge:ores/fluorite");
event.recipes.createMilling(["mekanism:dust_fluorite"], "#forge:gems/fluorite").processingTime(500);
event.recipes.immersiveengineeringCrusher("mekanism:dust_fluorite", "#forge:gems/fluorite");
event.recipes.thermal.pulverizer("mekanism:dust_fluorite", "#forge:gems/fluorite");
//朱砂粉
event.recipes.createMilling(['4x ' + MC('redstone')], TE('cinnabar')).processingTime(700)
event.recipes.createCrushing(['6x ' + MC('redstone')], TE('cinnabar')).processingTime(500)
event.recipes.thermal.pulverizer(['8x ' + MC('redstone')], TE('cinnabar')).energy(10000)
event.recipes.mekanismEnriching('8x ' + MC('redstone'), TE('cinnabar'));
//萤石粉
event.recipes.createMilling(['3x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(700)
event.recipes.createCrushing(['6x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').processingTime(500)
event.recipes.thermal.pulverizer(['9x ' + MC('glowstone_dust')], 'buddycards:luminis_crystal').energy(10000)
event.recipes.mekanismEnriching('9x ' + MC('glowstone_dust'), 'buddycards:luminis_crystal');


////replaceIOnput

/*
event.replaceInput(
  "minecraft:lava_bucket",
  Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:lava"}'), "minecraft:lava_bucket"]).toJson()
);
event.replaceInput(
  "minecraft:water_bucket",
  Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:water"}'), "minecraft:water_bucket"]).toJson()
);
*/

event.replaceInput('createindustry:bauxite', 'immersiveengineering:raw_aluminum')
event.replaceInput('forbidden_arcanus:arcane_crystal', '#forge:gems/arcane_crystal')
event.replaceInput(MC("quartz"), AE2("#all_nether_quartz"))
event.replaceInput(F("#gems/quartz"), AE2("#all_nether_quartz"))
event.replaceInput(AE2("certus_quartz_crystal"), [AE2("certus_quartz_crystal"), KJ('purified_certus_quartz_crystal')])
//event.replaceInput('pneumaticcraft:printed_circuit_board', 'mekanism:basic_control_circuit')
//event.replaceInput('create_dd:chromatic_compound', 'create:chromatic_compound')
//event.replaceInput('create_dd:refined_radiance', 'create:refined_radiance')
//event.replaceInput('create_dd:shadow_steel', 'create:shadow_steel')

replaceIO("#forge:silicon", "ae2:silicon");
replaceIO("#forge:dusts/ender_pearl", "ae2:ender_dust");
replaceIO("#forge:sawdust", "thermal:sawdust");
replaceIO("#forge:slag", "thermal:slag");
replaceIO("#forge:storage_blocks/charcoal", "mekanism:block_charcoal");
replaceIO("#forge:coal_coke", "thermal:coal_coke");
replaceIO("#forge:fuels/bio", "createaddition:biomass");
replaceIO("alloyedguns:basic_bullet_casing", "immersiveengineering:empty_casing");
replaceIO("pneumaticcraft:capacitor", "createaddition:capacitor");
replaceIO("thermal:tea", "farmersrespite:green_tea_leaves");
replaceIO("immersivepetroleum:bitumen", "thermal:bitumen");
replaceIO("immersive_weathering:ash_layer_block", "#forge:dusts/ash");
replaceIO("pneumaticcraft:printed_circuit_board", "mekanism:basic_control_circuit");
replaceIO('create_dd:chromatic_compound', 'create:chromatic_compound')
replaceIO('create_dd:refined_radiance', 'create:refined_radiance')
replaceIO('create_dd:shadow_steel', 'create:shadow_steel')
replaceIO('immersiveengineering:coal_coke', 'thermal:coal_coke')

////原木处理

let woodcutting = (mod, log, planks, slab, bark, sawdust) => {
  event.remove({ id: "create:cutting/stripped_" + log })
  event.remove({ id: "create:cutting/" + log })
  event.remove({ id: "create:cutting/" + planks })
  event.remove({ id: "create:cutting/" + slab })
  event.recipes.createCutting([mod + ":stripped_" + log,  Item.of((bark))], mod + ":" + log).processingTime(50)
	event.recipes.createCutting([Item.of(mod + ":" + planks, 6), Item.of((sawdust))], mod + ":stripped_" + log).processingTime(50)
	event.recipes.createCutting([Item.of(mod + ":" + slab, 2), Item.of((sawdust)).withChance(0.75)], mod + ":" + planks).processingTime(50)
}

woodcutting("minecraft", "dark_oak_log", "dark_oak_planks", "dark_oak_slab", "immersive_weathering:dark_oak_bark", TE('sawdust'))
woodcutting("minecraft", "oak_log", "oak_planks", "oak_slab", "immersive_weathering:oak_bark", TE('sawdust'))
woodcutting("minecraft", "spruce_log", "spruce_planks", "spruce_slab", "immersive_weathering:spruce_bark", TE('sawdust'))
woodcutting("minecraft", "birch_log", "birch_planks", "birch_slab", "immersive_weathering:birch_bark", TE('sawdust'))
woodcutting("minecraft", "jungle_log", "jungle_planks", "jungle_slab", "immersive_weathering:jungle_bark", TE('sawdust'))
woodcutting("minecraft", "acacia_log", "acacia_planks", "acacia_slab", "immersive_weathering:acacia_bark", TE('sawdust'))
woodcutting("minecraft", "warped_stem", "warped_planks", "warped_slab", "immersive_weathering:warped_scales", TE("sawdust"))
woodcutting("minecraft", "crimson_stem", "crimson_planks", "crimson_slab", "immersive_weathering:crimson_scales", TE("sawdust"))
woodcutting("tconstruct", "greenheart_log", "greenheart_planks", "greenheart_planks_slab", 'immersive_weathering:tconstruct/greenheart_bark', 'minecraft:slime_ball')
woodcutting("tconstruct", "skyroot_log", "skyroot_planks", "skyroot_planks_slab", 'immersive_weathering:tconstruct/skyroot_bark', 'tconstruct:sky_slime_ball')
woodcutting("tconstruct", "bloodshroom_log", "bloodshroom_planks", "bloodshroom_planks_slab", 'immersive_weathering:tconstruct/bloodshroom_bark', 'tconstruct:ichor_slime_ball')
woodcutting("forbidden_arcanus", "mysterywood_log", "mysterywood_planks", "mysterywood_slab", 'immersive_weathering:forbidden_arcanus/mysterywood_bark', 'kubejs:mysterywood_sawdust')
woodcutting("forbidden_arcanus", "cherrywood_log", "cherrywood_planks", "cherrywood_slab", 'immersive_weathering:forbidden_arcanus/cherrywood_bark', TE("sawdust"))
woodcutting("ars_nouveau", "blue_archwood_log", "archwood_planks", "archwood_slab", 'farmersdelight:tree_bark', TE("sawdust"))
woodcutting("ars_nouveau", "purple_archwood_log", "archwood_planks", "archwood_slab", 'farmersdelight:tree_bark', TE("sawdust"))
woodcutting("ars_nouveau", "green_archwood_log", "archwood_planks", "archwood_slab", 'farmersdelight:tree_bark', TE("sawdust"))
woodcutting("ars_nouveau", "red_archwood_log", "archwood_planks", "archwood_slab", 'farmersdelight:tree_bark', TE("sawdust"))
woodcutting("botania", "livingwood_log", "livingwood_planks", "livingwood_planks_slab", 'immersive_weathering:botania/livingwood_bark', TE("sawdust"))
//woodcutting("enlightened_end", "congealed_stem", "congealed_planks", "congealed_slab", 'immersive_weathering:enlightened_end/congealed_bark', TE("sawdust"))
//woodcutting("enlightened_end", "congealed_stem", "congealed_planks", "congealed_slab", 'immersive_weathering:enlightened_end/congealed_bark', TE("sawdust"))

let wood_types = [
  BOP('fir'), BOP('redwood'), BOP('cherry'), BOP('mahogany'), BOP('jacaranda'), BOP('palm'), BOP('willow'), BOP('dead'), BOP('magic'), BOP('umbran'), BOP('hellbark'), 
  FA('edelwood'), FA('fungyss'), 
  AP('twisted'), 
  TF('twilight_oak'), TF('mangrove'), TF('dark'), TF('time'), TF('transformation'), TF('mining'), TF('sorting')]
wood_types.forEach(wood => {
  event.recipes.createCutting(['2x ' + wood + '_slab', Item.of(TE("sawdust")).withChance(0.75)], wood + '_planks').processingTime(50)})


////矿词统一

function unifyAllTheMetal(
    name,
    ore,
    deepslateOre,
    netherOre,
    endOre,
    rawOre,
    rawOreBlock,
    block,
    ingot,
    nugget,
    gem,
    dust,
    fluid,
    gear,
    plate,
    rod,
    crushed,
    dirtyDust,
    wire,
    byproduct,
    fluid_byproduct
  ) {
    let obj = {
      name: name,
      ore: ore,
      deepslateOre: deepslateOre,
      netherOre: netherOre,
      endOre: endOre,
      rawOre: rawOre,
      rawOreBlock: rawOreBlock,
      block: block,
      ingot: ingot,
      nugget: nugget,
      gem: gem,
      dust: dust,
      fluid: fluid,
      gear: gear,
      plate: plate,
      rod: rod,
      crushed: crushed,
      dirtyDust: dirtyDust,
      wire: wire,
      byproduct: byproduct,
      fluid_byproduct: fluid_byproduct,
    };

    if (rawOre) {
      replaceIO(`#forge:raw_materials/${name}`, rawOre);
    }
    if (rawOreBlock) {
      replaceIO(`#forge:storage_blocks/raw_${name}`, rawOreBlock);
    }
    if (block) {
      replaceIO(`#forge:storage_blocks/${name}`, block);
    }
    if (ingot) {
      replaceIO(`#forge:ingots/${name}`, ingot);
    }
    if (nugget) {
      replaceIO(`#forge:nuggets/${name}`, nugget);
    }
    if (gem) {
      replaceIO(`#forge:gems/${name}`, gem);
    }
    if (dust) {
      replaceIO(`#forge:dusts/${name}`, dust);
    }
    if (gear) {
      replaceIO(`#forge:gears/${name}`, gear);
    }
    if (plate) {
      replaceIO(`#forge:plates/${name}`, plate);
    }
    if (rod) {
      replaceIO(`#forge:rods/${name}`, rod);
    }
    if (wire) {
      replaceIO(`#forge:wires/${name}`, wire);
    }
    

    Plate(obj, event);
    Crushed(obj, event);
    Dust(obj, event);
    Nugget(obj, event);
    Fiuld(obj, event);
    Gear(obj, event);
    Wire(obj, event);
    Rod(obj, event);
    Ingot(obj, event);
};

  unifyAllTheMetal(
    "aluminum",
    "",
    "immersiveengineering:deepslate_ore_aluminum",
    "immersiveengineering:ore_aluminum",
    "",
    "immersiveengineering:raw_aluminum",
    "immersiveengineering:raw_block_aluminum",
    "immersiveengineering:storage_aluminum",
    "immersiveengineering:ingot_aluminum",
    "immersiveengineering:nugget_aluminum",
    "",
    "immersiveengineering:dust_aluminum",
    "tconstruct:molten_aluminum",
    "",
    "immersiveengineering:plate_aluminum",
    "immersiveengineering:stick_aluminum",
    "create:crushed_raw_aluminum",
    "mekanism:dirty_dust_copper",
    "immersiveengineering:wire_aluminum",
    "minecraft:iron_nugget",
    "tconstruct:molten_iron"
  );

  unifyAllTheMetal(
    "amethyst_bronze",
    "",
    "",
    "",
    "",
    "",
    "",
    "tconstruct:amethyst_bronze_block",
    "tconstruct:amethyst_bronze_ingot",
    "tconstruct:amethyst_bronze_nugget",
    "",
    "",
    "tconstruct:molten_amethyst_bronze",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "brass",
    "",
    "",
    "",
    "",
    "",
    "",
    "create:brass_block",
    "create:brass_ingot",
    "create:brass_nugget",
    "",
    "kubejs:brass_dust",
    "tconstruct:molten_brass",
    "",
    "create:brass_sheet",
    "createaddition:brass_rod",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "bronze",
    "",
    "",
    "",
    "",
    "",
    "",
    "create_dd:bronze_block",
    "create_dd:bronze_ingot",
    "thermal:bronze_nugget",
    "",
    "thermal:bronze_dust",
    "tconstruct:molten_bronze",
    "thermal:bronze_gear",
    "create_dd:bronze_sheet",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "constantan",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:constantan_block",
    "thermal:constantan_ingot",
    "thermal:constantan_nugget",
    "",
    "thermal:constantan_dust",
    "tconstruct:molten_constantan",
    "thermal:constantan_gear",
    "thermal:constantan_plate",
    "immersiveposts:stick_constantan",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "copper",
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
    "",
    "",
    "minecraft:raw_copper",
    "minecraft:raw_copper_block",
    "minecraft:copper_block",
    "minecraft:copper_ingot",
    "create:copper_nugget",
    "",
    "thermal:copper_dust",
    "tconstruct:molten_copper",
    "thermal:copper_gear",
    "create:copper_sheet",
    "createaddition:copper_rod",
    "create:crushed_raw_copper",
    "mekanism:dirty_dust_copper",
    "createaddition:copper_wire",
    "minecraft:gold_nugget",
    "tconstruct:molten_gold"
  );

  unifyAllTheMetal(
    "diamond",
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "",
    "",
    "",
    "",
    "minecraft:diamond_block",
    "",
    "",
    "minecraft:diamond",
    "thermal:diamond_dust",
    "tconstruct:molten_diamond",
    "thermal:diamond_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "electrum",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:electrum_block",
    "thermal:electrum_ingot",
    "thermal:electrum_nugget",
    "",
    "thermal:electrum_dust",
    "tconstruct:molten_electrum",
    "thermal:electrum_gear",
    "thermal:electrum_plate",
    "immersiveposts:stick_electrum",
    "",
    "",
    "immersiveengineering:wire_electrum",
    "",
    ""
  );

  unifyAllTheMetal(
    "emerald",
    "minecraft:emerald_ore",
    "minecraft:deepslate_emerald_ore",
    "",
    "",
    "",
    "",
    "minecraft:emerald_block",
    "",
    "",
    "minecraft:emerald",
    "thermal:emerald_dust",
    "tconstruct:molten_emerald",
    "thermal:emerald_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "enderium",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:enderium_block",
    "thermal:enderium_ingot",
    "thermal:enderium_nugget",
    "",
    "thermal:enderium_dust",
    "tconstruct:molten_enderium",
    "thermal:enderium_gear",
    "thermal:enderium_plate",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "signalum",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:signalum_block",
    "thermal:signalum_ingot",
    "thermal:signalum_nugget",
    "",
    "thermal:signalum_dust",
    "tconstruct:molten_signalum",
    "thermal:signalum_gear",
    "thermal:signalum_plate",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "gold",
    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "",
    "",
    "minecraft:raw_gold",
    "minecraft:raw_gold_block",
    "minecraft:gold_block",
    "minecraft:gold_ingot",
    "minecraft:gold_nugget",
    "",
    "thermal:gold_dust",
    "tconstruct:molten_gold",
    "thermal:gold_gear",
    "create:golden_sheet",
    "createaddition:gold_rod",
    "create:crushed_raw_gold",
    "mekanism:dirty_dust_gold",
    "createaddition:gold_wire",
    "create:zinc_nugget",
    "tconstruct:molten_zinc"
  );

  unifyAllTheMetal(
    "invar",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:invar_block",
    "thermal:invar_ingot",
    "thermal:invar_nugget",
    "",
    "thermal:invar_dust",
    "tconstruct:molten_invar",
    "thermal:invar_gear",
    "thermal:invar_plate",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "iron",
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore",
    "",
    "",
    "minecraft:raw_iron",
    "minecraft:raw_iron_block",
    "minecraft:iron_block",
    "minecraft:iron_ingot",
    "minecraft:iron_nugget",
    "",
    "thermal:iron_dust",
    "tconstruct:molten_iron",
    "thermal:iron_gear",
    "create:iron_sheet",
    "createaddition:iron_rod",
    "create:crushed_raw_iron",
    "mekanism:dirty_dust_iron",
    "createaddition:iron_wire",
    "thermal:nickel_nugget",
    "tconstruct:molten_nickel"
  );

  unifyAllTheMetal(
    "lapis",
    "",
    "",
    "",
    "",
    "",
    "",
    "minecraft:lapis_block",
    "",
    "",
    "minecraft:lapis_lazuli",
    "thermal:lapis_dust",
    "",
    "thermal:lapis_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "lead",
    "thermal:lead_ore",
    "thermal:deepslate_lead_ore",
    "",
    "",
    "thermal:raw_lead",
    "thermal:raw_lead_block",
    "thermal:lead_block",
    "thermal:lead_ingot",
    "thermal:lead_nugget",
    "",
    "thermal:lead_dust",
    "tconstruct:molten_lead",
    "thermal:lead_gear",
    "thermal:lead_plate",
    "immersiveposts:stick_lead",
    "create:crushed_raw_lead",
    "mekanism:dirty_dust_lead",
    "immersiveengineering:wire_lead",
    "minecraft:iron_nugget",
    "tconstruct:molten_iron"
  );

  unifyAllTheMetal(
    "lumium",
    "",
    "",
    "",
    "",
    "",
    "",
    "thermal:lumium_block",
    "thermal:lumium_ingot",
    "thermal:lumium_nugget",
    "",
    "thermal:lumium_dust",
    "tconstruct:molten_lumium",
    "thermal:lumium_gear",
    "thermal:lumium_plate",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "manyullyn",
    "",
    "",
    "",
    "",
    "",
    "",
    "tconstruct:manyullyn_block",
    "tconstruct:manyullyn_ingot",
    "tconstruct:manyullyn_nugget",
    "",
    "",
    "tconstruct:molten_manyullyn",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "netherite",
    "",
    "",
    "",
    "",
    "",
    "",
    "minecraft:netherite_block",
    "minecraft:netherite_ingot",
    "thermal:netherite_nugget",
    "",
    "thermal:netherite_dust",
    "tconstruct:molten_netherite",
    "thermal:netherite_gear",
    "thermal:netherite_plate",
    "",
    "",
    "",
    "",
    "occultism:iesnium_nugget",
    "materialis:molten_iesnium"
  );

  unifyAllTheMetal(
    "nickel",
    "thermal:nickel_ore",
    "thermal:deepslate_lead_ore",
    "",
    "",
    "thermal:raw_nickel",
    "thermal:raw_nickel_block",
    "thermal:nickel_block",
    "thermal:nickel_ingot",
    "thermal:nickel_nugget",
    "",
    "thermal:nickel_dust",
    "tconstruct:molten_nickel",
    "thermal:nickel_gear",
    "thermal:nickel_plate",
    "immersiveposts:stick_nickel",
    "create:crushed_raw_nickel",
    "",
    "kubejs:nickel_wire",
    "create:copper_nugget",
    "tconstruct:molten_copper"
  );

  unifyAllTheMetal(
    "osmium",
    "",
    "mekanism:deepslate_osmium_ore",
    "",
    "mekanism:osmium_ore",
    "mekanism:raw_osmium",
    "mekanism:block_raw_osmium",
    "mekanism:block_osmium",
    "mekanism:ingot_osmium",
    "mekanism:nugget_osmium",
    "",
    "mekanism:dust_osmium",
    "tconstruct:molten_osmium",
    "",
    "",
    "",
    "create:crushed_raw_osmium",
    "mekanism:dirty_dust_osmium",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "pig_iron",
    "",
    "",
    "",
    "",
    "",
    "",
    "tconstruct:pig_iron_block",
    "tconstruct:pig_iron_ingot",
    "tconstruct:pig_iron_nugget",
    "",
    "",
    "tconstruct:molten_pig_iron",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "quartz",
    "",
    "",
    "",
    "",
    "",
    "",
    "minecraft:quartz_block",
    "",
    "",
    "minecraft:quartz",
    "thermal:quartz_dust",
    "tconstruct:molten_quartz",
    "thermal:quartz_gear",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "rose_gold",
    "",
    "",
    "",
    "",
    "",
    "",
    "tconstruct:rose_gold_block",
    "tconstruct:rose_gold_ingot",
    "tconstruct:rose_gold_nugget",
    "",
    "thermal:rose_gold_dust",
    "tconstruct:molten_rose_gold",
    "thermal:rose_gold_gear",
    "thermal:rose_gold_plate",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "silver",
    "",
    "thermal:deepslate_silver_ore",
    "",
    "thermal:silver_ore",
    "thermal:raw_silver",
    "thermal:raw_silver_block",
    "thermal:silver_block",
    "thermal:silver_ingot",
    "thermal:silver_nugget",
    "",
    "thermal:silver_dust",
    "tconstruct:molten_silver",
    "thermal:silver_gear",
    "thermal:silver_plate",
    "immersiveposts:stick_silver",
    "create:crushed_raw_silver",
    "",
    "",
    "thermal:silver_coin",
    ""
  );

  unifyAllTheMetal(
    "steel",
    "",
    "",
    "",
    "",
    "",
    "",
    "create_dd:steel_block",
    "create_dd:steel_ingot",
    "create_dd:steel_nugget",
    "",
    "immersiveengineering:dust_steel",
    "tconstruct:molten_steel",
    "thermal:steel_gear",
    "create_dd:steel_sheet",
    "immersiveengineering:stick_steel",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "tin",
    "thermal:tin_ore",
    "thermal:deepslate_tin_ore",
    "",
    "",
    "thermal:raw_tin",
    "thermal:raw_tin_block",
    "thermal:tin_block",
    "thermal:tin_ingot",
    "thermal:tin_nugget",
    "",
    "thermal:tin_dust",
    "tconstruct:molten_tin",
    "thermal:tin_gear",
    "thermal:tin_plate",
    "",
    "create:crushed_raw_tin",
    "mekanism:dirty_dust_tin",
    "",
    "create:copper_nugget",
    "tconstruct:molten_copper"
  );

  unifyAllTheMetal(
    "uranium",
    "",
    "mekanism:deepslate_uranium_ore",
    "",
    "mekanism:uranium_ore",
    "mekanism:raw_uranium",
    "mekanism:block_raw_uranium",
    "immersiveengineering:storage_uranium",
    "immersiveengineering:ingot_uranium",
    "immersiveengineering:nugget_uranium",
    "",
    "immersiveengineering:dust_uranium",
    "tconstruct:molten_uranium",
    "",
    "immersiveengineering:plate_uranium",
    "immersiveposts:stick_uranium",
    "create:crushed_raw_uranium",
    "mekanism:dirty_dust_uranium",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "zinc",
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    "",
    "",
    "create:raw_zinc",
    "create:raw_zinc_block",
    "create:zinc_block",
    "create:zinc_ingot",
    "create:zinc_nugget",
    "",
    "kubejs:zinc_dust",
    "tconstruct:molten_zinc",
    "",
    "create_dd:zinc_sheet",
    "",
    "create:crushed_raw_zinc",
    "",
    "kubejs:zinc_wire",
    "thermal:lead_nugget",
    "tconstruct:molten_lead"
  );

  unifyAllTheMetal(
    "cobalt",
    "tconstruct:cobalt_ore",
    "",
    "",
    "",
    "tconstruct:raw_cobalt",
    "tconstruct:raw_cobalt_block",
    "tconstruct:cobalt_block",
    "tconstruct:cobalt_ingot",
    "tconstruct:cobalt_nugget",
    "",
    "kubejs:cobalt_dust",
    "tconstruct:molten_cobalt",
    "",
    "",
    "",
    "kubejs:crushed_raw_cobalt",
    "",
    "",
    "create:powdered_obsidian",
    "tconstruct:molten_obsidian"
  );

  unifyAllTheMetal(
    "neptunium",
    "",
    "",
    "",
    "",
    "",
    "",
    "aquaculture:neptunium_block",
    "aquaculture:neptunium_ingot",
    "aquaculture:neptunium_nugget",
    "",
    "",
    "materialis:molten_neptunium",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "manasteel",
    "",
    "",
    "",
    "",
    "",
    "",
    "botania:manasteel_block",
    "botania:manasteel_ingot",
    "botania:manasteel_nugget",
    "",
    "",
    "materialis:molten_manasteel",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "cast_iron",
    "",
    "",
    "",
    "",
    "",
    "",
    "create:industrial_iron_block",
    "create_dd:industrial_iron_ingot",
    "create_dd:industrial_iron_nugget",
    "",
    "",
    "createbigcannons:molten_cast_iron",
    "",
    "create_dd:industrial_iron_sheet",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "arcane_gold",
    "",
    "",
    "",
    "",
    "",
    "",
    "forbidden_arcanus:arcane_gold_block",
    "forbidden_arcanus:arcane_gold_ingot",
    "forbidden_arcanus:arcane_gold_nugget",
    "",
    "",
    "materialis:molten_arcane_gold",
    "kubejs:arcane_gold_gear",
    "kubejs:arcane_golden_sheet",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "arcane_crystal",
    "forbidden_arcanus:arcane_crystal_ore",
    "forbidden_arcanus:deepslate_arcane_crystal_ore",
    "",
    "",
    "",
    "",
    "forbidden_arcanus:deepslate_arcane_crystal_ore",
    "",
    "",
    "forbidden_arcanus:arcane_crystal",
    "forbidden_arcanus:arcane_crystal_dust",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "refined_radiance",
    "",
    "",
    "",
    "",
    "",
    "",
    "create_dd:refined_radiance_block",
    "create:refined_radiance",
    "",
    "",
    "",
    "materialis:molten_refined_radiance",
    "",
    "create_dd:refined_radiance_sheet",
    "kubejs:radiant_rod",
    "",
    "",
    "kubejs:radiant_wire",
    "",
    ""
  );

  unifyAllTheMetal(
    "shadow_steel",
    "",
    "",
    "",
    "",
    "",
    "",
    "create_dd:shadow_steel_block",
    "create:shadow_steel",
    "",
    "",
    "",
    "materialis:molten_shadow_steel",
    "",
    "",
    "kubejs:shadow_steel_rod",
    "",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "desh",
    "",
    "",
    "",
    "",
    "beyond_earth:raw_desh",
    "beyond_earth:raw_desh_block",
    "beyond_earth:desh_block",
    "beyond_earth:desh_ingot",
    "beyond_earth:desh_nugget",
    "",
    "kubejs:desh_dust",
    "beyond_earth:molten_desh",
    "",
    "beyond_earth:desh_plate",
    "",
    "kubejs:crushed_desh_ore",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "ostrum",
    "",
    "",
    "",
    "",
    "beyond_earth:raw_ostrum",
    "beyond_earth:raw_ostrum_block",
    "beyond_earth:ostrum_block",
    "beyond_earth:ostrum_ingot",
    "beyond_earth:ostrum_nugget",
    "",
    "kubejs:ostrum_dust",
    "beyond_earth:molten_ostrum",
    "",
    "",
    "",
    "kubejs:crushed_ostrum_ore",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "calorite",
    "",
    "",
    "",
    "",
    "beyond_earth:raw_calorite",
    "beyond_earth:raw_calorite_block",
    "beyond_earth:calorite_block",
    "beyond_earth:calorite_ingot",
    "beyond_earth:calorite_nugget",
    "",
    "kubejs:calorite_dust",
    "beyond_earth:molten_calorite",
    "",
    "",
    "",
    "kubejs:crushed_calorite_ore",
    "",
    "",
    "",
    ""
  );

  unifyAllTheMetal(
    "", //名称
    "", //矿石
    "", //深层矿石
    "", //下界矿石
    "", //末地矿石
    "", //粗矿
    "", //粗矿块
    "", //块
    "", //锭
    "", //粒
    "", //宝石
    "", //粉
    "", //熔融流体
    "", //齿轮
    "", //板材
    "", //棍
    "", //粉碎矿
    "", //脏矿粉
    "", //线
    "", //副产物
    ""  //熔融流体副产物
  );
  

});

onEvent('item.tags', event => {

event.get('forge:dusts/saltpeter')
.add('thermal:niter_dust')
.add('createbigcannons:nitropowder')
.add('bloodmagic:saltpeter')
.add('immersiveengineering:dust_saltpeter')

event.get('createbigcannons:nitropowder')
.add('#forge:dusts/saltpeter')

event.get('forge:dusts/niter')
.add('#forge:dusts/saltpeter')

});