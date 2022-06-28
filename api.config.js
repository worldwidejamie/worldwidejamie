/**
 * Site Api configuration
 **/

const { PUBLIC_CONTENT_API_KEY, ADMIN_API_KEY } = import.meta.env;

export const apiConfig = {
	apiURL: "https://ghost.worldwidejamie.com/ghost/api/content",
	contentApiKey: PUBLIC_CONTENT_API_KEY,
	adminApiKey: ADMIN_API_KEY,
};
