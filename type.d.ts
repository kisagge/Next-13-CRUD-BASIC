interface PostType {
  id: number;
  title: string;
}

interface PostDetailPageParamsType {
  params: {
    id: string;
  };
  searchParams: {
    type: string;
  };
}

interface ModifyPostPageParamsType {
  params: {
    id: string;
  };
}
