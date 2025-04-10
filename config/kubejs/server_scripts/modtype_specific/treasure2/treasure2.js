//Priority: 1000
/**
 * @file treasure2.js
 * @description Recipe Treasure 2 script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Guide Book =======
  event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"treasure2:treasure2_manual"}'), ['minecraft:book', 'treasure2:treasure_tool']).id(`kubejs:treasure2/treasure2_manual`)

})
