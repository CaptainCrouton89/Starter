"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProtectedApiButton() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callProtectedApi = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/protected", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to call protected API");
      }

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={callProtectedApi} disabled={loading} className="w-fit">
        {loading ? "Loading..." : "Call Protected API"}
      </Button>

      {error && (
        <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md">
          Error: {error}
        </div>
      )}

      {response && (
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Response:</h3>
          <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
