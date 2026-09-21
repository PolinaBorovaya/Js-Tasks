function showName() {
	console.log(this.name);
}

const user = { 
	name: 'John',
	showName,
};

setTimeout(showName.bind(user), 100); //1

setTimeout(() => showName.call(user), 100); //2

setTimeout(function(){  //3
	showName.apply(user);
}, 100);

setTimeout(() => user.showName(), 100); //4

user.showName = showName.bind(user); //5
setTimeout(user.showName, 100);

