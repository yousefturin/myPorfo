import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex-column jc-c atc"
      style={{
        minHeight: "100vh",
        padding: "0 24px",
        textAlign: "center",
      }}
    >
      <span
        className="font-title-huge font-family-bold color-ink-inverse"
        style={{ lineHeight: 1 }}
      >
        404
      </span>

      <span className="font-display-large font-family-regular color-ink-inverse mt-16">
        Page not found
      </span>

      <span className="font-body-large font-family-light color-ink-inverse-60 mt-8" style={{ maxWidth: 420 }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </span>

      <Link
        href="/"
        className="font-body-medium font-family-regular mt-32"
        style={{
          height: 40,
          padding: "0 24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFBFC",
          color: "#1A1A19",
          borderRadius: 4,
          textDecoration: "none",
          transition: "all 0.2s ease-in-out",
        }}
      >
        Go back home
      </Link>
    </div>
  );
}
