
export function AboutPolicy() {
  const policies = [
    "No refunds",
    "No order cancellations (Exchange only)",
    "50% deposit confirms your order",
    "No lay-bye",
    "No discounts"
  ];

  return (
    <section className="py-20 bg-stone-950 text-white px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Brand Policies & Info</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Welcome</h3>
                <p className="text-stone-300 mb-6 italic">"it’s taloured in your own way"</p>
                <p className="text-stone-300">Thank you for contacting Polokwane Boutique & JD Clothing. We are here to assist you.</p>
                <div className="mt-8 space-y-2 text-stone-400">
                    <p>Working hours: 08:00 - 19:00</p>
                    <p>Sunday: Off</p>
                    <p>Contact preference: WhatsApp calls / Calls preferred</p>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Important Notes</h3>
                <ul className="space-y-4">
                    {policies.map((policy, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="text-amber-500">✦</span>
                            <span className="text-stone-300">{policy}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-stone-800 text-stone-400">
                    <p className="font-bold text-white">Locations:</p>
                    <p>Measurements/Collection: 10 Devenish street</p>
                    <p>Workshop: 50 Mornach street</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
