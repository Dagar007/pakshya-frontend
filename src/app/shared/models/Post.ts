import { Category } from './Category';
import { Photo } from './Photo';

export interface Post{
    id: string;
    heading: string;
    description: string;
    category: Category;
    date: Date;
    photos: Photo[];
    hostId: string;
    hostDisplayName: string;
    hostImage: string;
    isAuthor: boolean;
    isPostLiked: boolean;
    noOfLikes: number;
    noOfComments: number;
}