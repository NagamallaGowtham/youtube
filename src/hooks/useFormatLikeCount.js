
const useFormatLikeCount = (likes) => {
    if (likes < 1000) return `${likes}`;
    if (likes < 1_000_000) return `${(likes / 1000).toFixed(1)}K`;
    if (likes < 1_000_000_000) return `${(likes / 1_000_000).toFixed(1)}M`;
    return `${(likes / 1_000_000_000).toFixed(1)}B`;
}

export default useFormatLikeCount