export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav style={{
                display: "flex",
                gap: "15px",
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderBottom: "2px solid #ddd",
                marginBottom: "20px"
            }}>
                <a href="/articles/favorite" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>
                    Улюблені статті
                </a>
                <a href="/articles/create" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>
                    Створити статтю
                </a>
            </nav>
            {children}
        </div>
    );
}
