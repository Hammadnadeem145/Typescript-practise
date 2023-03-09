class UserAccount {
    constructor(gmail, password, dob) {
        this.gmail = gmail;
        this.password = password;
        this.dob = dob;
    }
}
const user = new UserAccount("hammadnadeem145@gmil.com", "Hammad12345", 13032001);
console.log(user);
export {};
