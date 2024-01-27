const Crushed = (obj, event) => {
  Crusheds(obj.name, obj.crushed, obj.gem, obj.ore, obj.deepslateOre, obj.netherOre, obj.endOre, obj.rawOre, obj.rawOreBlock, event);
};

const Crusheds = (name, crushed, gem, ore, deepslateOre, netherOre, endOre, rawOre, rawOreBlock, event) => {
  if (crushed === "") return;

  if (ore) {
    event.remove({ id: `create:crushing/${name}_ore` });
    event.remove({
      id: `immersiveengineering:crafting/hammercrushing_${name}`,
    });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })
      event.remove({
        type: "immersiveengineering:crusher",
        input: `#forge:ores/${name}`,
      });

      event.recipes.thermal.pulverizer([crushed], ore).energy(3000)

      event.recipes.immersiveengineeringCrusher(
        `1x ${crushed}`,
        `#forge:ores/${name}`,
        [Item.of(crushed).withChance(0.75)]
      );

      event.recipes.createCrushing(
        [
          `1x ${crushed}`,
          Item.of(crushed).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }

    if (gem !== "") {
      event.remove({
        type: "immersiveengineering:crusher",
        input: `#forge:ores/${name}`,
        output: `#forge:gems/${name}`,
      });

      event.recipes.immersiveengineeringCrusher(
        `1x ${gem}`,
        `#forge:ores/${name}`,
        [Item.of(gem).withChance(0.75)]
      );

      event.recipes.createCrushing(
        [
          `1x ${gem}`,
          Item.of(gem).withChance(0.75),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobblestone`).withChance(0.125),
        ],
        ore
      );
    }
  }

  if (deepslateOre) {
    event.remove({ id: `create:crushing/deepslate_${name}_ore` });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })

      event.recipes.thermal.pulverizer([`2x ${crushed}`], deepslateOre).energy(3000)
      event.recipes.createCrushing(
        [
          `2x ${crushed}`,
          Item.of(crushed).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `2x ${gem}`,
          Item.of(gem).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:cobbled_deepslate`).withChance(0.125),
        ],
        deepslateOre
      );
    }
  }

  if (netherOre) {
    event.remove({ id: `create:crushing/${name}_ore` });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })

      event.recipes.thermal.pulverizer([`2x ${crushed}`], netherOre).energy(3000)
      event.recipes.createCrushing(
        [
          `2x ${crushed}`,
          Item.of(crushed).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:netherrack`).withChance(0.125),
        ],
        netherOre
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `2x ${gem}`,
          Item.of(gem).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:netherrack`).withChance(0.125),
        ],
        netherOre
      );
    }
  }

  if (endOre) {
    event.remove({ id: `create:crushing/${name}_ore` });

    if (crushed !== "") {
      event.remove({ input: "#forge:ores/" + name, type: TE("pulverizer") })

      event.recipes.thermal.pulverizer([`2x ${crushed}`], endOre).energy(3000)
      event.recipes.createCrushing(
        [
          `2x ${crushed}`,
          Item.of(crushed).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:end_stone`).withChance(0.125),
        ],
        endOre
      );
    }

    if (gem !== "") {
      event.recipes.createCrushing(
        [
          `2x ${gem}`,
          Item.of(gem).withChance(0.25),
          Item.of(`create:experience_nugget`).withChance(0.75),
          Item.of(`minecraft:end_stone`).withChance(0.125),
        ],
        endOre
      );
    }
  }

  if (rawOre) {
    event.remove({ id: `create:crushing/raw_${name}` });
    event.remove({ id: `create:crushing/raw_${name}_ore` });
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:raw_materials/${name}`,
    });
    event.remove({
      id: `immersiveengineering:crafting/raw_hammercrushing_${name}`,
    });

    event.shapeless(crushed, [
      [`#forge:raw_materials/${name}`],
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringCrusher(
      `${crushed}`,
      `#forge:raw_materials/${name}`,
      [Item.of(`create:experience_nugget`).withChance(0.75)]
    );

    event.recipes.createMilling(
      `${crushed}`,
      `#forge:raw_materials/${name}`
    );

    event.recipes.createCrushing(
      [crushed, Item.of(`create:experience_nugget`).withChance(0.75)],
      `#forge:raw_materials/${name}`
    );
  }

  if (rawOreBlock) {
    event.remove({ id: `create:crushing/raw_${name}_block` });
    event.remove({
      type: "immersiveengineering:crusher",
      input: `#forge:storage_blocks/raw_${name}`,
    });

    event.recipes.immersiveengineeringCrusher(
      `9x ${crushed}`,
      `#forge:storage_blocks/raw_${name}`
    );

    event.recipes.createCrushing(
      [
        `9x ${crushed}`,
        Item.of(`create:experience_nugget`, 9).withChance(0.75),
      ],
      `#forge:storage_blocks/raw_${name}`
    );
  }
};