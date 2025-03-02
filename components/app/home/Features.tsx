"use client";

import { Feature, features } from "@/utils/data/features";
import { Book, fetchBooks } from "@/state/books";
import { RiApps2AiFill } from "react-icons/ri";
import GlowCard from "@/components/ui/glow-card";
import Marquee from "react-fast-marquee";
import BookCard from "@/components/ui/book-card";
import { useState, useEffect } from "react";

export default function Features() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        if (data) {
          setBooks(data.data);
        } else {
          setError("Failed to load books.");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("An error occurred while fetching books.");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <section id="features">
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {loading ? (
            <span></span>
          ) : error ? (
            <p>{error}</p>
          ) : books.length > 0 ? (
            books.map((book) => <BookCard book={book} key={book.bookId} />)
          ) : (<p>Loading data ...</p>)}
        </Marquee>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature: Feature) => (
            <GlowCard key={feature.id} identifier={`feature-${feature.id}`}>
              <div className="p-3 relative">
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-red-500 transition-all duration-300 hover:scale-125">
                    <RiApps2AiFill size={36} color="#BF360C" />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {feature.title}
                    </p>
                    <p className="text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
