module.exports = {
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/beinmedia-frontend-test/"
            : "/"
};
