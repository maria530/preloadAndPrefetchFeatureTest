console.log('#script run start');
console.time();
setTimeout(() => {
    console.log('time out');
    console.timeEnd();
}, 2000)
console.log('#script run end');
