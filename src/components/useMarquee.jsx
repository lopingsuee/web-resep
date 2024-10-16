"use client"
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Bu diah",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
  {
    name: "Siti Aminah",
    username: "@jill",
    body: "Website ini benar-benar membantu saya dalam menyiapkan menu harian untuk keluarga. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
  {
    name: " Dewi Susanti",
    username: "@john",
    body: "Sebagai ibu yang sibuk, saya sangat terbantu dengan resep-resep cepat dan praktis di sini.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
  {
    name: " Fatimah Zahra",
    username: "@jane",
    body: "Saya senang bisa menemukan resep-resep masakan Indonesia yang otentik di sini.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
  {
    name: " Rina Putri",
    username: "@jenny",
    body: "Awalnya saya takut mencoba masakan baru, tapi dengan panduan yang jelas dan bahan-bahan yang mudah didapat.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
  {
    name: " Yulianti Sari",
    username: "@james",
    body: "Resep-resepnya sangat lengkap! Dari masakan rumahan yang sederhana sampai makanan spesial untuk acara keluarga. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SYeQLKC3QUYXaFxZLbDxM0fsH79hf91d_w&s",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-black hover:bg-gray-800",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-red-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
