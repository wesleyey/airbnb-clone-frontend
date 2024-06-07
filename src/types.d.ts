export interface IRoomPhotoPhoto {
    pk: string;
    file: string;
    description: string;
}

export interface IRoomList {
    pk: number;
    name: string;
    country: string;
    city: string;
    price: number;
    rating_average: number;
    is_owner: boolean;
    photo_set: IRoomPhotoPhoto[];
}

export interface IRoomOwner {
    name: string;
    avatar: string;
    username: string;
}

export interface IAmenity {
    name: string;
    description: string;
}

export interface IRoomDetail extends IRoomList {
    created_at: string;
    updated_at: string;
    rooms: number;
    toilets: number;
    description: string;
    address: string;
    pet_friendly: true;
    kind: string;
    is_owner: boolean;
    is_liked: boolean;
    category: {
        name: string;
        kind: string;
    };
    owner: IRoomOwner;
    amenities: IAmenity[];
}

export interface IReview {
    payload: string;
    rating_average: number;
    user: IRoomOwner;
}