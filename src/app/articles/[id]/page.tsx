"use client"; // Додайте цей рядок

import { useEffect, useState } from "react";

export default function ArticlePage({ params }: { params: { id: string } }) {
    const [article, setArticle] = useState<any>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => res.json())
            .then((data) => setArticle(data));
    }, [params.id]);

    if (!article) return <p>Завантаження...</p>;

    return (
        <main style={{ padding: "20px" }}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <a href="/articles" style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>← Назад до списку</a>
        </main>
    );
}
