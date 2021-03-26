function getEmails(users) {
    const newArray= [];
    for (let i=0; i<users.length; i++) {
        newArray.push(users[i].email)
    }
    return newArray
}

console.log(getEmails([ { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }, { name: 'Georg', email: 'georg@academlo.com', gender: 'Male' } ] ))