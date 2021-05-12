let linkArray = {
    links : []
};

let exampleLongUrl = 'http://www.google.com';
let exampleNewUrl = 'asdoivrajj';

class Link {
    constructor(longUrlReceived, newUrlCreated){
          this.clientData = {
              id : null,
              longUrlReceived: undefined,
              newUrlCreated: undefined
          }
          this.ServerData = {
              createdAt : undefined,
              updatedAt : undefined,
              tokenAccess : null
          }
      }
};
