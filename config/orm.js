var connection = require('./connection.js');

function objToSql(ob) {
    var arr = [];
    var value = ob[key];
  
    for(var key in ob){
        if (Object.hasOwnProperty.call(ob, key)) {
           
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }

        arr.push(key + '=' + value);

    }    

  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };
};
  

var orm = {
    selectAll: function(tableName, cb){
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result);
           
            console.log(result);
        })
    },
    insertOne: function(tableName, column, colValue, cb){
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [tableName, column, colValue], function(err, result){
            if (err) throw err;
           
            cb(result);
            console.log(result);
        })
    },
    updateOne: function(tableName, column, condition, cb){
        //update burgers table, set devoured = true where burger name = burger input
        var queryString = `UPDATE ${tableName} SET ${objToSql(column)} WHERE ${condition}`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
           
            cb(result);
            console.log(result);
        })
    }
};

module.exports = orm;