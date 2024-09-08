'use client'
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material'; // or Joy UI components
import { getYouTubeVideos } from '../actions/getYouTubeVideos';

const YouTubeFeed = ({ channelId }) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedVideoId, setSelectedVideoId] = useState(null); // State to hold the selected video ID

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const fetchedVideos = await getYouTubeVideos(channelId);
                setVideos(fetchedVideos);
            } catch (err) {
                console.error('Error fetching videos:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [channelId]);

    const handleVideoClick = (videoId) => {
        setSelectedVideoId(videoId); // Set the selected video ID
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Box>
            {selectedVideoId && (
                <Box sx={{ marginBottom: 2 }}>
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${selectedVideoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            )}
            {videos.map(video => (
                <Card key={video.id.videoId} sx={{ marginBottom: 2 }} onClick={() => handleVideoClick(video.id.videoId)}>
                    <CardContent>
                        <Typography variant="h6">{video.snippet.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </Typography>
                        <img 
                            src={video.snippet.thumbnails.medium.url} 
                            alt={video.snippet.title} 
                            style={{ width: '100%', marginTop: '10px' }}
                        />
                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                            {video.snippet.description.slice(0, 100)}...
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default YouTubeFeed;