// priority: 0


ServerEvents.recipes(event => {

  event.remove({output: 'minecraft:crafting_table'})
  
  
  
  /*5x5
  	event.custom({
		"type": "compactcrafting:miniaturization", "recipeSize": 9, "layers": [
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B", "B", "B", "B"], 
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B", "B", "B", "B"], 
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B", "B", "B", "B"], 
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B", "B", "B", "B"], 
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"]
					]
			},
			{
				"type": "compactcrafting:mixed", "pattern": [
					["B", "B", "B", "B", "B"], 
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"],
					["B", "B", "B", "B", "B"]
					]
			}],
		"catalyst": { "id": 'minecraft:stone', "Count": 1 },
		"components": {
			"B": { "type": "compactcrafting:block", "block": 'minecraft:air' },
			"B": { "type": "compactcrafting:block", "block": 'minecraft:iron_block' }
		},
		"outputs": [{ "id": 'structurizedcrafting:structurized_crafter', "Count": 1 }]
	})

*/
})

ServerEvents.tags('item', event => {
	
})