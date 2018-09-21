var Datastore = require('nedb')
  , db = new Datastore({ filename: './users.db', autoload: true });

// Adds a protocol
exports.addProtocol = function() {
  var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

db.insert(doc, function (err, newDoc) {

  if(err) {

      alert ("Error , please check your connection"); return;
  } else {
alert ("Database are very well connected..");

  }
   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});

}
