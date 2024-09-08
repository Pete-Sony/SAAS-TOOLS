import YouTubeFeed from "@/app/_components/YouTubeFeed";

export default function Home() {
    const channelId = 'UCsBjURrPoezykLs9EqgamOA'; // Fireship channel ID

    return (
        <div>
            
            <YouTubeFeed channelId={channelId} />
        </div>
    );
}