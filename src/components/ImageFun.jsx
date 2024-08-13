
/**
 * Generates a URL for accessing a photo stored in a public directory.
 *
 * @param {string} photo - The path of the photo relative to the 'public' directory.
 * @returns {string} The full URL to access the photo.
 */
export function ImageFun(photo) {
    const apiUrl = "https://mis.kfs-hiet.edu.eg"
    // const apiUrl = "http://localhost/kfs"
    if (photo != null) {
        return `${apiUrl}/public/storage/${photo.replace('public', '')}`;
    }
}
