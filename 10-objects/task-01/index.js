const users = [
   {
       username: 'David',
       status: 'online',
       lastActivity: 10
   }, {
       username: 'Lucy',
       status: 'offline',
       lastActivity: 22
   }, {
       username: 'Bob',
       status: 'online',
       lastActivity: 104
   }
]

const onlineUsers = users.filter((item) => {
   console.log(item.status)
   return item.status === 'online'
})
console.log('onlineUsers', onlineUsers)

onlineUsers.forEach(element => {
   console.log(element.username)
});

/*
const onlineUsers1 = []

users.forEach(element => {
   if (element.status === 'online') {
      console.log(element.username)
      onlineUsers1.push(element)
   }
});
console.log(onlineUsers1)
*/