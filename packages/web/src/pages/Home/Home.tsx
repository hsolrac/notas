import Note from "@/components/Cards/Note";
import { FC } from "react";
import { notes } from "@/data/mocks/data";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {notes.map((note) => (
        <Note title={note.title} content={note.content} date={note.date} />
      ))}
    </div>
  );
};

export default Home;
