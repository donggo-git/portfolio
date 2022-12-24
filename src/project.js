class project {
    constructor(name, demoImgLink, link, codeLink, description, technologies_languages) {
        this._name = name;
        this._demoImgLink = demoImgLink;
        this._link = link;
        this._codeLink = codeLink;
        this._description = description;
        this._technologies_languages = technologies_languages;
    }
    getShorterDescription() {
        if (window.innerWidth > 1000)
            return this._description.split(' ').slice(0, 15).join(" ");
        return this._description.split(' ').slice(0, 10).join(" ");
    }
    getFullDescription() {
        return this._description
    }
}
export default project