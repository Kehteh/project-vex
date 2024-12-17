import React, { useState } from "react";
import usePledge from "./usePledge";

function PledgeForm({ user }) {
  const [amount, setAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { submitPledge, isSubmitting, error } = usePledge(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitPledge(amount, isAnonymous);
    if (result) {
      alert("Pledge successful!");
      setAmount(""); // Clear the form after success
      setIsAnonymous(false); // Reset anonymous toggle
    }
  };

  if (!user) {
    return <p>You need to be logged in to pledge. <a href="/login">Log in</a></p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter pledge amount"
          required
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
        />
        Pledge anonymously
      </label>
      <button type="submit" disabled={isSubmitting}>Pledge</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default PledgeForm;