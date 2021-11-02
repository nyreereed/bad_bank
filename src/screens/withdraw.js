function Withdraw() {
  return (
    <form>
      <h1 className="font-extrabold mb-5 mt-5 text-2xl">Withdraw</h1>
      <div>
        <span>Balance</span>
        <span>$753</span>
      </div>
      <label htmlFor="deposit">Deposit Amount</label>
      <input
        type="number"
        required
        id="deposit"
        name="deposit"
        defaultValue={0}
      />
      <button type="submit">Submit Deposit</button>
    </form>
  );
}

export default Withdraw;
