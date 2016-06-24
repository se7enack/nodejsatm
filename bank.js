#!/usr/local/bin/node

var account = {
	balance: 0,
	firstName: 'Stephen',
	lastName: 'Burke',
	phoneNumber: '6175554321',
	aid: 'FDC2B3B9-1FB5-4D97-8DF0-E9C90DEC0CAC',
	active: true
}

//deposit
function deposit(account, amount) {
	if (account.active) {
		greetUser(account)
		account.balance += amount
		console.log('Deposit Amount: ' + amount)
		newBal(account)
		console.log('\r')
	} else badStatus(account)
}

//withdraw
function withdraw(account, amount) {
	if (account.active) {
		greetUser(account)
		account.balance -= amount
		console.log('Withdraw amount: ' + amount)
		newBal(account)
		console.log('\r')
	} else badStatus(account)
}

//balance
function getBalance (account) {
	if (account.active) {
		greetUser(account)
		console.log('\r')
	} else badStatus(account)
}

//greeting
function greetUser (account) {
	console.log('\r' + 'Hello ' + account.firstName + ",")
	console.log('Your current balance is: ' + account.balance)
}

//new balance
function newBal (account) {
	console.log('New balance: ' + account.balance)
	console.log('\r')
}

//account inactive message
function badStatus (account) {
	console.log('\r')
	console.log('Account ' + account.aid + " belonging to " + account.firstName + ' ' + account.lastName + ' is currently inactive!')
	console.log('\r')
	console.log('   ****************************************************')
	console.log('   ***** Please contact the bank at (603)555-1212 *****')
	console.log('   ****************************************************')
	console.log('\r')
}

getBalance(account);

deposit(account, 250.26);

withdraw(account, 15.79);

