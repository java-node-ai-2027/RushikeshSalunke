 class SecureBankVault {
  #funds = 0;
  static MINIMUM_DEPOSIT = 500;

  processDeposit(amount) {
    if (amount >= SecureBankVault.MINIMUM_DEPOSIT) {
      this.#funds += amount;
      console.log(`Deposit processed: +$${amount}`);
    } else {
      console.warn(`Rejected: Deposit must be at least $${SecureBankVault.MINIMUM_DEPOSIT}`);
    }
  }

  retrieveBalance() {
    return this.#funds;
  }}