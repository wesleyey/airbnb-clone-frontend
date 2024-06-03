import { FaStar, FaRegHeart } from "react-icons/fa";
import {
    Box,
    Button,
    Grid,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import Room from "../components/Room"
import { useEffect, useState } from "react";
import RoomSkeleton from "../components/RoomSkeleton";

interface IPhoto {
    pk: string;
    file: string;
    description: string;
}

interface IRoom {
    pk: number;
    name: string;
    country: string;
    city: string;
    price: number;
    rating: number;
    is_owner: boolean;
    photo_set: IPhoto[];
}

export default function Home() {
    //useState 훅을 사용하여 두 개의 상태 변수를 정의
    const [isLoading, setIsLoading] = useState(true);
    //isLoading: 초기값이 true로 설정되어 있으며, 데이터를 로딩 중인지 여부를 나타냄
    const [rooms, setRooms] = useState<IRoom[]>([]);
    //rooms: IRoom 타입의 빈 배열로 초기화되며, 방의 목록을 저장
    const fetchRooms = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/v1/rooms");
        //fetch를 사용하여 지정된 URL("http://127.0.0.1:8000/api/v1/rooms")로부터 데이터를 가져옴
        const json = await response.json();
        //응답을 JSON 형식으로 파싱
        setRooms(json);
        setIsLoading(false);
        //가져온 데이터를 rooms 상태 변수에 설정하고, 로딩 상태를 false로 변경
    };
    useEffect(() => {
        fetchRooms();
        //useEffect 훅을 사용하여 컴포넌트가 마운트될 때 fetchRooms 함수를 호출
    }, []);
    //빈 배열 []을 두 번째 인자로 전달하여, 이 훅이 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함
    return (
        <Grid
            mt={10}
            px={{
                base: 10,
                lg: 40,
            }}
            columnGap={4}
            rowGap={8}
            templateColumns={
                {
                    sm: "1fr",
                    md: "1fr 1fr",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
                    "2xl": "repeat(5, 1fr)",
                }
            }
        >
            {isLoading ? (
                <>
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                </>
            ) : null}
            {rooms.map((room) =>
            (
                <Room
                    imageUrl={room.photo_set[0].file}
                    name={room.name}
                    rating={room.rating}
                    city={room.city}
                    country={room.country}
                    price={room.price}
                />
            ))}
        </Grid>
    );

}

