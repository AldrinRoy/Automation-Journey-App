class PostsPage{

    public get searchIcon() {
        return $('~action_search');
    }

    public get inputSearchText() {
        return $('~search_src_text');
    }

    public get clickOnSearchText() {
        return $('~tv_title');
    }

    public async search () {
        await this.searchIcon.click();
        await this.inputSearchText.setValue("sunt aut")
    }

    public async clickOnSearchResult() {
        await this.clickOnSearchText.click();
    }
}

export default new PostsPage();