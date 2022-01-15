export class UsernameStorage {
    static instance = undefined;
  
    constructor () {
      this.username = undefined;
    }
  
    isUsernameProvided(){
      return this.username !== undefined;
    }
  
    setUsername(username) {
      this.username = username;
    }
  
    getUsername(){
      return this.username;
    }
  
    static getInstance() {
      if (UsernameStorage.instance === undefined) {
        UsernameStorage.instance =  new UsernameStorage();
      }
      return UsernameStorage.instance;
    }
  }