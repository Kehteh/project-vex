import { useState } from "react";

function usePledge(user) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitPledge = async (amount, isAnonymous) => {
    if (!user) {
      setError("You need to be logged in to make a pledge.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/pledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount, 
          isAnonymous,
          userId: isAnonymous ? null : user.id 
        }),
      });
      if (!response.ok) throw new Error("Failed to submit pledge");
      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitPledge, isSubmitting, error };
}

export default usePledge;