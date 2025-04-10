//Priority: 1000
/**
 * @file woodcutter.js
 * @description Recipe Woodcutter script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {


  //======= Hexerei Wood Type Woodcutters =======
  HexereiWoodType.forEach((wood_type) => {
    modifyShaped(event, `hexerei:${wood_type}_woodcutter`, 1, [' A ', 'BBB'], {
      A: Item.of('immersiveengineering:sawblade', '{Damage:0}').strongNBT(),
      B: `hexerei:${wood_type}_planks`
    })
  })

})
