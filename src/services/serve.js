var Datastore = require('nedb');
var path = require('path');
const { remote } = window.require('electron');
var db = new Datastore({ filename: path.join(remote.app.getPath('userData'), 'users.db'), autoload: true });
console.log(db);

// Adds a protocol
export default function init() {

  var doc = {
    hello: 'world'
    , n: 5
    , today: new Date()
    , nedbIsAwesome: true
    , notthere: null
    , notToBeSaved: undefined  // Will not be saved
    , fruits: ['apple', 'orange', 'pear']
    , infos: { name: 'nedb' }
  };
  console.log(db);
  db.insert(doc, function (err, newDoc) {
    console.log(newDoc);
    console.log(err);

    if (err) {

      alert("Error , please check your connection"); return;
    } else {
      alert("Database are very well connected..");

    }
    // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
  });

}
