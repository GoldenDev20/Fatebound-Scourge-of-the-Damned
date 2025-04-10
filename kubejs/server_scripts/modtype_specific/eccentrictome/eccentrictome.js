//Priority: 100
/**
 * @file ecentrictome.js
 * @description Recipe Eccentric Tome script|Fatebound: Scourge of the Damned
 * @license Apache-2.0
 * @author GoldenDev
 *
 * Contains original modifications.
 * This file builds upon work previously released under Apache 2.0 license.
 */
let EccentricTome = Item.of('eccentrictome:tome', {
  "eccentrictome:mods": {
    ae2: {
      0: {
        Count: 1,
        id: "'ae2:guide'"
      }
    },
    alexsmobs: {
      0: {
        Count: 1,
        id: "alexsmobs:animal_dictionary"
      }
    },
    alexscaves: {
      0: {
        Count: 1,
        id: "alexscaves:cave_book"
      }
    },
    apotheosis: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "apotheosis:apoth_chronicle"
        }
      }
    },
    ars_nouveau: {
      0: {
        Count: 1,
        id: "ars_nouveau:worn_notebook"
      }
    },
    botania: {
      0: {
        Count: 1,
        id: "botania:lexicon"
      }
    },
    blue_skies: {
      0: {
        Count: 1,
        id: "blue_skies:blue_journal"
      }
    },
    bloodmagic: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "bloodmagic:guide"
        }
      }
    },
    bigreactors: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "bigreactors:erguide"
        }
      }
    },
    buildinggadgets2: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "buildinggadgets2:buildinggadgets2book"
        }
      }
    },
    croptopia: {
      0: {
        Count: 1,
        id: "croptopia:guide"
      }
    },
    cyclic: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "cyclic:guide_book"
        }
      }
    },
    eidolon: {
      0: {
        Count: 1,
        id: "eidolon:codex"
      }
    },
    enigmaticlegacy: {
      0: {
        Count: 1,
        id: "enigmaticlegacy:the_acknowledgment"
      }
    },
    evilcraft: {
      0: {
        Count: 1,
        id: "evilcraft:origins_of_darkness"
      }
    },
    extendedcrafting: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "extendedcrafting:guide"
        }
      }
    },
    forcecraft: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "forcecraft:force_and_you"
        }
      }
    },
    forestry: {
      0: {
        Count: 1,
        id: "forestry:foresters_manual"
      }
    },
    ftbquests: {
      0: {
        Count: 1,
        id: "ftbquests:book"
      }
    },
    immersiveengineering: {
      0: {
        Count: 1,
        id: "immersiveengineering:manual"
      }
    },
    industrialforegoing: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "industrialforegoing:industrial_foregoing"
        }
      }
    },
    irons_spellbooks: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "irons_spellbooks:iss_guide_book"
        }
      }
    },
    lexicon: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "lexicon:lexicon"
        }
      }
    },
    midnight_madness: {
      0: {
        Count: 1,
        id: "midnight_madness:midnight_necronomicon"
      }
    },
    mysticalagriculture: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "mysticalagriculture:guide"
        }
      }
    },
    naturesaura: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "naturesaura:book"
        }
      }
    },
    powah: {
      0: {
        Count: 1,
        id: "powah:book"
      }
    },
    realmrpg_quests: {
      0: {
        Count: 1,
        id: "realmrpg_quests:quest_book"
      }
    },
    refstoragemanual: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "refstoragemanual:guide"
        }
      }
    },
    rftoolsbase: {
      0: {
        Count: 1,
        id: "rftoolsbase:manual"
      }
    },
    sebastrnlib: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book"
        }
      }
    },
    securitycraft: {
      0: {
        Count: 1,
        id: "securitycraft:sc_manual"
      }
    },
    simplyswords: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "simplyswords:runic_grimoire"
        }
      }
    },
    solcarrot: {
      0: {
        Count: 1,
        id: "solcarrot:food_book"
      }
    },
    tconstruct: {
      0: {
        Count: 1,
        id: "tconstruct:materials_and_you"
      }
    },
    tconstruct2: {
      0: {
        Count: 1,
        id: "tconstruct:fantastic_foundry"
      }
    },
    tconstruct3: {
      0: {
        Count: 1,
        id: "tconstruct:tinkers_gadgetry"
      }
    },
    tconstruct4: {
      0: {
        Count: 1,
        id: "tconstruct:mighty_smelting"
      }
    },
    tconstruct5: {
      0: {
        Count: 1,
        id: "tconstruct:puny_smelting"
      }
    },
    tconstruct6: {
      0: {
        Count: 1,
        id: "tconstruct:encyclopedia"
      }
    },
    treasure2: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "treasure2:treasure2_manual"
        }
      }
    },
    xpbook: {
      0: {
        Count: 1,
        id: "xpbook:xp_tome"
      }
    },
    thermal: {
      0: {
        Count: 1,
        id: "patchouli:guide_book",
        tag: {
          "patchouli:book": "thermal:guidebook"
        }
      }
    },
    vampirism: {
      0: {
        Count: 1,
        id: "guideapi_vp:vampirism-guidebook"
      }
    }
  },
  "eccentrictome:version": 1
})

ServerEvents.recipes(event => {

  event.shapeless(EccentricTome, 'minecraft:book').id('kubejs:full_tome')

})