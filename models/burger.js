var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
},
    insertOne: function(column, colValue, cb){
        orm.insertOne('burgers', column, colValue, cb, function(res){
            cb(res);
        })
    },
    updateOne: function(column, condition, cb){
        orm.updateOne('burgers', column, condition, cb, function(res){
            cb(res);
        })
    }
};

module.exports = burger;