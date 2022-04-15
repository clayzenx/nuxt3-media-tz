export const usePage = () => useState<number>('page', () => 1);
export const usePosts = () => useState<IPost[]>('color');
export const usePagination = () => useState<boolean>('pagination', () => true);

