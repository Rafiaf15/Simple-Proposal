import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <Link href="/" className="btn btn-back">
        Back
      </Link>

      <section className="thank-you-card">
        <h1 className="thank-you-title">FINALLY...CIEE PACARANN WANITA INDEPENDENNNN 💙</h1>
        <p className="thank-you-copy">
          YESSSSSSSSSSSSSSSSSSSSSS, maaf yaa sebelumyaa nungguin aku lamaa...kadang buat kmu ovt atau bt gegara aku.
        </p>
      </section>
    </main>
  );
}
