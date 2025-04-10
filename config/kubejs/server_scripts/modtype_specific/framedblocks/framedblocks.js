//Priority: 1000
/**
 * @file framedblocks.js
 * @description Recipe Framed Blocks script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
ServerEvents.recipes(event => {

  //======= Framed Inner Corner Slope =======
  modifyShapeless(event, 'framedblocks:framed_inner_corner_slope', 1,
    ['framedblocks:framed_corner_slope', 'framedblocks:framed_corner_slope', 'framedblocks:framed_corner_slope']
  )

  //======= Framed Inner Prism Corner =======
  modifyShapeless(event, 'framedblocks:framed_inner_prism_corner', 1,
    ['framedblocks:framed_prism_corner', 'framedblocks:framed_prism_corner', 'framedblocks:framed_prism_corner']
  )

  //======= Framed Cube x2 =======
  event.shaped('framedblocks:framed_cube', ['B', 'B'], {
    B: ['framedblocks:framed_slope', 'framedblocks:framed_slab', 'framedblocks:framed_panel']
  }).id('kubejs:framedblocks/recycle/framed_cube_2')

  //======= Framed Cube x4 =======
  event.shaped('framedblocks:framed_cube', ['BB', 'BB'], {
    B: ['framedblocks:framed_corner_slope', 'framedblocks:framed_prism_corner', 'framedblocks:framed_slab_edge', 'framedblocks:framed_corner_pillar', 'framedblocks:framed_trapdoor', 'framedblocks:framed_lattice_block']
  }).id('kubejs:framedblocks/recycle/framed_cube_4')

  //======= Framed Cube x8 =======
  event.shaped('framedblocks:framed_cube', ['BBB', 'B B', 'BBB'], {
    B: ['framedblocks:framed_slab_corner', 'framedblocks:framed_pressure_plate', 'framedblocks:framed_floor_board', 'framedblocks:framed_bars', 'framedblocks:framed_pane']
  }).id('kubejs:framedblocks/recycle/framed_cube_8')

  removeRecipeByID(event, [
    'framedblocks:framed_inner_corner_slope',
    'framedblocks:framed_inner_prism_corner',
    'framedblocks:framed_slope',
    'framedblocks:framed_corner_slope',
    'framedblocks:framed_prism_corner',
    'framedblocks:framed_slab',
    'framedblocks:framed_slab_edge',
    'framedblocks:framed_slab_corner',
    'framedblocks:framed_panel',
    'framedblocks:framed_corner_pillar',
    'framedblocks:framed_stairs',
    'framedblocks:framed_wall',
    'framedblocks:framed_fence',
    'framedblocks:framed_gate',
    'framedblocks:framed_trapdoor',
    'framedblocks:framed_pressure_plate',
    'framedblocks:framed_ladder',
    'framedblocks:framed_double_slope',
    'framedblocks:framed_double_corner',
    'framedblocks:framed_double_prism_corner',
    'framedblocks:framed_double_threeway_corner',
    'framedblocks:framed_floor_board',
    'framedblocks:framed_lattice_block',
    'framedblocks:framed_vertical_stairs',
    'framedblocks:framed_bars',
    'framedblocks:framed_pane'
  ])

})