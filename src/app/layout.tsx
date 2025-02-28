export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
        <body>
        <nav style={{
            display: "flex",
            gap: "20px",
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderBottom: "2px solid #ddd"
        }}>
            <a href="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Головна</a>
            <a href="/articles" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Статті</a>
            <a href="/profile/settings" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Налаштування</a>
        </nav>
        {children}
        </body>
        </html>
    );
}
