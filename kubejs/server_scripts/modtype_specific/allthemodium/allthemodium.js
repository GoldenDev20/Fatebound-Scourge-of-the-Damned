//Priority: 1000
/**
 * @file allthemodium.js
 * @description Recipe Allthemodium script |Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

    //======= ATM molten fluids =======
    let ATM_metal = ['allthemodium', 'unobtainium', 'vibranium', ]
    ATM_metal.forEach(ATM_metal =>
        event.custom({
            "type": "thermal:crucible",
            "ingredient": {
                "item": `allthemodium:${ATM_metal}_block`
            },
            "result": [{
                "fluid": `allthemodium:molten_${ATM_metal}`,
                "amount": 1000
            }],
            "energy": 232000
        }).id(`kubejs:molten_${ATM_metal}`)
    )
    ATM_metal.forEach(ATM_metal =>
        event.custom({
            "type": "thermal:chiller",
            "ingredients": [{
                "fluid": `allthemodium:molten_${ATM_metal}`,
                "amount": 1000
            }],
            "result": [{
                "item": `allthemodium:${ATM_metal}_block`
            }],
            "energy": 232000
        }).id(`kubejs:chilling_${ATM_metal}`)
    )

    //======= Teleport Pad =======
    modifyShaped(event, 'allthemodium:teleport_pad', 1, ['CAC', 'ABA', 'CAC'], {
        A: '#forge:ingots/flux',
        B: 'darkutils:charm_portal',
        C: '#forge:storage_blocks/vibrant_alloy'
    })

    //======= ATM ARMOR =======
    // Helper function to create armor recipes for each material
    function createArmorRecipe(material, armorPiece) {
        // Define the base armor output (example: allthemodium:allthemodium_helmet)
        const output = `allthemodium:${material}_${armorPiece}`;
        const baseArmor = armorPiece === 'helmet' ? 'minecraft:netherite_helmet' :
            armorPiece === 'chestplate' ? 'minecraft:netherite_chestplate' :
            armorPiece === 'leggings' ? 'minecraft:netherite_leggings' :
            armorPiece === 'boots' ? 'minecraft:netherite_boots' : '';

        // Define the pattern and ingredients
        const pattern = armorPiece === 'helmet' ? ['AAA', 'CBC'] :
            armorPiece === 'chestplate' ? ['CBC', 'CCC', 'AAA'] :
            armorPiece === 'leggings' ? ['AAA', 'CBC', 'C C'] :
            armorPiece === 'boots' ? ['ABA', 'C C'] : [];

        const ingredients = {
            A: `#forge:storage_blocks/${material}`,
            B: baseArmor,
            C: `#forge:ingots/${material}`
        };

        // Generate the recipe
        event.shaped(output, pattern, ingredients).id(`kubejs:${material}/${armorPiece}`);
    }

    // List of materials and armor pieces
    const materials = ['allthemodium', 'vibranium', 'unobtainium'];
    const armorPieces = ['helmet', 'chestplate', 'leggings', 'boots'];

    // Generate recipes for each material and armor piece
    materials.forEach(material => {
        armorPieces.forEach(armorPiece => {
            createArmorRecipe(material, armorPiece);
        });
    });

    //======= ATM ALLOYS INGOTS =======
    //======= Vibranium-Allthemodium Alloy Ingot =======
    //=== Helper function for Powah energizing recipes ===
    function createEnergizingRecipe(ingredient1, ingredient2, ingredient3, result, id) {
        event.custom({
            type: 'powah:energizing',
            ingredients: [
                Ingredient.of(ingredient1).toJson(),
                Ingredient.of(ingredient2).toJson(),
                Ingredient.of(ingredient3).toJson()
            ],
            energy: '7000000',
            result: Item.of(result).toJson()
        }).id(id);
    }

    //=== List of recipes to create ===
    const recipes = [{
            ingredients: ['allthemodium:allthemodium_ingot', 'allthemodium:piglich_heart', 'allthemodium:vibranium_ingot'],
            result: 'allthemodium:vibranium_allthemodium_alloy_ingot',
            id: 'kubejs:allthemodium/powah/vibranium_allthemodium_alloy_ingot'
        },
        {
            ingredients: ['allthemodium:allthemodium_ingot', 'allthemodium:piglich_heart', 'allthemodium:unobtainium_ingot'],
            result: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
            id: 'kubejs:allthemodium/powah/unobtainium_allthemodium_alloy_ingot'
        },
        {
            ingredients: ['allthemodium:vibranium_ingot', 'allthemodium:piglich_heart', 'allthemodium:unobtainium_ingot'],
            result: 'allthemodium:unobtainium_vibranium_alloy_ingot',
            id: 'kubejs:allthemodium/powah/unobtainium_vibranium_alloy_ingot'
        }
    ];

    //=== Generate all recipes ===
    recipes.forEach(recipe => {
        createEnergizingRecipe(recipe.ingredients[0], recipe.ingredients[1], recipe.ingredients[2], recipe.result, recipe.id);
    });

    //======= ATM ALLOY TOOLS =======
    //======= Sword, Pickaxe, Axe, Shovel =======
    //=== Helper function to generate common ingredients ===
    function getCommonIngredients() {
        return [
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()
        ];
    }

    function createToolRecipe(tool) {
        const commonIngredients = getCommonIngredients();
        const toolNameMapping = {
            sword: 'sword',
            pick: 'pickaxe',
            axe: 'axe',
            shovel: 'shovel'
        };
        const toolName = toolNameMapping[tool] || tool;

        // Use Array.concat() instead of spread operator for better compatibility
        const ingredients = [
            Ingredient.of(`allthemodium:vibranium_${toolName}`).toJson()
        ].concat(
            commonIngredients,
            [
                Ingredient.of(`allthemodium:allthemodium_${toolName}`).toJson(),
                Ingredient.of(`allthemodium:unobtainium_${toolName}`).toJson()
            ]
        );

        console.log(ingredients);

        event.custom({
            type: 'botania:runic_altar',
            ingredients: ingredients,
            mana: 85000,
            output: Item.of(`allthemodium:alloy_${tool}`).toJson()
        }).id(`kubejs:allthemodium/alloy_${tool}`);
    }

    const tools = ['sword', 'pick', 'axe', 'shovel'];
    tools.forEach(tool => createToolRecipe(tool));

    //======= Paxel =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('allthemodium:alloy_sword').toJson(),
            Ingredient.of('allthemodium:alloy_pick').toJson(),
            Ingredient.of('allthemodium:alloy_shovel').toJson(),
            Ingredient.of('allthemodium:alloy_axe').toJson()
        ],
        energy: '1000000000',
        result: Item.of('allthemodium:alloy_paxel').toJson()
    }).id(`kubejs:allthemodium/alloy_paxel`)

    removeRecipeByID(event, [
        'allthemodium:main/allthemodium_helmet',
        'allthemodium:main/allthemodium_chestplate',
        'allthemodium:main/allthemodium_leggings',
        'allthemodium:main/allthemodium_boots'
    ])

})