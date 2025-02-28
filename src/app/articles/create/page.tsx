export default function CreateArticlePage() {
    return (
        <main style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>📝 Створення статті</h1>
            <p style={{ fontSize: "16px", color: "#666" }}>Тут можна створити нову статтю.</p>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
                <input type="text" placeholder="Заголовок статті" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }} />
                <textarea placeholder="Текст статті" rows={4} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }} />
                <button type="submit" style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }}>Додати статтю</button>
            </form>
        </main>
    );
}
