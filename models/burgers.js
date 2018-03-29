module.exports = function( sequelize, DateTypes) {
    var Burger = sequelize.define("burger", { 
    burger_name: DateTypes.STRING, 
    devoured: DateTypes.BOOLEAN,
})

return Burger;

} 
