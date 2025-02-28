"use client";  // Додайте цей рядок

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArticlesPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <main style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>📝 Список статей</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                {articles.map((article: any) => (
                    <div key={article.id} style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "15px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
                    }}>
                        <h3 style={{ marginBottom: "10px" }}>{article.title}</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>{article.body.substring(0, 80)}...</p>
                        <Link href={`/articles/${article.id}`} style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
                            Читати далі →
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
