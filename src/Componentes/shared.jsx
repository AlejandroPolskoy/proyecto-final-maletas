const urls = ["https://maleteo-node.vercel.app", "http://localhost:8888", "http://188.76.175.40:37404"];
export const api = urls[1];

export const formatDate = (date) => {
    return (typeof date) === "object" ? date.toLocaleDateString('en-GB') : new Date(date).toLocaleDateString('en-GB');
};