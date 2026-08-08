import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    // Set fallback background early
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.backgroundColor = "#000000";

    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/images/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <style>{`
          html, body {
            background-color: #000000;
            margin: 0;
            padding: 0;
            height: 100%;
          }
        `}</style>
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000000", // fallback
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(15, 15, 15, 1) 100%), 
                              linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)`,
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(15, 15, 15, 1) 100%),
                              linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
                              url('/images/hero/home-hero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "32rem",
            padding: "2rem 1rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 1rem 0",
            }}
          >
            404
          </h1>
          <p style={{ fontSize: "1.125rem", color: "white", margin: "1rem 0" }}>
            Oops! The page you are looking for does not exist.
          </p>
          <Link href="/">
            <button
              style={{
                marginTop: "2rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#ffffff",
                color: "black",
                borderRadius: "0.5rem",
                border: "none",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#d4d4d4")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
            >
              Go back to home page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
