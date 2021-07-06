```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->
!memoryRep.jpg(./memoryRep.jpg);

2. Answer the following with reason:

- `user == newUser;` // output and reason --true --  because both user and newUser point to the same memory location so they will access the values by reference at the same location,hence they are equal
- `user === newUser;` // output true
- `user.name === newUser.name;` //output true -- value name is accessed by reference at the same memory location hence they are equal.
    
- `user.name == newUser.name;` //output true
- `user.sibling == newUser.sibling;` //output true
- `user.sibling === newUser.sibling;` // output true
- `user.sibling == allBrothers;` //false both are stored at different memory locations hence false.
- `user.sibling === allBrothers;`//false both are stored at different memory locations hence false.
- `brothersCopy === allBrothers;`//false both are stored at different memory locations hence false.
- `brothersCopy == allBrothers;`//false both are stored at different memory locations hence false.
- `brothersCopy == user.sibling;` //true user.sibling is assigned to brothersCopy hence they both point to same location.
- `brothersCopy === user.sibling;` //true
- `brothersCopy[0] === user.sibling[0];` //true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];`//true
