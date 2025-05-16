import { string } from "zod";

const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP : "/sign-up",
    COLLECTION: "/collection",
    COMMUNITY: "/community",
    TAGS: "/tags",
    JOBS: "/jobs",
    ASK_QUESTION: "/ask-question",
    PROFILE: (id: string) => `/profile/${id}`,
    QUESTION: (id: string) => `/questions/${id}`,
    TAG: (id: string) => `/tags/${id}`,
    SIGN_IN_WITH_OAUTH: `signin-with-oauth`,

}

export default ROUTES;

