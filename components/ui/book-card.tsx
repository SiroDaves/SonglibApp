import { Book } from '@/state/books';
import { FaBookOpen, FaCommentAlt } from 'react-icons/fa';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
      key={book.bookId}>
      <div className="h-full w-full rounded-lg border border-[#BF360C] shadow-none shadow-gray-50 group-hover:border-red-500 transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <FaBookOpen size={36} color="#331900" />
          </div>
          <p className="text-primary text-sm sm:text-lg"> {book.title} </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
