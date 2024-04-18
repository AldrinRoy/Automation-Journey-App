import PostsPage from "../screenbjects/posts.page.ts";
import CommentsPage from "../screenbjects/comments.page.ts";


describe('Text Search', () => {
    it('should search for a specific text ', async () => {

        await PostsPage.search;
        await PostsPage.clickOnSearchResult;
    })
})

describe('Comment Page', () => {
    it('should get the required email id ', async () => {

        await CommentsPage.getEmailId;
    })
})