// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let objTrans = {
      type: "",
      amount: 0,
      id: 0
    };
    objTrans.type = type;
    objTrans.amount = amount;
    objTrans.id = this.transactions.length;
    return objTrans;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let td = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(td);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return console.log(
        "Cнятие такой суммы не возможно, недостаточно средств"
      );
    } else {
      let tw = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(tw);
      this.balance -= amount;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let credit = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      for (let key in this.transactions[i]) {
        if (this.transactions[i][key] === type) {
          credit += this.transactions[i].amount;
        }
      }
    }
    return credit;
  }
};

account.deposit(25);
account.withdraw(7);
account.deposit(11);
account.withdraw(13);
account.deposit(15);

console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
