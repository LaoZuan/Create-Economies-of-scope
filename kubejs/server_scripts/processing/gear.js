const Gear = (obj, event) => {
  tinkersGear(obj.name, obj.gear, obj.fluid, obj.gem, event);
  IEGear(obj.name, obj.gear, obj.ingot, obj.gem, event);
  CreateGear(obj.name, obj.gear, obj.ingot, obj.gem, event);
  thermalsGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
  minecraftGear(obj.name, obj.ingot, obj.gem, obj.gear, event);
};

const IEGear = (name, gear, ingot, gem, event) => {
  if (gear === "") return;

  if (ingot !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/gear_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      gear,
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_gear"
    );
  }

  if (gem !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/gear_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      gear,
      `#forge:gems/${name}`,
      "immersiveengineering:mold_gear"
    );
  }
};

const CreateGear = (name, gear, ingot, gem, event) => {
  if (gear === "") return;

  if (ingot !== "") {

   event.recipes.create.deploying({
    ingredients: [
      Ingredient.of(`#forge:ingots/${name}`),
      [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die")]
    ],
    results: [Item.of(gear)],
    keepHeldItem: true,
  });
  }

  if (gem !== "") {

    event.recipes.create.deploying({
      ingredients: [
        Ingredient.of(`#forge:gems/${name}`),
        [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die")]
      ],
      results: [Item.of(gear)],
      keepHeldItem: true,
    });
}
};

const thermalsGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "thermal:press",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event.recipes.thermalPress(gear, [
      `#forge:ingots/${name}`,
      "thermal:press_gear_die",
    ]);
  }

  if (gem !== "") {
    event.recipes.thermalPress(gear, [
      `#forge:gems/${name}`,
      "thermal:press_gear_die",
    ]);
  }
};

const tinkersGear = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:gears/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("gear")
    .coolingTime(60)
    .id(`unify:tconstruct/gear/multi_${name}`);
};

const minecraftGear = (name, ingot, gem, gear, event) => {
  if (gear === "") return;

  event.remove({
    type: "minecraft:crafting_shaped",
    output: `#forge:gears/${name}`,
  });

  if (ingot !== "") {
    event
      .shaped("4x " + gear, [" N ", "NIN", " N "], {
        N: `#forge:ingots/${name}`,
        I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
      })
      .id(`unify:minecraft/gear/${name}`);
  }

  if (gem !== "") {
    event
      .shaped("4x " + gear, [" N ", "NIN", " N "], {
        N: `#forge:gems/${name}`,
        I: [`minecraft:iron_nugget`, `create:zinc_nugget`, `thermal:nickel_nugget`, `thermal:tin_nugget`],
      })
      .id(`unify:minecraft/gear/${name}`);
  }
};