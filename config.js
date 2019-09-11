// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: "R87AMWpu0NqMnbVvX6wedDuj0Vx8SeYx",
        client_secret: "yIS1BAcZhD7kbmoM",
        callback_url: "http://localhost:3000/api/forge/callback/oauth"
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};