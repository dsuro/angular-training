const faker = require('faker');

var database = { customers: []};

/*For Customer data */
function getCustomers(){
  customers=[];
  for (let id=1; id <= 10; id++) {
    let username=faker.helpers.contextualCard().username;
    let password=faker.internet.password();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let image=faker.helpers.contextualCard().avatar;
  
    customers.push({
        "id": id,
        "username":username,
        "password":password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "image": image
    });
  }
  return customers;
}
database.customers=getCustomers();
console.log(JSON.stringify(database));