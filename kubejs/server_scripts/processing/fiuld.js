const Fiuld = (obj, event) => {
  CreateFiuldDust(obj.name, obj.dust, obj.gem, obj.ingot, obj.fluid, obj.fluid_byproduct, event);
  CreateFiuldIngot(obj.name, obj.ingot, obj.fluid, event);
  CreateFiuldNugget(obj.name, obj.nugget, obj.fluid, event);
  CreateFiuldBlock(obj.name, obj.block, obj.gem, obj.ingot, obj.fluid, event);
  CreateFiuldGem(obj.name, obj.gem, obj.fluid, event);
  TconstructFiuldGear(obj.name, obj.gear, obj.fluid, event);
};

const CreateFiuldDust = (name, dust, gem, ingot, fluid, fluid_byproduct, event) => {
  if (dust === "" || fluid === "") return;
  
  if (fluid_byproduct == "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": dust
    },
    "result": {
      "fluid": fluid,
      "amount": 90
    },
    "temperature": 500,
    "time": 30
  });

  event.recipes.createMixing([Fluid.of(fluid, 630)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()
  }

  if (fluid_byproduct !== "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
    event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": dust
			},
			"result": {
				"fluid": fluid,
				"amount": 90
			},
			"temperature": 500,
			"time": 30,
			"byproducts": [
				{
					"fluid": fluid_byproduct,
					"amount": 30
				}
			]
		});

    event.recipes.createMixing([Fluid.of(fluid, 630), Fluid.of(fluid_byproduct, 210)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()

    event.custom({
      "type": "createbigcannons:melting",
      "ingredients": [
        {
          "item": dust
        }
      ],
      "results": [
        {
          "fluid": fluid,
          "amount": 90
        },
        {
          "fluid": fluid_byproduct,
          "amount": 30
        }
      ],
      "processingTime": 180,
      "heatRequirement": "heated"
    });
  }

  if (ingot !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": dust
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 90
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });
  }

  if (gem !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": dust
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 100
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });
  }

};

const CreateFiuldIngot = (name, ingot, fluid, event) => {
  if (ingot === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": ingot
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 90
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });

};

const CreateFiuldNugget = (name, nugget, fluid, event) => {
  if (nugget === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": nugget
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 10
      }
    ],
    "processingTime": 20,
    "heatRequirement": "heated"
  });

};

const CreateFiuldBlock = (name, block, gem, ingot, fluid, event) => {
  if (block === "" || fluid === "") return;

  if (gem !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": block
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 900
      }
    ],
    "processingTime": 1620,
    "heatRequirement": "heated"
  });  
  }
  
  if (ingot !== "") {
  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": block
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 810
      }
    ],
    "processingTime": 1620,
    "heatRequirement": "heated"
  });
  }
  
};

const CreateFiuldGem = (name, gem, fluid, event) => {
  if (gem === "" || fluid === "") return;

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": gem
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 100
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });

};

const TconstructFiuldGear = (name, gear, fluid, event) => {
  if (gear === "" || fluid === "") return;

  event.remove({
    type: "tconstruct:melting",
    input: `#forge:gears/${name}`,
  });

  event.custom({
    "type": "tconstruct:melting",
    "conditions": [
      {
        "value": {
          "item": gear,
          "type": "forge:tag_empty"
        },
        "type": "forge:not"
      }
    ],
    "ingredient": {
      "item": gear
    },
    "result": {
      "fluid": fluid,
      "amount": 90
    },
    "temperature": 700,
    "time": 57
  });

};