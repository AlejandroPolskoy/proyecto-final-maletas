const urls = ["https://maleteo-node.vercel.app", "http://localhost:8888", "http://93.90.207.31:8888"];
export const api = urls[2];

export const formatDate = (date) => {
    return (typeof date) === "object" ? date.toLocaleDateString('en-GB') : new Date(date).toLocaleDateString('en-GB');
};