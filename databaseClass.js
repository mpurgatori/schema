


let data = {
    users: {
        ID1: {
            name: "Alice",
            email: "alice@email.com"
        },
        ID2: {
            name: "Bob",
            address: {city:"New York", country: "US"}
        }
    }
};






const offlineDatabase = ()=> {

    let pathObject;

    let ref = function(path) {
        pathObject = path.split("/").reduce((data,i) => data[i], data);
        return this;
    }

    let push = function(path) {

    }

    let once = function(callback) {
        callback(pathObject)
    }

    let remove = function() {
        delete data[pathObject];
    }

    return {
        ref,
        once,
        remove
    };
  };



let x = offlineDatabase();

console.log('!@!@',data)
console.log(x.ref('users/ID2/name').remove())
console.log(')()',data)
