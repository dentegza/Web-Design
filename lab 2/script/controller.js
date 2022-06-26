export default class Controller {
  constructor(outProfile, inputAcc) {
    this.outProfile = outProfile;
    this.inputAcc = inputAcc;

    if ($('#reg-sign-up').val() != null)
      document.querySelector('#reg-sign-up').addEventListener('click', (event) => this.inputAcc.registerAcc(event));

    if ($('#login-sign-in').val() != null)
      document.querySelector('#login-sign-in').addEventListener('click', (event) => this.inputAcc.loginAcc(event));

    if ($('#profile-table').val() != null) {
          this.printTable();
        }
    }

  idToHTML() {
      const id = Math.floor(Math.random() * 10000) + 1; 
      document.querySelector('#profile-id').innerHTML = this.outProfile.getId();;
  }

  emailToHTML() {
        document.querySelector('#profile-email').innerHTML = this.outProfile.getEmail();
  }

  fullNameToHTML() {
      document.querySelector('#profile-full-name').innerHTML = this.outProfile.getFullName();
  }

  dateToHTML() {
      document.querySelector('#profile-date').innerHTML = this.outProfile.getDate();
  }

  sexToHTML() {
      document.querySelector('#profile-sex').innerHTML = this.outProfile.getSex();
  }

  printTable() {
    this.idToHTML();
    this.fullNameToHTML();
    this.emailToHTML();
    this.dateToHTML();
    this.sexToHTML();
  }
}