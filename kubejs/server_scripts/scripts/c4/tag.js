onEvent('fluid.tags', event => {

event.get('kubejs:gasoline').add('createdieselgenerators:gasoline')

})

onEvent('item.tags', event => {

event.get('kubejs:c4_mechanism')
.add(KJ('calculation_mechanism'))


})
