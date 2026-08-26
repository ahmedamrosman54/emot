export function Chatbot() {
  return (
    <section id="chatbot" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/k7iGrqT77yWDzO17x0LTx"
          title="Chatbase AI assistant"
          width="100%"
          height="700"
          style={{ minHeight: "700px", border: 0 }}
          allow="microphone"
          loading="lazy"
        />
      </div>
    </section>
  );
}
