const ApiSnippet = () => {
  return (
    <div className="lg:w-1/2 w-full bg-void border border-steel/10 p-6 font-mono text-xs text-steel/60 relative overflow-hidden">
      {/* Version Tag */}
      <div className="absolute top-0 right-0 p-2 text-emerald/40 text-[10px]">
        LumiID API v1.2
      </div>

      {/* Request */}
      <p><span className="text-emerald font-bold">POST</span> /v1/identity/verify</p>
      <p className="pl-4 text-emerald/60">{"{"}</p>
      <p className="pl-8">"document_type": <span className="text-white">"NIN"</span>,</p>
      <p className="pl-8">"biometric_hash": <span className="text-white">"sha256:8f43..."</span>,</p>
      <p className="pl-8">"jurisdiction": <span className="text-white">"NG"</span></p>
      <p className="pl-4 text-emerald/60">{"}"}</p>

      <br />

      {/* Response */}
      <p><span className="text-highlight">200 OK</span> <span className="text-emerald/50">-- 45ms</span></p>
      <p className="pl-4 text-emerald/60">{"{"}</p>
      <p className="pl-8">"status": <span className="text-white">"verified"</span>,</p>
      <p className="pl-8">"confidence_score": <span className="text-highlight">0.99</span></p>
      <p className="pl-4 text-emerald/60">{"}"}</p>
    </div>
  );
};

export default ApiSnippet;