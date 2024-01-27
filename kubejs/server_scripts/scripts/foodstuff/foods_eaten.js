//监听吃东西的事件
onEvent('item.food_eaten', event => {
    //判断被吃掉物品的类型
    //如果是空的密封罐
    if (event.item.id == "kubejs:can_sealed") {
        //给一个铁粒
        event.player.giveInHand('minecraft:iron_nugget')
            //如果生命值小于4会死
        if (event.player.getHealth() <= 4 && !event.player.stages.has('steel_facing')){
            event.server.tell("§c" + event.player + "因为直接吃了一个未开封的罐头而死。")
            event.player.attack(4)
        }
            //如果没死就提示
        if (event.player.getHealth() > 4 && !event.player.stages.has('steel_facing')){
            event.player.tell("§c你吃了一整个未开封的罐头！")
            event.player.attack(4)
    //当有人吃完罐头，让罐头留下一个沾满油渍的空罐子
    if (event.item.id == "forge:can_opened") {
        event.player.giveInHand('kubejs:can_empty')
    }
    }}
})