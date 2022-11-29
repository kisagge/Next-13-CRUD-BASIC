interface NoteType {
  id: number;
  title: string;
}

interface NoteDetailPageParamsType {
  params: {
    id: string;
  };
  searchParams: {
    type: string;
  };
}
