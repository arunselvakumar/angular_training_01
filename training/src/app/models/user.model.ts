export class UserModel {
  id: string;
  name: string;
  designation: string;

  constructor(name: string, designation: string) {
    this.name = name;
    this.designation = designation;
  }
}
