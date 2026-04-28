import InfoPage from "@/components/InfoPage";

export const metadata = { title: "Our Story | Luv & Ker" };

export default function Page() {
  return (
    <InfoPage
      eyebrow="Our Story"
      title="A gift carried across generations"
      intro="Odo is the Twi word for love. Every bar is built on Ghanaian skincare wisdom passed from grandmother to daughter, generation to generation, and carried with care from Accra to the UK."
    >
      <h2 className="font-display text-2xl text-brand-cream">Felicia&apos;s vision</h2>
      <p>
        Felicia grew up watching her grandmother hand-press shea butter and cold-process black soap in a small kitchen in Accra. The
        recipes were never written down — they lived in the hands and memory of the women who made them. When she moved to the UK and
        could not find a soap that matched the integrity of what she grew up with, she made her own.
      </p>
      <p>
        What started as one small batch for family and friends became late evenings testing formulas, early mornings packing orders,
        and constant calls home to check every detail with the women who first taught her. Felicia did not want to build a brand that
        looked Ghanaian. She wanted to build one that stayed accountable to Ghanaian knowledge, sourcing, and community at every step.
      </p>
      <h2 className="font-display text-2xl text-brand-cream">The journey</h2>
      <p>
        The journey began in Accra, where ingredient quality was judged by touch, aroma, and freshness long before labels and lab
        terms became mainstream. It started in local markets, where families compared shea by texture and scent, and where trust in a
        maker mattered more than marketing. From there, it continued in the UK, where Felicia saw how many people with sensitive skin
        were stuck choosing between harsh products and empty promises.
      </p>
      <p>
        Odo was built to close that gap: traditional methods, transparent ingredients, and modern consistency. We work directly with
        named Ghanaian farmers for shea, coconut oil, and botanicals. We test every batch for quality and keep formulations simple,
        so customers can understand exactly what touches their skin.
      </p>
      <p>
        Today, every Odo bar is still made in small batches in Accra with the same principles that shaped the first bars: respect for
        craft, fair pay for producers, and care that extends beyond the product itself.
      </p>
      <h2 className="font-display text-2xl text-brand-cream">What we stand for</h2>
      <p>
        Pure ingredients. Honest labels. Fair pay for the women and farmers who make our products possible. Heritage over hype, and
        care over shortcuts.
      </p>
    </InfoPage>
  );
}
