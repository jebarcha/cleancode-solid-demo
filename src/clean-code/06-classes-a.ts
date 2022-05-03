(() => {

    // no aplicando principio de responsabilidad unica (SRP)

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    // const newPerson = new Person('Jose', 'M', new Date(1985-10-21));
    // console.log({newPerson})

    type Role = 'User' | 'Admin';

    interface UserProps {
        name: string;
        gender: Gender;
        birthdate: Date;
        email: string;
        role: Role;
    }

    class User extends Person {

        public email: string;
        public role: Role;
        public lastAccess: Date;

        constructor( { birthdate, email, gender, name, role }: UserProps ) {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: Role;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory,lastOpenFolder,email,role,name,gender,birthdate}: UserSettingsProps) {
            super({email, role,  name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'jose@gmail.com',
        role: 'Admin',
        name: 'Jose',
        gender: 'M',
        birthdate: new Date('1984-06-15')
    });

    console.log({ userSettings });

})();