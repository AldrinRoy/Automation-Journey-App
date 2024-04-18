class CommentsPage {

    public get searchIcon() {
        return $('~action_search');
    }

    public get firstEmail() {
        return $('//android.widget.TextView[@resource-id=\"com.myc.journeydemo:id/tv_email\"]');
    }
    public get secondEmail() {
        return $('(//android.widget.TextView[@resource-id=\"com.myc.journeydemo:id/tv_email\"])[2]');
    }

    public get thirdEmail() {
        return $('(//android.widget.TextView[@resource-id=\"com.myc.journeydemo:id/tv_email\"])[3]');
    }

    public get fourthEmail() {
        return $('(//android.widget.TextView[@resource-id=\"com.myc.journeydemo:id/tv_email\"])[4]');
    }

    public async getEmailId () {

        await this.firstEmail.getText();
        await this.secondEmail.getText();
        await this.thirdEmail.getText();
        await this.fourthEmail.getText();
    }
}

export default new CommentsPage();