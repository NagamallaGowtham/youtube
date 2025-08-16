
const useFormatViewCount = (views) => {
    if (views < 1000) return `${views} views`;
    if (views < 1_000_000) return `${(views / 1000).toFixed(1)}K views`;
    if (views < 1_000_000_000) return `${(views / 1_000_000).toFixed(1)}M views`;
    return `${(views / 1_000_000_000).toFixed(1)}B views`;
}

export default useFormatViewCount