export class UsuarioLogin {
    constructor(user = '', pass = '') {
      this.user = user
      this.pass = pass
    }
    id = 2
    
    toJSON() {
      return {
        user: this.user,
        pass: this.pass,
      }
    }
  
    static getInstance() {
      if (!UsuarioLogin.instance) {
        UsuarioLogin.instance = new UsuarioLogin()
      }
      return UsuarioLogin.instance
    }
}
