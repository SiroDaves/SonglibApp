import { Book } from '@/state/books';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div
      className="w-32 h-32 flex flex-col items-center justify-center transition-transform duration-500 m-3 sm:m-5 rounded-full group relative hover:scale-110 cursor-pointer"
      key={book.bookId}
    >
      <div className="w-full h-full flex flex-col items-center justify-center rounded-full border border-[#BF360C] p-4 bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <h4 className="text-primary text-md font-semibold">
            {book.title.replace("''", "'")}
          </h4>
          <p className="text-primary text-xs">
            {book.songs} {book.subTitle}<br/>songs
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
