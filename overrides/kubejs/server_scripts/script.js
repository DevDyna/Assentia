// priority: 0


ServerEvents.recipes(event => {

//recipes removed
//output
	event.remove({output: 'minecraft:crafting_table'})
	event.remove({output: 'twilightforest:uncrafting_table'})
	event.remove({output: 'structuredcrafting:structured_crafter'})
	event.remove({output: 'extractinator:extractinator'})
	event.remove({output: 'compactcrafting:field_projector'})
	event.remove({output: 'cloudstorage:cloud_chest'})
	event.remove({output: 'minecraft:campfire'})
	event.remove({output: 'homespun:evaporating_basin'})
    event.remove({output: 'homespun:crushing_tub'})
	event.remove({output: 'create:mechanical_crafter'})
	event.remove({output: 'create:mechanical_press'})
	event.remove({output: 'entangled:item'})
	event.remove({output: 'entangled:block'})
	event.remove({output: 'evilcraft:blood_infuser'})
	event.remove({output: 'ae2:charger'})
	event.remove({output: 'storagenetwork:crafting_remote'})
//input (cause uncrafting_table)
	event.remove({input: 'minecraft:crafting_table'})
	event.remove({input: 'twilightforest:uncrafting_table'})
	event.remove({input: 'structuredcrafting:structured_crafter'})
	event.remove({input: 'extractinator:extractinator'})
	event.remove({input: 'compactcrafting:field_projector'})
	event.remove({input: 'cloudstorage:cloud_chest'})
	event.remove({input: 'minecraft:campfire'})
	event.remove({input: 'homespun:evaporating_basin'})
	event.remove({input: 'homespun:crushing_tub'})
	event.remove({input: 'create:mechanical_crafter'})
	event.remove({input: 'create:mechanical_press'})
	event.remove({input: 'entangled:item'})
	event.remove({input: 'entangled:block'})
	event.remove({input: 'evilcraft:blood_infuser'})
	event.remove({input: 'ae2:charger'})
	event.remove({input: 'storagenetwork:crafting_remote'})

//stonecutter
event.stonecutting('ae2:crafting_terminal','#forge:better_table')
event.stonecutting('storagenetwork:crafting_remote','#forge:better_table')
event.stonecutting('ae2:terminal','#forge:better_table')










  	//field_projector
	  event.shaped('8x compactcrafting:field_projector', [
    'GI ',
    'CC ',
    '   '
  ], {
    C: 'pneumaticcraft:compressed_iron_block',
	I: 'minecraft:iron_block',
    G: 'minecraft:glowstone'
  })
  
   
     	//entangled block
	  event.shaped('4x entangled:block', [
    'OO ',
    'OO ',
    '   '
  ], {
    O: 'minecraft:obsidian'
  })
   
        	//entangled block
	  event.shaped('1x entangled:item', [
    ' D ',
    'O  ',
    '   '
  ], {
    O: 'minecraft:obsidian',
	D: 'minecraft:diamond'
  })
   
   
  	//simple storage crafting terminal
	  event.shaped('1x storagenetwork:request', [
    'CCC',
    'CSC',
    'CCC'
  ], {
    C: 'cloudstorage:cloud',
    S: 'structuredcrafting:structured_crafter'
  })
  
    	//cloud chest
	  event.shaped('1x cloudstorage:cloud_chest', [
    'BC ',
    'CC ',
    '   '
  ], {
    C: 'cloudstorage:cloud',
	C: 'cloudstorage:balloon'
  })
  
      	//campfire
	  event.shaped('1x minecraft:campfire', [
    'CS ',
    'LL ',
    '   '
  ], {
    C: 'minecraft:charcoal',
	S: 'minecraft:stick',
	L: '#minecraft:logs'
  })
        	//light gray concrete powder
	  event.shaped('1x minecraft:light_gray_concrete_powder', [
    'CS ',
    'GD ',
    '   '
  ], {
    C: 'minecraft:clay_ball',
	S: '#minecraft:sand',
	G: '#forge:gravel',
	D: 'minecraft:light_gray_dye'
  })
          	//mrcrayfish station
	  event.shaped('1x cgm:workbench', [
    'II ',
    'GG ',
    '   '
  ], {
    I: 'minecraft:iron_ingot',
	G: 'minecraft:light_gray_concrete'
  })
  
	//------------------------------------------------------------------//
	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["C", "E", "C"],
					["E", "E", "E"],
					["C", "E", "C"]
					]
			},
						{
				"type": "compactcrafting:mixed", "pattern": [
					["C", "G", "C"],
					["G", "D", "G"],
					["C", "G", "C"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["C", "E", "C"],
					["E", "E", "E"],
					["C", "E", "C"]
					]
			}],
		"catalyst": { "id": 'pneumaticcraft:printed_circuit_board', "Count": 1 },
		"components": {
			"E": { "type": "compactcrafting:block", "block": 'twilightforest:hedge' },
			"C": { "type": "compactcrafting:block", "block": 'pneumaticcraft:compressed_iron_block' },
			"G": { "type": "compactcrafting:block", "block": 'minecraft:glowstone' },
			"D": { "type": "compactcrafting:block", "block": 'supplementaries:daub' }
		},
		"outputs": [{ "id": 'structuredcrafting:structured_crafter', "Count": 9 }]
	})
	//3x3 end
	//------------------------------------------------------------------//
	//2x2
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 2, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["A", "H"],
					["I", "I"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["B", "P"],
					["C", "A"]
					]
			}],
		"catalyst": { "id": 'minecraft:redstone', "Count": 1 },
		"components": {
			"P": { "type": "compactcrafting:block", "block": 'minecraft:piston' },
			"C": { "type": "compactcrafting:block", "block": 'minecraft:comparator' },
			"A": { "type": "compactcrafting:block", "block": 'minecraft:cauldron' },
			"I": { "type": "compactcrafting:block", "block": 'minecraft:chain' },
			"B": { "type": "compactcrafting:block", "block": 'minecraft:copper_block' },
			"H": { "type": "compactcrafting:block", "block": 'minecraft:hopper' }
		},
		"outputs": [{ "id": 'extractinator:extractinator', "Count": 1 }]
	})
	//2x2 end
	//------------------------------------------------------------------//	
	//2x2
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 2, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["A", "H"],
					["I", "I"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["B", "P"],
					["C", "A"]
					]
			}],
		"catalyst": { "id": 'minecraft:redstone', "Count": 1 },
		"components": {
			"P": { "type": "compactcrafting:block", "block": 'minecraft:piston' },
			"C": { "type": "compactcrafting:block", "block": 'minecraft:comparator' },
			"A": { "type": "compactcrafting:block", "block": 'minecraft:cauldron' },
			"I": { "type": "compactcrafting:block", "block": 'minecraft:chain' },
			"B": { "type": "compactcrafting:block", "block": 'minecraft:copper_block' },
			"H": { "type": "compactcrafting:block", "block": 'minecraft:hopper' }
		},
		"outputs": [{ "id": 'extractinator:extractinator', "Count": 1 }]
	})
	//2x2 end
	//------------------------------------------------------------------//	
	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{
				"type": "compactcrafting:mixed", "pattern": [
					["T", "T", "T"],
					["T", "P", "T"],
					["T", "T", "T"]
					]
			}],
		"catalyst": { "id": 'minecraft:brick', "Count": 1 },
		"components": {
			"T": { "type": "compactcrafting:block", "block": 'minecraft:terracotta' },
			"P": { "type": "compactcrafting:block", "block": 'minecraft:flower_pot' }
		},
		"outputs": [{ "id": 'homespun:evaporating_basin', "Count": 1 }]
	})
	//3x3 end
	//------------------------------------------------------------------//
	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{
				"type": "compactcrafting:mixed", "pattern": [
					["T", "T", "T"],
					["T", "P", "T"],
					["T", "T", "T"]
					]
			}],
		"catalyst": { "id": 'minecraft:brick', "Count": 1 },
		"components": {
			"T": { "type": "compactcrafting:block", "block": 'minecraft:mud_brick_slab' },
			"P": { "type": "compactcrafting:block", "block": 'minecraft:heavy_weighted_pressure_plate' }
		},
		"outputs": [{ "id": 'homespun:crushing_tub', "Count": 1 }]
	})
	//3x3 end
	//------------------------------------------------------------------//
	//2x2
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 2, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["C", "C"],
					["C", "C"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["A", "A"],
					["B", "B"]
					]
			}],
		"catalyst": { "id": 'create:brass_block', "Count": 1 },
		"components": {
			"A": { "type": "compactcrafting:block", "block": 'create:andesite_casing' },
			"B": { "type": "compactcrafting:block", "block": 'create:brass_casing' },
			"C": { "type": "compactcrafting:block", "block": 'structuredcrafting:structured_crafter' }
		},
		"outputs": [{ "id": 'create:mechanical_crafter', "Count": 1 }]
	})
	//2x2 end
	//------------------------------------------------------------------//	
		//2x2
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 2, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["S", "S"],
					["S", "S"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["I", "I"],
					["I", "I"]
					]
			}],
		"catalyst": { "id": 'alexsmobs:potted_flutter', "Count": 1 },
		"components": {
			"I": { "type": "compactcrafting:block", "block": 'twilightforest:knightmetal_block' },
			"S": { "type": "compactcrafting:block", "block": 'engineersdecor:thin_steel_pole' }
		},
		"outputs": [{ "id": 'create:mechanical_press', "Count": 1 }]
	})
	//2x2 end
	//------------------------------------------------------------------//	
	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{//top
				"type": "compactcrafting:mixed", "pattern": [
					["G","G","G"],
					["G","T","G"],
					["G","G","G"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["L","L","L"],
					["L","F","L"],
					["L","L","L"]
					]
			}],
		"catalyst": { "id": 'twilightforest:transformation_powder', "Count": 1 },
		"components": {
			"T": { "type": "compactcrafting:block", "block": 'alexsmobs:transmutation_table' },
			"G": { "type": "compactcrafting:block", "block": 'twilightforest:firefly_particle_spawner' },
		    "L": { "type": "compactcrafting:block", "block": 'twilightforest:transformation_leaves' },
			"F": { "type": "compactcrafting:block", "block": 'evilcraft:sanguinary_environmental_accumulator' }
		},
		"outputs": [{ "id": 'twilightforest:uncrafting_table', "Count": 1 }]
	})
	//3x3 end
	//------------------------------------------------------------------//	
	 	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{//top
				"type": "compactcrafting:mixed", "pattern": [
					["I","I","I"],
					["I","C","I"],
					["I","I","I"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["I","C","I"],
					["","",""],
					["","",""]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["I","I","I"],
					["I","C","I"],
					["I","I","I"]
					]
			}],
		"catalyst": { "id": 'minecraft:emerald_block', "Count": 1 },
		"components": {
			"I": { "type": "compactcrafting:block", "block": 'minecraft:iron_block' },
			"C": { "type": "compactcrafting:block", "block": 'twilightforest:fiery_block' }
		},
		"outputs": [{ "id": 'ae2:charger', "Count": 1 }]
	})
	//3x3 end
	//------------------------------------------------------------------//	
		 	//3x3
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 3, "layers": [
			{//top
				"type": "compactcrafting:mixed", "pattern": [
					["B","B","B"],
					["B","B","B"],
					["B","B","B"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B","B","B"],
					["B","F","B"],
					["B","B","B"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["B","B","B"],
					["B","B","B"],
					["B","B","B"]
					]
			}],
		"catalyst": { "id": 'evilcraft:dark_tank', "Count": 1 },
		"components": {
		    "B": { "type": "compactcrafting:block", "block": 'evilcraft:dark_brick' },
			"F": { "type": "compactcrafting:block", "block": 'twilightforest:fiery_block' }
		},
		"outputs": [{ "id": 'evilcraft:blood_infuser', "Count": 1 }]
	})
	//3x3 end
	//------------------------------------------------------------------//	 
			//2x2
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 2, "layers": [
			{
				//top
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B"],
					["B", "B"]
					]
			},
			{
				//down
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B"],
					["B", "B"]
					]
			}],
		"catalyst": { "id": 'ae2:ender_dust', "Count": 1 },
		"components": {
			"B": { "type": "compactcrafting:block", "block": 'minecraft:bone_block' }
		},
		"outputs": [{ "id": 'minecraft:skeleton_skull', "Count": 1 }]
	})
	//2x2 end
	//------------------------------------------------------------------//	
	
	//mimic transformation
	event.custom({
		  "type": "twilightforest:transformation_powder",
			"from": "minecraft:creeper",
			"reversible": false,
			"to": "artifacts:mimic"
	})
	
	

})

ServerEvents.tags('item', event => {
	//stonecutter tag
	event.add('forge:better_table','ae2:terminal')
	event.add('forge:better_table','ae2:crafting_terminal')
	event.add('forge:better_table','storagenetwork:crafting_remote')
})
