onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items')
      // 给予玩家初始物品
      event.player.give('10x thermal:copper_coin')
      event.player.give('5x minecraft:apple')
    }
  })