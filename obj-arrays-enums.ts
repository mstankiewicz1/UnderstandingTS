// const person: {
//   name: string,
//   age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maxymilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

if(person.role === Role.AUTHOR) {
  console.log('is author');
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [2, 'author', 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}