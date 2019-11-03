declare module 'boats.js' {
    interface Bot {
        bot_id: string;
        bot_name: string;
        bot_prefix: string;
        bot_library: string;
        bot_avatar: string;
        bot_short_desc: string;
        bot_long_desc: string;
        bot_owners: string[];
        bot_invite_link: string;
        bot_support_discord: string | null;
        bot_website: string | null;
        bot_github_repo: string | null;
        bot_server_count: string;
        bot_vote_count: string;
        bot_vanity_url: string | null;
        bot_visible: '0' | '1';
        bot_in_queue: boolean;
        bot_certified: boolean;
        bot_categories: string[];
        bot_rate_one: string;
        bot_rate_two: string;
        bot_rate_three: string;
        bot_rate_four: string;
        bot_rate_five: string;
        bot_rate_average: string;
    }

    interface HasVoted {
        error: boolean;
        voted: boolean;
    }

    interface User {
        user_id: string;
        user_name: string;
        user_website: string | null;
        user_twitter: string | null;
        user_github: string | null;
        user_instagram: string | null;
        user_reddit: string | null;
        user_bio: string;
    }

    interface PostedStats {
        error: boolean;
        message: string;
    }

    export default class BoatsClient {
        constructor(token: string, version?: string);

        public token: string;
        public version: string;
        public getBot(id: string): Promise<Bot>;
        public getVoted(botID: string, userID: string): Promise<HasVoted>;
        public getUser(userID: string): Promise<User>;
        public postStats(serverCount: number, botID: string): Promise<PostedStats>;
    }
}