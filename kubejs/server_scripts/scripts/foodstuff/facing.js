onEvent('item.right_click', event => {
    if(event.item.id == "kubejs:study_tooth" && !event.player.stages.has('study_tooth')){
        event.player.stages.add('study_tooth')
        event.player.tell("你戴上了钢牙套")
        event.item.count--
        return
    }
})

onEvent('player.tick', event => {
    if(!event.player.alive && event.player.stages.has('study_tooth')){
        let loc_facing = event.player
        var mySteel_facing = event.level.createEntity("item")
        mySteel_facing.item = Item.of("kubejs:study_tooth")
        mySteel_facing.setPosition(loc_facing.x, loc_facing.y, loc_facing.z)
        mySteel_facing.spawn()
        event.player.stages.remove('study_tooth')
    }
})